import type {ReactNode} from "react";
import {Header} from "@/components/Header/Header.tsx";
import {Outlet} from "react-router";

export const RootLayout = (): ReactNode => {
    return <div className="">
        <Header/>
        <main>
            <Outlet/>
        </main>
    </div>
};