import React from "react";
import './cardTitle.styles.css';


const CardTitle = ({title}) => {
    return(
        <div className="card-title"> {title} </div>
    )
}

export  default CardTitle;