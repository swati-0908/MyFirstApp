import React, { useState } from 'react'

const Forms1 = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: ""
    })
    const [showData, setShowData] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((preValues) => ({
            ...preValues,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("First Name: ", formData?.firstName);
        console.log("Last Name: ", formData?.lastName);
        setShowData(true)
    }

    return (
        <>
            <h1>Forms1</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" placeholder="Enter First Name" name="firstName" value={formData?.firstName}
                        onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" placeholder="Enter Last Name" name="lastName" value={formData?.lastName}
                        onChange={(e) => handleChange(e)} />
                </div>
                <button type="submit">Submit</button>
            </form>
            {showData &&
                <>
                    <h5>First Name: {formData?.firstName}</h5>
                    <h5>Last Name: {formData?.lastName}</h5>
                </>
            }
        </>
    )
}

export default Forms1
