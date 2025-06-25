import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiFilter, FiHome, FiCalendar, FiUser } from 'react-icons/fi'

const specialists = [
    { name: 'John Barber', img: '/img/img1.jpg' },
    { name: 'Anna Stylist', img: '/img/img2.jpg' },
    { name: 'Mike Expert', img: '/img/img3.jpg' },
]

const services = [
    { name: 'Hair cutting', location: 'Barbershop (12.5km)', img: '/img/img1.jpg' },
    { name: 'Shaving', location: 'Barbershop (5.8km)', img: '/img/img2.jpg' },
    { name: 'Kids hair cut', location: 'Barbershop (8.2km)', img: '/img/img3.jpg' },
    { name: 'Facial & massage', location: 'Barbershop (7.9km)', img: '/img/img1.jpg' },
]

const Services = () => {
    const navigate = useNavigate()

    const handleServiceClick = (service) => {
        navigate('/service-details', { state: service })
    }

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-between">
            <div className="px-6 pt-10">
                {/* Título */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold">Services</h1>
                    <button className="bg-gray-700 p-2 rounded-full">
                        <FiFilter className="text-white" />
                    </button>
                </div>

                {/* Especialistas */}
                <div className="mb-8">
                    <h2 className="text-lg mb-2">Choose Specialist</h2>
                    <div className="flex gap-4 overflow-x-auto pb-2">
                        {specialists.map((spec, idx) => (
                            <div key={idx} className="min-w-[100px] flex flex-col items-center">
                                <img
                                    src={spec.img}
                                    alt={spec.name}
                                    className="w-20 h-20 rounded-full object-cover border-2 border-cyan-400"
                                />
                                <p className="mt-2 text-sm text-center">{spec.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Serviços */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-lg font-semibold">Choose Service</h2>
                    </div>
                    <div className="space-y-4">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                onClick={() => handleServiceClick(service)}
                                className="flex items-center bg-gray-800 p-3 rounded-xl cursor-pointer hover:bg-gray-700 transition"
                            >
                                <img
                                    src={service.img}
                                    alt={service.name}
                                    className="w-20 h-20 rounded-xl object-cover mr-4"
                                />
                                <div>
                                    <h3 className="font-semibold flex items-center gap-1">
                                        {service.name}
                                        <span className="text-cyan-400">➤</span>
                                    </h3>
                                    <p className="text-sm text-gray-400">{service.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Navegação inferior */}
            <div className="bg-gray-800 flex justify-around py-4 mt-6 rounded-t-3xl">
                <FiHome className="text-gray-400 text-2xl" />
                <FiCalendar className="text-cyan-400 text-2xl" />
                <FiUser className="text-gray-400 text-2xl" />
            </div>
        </div>
    )
}

export default Services
