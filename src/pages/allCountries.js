import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Paginate from '../components/Paginate'
import { useParams } from 'react-router-dom'

const AllCountries = ({ currentCountry, countries, countriesPerPage, paginate }) => {

  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>Flag</th><th>Name</th><th>Region</th><th>Population</th><th>Languages</th>
          </tr>
        </thead>
        <tbody>
          {currentCountry.map((value, id) => (
            <tr key={id}>
              <td><img src={value.flags.png} height='100' alt={`flag of ${value.name.common}`}/></td>
              <td>{value.name}</td>
              <td>{value.region}</td>
              <td>{value.population}</td>
              <td>{value.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}</td>
              <td><Link to={`/country/${id}`}>{">"}</Link></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Paginate countriesPerPage={countriesPerPage} totalCountries={countries.length} paginate={paginate} />
    </div>
  )
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
      ))[id]}
    </div>
  )
}

export { AllCountries, SingleCountry } 