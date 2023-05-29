import country from './countryData.json'

interface countryListType {
  [key: string]: {
    [key: string]: string
  }
}

const countryList: countryListType = country

export default countryList