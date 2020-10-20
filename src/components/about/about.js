import React from 'react'
import photo1 from '../../images/fd097614-892e-d7cb-c658-c05363e49c5d.jpg'
import '../about/about.css'
import {Link} from 'react-router-dom'

class About extends React.Component{
    render(){
        return(
            <div>
                <div className='firstDiv'></div>
                <div className='about'>
                    <ul className="we">
                        <li> <Link to='/About_us/Mostafa'> Mostfa </Link> </li>
                        <li> <Link to='/About_us/Ahmed'> Ahmed </Link> </li>
                    </ul>
                    <img className='photo' src={photo1} alt="photo1"/>
                    <div className='content'>
                        <h1> Ecological approaches and organic farming</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
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
export default About