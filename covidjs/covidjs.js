// Copyright. All Rights Reserved
// Dashboard current date
var covid_date = new Date();
document.getElementById("date").innerHTML = covid_date.toDateString();

//For all dashboards, Get confirmed cases, recovery, deaths

var dash = new XMLHttpRequest()

dash.open('GET', 'https://api.covid19api.com/summary', true)
//call the onload 
dash.onload = function() 
{
    //check if the status is 200(means everything is okay)
    if (this.status === 200) {
            var data = JSON.parse(this.responseText).Countries;
            var globalStat = JSON.parse(this.responseText).Global;

            for (i in data) {

                if (data[i].Country == "Nigeria") {
                  document.getElementById("cases").innerHTML = data[i].TotalConfirmed
                  document.getElementById("death").innerHTML = data[i].TotalDeaths
                  document.getElementById("recover").innerHTML = data[i].TotalRecovered
                  document.getElementById("active").innerHTML = data[i].TotalConfirmed - (data[i].TotalDeaths + data[i].TotalRecovered)
                  document.getElementById('closed').innerHTML = data[i].TotalDeaths + data[i].TotalRecovered
                  document.getElementById("newcon").innerHTML = data[i].NewConfirmed
                  document.getElementById("newrecovery").innerHTML = data[i].NewRecovered
                }
             
            }

              if (globalStat != 0) {
                document.getElementById("totalCases").innerHTML = globalStat.TotalConfirmed.toLocaleString();
                document.getElementById("totalRecovery").innerHTML = globalStat.TotalRecovered.toLocaleString();
                document.getElementById("totalDeaths").innerHTML = globalStat.TotalDeaths.toLocaleString();
              }            
    }
}
//call send
dash.send();

//For states table
const tBoddy = document.getElementById("tableBody")
        fetch('https://covid-19-countries.herokuapp.com/countries/nigeria').then(function(response) {
            return response.json();
        }).then(function(data) {
            let cases_list = data[0].states
                // console.log(cases_list)
            let tr = ""
            for (i in cases_list) {
                let states = cases_list[i].name;
                let cases = cases_list[i].cases;
                data1 = {
                    'states': states,
                    'cases': cases
                }
                const _tr = `
                <tr>
                   
                <td>${data1.states}</td>
                <td>${data1.cases}</td>
                </tr>
                `
                tr += _tr

            }
            tBoddy.innerHTML = tr
        }).catch(function(err) {
            console.warn('Something went wrong.', err);
        });