import { Search, Notifications, Person } from "@mui/icons-material";


export default function Navbar() {
    return (
        <header className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-xl w-full max-w-lg">
                <Search className="text-gray-400" />
                <input
                    placeholder="Search for films, directors, or actors..."
                    className="bg-transparent outline-none text-sm w-full"
                />
            </div>


            <div className="flex items-center gap-4 ml-4">
                <Notifications className="cursor-pointer hover:text-purple-400 transition " />
                <Person className="cursor-pointer hover:text-purple-400 transition" />
            </div>
        </header>
    );
}