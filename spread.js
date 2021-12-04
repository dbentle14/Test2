// Spread Operator

function addNames(){
    const names=["Person1", "Person2", "Person3"];
    const morenames=["Person4", ...names]
    console.log(morenames);
}
addNames();