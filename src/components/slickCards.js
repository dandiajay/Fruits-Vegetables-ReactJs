import React from "react";

const SlickCards=({Image,description})=>{
    return(
        <>
        <div className="card shadow-md " style={{maxHeight:'250px'}}>
            <img src={Image} alt="no-img" className="img-fluid" style={{height:"200px"}}/>
            <div className="card-body">
        <p className="text-center">{description}</p>
            </div>
        </div>
        </>
    )
}

export default SlickCards;