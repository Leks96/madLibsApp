"use script"

//Total number of questions to be asked
let questionTotal = 14;

//question counter to know which question we are on
let questionCounter = 0;

//Test Logic
let questionArray = [
    "Please enter your Tribe","Please enter your Geopolitical zone",
    "Please enter your country name",
    `Please enter your gender (boy or girl)`,
    `Please enter your name`,
    `Please enter a verb (third person singular)`,
    `Please enter any wild animal you know`,
    `Please enter another wild animal`,
    `Please enter a livestock (cattle, chicken etc..)`,
    `Please enter another livestock`,
    `Please enter another livestock`,
    `Please enter another verb (third person singular)`,
    `Please enter a personal pronoun (he or her)`,
    `Please enter another verb (feed, cater etc..)`,
    `Please enter a pronoun (he or she)`,
]

//Takes the user response
let userInputs = [];
for(let i = questionTotal; i >= 0; i--){
    //console.log(i);
    console.log(questionArray[questionCounter]+ `... (${questionTotal} questions left)`);

    //adds users response to the user inputs array
    userInputs.push(
        prompt(questionArray[questionCounter]+ `... (${questionTotal} questions left)`)
        );
        console.log(userInputs);
        questionCounter ++;
        questionTotal --;
}


console.log(
    `In the land of the ${userInputs[0]}, in ${userInputs[1]} ${userInputs[2]},
    there is a ${userInputs[3]} named ${userInputs[4]}.
    ${userInputs[4]} ${userInputs[5]} near a large national park, where
    there are golden ${userInputs[6]}, and big grey ${userInputs[7]}.
    ${userInputs[4]}'s family keep ${userInputs[8]}, ${userInputs[9]} and ${userInputs[10]} and
    depend on farming the land for food for their animals. 
    ${userInputs[4]} ${userInputs[11]} to school 
    and helps ${userInputs[12]} family ${userInputs[13]} for the animals when ${userInputs[14]} is home`
)





/*`In the land of the Maasai, in Southwest Kenya,
there is a girl named Rebecca.
Rebecca lives near a large national park, where
there are golden lions, and big grey elephants.
Rebecca's family keep cattle, sheep and goats and
depend on farming the land for food for their
animals. Rebecca goes to school and helps her
family care for the animals when she is home.`*/