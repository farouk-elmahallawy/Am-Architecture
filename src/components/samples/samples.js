import React from 'react'
import './samples.css'
import {Carousel} from 'react-bootstrap'
import photo1 from '../../images/1.jpg'
import photo2 from '../../images/2.jpg'
import photo3 from '../../images/3.jpg'
import photo4 from '../../images/4.jpg'
class Sampels extends React.Component{
    state ={
      samples:[],
     value : ''
    }
    handelSubmit = (e) =>{
      e.preventDefault();
      this.setState({samples:[...this.state.samples,this.state.value],value:''})
    }
    handelChange =(e) =>{
      this.setState({value:e.target.value})
    }
    handelRemove = (sample) => {
       const samplesNew = this.state.samples.filter(samples => samples !==  sample)
        this.setState({samples:samplesNew})
        console.log(samplesNew)
     }
    render(){
        let samples = this.state.samples
        return(
            <div className="samples text-center">
                <form onSubmit={this.handelSubmit}>
                   <input type = "text"  onChange={this.handelChange} value={this.state.value}/>
                   </form>
                   <div> { samples.map(sample=><div key={Math.random()}className="kalam"> {sample} <button onClick={() =>this.handelRemove(sample)} >X</button></div>)} </div>
                   <Carousel>
                      <Carousel.Item interval={1000}>
                        <img
                          className="d-block w-100"
                          src={photo1}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>First slide label</h3>
                          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item interval={500}>
                        <img
                          className="d-block w-100"
                          src={photo2}
                          alt="Third slide"
                        />
                        <Carousel.Caption>
                          <h3>Second slide label</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={photo3}
                          alt="Third slide"
                        />
                        <Carousel.Caption>
                          <h3>Third slide label</h3>
                          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item interval={1500}>
                        <img
                          className="d-block w-100"
                          src={photo4}
                          alt="slide 4"
                        />
                        <Carousel.Caption>
                          <h3>slide 4 label</h3>
                          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
            </div>
        );
    }
}
export default Sampels