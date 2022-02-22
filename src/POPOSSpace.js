import React from 'react'
import logo from './logo.svg'
import './POPOSSpace.css'

function POPOSSpace(props) {

    const {image, address, name} = props;

    
    return(
        <div className="POPOSSpace">
            <img 
            src={`${process.env.PUBLIC_URL}/images/${image}`} 
            width =' 300'
            height = '300'
            alt = 'public_space'
            
            />
            <h1>{name}</h1>
            <div>{address}</div>

    </div>
    )
    
}

export default POPOSSpace;