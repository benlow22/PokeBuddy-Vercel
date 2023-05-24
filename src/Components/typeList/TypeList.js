import { Button } from "../button/Button";
import React from "react";
import { pokemonTypes } from '../../database.js';


export function TypeList (props) {


    const handleClick = (type) => {
        props.onAdd(type);
    }

    return (
        <div className="full-List">
            {pokemonTypes.map(type=>{
                return (
                    <Button 
                        typeName={type} 
                        onClick={handleClick} 
                        //id={type} 
                        //key={type}
                    />
                )
            })}           
        </div>
    )
}
