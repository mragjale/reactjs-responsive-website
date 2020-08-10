import React from 'react';


const Card = (props) => {
    return (
        <>

            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgSrc} className="card-img-top card-img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href={props.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">{props.tech}</a>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Card;