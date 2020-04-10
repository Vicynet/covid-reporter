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
                if (cases_list[i].name === "Lagos") {
                    document.getElementById("lagos").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("lagosCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Abuja Federal Capital Territor" && cases_list[i].cases !==0) {
                    document.getElementById("fct").innerHTML = cases_list[i].name + 'y: ';
                    document.getElementById("fctCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Abia" && cases_list[i].cases !==0) {
                    document.getElementById("abia").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("abiaCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Adamawa" && cases_list[i].cases !==0) {
                    document.getElementById("adamawa").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("adamawaCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Akwa Ibom" && cases_list[i].cases !==0) {
                    document.getElementById("akwa").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("akwaCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Anambra" && cases_list[i].cases !==0) {
                    document.getElementById("anambra").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("anambraCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Bauchi" && cases_list[i].cases !==0) {
                    document.getElementById("bauchi").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("bauchiCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Bayelsa" && cases_list[i].cases !==0) {
                    document.getElementById("bayelsa").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("bayelsaCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Benue" && cases_list[i].cases !==0) {
                    document.getElementById("benue").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("benueCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Borno" && cases_list[i].cases !==0) {
                    document.getElementById("borno").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("bornoCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Cross River" && cases_list[i].cases !==0) {
                    document.getElementById("cross").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("crossCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Delta" && cases_list[i].cases !==0) {
                    document.getElementById("delta").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("deltaCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Ebonyi" && cases_list[i].cases !==0) {
                    document.getElementById("ebonyi").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("ebonyiCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Edo" && cases_list[i].cases !==0) {
                    document.getElementById("edo").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("edoCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Ekiti" && cases_list[i].cases !==0) {
                    document.getElementById("ekiti").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("ekitiCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Enugu" && cases_list[i].cases !==0) {
                    document.getElementById("enugu").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("enuguCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Gombe" && cases_list[i].cases !==0) {
                    document.getElementById("gombe").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("gombeCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Imo" && cases_list[i].cases !==0) {
                    document.getElementById("imo").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("imoCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Jigawa" && cases_list[i].cases !==0) {
                    document.getElementById("jigawa").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("jigawaCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Kaduna" && cases_list[i].cases !==0) {
                    document.getElementById("kaduna").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("kadunaCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Kano" && cases_list[i].cases !==0) {
                    document.getElementById("kano").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("kanoCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Katsina" && cases_list[i].cases !==0) {
                    document.getElementById("katsina").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("katsinaCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Kebbi" && cases_list[i].cases !==0) {
                    document.getElementById("kebbi").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("kebbiCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Kwara" && cases_list[i].cases !==0) {
                    document.getElementById("kwara").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("kwaraCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Nassarawa" && cases_list[i].cases !==0) {
                    document.getElementById("nassarawa").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("nassarawaCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Niger" && cases_list[i].cases !==0) {
                    document.getElementById("niger").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("nigerCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Ogun" && cases_list[i].cases !==0) {
                    document.getElementById("ogun").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("ogunCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Ondo" && cases_list[i].cases !==0) {
                    document.getElementById("ondo").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("ondoCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Osun" && cases_list[i].cases !==0) {
                    document.getElementById("osun").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("osunCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Oyo" && cases_list[i].cases !==0) {
                    document.getElementById("oyo").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("oyoCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Plateau" && cases_list[i].cases !==0) {
                    document.getElementById("plateau").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("plateauCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Rivers" && cases_list[i].cases !==0) {
                    document.getElementById("rivers").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("riversCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Sokoto" && cases_list[i].cases !==0) {
                    document.getElementById("sokoto").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("sokotoCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Taraba" && cases_list[i].cases !==0) {
                    document.getElementById("taraba").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("tarabaCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Yobe" && cases_list[i].cases !==0) {
                    document.getElementById("yobe").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("yobeCases").innerHTML = cases_list[i].cases + ' |';
                    }
                    if (cases_list[i].name === "Zamfara" && cases_list[i].cases !==0) {
                    document.getElementById("zamfara").innerHTML = cases_list[i].name + ': ';
                    document.getElementById("zamfaraCases").innerHTML = cases_list[i].cases + ' |';
                    } 
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