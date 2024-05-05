import React, { createContext, useState, useContext, useEffect } from 'react';

const WatchListContext = createContext();

export const useWatchList = () => useContext(WatchListContext);

export const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState({});

  useEffect(() => {
    const storedWatchList = localStorage.getItem('watchList');
    if (storedWatchList) {
      setWatchList(JSON.parse(storedWatchList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(watchList));
  }, [watchList]);

  const addToWatchList = (movie, username) => {
    setWatchList((prevWatchList) => {
      const userWatchList = prevWatchList[username] || [];
      const updatedUserWatchList = [...userWatchList, movie];
      const updatedWatchList = {
        ...prevWatchList,
        [username]: updatedUserWatchList,
      };
      localStorage.setItem('watchList', JSON.stringify(updatedWatchList));
      return updatedWatchList;
    });
  };

  const removeFromWatchList = (movieId, username) => {
    setWatchList((prevWatchList) => {
      const userWatchList = prevWatchList[username] || [];
      const updatedUserWatchList = userWatchList.filter(
        (movie) => movie.id !== movieId
      );
      const updatedWatchList = {
        ...prevWatchList,
        [username]: updatedUserWatchList,
      };
      localStorage.setItem('watchList', JSON.stringify(updatedWatchList));
      return updatedWatchList;
    });
  };

  return (
    <WatchListContext.Provider
      value={{ watchList, addToWatchList, removeFromWatchList }}
    >
      {children}
    </WatchListContext.Provider>
  );
};
