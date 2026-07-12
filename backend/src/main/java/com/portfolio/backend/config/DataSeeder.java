package com.portfolio.backend.config;

import com.portfolio.backend.model.*;
import com.portfolio.backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataSeeder implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private SkillRepository skillRepository;

    @Autowired
    private ExperienceRepository experienceRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        seedAdminUser();
        seedSkills();
        seedProjects();
        seedExperience();
    }

    private void seedAdminUser() {
        if (userRepository.findByUsername("admin").isEmpty()) {
            User admin = new User(
                    "admin",
                    passwordEncoder.encode("admin123"),
                    "ROLE_ADMIN"
            );
            userRepository.save(admin);
            System.out.println("--- Seeded Admin User (username: admin, password: admin123) ---");
        }
    }

    private void seedSkills() {
        if (skillRepository.count() == 0) {
            skillRepository.saveAll(Arrays.asList(
                    // Frontend Skills
                    new Skill("React.js", 90, "Frontend", "FaReact"),
                    new Skill("JavaScript (ES6+)", 90, "Frontend", "FaJs"),
                    new Skill("HTML5 & CSS3", 95, "Frontend", "FaHtml5"),
                    new Skill("Tailwind CSS", 85, "Frontend", "FaCss3Alt"),
                    
                    // Backend Skills
                    new Skill("Java", 90, "Backend", "FaJava"),
                    new Skill("Spring Boot", 85, "Backend", "SiSpringboot"),
                    new Skill("Node.js & Express", 75, "Backend", "FaNodeJs"),
                    
                    // Database Skills
                    new Skill("MySQL", 85, "Database", "DiMysql"),
                    new Skill("MongoDB", 75, "Database", "DiMongodb"),
                    
                    // Tools / DevOps Skills
                    new Skill("Git & GitHub", 90, "Tools", "FaGithub"),
                    new Skill("Docker", 75, "Tools", "FaDocker"),
                    new Skill("Postman / REST APIs", 85, "Tools", "SiPostman")
            ));
            System.out.println("--- Seeded Skills Data ---");
        }
    }

    private void seedProjects() {
        if (projectRepository.count() == 0) {
            projectRepository.saveAll(Arrays.asList(
                    new Project(
                            "AureLoom Handloom Platform",
                            "A premium e-commerce full-stack application connecting customers directly with local handloom artisans. Features a rich glassmorphism UI, search & filter, cart service, interactive reviews, and a secure seller/artisan dashboard.",
                            "React, Spring Boot, Spring Security, JWT, MySQL",
                            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600",
                            "https://github.com/Nikitha-219/AureLoom",
                            "https://aureloom-handloom.vercel.app",
                            "Fullstack",
                            1
                    ),
                    new Project(
                            "Cloud Task Tracker API",
                            "A clean, production-grade REST API backend for enterprise task scheduling. Includes secure JWT authorization, automated priority queues, status tracking, and thorough Swagger/OpenAPI documentation.",
                            "Java, Spring Boot, JPA Hibernate, PostgreSQL, JWT",
                            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600",
                            "https://github.com/admin/task-tracker-api",
                            "",
                            "Backend",
                            2
                    ),
                    new Project(
                            "Interactive Weather Dashboard",
                            "A beautifully designed weather forecasting app presenting detailed atmospheric metrics. Features auto-locating, visual charts tracking daily temperature trends, and real-time alerts using high-performance animations.",
                            "React.js, Tailwind CSS, OpenWeather API, Chart.js",
                            "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=600",
                            "https://github.com/admin/weather-dashboard",
                            "https://weather-forecast-live.netlify.app",
                            "Frontend",
                            3
                    )
            ));
            System.out.println("--- Seeded Projects Data ---");
        }
    }

    private void seedExperience() {
        if (experienceRepository.count() == 0) {
            experienceRepository.saveAll(Arrays.asList(
                    new Experience(
                            "B.Tech in Computer Science & Engineering",
                            "XYZ Institute of Technology",
                            "2022 - 2026",
                            "Specialized in Software Engineering and Database Management Systems. Maintaining a cumulative GPA of 8.5/10. Active member of the computer programming society.",
                            "EDUCATION"
                    ),
                    new Experience(
                            "Full Stack Developer Intern",
                            "TechSolutions Inc.",
                            "Summer 2025 (3 Months)",
                            "Collaborated within an Agile team to develop backend features using Spring Boot and relational databases. Enhanced frontend UI load times by 25% through component code-splitting and asset optimization in React.",
                            "EXPERIENCE"
                    )
            ));
            System.out.println("--- Seeded Experience Data ---");
        }
    }
}
