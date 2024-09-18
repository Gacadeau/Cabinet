import { NextResponse } from "next/server"
// import { cookies } from 'next/headers'

export async function middleware(request) {
    const response = NextResponse.next()
    const url = request.nextUrl;
    const pathname = url.pathname;
    const cookie = request.cookies.get('token')?.value
    console.log('data get', cookie)
    if (cookie) {
        var session = cookie
    }
    else {
        var session = null
    }

    if (pathname === 'authentication/login' || pathname === 'authentication/register') {
        return response; // Allow access without authentication
    }
    if (!session) {
        return NextResponse.redirect(
            new URL('/authentication/login', request.url)
        )
    }
    return NextResponse.next()
}

export const config = {
    matcher: '/((?!api|static|_next|authentication).*)',
}