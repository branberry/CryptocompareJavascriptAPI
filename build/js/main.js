export default class Cryptocompare {
  
    constructor() {
        this.cryptoResponse = {};
    }
    
    getCoinByUsd(d) {
        
    }
}


const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'https://min-api.cryptocompare.com/data/all/coinlist';

fetch(url)
.then(res => res.json())
.then(d => {
    callback(d);
});


callback = (data) => {
    console.log(data);
}
var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
  return gulp.src("source/index.js")
    .pipe(babel())
    .pipe(gulp.dest("distribution"));
});