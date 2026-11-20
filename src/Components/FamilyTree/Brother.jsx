import React, {useContext } from 'react';
import { MoneyContext } from './FamilyTree';

const Brother = () => {
    const [money,setMoney] = useContext(MoneyContext);
    return (
        <div className='border rounded w-5/12 mx-auto p-3 m-3'>
            <h2>Brother</h2>
            <button onClick={() => setMoney(money + 1000)}
            className='p-2 m-2 rounded text-[18px] cursor-pointer shadow-2xl bg-green-900' >Add Money:100</button>

           <button 
            onClick={() => money > 0 ? setMoney(money - 1000) : null}
            className='p-2 m-2 rounded text-[18px] cursor-pointer shadow-2xl bg-red-900'
            >
            Remove Money: 1000
          </button>


        </div>
    );
};

export default Brother;