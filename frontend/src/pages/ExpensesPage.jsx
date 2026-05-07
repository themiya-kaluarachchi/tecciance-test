import { useEffect, useState } from "react";

import api from "../api/axios";

import SummaryCards
    from "../components/expense/SummaryCards";

import ExpenseForm
    from "../components/expense/ExpenseForm";

import ExpenseFilters
    from "../components/expense/ExpenseFilters";

import ExpenseList
    from "../components/expense/ExpenseList";

function ExpensesPage() {

    const [expenses, setExpenses] =
        useState([]);

    const [summary, setSummary] =
        useState([]);

    const [categories, setCategories] =
        useState([]);

    const [page, setPage] =
        useState(0);

    const [formData, setFormData] =
        useState({
            categoryId: "",
            amount: "",
            description: "",
            expenseDate: ""
        });

    const [filters, setFilters] =
        useState({
            categoryId: "",
            from: "",
            to: ""
        });

    useEffect(() => {

        fetchExpenses();

        fetchCategories();

        fetchSummary();

    }, [page]);

    async function fetchExpenses() {

        try {

            let url =
                `/expenses?page=${page}&size=5`;

            if (filters.categoryId) {

                url +=
                    `&categoryId=${filters.categoryId}`;
            }

            if (filters.from) {

                url +=
                    `&from=${filters.from}`;
            }

            if (filters.to) {

                url +=
                    `&to=${filters.to}`;
            }

            const response =
                await api.get(url);

            setExpenses(response.data);

        } catch (error) {

            console.error(error);
        }
    }

    async function fetchCategories() {

        try {

            const response =
                await api.get("/categories");

            setCategories(response.data);

        } catch (error) {

            console.error(error);
        }
    }

    async function fetchSummary() {

        try {

            const response =
                await api.get(
                    "/expenses/summary"
                );

            setSummary(response.data);

        } catch (error) {

            console.error(error);
        }
    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            await api.post(
                "/expenses",
                formData
            );

            setFormData({
                categoryId: "",
                amount: "",
                description: "",
                expenseDate: ""
            });

            fetchExpenses();

            fetchSummary();

        } catch (error) {

            console.error(error);
        }
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
                Expenses Dashboard
            </h1>

            <SummaryCards
                summary={summary}
            />

            <div
                className="
                    grid
                    grid-cols-1
                    lg:grid-cols-3
                    gap-8
                "
            >

                <div className="lg:col-span-1">

                    <ExpenseForm
                        formData={formData}
                        setFormData={setFormData}
                        categories={categories}
                        handleSubmit={handleSubmit}
                    />

                </div>

                <div
                    className="
                        lg:col-span-2
                        space-y-6
                    "
                >

                    <ExpenseFilters
                        filters={filters}
                        setFilters={setFilters}
                        categories={categories}
                        fetchExpenses={fetchExpenses}
                    />

                    <ExpenseList
                        expenses={expenses}
                    />

                    {/* PAGINATION */}

                    <div
                        className="
                            flex
                            justify-between
                            items-center
                            bg-white
                            p-4
                            rounded-xl
                            border
                        "
                    >

                        <p
                            className="
                                text-sm
                                text-gray-500
                            "
                        >
                            Page {page + 1}
                        </p>

                        <div className="flex gap-2">

                            <button
                                onClick={() =>
                                    setPage(page - 1)
                                }
                                disabled={page === 0}
                                className="
                                    bg-gray-200
                                    px-4
                                    py-2
                                    rounded-lg
                                    disabled:opacity-50
                                "
                            >
                                Prev
                            </button>

                            <button
                                onClick={() =>
                                    setPage(page + 1)
                                }
                                disabled={
                                    expenses.length < 5
                                }
                                className="
                                    bg-gray-900
                                    text-white
                                    px-4
                                    py-2
                                    rounded-lg
                                    disabled:opacity-50
                                "
                            >
                                Next
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ExpensesPage;