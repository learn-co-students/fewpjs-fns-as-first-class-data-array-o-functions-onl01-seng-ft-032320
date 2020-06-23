function wakeDog(a, b) {
    let string = `Wake ${a} the ${b}`
    console.log(string);
    return string;
}

function leashDog(a, b) {
    let string = `Leash ${a} the ${b}`
    console.log(string);
    return string;
}

function walkToPark(a, b) {
    let string = `Walk to the park with ${a} the ${b}`
    console.log(string);
    return string;
}

function throwFrisbee(a, b) {
    let string = `Throw the frisbee for ${a} the ${b}`
    console.log(string);
    return string;
}

function walkHome(a, b) {
    let string = `Walk home with ${a} the ${b}`
    console.log(string);
    return string;
}

function unleashDog(a, b) {
    let string = `Unleash ${a} the ${b}`
    console.log(string);
    return string;
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(a,b) {
    let arr = []
    for(let i = 0; i < routine.length; i++) {
        arr.push(routine[i](a,b));
    }
    return arr;
}