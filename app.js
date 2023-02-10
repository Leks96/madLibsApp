"use script"

`In the land of the Maasai, in Southwest Kenya,
there is a girl named Rebecca.
Rebecca lives near a large national park, where
there are golden lions, and big grey elephants.
Rebecca's family keep cattle, sheep and goats and
depend on farming the land for food for their
animals. Rebecca goes to school and helps her
family care for the animals when she is home.`

let originalStory= `In the land of the ${userInputs[0]}, in ${userInputs[1]} ${userInputs[2]},
there is a ${userInputs[3]} named ${userInputs[4]}.
${userInputs[4]} lives near a ${userInputs[5]}, where
there are ${userInputs[6]}, and ${userInputs[7]}.
${userInputs[4]}'s family keep ${userInputs[14]}, ${userInputs[15]} and ${userInputs[16]} and
depend on farming the land for food for their
animals. ${userInputs[4]} ${userInputs[8]} to ${userInputs[9]} and ${userInputs[10]} ${userInputs[11]}
family ${userInputs[12]} for the ${userInputs[13]} when ${userInputs[11]} is home.`;

let userInputs=[];

let numberOfQuestions= 17;
let questionCounter= 0;

let questionArray= [
    "Enter your Tribe",
    "Your Geopolitical zone",
    "Your Country",
    "Your gender (boy or girl)",
    "Your name",
    "Your locality",
    "Amazing sites near your locality",
    "Other amazing sites near your locality",
    "Enter a verb",
    "Enter a noun",
    "Enter another Verb",
    "Enter a pronoun (his or her)",
    "Enter another noun (collective noun)",
    "Enter another noun (collective noun)",
    "Enter any animal",
    "Enter another animal",
    "Enter another animal"
]

for(let i= numberOfQuestions; i >=0; i--){
    console.log(questionArray[questionCounter]);
   userInputs.push(prompt=(questionArry[questionCounter]));
   console.log(userInputs);
   questionCounter++;
   numberOfQuestions--;
}

console.log(originalStory);
document.write(originalStory);
