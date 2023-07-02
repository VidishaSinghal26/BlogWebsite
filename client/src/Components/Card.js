import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import './Card.css'
import {Link} from 'react-router-dom'
function Card({ _id,text, description,image, updateMode, deleteTodo }) {
  const isUpdating = true;
  return (
   
    <div className="card">
      <img className="image" src={image} alt="" />
      <h3>{text.substring(0,1).toUpperCase()+text.substring(1,15)+"..."}</h3>
          <p className="blog-desc">{description.substring(0,130)+" ..."}</p>
          <div>
          <Link to={'/readblog'} state={{
              isUpdating: `${isUpdating}`,
              _id: `${_id}`,
              text: `${text}`,
              description: `${description}`,
              image: `${image}`,
            }}><button className='create-button'>Read Blog</button></Link>
          <button  style={{float:'right'}}className='create-button' onClick={deleteTodo}>Delete Blog</button>
        </div>
    </div>

  );
}

export default Card;