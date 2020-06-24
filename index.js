
let wakeDog = function(dogName, dogBreed) {
  return `Wake ${dogName} the ${dogBreed}`;
}

let leashDog = function(dogName, dogBreed) {
  return `Leash ${dogName} the ${dogBreed}`;
}

let walkToPark = function(dogName, dogBreed) {
  return `Walk to the park with ${dogName} the ${dogBreed}`;
}

let throwFrisbee = function(dogName, dogBreed) {
  return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}

let walkHome = function(dogName, dogBreed) {
  return `Walk home with ${dogName} the ${dogBreed}`;
}

let unleashDog = function(dogName, dogBreed) {
  return `Unleash ${dogName} the ${dogBreed}`;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dog, breed) {
  return routine.map(fn => fn(dog, breed))
}