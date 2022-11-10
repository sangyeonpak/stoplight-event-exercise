//Shameka and Sang

          //////GLOBAL CONSTS\\\\\\\\
const stopButton = document.getElementById('stopButton');
const slowButton = document.getElementById('slowButton');
const goButton = document.getElementById('goButton');

const stopLight = document.getElementById('stopLight');
const slowLight = document.getElementById('slowLight');
const goLight = document.getElementById('goLight');

          //////EVENT LISTENERS\\\\\\\

//Add DOM event listeners and handlers to toggle the on/off state of three bulbs.
//Add **one** DOM event listener and **one** handler to log the state of each bulb.
stopButton.addEventListener('click', function(){
  stopLight.classList.toggle('stop')
  if (stopLight.classList.contains('stop') === true){
    console.log(`${stopButton.textContent} bulb on`)
  } else {
    console.log(`${stopButton.textContent} bulb off`)
  }
});
slowButton.addEventListener('click', function(){
  slowLight.classList.toggle('slow')
  if (slowLight.classList.contains('slow') === true){
    console.log(`${slowButton.textContent} bulb on`)
  } else {
    console.log(`${slowButton.textContent} bulb off`)
  }
});
goButton.addEventListener('click', function(){
  goLight.classList.toggle('go')
  if (goLight.classList.contains('go') === true){
    console.log(`${goButton.textContent} bulb on`)
  } else {
    console.log(`${goButton.textContent} bulb off`)
  }
});


//When a user's mouse enters a button, log `"Entered <textContent> button"` to the console.
//When a user's mouse leaves a button, log `"Left <textContent> button"` to the console.
stopButton.addEventListener('mouseenter', function(){
  console.log(`Entered ${stopButton.textContent} button`)
})
stopButton.addEventListener('mouseleave', function(){
  console.log(`Left ${stopButton.textContent} button`)
})

slowButton.addEventListener('mouseenter', function(){
  console.log(`Entered ${slowButton.textContent} button`)
})
slowButton.addEventListener('mouseleave', function(){
  console.log(`Left ${slowButton.textContent} button`)
})

goButton.addEventListener('mouseenter', function(){
  console.log(`Entered ${goButton.textContent} button`)
})
goButton.addEventListener('mouseleave', function(){
  console.log(`Left ${goButton.textContent} button`)
})