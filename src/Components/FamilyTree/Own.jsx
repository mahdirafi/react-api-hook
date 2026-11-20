import React from 'react';
import Special from './Special';

const Own = ({assets}) => {
    return (
        <div className='border rounded w-5/12 mx-auto p-3 m-3'>
            <h2>Own</h2>
            <section>
                <Special assets={assets} name='Rafi'/>
            </section>
        </div>
    );
};

export default Own;