import React from 'react'
import './Home.css';

function Home() {
  return (
    < div className='body_home'>
            <div className='Tittle-home-top'> Hispa-risk </div> 
            <div className='Body_home_rooms'>
                <div className='new_Room_Box_leftbox'>
                   <div className='button_test'>Crear una nueva sala</div>                   
                </div>
                <div className='enter_rooms_rightbox'> 
                  <div className='room_Tittle'> Rooms </div>
                  <div className='name_Roon_list_Home' >
                    <div> room 1 </div>
                    <div> room 2 </div>
                  </div>
                  <button className='join_Roon_boton_Home' >
                  Unirse
                  </button>
                </div>
            </div>
    </ div>
    
  )
}

// Home.propTypes = {}

export default Home
