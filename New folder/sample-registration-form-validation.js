function formValidation()  
{  
var uid = document.registration.userid;  
var uname = document.registration.username;  
var uadd = document.registration.address;  
var ucountry = document.registration.country;  
var uzip = document.registration.zip;  
var um= document.registration.male;  
var uf= document.registration.female;
var lang=document.registration.language;
var em=document.registration.email;
if(userid_validation(uid,5,12))  
{  
if(allLetter(uname))  
{  
if(alphanumeric(uadd))  
{   
if(countryselect(ucountry))  
{  
if(allnumeric(uzip))  
{
if(gender(um,uf))
{
if(languag(lang))
{
if(mail(em))
{
}
}
}  
}   
}  
}  
}  
}  
return false;
}


function userid_validation(uid,max,min)  
{  
var uid_len = uid.value.length;  
if (uid_len == 0 || uid_len >= min || uid_len < max)  
{  
alert("User Id should not be empty / length be between "+max+" to "+min);  
userid.focus();  
return false;  
}  
return true;  
}  


function allLetter(uname)  
{   
var letters = /^[A-Za-z]+$/;  
if(uname.value.match(letters))  
{  
return true;  
}  
else  
{  
alert('Username must have alphabet characters only');  
username.focus();  
return false;  
}  
}  

function alphanumeric(uadd)  
{   
var letters = /^[0-9a-zA-Z]+$/;  
if(uadd.value.match(letters))  
{  
return true;  
}  
else  
{  
alert('User address must have alphanumeric characters only');  
address.focus();  
return false;  
}  
}  

function countryselect(ucountry)  
{  
if(ucountry.value == "Default")  
{  
alert('Select your country from the list');  
ucountry.focus();  
return false;  
}  
else  
{  
return true;  
}  
}  

function allnumeric(uzip)  
{   
var numbers = /^[0-9]+$/;  
if(uzip.value.match(numbers))  
{  
return true;  
}  
else  
{  
alert('ZIP code must have numeric characters only');  
zip.focus();  
return false;  
}  
}  

function gender(um,uf)
{
if((registration.gender[0].checked==false) && (registration.gender[1].checked==false)) 
{
alert ( "Please choose your Gender: Male or Female" ); 
return false;
}
return true;
}

function languag(lang)
{
if((registration.eng[0].checked==false) && (registration.eng[1].checked==false)) 
{
alert ( "Please select language" ); 
return false;
}
return true;
}

function mail(em)
{
if (em.value == "")
{
alert("Please enter a valid e-mail address.");
email.focus();
return false;
}
if (em.value.indexOf("@", 0) < 0)
{
alert("Please enter a valid e-mail address.");
email.focus();
return false;
}
if (em.value.indexOf(".", 0) < 0)
{
alert("Please enter a valid e-mail address.");
email.focus();
return false;
}
}