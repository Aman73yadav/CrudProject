import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import style from "./reactproject.module.css"

const Editusers = () => {
  let[name ,setName]=useState("")
  let[salary,setSalary]=useState("")
  let[company,setCompany]=useState("")

  let {index}=useParams()
  let navigate=useNavigate()
  //console.log(index)

  useEffect(()=>{
    axios.get(`http://localhost:3000/users/${index}`)
    .then((resp)=>{
      console.log(resp.data)
      setName(resp.data.name)
      setSalary(resp.data.salary)
      setCompany(resp.data.company)
    })
  },[])

  let nameData=(e)=>{
    e.preventDefault()
    setName(e.target.value)
  }

  let salaryData=(e)=>{
    e.preventDefault()
    setSalary(e.target.value)
  }

  let companyData=(e)=>{
    e.preventDefault()
    setCompany(e.target.value)
  }
  let formHandle=(e)=>{
    e.preventDefault()
    let payload={name,salary,company}
    axios.put(`http://localhost:3000/users/${index}`,payload)
    .then(()=>{
      console.log("Data Has been sucessfully Updated")
    })
    navigate("/user")  
  }

  
  return (
    <div id={style.myForm}>
      <form action="">
        <tr>
          <th colSpan="2"><h4>Update Details</h4></th>
        </tr>

        <tr>
          <td><label htmlFor="">Sudent Name</label></td>
          <td>: <input type="text" value={name} onChange={nameData}/></td>
        </tr>
        
        <tr>
          <td><label htmlFor="">Subject1</label></td>
          <td>: <input type="text" value={salary} onChange={salaryData}/></td>
        </tr>

        <tr>
          <td><label htmlFor="">Subject2</label></td>
          <td>: <input type="text" value={company} onChange={companyData} /></td>
        </tr>
        <tr>
          <th><button colspan="2" onClick={formHandle}>Update</button></th></tr>
      </form>
    </div>    
  )
}
export default Editusers