function ExpenseCard({ expense }) {

    return (

        <div
            className="
                bg-white
                p-5
                rounded-xl
                border
                shadow-sm
            "
        >

            <h2
                className="
                    text-lg
                    font-bold
                "
            >
                Rs. {expense.amount}
            </h2>

            <p>{expense.description}</p>

            <p
                className="
                    text-sm
                    text-gray-500
                    mt-2
                "
            >
                {expense.expenseDate}
            </p>

        </div>
    );
}

export default ExpenseCard;