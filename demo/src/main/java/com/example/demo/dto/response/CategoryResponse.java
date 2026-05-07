package com.example.demo.dto.response;

import java.math.BigDecimal;

public class CategoryResponse {

    private Long id;
    private String name;
    private String color;
    private BigDecimal monthlyBudget;

    public CategoryResponse(
            Long id,
            String name,
            String color,
            BigDecimal monthlyBudget
    ) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.monthlyBudget = monthlyBudget;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getColor() {
        return color;
    }

    public BigDecimal getMonthlyBudget() {
        return monthlyBudget;
    }
}