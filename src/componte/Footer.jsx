import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import tata from './tata.jpg'

import "./sec.css"
function Footer(){
    return(
        <div>
<section class="container-fluid sec-footer">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card desc-box">
                    <div class="card-body">
                        <div class="card-title"></div>
                        <div class="card-text">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card desc-box">
                    <div class="card-body">
                        <div class="card-title"></div>
                        <div class="card-text">
                            <div class="row">
                                <div class="col">
                                    <i class="fas fa-phone ml-3"></i>
                                    <span></span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <i class="fas fa-map-marker ml-3"></i>
                                    <span></span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <i class="fas fa-envelope-open ml-3"></i>
                                    <span>gripozz@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col text-center">
                <img className="props" src={tata} alt="مدرسه شهدای رهپویان" class="mb-3"/>
        
                <a href="https://www.linkedin.com" class="snip1472"><FontAwesomeIcon icon={ faLinkedin} /></a>
                <a href="https://www.instagram.com/gripozz/?igshid=ZDdkNTZiNTM%3D" class="snip1472"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" class="snip1472"><FontAwesomeIcon icon={ faEnvelope} /></a>
            </div>
        </div>
    </div>
</section>
<section class="container-fluid sec-sub-footer">
    <div class="container">
        <div class="row">
            <div class="col">
                <span></span>
            </div>
            <div class="col text-left">
                <a href="http://mihanmedia.ir" class="f-light text-dark"></a>
                <a href="http://mihanmedia.ir"  class="f-light text-dark"></a>
            </div>
        </div>
    </div>
</section>


        </div>
  
    )
}

export default Footer;