import React, { Fragment } from "react";

const layout = ({ children }) => {
  return (
    <Fragment>
      <h1>layout page</h1>
      <div>{children}</div>
    </Fragment>
  );
};

export default layout;
