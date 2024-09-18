'use client'
import React, { useState } from 'react'
import Link from 'next/link';

const Login = () => {
    const { useRouter } = require('next/navigation');
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    return (
        <section className="bg-slate-700 bg-opacity-25 ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="md:text-xl lg:text-3xl font-bold leading-tight tracking-tight text-slate-700 md:text-2xl text-center">
                            Deconnexion dans BNM Réussi
                        </h1>
                        <div className="space-y-4 md:space-y-[2rem] " action="#">
                            <div>
                                <p className="bg-white border border-slate-700 text-slate-700 rounded-lg block w-full p-2.5 focus:outline-none placeholder:text-slate-700">Vous êtes déconnecter dans BNM,Pour vous reconnecter veuillez cliquer sur le lien en dessous</p>
                            </div>
                            <Link href="/authentication/login" className="text-sm font-medium text-slate-700 hover:underline ">Retour sur Login</Link>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default Login
