function pbjMaker(breadType, isItChrunchy, jellyFruit) {
    let peanutButter;
    if (isItChrunchy) {
        peanutButter = `crunchy`;
    } else {
        peanutButter = `smooth`;
    }
    console.log(`Your pb&j is made on ${breadType} bread with ${peanutButter} and ${jellyFruit} jelly!`);
}

debugger;
pbjMaker(`white`, true, `strawberry`);