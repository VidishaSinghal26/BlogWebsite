import React from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'
import AddBlog from './AddBlog'
function Header() {
  return (
    <header>
      <a class="app-name" href="/">The InfoSphere</a>
      <a class="create-blog" href="/addblog"> Create Blog </a>
      {/* <div className='create-blog'><Link to={'/addblog'}>Create Blog</Link></div> */}
      {/* <Link to={'/addblog'}>
          <button className='create-blog'>Create Blog</button>
        </Link> */}
      
    </header>
  )
}

export default Header