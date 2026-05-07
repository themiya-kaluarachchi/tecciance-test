function ExpenseFilters({
    filters,
    setFilters,
    categories,
    fetchExpenses
}) {

    return (

        <div
            className="
                bg-white
                p-5
                rounded-2xl
                shadow-sm
                border
                flex
                gap-4
            "
        >

            <select
                value={filters.categoryId}
                onChange={(e) =>
                    setFilters({
                        ...filters,
                        categoryId: e.target.value
                    })
                }
                className="
                    border
                    p-2
                    rounded-lg
                "
            >

                <option value="">
                    All Categories
                </option>

                {
                    categories.map(category => (

                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))
                }

            </select>

            <input
                type="date"
                value={filters.from}
                onChange={(e) =>
                    setFilters({
                        ...filters,
                        from: e.target.value
                    })
                }
                className="
                    border
                    p-2
                    rounded-lg
                "
            />

            <input
                type="date"
                value={filters.to}
                onChange={(e) =>
                    setFilters({
                        ...filters,
                        to: e.target.value
                    })
                }
                className="
                    border
                    p-2
                    rounded-lg
                "
            />

            <button
                onClick={fetchExpenses}
                className="
                    bg-gray-900
                    text-white
                    px-4
                    rounded-lg
                "
            >
                Filter
            </button>

        </div>
    );
}

export default ExpenseFilters;