import React, { useState } from 'react'
import { FiSearch, FiSettings } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

const categories = [
    { name: "Haircuts", img: "/img/cuts.jpg" },
    { name: "Nail", img: "/img/nail.jpg" },
    { name: "Facial", img: "/img/img1.jpg" },
]

const allSalons = [
    { name: "Barber Shop A", img: "/img/facial.jpg" },
    { name: "New Look Studio", img: "/img/studio.jpg" },
    { name: "Hair Revolution", img: "/img/hair.jpg" },
    { name: "Fade Master", img: "/img/modelo.jpg" },
    { name: "Top Styles", img: "/img/img1.jpg" }
]

const Home = () => {
    const username = localStorage.getItem('username') || 'Amigo'
    const profileImg = localStorage.getItem('profileImg')
    const navigate = useNavigate()
    const [search, setSearch] = useState('')

    const getGreeting = () => {
        const hour = new Date().getHours()
        if (hour < 12) return 'Good morning!'
        if (hour < 18) return 'Good afternoon!'
        return 'Good evening!'
    }

    const filteredSalons = allSalons.filter((salon) =>
        salon.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-between">
            <div className="px-6 pt-10 pb-6">
                {/* Saudação com imagem ao lado do nome */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        {profileImg && (
                            <img
                                src={profileImg}
                                alt="Profile"
                                className="w-10 h-10 rounded-full object-cover border-2 border-cyan-400"
                            />
                        )}
                        <div>
                            <p className="text-sm text-gray-400">Hello {username} 👋</p>
                            <h1 className="text-xl font-semibold">{getGreeting()}</h1>
                        </div>
                    </div>

                    <button
                        onClick={() => navigate('/profile')}
                        className="bg-gray-700 p-2 rounded-full"
                    >
                        <FiSettings className="text-white" />
                    </button>
                </div>

                {/* Barra de busca */}
                <div className="mt-4 relative">
                    <input
                        type="text"
                        placeholder="Search salon..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-gray-800 py-3 px-4 rounded-xl text-sm placeholder-gray-400"
                    />
                    <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    {search && (
                        <p className="text-sm text-gray-500 mt-2">
                            {filteredSalons.length} resultado(s) encontrado(s)
                        </p>
                    )}
                </div>

                {/* Categorias */}
                <div className="flex gap-4 mt-6">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="bg-gray-800 p-2 rounded-xl flex flex-col items-center">
                            <img src={cat.img} alt={cat.name} className="w-28 h-20 rounded-xl" />
                            <span className="mt-2 text-sm">{cat.name}</span>
                        </div>
                    ))}
                </div>

                {/* Ofertas */}
                <div className="mt-8">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-lg font-semibold">Eid offers</h2>
                        <button
                            className="text-sm text-cyan-400"
                            onClick={() => navigate('/all-salons')}
                        >
                            See all
                        </button>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-xl">
                        <img src="/img/kids.jpg" alt="Offer" className="w-full rounded-xl mb-3" />
                        <p className="text-sm">Haircut</p>
                        <h3 className="font-bold text-xl text-cyan-400">30% Free</h3>
                        <p className="text-xs text-gray-400">Aug 12 - Aug 27</p>
                        <button className="mt-3 bg-cyan-400 text-black py-2 px-4 rounded-lg text-sm font-semibold">
                            Get Offer Now
                        </button>
                    </div>
                </div>

                {/* Salões próximos */}
                <div className="mt-8">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-lg font-semibold">Nearby salons</h2>
                        <button
                            className="text-sm text-cyan-400"
                            onClick={() => navigate('/all-salons')}
                        >
                            See all
                        </button>
                    </div>
                    {filteredSalons.length === 0 ? (
                        <p className="text-gray-400 text-sm">No salons found.</p>
                    ) : (
                        <div className="flex gap-4 overflow-x-scroll pb-2">
                            {filteredSalons.map((salon, idx) => (
                                <div key={idx} className="min-w-[150px] bg-gray-800 rounded-xl p-2">
                                    <img src={salon.img} alt={salon.name} className="rounded-lg w-full h-24 object-cover" />
                                    <p className="mt-2 text-sm text-center">{salon.name}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Navegação inferior */}
            <BottomNav />
        </div>
    )
}

export default Home
