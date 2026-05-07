package com.example.demo.controller;

import com.example.demo.dto.request.CreateExpenseRequest;
import com.example.demo.dto.response.ExpenseResponse;
import com.example.demo.service.ExpenseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.example.demo.dto.response.ExpenseSummaryResponse;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/expenses")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ExpenseController {

    private final ExpenseService expenseService;

    @GetMapping
    public List<ExpenseResponse> getAll(

            @RequestParam(required = false)
            LocalDate from,

            @RequestParam(required = false)
            LocalDate to,

            @RequestParam(required = false)
            Long categoryId,

            @RequestParam(defaultValue = "expense_date")
            String sortBy,

            @RequestParam(defaultValue = "DESC")
            String direction,

            @RequestParam(defaultValue = "0")
            int page,

            @RequestParam(defaultValue = "5")
            int size
    ) {

        return expenseService.getAll(
                from,
                to,
                categoryId,
                sortBy,
                direction,
                page,
                size
        );
    }

    @PostMapping
    public void create(
            @RequestBody
            CreateExpenseRequest request
    ) {

        expenseService.create(request);
    }

    @GetMapping("/summary")
    public List<ExpenseSummaryResponse> getSummary() {

        return expenseService.getSummary();
    }
}