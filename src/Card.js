import React from 'react';

const Card = ({ name, color }) => {
    return (
        <div className={`card text-white bg-${color} mb-3`} style={{ maxWidth: '18rem' }}>
            <div className="card-header">Card {name}</div>
            <div className="card-body">
                <h5 className="card-title">Card {name}</h5>
                <p className="card-text">This is the content of Card {name}.</p>
            </div>
        </div>
    );
};

export default Card;
