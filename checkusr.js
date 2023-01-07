function checkCookie() {
    let user = document.cookie;
    if (user = "yes") {
    alert("Welcome again admin");
    } else {
    alert("goodbye non-admin");
    } 
    }
checkCookie()