package com.portfolio.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "skills")
public class Skill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private int proficiency; // 0-100

    @Column(nullable = false)
    private String category; // e.g., "Frontend", "Backend", "Database", "Tools"

    private String icon; // Icon name for Lucide React icons, e.g., "FaJava", "FaReact"

    public Skill() {}

    public Skill(String name, int proficiency, String category, String icon) {
        this.name = name;
        this.proficiency = proficiency;
        this.category = category;
        this.icon = icon;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getProficiency() { return proficiency; }
    public void setProficiency(int proficiency) { this.proficiency = proficiency; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getIcon() { return icon; }
    public void setIcon(String icon) { this.icon = icon; }
}
