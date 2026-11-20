import React from 'react';
import UseInputField from '../../Hook/UseInputField';

const HookForm = () => {
    const [name, nameOnChange] = UseInputField('')
    const handleSubmit = e => {
        e.preventDefault();
        console.log("Submit" , name);
    }
    return (
        <div className='text-center'>
            <form  onSubmit={handleSubmit}>
                <input defaultValue={name} onChange={nameOnChange} type="text" className='border-3 rounded'/>
                <br />
                <input type="submit" value="Submit" className='py-1 px-2 border mt-2 rounded cursor-pointer'/>
            </form>
        </div>
    );
};

export default HookForm;