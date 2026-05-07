package com.example.demo.dto.response;

import java.math.BigDecimal;

public class ExpenseSummaryResponse {

    private String categoryName;

    private BigDecimal totalAmount;

    public ExpenseSummaryResponse(
            String categoryName,
            BigDecimal totalAmount
    ) {
        this.categoryName = categoryName;
        this.totalAmount = totalAmount;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public BigDecimal getTotalAmount() {
        return totalAmount;
    }
}