package com.example.demo.dto.request;

import jakarta.validation.constraints.NotBlank;

import java.math.BigDecimal;

public record UpdateCategoryRequest(

        @NotBlank(message = "Name is required")
        String name,

        String color,

        BigDecimal monthlyBudget

) {
}