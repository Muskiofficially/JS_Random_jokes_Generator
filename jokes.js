let generateRandomJoke = () =>{
    let randomJoke = Math.floor(Math.random()*11)
    let jokes = [`"A pair of cows were talking in the field. One says, 'Have you heard about the mad cow disease that's going around?'
    "Yeah," the other cow says. "Makes me glad I'm a penguin." `,
    
    `Why don't scientists trust atoms? Because they make up everything!`,

    `What's a vampire's favorite fruit? A blood orange.`,
    
    `I used to play piano by ear, but now I use my hands and it sounds much better.`,
    
    `Why did the scarecrow win an award? Because he was outstanding in his field!`,
    
    `Parallel lines have so much in common. It's a shame they'll never meet.`,
    
    `Why don't skeletons fight each other? They don't have the guts.`,
    
    `I told my wife she was drawing her eyebrows too high. She looked surprised.`,
    
    `How does a penguin build its house? Igloos it together!`,
    
    `Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!`,
    
    `Why don't oysters donate to charity? Because they are shellfish.`]
    var randomJokes = jokes[randomJoke]
    return randomJokes
}
let generateJoke = document.getElementById("random_jokes")
generateJoke.innerHTML = generateRandomJoke();