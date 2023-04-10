import React, { useState } from 'react';
import './Member.css'
import info from './info';

function Member(){
    const [list, setList] = useState(info);

    const handleDeleteAll = () => {
        setList([]);
    }

    return(
        <div className='main-area'>
            <h3>{list.length} birthday today</h3>
            {
                list.map((item)=>(
                    <div className="info-con">
            <img className="info-img" src={item.image}/>
            <div>
                <h6>{item.name}</h6>
                <p>{item.age} years</p>
            </div>
            </div>
                ))
            }
            <button onClick={handleDeleteAll}>Clear All</button>
            
        </div>
    )
}

export default Member;