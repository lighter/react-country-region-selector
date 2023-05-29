import React, { useState } from "react";
import countryList from '../data/country';
import countryRegionList from '../data/countryRegion';

interface Props {
  lang: string
}

const CountryRegionDropdownList = ({lang}: Props) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(event.target.value);
  };


  return (
    <div>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select a country</option>
        {Object.entries(countryList[lang]).map(([key, value]) => (
          <option key={key} value={key}>
          {value}
          </option>
        ))}
      </select>
      { selectedCountry && countryRegionList[lang][selectedCountry] ? 
        (
          <select value={selectedRegion} onChange={handleRegionChange}>        
            <option value="">Select a region</option>
            {Object.entries(countryRegionList[lang][selectedCountry]).map(([key, value]) => (
              <option key={key} value={key}>
              {value}
              </option>
            ))}
          </select>
        ) : ('')
      }
    </div>
  );
}

export default CountryRegionDropdownList;