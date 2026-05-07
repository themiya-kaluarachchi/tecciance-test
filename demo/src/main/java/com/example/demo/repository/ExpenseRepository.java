package com.example.demo.repository;

import com.example.demo.model.Expense;
import com.example.demo.dto.response.ExpenseSummaryResponse;
import java.time.LocalDate;
import java.util.List;

public interface ExpenseRepository {

    List<Expense> findAll(
            LocalDate from,
            LocalDate to,
            Long categoryId,
            String sortBy,
            String direction,
            int page,
            int size
    );

    void save(Expense expense);

    List<ExpenseSummaryResponse> getSummary();
}