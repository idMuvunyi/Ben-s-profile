import React from 'react'
import profile from '../images/profile.jpg'


export default function Header() {
  return (
    <>
      <div className="navbar">
        <div className="container flex">
          <h2>Ben Ntwali</h2>
          <nav>
            <ul>
              <li>
                <a href="index.js">Home</a>
                <a href="expertise.js">Expertise</a>
                <a href="contact.js">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <section className="home">
        <div className="container grid">
          <div className="text-intro">
            <h1>
              Hello, <br />
              My name is Ben Ntwali. Just call me <b>Ben</b>!
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              mollitia, voluptates optio dicta omnis nihil consequatur debitis
              non. Mollitia veritatis aliquid ipsa excepturi dolorum sit nemo
              optio vel necessitatibus delectus?
            </p>
            
            <a href="#home" className="btn btn-outline"> Read More</a>
            
          </div>

          <img src={profile} alt="Ben profile" />
          
        </div>
      </section>
    </>
  )
}


