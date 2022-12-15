import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import countriesService from './services/db'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { AllCountries } from './pages/allCountries'
import { Country, SingleCountry } from './pages/country'
import { useField } from './hooks/useField'
import { useCountry } from './hooks/useCountry'

const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const country = useCountry(name)
  const [countries, setAllCountries] = useState([])
  
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
        <Country country={country} />
    </div>

      <Routes>
        <Route path="/" element={<AllCountries countries={countries} />} />
        <Route path="/country/:id" element={<SingleCountry countries={countries} />} />
      </Routes>
    </Router>
  )
}

export default App