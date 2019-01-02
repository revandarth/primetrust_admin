var https    = require("https");
//var api_key  = "akhhR2tWN3hCcV83Zm96Q2g3ckhEZThITkdJb0R0blY6";
https.request({
		host: "sandbox.fundamerica.com",
		path:"/api/entities",
		method: 'GET',
		headers: {
      'Content-Type':'application/x-www-form-urlencoded',
		//	"API": api_key,
			//"Authorization": "Basic " + new Buffer.from( email + ":" + password ).toString('base64')
      "Authorization": 'Basic akhhR2tWN3hCcV83Zm96Q2g3ckhEZThITkdJb0R0blY6'
		}
	}, function(res){

		var response = "";
		res.on('data', function(chunk){
			response += chunk;
      console.log(response)
		});
		res.on('end',function(){
			response = JSON.parse(response);
        console.log('end')
			// DO STUFF WITH response HERE...
		});
}).end();
