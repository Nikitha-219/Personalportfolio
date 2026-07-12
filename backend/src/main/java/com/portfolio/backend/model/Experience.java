package com.portfolio.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "experience")
public class Experience {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title; // Role / Degree

    @Column(nullable = false)
    private String company; // Company / Institution

    @Column(nullable = false)
    private String duration; // e.g. "2023 - Present"

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private String type; // "EXPERIENCE" or "EDUCATION"

    public Experience() {}

    public Experience(String title, String company, String duration, String description, String type) {
        this.title = title;
        this.company = company;
        this.duration = duration;
        this.description = description;
        this.type = type;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }

    public String getDuration() { return duration; }
    public void setDuration(String duration) { this.duration = duration; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
}
