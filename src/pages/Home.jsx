import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Card from "../components/card/Card";
import DashboardLayout from "../layouts/DashboardLayout";


export default function Home() {
    return (
        <DashboardLayout>
            <Navbar />
            <Hero />


        <section className="mb-8">
            <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Continue Watching</h3>
                <button className="text-xs text-white bg-gray-700 px-3 py-2  hover:text-black transition rounded-xl hidden sm:block">
                    See all
                </button>
            </div>

            <div className="flex gap-4 overflow-x-auto">
                <Card title="Midnight Mischief Squad" />
                <Card title="Emerald Mist" />
                <Card title="Last Guardian" />
            </div>
        </section>



        <section>
            <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">You Might Like</h3>
                <button className="text-xs text-white bg-gray-700 px-3 py-2  hover:text-black transition rounded-xl hidden sm:block">
                    See all
                </button>
            </div>

            <div className="flex gap-4 overflow-x-auto">
                <Card title="Joker" />
                <Card title="Frozen" />
                <Card title="Disney+" />
            </div>
        </section>

        </DashboardLayout>
    );
}