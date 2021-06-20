import Topbar from './Topbar'
import Nav from './Nav'
import Head from 'next/head'


export default function Layout({ children }) {
    return (
        <>
            <Topbar />
            <Nav />
            {children}
        </>
    )
}
