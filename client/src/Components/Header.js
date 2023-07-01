import React from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'
import AddBlog from './AddBlog'
function Header() {
  return (
    <header>
      <div className='app-name'>Blog App</div>
      <a class="create-blog" href="/addblog"> Create Blog </a>
      {/* <Link to={'/addblog'}>
          <button className='create-blog'>Create Blog</button>
        </Link> */}
      
    </header>
  )
}

export default Header