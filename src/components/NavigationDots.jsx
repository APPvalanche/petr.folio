import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonial", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={
              active === item ? { backgroundColor: "rgba(0, 0, 0, 0.28)" } : {}
            }
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
