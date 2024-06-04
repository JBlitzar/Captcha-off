var hasSeenVisible = false
var visibilityCheck = setInterval(() => {
    var visibility = document.querySelector('body > div:last-of-type').style.visibility
    if (visibility != "hidden") {
        hasSeenVisible = true
    }
}, 250)

var submitForm = setInterval(()=>{
    document.getElementById("check").click()
},500)



window.addEventListener('load', () => {
    const $recaptcha = document.querySelector('#g-recaptcha-response');
    if ($recaptcha) {
        $recaptcha.setAttribute('required', 'required');
    }

    document.getElementById("check").onclick = function() {
        if (!(grecaptcha.getResponse() == "") && !window.stopped) {
            console.log(grecaptcha.getResponse())
            if(hasSeenVisible){
                window.updateCount()
            }
            
            grecaptcha.reset()
            hasSeenVisible = false
        }
    }



})
window.submit = function(){
    var http = new XMLHttpRequest();
    var url = `https://captcha-off-verify.jblitzar.repl.co/submit?verify=${JSON.stringify(window.tokens)}`;
    var params = new URLSearchParams().toString();
    http.open('GET', url, true);
    //add other req headers
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
    alert(http.responseText);
    }
    }
    http.send(params);
}
window.count = 0
window.tokens = []
window.updateCount = function() {
    window.count += 1
    document.getElementById("count").innerHTML = window.count
    window.tokens.push(grecaptcha.getResponse())

}



