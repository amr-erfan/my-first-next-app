import React from "react";
export const metadata = {
  title: "id page",
};

const page = (props) => {
  return <div>id page {props.params.articleId}</div>;
};

export default page;
