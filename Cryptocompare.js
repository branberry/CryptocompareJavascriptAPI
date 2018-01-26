const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'https://min-api.cryptocompare.com/data/all/coinlist';
var cryptoResponse = {};

fetch(url)
    .then(res => res.json())
    .then(d => {
        cryptoResponse = d.Data;
        console.log(cryptoResponse)
    });
