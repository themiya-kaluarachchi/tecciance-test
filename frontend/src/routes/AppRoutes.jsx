import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import DashboardLayout
    from "../components/layout/DashboardLayout";

import ExpensesPage
    from "../pages/ExpensesPage";

import CategoriesPage
    from "../pages/CategoriesPage";

function AppRoutes() {

    return (

        <BrowserRouter>

            <DashboardLayout>

                <Routes>

                    <Route
                        path="/"
                        element={
                            <Navigate
                                to="/expenses"
                            />
                        }
                    />

                    <Route
                        path="/expenses"
                        element={<ExpensesPage />}
                    />

                    <Route
                        path="/categories"
                        element={<CategoriesPage />}
                    />

                </Routes>

            </DashboardLayout>

        </BrowserRouter>
    );
}

export default AppRoutes;