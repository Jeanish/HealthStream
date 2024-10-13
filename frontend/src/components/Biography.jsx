import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            At HealthStream, we believe in the power of technology to transform
            healthcare. Our mission is to create seamless, efficient, and
            user-friendly platforms that enhance communication between
            healthcare providers and patients. By simplifying appointment
            scheduling, improving real-time updates, and providing an intuitive
            interface, HealthStream aims to make healthcare more accessible and
            organized for everyone involved. Our dedicated team of developers is
            committed to innovation and excellence, continuously enhancing our
            platform to meet the evolving needs of the healthcare industry.
          </p>
          <p>We are all in 2024!</p>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
