function ExpenseForm({
    formData,
    setFormData,
    categories,
    handleSubmit
}) {

    return (

        <form
            onSubmit={handleSubmit}
            className="
                bg-white
                p-6
                rounded-2xl
                shadow-sm
                border
                space-y-4
            "
        >

            <h2
                className="
                    text-xl
                    font-bold
                "
            >
                Add Expense
            </h2>

            <select
                value={formData.categoryId}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        categoryId: e.target.value
                    })
                }
                className="
                    w-full
                    border
                    p-3
                    rounded-lg
                "
            >

                <option value="">
                    Select Category
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
                type="number"
                placeholder="Amount"
                value={formData.amount}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        amount: e.target.value
                    })
                }
                className="
                    w-full
                    border
                    p-3
                    rounded-lg
                "
            />

            <input
                type="text"
                placeholder="Description"
                value={formData.description}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        description: e.target.value
                    })
                }
                className="
                    w-full
                    border
                    p-3
                    rounded-lg
                "
            />

            <input
                type="date"
                value={formData.expenseDate}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        expenseDate: e.target.value
                    })
                }
                className="
                    w-full
                    border
                    p-3
                    rounded-lg
                "
            />

            <button
                className="
                    w-full
                    bg-indigo-600
                    text-white
                    py-3
                    rounded-lg
                "
            >
                Save Expense
            </button>

        </form>
    );
}

export default ExpenseForm;