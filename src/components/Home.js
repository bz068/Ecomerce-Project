import React, { Component } from 'react'



 class Home extends Component {
    render() {
        return (
            <div className="home">
                <section className='header'>
                    <div className='info'>
                    <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quasi quod quis quo velit laborum accusamus, dolor enim eos aperiam itaque saepe? Sequi iusto unde numquam omnis, impedit officia consectetur. Sequi iusto unde numquam omnis, impedit officia consectetur.
                    </p>

                    <button>Read More</button>
                    </div>

                    <div className='homeForm'>
                    <form>
                        {/* <label>Email</label> <br></br> */}
                        <input placeholder = 'Email' type='text'></input><br></br>
                        {/* <label>Subject</label> <br></br> */}
                        <input placeholder = 'Subject' type='text'></input><br></br>
                        {/* <label>Message</label> <br></br> */}
                        <textarea placeholder = 'Message'></textarea><br></br>
                        <button>Submit</button> 
                        <button>Clear</button>

                    </form>
                    </div>
                </section>
                <div className='underForm'></div>

                <section className='body'>
                    <div className='keyInfo'>
                        <h2>
                            Shop Now
                        </h2>
                    </div>

                        <div className='grid'>
                        <div >
                        <i className= 'fa fa-clock fa-5x'></i>
                        <h3>Open 24Hrs Everyday</h3>
                        </div>
                        <div >
                        <i className= 'fa fa-map-marker-alt fa-5x'></i>
                        <h3>81 Hoe Street E17 4SA</h3>
                        </div>
                        <div >
                        <i className= 'fa fa-phone fa-5x'></i>
                        <h3>020 3609 3922</h3>
                        </div>
                    </div>

                    <div className='cont1'>
                        <h2> 24Hr Services</h2>
                    <div className='grid'>
                        <div >
                        <i className= 'fab fa-bitcoin fa-5x'></i>
                        <h3>24Hr Live Bitcoin ATM</h3>
                        </div>
                        <div >
                        <i className= 'fa fa-sim-card fa-5x'></i>
                        <h3>Top Ups Avaiable</h3>
                        </div>
                        <div >
                        <i className= 'fa fa-beer fa-5x'></i>
                        <h3>Craft Beer, Organic & Vegeterian Wine</h3>
                        </div>
                    </div>
                    <br></br>
                    <br></br>

                    </div>

                </section>

                
            </div>
        )
    }
}

export default  Home;
