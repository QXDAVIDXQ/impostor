const words = [
  "Apfel", "Banane", "Schule", "Auto", "Tisch", "Stuhl", "Lampe", "Fernseher", "Zug", "Flugzeug",
  "Bus", "Handy", "Buch", "Baum", "Haus", "Blume", "Hund", "Katze", "Elefant", "Maus",
  "Fisch", "Brot", "Pizza", "Eis", "Käse", "Wasser", "Milch", "Uhr", "Brille", "Jacke",
  "Hose", "Schuh", "Ball", "Teppich", "Fenster", "Türe", "Bett", "Sofa", "Regal", "Tasse",
  "Teller", "Gabel", "Löffel", "Messer", "Topf", "Pfanne", "Herd", "Kühlschrank", "Schokolade", "Erdbeere",
  "Orange", "Zitrone", "Karotte", "Gurke", "Salat", "Paprika", "Tomate", "Regen", "Sonne", "Wolke",
  "Schnee", "Wind", "Himmel", "Stern", "Mond", "Planet", "Rakete", "Computer", "Tastatur", "Maus (Computer)",
  "Monitor", "Spiel", "Puppe", "Lego", "Puzzle", "Schere", "Kleber", "Papier", "Heft", "Stift",
  "Lineal", "Radiergummi", "Tafel", "Rucksack", "Fahrrad", "Roller", "Motorrad", "Polizei", "Feuerwehr", "Arzt",
  "Lehrer", "Schüler", "König", "Prinzessin", "Pirat", "Drache", "Gespenst", "Zelt", "Camping", "Wald",
  "Wiese", "Fluss", "Meer", "Strand", "Insel", "Schiff", "U-Boot", "Brücke", "Tunnel", "Stadt",
  "Dorf", "Land", "Zoo", "Bauernhof", "Traktor", "Heu", "Stall", "Huhn", "Ente", "Schwein",
  "Kuh", "Pferd", "Schaf", "Ziege", "Löwe", "Tiger", "Affe", "Krokodil", "Pinguin", "Robbe",
  "Bär", "Schlange", "Kamel", "Känguru", "Zebra", "Giraffe", "Nashorn", "Nilpferd", "Biene", "Wespe",
  "Schmetterling", "Käfer", "Spinne", "Ameise", "Mücke", "Regenbogen", "Blitz", "Donner", "Sturm", "Hagel",
  "Nebel", "Vulkan", "Höhle", "Berg", "Tal", "Felsen", "Sand", "Kies", "Schlamm", "Dschungel",
  "Savanne", "Wüste", "Eisberg", "Iglu", "Schneemann", "Ski", "Schlitten", "Snowboard", "Mütze", "Handschuh",
  "Schal", "Mantel", "Badehose", "Bikini", "Schwimmflügel", "Sonnencreme", "Sonnenbrille", "Zähne", "Zahnarzt", "Krankenhaus",
  "Operation", "Spritze", "Verband", "Tablette", "Pflaster", "Impfung", "Sport", "Ballspiel", "Tennis", "Fußball",
  "Basketball", "Handball", "Schwimmen", "Boxen", "Fechten", "Turnen", "Reiten", "Klettern", "Wandern", "Rennen",
  "Springen", "Tauchen", "Surfen", "Skaten", "Tanzen", "Musik", "Gitarre", "Klavier", "Geige", "Trommel",
  "Flöte", "Mikrofon", "Lied", "Konzert", "Bühne", "Vorhang", "Theater", "Schauspieler", "Film", "Kamera",
  "Leinwand", "Kino", "Popcorn", "Eintrittskarte", "Geld", "Bank", "Münze", "Schein", "Konto", "Sparkasse",
  "Tasche", "Geldbeutel", "Schlüssel", "Schloss", "Zaun", "Garten", "Blumentopf", "Gießkanne", "Rasenmäher", "Schaufel",
  "Besen", "Eimer", "Schwamm", "Seife", "Shampoo", "Zahnbürste", "Handtuch", "Dusche", "Badewanne", "Klo",
  "Spiegel", "Decke", "Wand", "Boden", "Tapete", "Steckdose", "Kabel", "Strom", "Batterie", "Kerze",
  "Feuer", "Feuerzeug", "Streichholz", "Rauch", "Alarm", "Sirene", "Notruf", "Telefon", "Adresse", "Brief",
  "Paket", "Post", "Karte", "Umschlag", "Stempel", "Zeitung", "Buchladen", "Supermarkt", "Kasse", "Einkaufswagen",
  "Produkt", "Preis", "Angebot", "Werbung", "Plakat", "Schild", "Straße", "Ampel", "Zebrastreifen", "Parkplatz",
  "Garage", "Werkstatt", "Öl", "Benzin", "Reifen", "Lenkrad", "Hupe", "Blinker", "Bremse", "Motor",
  "Fensterheber", "Gurt", "Nummernschild", "Fahrkarte", "Haltestelle", "Fahrplan", "Bahnhof", "Ticketautomat", "Rolltreppe", "Aufzug",
  "Treppe", "Geländer", "Gebäude", "Büro", "Schreibtisch", "Laptop", "Aktenordner", "Dokument", "Drucker", "Scanner",
  "Kopierer", "Lehrerzimmer", "Klassenzimmer", "Turnhalle", "Pausenhof", "Glocke", "Stundenplan", "Hausaufgabe", "Pause", "Ferien",
  "Urlaub", "Pass", "Koffer", "Reiseführer", "Hotel", "Rezeption", "Zimmer", "Bettdecke", "Matratze", "Kopfkissen",
  "Föhn", "Fernbedienung", "Minibar", "Balkon", "Ausflug", "Stadtplan", "Museum", "Ausstellung", "Bild", "Statue",
  "Denkmal", "Kirche", "Turm", "Glocke", "Fensterrose", "Orgel", "Priester", "Bibel", "Kreuz", "Engel",
  "Altar", "Gebet", "Segen", "Hochzeit", "Taufe", "Geburtstag", "Kuchen", "Geschenk", "Schleife", "Party",
  "Luftballon", "Konfetti", "Spielzeug", "Clown", "Zauberer", "Show", "Spaß", "Lachen", "Freunde", "Familie",
  "Bruder", "Schwester", "Cousin", "Cousine", "Oma", "Opa", "Tante", "Onkel", "Eltern", "Kind",
  "Baby", "Junge", "Mädchen", "Nachbar", "Freund", "Feind", "Tierarzt", "Bäcker", "Metzger", "Koch"
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

// Spieleranzahl auswählen
for (let i = 4; i <= 10; i++) {
  const btn = document.createElement("button");
  btn.textContent = `${i} Spieler`;
  btn.onclick = () => startGame(i);
  playerButtons.appendChild(btn);
}

function startGame(playerCount) {
  players = playerCount;
  currentPlayer = 1;
  chosenWord = words[Math.floor(Math.random() * words.length)];
  impostorCount = players <= 6 ? 1 : players <= 9 ? 2 : 3;

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
