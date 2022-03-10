fetch('https://icanhazdadjoke.com/slack')
      .then(data => data.json())
      .then(jokeData =>{
        const jokeText = jokeData.attachments[2].text;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = jokeText;
      })
