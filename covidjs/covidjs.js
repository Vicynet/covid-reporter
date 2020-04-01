var covid_date = new Date();
document.getElementById("date").innerHTML = covid_date.toDateString();

//Create the XHR Object
let xhr = new XMLHttpRequest;

// Call the open function, GET-type of request, url, true-asynchronous
xhr.open('GET', 'https://covid19-update-api.herokuapp.com/api/v1/ncdc/cases', true)
// call the onload 
xhr.onload = function() 
    {
      let data = JSON.parse(this.responseText).cases;

        // check if the status is 200(means everything is okay)
        if (this.status === 200) 
            {
                  document.getElementById("cases").innerHTML = data.total
                  document.getElementById("death").innerHTML = data.death
                  document.getElementById("recover").innerHTML = data.discharged

                  var death = parseInt(document.getElementById("death").innerHTML)
                  var recovered = parseInt(document.getElementById("recover").innerHTML)
                  var all = parseInt(document.getElementById("cases").innerHTML)
                  var active = all - (death + recovered)
                  document.getElementById("active").innerHTML = active
                  document.getElementById('closed').innerHTML = death + recovered
               
              } else {
                console.log('error')
    }
            }
// call send
xhr.send();

//Create the XHR Object
let req = new XMLHttpRequest;

//Call the open function, GET-type of request, url, true-asynchronous
req.open('GET', 'https://covid19-update-api.herokuapp.com/api/v1/ncdc/cases/states', true)
//call the onload 
req.onload = function() 
    {
        //check if the status is 200(means everything is okay)
        if (this.status === 200) 
            {
                  let data = JSON.parse(this.responseText).states;
                  var x = ""
                  var y = ""

                for (i in data) {
                    if (data != 0) {
                        x += data[i].name + "<br>";
                        y += data[i].cases + "<br>";
                    }
                 
                  }
                
                document.getElementById("states").innerHTML = x;
                document.getElementById("state_cases").innerHTML = y;
    }
            }
//call send
req.send();
//Common Types of HTTP Statuses
// 200: OK

        



