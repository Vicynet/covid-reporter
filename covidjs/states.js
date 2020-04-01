//Create the XHR Object
let xhr = new XMLHttpRequest;

//Call the open function, GET-type of request, url, true-asynchronous
xhr.open('GET', 'https://covid19-update-api.herokuapp.com/api/v1/ncdc/cases/states', true)
//call the onload 
xhr.onload = function() 
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
xhr.send();
//Common Types of HTTP Statuses
// 200: OK