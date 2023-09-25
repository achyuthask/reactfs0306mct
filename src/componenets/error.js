import React from 'react'
import {Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Errorpage = () => {
  return (
    <div>
      Page not found 
      click on backbutton
      <Link to='/recipelist'>
          <Button variant="success">recipesearch</Button>
          </Link>
    </div>
  )
}

export default Errorpage;
