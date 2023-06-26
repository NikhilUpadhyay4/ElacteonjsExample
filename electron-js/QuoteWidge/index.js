let request = require('request');

request("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand", function(err,reponse,body){
    let bodyJson = JSON.parse(body);
    console.log(bodyJson);
    let random = bodyJson[0]["content"];
    console.log(random)
    document.getElementById("quote").innerHTML = random;
})