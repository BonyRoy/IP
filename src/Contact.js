import React from "react";
import gg from '../src/images/gg.jpg';
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
        <h2 className="text-center"
                        style={ {
                            color:'#ffffff',
                          }}
        >Get In</h2>
        <h2 className="text-center"
                style={ {
                      color:'#',
                    }}
        >Touch</h2>
        <img src={gg} 
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
<h5>Our location</h5>
<p>NP InfoServe Technologies Pvt. Ltd. We are located in thane (west) Below is all the details about our company.</p>
<h5>Email</h5>
<p><a href='info@npinfoserve.com'>info@npinfoserve.com</a></p>
<h5>Contact Number</h5>
<p><a href="">+ 91 77188 25757</a></p>

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
<p
        style={ {
            fontSize:'10px',
            }}
>20 Plus Years of Technical experience. Core and in depth knowledge of business like Manufacturing, Insurance, Hospitality and Municipal Corporation. Man Management with proven track record for employee retention. Sales engagement and strong network for month by month sales growth. Strong in response and delivery to customer. This is our key to success.</p>
<br></br>
</div>

        </>
        );
};

export default Services;