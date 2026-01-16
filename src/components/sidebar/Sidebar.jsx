import {  Home, Movie, Download, Logout   } from "@mui/icons-material";
import { SidebarItem } from "./SidebarItem";
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';



export default function Sidebar({ collapsed, toggle }) {
    return (
        <aside
            className={`h-full bg-gradient-to-br from-[#121020]/95 to-black rounded-2xl p-4 flex flex-col transition-all duration-300
            ${collapsed ? "w-20 items-center" : "w-64"}`}
        >
            
            <div className="flex items-center justify-between mb-6">
                {!collapsed && <h2 className="text-xl font-bold"> <LiveTvIcon className="space-x-4  text-3xl text-purple-300"/> Drameeo</h2>}
                <MenuOpenIcon className="cursor-pointer text-gray-400" onClick={toggle} />
            </div>

            <div className="space-y-1 border-b border-black border-solid p-3">
                <SidebarItem icon={<Home />} label="Home"  collapsed={collapsed} />
                <SidebarItem icon={<ExploreOutlinedIcon />} label="Explore" collapsed={collapsed} />
                <SidebarItem icon={<Movie />} label="Genres" collapsed={collapsed} />
                <SidebarItem icon={<BookmarkBorderOutlinedIcon />} label="Favourites" collapsed={collapsed} />
                
            </div>

             <div className="space-y-1 border-b border-black border-solid p-3">
                <SidebarItem icon={<PlayArrowOutlinedIcon />} label="Continue Watching" collapsed={collapsed} />                
                <SidebarItem icon={<AccessTimeOutlinedIcon />} label="Recently Added" collapsed={collapsed} />
                <SidebarItem icon={<FolderCopyOutlinedIcon />} label="My collections" collapsed={collapsed} />
                <SidebarItem icon={<Download />} label="Downloads" collapsed={collapsed} />
            </div>

             <div className="space-y-1 p-3">
                <SidebarItem icon={<SettingsOutlinedIcon />} label="Settings" collapsed={collapsed} />                             
            </div>

            <div className="mt-auto">
                <SidebarItem icon={<Logout />} label="Logout" collapsed={collapsed} />
            </div>
        </aside>
    );
}