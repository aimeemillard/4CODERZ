import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-container">
      <ul className="list-group-flush">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return (
    <li className="list-group-item" style={{ fontSize: "28px" }}>
      {children}
    </li>
  );
}
