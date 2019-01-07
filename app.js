const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

var myUsers = [ {
	name: 'Nancy',
	photo: 'Nancy@myphptp.com',
	question1: 2,
	question2: 3,
	question3: 1,
	question4: 2,
	question5: 1,
	question6: 5,
	question7: 5,
	question8: 2,
	question9: 2,
	question10: 1
},
{
	name: 'Marge',
	photo: 'Marge@mphoto.com',
	question1: 1,
	question2: 2,
	question3: 2,
	question4: 4,
	question5: 3,
	question6: 1,
	question7: 2,
	question8: 3,
	question9: 4,
	question10: 4
}
];

var userResponse = [];
var username = '';

function search(res, nameKey1, nameKey2){
    for (var i=0; i < myUsers.length; i++) {
		console.log('the value of nameKey1 is: ' + nameKey1);
		console.log('The value of nameKey2 is: ' + nameKey2);
		if (myUsers[i].question1 == nameKey1 && myUsers[i].question2 == nameKey2)
		{
			console.log('Your best match is: ' + myUsers[i].name);
			username = myUsers[i].name;

			//return username;
			res.json({username: myUsers[i].name});
        } else {
			console.log('No match');
		}
			//console.log(myUsers[i]);
    }
}

app.get('/', (request, response) =>  response.sendFile(`${__dirname}/index1.html`));

app.post('/api/data', (request, response) => {
	  const postBody = request.body;
	  console.log(postBody);
	  //response.send(postBody);

	  userResponse.push(postBody.name, postBody.photo, postBody.question1, postBody.question2, postBody.question3, postBody.question4, postBody.question5, postBody.question6, postBody.question7, postBody.question8, postBody.question9, postBody.question10);

	  search(response, postBody.question1, postBody.question2);
	  
	  //response.send(myUsers[i].name);
});
app.get('/response', (req, res) => res.sendFile(`${__dirname}/index2.html`));

app.listen(3010, () => console.info('Application running on port 3010'));
