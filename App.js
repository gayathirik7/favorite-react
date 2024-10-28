import { useState } from "react";
import { BrowserRouter, Route, Routes ,Link} from "react-router-dom";
import StudentList from "./fav";
import FavoriteStudent from "./remove";

const App=()=>{
    const[favorites,setfavorites]=useState([])
    const addfavorite=(studentId)=>{
        setfavorites((prevFavorities)=>prevFavorities.includes(studentId)? prevFavorities : [...prevFavorities,studentId])

    }
    const removeFavorite =(studentId)=>{setfavorites((prevFavorities)=>prevFavorities.filter((id)=>id!==studentId))}
    return(
        <BrowserRouter>
        <div className="min-h-screen bg-gray-100 p-6">
            <nav className="mb-6 text-center">
                <Link to="/"className="text-blue-600 mx-4 hover:underline font-semibold">StudentList</Link>|<Link to ="favorites"className="text-blue-600 mx-4 hover:underline font-semibold">FavoriteStudents</Link>
            </nav>
        

        <Routes>
            <Route path="/"element={<StudentList addfavorite={addfavorite}favorites={favorites}/>}/>
            <Route path="/favorites"element={<FavoriteStudent favorites={favorites}removeFavorite={removeFavorite}/>}/>
        </Routes>
        </div>
        </BrowserRouter>
        
)

}
export default App