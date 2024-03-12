import React, { useState } from 'react';
import Axios from 'axios';;

const App = () => {
  const [compname ,  setCompname] = useState<string>(''); 
  const [date ,  setDate] = useState<string>('');
  const[day , setDay] = useState<string>('');

  //as i am using typescript here the syntax is a bit different
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompname(e.target.value);
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  }
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDay(e.target.value);
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(`Username: ${username} , Password: ${password} , Email: ${email}`);
  
  //getiing data from backend and posting it in the frontend using axios
  Axios.post("http://localhost:6967/form",{
    compname:compname,
    date:date,
    day:day
  })
  .then((res) =>{
    console.log(res);
  
  })
  .catch(err => console.log(err));
}
  return(
<div className='flex justify-center items-center h-screen bg-gradient-to-r from-slate-200 to-blue-200'>
    <div className="bg-white shadow-xl rounded-lg">
        <h1 className="text-red-600 font-semibold text-center mb-4">Moye Moye</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-md shadow-sm">
                <input type="text" placeholder="Name solra" value={compname} onChange={handleUsernameChange} className="p-2 m-2 w-34 h-30 border-2 border-gray-300 rounded-md"/>
                <input type="password" placeholder="Password solra" value={date} onChange={handlePasswordChange} className="p-2 m-2 w-34 h-30 border-2 border-gray-300 rounded-md"/>
                <input type="email" placeholder="Email solra" value={day} onChange={handleEmailChange} className="p-2 m-2 w-34 h-30 border-2 border-gray-300 rounded-md"/>
            </div>
            <button type="submit" className="mt-10 p-4 m-4 bg-blue-500 text-white rounded-md w-40 h-30">Submit</button>
        </form>
    </div>
</div>

  )
}

export default App ;