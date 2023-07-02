import React from 'react'
import { useParams } from 'react-router-dom';

export default function ReadScreen() {
    
  let { _id,text, description, image } = useParams();
  return (
    <div>
      <div>
      {text}
      </div>
    </div>
  )
}
