import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          Kargwal Medical Institute Provides reliable, affordable healthcare
          services. Our expert staff provides care with compassion and
          professionalism. We serve patients through clinics, diagnostics, and
          emergency care. Advanced equipment ensures accurate, timely treatment.
          Patient well-being and safety are our top priorities. Visit us for
          trusted, community-centered medical care.
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image"/>
        <span>
            <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
