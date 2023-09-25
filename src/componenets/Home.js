import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './home.css';

const Home = () => {
  return (
    <div className='container'>
     <img src="https://hips.hearstapps.com/hmg-prod/images/grilled-chicken-breast-lunch-bowl-with-fresh-tomato-royalty-free-image-1684934244.jpg" alt=" " ></img>
   
     <Link to='/recipelist'>
<Button variant="primary" class="btn">Click me</Button>
</Link>
    </div>
   
  )
}

export default Home;

