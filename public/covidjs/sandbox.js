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

// add documents
fullname.onchange=function logoutName(){
    console.log(fullname.value)
}

odabo.onchange=function lougoutValue(){
    console.log(odabo.value)
}

submitButton.onchange=function logoutval(){
    console.log(submitButton.value)
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


