import { useState, useEffect } from 'react'
import axios from 'axios'

export const useCountry = (name) => {
    const [country, setCountry] = useState(null)
  
    useEffect(() => {
      if (name) {
        axios
          .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
          .then(country => setCountry(country.data[0]))
          .catch(error => {
            console.log(error)
            setCountry(null)
          })
      }
    }, [name])
  
    return country 
}