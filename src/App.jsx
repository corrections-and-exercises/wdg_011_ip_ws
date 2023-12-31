import Ip from './components/Ip.jsx';
import Map from './components/Map.jsx';
import CountryData from './components/CountryData.jsx';
import {useState, useEffect} from 'react';
import Time from './components/Time.jsx';

function App() {
  const [ipData, setIpData] = useState();
  const [ipError, setIpError] = useState();

  const apiKey = import.meta.env.VITE_IPIFY_KEY;

  const url = `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}`;

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        if (!res.ok)
          throw new Error(`Request failed ${res.status} ${res.statusText}`);
        const data = await res.json();
        setIpData(data);
      } catch (error) {
        setIpError(error);
      }
    }
    fetchData();
  }, [url]);

  return (
    <>
      {ipData && (
        <>
          <Ip ipData={ipData} ipError={ipError} />
          <CountryData code={ipData.location.country} />
        </>
      )}
      <Time />
      <Map />
    </>
  );
}

export default App;
