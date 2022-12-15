import { useParams } from 'react-router-dom'

const Country = ({ country }) => {
    if (country) {
      return (
        <div>
          <h3>{country.name.common}</h3>
          <div>population {country.population}</div> 
          <div>capital {country.capital}</div>
          <img src={country.flags.png} height='100' alt={`flag of ${country.name.common}`}/> 
        </div>
      ) 
    }
}
  
  const SingleCountry = ({ countries }) => {
    const id = useParams().id
      return (
        <div>
          {countries.map((value, id) => (
            <div key={id.toString()}>
              <h3>Country name: {value.name}</h3>
              <div>Capital: {value.capital}</div>
              <img src={value.flags.png} height='100' alt={`flag of ${value.name.common}`}/>
            </div>
          )).slice(0, 5)[id]}
        </div>
      )
}

export { Country, SingleCountry }