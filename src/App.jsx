import React, { useState } from 'react'

const App = () => {
  const [formData,setformData] = useState({
    name : "", //textbox
    gender : "", //radio
    email : "", //email
    password : "",//password
    phone : "",//phone
    hobby : [],//checkbox as it can be multiple values
    city : "",//dropdown
    })
  const handleChange = (e) => {
    const {name,value,type,checked} = e.target //name:name,email,.. , value : abc,abc@gmail.com,.. type : input type,checked : checkbox
    setformData({...formData,[name] : value});
    

  }

  const handleSubmit = () =>{
    localStorage.setItem("Data",JSON.stringify(formData));
    alert("Data Added Successfully")
  }

  return (
    <div>
      <center>
      <h2><u>Form</u></h2>
      <table>
        <tbody>
          <tr>
            <td>Enter Name : </td>
            <td><input type="text" name="name" value={formData.name} onChange={handleChange}/></td>
          </tr>

          <tr>
            <td>Enter Gender : </td>
            <td><input type="radio" name="gender" value="female" onChange={handleChange}/>Female
            <input type="radio" name="gender" value="male" onChange={handleChange}/> Male</td>
          </tr>

          <tr>
            <td>Enter Email : </td>
            <td><input type="email" name="email" value={formData.email} onChange={handleChange}/></td>
          </tr>

          <tr>
            <td>Enter Password : </td>
            <td><input type="password" name="password" value={formData.password} onChange={handleChange}/></td>
          </tr>

          <tr>
            <td>Enter Phone : </td>
            <td><input type="tel" name="phone" value={formData.phone} onChange={handleChange}/></td>
          </tr>

          <tr>
            <td>Enter Hobby : </td>
            <td><input type="checkbox" name="hobby" value="Reading" onChange={handleChange}/>Reading
            <input type="checkbox" name="hobby" value="Cooking" onChange={handleChange}/>Cooking
            <input type="checkbox" name="hobby" value="Coding" onChange={handleChange}/> Coding</td>
          </tr>

          <tr>
            <td>Enter City : </td>
            <td><select name="city" value={formData.city} onChange={handleChange}>
              <option value=" ">Select City</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Baroda">Baroda</option>
              <option value="Surat">Surat</option>
              </select></td>
          </tr>

          <tr><td><button onClick={handleSubmit}> Submit </button></td></tr>
        </tbody>
      </table>
      </center>
    </div>
  )
}

export default App