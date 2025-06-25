import React, { useState, useEffect } from 'react'
import BottomNav from '../components/BottomNav'

const Profile = () => {
    const [username, setUsername] = useState('')
    const [profileImg, setProfileImg] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {
        setUsername(localStorage.getItem('username') || '')
        setProfileImg(localStorage.getItem('profileImg') || '')
    }, [])

    const handleSave = () => {
        localStorage.setItem('username', username)
        localStorage.setItem('profileImg', profileImg)
        setMessage('Perfil atualizado com sucesso ✅')
        setTimeout(() => setMessage(''), 3000)
    }

    const handleImageUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setProfileImg(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-between">
            <div className="px-6 pt-10">
                <h1 className="text-2xl font-semibold mb-4">Editar Perfil</h1>

                {/* Foto de perfil */}
                <div className="flex flex-col items-center">
                    <label htmlFor="fileInput">
                        <img
                            src={profileImg || '/img/default-avatar.png'}
                            alt="Perfil"
                            className="w-24 h-24 rounded-full object-cover border-2 border-cyan-400 cursor-pointer"
                        />
                    </label>
                    <input
                        id="fileInput"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                    />
                    <p className="text-sm text-gray-400 mt-2">Clique na imagem para alterar</p>
                </div>

                {/* Nome */}
                <div className="mt-6">
                    <label htmlFor="username" className="block text-sm mb-2 text-gray-300">Seu nome</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500"
                        placeholder="Digite seu nome"
                    />

                    <button
                        onClick={handleSave}
                        className="mt-4 bg-cyan-400 text-black py-2 px-4 rounded-lg text-sm font-semibold"
                    >
                        Salvar
                    </button>

                    {message && <p className="mt-3 text-sm text-green-400">{message}</p>}
                </div>
            </div>

            <BottomNav />
        </div>
    )
}

export default Profile
