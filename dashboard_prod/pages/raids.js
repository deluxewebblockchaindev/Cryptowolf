import React, {useState} from "react"
import Head from 'next/head'
import LeftMenu from './template/leftmenu.js'
import RightDiv from './rightdiv.js'
import "bootstrap/dist/css/bootstrap.css"

export default function Home() {
    const data = "RAIDS";
    return (
        <div>
            <Head>
                <link rel="icon" href="/title.png" />
                <title>RAIDS | CryptoWolf</title>
                <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script> 
                <script src="/script.js"></script>
            </Head>
            <LeftMenu active={data} />
            <RightDiv main={data} />
        </div>
    )
}
