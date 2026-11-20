import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';

const Grandpa = ({assets}) => {
    return (
        <div  >
            <h2>Grandpa</h2>
            <section className='flex gap-2'>
                <Dad assets={assets}/>
                <Uncle/>
                <Aunt/>
            </section>
            
        </div>
    );
};

export default Grandpa;
