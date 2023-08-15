import { Outlet } from 'react-router-dom'
import Home from '../pages/home/Home'

function RootLayout() {
    return(
        <>
            <Home/>
            <Outlet/>
        </>
    )
}

export default RootLayout