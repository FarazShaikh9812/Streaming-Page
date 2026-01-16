export function SidebarItem({ icon, label, active, collapsed }) {
    return (
        <div
            className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer transition-all
            text-gray-400  hover:text-purple-300`}
        >
            {icon}
            {!collapsed && <span>{label}</span>}
        </div>
    );
}