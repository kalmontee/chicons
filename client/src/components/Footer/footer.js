import React from 'react'
import './footer.css';

function Footer() {
   
        return (
            <div>
                 <footer>
       
        <div>
            <div className="footer-info container">
                <div className="resources">
                    <h6>CONTACT</h6>
                    <div className="resources-info">
                        <h5><a href="#">Contact Us</a></h5>
                        <h5><a href="#">Help Center</a></h5>
                    </div>
                </div>
                <div className="resources">
                    <h6>ABOUT</h6>
                    <div className="resources-info">
                        <h5><a href="#">Salary</a></h5>
                        <h5><a href="#">Jobs</a></h5>
                        <h5><a href="#">Community</a></h5>
                    </div>
                </div>
                <div className="resources">
                    <h6>PLATFORM</h6>
                    <ul>
                        
                        <li><a href="https://instagram.com/" target="_blank"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a></li>
                    </ul>
                </div>
                <div class="resources">
                    <h6>RESOURCES</h6>
                    <div className="resources-info">
                        <h5><a href="#">Blog</a></h5>
                        <h5><a href="#">Services</a></h5>
                    </div>
                </div>
            </div>
            <div className="footer-end container">
                <p>copy 2020 Fair Space Inc. All rights reserved.</p>
            </div>
        </div>
    </footer>
            </div>
        )
    
}

export default Footer
