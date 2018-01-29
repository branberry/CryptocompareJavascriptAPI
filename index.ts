const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'https://min-api.cryptocompare.com/data/all/coinlist';

fetch(url)
.then(res => res.json())
.then(d => {
    this.cryptoResponse = d.Data;
    callback(this.cryptoResponse);
});


callback = (data) => {
console.log(data);
}