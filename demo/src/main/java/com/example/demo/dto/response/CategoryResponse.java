package com.example.demo.dto.response;

import java.math.BigDecimal;

public record CategoryResponse(

        Long id,
        String name,
        String color,
        BigDecimal monthlyBudget

) {
}