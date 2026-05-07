import { FiPieChart } from "react-icons/fi";

function SummaryCards({ summary }) {

    return (

        <div
            className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4
                gap-6
                mb-10
            "
        >

            {
                summary.map((item, index) => (

                    <div
                        key={index}
                        className="
                            bg-white
                            border
                            rounded-2xl
                            p-6
                            shadow-sm
                        "
                    >

                        <div
                            className="
                                flex
                                items-center
                                gap-4
                            "
                        >

                            <div
                                className="
                                    p-3
                                    bg-indigo-50
                                    text-indigo-600
                                    rounded-xl
                                "
                            >

                                <FiPieChart size={24} />

                            </div>

                            <div>

                                <p
                                    className="
                                        text-sm
                                        text-gray-500
                                    "
                                >
                                    {item.categoryName}
                                </p>

                                <h2
                                    className="
                                        text-2xl
                                        font-bold
                                    "
                                >
                                    Rs.
                                    {
                                        Number(
                                            item.totalAmount
                                        ).toLocaleString()
                                    }
                                </h2>

                            </div>

                        </div>

                    </div>
                ))
            }

        </div>
    );
}

export default SummaryCards;