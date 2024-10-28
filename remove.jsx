const FavoriteStudent = ({ favorites, removeFavorite }) => {
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
        }
    ]
    const favoriteStudent = Students.filter((student) => favorites.includes(student.id))

    return (
        <div className="">
            <h1 className="text-3xl font-bold mb-4 text-center ">Favorite Students</h1>
            
                {favoriteStudent.length > 0 ?
                    (
                        <ul className="space-y-4">
                            {favoriteStudent.map((student) => (
                                <li  key={student.id}className="bg-white text-2xl font-md shadow-md p-4 rounded-md flex justify-between items-center">{student.name}
                                    <button  onClick={() => removeFavorite(student.id)}className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded">Remove</button></li>
                            ))
                            }
                        </ul>
                    ) :
                    (
                        <p className="text-center text-grey-500">No Favorite Students added Yet.</p>
                    )}
            
        </div>

    )

}
export default FavoriteStudent