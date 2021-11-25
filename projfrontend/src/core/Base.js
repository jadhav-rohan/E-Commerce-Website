import React from "react";
import Menu from "./Menu";
const Base = ({
  title = "My Title",
  description = "My Description",
  className = "text-white p-4",
  children,
}) => {
  return (
    <div>
      <Menu />
      <div className="this container-fluid">
        <div className="this text-white text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}> {children}</div>
      </div>
      <footer className="f footer text-white py=-1">
        <div className="container-fluid text-center">
          <h4 className="container text-center">
            If you got any questions feel free to ask
          </h4>
          <button className="this text-white btn btn-md">Contact Us</button>
        </div>
        <div className="container">
          <span className="text-muted text-white">Rohan Jadhav</span>
        </div>
      </footer>
    </div>
  );
};

export default Base;
