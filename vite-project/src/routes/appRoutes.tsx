import { BrowserRouter, Route, Routes } from 'react-router'
import { Login } from '../pages/login'
import { Pr } from '../pages/pr'

export function Approutes(){
    return(
        <BrowserRouter>
        <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/pr' element={<Pr />}/>
        </Routes>
        </BrowserRouter>
    )
}