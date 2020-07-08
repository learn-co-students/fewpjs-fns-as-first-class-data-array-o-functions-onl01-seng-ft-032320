function wakeDog(dogName, dogBreed) {
    let wake = `Wake ${dogName} the ${dogBreed}`
    console.log(wake);
    return wake;

}
function leashDog(dogName, dogBreed) {
    let wake = `Leash ${dogName} the ${dogBreed}`
    console.log(wake);
    return wake;
}

function walkToPark(dogName, dogBreed) {
    let wake = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(wake);
    return wake;
}

function throwFrisbee(dogName, dogBreed) {
    let wake = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(wake);
    return wake;
}

function walkHome(dogName, dogBreed) {
    let wake = `Walk home with ${dogName} the ${dogBreed}`
    console.log(wake);
    return wake;
}

function unleashDog(dogName, dogBreed) {
    let wake = `Unleash ${dogName} the ${dogBreed}`
    console.log(wake);
    return wake;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
    let routine_values = []
    for (let i = 0; i < routine.length; i++) {
        routine_values.push(routine[i](dogName, dogBreed));
    }
    return routine_values;
}