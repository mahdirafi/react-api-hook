import React from 'react';
import Own from './Own';
import Brother from './Brother';
import Sister from './Sister';
 

const Dad = ({assets}) => {
    return (
        <div className='border rounded w-5/12 mx-auto p-3 m-3'>
                <h2>Dad</h2>
                 <section className=' gap-2'>
                    <Own assets={assets}/>
                    <Brother/>
                    <Sister/>
                    
                 </section>
        </div>
    );
};

export default Dad;