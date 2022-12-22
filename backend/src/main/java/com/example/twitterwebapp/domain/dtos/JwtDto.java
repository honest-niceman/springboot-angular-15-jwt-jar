package com.example.twitterwebapp.domain.dtos;

import java.io.Serializable;

public final class JwtDto implements Serializable {
    private final String jwt;
    private final Long id;
    private final String username;
    private final String email;
    private final String role;

    public JwtDto(String jwt,
                  Long id,
                  String username,
                  String email,
                  String role) {
        this.jwt = jwt;
        this.id = id;
        this.username = username;
        this.email = email;
        this.role = role;
    }

    public String jwt() {
        return jwt;
    }

    public Long id() {
        return id;
    }

    public String username() {
        return username;
    }

    public String email() {
        return email;
    }

    public String role() {
        return role;
    }
}
