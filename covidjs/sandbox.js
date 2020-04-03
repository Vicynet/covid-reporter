const form = document.querySelector('form');

const fullname = document.getElementById("fullname")

const age = document.getElementById("age")


console.log(fullname)

// db.collection('users').get().then((snapshot)=>{
//     // when we have the data
//     snapshot.docs.forEach(doc =>{
//         console.log(doc.data())
//     })
// }).catch(err=>{
//     console.log(err);
// });

// Sending email
// $.ajax({
//     type: "POST",
//     url: "https://mandrillapp.com/api/1.0/messages/send.json",
//     data: {
//       'key': '5bc9710ae5bde16a117bead69580ba55-us19',
//       'message': {
//         'from_email': 'maduabuchiokonkwo@gmail.com',
//         'to': [
//             {
//               'email': 'iovuefe@gmail.com',
//               'name': 'efe',
//               'type': 'to'
//             },
//             {
//               'email': 'okonkwomaduabuchi@gmail.com',
//               'name': 'Nnamdi',
//               'type': 'to',
//             }
//           ],
//         'autotext': 'true',
//         'subject': 'Covid19 test',
//         'html': '<h1>hello dear we are writing to you...</h1>'
//       }
//     }
//    }).done(function(response) {
//     console.log("message sent")
//      console.log(response); // if you're into that sorta thing
//    });





Email.send({
    Host : "smtp.mailtrap.io",
    Username : "c958175c6ffe87",
    Password : "65bd9f48e7a395",
    To : 'okonkwomaduabuchi@gmail.com',
    From : "Maduabuchi@gmail.com",
    Subject : "Covid-19",
    Body : "<h1>And this is the body</h1>"
}).then(
message => alert(message),
console.log("mali sent")
).catch(err=>{
    console.log(err);
});



//Retriev informations for sending notifications in the future

db.collection('redflag').get().then((snapshot)=>{
    // when we have the data
    snapshot.docs.forEach(doc =>{
        details = {
            name: doc.data().name,
            email:doc.data().email,
            flag: doc.data().flag,
            gender: doc.data().gender,
            phone: doc.data().phone,
            score: doc.data().score,
            time: doc.data().created_at.toDate(),
            day: doc.data().created_at.toDate().getDate()

        }

        //console.log(details);
    })
}).catch(err=>{
    console.log(err);
})


// add documents
fullname.onchange=function logoutName(){
    //console.log(fullname.value)
}

odabo.onchange=function lougoutValue(){
   // console.log(odabo.value)
}

submitButton.onchange=function logoutval(){
    //console.log(submitButton.value)
}

// function logdata(){
//     console.log("Hello age")
//     const users = {
//         name: form.fullname.value,
//         email: form.email.value,
//         phone: form.phone.value,
//         gender: form.gender.value,
//         age: age.value,
    
//     }
//    console.log(users); 
// }



// function logdata(){
//     const now = new Date();
    
//     console.log("Hello age")
//     const users = {
//         name: form.fullname.value,
//         email: form.email.value,
//         phone: form.phone.value,
//         gender: form.gender.value,
//         age: age.value,
//         created_at: firebase.firestore.Timestamp.fromDate(now)
    
//     }
//      console.log(users)   
//     db.collection('users').add(users).then(() =>{
//         console.log("new user added")
//     }).catch(err =>{
//             console.log(err)
//     })


   
// }
