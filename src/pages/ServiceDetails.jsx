// src/pages/ServiceDetails.jsx
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const ServiceDetails = () => {
    const { state } = useLocation()
    const [selectedDate, setSelectedDate] = useState('')
    const [selectedTime, setSelectedTime] = useState('')

    if (!state) return <p className="text-white p-6">No service selected.</p>

    return (
        <div className="bg-gray-900 text-white min-h-screen p-6">
            <h1 className="text-2xl font-bold mb-4">{state.name}</h1>
            <img src={state.img} alt={state.name} className="w-full h-60 object-cover rounded-xl mb-4" />
            <p className="text-gray-400 mb-4">{state.location}</p>

            <div className="mb-4">
                <label className="block text-sm mb-1">Select a date:</label>
                <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-2 rounded bg-gray-800 text-white"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm mb-1">Select a time:</label>
                <input
                    type="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full p-2 rounded bg-gray-800 text-white"
                />
            </div>

            <button className="bg-cyan-400 text-black py-2 px-4 rounded-lg text-sm font-semibold w-full">
                Confirm Appointment
            </button>
        </div>
    )
}

export default ServiceDetails
