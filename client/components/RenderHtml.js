import React from "react";
import Loader from "./Loader";

const RenderHtml = ({ loading, content }) => {
  return loading ? (
    <Loader />
  ) : (
    <div dangerouslySetInnerHTML={{ __html: content || "" }} />
  );
};

export default RenderHtml;
