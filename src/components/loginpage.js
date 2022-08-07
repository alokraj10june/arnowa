import React, { useState } from "react"
const Form=()=>{
    const [Name,setname]=useState()
    const [email,setemail]=useState()
    const [mobile,setmobile]=useState()
    const [allEntry,setallEntry]=useState()
    const submitForm=(e)=>{
        e.preventDefault();
        const newEntry={Name:Name,email:email,mobile:mobile};
        setallEntry([newEntry])
    }
    return(
        <>
        <form action="" onSubmit={submitForm}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" autoComplete="off" value={Name}
                onChange={(e)=>setname(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" autoComplete="off" value={email}
                onChange={(e)=>setemail(e.target.value)}

                />
            </div>
            <div>
                <label htmlFor="mobile-number">Mobile Number</label>
                <input type="number" name="mobile-number" autoComplete="off" value={mobile}
                onChange={(e)=>setmobile(e.target.value)}

                />
            </div>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default Form;