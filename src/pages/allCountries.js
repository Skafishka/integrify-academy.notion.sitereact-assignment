import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AllCountries = ({ countries }) => {
    return (
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>Flag</th><th>Name</th><th>Region</th><th>Population</th><th>Languages</th>
            </tr>
          </thead>
          <tbody>
            {countries
              .map((value, id) => (
              <tr key={id}>
                <td><img src={value.flags.png} height='100' alt={`flag of ${value.name.common}`}/></td>
                <td>{value.name}</td>
                <td>{value.region}</td>
                <td>{value.population}</td>
                <td>{value.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}</td>
                <td><Link to={`/country/${id}`}>{">"}</Link></td>
              </tr>
            )).slice(0, 5)}
          </tbody>
        </Table>
      </div>
      
    )
}

export { AllCountries } 