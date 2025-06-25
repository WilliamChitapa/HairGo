import React from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
    const navigate = useNavigate()
    const username = localStorage.getItem('username') || 'Amigo'

    const handleStart = () => {
        navigate('/home')
    }

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6">
            <img
                src="./img/modelo.jpg"
                alt="barber"
                className="w-72 rounded-2xl mb-8"
            />
            <h1 className="text-2xl text-center font-semibold">
                Bem-vindo, <span className="text-cyan-400">{username}</span>!
            </h1>
            <p className="text-sm text-gray-400 mt-4 text-center max-w-sm">
                O melhor app de barbearia para sua beleza.
            </p>
            <button
                onClick={handleStart}
                className="mt-8 bg-cyan-400 text-black px-10 py-3 rounded-xl font-medium hover:bg-cyan-500 transition"
            >
                Get Started
            </button>
        </div>
    )
}

export default Welcome
