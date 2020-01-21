import React from 'react';


function Preview(props) {
        
    return (
        <div className="preview">
            <p>{props.data.title}</p>
            <img src={props.data.url}></img>
        </div>
    );
}

export default Preview;

// worauf bezieht sich data in App.js?
