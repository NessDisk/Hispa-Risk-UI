import React from 'react'
// import logo from "./../public/logo512.";
import logo from './Asset/mapamund.jpg';
import "./Board.css";
import PlayerInfo from './PlayerInfo';

function board() {
  return (
    <div className='Header-map'>        
      < img className='img'  src={logo} />    
      <PlayerInfo/>    
    </div>    
  )
}

export default board