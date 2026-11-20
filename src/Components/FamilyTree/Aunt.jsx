import React, { useContext } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunt = () => {
    const[money,setMoney] = useContext(MoneyContext);
    const handleMoney= () => {
        setMoney(money + 5000);
    }
    return (
        <div className='border rounded w-5/12 mx-auto p-3 m-3'>
                <h2>Aunt</h2>
                 <section>
                    <Cousin name='Runa'/>
                    <Cousin name='Mukul'/>
                    <Cousin name='Riya'/>
                    <button onClick={handleMoney} 
                    className='p-2 bg-sky-300 border rounded text-red-950 cursor-pointer text-[18px]'>Add 5000tk</button>
                </section>
        </div>
    );
};

export default Aunt;