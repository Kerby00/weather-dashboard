var submitbuttonEl = ("#bttn")
var inputfieldEL = $('#inputfield')
var weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q='
var forcastApi = "https://api.openweathermap.org/data/2.5/forecast?q="
var key = "&appid=be30da2af0ff0d35435cf8d981573ac1"
var date = dayjs().format('MM/DD/YYYY')
var day1 = dayjs().add(1, 'day').format('MM/DD/YYYY')
var day2 = dayjs().add(2, 'day').format('MM/DD/YYYY')
var day3 = dayjs().add(3, 'day').format('MM/DD/YYYY')
var day4 = dayjs().add(4, 'day').format('MM/DD/YYYY')
var day5 = dayjs().add(5, 'day').format('MM/DD/YYYY')

// This is the function to get the current days weather
function weather(e) {
    e.preventDefault()
    var input = inputfieldEL.val().trim()
    var cordapi = (weatherAPI + input + "&units=imperial" + key)
    var foreapi = (forcastApi + input + "&units=imperial" + key)

    console.log(input)
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
        }).then(function buttony() {
            var histname = document.createElement('button')
            histname.innerHTML = input
            $('#recents').append(histname)
            console.log(input)
        })

    //this function gets the weather for the next 5 day forcast
    fetch(foreapi)
        .then(function (response) {
            return response.json();
        }).then(function (data) {

            var fore0temp = "Temp:" + data.list[0].main.temp + "°F"
            var fore0wind = "Wind:" + data.list[0].wind.speed + "MPH"
            var fore0humid = "Humid:" + data.list[0].main.humidity + "%"
            console.log(fore0temp)

            var fore1temp = "Temp:" + data.list[6].main.temp + "°F"
            var fore1wind = "Wind:" + data.list[6].wind.speed + "MPH"
            var fore1humid = "Humid:" + data.list[6].main.humidity + "%"

            var fore2temp = "Temp:" + data.list[14].main.temp + "°F"
            var fore2wind = "Wind:" + data.list[14].wind.speed + "MPH"
            var fore2humid = "Humid:" + data.list[14].main.humidity + "%"

            var fore3temp = "Temp:" + data.list[22].main.temp + "°F"
            var fore3wind = "Wind:" + data.list[22].wind.speed + "MPH"
            var fore3humid = "Humid:" + data.list[22].main.humidity + "%"

            var fore4temp = "Temp:" + data.list[30].main.temp + "°F"
            var fore4wind = "Wind:" + data.list[30].wind.speed + "MPH"
            var fore4humid = "Humid:" + data.list[30].main.humidity + "%"
            console.log(data)
            // This really sucked, I need to get better at looping. I wasnt sure how to loop and skip to different numbers in the data array. I was pulling my hair out... if theres any good links or resource to help me understand I would really appreciate it
            var futuredate0 = document.createElement('h3')
            var temperature0El = document.createElement('li')
            var humidities0El = document.createElement('li')
            var windspeed0El = document.createElement('li')

            var futuredate1 = document.createElement('h3')
            var temperature1El = document.createElement('li')
            var humidities1El = document.createElement('li')
            var windspeed1El = document.createElement('li')

            var futuredate2 = document.createElement('h3')
            var temperature2El = document.createElement('li')
            var humidities2El = document.createElement('li')
            var windspeed2El = document.createElement('li')

            var futuredate3 = document.createElement('h3')
            var temperature3El = document.createElement('li')
            var humidities3El = document.createElement('li')
            var windspeed3El = document.createElement('li')

            var futuredate4 = document.createElement('h3')
            var temperature4El = document.createElement('li')
            var humidities4El = document.createElement('li')
            var windspeed4El = document.createElement('li')

            temperature0El.innerHTML = fore0temp
            humidities0El.innerHTML = fore0humid
            windspeed0El.innerHTML = fore0wind
            futuredate0.innerHTML = day1

            document.getElementById("day1").appendChild(futuredate0)
            document.getElementById("day1").appendChild(temperature0El)
            document.getElementById("day1").appendChild(windspeed0El)
            document.getElementById("day1").appendChild(humidities0El)

            temperature1El.innerHTML = fore1temp
            humidities1El.innerHTML = fore1humid
            windspeed1El.innerHTML = fore1wind
            futuredate1.innerHTML = day2

            document.getElementById("day2").appendChild(futuredate1)
            document.getElementById("day2").appendChild(temperature1El)
            document.getElementById("day2").appendChild(windspeed1El)
            document.getElementById("day2").appendChild(humidities1El)

            temperature2El.innerHTML = fore2temp
            humidities2El.innerHTML = fore2humid
            windspeed2El.innerHTML = fore2wind
            futuredate2.innerHTML = day3

            document.getElementById("day3").appendChild(futuredate2)
            document.getElementById("day3").appendChild(temperature2El)
            document.getElementById("day3").appendChild(windspeed2El)
            document.getElementById("day3").appendChild(humidities2El)

            temperature3El.innerHTML = fore3temp
            humidities3El.innerHTML = fore3humid
            windspeed3El.innerHTML = fore3wind
            futuredate3.innerHTML = day4

            document.getElementById("day4").appendChild(futuredate3)
            document.getElementById("day4").appendChild(temperature3El)
            document.getElementById("day4").appendChild(windspeed3El)
            document.getElementById("day4").appendChild(humidities3El)

            temperature4El.innerHTML = fore4temp
            humidities4El.innerHTML = fore4humid
            windspeed4El.innerHTML = fore4wind
            futuredate4.innerHTML = day5

            document.getElementById("day5").appendChild(futuredate4)
            document.getElementById("day5").appendChild(temperature4El)
            document.getElementById("day5").appendChild(windspeed4El)
            document.getElementById("day5").appendChild(humidities4El)

        })







}

// function buttony() {
//     var histname = document.createElement('button')
//     histname.innerHTML = userinput
//     $('#recents').append(histname)
// }

$(submitbuttonEl).on('click', weather)
