import axios from 'axios'

const getAllCountries = () => {
    const req = axios.get("https://restcountries.com/v2/all/")
    return req.then(res => res.data)
}

export default { getAllCountries }