import { useEffect, useState }
    from "react";

import api from "../api/axios";

import CategoryForm
    from "../components/category/CategoryForm";

import CategoryCard
    from "../components/category/CategoryCard";

function CategoriesPage() {

    const [categories, setCategories] =
        useState([]);

    const [editingId, setEditingId] =
        useState(null);

    const [formData, setFormData] =
        useState({
            name: "",
            color: "",
            monthlyBudget: ""
        });

    useEffect(() => {

        fetchCategories();

    }, []);

    async function fetchCategories() {

        try {

            const response =
                await api.get("/categories");

            setCategories(response.data);

        } catch (error) {

            console.error(error);
        }
    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            if (editingId) {

                await api.put(
                    `/categories/${editingId}`,
                    formData
                );

            } else {

                await api.post(
                    "/categories",
                    formData
                );
            }

            setFormData({
                name: "",
                color: "",
                monthlyBudget: ""
            });

            setEditingId(null);

            fetchCategories();

        } catch (error) {

            console.error(error);
        }
    }

    async function handleDelete(id) {

        try {

            await api.delete(
                `/categories/${id}`
            );

            fetchCategories();

        } catch (error) {

            console.error(error);
        }
    }

    function handleEdit(category) {

        setEditingId(category.id);

        setFormData({
            name: category.name,
            color: category.color,
            monthlyBudget:
                category.monthlyBudget
        });
    }

    function cancelEdit() {

        setEditingId(null);

        setFormData({
            name: "",
            color: "",
            monthlyBudget: ""
        });
    }

    return (

        <div className="p-10">

            <h1
                className="
                    text-3xl
                    font-bold
                    mb-8
                "
            >
                Categories
            </h1>

            <CategoryForm
                formData={formData}
                setFormData={setFormData}
                handleSubmit={handleSubmit}
                editingId={editingId}
                cancelEdit={cancelEdit}
            />

            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                    gap-6
                "
            >

                {
                    categories.map(category => (

                        <CategoryCard
                            key={category.id}
                            category={category}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    ))
                }

            </div>

        </div>
    );
}

export default CategoriesPage;