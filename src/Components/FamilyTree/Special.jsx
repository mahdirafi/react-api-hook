import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({name , assets}) => {
    const newAsset = useContext(AssetContext);
    
    console.log('New Asset:', newAsset);
    return (
        <div className='border rounded   p-3 m-3'>
            <h2>Special: {name}</h2>
            <p>assets: {assets}</p>
        </div>
    );
};

export default Special;