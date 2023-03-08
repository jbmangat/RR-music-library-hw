import GalleryItem from './GalleryItem'

function Gallery(props){
    return (
        <div>
            <GalleryItem />
        </div>
    )
}

export default Gallery



// import { GalleryItem } from "./GalleryItem"
// import { useContext } from "react"
// import { DataContext } from "../context/DataContext"

// export function Gallery({}){
//     let data = useContext(DataContext)
//     let songs = data.filter((el) => el.kind === 'song')
    
//     return (
//         <div>
//             {songs.map((el) => {
//                 return <GalleryItem track={el} key={el.trackId}/>
//             })}
//         </div>
//     )
// }
