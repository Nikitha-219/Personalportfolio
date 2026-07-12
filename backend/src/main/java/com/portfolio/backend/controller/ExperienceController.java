package com.portfolio.backend.controller;

import com.portfolio.backend.model.Experience;
import com.portfolio.backend.repository.ExperienceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/experience")
public class ExperienceController {

    @Autowired
    private ExperienceRepository experienceRepository;

    @GetMapping
    public List<Experience> getAllExperience() {
        return experienceRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Experience> createExperience(@RequestBody Experience experience) {
        Experience savedExperience = experienceRepository.save(experience);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedExperience);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Experience> updateExperience(@PathVariable Long id, @RequestBody Experience expDetails) {
        return experienceRepository.findById(id)
                .map(existingExp -> {
                    existingExp.setTitle(expDetails.getTitle());
                    existingExp.setCompany(expDetails.getCompany());
                    existingExp.setDuration(expDetails.getDuration());
                    existingExp.setDescription(expDetails.getDescription());
                    existingExp.setType(expDetails.getType());
                    
                    Experience updatedExp = experienceRepository.save(existingExp);
                    return ResponseEntity.ok(updatedExp);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteExperience(@PathVariable Long id) {
        return experienceRepository.findById(id)
                .map(exp -> {
                    experienceRepository.delete(exp);
                    return ResponseEntity.ok().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
