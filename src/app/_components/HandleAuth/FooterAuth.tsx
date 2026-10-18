"use client"
import { usePathname } from 'next/navigation';
import React from 'react'
import Footer from '../Footer/Footer';

export default function FooterAuth() {
    const pathName = usePathname();
    if (pathName == '/register' || pathName == '/login')
        return null;
    return <>
        <Footer />
    </>
}

