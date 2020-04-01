var covid_date = new Date();
document.getElementById("date").innerHTML = covid_date.toDateString();

var request = new XMLHttpRequest()

var death = parseInt(document.getElementById("death").innerHTML)
var recovered = parseInt(document.getElementById("recover").innerHTML)
var active = death + recovered
document.getElementById("closed").innerHTML = active

request.open('GET', 'https://api.covid19api.com/live/country/nigeria/status/confirmed', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(Country => {
      document.getElementById("cases").innerHTML = Country.Cases
      document.getElementById("active").innerHTML = Country.Cases - active
    })
  } else {
    console.log('error')
  }
}

request.send()


//Create the XHR Object
// let xhr = new XMLHttpRequest;

//Call the open function, GET-type of request, url, true-asynchronous
// xhr.open('GET', 'https://covid19-update-api.herokuapp.com/api/v1/ncdc/cases', true)
//call the onload 
// xhr.onload = function() 
    // {
      // let data = JSON.parse(this.responseText).cases;

        //check if the status is 200(means everything is okay)
        // if (this.status === 200) 
    //         {
    //               document.getElementById("cases").innerHTML = data.total
    //               document.getElementById("death").innerHTML = data.death
    //               document.getElementById("recover").innerHTML = data.discharged

    //               var death = parseInt(document.getElementById("death").innerHTML)
    //               var recovered = parseInt(document.getElementById("recover").innerHTML)
    //               var all = parseInt(document.getElementById("cases").innerHTML)
    //               var active = all - (death + recovered)
    //               document.getElementById("active").innerHTML = active
               
    //           } else {
    //             console.log('error')
    // }
    //         }
//call send
// xhr.send();

        



