export default function Card({ title }) {
    return (
        <div className="w-56 h-32 bg-white/10 rounded-xl hover:scale-105 transition-transform cursor-pointer flex items-end p-3">
            <span className="text-sm">{title}</span>
        </div>
    );
}