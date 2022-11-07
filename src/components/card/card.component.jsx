import React from "react";
import './card.styles.css';
import CardTitle from "../cardTitle/cardTitle.component";
import CardInfo from "../cardInfo/cardInfo";
import CardImage from "../cardImage/cardImage";


const Card = ({title,image,info,onClick}) =>{
    return(
        <div className="card" onClick={() => {
            onClick();
        }}>
            <div className="card-body"> 
            <CardTitle title={title}></CardTitle> 
            <CardImage url={image}></CardImage>
            <CardInfo info={info}></CardInfo>
            </div>
        </div>
    )
}


export default Card