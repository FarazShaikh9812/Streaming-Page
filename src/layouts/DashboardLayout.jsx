import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { useAutoCollapseSidebar } from "../hooks/useAutoCollapseSidebar";


export default function DashboardLayout({ children }) {
    const [collapsed, setCollapsed] = useState(false);
    useAutoCollapseSidebar(setCollapsed);


    return (
        <div className="flex h-[calc(100vh-2rem)] gap-4">
            <Sidebar collapsed={collapsed} toggle={() => setCollapsed(!collapsed)} />
            <main className="flex-1 bg-[#121020]/95 rounded-2xl p-6 overflow-y-auto ">
                {children}
            </main>
        </div>
    );
}