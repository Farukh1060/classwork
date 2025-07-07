import React from "react";
import "./Container.css";

export const Container = (probes) => {
  return (
    <div className="container">
      <div className="hero_container">{probes.children}</div>
    </div>
  );
};
