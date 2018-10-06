

const app = document.getElementById('root');
const logo = document.createElement('img');
logo.setAttribute('src', 'logo.png');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);


var request = new XMLHttpRequest();
// new instance of the object using the constructor function

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
// nothing appears yet in the console


request.onload = function () {
  // Begin accessing JSON data here
  // not sure what kind of JS function this is
  // parsing the json response. It's interesting how it knows what response is, like in the rails app. 
  
  var data = JSON.parse(this.response);

  console.log(request.status)

  if (request.status >= 200 && request.status < 400){
    data.forEach(movie => {
      
      // create a title for each card
      var title = document.createElement('h1');
      title.textContent = movie.title;
      
      // create a div with a card class
      var card = document.createElement('div')
      card.setAttribute('class', 'card')

      var content = document.createElement('p')
      movie.description = movie.description.substring(0, 300);
      content.textContent = `${movie.description}...`; 

      container.appendChild(card)
      card.appendChild(title)
      card.appendChild(content)

      console.log(movie.title);
    });
  } else { 
    console.log('error'); 
  }
}

request.send();
// obviously invoke the request

