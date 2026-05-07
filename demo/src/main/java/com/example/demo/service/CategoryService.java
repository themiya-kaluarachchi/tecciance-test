package com.example.demo.service;

import com.example.demo.dto.request.CreateCategoryRequest;
import com.example.demo.dto.response.CategoryResponse;
import com.example.demo.dto.request.UpdateCategoryRequest;

import java.util.List;

public interface CategoryService {

    List<CategoryResponse> getAll();

    void create(CreateCategoryRequest request);

    void update(
            Long id,
            UpdateCategoryRequest request
    );

    void delete(Long id);
}
