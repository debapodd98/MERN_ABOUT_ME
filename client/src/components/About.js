import React from "react";
import aboutpic from "../images/aboutpic.jpg";

const About = () => {
  return (
    <>
      <div className='container emp-profile'>
        <form action='' method=''>
          <div className='row'>
            <div className='col-md-4'>
              <div className='profile-img'>
                <img src={aboutpic} alt='Debanjan' />
              </div>
            </div>
            <div className='col-md-5'>
              <div className='profile-head'>
                <h5>Debanjan Podder</h5>
                <h6>Web Developer</h6>
                <p className='profile-rating mt-3 mb-5'>
                  RANKINGS <span> 1/10 </span>
                </p>
                <ul className='nav nav-tabs' role='tablist'>
                  <li className='nav-item'>
                    <a
                      className='nav-link active'
                      id='home-tab'
                      data-toggle='tab'
                      href='#home'
                      role='tab'
                    >
                      About
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className='nav-link'
                      id='profile-tab'
                      data-toggle='tab'
                      href='#profile'
                      role='tab'
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-3'>
              <input
                type='submit'
                className='profile-edit-btn'
                value='Edit Profile'
                name='btnAddMore'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div className='profile-work'>
                <p>WORK LINK</p>
                <a href='https://www.youtube.com' target='_blank'>
                  Youtube
                </a>
                <br />
                <a href='https://www.youtube.com' target='_blank'>
                  Instagram
                </a>
                <br />
                <a href='https://www.youtube.com' target='_blank'>
                  Web Developer
                </a>
                <br />
                <a href='https://www.youtube.com' target='_blank'>
                  Student
                </a>
                <br />
              </div>
            </div>
            <div className='col-md-8 pl-5 about-info'>
              <div className='tab-content profile-tab' id='myTabContent'>
                <div
                  className='tab-pane fade show active'
                  id='home'
                  role='tabpanel'
                  aria-labelledby='home-tab'
                >
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>User ID</label>
                    </div>
                    <div className='col-md-6'>
                      <p>debapodd19</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Debanjan Podder</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Email</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Debanjan Podder</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Phone</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Debanjan Podder</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Profession</label>
                    </div>
                    <div className='col-md-6'>
                      <p>IT Professional</p>
                    </div>
                  </div>
                </div>
                <div
                  className='tab-pane fade'
                  id='profile'
                  role='tabpanel'
                  aria-labelledby='profile-tab'
                >
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Experience</label>
                    </div>
                    <div className='col-md-6'>
                      <p>ONE YEAR</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Total Projcts</label>
                    </div>
                    <div className='col-md-6'>
                      <p>20</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Internship</label>
                    </div>
                    <div className='col-md-6'>
                      <p>2</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Company</label>
                    </div>
                    <div className='col-md-6'>
                      <p>HighRadius , Novartis</p>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Current Role</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Full Stack Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
