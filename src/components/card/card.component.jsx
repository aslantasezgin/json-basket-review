import React from "react";
import './card.styles.css';
import CardTitle from "../cardTitle/cardTitle.component";
import CardInfo from "../cardInfo/cardInfo";
import CardImage from "../cardImage/cardImage";


const Card = () =>{
    return(
        <div className="card">
            <div className="card-body"> 
            <CardTitle title="sezgin"></CardTitle> 
            <CardImage url="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"></CardImage>
            <CardInfo info="Ürün Bilgisi 1 "></CardInfo>
            </div>
        </div>
    )
}


export default Card