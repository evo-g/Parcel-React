import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='conatiner'>
        <Link to='/dummy'>T</Link>
      </div>
    )
  }
}

export default Navbar;
