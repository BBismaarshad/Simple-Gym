import inquirer from "inquirer";
let wlc = "\n**********WELCOME ATHLETIC ZONE**********\n";
console.log(wlc);
const gym = await inquirer.prompt([
    {
        type: "list",
        name: "Exercise",
        message: "please select your favorite exercise? ",
        choices: [
            "Bench press",
            "Pull-ups",
            "Hammer curls",
            "Front raises",
            "Lunges",
        ],
    },
]);
console.log(` \n You have done this exercise: ${gym.Exercise} \n`);
const trainer = await inquirer.prompt([
    {
        type: "list",
        name: "trainerName",
        message: "Which trainer do you want to take coaching from?",
        choices: [
            "Abdul Wahab Khan",
            "Fahad Ahsan",
            "Imran Khan Niazi",
            "Ail Hassan Butt",
        ],
    },
]);
console.log(` \n You have selected this trainer  ${trainer.trainerName}`);
console.log(` \n check its timing also below. \n`);
const trainingTimings = await inquirer.prompt([
    {
        type: "list",
        name: "timings",
        message: "Please select your comfortable timing.",
        choices: [
            " Morning 7:00 AM ",
            "Morning 10:00 AM",
            "Evening 6:00 PM",
            "Night 10:00 PM",
        ],
    },
]);
console.log(`\n You have selected this thiming ${trainingTimings.timings} \n`);
console.log(" \n Thank you very much for joining us..\n");
