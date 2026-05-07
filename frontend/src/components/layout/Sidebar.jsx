import { NavLink } from "react-router-dom";
import {
    FiGrid,
    FiTag
} from "react-icons/fi";

function Sidebar() {

    return (

        <div
            className="
                w-64
                bg-gray-900
                text-white
                min-h-screen
                p-6
            "
        >

            <h1
                className="
                    text-2xl
                    font-bold
                    mb-10
                "
            >
                Expense Tracker
            </h1>

            <nav className="space-y-2">

                <NavLink
                    to="/expenses"
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-3 rounded-lg transition-colors ${
                            isActive
                                ? "bg-indigo-600"
                                : "hover:bg-gray-800"
                        }`
                    }
                >
                    <FiGrid />
                    Expenses
                </NavLink>

                <NavLink
                    to="/categories"
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-3 rounded-lg transition-colors ${
                            isActive
                                ? "bg-indigo-600"
                                : "hover:bg-gray-800"
                        }`
                    }
                >
                    <FiTag />
                    Categories
                </NavLink>

            </nav>

        </div>
    );
}

export default Sidebar;