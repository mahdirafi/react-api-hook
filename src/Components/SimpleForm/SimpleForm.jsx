import React from 'react';

const SimpleForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Submit Successful');
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }
    return (
        <div className='text-center '>

            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Write your name' className=' '/>
                <br />
                <input type="email" name='email' placeholder='write your email' /> <br />
                <input type="submit" value="Submit" className='cursor-pointer border' />
            </form>
        </div>
    );
};

export default SimpleForm;
