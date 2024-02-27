import '../components/composant.css';
import React from 'react';
import Cats from '../assets/chat1.jpeg';
import Catss from '../assets/chat2.jpeg';
import Catsss from '../assets/chat3.jpeg'
import Matou from '../assets/chat4.jpeg';
 function Components(){

    return(
<>
<div className="container">
    <div className='card'>
        <h1> un chat</h1>
        <img src={Cats} className='img'/>
    <h2> toujours un chat</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation
        </p>
    </div>
    <div className='card'>
        <h1> un chat</h1>
        <img src={Catss} className='img'/>
    <h2> toujours un chat</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation
        </p>
    </div>
    <div className='card'>
        <h1> un chat</h1>
        <img src={Catsss} className='img'/>
    <h2> toujours un chat</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation
        </p>
    </div>
    <div className='card'>
        <h1> un chat</h1>
        <img src={Matou} className='img'/>
    <h2> toujours un chat</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation
        </p>
    </div>
</div>
</>
    )
}
export default Components;