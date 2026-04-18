import axios from 'axios';
import React, { useActionState } from 'react';
import { Link } from 'react-router-dom';

function Ragister() {

    function submit(prev, formData) {
        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");

        if (name === "") {
            return { error: "Enter Your Name" };
        }
        if (email === "") {
            return { error: "Enter Your Email" };
        }
        if (password === "") {
            return { error: "Enter Your Password" };
        }

        
        
        
        axios.post("http://localhost:3000/user", {
            name,
            password,
            email
        })
        .then(res => {
            console.log(res.data);
        })
        
        console.log(name, email, password);
        return { success: "Registered Successfully" }; 

    }

    const [state, formAction, pending] = useActionState(submit, {});

    return (
        <>
            <form action={formAction}>
                <label htmlFor="name">UserName :</label>
                <input name="name" placeholder="Enter Your UserName" />
                <br /><br />

                <label htmlFor="email">Email :</label>
                <input name="email" placeholder="Enter Your Email" />
                <br /><br />

                <label htmlFor="password">Password :</label>
                <input name="password" placeholder="Enter Your Password" />
                <br /><br />

                <p style={{ color: "red" }}>
                    {state?.error}
                </p>

                <p style={{ color: "green" }}>
                    {state?.success}
                </p>
                    
                <input type="submit" value={pending ? "Submitting..." : "Submit"}/>
            </form>
        </>
    );
}

export default Ragister;