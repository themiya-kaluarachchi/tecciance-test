package com.example.demo.service;

import com.example.demo.dto.request.CreateExpenseRequest;
import com.example.demo.dto.response.ExpenseResponse;
import com.example.demo.dto.response.ExpenseSummaryResponse;

import java.time.LocalDate;
import java.util.List;

public interface ExpenseService {

    List<ExpenseResponse> getAll(
            LocalDate from,
            LocalDate to,
            Long categoryId,
            String sortBy,
            String direction,
            int page,
            int size
    );

    void create(CreateExpenseRequest request);

    List<ExpenseSummaryResponse> getSummary();
}