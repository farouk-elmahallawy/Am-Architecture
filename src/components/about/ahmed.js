import React from 'react'
import shahawy from '../../images/shahawy.jpg'
import {Link} from 'react-router-dom'
class Ahmed extends React.Component {
    render(){
        return (
            <div>
                <div className='firstDiv'></div>
                <div className='about'>
                    <ul className="shahawywe">
                        <li><Link  to='/About_us/Mostafa'> Mostfa </Link></li>
                        <li><Link  to='/About_us/Ahmed'> Ahmed </Link></li>
                    </ul>
                    <img className='shahawyphoto' src={shahawy} alt="photo1"/>
                    <div className='shahawycontent'>
                        <h1> Eng.Ahmed El-Shahawy</h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Donec sem tellus, aliquam quis elementum quis,
                              viverra mattis nulla. Pellentesque vestibulum non dolor non tempor.
                               Proin rhoncus magna nibh, a aliquam arcu scelerisque non.
                                Aenean tempor lacus ac fringilla consectetur.
                                 Curabitur posuere purus eu dui ultricies euismod.
                                  Aliquam imperdiet eu turpis convallis dictum.
                                   Quisque pulvinar est eu sapien sodales facilisis.
                                    Cras purus leo, elementum vel gravida non, ornare vel sapien.
                                     Vivamus ligula nisi, sodales id porttitor a, pellentesque a orci.
                                      Nulla facilisi.</p>
                    </div>
                    </div>
                    <footer>
                        <div className='footer-about'>
                            <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                            <span>Created by : Farouk El-Mahallawy</span>
                        </div>
                    </footer>
            </div>
        );
    }
}
export default Ahmed