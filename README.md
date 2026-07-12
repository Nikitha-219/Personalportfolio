# 🌐 Nikitha's Personal Portfolio Website

A modern, full-stack personal portfolio website built with **React.js** on the frontend and **Spring Boot** on the backend, backed by a **MySQL** database. Features a stunning dark glassmorphism UI, JWT-secured Admin Dashboard, and fully dynamic content management.

---

## 🚀 Live Demo

| Layer | URL |
|---|---|
| Frontend (Vite Dev) | http://localhost:5173 |
| Backend API | http://localhost:8081/api |

---

## ✨ Features

- 🎨 **Premium Dark UI** — Glassmorphism design with animated gradients and micro-interactions
- 📱 **Fully Responsive** — Works seamlessly on desktop, tablet, and mobile
- 🔐 **Admin Dashboard** — JWT-secured admin panel to manage Projects, Skills, Certifications & Messages
- 💬 **Contact Form** — Visitors can send messages, stored in the database
- 🗃️ **Dynamic Content** — Projects, Skills, and Certifications are served from the backend API
- 🔁 **REST API** — Clean Spring Boot REST endpoints with Spring Security & JWT

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React.js 19 | UI framework |
| Vite 8 | Build tool & dev server |
| React Router v7 | Client-side routing |
| Axios | HTTP requests to backend |
| Lucide React | Icon library |
| Vanilla CSS | Custom styling (no Tailwind) |

### Backend
| Technology | Purpose |
|---|---|
| Java 21 | Core language |
| Spring Boot 3.2.5 | Application framework |
| Spring Security | Authentication & authorization |
| JWT (jjwt 0.11.5) | Token-based auth |
| Spring Data JPA | Database ORM |
| Hibernate | JPA implementation |
| MySQL | Relational database |
| Maven | Build & dependency management |

---

## 📁 Project Structure

```
Personal Portfolio Website/
├── frontend/                        # React.js frontend
│   ├── public/
│   │   ├── favicon.svg
│   │   └── icons.svg
│   ├── src/
│   │   ├── assets/                  # Images (profile pic, hero, etc.)
│   │   ├── components/
│   │   │   ├── Navbar.jsx           # Sticky navigation bar
│   │   │   ├── Hero.jsx             # Landing / hero section
│   │   │   ├── About.jsx            # About me + stats + interests
│   │   │   ├── Skills.jsx           # Technical & soft skills
│   │   │   ├── Education.jsx        # Academic journey (SSC → B.Tech)
│   │   │   ├── Projects.jsx         # Portfolio projects (from API)
│   │   │   ├── Certifications.jsx   # Certifications & achievements
│   │   │   ├── Contact.jsx          # Contact form (sends to API)
│   │   │   └── AdminDashboard.jsx   # Protected admin panel
│   │   ├── services/
│   │   │   └── api.js               # Axios API service layer
│   │   ├── App.jsx                  # Root component + routing
│   │   ├── main.jsx                 # React entry point
│   │   ├── index.css                # Global styles & design tokens
│   │   └── App.css                  # Component-level styles
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── backend/                         # Spring Boot backend
│   ├── src/main/java/com/portfolio/backend/
│   │   ├── BackendApplication.java  # Main entry point
│   │   ├── config/
│   │   │   └── DataSeeder.java      # Seeds default admin user on startup
│   │   ├── controller/
│   │   │   ├── AuthController.java       # POST /api/auth/login
│   │   │   ├── ProjectController.java    # CRUD /api/projects
│   │   │   ├── SkillController.java      # CRUD /api/skills
│   │   │   ├── MessageController.java    # POST/GET /api/messages
│   │   │   └── ExperienceController.java # CRUD /api/experiences
│   │   ├── model/
│   │   │   ├── User.java
│   │   │   ├── Project.java
│   │   │   ├── Skill.java
│   │   │   ├── Message.java
│   │   │   └── Experience.java
│   │   ├── repository/              # Spring Data JPA repositories
│   │   ├── dto/
│   │   │   ├── LoginRequest.java
│   │   │   └── AuthResponse.java
│   │   └── security/
│   │       ├── SecurityConfig.java         # CORS + security rules
│   │       ├── JwtUtil.java                # JWT generation & validation
│   │       ├── JwtAuthFilter.java          # JWT request filter
│   │       └── CustomUserDetailsService.java
│   ├── src/main/resources/
│   │   └── application.properties   # DB config, server port, JPA settings
│   └── pom.xml
│
├── .gitignore
└── README.md
```

---

## ⚙️ Setup & Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18+)
- [Java JDK 21](https://adoptium.net/)
- [Maven](https://maven.apache.org/) (or use the included `mvnw` wrapper)
- [MySQL](https://www.mysql.com/) (v8+)

---

### 1️⃣ Database Setup

Start your MySQL server and create the database (the app will auto-create it on first run):

```sql
CREATE DATABASE IF NOT EXISTS portfolio_db;
```

Update credentials in `backend/src/main/resources/application.properties` if needed:

```properties
spring.datasource.username=root
spring.datasource.password=root
```

---

### 2️⃣ Run the Backend

```bash
cd backend

# Using Maven wrapper (recommended)
./mvnw spring-boot:run

# OR using installed Maven
mvn spring-boot:run
```

The backend starts on **http://localhost:8081**

> On first startup, `DataSeeder.java` automatically creates a default admin user:
> - **Username:** `admin`
> - **Password:** `admin123`

---

### 3️⃣ Run the Frontend

```bash
cd frontend

# Install dependencies
npm install

# Start dev server
npm run dev
```

The frontend starts on **http://localhost:5173**

---

## 🔌 API Endpoints

### Auth
| Method | Endpoint | Access | Description |
|---|---|---|---|
| POST | `/api/auth/login` | Public | Login and receive JWT token |

### Projects
| Method | Endpoint | Access | Description |
|---|---|---|---|
| GET | `/api/projects` | Public | Get all projects |
| POST | `/api/projects` | Admin | Add a new project |
| PUT | `/api/projects/{id}` | Admin | Update a project |
| DELETE | `/api/projects/{id}` | Admin | Delete a project |

### Skills
| Method | Endpoint | Access | Description |
|---|---|---|---|
| GET | `/api/skills` | Public | Get all skills |
| POST | `/api/skills` | Admin | Add a skill |
| DELETE | `/api/skills/{id}` | Admin | Delete a skill |

### Messages (Contact Form)
| Method | Endpoint | Access | Description |
|---|---|---|---|
| POST | `/api/messages` | Public | Submit a contact message |
| GET | `/api/messages` | Admin | View all received messages |

---

## 🔐 Admin Dashboard

Access the admin panel at: **http://localhost:5173/admin**

Login with:
- **Username:** `admin`
- **Password:** `admin123`

From the dashboard you can:
- ➕ Add / ✏️ Edit / 🗑️ Delete **Projects**
- ➕ Add / 🗑️ Delete **Skills**
- ➕ Add / 🗑️ Delete **Certifications**
- 📬 View all **Contact Messages**

---

## 🎨 Design Highlights

- **Color Palette:** Deep navy background (`#080B10`) with cyan (`#00F0FF`) and purple (`#A855F7`) accents
- **Typography:** System font stack with `Inter`-style weights
- **Glassmorphism:** `backdrop-filter: blur()` panels with translucent borders
- **Animations:** Smooth CSS transitions, hover lifts, glowing progress bars
- **Layout:** CSS Grid & Flexbox with responsive breakpoints

---

## 📊 Education

| Level | Institution | Score |
|---|---|---|
| SSC (10th) | School | 80% / CGPA 8.4 |
| Intermediate (12th) | Junior College | 90.4% / CGPA 9.5 |
| B.Tech CSE | KL University | CGPA 8.7 / 10 |

---

## 🙋‍♀️ Author

**Nikitha**
- 🎓 B.Tech CSE @ KL University, Guntur, Andhra Pradesh
- 💻 Full Stack Developer (React.js + Spring Boot)
- 🐙 GitHub: [github.com/Nikitha-219](https://github.com/Nikitha-219)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
