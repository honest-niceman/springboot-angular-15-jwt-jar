package com.example.twitterwebapp.domain.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;

@Data
@AllArgsConstructor
public class JwtDto implements Serializable {
    private String jwt;
    private Long id;
    private String username;
    private String email;
    private String role;
}
