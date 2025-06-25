import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

const allSalons = [
    { name: "Barber Shop A", img: "/img/studio.jpg" },
    { name: "Barber Shop B", img: "/img/modelo.jpg" },
    { name: "Hair Studio", img: "/img/img1.jpg" },
    { name: "Fade Master", img: "/img/kids.jpg" },
    { name: "Urban Cuts", img: "/img/hair.jpg" },
    { name: "Classic Style", img: "/img/facial.jpg" }
]

const AllSalons = () => {
    const navigate = useNavigate()

    return (
        <div className="bg-gray-900 text-white min-h-screen p-6">
            <button
                onClick={() => navigate(-1)}
                className="text-white flex items-center gap-2 mb-6"
            >
                <FiArrowLeft /> Back
            </button>

            <h1 className="text-2xl font-bold mb-6">All Nearby Salons</h1>

            <div className="grid grid-cols-2 gap-4">
                {allSalons.map((salon, idx) => (
                    <div key={idx} className="bg-gray-800 rounded-xl p-2">
                        <img
                            src={salon.img}
                            alt={salon.name}
                            className="w-full h-28 object-cover rounded-lg"
                        />
                        <p className="mt-2 text-sm text-center">{salon.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllSalons
