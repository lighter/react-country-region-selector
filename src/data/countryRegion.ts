
import countryRegion from './countryRegionData.json'

interface countryRegionListType {
  [key: string]: {
    [key: string]: {
      [key: string]: string
    }
  }
}

const countryRegionList: countryRegionListType = countryRegion

export default countryRegionList;