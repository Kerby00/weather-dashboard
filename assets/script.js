var submitbuttonEl = ("#bttn")
var inputfieldEL = $('#inputfield')
var weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q='
var forcastApi = "https://api.openweathermap.org/data/2.5/forcast?q="
var key = "&appid=be30da2af0ff0d35435cf8d981573ac1"
var date = dayjs().format('MM/DD/YYYY')
$(inputfieldEL).on('click', function () {

    $(this).val(' ');

})


function weather(event) {
    event.preventDefault();
    var input = inputfieldEL.val()
    var nospace = input.split(" ").join("")
    var cordapi = (weatherAPI + nospace + "&units=Imperial" + key)
    

    fetch(cordapi)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            var city = data.name
            var temper = data.main.temp
            var humid = data.main.humidity
            var wind = data.wind.speed
            console.log(data)

             var cityname = city + " " + "(" + date + ")"
            var temperature = "Temperature: " + temper + "°F"
            var humidities = "Humidity: " + humid + "%"
            var windspeed = "Wind: " + wind + "MPH"
            if (document.getElementById('current').firstChild == null) {
                var citynameEl = document.createElement("h2")
                var temperatureEl = document.createElement('li')
                var humiditiesEl = document.createElement('li')
                var windspeedEl = document.createElement('li')

                citynameEl.innerHTML = cityname
                temperatureEl.innerHTML = temperature
                humiditiesEl.innerHTML = humidities
                windspeedEl.innerHTML = windspeed

                document.getElementById("current").appendChild(citynameEl)
                document.getElementById("current").appendChild(temperatureEl)
                document.getElementById("current").appendChild(windspeedEl)
                document.getElementById("current").appendChild(humiditiesEl)
            } else {
                document.getElementById('current').children[0].innerHTML = cityname;
                document.getElementById('current').children[1].innerHTML = temperature;
                document.getElementById('current').children[2].innerHTML = windspeed;
                document.getElementById('current').children[3].innerHTML = humidities;
            }
        })


fetch 




}


$(submitbuttonEl).on('click', weather)