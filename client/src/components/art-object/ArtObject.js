import React from "react";

const ArtObject = ({ object }) => (
  <>
    <p>{object.primaryimageurl}</p>
    <p>{object.century}</p>
    <p>{object.classification}</p>
    <p>{object.creditline}</p>
    <p>{object.title}</p>
    <p>{object.url}</p>
  </>
);

export default ArtObject;
