const firebaseConfig = {
    apiKey: "AIzaSyAHrPnSnEjxMQUPgdnoMo5Y7kWnBFB2U4I",
    authDomain: "contactform-ea5a1.firebaseapp.com",
    databaseURL: "https://contactform-ea5a1-default-rtdb.firebaseio.com",
    projectId: "contactform-ea5a1",
    storageBucket: "contactform-ea5a1.appspot.com",
    messagingSenderId: "816875483665",
    appId: "1:816875483665:web:d80834c3eacd0f84e137b0"
  };
  
  firebase.initializeApp(firebaseConfig);


var constactFormDB = firebase.database().ref('contactForm')

document.getElementById("contactForm").addEventListener("submit" , submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getInputVal('name');
    var emailid = getInputVal('emailid');
    var address = getInputVal('address');
    var qow = getInputVal('qow');
    var tow = getInputVal('tow');

    saveMessage(name, emailid, address, qow, tow);


    document.querySelector('.alert').style.display = 'block';
    
    setTimeout(() =>{
        document.querySelector('.alert').style.display = 'none';
    }, 3000);


    document.getElementById('contactForm').reset();
}


const saveMessage = (name, emailid, address, qow, tow ) => {
    var newContactForm = constactFormDB.push();

    newContactForm.set({
        name : name,
        emailid : emailid,
        address : address,
        qow : qow,
        tow : tow,
    });
};

const getInputVal = (id) => {
    return document.getElementById(id).value;
}