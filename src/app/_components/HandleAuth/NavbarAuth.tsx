"use client"
import { usePathname } from 'next/navigation';
import React from 'react'
import Navbar from '../Navbar/Navbar';

export default function NavbarAuth() {
    const pathName = usePathname();
    if (pathName == '/register' || pathName == '/login')
        return null;
    return <>
        <Navbar />
    </>
}
