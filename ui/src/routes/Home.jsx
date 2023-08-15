import Home from '../pages/home/Home'

function HomeRoute () {
    return(
        <div>
            <Home/>
        </div>
    )
}

export default HomeRoute

export async function loader(){
    const response = await fetch('http://localhost:3000/video')
    const resData = await response.json()
    return resData
}