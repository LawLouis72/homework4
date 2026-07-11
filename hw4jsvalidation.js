   /*
Program name: patient-form.css
Author: Isaiah Louis
Date created: 7/6/2026
Date last edited: 7/11/2026
Version: 4.0
Description: A document to add JS to the form
*/
 let validity_error = 0

 function focusfname(){
    const x = document.getElementById("fname").value;
    const errorfname = document.getElementById("errorfname");
    if (x == "" || /^[A-Za-z]{1,30}$/.test(x)){
        errorfname.innerHTML = "";
        validity_error = 0
    } else {
        errorfname.innerHTML = (" Only use letters and maximum of 30 characters ")
        validity_error = 1
    }
}

function focusmi(){
    const x = document.getElementById("mi").value;
    const errormi = document.getElementById("errormi");
    if (x == "" || /^[A-Za-z]{0,1}$/.test(x)){
        errormi.innerHTML = "";
        validity_error = 0
    } else {
        errormi.innerHTML =("1 letter character only")
        validity_error = 1
    }
}  

 function focuslname(){
    const x = document.getElementById("lname").value;
    const errorfname = document.getElementById("errorlname");
    if (x == "" || /^[A-Za-z]{1,30}$/.test(x)){
        errorfname.innerHTML = "";
        validity_error = 0
    } else {
        errorfname.innerHTML = (" Only use letters and maximum of 30 characters ")
        validity_error = 1
    }
}

function focusbirthday(){
    const x = document.getElementById("birthday").value;
    const errorbirthday = document.getElementById("errorbirthday");
    if (x != ""){
        errorbirthday.innerHTML = ""
        validity_error = 0
    } else {
        errorbirthday.innerHTML = ("Enter a valid date between 01-01-1900 and 08-01-2003")
        validity_error = 1
    }
}

function focusssn(){
    const x = document.getElementById("ssn").value;
    const errorssn = document.getElementById("errorssn")
    if (x == "" || /^[0-9]{3}-[0-9]{2}-[0-9]{4}|[0-9]{9}$/.test(x)){
      errorssn.innerHTML = "";
      validity_error = 0
    } else {
       errorssn.innerHTML = ("Requires 9 characters and numbered, can be 000-00-0000 or 000000000 format")
       validity_error = 1
    }
}

function focusaddressone(){
    const x = document.getElementById("Address_One").value;
    const erroraddressone = document.getElementById("erroraddressone");
    if (x== "" || /^[A-Za-z0-9\s.#'-]{1,30}$/.test(x)){
      erroraddressone.innerHTML = "";
      validity_error = 0
    } else {
      erroraddressone.innerHTML = ("Can be no more than 30 characters and only includes numbers, letters, and .#'-")
       validity_error = 1
    }
}

function focusaddresstwo(){
    const x = document.getElementById("Address_Two").value;
    const erroraddresstwo = document.getElementById("erroraddresstwo");
    if (x== "" || /^[A-Za-z0-9\s.#'-]{1,30}$/.test(x)){
      erroraddresstwo.innerHTML = "";
      validity_error = 0
    } else {
      erroraddresstwo.innerHTML = ("Can be no more than 30 characters and only includes numbers, letters, and .#'-")
       validity_error = 1
    }
}

function focusstate(){
    const x = document.getElementById("State").value;
    const errorstate = document.getElementById("errorstate");
    if (x != "Default"){
        errorstate.innerHTML = "";
        validity_error = 0
    } else {
        errorstate.innerHTML = ("Value cannot be default")
        validity_error = 1
    }
}

function focuscity(){
    const x = document.getElementById("city").value;
    const errorcity = document.getElementById("errorcity");
    if (x == "" || /^[A-Za-z\s.#'-]{1,30}$/.test(x)){
        errorcity.innerHTML = "";
        validity_error = 0
    } else {
        errorcity.innerHTML = ("Only letters and .#'- are allowed with a max of 30 characters")
        validity_error = 1
    }
}

function focuszipcode(){
    const x = document.getElementById("Zipcode").value;
    const errorzipcode = document.getElementById("errorzipcode");
    if (x == "" || /^[0-9]{5,10}$/.test(x)){
        errorzipcode.innerHTML = ""
        validity_error = 0
    } else {
        errorzipcode.innerHTML = ("Only numbers allowed min 5 max 10")
        validity_error = 1
    }
}

function focusemail(){
    const x = document.getElementById("email").value;
    const erroremail = document.getElementById("erroremail");
    if (x == "" || /^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/.test(x)){
        erroremail.innerHTML = ""
        validity_error = 0
    } else {
        erroremail.innerHTML = ("Follow email format aaa@aaa.com")
        validity_error = 1
    }
}

function focusphone(){
    const x = document.getElementById("phone").value;
    const errorphone = document.getElementById("errorphone");
    if (x == "" || /^[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{10}$/.test(x)){
        errorphone.innerHTML = ""
        validity_error = 0
    } else {
        errorphone.innerHTML = ("Numbers only follow 000-000-0000 or 0000000000 format")
        validity_error = 1
    }
}

function focususerid(){
    const x = document.getElementById("userID").value;
    const erroruserid = document.getElementById("erroruserid");
    if (x == "" || /^[A-Za-z0-9]{1,20}$/.test(x)){
        erroruserid.innerHTML = ""
        validity_error = 0
    } else {
        erroruserid.innerHTML = ("Valid userID contains letters and numbers max 20 characters")
        validity_error = 1
    }
}

function focuspassword(){
    const x = document.getElementById("password").value;
    const errorpassword = document.getElementById("errorpassword");
    if (x == "" || /^[A-Za-z0-9._%+\-]{8,20}$/.test(x)){
        errorpassword.innerHTML = ""
        validity_error = 0
    } else {
        errorpassword.innerHTML =("Must be between 8 and 20 charatcers and may contain letters, numbers, and _%+\-")
        validity_error = 1
    }
}

function focusrepassword(){
    const x = document.getElementById("repassword").value;
    const password = document.getElementById("password").value;
    const errorrepassword = document.getElementById("errorrepassword");
    if (x === password){
        errorrepassword.innerHTML = ""
        validity_error = 0
    } else {
       errorrepassword.innerHTML = ("Must match password field")
        validity_error = 1
    }
}

function verifyfname(){
    const x = document.getElementById("fname").value;
    if (/^[A-Za-z]{1,30}$/.test(x)){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}

function verifymi(){
    const x = document.getElementById("mi").value;
    if (x == "" || /^[A-Za-z]{0,1}$/.test(x)){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}      
    
function verifylname(){
    const x = document.getElementById("lname").value;
    if (/^[A-Za-z]{1,30}$/.test(x)){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}

function verifybirthday(){
    const x = document.getElementById("birthday").value;
    if (x != ""){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}

function verifyssn(){
    const x = document.getElementById("ssn").value;
    if (/^[0-9]{3}-[0-9]{2}-[0-9]{4}|[0-9]{9}$/.test(x)){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}

function verifyAddress_One(){
    const x = document.getElementById("Address_One").value;
    if (/^[A-Za-z0-9\s.#'-]{1,30}$/.test(x)){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}

function verifyAddress_Two(){
    const x = document.getElementById("Address_Two").value;
    if (x== "" || /^[A-Za-z0-9\s.#'-]{1,30}$/.test(x)){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}

function verifyState(){
    const x = document.getElementById("State").value;
    if (x != "Default"){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}

function verifycity(){
    const x = document.getElementById("city").value;
    if (/^[A-Za-z\s.#'-]{1,30}$/.test(x)){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}

function verifyZipcode(){
    const x = document.getElementById("Zipcode").value;
    if (/^[0-9]{5,10}$/.test(x)){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}

function verifyemail(){
    const x = document.getElementById("email").value;
    if (/^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/.test(x)){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}

function verifyphone(){
    const x = document.getElementById("phone").value;
    if (/^[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{10}$/.test(x)){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}

function verifyuserID(){
    const x = document.getElementById("userID").value;
    if (/^[A-Za-z0-9]{1,20}$/.test(x)){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}

function verifypassword(){
    const x = document.getElementById("password").value;
    if (/^[A-Za-z0-9._%+\-]{8,20}$/.test(x)){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}

function verifyrepassword(){
    const x = document.getElementById("repassword").value;
    const password = document.getElementById("password").value;
    if (x === password){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}

function slidernumber(value) {
  document.getElementById("sliderrange").innerHTML = value; 
}



function review_form(){
    const fname = document.getElementById("fname");
    const mi = document.getElementById("mi");
    const lname = document.getElementById("lname");
    const birthday = document.getElementById("birthday");
    const ssn =  document.getElementById("ssn");
    const Address_One = document.getElementById("Address_One");
    const Address_Two = document.getElementById("Address_Two");
    const State = document.getElementById("State");
    const city = document.getElementById("city");
    const Zipcode = document.getElementById("Zipcode");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const userID = document.getElementById("userID");
    const password = document.getElementById("password");
    const repassword = document.getElementById("repassword");
    const slider = document.getElementById("slider");
    const patient_thoughts = document.getElementById("patient_thoughts");

    const fnameverify = verifyfname()
    const miverify = verifymi()
    const lnameverify = verifylname()
    const birthdayverify = verifybirthday()
    const ssnverify = verifyssn()
    const Address_Oneverify = verifyAddress_One()
    const Address_Twoverify = verifyAddress_Two()
    const Stateverify = verifyState()
    const cityverify = verifycity()
    const Zipcodverify = verifyZipcode()
    const emailverify = verifyemail()
    const phoneverify = verifyphone()
    const userIDverify = verifyuserID()
    const passwordverify = verifypassword()
    const repasswordverify = verifyrepassword()

    document.getElementById("show_validate").innerHTML= "PATIENT INPUT REVIEW" + "<br>" + "<br>" +
                                                        "First Name: " + fname.value + "- " + fnameverify + "<br>" + "<br>" +
                                                        "Middle Inital: " + mi.value + "- " + miverify + "<br>" + "<br>" +
                                                        "Last Name: " +   lname.value + "- " + lnameverify + "<br>" + "<br>" +
                                                        "Birthday: " + birthday.value + "- " + birthdayverify + "<br>" + "<br>" +
                                                        "SSN: " + ssn.value + "- " + ssnverify + "<br>" + "<br>" +
                                                        "Address One: " + Address_One.value + "- " + Address_Oneverify + "<br>" + "<br>" +
                                                        "Address Two: " + Address_Two.value + "- " + Address_Twoverify + "<br>" + "<br>" +
                                                        "State: " + State.value + " - " + Stateverify + "<br>" + "<br>" +
                                                        "City: " + city.value + "- " + cityverify + "<br>" + "<br>" +
                                                        "Zipcode: " + Zipcode.value + "- " + Zipcodverify + "<br>" + "<br>" +
                                                        "Email: " + email.value + "- " + emailverify + "<br>" + "<br>" +
                                                        "Phone: " + phone.value + "- " + phoneverify + "<br>" + "<br>" +
                                                        "UserID: " + userID.value + "- " + userIDverify + "<br>" + "<br>" +
                                                        "Password: " + password.value + "- " + passwordverify + "<br>" + "<br>" +
                                                        "Re-password: " + repassword.value + "- " + repasswordverify + "<br>" + "<br>" +
                                                        "Slider: " + slider.value + " - " + "Valid" + "<br>" + "<br>" +
                                                        "Patient Thoughts: " + patient_thoughts.value + "- " + "Valid" + "<br>"
}

async function showstates() {
    try { const res = await fetch("stateshw4.json");
        if (!res.ok) {
          throw new Error("Network Failed");
        } const names = await res.json();
          const state = document.getElementById("State");
          let addstates = "";
          for (let i = 0; i < names.states.length; i++) {
          addstates += "<option>" + names.states[i].name + "</option>";
        } state.innerHTML += addstates;
    } catch (err) {
      console.error(err.message);
    }
} onload = function() {
    showstates();
    returningpatient();
}

function cookie(cookiename, cookievalue, expirewhen) {
  const d = new Date();
  d.setTime(d.getTime() + (expirewhen * 24 * 60 * 60 * 1000));
  const expires = "expires="+d.toUTCString();
  document.cookie = cookiename + "=" + cookievalue + ";" + expires + ";path=/";
}

function getcookie(cookiename) {
  const name = cookiename + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function cookiename() {
    const fname = document.getElementById("fname").value;
    cookie("fname", fname, 2);
}

function returningpatient() {
    const returnedpatient = getcookie("fname");
    if (returnedpatient == "") {
        document.getElementById("welcome").innerHTML ="Welcome, New Patient!";
    } else {
        document.getElementById("welcome").innerHTML ="Welcome back, "+returnedpatient + "!";
        document.getElementById("fname").value = returnedpatient;
    }
}

function newpatient() {
    document.cookie = "fname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.getElementById("med_form").reset();
    document.getElementById("welcome").innerHTML ="Welcome, New Patient!";
}
