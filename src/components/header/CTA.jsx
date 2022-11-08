import React from "react";
import Resume from "../../assets/kaif_sindhi_resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn btn-secondary">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
};

export default CTA;
