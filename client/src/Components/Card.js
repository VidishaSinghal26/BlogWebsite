import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import './Card.css'
function Card({ text, description,image, updateMode, deleteTodo }) {
  const [line, setLine] = useState(false);
  function changer() {
    setLine(!line);
  }
  return (
    <div className="card">
      <img className="image" src={image} alt="" style={{width:"100%"}}/>
      <h3>{text}</h3>
          <h5>{description}</h5>
          <div>
          <button className='create-button' onClick={updateMode}>Read Blog</button>
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