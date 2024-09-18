'use client'
import React, { useState } from 'react'
import Link from 'next/link';

const Login = () => {
    const { useRouter } = require('next/navigation');
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const Loginbutton = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            if (email && password) {
                const data = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    })
                };
                const response = await fetch('/api/auth/login', data)
                if (response) {
                    const data = await response.json();
                    if (data.message === "Success") {
                        localStorage.removeItem('token');
                        localStorage.setItem('token', data.token)
                        if (data.role === 1) {
                            router.push("/Secretaire/Dossier")
                        }
                        else if (data.role === 2) {
                            router.push("/")
                        }
                        else {
                            router.push("/")
                        }
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
                setError('Tous les champs doivent être completés')
            }
        } catch (error) {
            setLoading(false)
            console.log('an error occured', error)
        }

    }

    return (
        <section className="bg-slate-700 bg-opacity-25 ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="md:text-xl lg:text-3xl font-bold leading-tight tracking-tight text-slate-700 md:text-2xl text-center">
                            Se connecter dans BNM
                        </h1>
                        <form className="space-y-4 md:space-y-[2rem] " action="#">
                            <span className="text-red-600"> {error} </span>
                            <div>
                                <input type="text" name="nom" onChange={(e) => setEmail(e.target.value)} value={email} id="nom" className="bg-white border border-slate-700 text-slate-700 rounded-lg block w-full p-2.5 focus:outline-none placeholder:text-slate-700" placeholder="votre email" required="" />
                            </div>
                            <div>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} name="password" id="password" placeholder="Entrer le mot de passe" className="bg-white border border-slate-700 text-slate-700 rounded-lg block w-full p-2.5 focus:outline-none placeholder:text-slate-700" required="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    {/* <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 checked:bg-slate-700"
                                            required=""
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label for="remember" className="text-slate-700 text-md font-bold">Remember me</label>
                                    </div> */}
                                </div>
                                <Link href="/authentication/forgetpassword" className="text-sm font-medium text-slate-700 hover:underline ">Forgot password?</Link>
                            </div>
                            {
                                loading ? <button type="submit" className="w-full text-white bg-slate-700 hover:bg-slate-800 font-medium rounded-lg text-sm md:text-lg md:font-bold px-5 py-2.5 text-center">LOGIN...</button> :
                                    <button onClick={Loginbutton} type="submit" className="w-full text-white bg-slate-700 hover:bg-slate-800 font-medium rounded-lg text-sm md:text-lg md:font-bold px-5 py-2.5 text-center">LOGIN</button>
                            }
                            <div className='flex space-x-4'>
                                <p className="text-md font-light text-slate-700">
                                    Don’t have an account yet?
                                </p>
                                <Link href="/authentication/register" className="font-medium text-lg text-slate-700 hover:underline ">S'enregistrer</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Login
