import { useState } from 'react' 
import { Link } from 'react-router-dom'

function GalleryItem(props){
    let [view, setView] = useState(false)

    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }
    
    const detailStyle = {
        'width': '80vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': `url(${props.item.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'yellow'
    }

    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        return (
            <div style={detailStyle}>
                <h2>{props.item.trackName}</h2>
                <h3>
                    <Link to={`/artist/${props.item.artistId}`}>
                        {props.item.artistName}
                    </Link>
                </h3>
                <h3>
                    <Link to={`/album/${props.item.collectionId}`}>
                        {props.item.collectionName}
                    </Link>
                </h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        )
    }

    return (
        <div onClick={() =>setView(!view)} style={{'display': 'inline-block'}}>
            {/* This simple ternary shows the simple view when 'view' is false! */}
            {view ? detailView() : simpleView()}
        </div>
    )
}

export default GalleryItem

// import { useState } from "react";
// import { Link } from "react-router-dom";

// function GalleryItem(props) {
//   let [view, setView] = useState(false);

//   const clickHandler = () => {
//         setView(!view)
//     }

//   // styles --------------------------

//   const simpleStyle = {
//     width: "25vw",
//     height: "20vh",
//     border: "1px solid black",
//     margin: "2px",
//   };

//   const detailStyle = {
//     width: "80vw",
//     height: "20vh",
//     border: "1px solid black",
//     margin: "2px",
//     backgroundImage: `url(${props.item.artworkUrl100})`,
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     color: "yellow",
//   };

//   // views----------------------

//   const simpleView = () => {
//     <div style={simpleStyle}>
//       <h3>{props.item.trackName}</h3>
//       <h4>{props.item.collectionName}</h4>
//     </div>
//   }

//   const detailView = () => {
//     <div style={detailStyle}>
//       <h2>{props.item.trackName}</h2>
//       <h3>
//         <Link to={`/artist/${props.item.artistId}`}>
//           {props.item.artistName}
//         </Link>
//       </h3>
//       <h3>
//         <Link to={`/album/${props.item.collectionId}`}>
//           {props.item.collectionName}
//         </Link>
//       </h3>
//       <h4>{props.item.primaryGenreName}</h4>
//       <h4>{props.item.releaseDate}</h4>
//     </div>
//   };

//   return (
//     <div onClick={clickHandler} style={{'display': 'inline-block'}}>
//         {/* This simple ternary shows the simple view when 'view' is false! */}
//         {view ? detailView() : simpleView()}
//     </div>
//   )
// }

// export default GalleryItem;

// // import { useState } from "react"

// // export function GalleryItem({ track }){
// //     let [isExpanded, setIsExpanded] = useState(false)

// //     const clickHandler = () => {
// //         setIsExpanded(!isExpanded)
// //     }

// // // styles --------------------------

// // const simpleStyle = {
// //     'width': '25vw',
// //     'height': '20vh',
// //     'border': '1px solid black',
// //     'margin': '2px'
// // }

// // const detailStyle = {
// //     'width': '80vw',
// //     'height': '20vh',
// //     'border': '1px solid black',
// //     'margin': '2px',
// //     'backgroundImage': `url(${track.artworkUrl100})`,
// //     'backgroundRepeat': 'no-repeat',
// //     'backgroundSize': 'cover',
// //     'color': 'yellow'
// // }

// // // views----------------------

// // const simpleView = (
// //     <div style={simpleStyle}>
// //         <h3>{track.trackName}</h3>
// //         <h4>{track.collectionName}</h4>
// //     </div>
// // )

// // const detailView = (
// //     <div style={detailStyle}>
// //         <h2>{track.trackName}</h2>
// //         <h3>{track.collectionName}</h3>
// //         <h4>{track.primaryGenreName}</h4>
// //         <h4>{track.releaseDate}</h4>
// //     </div>
// // )

// //     return (
// //         <div onClick={clickHandler} style={{'display': 'inline-block'}}>
// //             {isExpanded ? detailView : simpleView}
// //         </div>
// //     )
// // }
