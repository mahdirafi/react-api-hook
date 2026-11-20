import React, { useState } from 'react';

const ControlledField = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,password);
        
        if(password.length < 6){
            setError("Password must be 6 characters or longer")
        }else(
            setError("")
        )
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordOnChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value)

        // if(password.length < 6){
        //     setError("Password must be 6 characters or longer")
        // }else(
        //     setError("")
        // )
    }
    return (
        <div className='text-center'>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email"  placeholder='email' required 
                onChange={handleEmailChange} defaultValue={email}/> <br />

                <input type="password" name="password"  placeholder='password' required
                onChange={handlePasswordOnChange} defaultValue={password}/> <br />

                <input type="submit" value="submit" className='cursor-pointer' />
            </form>
            <p className='text-red-800 text-xl '>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;