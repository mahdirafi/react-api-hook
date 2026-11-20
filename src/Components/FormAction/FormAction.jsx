import React from 'react';

const FormAction = () => {
    const handleFormActon = (formData) => {
        console.log(formData.get("name"));
        console.log(formData.get("email"));
    }
    return (
        <div className='text-center border-3'>
            <form action={handleFormActon}>
                <input type="text" name="name" id="" placeholder='write your name'/> <br />
                <input type="email" name="email" id="" placeholder='write your email'/> <br />
                <input type="submit" name="submit" id="" value='Submit' className='cursor-pointer' /> <br />
            </form>
        </div>
    );
};

export default FormAction;