import React from 'react';
import {Container} from "./style.js"
const Tooltip = ({ title, className, children }) => {
  return (
    <Container className={`container-tooltip ${className}`}>
      {children}
      <span className="tooltip__message">{title}</span>
    </Container>
  );
};

export default Tooltip;
