import React, { useState, useEffect } from 'react';
import { Mail, Plus, Trash2, Edit2, Check, X, Shield, Code, Server, MessageSquare, Layers, Lock, LogIn } from 'lucide-react';
import { authService, projectService, skillService, messageService } from '../services/api';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(authService.isAuthenticated());
  const [loginCreds, setLoginCreds] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  
  // Dashboard Tabs: 'messages', 'projects', 'skills'
  const [activeTab, setActiveTab] = useState('messages');
  
  const [messages, setMessages] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);

  // Form State
  const [projectForm, setProjectForm] = useState({
    title: '', description: '', technologies: '', imageUrl: '', githubUrl: '', liveUrl: '', category: 'Fullstack', displayOrder: 1
  });
  const [editingProjectId, setEditingProjectId] = useState(null);

  const [skillForm, setSkillForm] = useState({
    name: '', proficiency: 80, category: 'Frontend', icon: 'Code'
  });

  useEffect(() => {
    if (isAuthenticated) {
      fetchDashboardData();
    }
  }, [isAuthenticated, activeTab]);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'messages') {
        const data = await messageService.getAll();
        setMessages(data);
      } else if (activeTab === 'projects') {
        const data = await projectService.getAll();
        setProjects(data);
      } else if (activeTab === 'skills') {
        const data = await skillService.getAll();
        setSkills(data);
      }
    } catch (error) {
      console.error("Error loading admin data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      await authService.login(loginCreds.username, loginCreds.password);
      setIsAuthenticated(true);
      setLoginCreds({ username: '', password: '' });
    } catch (err) {
      setLoginError('Invalid username or password. (Default: admin/admin123)');
    }
  };

  const handleLogout = () => {
    authService.logout();
    setIsAuthenticated(false);
  };

  // --- MESSAGES ACTS ---
  const handleDeleteMessage = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    try {
      await messageService.delete(id);
      setMessages(prev => prev.filter(msg => msg.id !== id));
    } catch (err) {
      alert("Failed to delete message.");
    }
  };

  // --- PROJECTS ACTS ---
  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingProjectId) {
        await projectService.update(editingProjectId, projectForm);
        alert("Project updated successfully!");
      } else {
        await projectService.create(projectForm);
        alert("Project added successfully!");
      }
      setProjectForm({ title: '', description: '', technologies: '', imageUrl: '', githubUrl: '', liveUrl: '', category: 'Fullstack', displayOrder: 1 });
      setEditingProjectId(null);
      fetchDashboardData();
    } catch (err) {
      alert("Failed to save project.");
    }
  };

  const handleEditProjectClick = (proj) => {
    setEditingProjectId(proj.id);
    setProjectForm({
      title: proj.title,
      description: proj.description,
      technologies: proj.technologies,
      imageUrl: proj.imageUrl,
      githubUrl: proj.githubUrl,
      liveUrl: proj.liveUrl,
      category: proj.category,
      displayOrder: proj.displayOrder
    });
  };

  const handleDeleteProject = async (id) => {
    if (!window.confirm("Delete this project?")) return;
    try {
      await projectService.delete(id);
      setProjects(prev => prev.filter(p => p.id !== id));
    } catch (err) {
      alert("Failed to delete project.");
    }
  };

  // --- SKILLS ACTS ---
  const handleSkillSubmit = async (e) => {
    e.preventDefault();
    try {
      await skillService.create(skillForm);
      setSkillForm({ name: '', proficiency: 80, category: 'Frontend', icon: 'Code' });
      alert("Skill added successfully!");
      fetchDashboardData();
    } catch (err) {
      alert("Failed to add skill.");
    }
  };

  const handleDeleteSkill = async (id) => {
    if (!window.confirm("Delete this skill?")) return;
    try {
      await skillService.delete(id);
      setSkills(prev => prev.filter(s => s.id !== id));
    } catch (err) {
      alert("Failed to delete skill.");
    }
  };

  // 1. Render Login Form if NOT Authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-24 bg-[#080B10]">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-purple-500/10 blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none"></div>

        <div className="w-full max-w-md glass-panel p-8 z-10">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center mx-auto text-slate-900 font-extrabold mb-4 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              <Lock size={20} />
            </div>
            <h2 className="text-2xl font-extrabold text-white">Client Portal Login</h2>
            <p className="text-gray-400 text-sm mt-2">Enter credentials to manage portfolio items</p>
          </div>

          <form onSubmit={handleLoginSubmit} className="flex flex-col gap-5">
            {loginError && (
              <div className="p-3 text-xs font-semibold text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg">
                {loginError}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Username</label>
              <input
                type="text"
                value={loginCreds.username}
                onChange={(e) => setLoginCreds(prev => ({ ...prev, username: e.target.value }))}
                required
                placeholder="admin"
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Password</label>
              <input
                type="password"
                value={loginCreds.password}
                onChange={(e) => setLoginCreds(prev => ({ ...prev, password: e.target.value }))}
                required
                placeholder="••••••••"
                className="input-field"
              />
            </div>

            <button type="submit" className="glow-button py-4 flex items-center justify-center gap-2 font-bold mt-2">
              Login <LogIn size={16} />
            </button>
          </form>
          
          <div className="text-center mt-6 pt-4 border-t border-white/5">
            <span className="text-xs text-gray-500">Default Demo Credentials: <span className="text-cyan-400 font-semibold">admin</span> / <span className="text-cyan-400 font-semibold">admin123</span></span>
          </div>
        </div>
      </div>
    );
  }

  // 2. Render Main Admin Dashboard Panel
  return (
    <div className="min-h-screen pt-28 pb-16 px-6 bg-[#080B10]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Console */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
            paddingBottom: '24px',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            flexWrap: 'wrap',
          }}
        >
          {/* Left: Title Block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <h1
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '10px',
                fontSize: '28px',
                fontWeight: '800',
                color: 'white',
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              <Shield size={28} style={{ color: '#a78bfa', flexShrink: 0 }} />
              <span>Administrative Console</span>
            </h1>
            <p style={{ color: '#9ca3af', fontSize: '14px', margin: 0, paddingLeft: '38px' }}>
              Hello, <strong style={{ color: '#e2e8f0' }}>{authService.getUsername() || 'Admin'}</strong>. Manage your portfolio assets below.
            </p>
          </div>

          {/* Right: Exit Button */}
          <button
            onClick={handleLogout}
            className="glow-button-secondary"
            style={{
              padding: '10px 24px',
              fontSize: '12px',
              background: 'rgba(239,68,68,0.1)',
              color: '#f87171',
              border: '1px solid rgba(239,68,68,0.2)',
              flexShrink: 0,
            }}
          >
            Exit Admin Panel
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex gap-4 mb-8 pb-1 border-b border-white/5 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('messages')}
            className={`pb-3 px-2 font-bold text-sm bg-transparent border-none cursor-pointer flex items-center gap-2 transition-all ${activeTab === 'messages' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400 hover:text-white'}`}
          >
            <MessageSquare size={16} /> Recruiter Inbox ({messages.length})
          </button>
          <button 
            onClick={() => setActiveTab('projects')}
            className={`pb-3 px-2 font-bold text-sm bg-transparent border-none cursor-pointer flex items-center gap-2 transition-all ${activeTab === 'projects' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400 hover:text-white'}`}
          >
            <Layers size={16} /> Manage Projects
          </button>
          <button 
            onClick={() => setActiveTab('skills')}
            className={`pb-3 px-2 font-bold text-sm bg-transparent border-none cursor-pointer flex items-center gap-2 transition-all ${activeTab === 'skills' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400 hover:text-white'}`}
          >
            <Code size={16} /> Manage Skills
          </button>
        </div>

        {/* Loading Indicator */}
        {loading && <div className="text-center text-cyan-400 py-12">Fetching database updates...</div>}

        {!loading && (
          <div>
            {/* TABS CONTAINER 1: MESSAGES INBOX */}
            {activeTab === 'messages' && (
              <div className="flex flex-col gap-6">
                {messages.length > 0 ? (
                  messages.map(msg => (
                    <div key={msg.id} className="glass-panel p-6 relative group">
                      <button 
                        onClick={() => handleDeleteMessage(msg.id)}
                        className="absolute top-6 right-6 p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-[#080B10] cursor-pointer transition-all"
                        title="Delete Message"
                      >
                        <Trash2 size={16} />
                      </button>
                      <div className="flex flex-col gap-1 mb-4">
                        <span className="text-xs text-gray-500">{new Date(msg.timestamp).toLocaleString()}</span>
                        <h3 className="text-white text-lg font-bold">{msg.subject || 'No Subject'}</h3>
                        <p className="text-sm font-medium text-cyan-300">{msg.name} ({msg.email})</p>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap bg-white/3 p-4 rounded-lg border border-white/5">{msg.message}</p>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-16 glass-panel max-w-md mx-auto">
                    <p className="text-gray-400 italic">Recruiter inbox is completely empty.</p>
                  </div>
                )}
              </div>
            )}

            {/* TABS CONTAINER 2: PROJECTS MANAGEMENT */}
            {activeTab === 'projects' && (
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Editor Form Panel */}
                <div className="lg:col-span-2 glass-panel p-6 h-fit">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    {editingProjectId ? <Edit2 size={18} className="text-purple-400" /> : <Plus size={20} className="text-cyan-400" />}
                    {editingProjectId ? 'Edit Project' : 'Add New Project'}
                  </h3>
                  <form onSubmit={handleProjectSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Project Title</label>
                      <input
                        type="text"
                        value={projectForm.title}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, title: e.target.value }))}
                        required
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Description</label>
                      <textarea
                        value={projectForm.description}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, description: e.target.value }))}
                        required
                        rows="3"
                        className="input-field"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Technologies (Comma-separated)</label>
                      <input
                        type="text"
                        value={projectForm.technologies}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, technologies: e.target.value }))}
                        required
                        placeholder="React, Spring Boot, MySQL"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Image URL</label>
                      <input
                        type="url"
                        value={projectForm.imageUrl}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, imageUrl: e.target.value }))}
                        className="input-field"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Category</label>
                        <select
                          value={projectForm.category}
                          onChange={(e) => setProjectForm(prev => ({ ...prev, category: e.target.value }))}
                          className="input-field"
                        >
                          <option value="Fullstack">Fullstack</option>
                          <option value="Frontend">Frontend</option>
                          <option value="Backend">Backend</option>
                          <option value="Mobile">Mobile</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Display Order</label>
                        <input
                          type="number"
                          value={projectForm.displayOrder}
                          onChange={(e) => setProjectForm(prev => ({ ...prev, displayOrder: parseInt(e.target.value) || 1 }))}
                          required
                          className="input-field"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">GitHub URL</label>
                      <input
                        type="url"
                        value={projectForm.githubUrl}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, githubUrl: e.target.value }))}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Live Demo URL</label>
                      <input
                        type="url"
                        value={projectForm.liveUrl}
                        onChange={(e) => setProjectForm(prev => ({ ...prev, liveUrl: e.target.value }))}
                        className="input-field"
                      />
                    </div>

                    <div className="flex gap-3 mt-2">
                      <button type="submit" className="glow-button flex-grow py-3 text-xs font-bold">
                        {editingProjectId ? 'Save Changes' : 'Publish Project'}
                      </button>
                      {editingProjectId && (
                        <button 
                          type="button" 
                          onClick={() => {
                            setEditingProjectId(null);
                            setProjectForm({ title: '', description: '', technologies: '', imageUrl: '', githubUrl: '', liveUrl: '', category: 'Fullstack', displayOrder: 1 });
                          }}
                          className="glow-button-secondary py-3 px-4 text-xs"
                        >
                          <X size={16} />
                        </button>
                      )}
                    </div>
                  </form>
                </div>

                {/* List View Panel */}
                <div className="lg:col-span-3 flex flex-col gap-4">
                  {projects.map(proj => (
                    <div key={proj.id} className="glass-panel p-5 flex gap-4 items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img 
                          src={proj.imageUrl || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600'} 
                          alt="" 
                          className="w-16 h-16 rounded-lg object-cover bg-slate-900 border border-white/10"
                        />
                        <div>
                          <h4 className="text-white font-bold">{proj.title}</h4>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-semibold border border-cyan-500/20">{proj.category}</span>
                          <span className="text-[10px] text-gray-500 ml-2">Order: {proj.displayOrder}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleEditProjectClick(proj)}
                          className="p-2 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-purple-500 hover:text-[#080B10] cursor-pointer transition-all"
                          title="Edit"
                        >
                          <Edit2 size={14} />
                        </button>
                        <button 
                          onClick={() => handleDeleteProject(proj.id)}
                          className="p-2 rounded bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-[#080B10] cursor-pointer transition-all"
                          title="Delete"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TABS CONTAINER 3: SKILLS MANAGEMENT */}
            {activeTab === 'skills' && (
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Form editor */}
                <div className="lg:col-span-2 glass-panel p-6 h-fit">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Plus size={20} className="text-cyan-400" /> Add Skill
                  </h3>
                  <form onSubmit={handleSkillSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Skill Name</label>
                      <input
                        type="text"
                        value={skillForm.name}
                        onChange={(e) => setSkillForm(prev => ({ ...prev, name: e.target.value }))}
                        required
                        placeholder="e.g. Kotlin"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Proficiency Percentage</label>
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={skillForm.proficiency}
                        onChange={(e) => setSkillForm(prev => ({ ...prev, proficiency: parseInt(e.target.value) || 80 }))}
                        required
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Category</label>
                      <select
                        value={skillForm.category}
                        onChange={(e) => setSkillForm(prev => ({ ...prev, category: e.target.value }))}
                        className="input-field"
                      >
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="Database">Database</option>
                        <option value="Tools">Tools</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Icon ID</label>
                      <select
                        value={skillForm.icon}
                        onChange={(e) => setSkillForm(prev => ({ ...prev, icon: e.target.value }))}
                        className="input-field"
                      >
                        <option value="FaReact">React Icon</option>
                        <option value="FaJs">JavaScript Icon</option>
                        <option value="FaHtml5">HTML Icon</option>
                        <option value="FaCss3Alt">CSS Icon</option>
                        <option value="FaJava">Java Icon</option>
                        <option value="SiSpringboot">Spring Boot Icon</option>
                        <option value="FaNodeJs">Node.js Icon</option>
                        <option value="DiMysql">MySQL Icon</option>
                        <option value="DiMongodb">MongoDB Icon</option>
                        <option value="FaGithub">Github Icon</option>
                        <option value="FaDocker">Docker Icon</option>
                        <option value="SiPostman">Postman Icon</option>
                      </select>
                    </div>
                    <button type="submit" className="glow-button py-3 text-xs font-bold mt-2">
                      Add to Database
                    </button>
                  </form>
                </div>

                {/* Listing grid */}
                <div className="lg:col-span-3 flex flex-col gap-3">
                  {skills.map(s => (
                    <div key={s.id} className="glass-panel px-5 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-cyan-400 font-bold text-sm bg-white/5 p-2 rounded">{s.proficiency}%</span>
                        <div>
                          <h4 className="text-white text-sm font-semibold">{s.name}</h4>
                          <span className="text-[10px] text-gray-500 uppercase tracking-widest">{s.category}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => handleDeleteSkill(s.id)}
                        className="p-2 rounded bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-[#080B10] cursor-pointer transition-all"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;
