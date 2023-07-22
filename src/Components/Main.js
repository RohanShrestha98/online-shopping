import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

function Main() {
  return (
      <>
      
    <section className="main">
        <div className="container px-5">
            <div className="row mx-auto">
                <div className="col-lg-20 pt-5 m-auto text-center">
                    <h1 className='pt-5'>Fashion Has A Way Of Showing Ones Confidence</h1>
                    <button className="btn1 mt-3">See More</button>
                </div>
            </div>
        </div>
    </section>

    <section className="products">
        <div className="container py-5">
            <div className="row py-5">
                <div className="heading col-lg-5 m-auto text-center">
                    <h1>Latest </h1>
                    <h5>Hurry up! new updated</h5>
                </div>

            </div>
            <div className="row">
                <div className="col-lg-3 text-center">
                    <div className="card border-0 bg-light mb-2">
                        <div className="photo card-body">
                             <img src="./images/1.jpeg" alt="" className='img-fluid'/>
                        </div>
                    </div>
                    <h6>Hoodies</h6>
                    <p>Rs 1500</p>

                </div>
                <div className="col-lg-3 text-center">
                    <div className="card border-0 bg-light mb-2">
                        <div className="photo card-body">
                             <img src="./images/1.jpeg" alt="" className='img-fluid'/>
                        </div>
                    </div>
                    <h6>Hoodies</h6>
                    <p>Rs 1500</p>

                </div>
                <div className="col-lg-3 text-center">
                    <div className="card border-0 bg-light mb-2">
                        <div className="photo card-body">
                             <img src="./images/1.jpeg" alt="" className='img-fluid'/>
                        </div>
                    </div>
                    <h6>Hoodies</h6>
                    <p>Rs 1500</p>

                </div>
                <div className="col-lg-3 text-center">
                    <div className="card border-0 bg-light mb-2">
                        <div className="photo card-body">
                             <img src="./images/1.jpeg" alt="" className='img-fluid'/>
                        </div>
                    </div>
                    <h6>Hoodies</h6>
                    <p>Rs 1500</p>

                </div>
                <div className="row">
                    <div className="col-lg-6 text-center m-auto">
                        <button className='btn1'>Click For More</button>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <section className="about">
        <div className="container py-5">
            <div className="row py-5">
                <div className="col-lg-8 m-auto text-center mb-3">
                    <h1>Welcome To Our Online Store</h1>
                    <h5 className='head'>Hurry up! time is not on our side</h5>
                </div>
                <div className="all row">
                    <div className="items col-lg-4 mb-3">
                          <img src="./images/1.jpeg" alt="" className='img-fluid'/>
                          <div className="discription mb-3">
                          <h5 >Best Qulaity Products</h5>
                           <p >Lorem ipsum dolor, sit amet consectetur adipis elit. Magni blanditiis dolorem odit. low eos atque
                            ipsum dolor odio nesciunt! A</p>
                          </div>
                          
                    </div>
                    <div className="items col-lg-4">
                          <img src="./images/1.jpeg" alt="" className='img-fluid'/>
                          <div className="discription">
                          <h5 >Best Qulaity Products</h5>
                           <p >Lorem ipsum dolor, sit amet consectetur adipis elit. Magni blanditiis dolorem odit. low eos atque
                            ipsum dolor odio nesciunt! A</p>
                          </div>
                          
                    </div>
                    <div className="items col-lg-4">
                          <img src="./images/1.jpeg" alt="" className='img-fluid'/>
                          <div className="discription">
                          <h5 >Best Qulaity Products</h5>
                           <p >Lorem ipsum dolor, sit amet consectetur adipis elit. Magni blanditiis dolorem odit. low eos atque
                            ipsum dolor odio nesciunt! A</p>
                          </div>
                          
                    </div>
                          
                    
                    </div>
                    
            </div>
            <div className="row last">
                    <div className="col-lg-6 text-center m-auto">
                        <button className='btn1'>Shop More</button>
                    </div>
                </div>
        </div>
    </section>
    </>
  )
}

export default Main