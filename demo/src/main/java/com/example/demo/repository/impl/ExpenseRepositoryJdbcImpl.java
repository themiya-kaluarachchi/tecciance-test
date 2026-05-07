package com.example.demo.repository.impl;

import com.example.demo.mapper.ExpenseRowMapper;
import com.example.demo.model.Expense;
import com.example.demo.repository.ExpenseRepository;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import com.example.demo.dto.response.ExpenseSummaryResponse;

import java.time.LocalDate;
import java.util.List;

@Repository
public class ExpenseRepositoryJdbcImpl
        implements ExpenseRepository {

    private final NamedParameterJdbcTemplate jdbcTemplate;

    public ExpenseRepositoryJdbcImpl(
            NamedParameterJdbcTemplate jdbcTemplate
    ) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Expense> findAll(
            LocalDate from,
            LocalDate to,
            Long categoryId,
            String sortBy,
            String direction,
            int page,
            int size
    ) {

        StringBuilder sql = new StringBuilder("""

            SELECT *
            FROM expenses
            WHERE deleted_at IS NULL

        """);

        MapSqlParameterSource params =
                new MapSqlParameterSource();

        if (from != null) {

            sql.append(
                    " AND expense_date >= :from"
            );

            params.addValue("from", from);
        }

        if (to != null) {

            sql.append(
                    " AND expense_date <= :to"
            );

            params.addValue("to", to);
        }

        if (categoryId != null) {

            sql.append(
                    " AND category_id = :categoryId"
            );

            params.addValue(
                    "categoryId",
                    categoryId
            );
        }

        sql.append(
                " ORDER BY "
                        + sortBy
                        + " "
                        + direction
        );

        sql.append(
                " LIMIT :size OFFSET :offset"
        );

        params.addValue("size", size);

        params.addValue(
                "offset",
                page * size
        );

        return jdbcTemplate.query(
                sql.toString(),
                params,
                new ExpenseRowMapper()
        );
    }

    @Override
    public void save(Expense expense) {

        String sql = """

            INSERT INTO expenses(
                user_id,
                category_id,
                amount,
                description,
                expense_date
            )
            VALUES(
                :userId,
                :categoryId,
                :amount,
                :description,
                :expenseDate
            )

        """;

        MapSqlParameterSource params =
                new MapSqlParameterSource();

        params.addValue(
                "userId",
                expense.getUserId()
        );

        params.addValue(
                "categoryId",
                expense.getCategoryId()
        );

        params.addValue(
                "amount",
                expense.getAmount()
        );

        params.addValue(
                "description",
                expense.getDescription()
        );

        params.addValue(
                "expenseDate",
                expense.getExpenseDate()
        );

        jdbcTemplate.update(sql, params);
    }

    @Override
    public List<ExpenseSummaryResponse> getSummary() {

        String sql = """

        SELECT
            c.name AS category_name,
            SUM(e.amount) AS total_amount

        FROM expenses e

        INNER JOIN categories c
            ON e.category_id = c.id

        WHERE e.deleted_at IS NULL

        GROUP BY c.name

        ORDER BY total_amount DESC

    """;

        return jdbcTemplate.query(

                sql,

                (rs, rowNum) ->

                        new ExpenseSummaryResponse(

                                rs.getString(
                                        "category_name"
                                ),

                                rs.getBigDecimal(
                                        "total_amount"
                                )
                        )
        );
    }
}