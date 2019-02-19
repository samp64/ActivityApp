import React from "react";
import classnames from "classnames";

import "./Flex.css";

const Flex = ({ children, direction, wrap }) => (
  <div className={classnames("flexWrapper", { direction, wrap })}>
    {children}
  </div>
);



export default Flex;