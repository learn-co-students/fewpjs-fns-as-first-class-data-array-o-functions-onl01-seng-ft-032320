function wakeDog(dogName, dogBreed) {
    let returnString = `Wake ${dogName} the ${dogBreed}`;
    console.log(returnString);
    return returnString;
}

function leashDog(dogName, dogBreed) {
    let returnString = `Leash ${dogName} the ${dogBreed}`;
    console.log(returnString);
    return returnString;
}

function walkToPark(dogName, dogBreed) {
    let returnString = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(returnString);
    return returnString;
}

function throwFrisbee(dogName, dogBreed) {
    let returnString = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(returnString);
    return returnString;
}

function walkHome(dogName, dogBreed) {
    let returnString = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(returnString);
    return returnString;
}

function unleashDog(dogName, dogBreed) {
    let returnString = `Unleash ${dogName} the ${dogBreed}`;
    console.log(returnString);
    return returnString;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    let results = []
    for (var i = 0; i < routine.length; i++) {
        results[i] = routine[i].call(this, dogName, dogBreed);
    }

    return results;
}
