import styled from "@emotion/styled"

const Result = ({result}) => {
  
  const Container = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
  `
  const Data = styled.div`
    display: grid;
  `
  const Image = styled.img`
    display: block;
    width: 125px;
  `
  const Text = styled.p`
    font-size: 18px;
    margin: 5px;
    span {
      font-weight: 700;
    }
  `
  const Price = styled.p`
    font-size: 24px;
    span {
      font-weight: 700;
    }
  `
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result



  return (
    <Container>
      <Image 
        src={`https://cryptocompare.com/${IMAGEURL}`} 
        alt="crypto image" 
      />
      <Data>
        <Price>Price: <span>{PRICE}</span></Price>
        <Text>Highest Today: <span>{HIGHDAY}</span></Text>
        <Text>Lowest Today: <span>{LOWDAY}</span></Text>
        <Text>Variation in the last 24hs: <span>{CHANGEPCT24HOUR}%</span></Text>
        <Text>Last Update: <span>{LASTUPDATE}</span></Text>
      </Data>

    </Container>
  )
}

export default Result