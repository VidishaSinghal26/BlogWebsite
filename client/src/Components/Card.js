import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import './Card.css'
import {Link} from 'react-router-dom'
function Card({ _id,text, description,image, updateMode, deleteTodo }) {
  console.log(text);
  console.log(_id)
  const [line, setLine] = useState(false);
  function changer() {
    setLine(!line);
  }
  return (
   
    <div className="card">
  
      <img className="image" src={image} alt="" />
      <h3>{text}</h3>
          <p className="blog-desc">{description}</p>
          <div>
          <Link to={`/readblog/${_id}}`}><button className='create-button'>Read Blog</button></Link>
          <button  style={{marginLeft:'35px'}}className='create-button' onClick={deleteTodo}>Delete Blog</button>
          </div>
            {/* <div className="icons">
              <BiEdit className="icon" onClick={updateMode} />
              <AiFillDelete className="icon" onClick={deleteTodo} />
            </div> */}
          </div>

  );
}

export default Card;