package com.example.demo.service.impl;

import com.example.demo.dto.request.CreateExpenseRequest;
import com.example.demo.dto.response.ExpenseResponse;
import com.example.demo.model.Expense;
import com.example.demo.repository.ExpenseRepository;
import com.example.demo.service.ExpenseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.example.demo.dto.response.ExpenseSummaryResponse;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ExpenseServiceImpl
        implements ExpenseService {

    private final ExpenseRepository expenseRepository;

    @Override
    public List<ExpenseResponse> getAll(
            LocalDate from,
            LocalDate to,
            Long categoryId,
            String sortBy,
            String direction,
            int page,
            int size
    ) {

        return expenseRepository.findAll(
                        from,
                        to,
                        categoryId,
                        sortBy,
                        direction,
                        page,
                        size
                )
                .stream()
                .map(expense -> new ExpenseResponse(
                        expense.getId(),
                        "",
                        expense.getAmount(),
                        expense.getDescription(),
                        expense.getExpenseDate()
                ))
                .toList();
    }

    @Override
    public void create(
            CreateExpenseRequest request
    ) {

        Expense expense = new Expense();

        expense.setUserId(1L);

        expense.setCategoryId(
                request.getCategoryId()
        );

        expense.setAmount(
                request.getAmount()
        );

        expense.setDescription(
                request.getDescription()
        );

        expense.setExpenseDate(
                request.getExpenseDate()
        );

        expenseRepository.save(expense);
    }

    @Override
    public List<ExpenseSummaryResponse> getSummary() {

        return expenseRepository.getSummary();
    }
}