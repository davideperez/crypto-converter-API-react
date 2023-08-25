
const Result = ({result}) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result



  return (
    <div>
      <p>Price: <span>{PRICE}</span></p>
      <p>Highest Today: <span>{HIGHDAY}</span></p>
      <p>Lowest Today: <span>{LOWDAY}</span></p>
      <p>Variation in the last 24hs: <span>{CHANGEPCT24HOUR}%</span></p>
      <p>Last Update: <span>{LASTUPDATE}</span></p>

    </div>
  )
}

export default Result