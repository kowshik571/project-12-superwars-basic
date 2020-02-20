const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];
let detailedPlayers = [];

// initialize players with image and strength
const initPlayers = (players) => {

    for (var i = 0; i < PLAYERS.length; i++) {
        var player = {
            name: PLAYERS[i],
            strength: getRandomStrength(),
            image: "./images/super-" + (i + 1) + ".png",
            type: "hero"
        }
        detailedPlayers.push(player);
        console.log(detailedPlayers);
    }
    // Create players using for loop
    // Type your code here

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    var x = Math.random();
    var y = x * 100;
    var z = Math.ceil(y);
    console.log(z);
    return z;

    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
}


const buildPlayers = (players, type) => {
        // let fragment = '';
        //initPlayers();
        var fragment = '';
        for (var i = 0; i < detailedPlayers.length; i++) {
            fragment += `
            <div class="player">
            <img src="${detailedPlayers[i].image}">
            <h4> ${detailedPlayers[i].name}</h4>
            <h1>${detailedPlayers[i].strength}</h1>
            </div>
             `;
        }



        // Loop through players and accumulate HTML template
        // depending of type of player(hero|villain)
        // Type your code here
        return fragment;
    }
    // Display players in HTML
const viewPlayers = (players) => {


    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}