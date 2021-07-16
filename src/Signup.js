import React,{useState} from 'react';
import { Input, Button } from 'antd';

const Signup = () => {

    const [creCred,setCreCred] = useState({
        username: "",
        password: "",
        number: "",
    });
    
    const inputEvent = (event) => {
      const { name, value } = event.target;
      setCreCred({
          ...creCred,
          [name]: value,
        });
    }
    
    const setData = () =>{
    
                const obj = {name: creCred.username, password: creCred.password, phone: creCred.number };
                const old_values =  JSON.parse(localStorage.getItem('myData'));
                
                if(old_values){
                    old_values.push(obj)
                    localStorage.setItem('myData', JSON.stringify(old_values))
                }
                else{
                    localStorage.setItem('myData', JSON.stringify([obj]))
                }

                setCreCred({
                    username: "",
                    password: "",
                    number:"",
                })
                console.log(obj)
            }
            
    return (
        <>
        <div className="formDesign">
          <h1>Signup Form</h1>
          <form>
          <Input placeholder="Input Username" name="username"  value={creCred.username} onChange={inputEvent}  />
          <Input placeholder="Input Username" type="password" value={creCred.password}  name="password" onChange={inputEvent}  />
          <Input placeholder="Input Ph. No : " type="number" value={creCred.number}  name="number" onChange={inputEvent}  />          
          <Button type="primary" onClick={setData}>Submit</Button>

          </form>
         </div>
        </>
    )
}

export default Signup