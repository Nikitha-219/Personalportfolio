import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to attach JWT token dynamically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('portfolio_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const authService = {
  login: async (username, password) => {
    const response = await api.post('/auth/login', { username, password });
    if (response.data.token) {
      localStorage.setItem('portfolio_token', response.data.token);
      localStorage.setItem('portfolio_username', response.data.username);
    }
    return response.data;
  },
  logout: () => {
    localStorage.removeItem('portfolio_token');
    localStorage.removeItem('portfolio_username');
  },
  isAuthenticated: () => {
    return !!localStorage.getItem('portfolio_token');
  },
  getUsername: () => {
    return localStorage.getItem('portfolio_username');
  }
};

export const projectService = {
  getAll: async () => {
    const response = await api.get('/projects');
    return response.data;
  },
  getById: async (id) => {
    const response = await api.get(`/projects/${id}`);
    return response.data;
  },
  create: async (projectData) => {
    const response = await api.post('/projects', projectData);
    return response.data;
  },
  update: async (id, projectData) => {
    const response = await api.put(`/projects/${id}`, projectData);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/projects/${id}`);
    return response.data;
  }
};

export const skillService = {
  getAll: async () => {
    const response = await api.get('/skills');
    return response.data;
  },
  create: async (skillData) => {
    const response = await api.post('/skills', skillData);
    return response.data;
  },
  update: async (id, skillData) => {
    const response = await api.put(`/skills/${id}`, skillData);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/skills/${id}`);
    return response.data;
  }
};

export const experienceService = {
  getAll: async () => {
    const response = await api.get('/experience');
    return response.data;
  },
  create: async (expData) => {
    const response = await api.post('/experience', expData);
    return response.data;
  },
  update: async (id, expData) => {
    const response = await api.put(`/experience/${id}`, expData);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/experience/${id}`);
    return response.data;
  }
};

export const messageService = {
  getAll: async () => {
    const response = await api.get('/messages');
    return response.data;
  },
  submit: async (messageData) => {
    const response = await api.post('/messages', messageData);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/messages/${id}`);
    return response.data;
  }
};

export default api;
