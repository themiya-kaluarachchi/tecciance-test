package com.example.demo.controller;

import com.example.demo.dto.request.CreateCategoryRequest;
import com.example.demo.dto.response.CategoryResponse;
import com.example.demo.service.CategoryService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin("*")
public class CategoryController {

    private final CategoryService categoryService;

    public CategoryController(
            CategoryService categoryService
    ) {
        this.categoryService = categoryService;
    }

    @GetMapping
    public List<CategoryResponse> getAll() {

        return categoryService.getAll();
    }

    @PostMapping
    public void create(
            @Valid
            @RequestBody
            CreateCategoryRequest request
    ) {

        categoryService.create(request);
    }
}