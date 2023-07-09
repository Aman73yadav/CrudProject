
import React from "react"
import { useState } from "react"
import style from "./reactproject.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Createusers=()=>{
    let [name, setName] = useState("")
    let [salary, setSalary] = useState("")
    let [company, setCompany] = useState("")

    let navigate=useNavigate()

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        setCompany(e.target.value)
    }

    let formHandle=(e)=>{
        e.preventDefault()
        // console.log(name, salary, company);
        let payload={name,salary,company}
        axios.post("http://localhost:3000/users",payload)
        .then(()=>{
            console.log("DATA HAS BEEN UPLOADED");
            navigate("/users")
          }).catch(()=>{
            console.log("SOMTHING WENT WRONG");
          })
    }  
    
    return(
        <div id={style.myform} >
            <form action="">
            <label htmlFor="">Student Name</label>
            <input type="text" value={name} onChange={nameData} />
            <br />
            <label htmlFor="">Subject1</label>
            <input type="number" value={salary} onChange={salaryData} />
            <br />
            <label htmlFor="">Subject2</label>
            <input type="text" value={company} onChange={companyData} />
            <br />
            <button onClick={formHandle} >Submit</button>
            </form>
        </div>
    )
}
export default Createusers