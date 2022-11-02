import { NextPage } from "next";
import Link from "next/link";
import Router from "next/router";
import { useEffect } from "react";

const DashboardPage: NextPage = () => {
    useEffect(() => {
        if(!localStorage.getItem('token') || localStorage.getItem('token') === null || localStorage.getItem('token') === '') {
            Router.push('/login')
        }
    });
    return (
        <>
            <h1>Dashboard</h1>
            <Link href={'/'}> Home</Link>
        </>
    );
};

export default DashboardPage;