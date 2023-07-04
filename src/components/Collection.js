import React from "react";

import images from "../../projectsData/collection.json";

const Collection = () => {
  return (
    <div className='photo-collection'>
      {images.map((image, i) => (
        <img src={image.i} key={image.i + i} />
      ))}
    </div>
  );
};

export default Collection;
