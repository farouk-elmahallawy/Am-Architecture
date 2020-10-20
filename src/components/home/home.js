import React from 'react'
import photo2 from '../../images/fff.jpg'
import './home.css'
class Home extends React.Component{
    render(){
        return(
            <div className = 'firstPhoto'>
                  <div className='first'>
                         <img className="second" src = {photo2} alt = 'photo2'/>       
                  </div>
                <div className='head'>
                    <div className="head1">
                        <h2 >Excepteur sint occaecat</h2>
                        <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                    </div>
                    <div className="head2">
                        <h2> Duis aute irure dolor in </h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        <br/> sed do eiusmod tempor incididunt ut
                        dolore magna aliqua.
                        <br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        </p>
                    </div>
                    <div className="head3">
                        <h2>Officia deserunt mollit</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        </p>
                    </div>
                 </div>
                 <footer>
                 <div className='footer'>
                     <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                     <span>Created by : Farouk El-Mahallawy</span>
                 </div>
                 </footer>
            </div>
        );
    }
}
export default Home