import React from "react";
import POPOSSpace from "./POPOSSpace";
import './POPOSList.css'
import data from './data.json'

function POPOSList (){
        const space = data.map((obj) =>{
            const {name, address, image} = obj;
            return (
                <POPOSSpace 
                name = {name}
                address = {address}
                image = {image}
                key = {name}
       />
       
            )

        })
       
    return (
        <div className='POPOSList'>
            {space}
        </div>
        
    )
}

export default POPOSList