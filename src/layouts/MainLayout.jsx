import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="flex flex-row flex-1">
                <Sidebar />

                <div className="flex-1 p-6">
                    <Header />

                    <Outlet />
                </div>
            </div>
        </div>
    )
}