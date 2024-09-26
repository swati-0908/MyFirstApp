import React, { useState } from 'react'

const Form = () => {

    const [firstName, setFirstName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("firstName", firstName);
    }
    return (
        <>
            <h1>Form</h1>
            <form action="" onSubmit={handleSubmit}>
                <label>First Name: </label>
                <input
                    type="text"
                    placeholder='Enter First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input type="submit" />
            </form>
        </>
    )
}

export default Form