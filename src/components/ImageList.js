import React from 'react';
import './ImageList.css';



const ImageList = (props) => {
    const imgList = props.images.map((image) => {
        return (
            <div className="img-block" key={image.id}>
                <img src={image.urls.regular} alt={image.alt_description} />
            </div>
        )
    })
    return (<div className="ImageList">
        {imgList}
    </div>);
}

export default ImageList;