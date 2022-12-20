import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import countriesService from './services/db'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { AllCountries, SingleCountry } from './pages/allCountries'
import { SearchCountry } from './pages/country'
import { useField } from './hooks/useField'
import { useCountry } from './hooks/useCountry'

const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const country = useCountry(name)
  const [countries, setAllCountries] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerPage] = useState(15)

  //Get current countries
  const indexOfLastCountry = currentPage * countriesPerPage
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
  const currentCountry = countries.slice(indexOfFirstCountry, indexOfLastCountry)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  
  const fetch = (e) => {
    e.preventDefault()
    setName(nameInput.value)
  }

  useEffect(() => {
    countriesService
      .getAllCountries()
      .then(initial => {
        setAllCountries(initial)
      })
  }, [])

  return (
    <Router>
      <div>
        <Navbar bg='navbar navbar-dark bg-primary' expand='false'>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Main page</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <form onSubmit={fetch}>
              <input {...nameInput} /><button>find</button>
            </form>
          </Container>
        </Navbar>
        <SearchCountry country={country} />
      </div>

      <Routes>
        <Route path="/" element={<AllCountries countries={countries} countriesPerPage={countriesPerPage} paginate={paginate} currentCountry={currentCountry}/>} />
        <Route path="/country/:id" element={<SingleCountry countries={currentCountry} />} />
      </Routes>
    </Router>
  )
}

export default App