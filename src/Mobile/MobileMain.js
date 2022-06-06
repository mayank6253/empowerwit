import React from 'react'
import img9 from './Images/img9.png'
import img5 from './Images/img5.png'
import './mobile.css'
import Mobileabout from './Mobilepages/Mobileabout'
import { Nav } from 'react-bootstrap'
import MobileNav from './MobileNav'

export default function MobileMain() {
  return (
    <div>
      <MobileNav />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mobile-view-area">
              <div className="mobile-view-content">
                <div className="mobile-background">
                  <div className="mobile-img">
                    <img src={img9} alt="" className="mi" />
                    <span className="tagline">
                      Empowering Women Around The World
                    </span>
                  </div>
                  <div className="mobile-img">
                    <img src={img5} alt="" className="mi" />
                  </div>
                  <div className="mobileview-explore">
                    <Nav.Link href="/courses" className="mobileec">
                      Explore our trainings
                    </Nav.Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="#about-us">
        <Mobileabout />
      </div>
    </div>
  )
}
