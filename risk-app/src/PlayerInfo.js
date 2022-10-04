import React from 'react'
import './PlayerInfo.css';

function PlayerInfo() {
  return (
    <div className='Header_Player_info'>
      <div className='top_box_Player_info'>
          <div className='DiceInfo-topBox-Player_info'>
                <div> 
                      <div>name</div>
                      <div>dice</div> 
                </div>
                <div className='vs-word-Player_info'>vs</div>
                <div> 
                      <div>name</div>
                      <div>dice</div> 
                </div>
          </div>
          <div className='Button-bottomBox-Player_info'> 
                <button className='Brush-map-B1'> b1 </button>
                <button className='Clear-map-B2'> b2 </button>
                <button className='Clear-boar-B3'> b3 </button>   
          </div>
       
       </div>
      <div className='top_down_Player_info'>
        <div> player name</div>
        <div> player 1</div>
      </div>
    </div>
  )
}

export default PlayerInfo