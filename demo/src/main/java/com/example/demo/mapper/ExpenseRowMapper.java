package com.example.demo.mapper;

import com.example.demo.model.Expense;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ExpenseRowMapper
        implements RowMapper<Expense> {

    @Override
    public Expense mapRow(
            ResultSet rs,
            int rowNum
    ) throws SQLException {

        Expense expense = new Expense();

        expense.setId(rs.getLong("id"));

        expense.setUserId(
                rs.getLong("user_id")
        );

        expense.setCategoryId(
                rs.getLong("category_id")
        );

        expense.setAmount(
                rs.getBigDecimal("amount")
        );

        expense.setDescription(
                rs.getString("description")
        );

        expense.setExpenseDate(
                rs.getDate("expense_date")
                        .toLocalDate()
        );

        return expense;
    }
}