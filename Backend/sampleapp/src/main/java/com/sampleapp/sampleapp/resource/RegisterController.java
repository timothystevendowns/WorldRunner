package com.sampleapp.sampleapp.resource;

import java.util.Arrays;
import java.util.List;

import com.sampleapp.sampleapp.model.User;
import com.sampleapp.sampleapp.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
//@CrossOrigin(origins = "http://localhost:3000")
public class RegisterController {

    @Autowired
    private UserRepository repository;

    @PostMapping("/reg")
    public ResponseEntity<?> registerUser(@RequestBody User user) {

        boolean valid = true;

        // Validate name
        //String reg = "^([A-Z][a-z]*(\\s))+[A-Z][a-z]*$";
        //if (user.getName() == null || !user.getName().matches(reg)) {
        //    valid = false;
        //}

        // Valid values
        List<String> validClasses = Arrays.asList(
                "I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"
        );
        List<String> validDiv = Arrays.asList("A", "B", "C");
        List<String> validGender = Arrays.asList("Male", "Female");

        boolean isValidClass = validClasses.contains(user.getClasses());
        boolean isValidDiv = validDiv.contains(user.getDiv());
        boolean isValidGender = validGender.contains(user.getGender());

        if (!valid || !isValidClass || !isValidDiv || !isValidGender) {
            return ResponseEntity
                    .badRequest()
                    .body("Invalid Input");
        }

        // Save user
        User savedUser = repository.save(user);

        return ResponseEntity.ok(savedUser);
    }

    @GetMapping("/findAllUsers")
    public List<User> getAllUser() {
        return repository.findAll(Sort.by(Sort.Direction.ASC, "name"));
    }
}