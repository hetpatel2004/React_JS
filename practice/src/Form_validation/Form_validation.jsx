import React, { useActionState } from 'react'

function    Form_validation() {
    const [data, action, pending] =useActionState(submit,undefined)
    async function submit(pre, form_data) {
        const name = form_data.get("name");
        const password = form_data.get("password")
        const email = form_data.get("email")
        await new Promise((res)=>(setTimeout(res, 1000)))
        
        console.log(name ,password,email)
    }
  return (
    <form action={action}>
        <label htmlFor="">Name:-</label>
        <input type="text" placeholder='name' name='name'/>
        <br />
        <label htmlFor="">Password:-</label>
        <input type="text" placeholder='password' name='password'/>
        <br />
        <label htmlFor="">Email</label>
        <input type="text" placeholder='email' name='email'/>
        <br />
        <button onSubmit={submit}>Submit</button>
    </form>
  )
}

export default Form_validation