const words = [
  "Apfel", "Haus", "Katze", "Auto", "Buch", "Tisch", "Stuhl", "Flugzeug", "Schule", "Lehrer",
  "Zug", "Baum", "Blume", "Hund", "Kuchen", "Brille", "Schlüssel", "Fenster", "Tür", "Bleistift",
  "Tasche", "Ball", "Lampe", "Bett", "Schrank", "Gabel", "Löffel", "Messer", "Teller", "Topf",
  "Pfanne", "Fernseher", "Computer", "Handy", "Tablet", "Kamera", "Uhr", "Sofa", "Teppich", "Bild",
  "Poster", "Spiegel", "Regal", "Spiel", "Würfel", "Karte", "Pferd", "Kuh", "Schwein", "Huhn",
  "Ente", "Gans", "Fisch", "Hai", "Delfin", "Wal", "Pinguin", "Eisbär", "Löwe", "Tiger",
  "Affe", "Elefant", "Zebra", "Giraffe", "Nashorn", "Krokodil", "Schlange", "Eule", "Adler", "Spatz",
  "Maus", "Ratte", "Hamster", "Kaninchen", "Meerschweinchen", "Igel", "Fuchs", "Bär", "Wolf", "Reh",
  "Hirsch", "Biene", "Wespe", "Ameise", "Käfer", "Schmetterling", "Mücke", "Spinne", "Fliege", "Libelle",
  "Gras", "Blatt", "Zweig", "Ast", "Blüte", "Pilz", "Stein", "Sand", "Erde", "Wasser",
  "Feuer", "Luft", "Wind", "Wolke", "Regen", "Schnee", "Hagel", "Sturm", "Donner", "Blitz",
  "Berg", "Tal", "Wald", "Wiese", "Meer", "See", "Fluss", "Insel", "Stadt", "Dorf",
  "Straße", "Weg", "Brücke", "Tunnel", "Ampel", "Auto", "Bus", "Bahn", "Fahrrad", "Roller",
  "Skateboard", "Schlitten", "Boot", "Schiff", "Rakete", "Raumstation", "Mond", "Sonne", "Stern", "Planet",
  "Welt", "Land", "Insel", "Kontinent", "Karte", "Globus", "Reise", "Koffer", "Pass", "Zelt",
  "Schlafsack", "Rucksack", "Wanderschuhe", "Kompass", "Fernglas", "Stift", "Radiergummi", "Lineal", "Heft", "Block",
  "Ordner", "Schere", "Kleber", "Pinsel", "Farbe", "Tafel", "Kreide", "Beamer", "Leinwand", "Projektor",
  "Lehrer", "Schüler", "Klasse", "Pause", "Klingel", "Test", "Arbeit", "Zeugnis", "Note", "Schulranzen",
  "Turnbeutel", "Sport", "Ball", "Tor", "Torwart", "Spieler", "Mannschaft", "Trainer", "Schiedsrichter", "Pfeife",
  "Fußball", "Basketball", "Volleyball", "Tennis", "Tischtennis", "Badminton", "Schläger", "Netz", "Spielfeld", "Tribüne",
  "Stadion", "Fans", "Trikot", "Hose", "Schuhe", "Stutzen", "Handschuh", "Mütze", "Hemd", "Jacke",
  "Mantel", "Schal", "Hut", "Kappe", "Brille", "Ohrring", "Kette", "Ring", "Armband", "Uhr",
  "Zahnbürste", "Zahnpasta", "Seife", "Shampoo", "Handtuch", "Waschbecken", "Spiegel", "Dusche", "Badewanne", "Toilette",
  "Klo", "Besen", "Wischer", "Staubsauger", "Waschmaschine", "Trockner", "Müll", "Papier", "Plastik", "Glas",
  "Dose", "Flasche", "Becher", "Tüte", "Karton", "Kiste", "Schachtel", "Paket", "Brief", "Postkarte",
  "Briefmarke", "Umschlag", "Stempel", "Adresse", "Name", "Telefon", "Email", "Nachricht", "Internet", "Webseite",
  "Programm", "App", "Spiel", "Level", "Punkt", "Highscore", "Avatar", "Charakter", "Mission", "Story",
  "Kamera", "Film", "Serie", "Schauspieler", "Regisseur", "Kino", "Popcorn", "Getränk", "Cola", "Wasser",
  "Saft", "Limo", "Tee", "Kaffee", "Milch", "Zucker", "Salz", "Pfeffer", "Gewürz", "Ketchup",
  "Senf", "Mayonnaise", "Butter", "Margarine", "Öl", "Essig", "Brot", "Brötchen", "Croissant", "Toast",
  "Käse", "Wurst", "Schinken", "Ei", "Joghurt", "Quark", "Pudding", "Eis", "Schokolade", "Bonbon",
  "Keks", "Kuchen", "Torte", "Obst", "Gemüse", "Apfel", "Banane", "Birne", "Traube", "Orange",
  "Mandarine", "Kiwi", "Ananas", "Melone", "Wassermelone", "Erdbeere", "Himbeere", "Brombeere", "Kirsche", "Pflaume",
  "Karotte", "Gurke", "Tomate", "Paprika", "Zucchini", "Aubergine", "Kartoffel", "Zwiebel", "Knoblauch", "Salat",
  "Spinat", "Brokkoli", "Blumenkohl", "Erbse", "Bohne", "Mais", "Reis", "Nudel", "Spaghetti", "Pizza",
  "Burger", "Pommes", "Suppe", "Eintopf", "Schnitzel", "Bratwurst", "Steak", "Hähnchen", "Fischstäbchen", "Lasagne",
  "Pfannkuchen", "Waffel", "Crepe", "Marmelade", "Honig", "Nutella", "Cornflakes", "Müsli", "Haferflocken", "Joghurtbecher",
  "Kaugummi", "Lutscher", "Keksdose", "Schokoriegel", "Gummibärchen", "Chips", "Popcorn", "Nüsse", "Mandeln", "Rosinen"
];

let players = 0;
let currentPlayer = 1;
let roles = [];
let chosenWord = "";
let impostorCount = 1;
let useNames = false;
let playerNames = [];

const setup = document.getElementById("setup");
const nameChoice = document.getElementById("name-choice");
const nameForm = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");
const nameSubmit = document.getElementById("name-submit");
const game = document.getElementById("game");
const playerLabel = document.getElementById("player-label");
const wordBox = document.getElementById("word-box");
const showButton = document.getElementById("show-button");
const hideButton = document.getElementById("hide-button");
const nextButton = document.getElementById("next-button");
const revealSection = document.getElementById("reveal");
const revealButton = document.getElementById("reveal-button");
const impostorList = document.getElementById("impostor-list");
const restartButton = document.getElementById("restart-button");
const restartSameButton = document.getElementById("restart-same-button");

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
      players = i;
      askNameChoice();
    }
  };
  document.getElementById("player-buttons").appendChild(btn);
}

function chooseImpostorCount(playerNum, options) {
  document.getElementById("player-buttons").innerHTML = "";
  const msg = document.createElement("p");
  msg.textContent = `Wie viele Impostors bei ${playerNum} Spielern?`;
  document.getElementById("player-buttons").appendChild(msg);

  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = `${opt} Impostor${opt > 1 ? "s" : ""}`;
    btn.onclick = () => {
      impostorCount = opt;
      players = playerNum;
      askNameChoice();
    };
    document.getElementById("player-buttons").appendChild(btn);
  });
}

function askNameChoice() {
  setup.classList.add("hidden");
  nameChoice.classList.remove("hidden");
}

function startNameInput() {
  nameChoice.classList.add("hidden");
  nameForm.classList.remove("hidden");
  currentPlayer = 1;
  playerNames = [];
  updateNamePrompt();
}

function updateNamePrompt() {
  document.getElementById("name-prompt").textContent = `Name für Spieler ${currentPlayer}`;
  nameInput.value = "";
}

nameSubmit.onclick = (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  if (name !== "") {
    playerNames.push(name);
    currentPlayer++;
    if (playerNames.length >= players) {
      nameForm.classList.add("hidden");
      startGame();
    } else {
      updateNamePrompt();
    }
  }
};

function skipNames() {
  useNames = false;
  playerNames = [];
  for (let i = 1; i <= players; i++) {
    playerNames.push(`Player ${i}`);
  }
  nameChoice.classList.add("hidden");
  startGame();
}

function startGame() {
  currentPlayer = 1;
  chosenWord = words[Math.floor(Math.random() * words.length)];

  roles = Array(players).fill(chosenWord);
  let impostorSet = new Set();
  while (impostorSet.size < impostorCount) {
    impostorSet.add(Math.floor(Math.random() * players));
  }
  impostorSet.forEach(i => roles[i] = "Impostor");

  game.classList.remove("hidden");
  revealSection.classList.add("hidden");
  impostorList.classList.add("hidden");
  updatePlayerLabel();
}

function updatePlayerLabel() {
  playerLabel.textContent = playerNames[currentPlayer - 1];
  wordBox.classList.add("hidden");
  wordBox.textContent = "";
  showButton.classList.remove("hidden");
  hideButton.classList.add("hidden");
  nextButton.classList.add("hidden");
}

showButton.onclick = () => {
  const role = roles[currentPlayer - 1];
  wordBox.textContent = role === "Impostor" ? "Impostor" : chosenWord;
  wordBox.classList.remove("hidden");
  showButton.classList.add("hidden");
  hideButton.classList.remove("hidden");
  nextButton.classList.remove("hidden");
};

hideButton.onclick = () => {
  wordBox.classList.add("hidden");
  showButton.classList.remove("hidden");
  hideButton.classList.add("hidden");
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
    .map((role, i) => role === "Impostor" ? playerNames[i] : null)
    .filter(Boolean);
  impostorList.innerHTML = `<p><strong>Impostor:</strong> ${impostors.join(", ")}</p>`;
  impostorList.classList.remove("hidden");
};

restartButton.onclick = () => {
  location.reload();
};

restartSameButton.onclick = () => {
  currentPlayer = 1;
  impostorList.classList.add("hidden");
  revealSection.classList.add("hidden");
  game.classList.remove("hidden");
  chosenWord = words[Math.floor(Math.random() * words.length)];

  roles = Array(players).fill(chosenWord);
  let impostorSet = new Set();
  while (impostorSet.size < impostorCount) {
    impostorSet.add(Math.floor(Math.random() * players));
  }
  impostorSet.forEach(i => roles[i] = "Impostor");

  updatePlayerLabel();
};
