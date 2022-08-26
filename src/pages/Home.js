import React from 'react';
import '../styles/Home.css'


const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hello, My Name is Moazzam</h2>
        <div className='prompt'>
          <p> A passionate boy who works with <span>dedication</span> and have a 
        <span> creative ideas</span>.
          </p>
        </div>
      </div>

      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
                <li> Bid Specialist</li>
                <li> Python</li>
                <li> Accounting</li>
                <li> Management</li>
        </ol>
      </div>
    </div>
  )
}

export default Home
