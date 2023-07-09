import React, { useEffect, useState } from "react"
import axios from "axios"
import style from "./reactproject.module.css"
import { Link } from "react-router-dom"
const Users=()=>{
    let [content, setContent] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then((response)=>{
            console.log("GOT THE DATA");
            setContent(response.data);
        }) 
        .catch(()=>{
            console.log("Somthing went wrong");
        })
    }, [] )

    let deleteData=(abc)=>{
        axios.delete(`http://localhost:3000/users/${abc}`)
        window.location.assign("/users")
    }
    return(
        <div id={style.home} >
            {content.map((x)=>{
                return(
                    <div id={style.cards}>
                       <table>
                        <tr>
                            <th colSpan="2" > <h5> Student {x.id} </h5> </th>
                        </tr>
                        <tr>
                            <td>Student Name</td>
                            <td>: {x.name} </td>
                        </tr>
                        <tr>
                            <td>Subject1</td>
                            <td>: {x.salary} </td>
                        </tr>
                        <tr>
                            <td>Subject2</td>
                            <td>: {x.company}</td>
                        </tr>
                        <tr>
                            <td><Link to={`/edit/${x.id}`}>EDIT</Link></td>
                            <td><button onClick={()=>{deleteData(x.id)}} >DELETE</button></td>
                        </tr>
                       </table>
                    </div>
                )
            })                
            }
        </div>
    )
}
export default Users