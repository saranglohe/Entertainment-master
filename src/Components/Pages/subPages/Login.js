import React, { useState } from "react";

const Login=()=>{

    const [user, setUser]=useState({
        name:"",
        email:"",
        phone:"",
        address:"",
        password:"",

    })

    let name, value;
    const getUserData=(event)=>{
        name=event.target.name;
        value=event.target.value;

        setUser({...user, [name]:value});

    };

    const postData=async (e)=>{
        e.preventDefault();

        const {name, email, phone, address, password}=user;

        if(name && email && phone && address && password){

        

    const res=  await fetch("https://movieapi-c89e6-default-rtdb.firebaseio.com/movieapilogin.json",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(
            {
                name,
                email,
                phone,
                address,
                password,
        
            }  
        ),

    });

    if(res){
        setUser({
            name:"",
            email:"",
            phone:"",
            address:"",
            password:"",
        });
        alert("Data stored successfully");
    }

}      

       else{
        alert("please fill all data")
       }


    };

    return(
        <>
        <div className="login_cred" method="POST">

        <input className="name" type="text" placeholder="Enter Name" name="name" autoComplete="off" value={user.name} onChange={getUserData}/>
        <input className="email" type="email" placeholder="Email" name="email" autoComplete="off" value={user.email} onChange={getUserData}/>
        <input className="Phone" type="number" placeholder="Phone" name="phone" autoComplete="off" value={user.phone} onChange={getUserData}/>
        <input className="Address" type="text" placeholder="Address" name="address" autoComplete="off" value={user.address} onChange={getUserData}/>
        <input className="Password" type="password" placeholder="Password" name="password" autoComplete="off" value={user.password} onChange={getUserData}/>
        <button className="Submit_button" method="POST" onClick={postData}>Submit</button>


        </div>
       

        
       
        </>
    )
}; 
export default Login