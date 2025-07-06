const words = [
"Apfel","Auto","Ball","Banane","Bett","Buch","Bus","Computer","Dose","Ei","Eimer","Elefant","Ente","Erde","Fahrrad","Fernseher","Fenster","Feuer","Fisch","Flasche",
"Flugzeug","Foto","Gabel","Garten","Gebäude","Geld","Glas","Hahn","Handy","Haus","Hemd","Hose","Hund","Jacke","Junge","Kamera","Kaninchen","Katze","Kerze","Kette",
"Kind","Kiste","Kleid","Koffer","Kuchen","Kuh","Lampe","Löffel","Löwe","Mädchen","Maler","Maus","Meer","Milch","Müll","Mütze","Nase","Nuss","Ofen","Oma","Opa",
"Orangen","Paket","Papier","Pferd","Pilz","Pinguin","Pizza","Pullover","Radio","Rakete","Regal","Regen","Reis","Rucksack","Salat","Salz","Sauerstoff","Schaf",
"Schere","Schirm","Schlange","Schlüssel","Schnee","Schrank","Schuh","Schule","Schwamm","Seife","Sessel","Sonne","Spaghetti","Spiel","Spielplatz","Stern","Stift",
"Stuhl","Tasche","Tasse","Teller","Tiger","Tisch","Toaster","Tomate","Topf","Traktor","Treppen","Trommel","Tuch","Tür","Uhr","Vase","Wald","Wasser","Wolke",
"Wurst","Zahnbürste","Zahn","Zebra","Zelt","Zitrone","Zug","Zwiebel","Bäckerei","Tankstelle","Kino","Apotheke","Fluss","Berg","Straße","Laterne","Brief","Zeitung",
"Schloss","Brücke","Kirche","Markt","Büro","Treppe","Wiese","Kreide","Schreibtisch","Lehrer","Schüler","Fenstersims","Mülltonne","Tafel","Klassenzimmer","Schere",
"Kleber","Papierkorb","Radiergummi","Lineal","Malkasten","Heft","Ordner","Kugelschreiber","Pinsel","Tintenpatrone","Drucker","Laptop","Mikroskop","Schulranzen",
"Turnbeutel","Sporthalle","Küche","Esszimmer","Wohnzimmer","Badewanne","Dusche","Waschmaschine","Toilette","Spiegel","Kissen","Decke","Teller","Besteck",
"Streichholz","Kerzenständer","Ventilator","Heizung","Kamin","Fernbedienung","Fernsehsender","Steckdose","Kabel","Batterie","Tastatur","Mauspad","Joystick",
"Smartphone","Tablet","Bildschirm","Webcam","Lautsprecher","Kopfhörer","Router","Internet","Download","Upload","Browser","E-Mail","Suchmaschine","Online-Shop",
"Spielkonsole","Controller","Joystick","Mikrofon","Zoom","Team","Hausaufgaben","Ferien","Zeugnis","Noten","Pause","Tageslicht","Sturm","Wolkenbruch","Gewitter",
"Schneesturm","Eiszapfen","Blitz","Tornado","Regenbogen","Hagel","Nebel","Sonnenaufgang","Sonnenuntergang","Mond","Sterne","Weltall","Raketenbasis","Raumstation",
"Astronaut","Satellit","Teleskop","Sternschnuppe","Meteor","Komet","Galaxie","Mars","Venus","Jupiter","Saturn","Uranus","Neptun","Merkur","Erde","Sonnensystem",
"Universum","Gravitation","Lichtjahr","Weltraumteleskop","Raumanzug","Raumschiff","Raumfähre","Andromedagalaxie","Raumkapsel","Countdown","Startbahn","Zündstufe",
"Kommandozentrale","Astronomie","Schwerkraft","Ozon","Polarkreis","Wüste","Ozean","Insel","Gletscher","Höhle","Waldweg","Bucht","Klippe","Wolkenkratzer",
"Stadion","Museum","Zoo","Aquarium","Flughafen","Bahnhof","Haltestelle","Supermarkt","Parkplatz","Fußgängerzone","Rolltreppe","Ampel","Zebrastreifen","Bushaltestelle",
"Bücherei","Turnhalle","Sportplatz","Schwimmbad","Spielplatz","Klettergerüst","Rutsche","Schaukel","Sandkasten","Karussell","Wippe","Springseil","Ballspiel",
"Fußball","Handball","Basketball","Volleyball","Tennis","Badminton","Hockey","Eishockey","Skifahren","Snowboard","Schlitten","Schneeball","Schneemann","Iglu",
"Schlittschuh","Schneeanzug","Mütze","Handschuhe","Schal","Winterjacke","Thermohose","Schneestiefel","Skihelm","Skibrille","Lawine","Pistenraupe","Sessellift",
"Gondel","Skihütte","Piste","Abfahrt","Langlauf","Eisbahn","Eiswürfel","Eiscreme","Eisdiele","Eissorte","Waffel","Becher","Löffel","Topping","Streusel","Sahne",
"Sirup","Fruchtsoße","Schokoladensoße","Vanille","Schoko","Erdbeere","Karamell","Zitrone","Melone","Mango","Himbeere","Blaubeere","Kokos","Nuss","Keksstückchen"
];
  
let players = 0;
let currentPlayer = 1;
let roles = [];
let chosenWord = "";
let impostorCount = 1;

const setup = document.getElementById("setup");
const playerButtons = document.getElementById("player-buttons");
const game = document.getElementById("game");
const playerLabel = document.getElementById("player-label");
const showButton = document.getElementById("show-button");
const wordBox = document.getElementById("word-box");
const nextButton = document.getElementById("next-button");
const revealSection = document.getElementById("reveal");
const revealButton = document.getElementById("reveal-button");
const impostorList = document.getElementById("impostor-list");
const restartButton = document.getElementById("restart-button");

// Buttons für Spieleranzahl + Info wie viele Impostors
for (let i = 4; i <= 10; i++) {
  const btn = document.createElement("button");
  let info = "";

  if (i === 6) info = " – 1 oder 2 Impostors möglich";
  else if (i === 9) info = " – 2 oder 3 Impostors möglich";
  else if (i <= 6) info = " – 1 Impostor";
  else if (i <= 9) info = " – 2 Impostors";
  else info = " – 3 Impostors";

  btn.textContent = `${i} Spieler${info}`;
  btn.onclick = () => {
    if (i === 6) {
      chooseImpostorCount(i, [1, 2]);
    } else if (i === 9) {
      chooseImpostorCount(i, [2, 3]);
    } else {
      impostorCount = i <= 6 ? 1 : i <= 9 ? 2 : 3;
      startGame(i);
    }
  };
  playerButtons.appendChild(btn);
}

// Auswahl bei 6 oder 9 Spielern
function chooseImpostorCount(playerNum, options) {
  playerButtons.innerHTML = "";
  const msg = document.createElement("p");
  msg.textContent = `Wie viele Impostors bei ${playerNum} Spielern?`;
  playerButtons.appendChild(msg);

  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = `${opt} Impostor${opt > 1 ? "s" : ""}`;
    btn.onclick = () => {
      impostorCount = opt;
      startGame(playerNum);
    };
    playerButtons.appendChild(btn);
  });
}

function startGame(playerCount) {
  players = playerCount;
  currentPlayer = 1;
  chosenWord = words[Math.floor(Math.random() * words.length)];

  roles = Array(players).fill(chosenWord);
  let impostorSet = new Set();
  while (impostorSet.size < impostorCount) {
    impostorSet.add(Math.floor(Math.random() * players));
  }
  impostorSet.forEach(i => roles[i] = "Impostor");

  setup.classList.add("hidden");
  game.classList.remove("hidden");
  updatePlayerLabel();
}

function updatePlayerLabel() {
  playerLabel.textContent = `Player ${currentPlayer}`;
  wordBox.classList.add("hidden");
  showButton.classList.remove("hidden");
  nextButton.classList.add("hidden");
}

showButton.onclick = () => {
  wordBox.textContent = roles[currentPlayer - 1];
  wordBox.classList.remove("hidden");
  showButton.classList.add("hidden");
  nextButton.classList.remove("hidden");
};

nextButton.onclick = () => {
  currentPlayer++;
  if (currentPlayer > players) {
    game.classList.add("hidden");
    revealSection.classList.remove("hidden");
  } else {
    updatePlayerLabel();
  }
};

revealButton.onclick = () => {
  const impostors = roles
    .map((role, i) => role === "Impostor" ? `Player ${i + 1}` : null)
    .filter(Boolean);
  impostorList.innerHTML = `<p><strong>Impostor:</strong> ${impostors.join(", ")}</p>`;
  impostorList.classList.remove("hidden");
};

restartButton.onclick = () => {
  location.reload();
};
