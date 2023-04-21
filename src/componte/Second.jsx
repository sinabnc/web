import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./sec.css"
function Second() {
    return (
<div className="mid" >
<div className="container">
    <div className="row pt-1 pb-1">
        <div className="col-lg-12 text-center">
            <div className="heading">
                <h3>welcome to Gripozz</h3>
                
            </div>
            <div>
            < img className="images" src="https://images.pexels.com/photos/994197/pexels-photo-994197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=".." />
            <img className="image" src="https://images.pexels.com/photos/5076511/pexels-photo-5076511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </div>
        </div>
    </div>
</div>
<section>
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
            
        <div class="carousel-item active">
                <img src="https://pbs.twimg.com/media/EGHYvttU4AAYKb7?format=jpg&name=large" class="d-block w-100" alt="..."/>
            </div>
            
        
           
        </div>
        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
</section>
</div>
        
                   

            )
}

export default Second;