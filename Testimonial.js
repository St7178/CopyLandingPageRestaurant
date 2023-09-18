import React from "react";
import ProfilePic from "../Assets/personaje.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">My copy Landing Page</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        Hi, my name is johann steven and my last name is toro aguirre. this was  my copy of the  landing page , here you find a  idea of design and elaboration for a web page about a restaurant..
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Johann Steven Toro Aguirre</h2>
      </div>
    </div>
  );
};

export default Testimonial;
