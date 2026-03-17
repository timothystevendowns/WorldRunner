package com.worldrunner.worldrunner.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "worldStates")
public class WorldState {

    @Id
    private String id;

    private String name;
    private int stateCounter;

    public WorldState() {
    }

    public WorldState(String name, int stateCounter) {
        this.name = name;
        this.stateCounter = stateCounter;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getStateCounter() {
        return stateCounter;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setStateCounter(int stateCounter) {
        this.stateCounter = stateCounter;
    }
}