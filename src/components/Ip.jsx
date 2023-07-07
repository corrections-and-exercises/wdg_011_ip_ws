function Ip({ipError, ipData}) {
  if (ipError) {
    return <p>Something went wrong {ipError.message}</p>;
  }

  return <div>{ipData && ipData.ip}</div>;
}

export default Ip;
