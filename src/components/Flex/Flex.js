import React from "react";
import { node, oneOf, bool } from "prop-types";
import classnames from "classnames";

import "./Flex.css";

const Flex = ({ children, direction, wrap }) => (
  <div className={classnames("flexWrapper", { direction, wrap })}>
    {children}
  </div>
);

Flex.propTypes = {
  children: node.isRequired,
  direction: oneOf(["column", "row"]),
  wrap: bool
};

export default Flex;