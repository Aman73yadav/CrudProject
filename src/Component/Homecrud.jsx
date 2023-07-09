import React from 'react'
import { Link } from 'react-router-dom'
import style from "./reactproject.module.css"

const Homecrud = () => {
  return (
    <section id={style.nav} >
        <Link to="/">CREATE-USERS</Link>
        <Link to="/users">USERS</Link>       
      
    </section>
  )
}

export default Homecrud
