import {useCallback, useContext, useEffect, useState} from 'react';
import artworksServices from '../api/core/AIC/artworks.services';
import {Context} from '../context/context';

export const useArtworks = () => {
  const {state, dispatch} = useContext(Context);
  const {loading, artworksData} = state || {};
  const [currentPage, setCurrentPage] = useState(0);

  const fetchArtworks = useCallback(() => {
    const getArtworks = async () => {
      try {
        const artworks = (await artworksServices.getArtworks(currentPage)) || {
          data: [],
        };
        const newArtworksData = [...artworksData, ...artworks.data];
        dispatch.setArtworksData(newArtworksData);
        setCurrentPage(prev => prev + 1);
      } catch (error) {
        console.error(error);
      } finally {
        setCurrentPage(prev => prev + 1);
      }
    };

    getArtworks();
  }, [artworksData, currentPage, dispatch]);

  useEffect(() => {
    fetchArtworks();
  }, []);

  return {artworksData, fetchArtworks, loading};
};
