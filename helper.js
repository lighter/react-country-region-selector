const fs = require('fs')
const countryData =  require('./node_modules/country-region-data/data.json')


const langs = ['en', 'zh-tw', 'zh-cn', 'ja']
let _countryData = {}
let _countryRegionData = {}

langs.forEach(lang => {
    _countryData[lang] = {}
    _countryRegionData[lang] = {}
    countryData.forEach(country => {            
        _countryData[lang][country.countryShortCode] = country.countryName 
        
        _countryRegionData[lang][country.countryShortCode] = {}
        country.regions.forEach(region => {
            _countryRegionData[lang][country.countryShortCode][region.shortCode] = region.name
        })
    })
})

// Write the _countryRegionData object to a file
fs.writeFile('./src/data/countryRegionData.json', JSON.stringify(_countryRegionData), (err) => {
    if (err) throw err;
    console.log('The _countryRegionData file has been saved!');
});


fs.writeFile('./src/data/countryData.json', JSON.stringify(_countryData), (err) => {
    if (err) throw err;
    console.log('The _countryData file has been saved!');
});
