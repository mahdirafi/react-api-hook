import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';

export const AssetContext = createContext('');
export const MoneyContext  = createContext(0);

const FamilyTree = () => {
    const[money,setMoney] = useState(0)

    const assets = "Gold";
    const newAsset = "Diamond";
    return (
        <div className='text-center text-2xl text-green-200 font-semibold border rounded w-[90%] mx-auto p-3 m-3'>
            <h2>Family Tree</h2>
            <h2>Total Family Money: {money}</h2>
             <MoneyContext value={[money,setMoney]}>
                <AssetContext.Provider value={newAsset}>
                    <Grandpa assets={assets}/>
                </AssetContext.Provider> 
             </MoneyContext>
        </div>
    );
};

export default FamilyTree;