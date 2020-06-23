function wakeDog(dogName, dogBreed) {
    let wake = (`Wake ${dogName} the ${dogBreed}`)
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return wake
  };

  function leashDog(dogName, dogBreed) {
    let leash = (`Leash ${dogName} the ${dogBreed}`)
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return leash
  };

  function walkToPark(dogName, dogBreed) {
    let walk = (`Walk to the park with ${dogName} the ${dogBreed}`)
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return walk
  };

  function throwFrisbee(dogName, dogBreed) {
    let thfris = (`Throw the frisbee for ${dogName} the ${dogBreed}`)
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return thfris
  };

  function walkHome(dogName, dogBreed) {
    let whome = (`Walk home with ${dogName} the ${dogBreed}`)
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return whome
  };

  function unleashDog(dogName, dogBreed) {
    let unleash = (`Unleash ${dogName} the ${dogBreed}`)
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return unleash
  }

  let routine = [ wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

  function exerciseDog(dogName, dogBreed){
      let array = []
      for (let i =0; i < routine.length; i++){
        array.push(routine[i](dogName, dogBreed));
      }
      return array;
  }