import inquirer from "inquirer";
async function operations() {
    const ans = await inquirer.prompt([
        { type: "string[]",
            name: "operation",
            massage: "Select operation",
            choice: ["+", "-", "*", "/", "^", "%"],
        },
    ]);
    const calculaterinput = async () => {
        const input = await inquirer.prompt([{
                type: "number",
                name: "num1",
                massage: "Please enter"
            },
            { type: "number",
                name: "num2",
                massage: "Please enter", }
        ]);
        switch (ans.operation) {
            case "+":
                console.log(input.num1 + input.num2);
                break;
            case "-":
                console.log(input.num1 - input.num2);
                break;
            case "*":
                console.log(input.num1 * input.num2);
                break;
            case "/":
                console.log(input.num1 / input.num2);
                break;
            case "^":
                console.log(Math.pow(input.num1, input.num2));
                break;
            case "%":
                console.log(input.num1 % input.num2);
                break;
        }
    };
    calculaterinput();
}
operations();
