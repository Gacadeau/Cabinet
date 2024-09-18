'use client'
import React, { useState, useEffect } from 'react'


function ResetPass(mail) {
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')
    const [errpass, setErrPass] = useState("")
    const [res, setRes] = useState('')
    const [error, setError] = useState('')
    const { useRouter } = require('next/navigation');
    const router = useRouter()

    const changPassWord = async () => {
        if (cpassword !== password) {
            setErrPass("Les deux mot de passe sont incohérents")
        } else {
            const updateData = {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    password,
                    mail
                })
            }
            console.log("usdata", updateData);
            const res = await fetch(`/api/auth/resetPassword`, updateData)
            const data = await res.json()
            if (data.res == 'updated') {
                setRes(data.message)
                router.push('/authentication/login')
            }
            else {
                setError(data.response.message)
            }
        }

    }
    return (
        <>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">

                        <div className="max-w-md mx-auto">
                            {/* <div className='w-[7rem] h-[7rem] md:w-[9rem] md:h-[9rem] lg:w-[10rem] lg:h-[10rem] mx-auto rounded-full'>
                                <Image src={`/logo/TeramaFlixpic.png`} width={280} height={280} alt="logo" className="w-[7rem] h-[7rem] md:w-[9rem] md:h-[9rem] lg:w-[10rem] lg:h-[10rem]" />
                            </div> */}
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="bg-white  rounded px-8 pt-6 pb-8 mb-4" autoComplete="off">
                                        <h2 className="text-2xl text-center font-bold mb-6">Changer le mot de passe</h2>
                                        <div>{error ? <span className="text-red-600"> {error} </span> : ""}</div>
                                        <div>{res ? <span className="text-green-600"> {res} </span> : ""}</div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                                Nouveau mot de passe
                                            </label>
                                            <input name="password" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email"
                                                type="password" placeholder="entrer le nouveau mot de passe" value={password} onChange={e => { setPassword(e.target.value) }} />
                                            <span className="text-red-600"> {errpass} </span>

                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                                Confirmer le mot de passe
                                            </label>
                                            <input name="cpassword" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email"
                                                type="password" placeholder="Confirmer votre mot de passe" value={cpassword} onChange={e => { setCPassword(e.target.value) }} />
                                        </div>
                                        <div className="mb-6">
                                            <button name="changemod" onClick={changPassWord} className="w-full text-white bg-slate-700 hover:bg-slate-800 font-medium rounded-lg text-sm md:text-lg md:font-bold px-5 py-2.5 text-center" type="submit">
                                                Reset Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPass