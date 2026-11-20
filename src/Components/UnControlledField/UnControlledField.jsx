import React, { useRef } from 'react';

const UnControlledField = () => {

    const emailRef = useRef("");
    const passwordRef= useRef("")

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(emailRef.current.value);
    const email = emailRef.current.value;
    console.log(email);
    const password = passwordRef.current.value;
    console.log(password);
    }

    return (
        <div className='text-center'>
            <form onSubmit={handleSubmit}>
                 
                <input ref={emailRef}  type="email" name="email"  /> <br />
                <input ref={passwordRef} type="password" name="password"  /> <br />
                <input type="submit" name="submit" className='cursor-pointer'/>
            </form>
        </div>
    );
};

export default UnControlledField;