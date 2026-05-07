package com.example.demo.repository.impl;

import com.example.demo.mapper.CategoryRowMapper;
import com.example.demo.model.Category;
import com.example.demo.repository.CategoryRepository;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CategoryRepositoryJdbcImpl
        implements CategoryRepository {

    private final NamedParameterJdbcTemplate jdbcTemplate;

    public CategoryRepositoryJdbcImpl(
            NamedParameterJdbcTemplate jdbcTemplate
    ) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Category> findAll() {

        String sql =
                "SELECT * " +
                        "FROM categories " +
                        "WHERE deleted_at IS NULL " +
                        "ORDER BY id DESC";

        return jdbcTemplate.query(
                sql,
                new CategoryRowMapper()
        );
    }

    @Override
    public void save(Category category) {

        String sql =
                "INSERT INTO categories(" +
                        "user_id, " +
                        "name, " +
                        "color, " +
                        "monthly_budget" +
                        ") " +
                        "VALUES(" +
                        ":userId, " +
                        ":name, " +
                        ":color, " +
                        ":monthlyBudget" +
                        ")";

        MapSqlParameterSource params =
                new MapSqlParameterSource();

        params.addValue(
                "userId",
                category.getUserId()
        );

        params.addValue(
                "name",
                category.getName()
        );

        params.addValue(
                "color",
                category.getColor()
        );

        params.addValue(
                "monthlyBudget",
                category.getMonthlyBudget()
        );

        jdbcTemplate.update(sql, params);
    }

    @Override
    public void update(
            Long id,
            Category category
    ) {

        String sql =
                "UPDATE categories " +
                        "SET " +
                        "name = :name, " +
                        "color = :color, " +
                        "monthly_budget = :monthlyBudget, " +
                        "updated_at = NOW() " +
                        "WHERE id = :id";

        MapSqlParameterSource params =
                new MapSqlParameterSource();

        params.addValue("id", id);

        params.addValue(
                "name",
                category.getName()
        );

        params.addValue(
                "color",
                category.getColor()
        );

        params.addValue(
                "monthlyBudget",
                category.getMonthlyBudget()
        );

        jdbcTemplate.update(sql, params);
    }

    @Override
    public void softDelete(Long id) {

        String sql =
                "UPDATE categories " +
                        "SET deleted_at = NOW() " +
                        "WHERE id = :id";

        MapSqlParameterSource params =
                new MapSqlParameterSource();

        params.addValue("id", id);

        jdbcTemplate.update(sql, params);
    }
}