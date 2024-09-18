'use client'
import ResetPass from '@/components/Authentication/ResetPass';
import React from 'react'
import { useSearchParams } from 'next/navigation';

function ResetPage() {
    const mail = useSearchParams().get('mail')

    return (
        <>
            <ResetPass mail={mail} />
        </>
    )
}

export default ResetPage
