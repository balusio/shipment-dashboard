import React, { useState, useEffect } from 'react';
import AppBar from 'components/AppBar/AppBar';
import axios from 'axios';

const HomeContainer = (): JSX.Element => {
  const [shipmentsData, setShipmentsData] = useState<Record<string, any>>({});

  useEffect(() => {
    axios.get('http://localhost:8080/data').then((response) => console.log(response));
  },[]);
  return (
    <>
      <AppBar />
    </>
  );
}
export default HomeContainer;
