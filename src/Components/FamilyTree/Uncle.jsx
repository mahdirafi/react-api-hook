import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div className='border rounded w-5/12 mx-auto p-3 m-3'>
                <h2>Uncle</h2>
                <section>
                    <Cousin name='Rafsan'/>
                    <Cousin name='Himel'/>
                    <Cousin name='Sujon'/>
                </section>
        </div>
    );
};

export default Uncle;