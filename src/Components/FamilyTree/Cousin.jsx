import React from 'react';
import Friend from './Friend';
 

const Cousin = ({name,asset}) => {
   
    return (
        <div className='border rounded w-5/12 mx-auto p-3 m-3'>
            <h2>{name}</h2>
            {
                name === 'Runa' && <special asset={asset}></special>
            }
            {
                name=== 'Riya' && <Friend> </Friend>
            }
        </div>
    );
};

export default Cousin;