import React, { useState } from 'react';
const Multiinput = () => {

    const [userRegistration, setUserRegistration]= useState({
           username:"",
           emailid:"",
           phone:"",
           password:""


    });

            const [records, setRecords]= useState([]);
            const handleInput = (e) => {

                        const name= e.target.name;
                        const value=e.target.value;
                        console.log(name, value);

                        setUserRegistration({...userRegistration, [name]:value });
            }

                const handleSubmit = (e) =>{

                    e.preventDefault();

                    const newRecord ={...userRegistration, id: new Date().getTime().toString()}
            
                    setRecords([...records, newRecord]);
                    console.log(records);
         
                    setUserRegistration({username:"", email:"", phone:"", password: ""});
         
                }
                return
                (
    
        <>
            <form action="" onSubmit={handleSubmit}> 
                <div>
                    <label htmlFor="username">FullName</label>
                    <input type="text" autoComplete="off"
                    value={userRegistration.username}
                    onChange={handleInput}
                     name="FullName" id="useraname"></input>
                </div>


                <div>
                    <label htmlFor=" emailid">Emai id</label>
                    <input type="text" autoComplete="off" 
                    value={userRegistration.emailid}
                    onChange={handleInput}
                    name=" emailid" id="emailid"></input>
                </div>


                <div>
                    <label htmlFor="phone ">Phone</label>
                    <input type="text" autoComplete="off" 
                    value={userRegistration.phone}
                    onChange={handleInput}
                    name="phone" id="Phone"></input>
                </div>


                <div>
                    <label htmlFor="Password">Password</label>
                    <input type="password" autoComplete="off" 
                    value={userRegistration.password}
                    onChange={handleInput}
                    name="Passoword" id="Password"></input>
                </div>  

                <button type="submit">Registration</button>

            </form>
            <div>
                {
                    records.map((curElem)=>{
                        return(
                            <div className="showDataStyle">
                                <p>{curElem.username}</p>
                                <p>{curElem.emailid}</p>
                                <p>{curElem.phone}</p>
                                <p>{curElem.password}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>    
    )
}

export default Multiinput;