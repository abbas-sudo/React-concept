import React,{useState} from 'react';
import { Input, Button } from 'antd';
import {Link, useHistory} from 'react-router-dom';


function Login() {

  
  const history = useHistory();
  const [cred,setCred] = useState({
    username: "",
    password: "",
    auth: "",
  });

const inputEvent = (event) => {
  const { name, value } = event.target;
  setCred({
...cred,
[name]: value,
});
}

const checkCred = (event) => {
  event.preventDefault();
  const olds =  JSON.parse(localStorage.getItem('myData'));

  olds.map(old => {
    if (cred.username === old.name && cred.password === old.password)  {
      alert('sucess')
      const rand = Math.floor(Math.random() * 10);
      localStorage.setItem('token', rand);

      const token =  JSON.parse(localStorage.getItem('token'));      
          if(token){
            // console.log(value);
            setCred({
              auth: "trueee"
            })
         history.push({
          pathname: '/country',
          state: { ...cred.username}
        })
          }
      
    }
  })
  
  
  }


  return (
    <>
    <div className="formDesign">
      <h1>LogIn Form</h1>
      <form>
      <Input placeholder="Input Username" name="username" onChange={inputEvent}  />
      <Input placeholder="Input Username" type="password" name="password" onChange={inputEvent}  />
      <Button style={{float:'right'}} onClick={checkCred} type="primary">Submit</Button>
      <p >Don't have an account ?<Link to={'/Signup'} >Signup</Link></p>
      </form>
     </div>

     {cred.username} {cred.password}
    </>
  );
}

export default Login;

