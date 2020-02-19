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


// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    for (var i = 0; i < PLAYERS.length; i++) {
        var player = {
            name: PLAYERS[i],
            strength: 100,
            image: "images/hero-" + (i + 1) + ".png",
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
        let fragment = '';
        //initPlayers();

        /* for (var i = 0; i < PLAYERS.length; i++) {
            fragment + = ' <\\
            div class = "card" > < img src = "'+detailedPlayers[i].image+'"\\
            alt = " spiderman" > < h4 > '+detailedPlayers[i].name+' < /h4> <\\
            h1 > 12 < /h1> </div > ';
        }



        // Loop through players and accumulate HTML template
        // depending of type of player(hero|villain)
        // Type your code here
*/
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