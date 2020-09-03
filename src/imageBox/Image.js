import React from 'react';

const Image = ({ farm, server, idImg, secret, title }) => {
  return (
    <div>
      <div className="image-div">
        <img
          src={`https://farm${farm}.staticflickr.com/${server}/${idImg}_${secret}.jpg`}
          alt={`${title}`}
        />
      </div>
    </div>
  );
};

export default Image;
