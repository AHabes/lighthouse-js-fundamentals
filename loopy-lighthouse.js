for (let x = 100; x <= 200; x++) {

    if (x % 3 === 0 && x % 4 === 0) {
        console.log("LoopyLighthouse")
    } else if (x % 3 === 0) {
        console.log("Loopy")
    } else if (x % 4 === 0) {
        console.log("Lighthouse")
    } else {
        console.log(x)
    }
}

function laugh(num) {
    result = ""

    for (let i = 0; i < num; i++) {
        result += "ha"
    }
    return result
}

console.log(laugh(3));

var a = 1;

function x() {
    var b = 2;

    function y() {
        var c = 3;

        function z() {
            var d = 4;
        }

        z();
    }

    y();
}

x();

function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}


function buildTriangle(i) {
    let star = ""
    for (let i = 0; i < 10; i++) {
        star += makeLine(i)
    }
    return star
}

console.log(buildTriangle(10));

function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here. Call the emotions() function with two arguments
emotions("happy", function laugh(num){
    let res = ""
    for(let i=0;i<num;i++)
    {
        res +='ha'
    }
    return res+'!'
})