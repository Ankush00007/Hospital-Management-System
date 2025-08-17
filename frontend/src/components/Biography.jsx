import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="about Img" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          Kargwal Medical Institute is committed to excellence in healthcare
          education and patient care. With advanced facilities, skilled faculty,
          and a student-centered approach, Kargwal trains future medical
          professionals with real-world expertise. Programs include nursing,
          medicine, diagnostics, and public health, all aligned with modern
          standards. Students benefit from hands-on clinical experience,
          research opportunities, and mentorship from experienced practitioners.
        </p>
        <p>
          {" "}
          The institute fosters integrity, innovation, and service to the
          community. Kargwal’s graduates are known for their professionalism and
          dedication to improving lives across healthcare sectors.
        </p>
        <p>
          Kargwal Medical Institute is dedicated to advancing healthcare
          education and professional medical training.
        </p>
        <p>
          Kargwal Medical Institute stands at the forefront of medical
          innovation and education. Committed to excellence, it empowers
          students with practical knowledge, ethical grounding, and clinical
          expertise. Through modern facilities, dedicated faculty, and
          real-world training, Kargwal shapes future healthcare leaders. Driven
          by compassion and science, it fosters a new generation ready to meet
          global medical challenges with confidence and care.
        </p>
        <p>
             We provide great services to our patients so please visit once
        </p>
        
      </div>
    </div>
  );
};

export default Biography;
