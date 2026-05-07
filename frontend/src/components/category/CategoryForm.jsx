function CategoryForm({
    formData,
    setFormData,
    handleSubmit,
    editingId,
    cancelEdit
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
                mb-10
                flex
                gap-4
            "
        >

            <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        name: e.target.value
                    })
                }
                className="
                    border
                    p-3
                    rounded-lg
                    flex-1
                "
            />

            <input
                type="text"
                placeholder="#000000"
                value={formData.color}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        color: e.target.value
                    })
                }
                className="
                    border
                    p-3
                    rounded-lg
                "
            />

            <input
                type="number"
                placeholder="Budget"
                value={formData.monthlyBudget}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        monthlyBudget: e.target.value
                    })
                }
                className="
                    border
                    p-3
                    rounded-lg
                "
            />

            {
                editingId && (
                    <button
                        type="button"
                        onClick={cancelEdit}
                        className="
                            bg-gray-300
                            px-4
                            rounded-lg
                        "
                    >
                        Cancel
                    </button>
                )
            }

            <button
                className="
                    bg-indigo-600
                    text-white
                    px-6
                    rounded-lg
                "
            >
                {
                    editingId
                        ? "Update"
                        : "Save"
                }
            </button>

        </form>
    );
}

export default CategoryForm;