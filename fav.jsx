import React from "react"
const StudentList = ({ addfavorite, favorites }) => {
    const Students = [
        {
            id: 1,
            name: "Gayu"
        },
        {
            id: 2,
            name: "kevi"
        },
        {
            id: 3,
            name: "Maran"
        },
        {
            id: 4,
            name: "Vetri"
        },
        {
            id: 5,
            name: "Ammu"
        },
    ]
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4 text-center">Student List</h1>
            <ul className="space-y-4">
                {
                    Students.map((student) => (
                        <li key={student.id} className="bg-pink-400 text-2xl font-md shadow-md p-4 rounded-md flex justify-between item-center"><span className=" text-2xl font-md">{student.name}</span>
                            <button onClick={() => addfavorite(student.id)} disabled={favorites.includes(student.id)}className="px-4  py-2 rounded $">{favorites.includes(student.id) ?'favorited' : 'Add to favorities '}</button>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default StudentList