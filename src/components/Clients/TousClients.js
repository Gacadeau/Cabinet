'use client'
import { React, useState, useEffect } from 'react'
import { Tooltip } from '@nextui-org/react';
import DetailsClientSecretaire from '../DetailClient/DetailsClientSecretaire';

const TousClients = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/clients/liste/');
            console.log('lol', res)
            const data = await res.json()
            console.log(data)
            if (data.message == 'Success') {
                setData(data.data)
            }
            else {
                setData([])
            }

        };

        fetchData();

    }, []);
    return (
        <div className="w-[100%]">
            <div className="w-full">
                <div class="container mx-auto py-2">
                    <table id="example" class="table-auto w-full">
                        <thead>
                            <tr>
                                <th class="text-start py-2 bg-slate-100"></th>
                                <th class="text-start py-2 bg-slate-100">No</th>
                                <th class="py-2 text-start border bg-slate-100">Nom</th>
                                <th class="text-start py-2 border bg-slate-100">Mail</th>
                                <th class="text-start py-2 border bg-slate-100">Téléphone</th>
                                <th class="text-start py-2 border bg-slate-100">
                                    Nombre de dossiers
                                </th>
                                <th class="text-start py-2 border bg-slate-100">
                                    Montant mensuel
                                </th>
                                <th class="text-start py-2 border bg-slate-100">
                                    Date de création
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((item) => (
                                <tr>
                                    <td className="border px-4 py-2 text-sm font-medium">
                                        <Tooltip
                                            showArrow={true}
                                            content={<DetailsClientSecretaire />}
                                            className="bg-slate-700 h-7 rounded-md max-w"
                                        >
                                            <button
                                                type="button"
                                                className="inline-flex items-center text-slate-700 bg-slate-200 rounded-md"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    className="size-8"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                                                    />
                                                </svg>
                                            </button>
                                        </Tooltip>
                                    </td>
                                    <td class="border text-start py-2">#</td>
                                    <td class="border text-start py-2">{item.name}</td>
                                    <td class="border text-start py-2">{item.email}</td>
                                    <td class="border text-start py-2">{item.phone}</td>
                                    <td class="border text-start py-2">{item.nombre_dossiers}</td>
                                    <td class="border text-start py-2">{item.montant}</td>
                                    <td class="border text-start py-2">{item.create_at}</td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TousClients


return (
    <div className="w-[100%]">
        <div className="w-full">
            <div class="container mx-auto py-2">
                <table id="example" class="table-auto w-full">
                    <thead>
                        <tr>
                            <th class="text-start py-2 bg-slate-100"></th>
                            <th class="text-start py-2 bg-slate-100">No</th>
                            <th class="py-2 text-start border bg-slate-100">Nom</th>
                            <th class="text-start py-2 border bg-slate-100">Mail</th>
                            <th class="text-start py-2 border bg-slate-100">Téléphone</th>
                            <th class="text-start py-2 border bg-slate-100">
                                Nombre de dossiers
                            </th>
                            <th class="text-start py-2 border bg-slate-100">
                                Montant mensuel
                            </th>
                            <th class="text-start py-2 border bg-slate-100">
                                Date d&#39;audience
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item) => (
                            <tr>
                                <td className="border px-4 py-2 text-sm font-medium">
                                    <Tooltip
                                        showArrow={true}
                                        content={<DetailsClientSecretaire />}
                                        className="bg-slate-700 h-7 rounded-md max-w"
                                    >
                                        <button
                                            type="button"
                                            className="inline-flex items-center text-slate-700 bg-slate-200 rounded-md"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                className="size-8"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                                                />
                                            </svg>
                                        </button>
                                    </Tooltip>
                                </td>
                                <td class="border text-start py-2">#</td>
                                <td class="border text-start py-2">{item.name}</td>
                                <td class="border text-start py-2">{item.email}</td>
                                <td class="border text-start py-2">{item.phone}</td>
                                <td class="border text-start py-2">{item.nombre_dossiers}</td>
                                <td class="border text-start py-2">{item.montant}</td>
                                <td class="border text-start py-2">2025/12/01</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);