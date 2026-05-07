package com.example.demo.service.impl;

import com.example.demo.model.Category;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.service.CategoryService;
import com.example.demo.dto.request.CreateCategoryRequest;
import com.example.demo.dto.request.UpdateCategoryRequest;
import com.example.demo.dto.response.CategoryResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryServiceImpl(
            CategoryRepository categoryRepository
    ) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public List<CategoryResponse> getAll() {

        return categoryRepository.findAll()
                .stream()
                .map(category -> new CategoryResponse(
                        category.getId(),
                        category.getName(),
                        category.getColor(),
                        category.getMonthlyBudget()
                ))
                .toList();
    }

    @Override
    public void create(CreateCategoryRequest request) {

        Category category = new Category();

        category.setUserId(1L);

        category.setName(request.getName());
        category.setColor(request.getColor());
        category.setMonthlyBudget(request.getMonthlyBudget());

        categoryRepository.save(category);
    }

    @Override
    public void update(
            Long id,
            UpdateCategoryRequest request
    ) {

        Category category = new Category();

        category.setName(request.getName());

        category.setColor(request.getColor());

        category.setMonthlyBudget(
                request.getMonthlyBudget()
        );

        categoryRepository.update(id, category);
    }

    @Override
    public void delete(Long id) {

        categoryRepository.softDelete(id);
    }
}