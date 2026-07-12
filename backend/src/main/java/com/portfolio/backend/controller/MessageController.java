package com.portfolio.backend.controller;

import com.portfolio.backend.model.Message;
import com.portfolio.backend.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @Autowired
    private MessageRepository messageRepository;

    // Secure endpoint: only admin can view all messages
    @GetMapping
    public List<Message> getAllMessages() {
        return messageRepository.findAllByOrderByTimestampDesc();
    }

    // Public endpoint: any visitor can submit a contact message
    @PostMapping
    public ResponseEntity<Message> createMessage(@RequestBody Message message) {
        message.setTimestamp(LocalDateTime.now());
        Message savedMessage = messageRepository.save(message);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedMessage);
    }

    // Secure endpoint: only admin can delete messages from inbox
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteMessage(@PathVariable Long id) {
        return messageRepository.findById(id)
                .map(msg -> {
                    messageRepository.delete(msg);
                    return ResponseEntity.ok().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
