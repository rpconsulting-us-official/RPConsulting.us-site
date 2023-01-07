let num = 1;
function alerter() {
alert("alert " + num)
++num;
}
function setCookie() {
    
    document.cookie = "admin = yes; expires=Thu, 18 Dec 2050 12:00:00 UTC; path=/";
    document.cookie = "admin = yes; expires=Thu, 18 Dec 2050 12:00:00 UTC; path=../";
    

}


setCookie()



