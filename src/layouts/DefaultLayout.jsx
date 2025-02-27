// importo il componente della libreria di router
import { Outlet } from "react-router-dom";

// importo i componenti che formano il layout
import Header from "../components/Header";


export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}