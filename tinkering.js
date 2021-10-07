/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `education`, and `salary`
 * - Your code should include a switch statement
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


/*
*no high school diploma earned an average of $25,636/year,
a high school diploma earned an average of $35,256/year,
an Associate's degree earned an average of $41,496/year,
a Bachelor's degree earned an average of $59,124/year,
a Master's degree earned an average of $69,732/year,
a Professional degree earned an average of $89,960/year,
and a Doctoral degree earned an average of $84,396/year.

* */

for (let i = 0; i < 10; i++) {
    console.log("Count" + (10 - i) + " !")
}
var education = 'no high school diploma';

// set the value of this based on a person's education
var salary = 0;

// your code goes here
switch (education) {
    case 'no high school diploma':
        salary = 25636
        break

    case 'Associate\'s degree':
        salary = 41496
        break

    case 'Bachelor\'s degree':
        salary = 59124
        break

    case 'Master\'s degree':
        salary = 69732
        break

    case 'Professional degree':
        salary = 89960
        break
    case 'Doctoral degree':
        salary = 84396
        break
}

console.log('In 2015, a person with ' + education + ' earned an average of $' + salary.toLocaleString("en-US") + '/year.')

/*
const book = (props) => {
    let [studentNumber, setStudentNumber] = useState(0); // useState hook to set state of a variable inside the component

    const addStudent = () => {
        setStudentNumber(++studentNumber)
    }

    return (
        <div className="main">
            <h2>{props.name}</h2>
            <h4>{props.rollNumber}</h4>
        </div>
    )

}

class book extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                <h2>{this.props.name}</h2>
                <h4>{this.props.rollNumber}</h4>
            </div>
        )

    }
}
*/

/*
 * Programming Quiz: JuliaJames (4-1)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `x` with a starting value of `1`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should use a conditional statement
 * - Your code should increment `x` by `1` each time the loop executes
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

var x = 1;

while (x <= 20) {

    if (x % 3 === 0)
        console.log("Julia")

    else if (x % 5 === 0)
        console.log("James")

    else if (x % 3 === 0 && x % 5 === 0)
        console.log("JuliaJames")
    else
        console.log(x)
    x++
}

var num = 9;
while (num > 0) {
    console.log(num + ' bottles of juice on the wall! ' + num + ' bottles of juice! Take one down, ' +
        'pass it around... ' + (num - 1) + ' bottles of juice on the wall!'
    );
    num--;
}
