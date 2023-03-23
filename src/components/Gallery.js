import GalleryItem from './GalleryItem'

function Gallery(props){

    const display = props.data.map((item,index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })
    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery

// import GalleryItem from "./GalleryItem.js"

// export function Gallery(props){
    
//     // let songs = data.filter((el) => el.kind === 'song')
//     const display = props.data.map((item, index) => {
//         return (
//             <GalleryItem item={item} key={index} />
//         )
//     })
    
//     return (
//         <div>
//             {display}
//         </div>
//     )
// }

// export default Gallery