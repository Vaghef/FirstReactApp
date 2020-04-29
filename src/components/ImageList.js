import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

// const ImageList = (props) => {
//     const Images = props.images.map((image) => {
//         return <img key={image.id} src={image.urls.regular} alt={image.description} />
//     });
//     return <div>{Images}</div>
// }
const ImageList = (props) => {
    const Images = props.images.map((image) => {    
        return <ImageCard key={image.id} image={image} />
    });
    return <div className="image-list">{Images}</div>
}

export default ImageList;