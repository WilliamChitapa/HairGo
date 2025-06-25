// src/components/BottomNav.jsx
import React from 'react'
import { FiHome, FiCalendar, FiUser } from 'react-icons/fi'
import { useNavigate, useLocation } from 'react-router-dom'

const BottomNav = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const isActive = (path) => location.pathname === path

    return (
        <div className="bg-gray-800 flex justify-around py-4 rounded-t-3xl">
            <button onClick={() => navigate('/home')}>
                <FiHome className={`text-2xl ${isActive('/home') ? 'text-cyan-400' : 'text-gray-400'}`} />
            </button>
            <button onClick={() => navigate('/services')}>
                <FiCalendar className={`text-2xl ${isActive('/services') ? 'text-cyan-400' : 'text-gray-400'}`} />
            </button>
            <button onClick={() => navigate('/profile')}>
                <FiUser className={`text-2xl ${isActive('/profile') ? 'text-cyan-400' : 'text-gray-400'}`} />
            </button>
        </div>
    )
}

export default BottomNav
