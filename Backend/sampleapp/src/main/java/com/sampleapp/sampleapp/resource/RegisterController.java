package com.sampleapp.sampleapp.resource;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.LinkedHashMap;
import java.util.Optional;

import com.sampleapp.sampleapp.model.WorldState;
import com.sampleapp.sampleapp.repository.WorldStateRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
//@CrossOrigin(origins = "http://localhost:3000")
public class RegisterController {

    @Autowired
    private WorldStateRepository worldStateRepository;

    @GetMapping("/worldState")
    public ResponseEntity<?> getWorldState() {
        Optional<WorldState> latestWorldState = worldStateRepository.findFirstByOrderByStateCounterDesc();
        if (latestWorldState.isPresent()) {
            return ResponseEntity.ok(latestWorldState.get());
        }
        Map<String, Object> response = new LinkedHashMap<>();
        response.put("worldName", "Nimria");
        response.put("stateCounter", 0);
        Map<String, String> otherDetails = new LinkedHashMap<>();
        otherDetails.put("detail", "detail text");
        response.put("otherDetails", otherDetails);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/runWorld")
    public ResponseEntity<?> runWorld() {
        Optional<WorldState> latestWorldState = worldStateRepository.findFirstByOrderByStateCounterDesc();
        int nextStateCounter = 1;
        if (latestWorldState.isPresent()) {
            nextStateCounter = latestWorldState.get().getStateCounter() + 1;
        }
        WorldState worldStateToSave = new WorldState("Nimria", nextStateCounter);
        worldStateRepository.save(worldStateToSave);
        return ResponseEntity.ok("World run successful");
    }

}