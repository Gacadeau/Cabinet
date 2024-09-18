'use client'
import React, { useState } from 'react'
import Link from 'next/link';

const ForgetPassword = () => {
    const { useRouter } = require('next/navigation');
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const Forgetbutton = async (e) => {
        e.preventDefault();
        setLoading(false)
        try {
            setError(false)
            setLoading(true)
            if (email) {
                const dataSend = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                    })
                };
                const response = await fetch('/api/auth/forgetpassword', dataSend)

                console.log('forgetpass', response)
                if (response) {
                    const data = await response.json();
                    if (data.message === "Success") {
                        setLoading(false)
                        router.push('/authentication/waitchngpass')
                    }
                    else {
                        setLoading(false)
                        setError(data.message)
                    }
                }
                else {
                    setLoading(false)
                    setError('Identification échoué réessayer:',)
                }
            }
            else {
                setLoading(false)
                setError('Le champ d\'email est obligatoire')
            }
        } catch (error) {
            setLoading(false)
            setError('Erreur réseau veuillez réessayer')
        }

    }

    return (
        <div>
            <div class="h-screen bg-indigo-100 flex justify-center items-center">
                <div class="lg:w-2/5 md:w-1/2 w-2/3">
                    <form class="bg-white p-10 rounded-lg shadow-lg min-w-full" action="#" method="POST">
                        <h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Changer le mot de Passe</h1>
                        <span className="text-red-600"> {error} </span>
                        <div>
                            <label class="text-gray-800 font-semibold block my-1 text-md" for="email">Entrer votre Adresse email</label>
                            <input class="w-full bg-gray-100 px-4 py-4bg-white border border-slate-700 text-slate-700 rounded-lg block w-full p-2.5 focus:outline-none placeholder:text-slate-700 rounded-lg my-6 focus:outline-none"
                                type="text" name="email" onChange={(e) => setEmail(e.target.value)} value={email} id="email" placeholder="example@gmail.com" />
                        </div>
                        {
                            loading ?
                                <button type="submit" onClick={Forgetbutton} class="w-full text-white bg-slate-700 hover:bg-slate-800 font-medium rounded-lg text-sm md:text-lg md:font-bold px-5 py-2.5 text-center">Envoie...</button>
                                :
                                <button type="submit" onClick={Forgetbutton} class="w-full text-white bg-slate-700 hover:bg-slate-800 font-medium rounded-lg text-sm md:text-lg md:font-bold px-5 py-2.5 text-center">Envoyer</button>
                        }
                        <div className="pt-6 text-base leading-6  sm:text-sm sm:leading-7">
                            <p>Retourner sur   <a href="/authentication/login" className="text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">Log in !</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword