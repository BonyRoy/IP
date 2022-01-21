import React from "react";
import ab from '../src/images/ab.jpg';
import c1 from "../src/images/c1.jpg";
import c2 from "../src/images/c2.jpg";
import c3 from "../src/images/c3.jpg";
import c4 from "../src/images/c4.jpg";

const Services =()=>{
    return(
        <>
        <div className="container-fluid"
        style={ {
        backgroundColor: '#a7bfe0',
        }}
        >       
        <h2 className="text-center">Our Services</h2>
        <img src={ab} 
        style={ {
        width:'100%',
        backgroundSize:'cover',
        }}
        />
        </div>
        <div className="my-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row gy-4">

<div className="container-fluid">
<p>20 Plus Years of Technical experience. Core and in depth knowledge of business like Manufacturing, Insurance, Hospitality and Municipal Corporation. Man Management with proven track record for employee retention. Sales engagement and strong network for month by month sales growth. Strong in response and delivery to customer. This is our key to success.</p>
<a class="btn btn-outline-primary">Contact Us</a>
<br></br>
<br></br>

<br></br>
<br></br>
<h2
style={{
color: '#0a2852',
fontFamily:'cursive',
}}
>Our Clints:-</h2>
<div className="row gy-4">

<div className="col-md-4 col-10 mx-auto">
                        <div class="card">
  <img src={c1} class="card-img-top" alt="..."/>
  <div class="card-body">
  </div>
</div>
</div>
<div className="col-md-4 col-10 mx-auto">
                        <div class="card">
  <img src={c2} class="card-img-top" alt="..."/>
  <div class="card-body">
  </div>
</div>
</div>
<div className="col-md-4 col-10 mx-auto">
                        <div class="card">
  <img src={c3} class="card-img-top" alt="..."/>
  <div class="card-body">
  </div>
</div>
</div><div className="col-md-4 col-10 mx-auto">
                        <div class="card">
  <img src={c4} class="card-img-top" alt="..."/>
  <div class="card-body">
  </div>
</div>
</div>

</div>
</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

<div className="container-fluid"
        style={ {
            backgroundColor: '#a7bfe0',
            }}
>
<br></br>
<p>Email:- <a href='info@npinfoserve.com'>info@npinfoserve.com</a></p>
<p>Contact Number:-<a href="">+ 91 77188 25757</a></p>
<br></br>
</div>

        </>
        );
};

export default Services;