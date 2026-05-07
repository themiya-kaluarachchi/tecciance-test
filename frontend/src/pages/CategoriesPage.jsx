import { useEffect, useState } from "react";
import api from "../api/axios";

function CategoriesPage() {

    const [categories, setCategories] = useState([]);

    const [formData, setFormData] = useState({
        name: "",
        color: "",
        monthlyBudget: ""
    });

    useEffect(() => {
        fetchCategories();
    }, []);

    async function fetchCategories() {
        try {
            const response = await api.get("/categories");
            setCategories(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await api.post("/categories", formData);
            setFormData({
                name: "",
                color: "",
                monthlyBudget: ""
            });
            fetchCategories();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="max-w-6xl mx-auto p-6 md:p-10 font-sans text-gray-800">

            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8">
                Categories
            </h1>

            {/* Form Section */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
                <h2 className="text-lg font-semibold text-gray-700 mb-5">Add New Category</h2>
                
                <form 
                    onSubmit={handleSubmit} 
                    className="flex flex-col md:flex-row gap-5 items-start md:items-end"
                >
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-600 mb-1.5">Name</label>
                        <input
                            type="text"
                            placeholder="e.g. Transport"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value
                                })
                            }
                            className="w-full border border-gray-200 bg-gray-50 focus:bg-white rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        />
                    </div>

                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-600 mb-1.5">Color (Hex)</label>
                        <input
                            type="text"
                            placeholder="#RRGGBB"
                            value={formData.color}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    color: e.target.value
                                })
                            }
                            className="w-full border border-gray-200 bg-gray-50 focus:bg-white rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all font-mono"
                        />
                    </div>

                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-600 mb-1.5">Monthly Budget</label>
                        <input
                            type="number"
                            placeholder="0.00"
                            value={formData.monthlyBudget}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    monthlyBudget: e.target.value
                                })
                            }
                            className="w-full border border-gray-200 bg-gray-50 focus:bg-white rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full md:w-auto whitespace-nowrap bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2.5 rounded-lg shadow-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Save Category
                    </button>
                </form>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {
                    categories.map(category => (
                        <div
                            key={category.id}
                            className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col"
                        >
                            {/* Decorative Color Bar */}
                            <div 
                                className="absolute top-0 left-0 w-1.5 h-full"
                                style={{ backgroundColor: category.color || '#e5e7eb' }}
                            />
                            
                            <div className="pl-3">
                                <h2 className="text-xl font-bold text-gray-800 mb-1">
                                    {category.name}
                                </h2>
                                
                                <div className="flex items-center gap-2 mb-4">
                                    <span 
                                        className="w-3 h-3 rounded-full border border-gray-200"
                                        style={{ backgroundColor: category.color }}
                                    ></span>
                                    <p className="text-xs text-gray-500 font-mono tracking-wider">
                                        {category.color || 'No color'}
                                    </p>
                                </div>

                                <div className="mt-auto pt-4 border-t border-gray-50">
                                    <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
                                        Budget
                                    </p>
                                    <p className="text-lg font-bold text-gray-900">
                                        Rs. {category.monthlyBudget ? Number(category.monthlyBudget).toLocaleString(undefined, { minimumFractionDigits: 2 }) : '0.00'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default CategoriesPage;