import React from "react";

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <div>Oops, Page Not found</div>;
};

export default {
  component: NotFoundPage,
};
