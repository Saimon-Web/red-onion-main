import React from 'react';

const Eachfood = (props) => {
    const { img, name, price, description, category } = props.eachfood;
    return (
        <div className='col-lg-4'>
            <img src={img} alt="" />
            <div>
                <h1>  {name}</h1>
                <p>Price:{price}</p>
                <p>{description}</p>

            </div>


        </div>
    );
};

export default Eachfood;