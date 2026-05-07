import {
    FiEdit2,
    FiTrash2
} from "react-icons/fi";

function CategoryCard({
    category,
    handleEdit,
    handleDelete
}) {

    return (

        <div
            className="
                bg-white
                border
                rounded-2xl
                p-5
                shadow-sm
            "
        >

            <div
                className="
                    flex
                    justify-between
                    items-start
                "
            >

                <div>

                    <h2
                        className="
                            text-xl
                            font-bold
                        "
                    >
                        {category.name}
                    </h2>

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            mt-2
                        "
                    >

                        <div
                            className="
                                w-4
                                h-4
                                rounded-full
                            "
                            style={{
                                backgroundColor:
                                    category.color
                            }}
                        />

                        <span>
                            {category.color}
                        </span>

                    </div>

                </div>

                <div className="flex gap-2">

                    <button
                        onClick={() =>
                            handleEdit(category)
                        }
                    >
                        <FiEdit2 />
                    </button>

                    <button
                        onClick={() =>
                            handleDelete(category.id)
                        }
                    >
                        <FiTrash2 />
                    </button>

                </div>

            </div>

            <div className="mt-5">

                <p
                    className="
                        text-sm
                        text-gray-500
                    "
                >
                    Monthly Budget
                </p>

                <h3
                    className="
                        text-xl
                        font-bold
                    "
                >
                    Rs.
                    {category.monthlyBudget}
                </h3>

            </div>

        </div>
    );
}

export default CategoryCard;