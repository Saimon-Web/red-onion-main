import React, { useEffect, useState } from 'react';
import Eachfood from '../Eachfood/Eachfood';

const Breakfast = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCategory(data.filter(c => c.category === 'Breakfast')))
    }, [])
    return (
        <div className='container'>
            <div className="row">
                {category.map(eachfood => <Eachfood
                    key={eachfood.id}
                    eachfood={eachfood}
                ></Eachfood>)}
            </div>


        </div>
    );
};

export default Breakfast;