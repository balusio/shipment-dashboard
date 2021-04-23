import axios, { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';
import { FullShipmentObject } from './types';

type DataHookParams = {
  url: string;
  dataKey: string;
};
/**
 * DataHook is a centralized hook that tries to get data from localStorage,
 * also is a centralized place to handle common HTTTP request
 * @param url url that you want to check
 * @param key LocalStorage key in case you want query cached data
 * TODO: set expire data to overwrite on localStorage to keep up to date data
 */
const DataHook = ({ url, dataKey }: DataHookParams) => {
  const [error, setError] = useState<AxiosResponse | null | string>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState<FullShipmentObject[] | null>(null);
  const apiCall = async () => {
    try {
      const QueryResponse = await axios.get(url);

      if (QueryResponse && QueryResponse.status === 200) {
        setResponse(QueryResponse.data);
        setIsLoading(false);
        localStorage.setItem(dataKey, JSON.stringify(QueryResponse.data));
      } else {
        setError(QueryResponse);
      }
    } catch {
      setError('error');
      setIsLoading(false);
    }
  };

  const getLocalStorage = () => {
    const data = localStorage.getItem(dataKey);
    if (data && data.length > 0) {
      return JSON.parse(data);
    }

    return false;
  };

  useEffect(() => {
    setIsLoading(true);
    const localData = getLocalStorage();
    if (localData) {
      setIsLoading(false);
      setResponse(localData);
    } else {
      apiCall();
    }
  }, [url]);

  return {
    isLoading,
    response,
    error,
  };
};

export default DataHook;
