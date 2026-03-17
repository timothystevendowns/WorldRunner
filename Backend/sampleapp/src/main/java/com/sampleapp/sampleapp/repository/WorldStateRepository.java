package com.sampleapp.sampleapp.repository;
import java.util.List;
import java.util.Optional;

import com.sampleapp.sampleapp.model.WorldState;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface WorldStateRepository extends MongoRepository<WorldState, Integer> {
    Optional<WorldState> findById(Integer id);
    List<WorldState> findByNameContaining(String name);
    List<WorldState> findByStateCounter(int stateCounter);
    Optional<WorldState> findFirstByOrderByStateCounterDesc();
}