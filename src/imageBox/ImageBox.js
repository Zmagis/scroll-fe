import React from 'react';

import Image from './Image';

const ImageBox = ({ data, setPage, loading, setIsSorted }) => {
  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (Math.floor(scrollHeight - scrollTop) === clientHeight) {
      setPage((prev) => prev + 1);
      setIsSorted(false);
    }
  };

  return (
    <div className="container" onScroll={handleScroll}>
      {data.map((item) => (
        <React.Fragment key={item.id}>
          <Image
            farm={item.farm}
            server={item.server}
            idImg={item.id}
            secret={item.secret}
            title={item.title}
          />
          <div className="image-title">
            <p>{item.title === '' ? '-' : item.title}</p>
          </div>
        </React.Fragment>
      ))}
      {loading ? <p className="loading">Loading...</p> : null}
    </div>
  );
};

export default ImageBox;
