package com.example.demo.mapper;

import com.example.demo.model.Category;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CategoryRowMapper implements RowMapper<Category> {

    @Override
    public Category mapRow(ResultSet rs, int rowNum) throws SQLException {

        Category category = new Category();

        category.setId(rs.getLong("id"));
        category.setUserId(rs.getLong("user_id"));
        category.setName(rs.getString("name"));
        category.setColor(rs.getString("color"));
        category.setMonthlyBudget(rs.getBigDecimal("monthly_budget"));

        category.setCreatedAt(
                rs.getTimestamp("created_at").toLocalDateTime()
        );

        return category;
    }
}