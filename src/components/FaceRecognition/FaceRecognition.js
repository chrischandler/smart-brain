import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ box, imageUrl }) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img id="inputimage" src={imageUrl} width="500px" height="auto" alt=""/>
                <div className="bounding-box" style={{top: box.leftCol, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol,}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition;