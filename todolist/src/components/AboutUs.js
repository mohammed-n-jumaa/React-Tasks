import React from "react";

export const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>
        We are a passionate team dedicated to helping you stay organized and productive. Our mission is to
        provide a simple yet effective way to manage your tasks and get things done!
      </p>
      <div className="about-details">
        <p><strong>Our Vision:</strong> To make task management easy, intuitive, and enjoyable for everyone.</p>
        <p><strong>Our Values:</strong> Innovation, Simplicity, and Reliability.</p>
        <p><strong>Contact Us:</strong> You can reach us via our <a href="/contact">Contact Us</a> page.</p>
      </div>
    </div>
  );
};
