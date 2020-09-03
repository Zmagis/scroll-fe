import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import ImageBox from './imageBox/ImageBox';
import { removedDuplicates } from './utils';

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isSorted, setIsSorted] = useState(false);

  const getImages = async () => {
    const res = await axios.get('/data', { params: page });
    const json = JSON.parse(res.data.text).photos.photo;
    const newA = [...data, ...json];
    setData([...removedDuplicates(newA)]);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getImages();
  }, [page]);

  const handleSort = useCallback(() => {
    if (!isSorted) {
      const sortedArr = data.sort((a, b) => (a.title > b.title ? 1 : -1));
      setData(sortedArr);
      setIsSorted(true);
    }
  }, [data, isSorted]);

  return (
    <div className="App">
      <h1>
        Infinite Scroll
        <i
          className="fas fa-sort-alpha-down sort-icon"
          onClick={handleSort}
        ></i>
      </h1>
      <ImageBox
        data={data}
        page={page}
        setPage={setPage}
        loading={loading}
        setIsSorted={setIsSorted}
      />
    </div>
  );
}

export default App;
