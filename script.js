const words = [
  "Autor","Sporthalle","Handyhülle","Spielkonsole","Geduld","Kamera","Weltreise","Wecker","Dachboden",
  "Kreativität","Gedanke","Lautsprecher","Strand","Architekt","Stuhl","Neugier","Wissenschaftler",
  "Flughafen","Bibliothek","App","Mechaniker","Camping","Museum","Warten auf den Bus","Koffer packen",
  "Essen bestellen","Bluetooth","Livestream","Pilot","Backen","Theaterbesuch","Zelten","Urlaubspacken",
  "Smartphone","Lesen","Hausaufgaben machen","Hoffnung","Feuerwehrmann","Gärtner","Schwimmbad","Cloud",
  "Aufräumen","Abenteuer","Videospiel","Autofahrt","Fernseher","Laptop","Spielplatz","Lehrer",
  "Freizeitpark","Skifahren","Zirkus","Videodreh","Rucksack","Erinnerung","Friseur","Konzertbesuch",
  "Koch","Internet","Mut","Kinoabend","Zoo","Tastatur","Joggen","Teekanne","Trainer","Tablet",
  "Versteckspiel","U-Bahn","Drohne","Designer","E-Mail","Schulbeginn","Fahrradfahren","Vertrauen",
  "Freiheit","Spiegel","Glück","Altstadt","Kopfhörer","Gärtnern","Verlaufen","Kochen","Traum",
  "Bäcker","Wecker klingelt","Wohnzimmer","Fernbedienung","Malen","Zukunft","WLAN","Wandern",
  "Schule","Regenschirm","Einschlafen","Berggipfel","Flasche","Keller","Fußballspiel","Schauspieler",
  "Brille","Polizist","Screenshot","Ladegerät","Tanzen","Journalist","Taschenlampe","Spielnachmittag",
  "Podcast","Supermarkt","Federmäppchen","Liebe","Gedicht","Idee","Designer","USB-Stick","Künstler",
  "Buch","Geburtstagsparty","Lampenfieber","Screenshot","Smartwatch","Kopfkissen","Dachterrasse",
  "Musiker","Altbauwohnung","Zahnarzttermin","Geduld","Gedanken","Zeitgefühl","Flugzeug","Nachricht",
  "Internetbrowser","Selbstbewusstsein","Teamgeist","Einladung","Sprachreise","E-Mail-Adresse","Blitzlicht",
  "Wissensdurst","Abschlussfeier","Vorstellungsgespräch","Erleuchtung","Morgenroutine","Nachtruhe",
  "Weltall","Wetterbericht","Stadtplan","Frühstück","Lieblingsfilm","Zeichnung","Kreide","Poster",
  "Mitternacht","Handschrift","Verabredung","Luftballon","Brettspiel","Kreativpause","Schreibblockade",
  "Redewendung","Tagtraum","Sternenhimmel","Gewitter","Wellenrauschen","Erfahrung","Wunder","Schnitzeljagd",
  "Puzzle","Geschenk","Tagesablauf","Gruppenfoto","Picknick","Lieblingslied","Bücherei","Ausstellung",
  "Schnappschuss","Stille","Abschied","Wunsch","Sehnsucht","Fantasie","Vorfreude","Erfolg","Entscheidung",
  "Schicksal","Begeisterung","Abwechslung","Kultur","Beziehung","Kommunikation","Hindernis","Lösung",
  "Aussicht","Begegnung","Zufriedenheit","Identität","Sicherheit","Neustart","Gefühl","Besonderheit",
  "Verantwortung","Perspektive","Wahrheit","Beitrag","Abstimmung","Reiseplanung","Zielsetzung",
  "Motivation","Anerkennung","Lernprozess","Zeitdruck","Erholung","Routine","Herausforderung","Entdeckung",
  "Beobachtung","Interpretation","Kritik","Forschung","Ausdauer","Inspiration","Experiment","Technik",
  "Projekt","Ergebnis","Präsentation","Analyse","Strategie","Planung","Organisation","Dokumentation",
  "Datenbank","Arbeitsblatt","Vokabel","Mathematik","Physik","Chemie","Biologie","Erdkunde","Geschichte",
  "Kunst","Musik","Sport","Deutsch","Englisch","Französisch","Spanisch","Italienisch","Latein","Ethik",
  "Religion","Sozialkunde","Informatik","Programmierung","Roboter","Grafik","Layout","Schaubild","Textfeld",
  "Farbschema","Symbol","Logik","Struktur","Überschrift","Untertitel","Menü","Link","Fenster","Scrollen",
  "Klick","Tastenkombination","Benutzername","Passwort","Anmeldung","Profil","Avatar","Status","Benachrichtigung",
  "Aktualisierung","Download","Upload","Cloud-Speicher","Synchronisation","Datenschutz","Einstellung",
  "Support","Update","App-Store","Suchmaschine","Algorithmus","Plattform","Netzwerk","Router","Modem",
  "Signal","Verbindung","Verlauf","Favoriten","Tab","Browser","Erweiterung","Cache","Cookie","Firewall",
  "Sicherheitseinstellung","Zugriff","Backup","Version","Dateiformat","Ordner","Verzeichnis","Ladezeit",
  "Bedienung","Simulation","Interface","Benutzeroberfläche","Fenstermodus","Vollbild","Animation","Effekt",
  "Design","Code","Variable","Funktion","Schleife","Bedingung","Debugging","Konsole","Syntax","Fehlermeldung",
  "Server","Client","API","Daten","JSON","XML","HTML","CSS","JavaScript","Framework","Datenstruktur",
  "Algorithmus","Kompatibilität","Skalierung","Responsivität","Datenübertragung","Netzwerkfehler","Logfile",
  "Fehlercode","Installationspaket","Updateprozess","Versionsnummer","Patch","Build","Changelog","Open Source",
  "Lizenz","Urheberrecht","Komprimierung","Verschlüsselung","Entschlüsselung","Passwortschutz","Zugriffsrecht",
  "Authentifizierung","Identifikation","Benutzerdaten","Nutzerverhalten","Datenerhebung","Zielgruppe",
  "Inhalt","Strukturierung","Erzählung","Beschreibung","Begründung","Argumentation","Beispiel","Zusammenfassung",
  "Fazit","Einleitung","Hauptteil","Schluss","Abschnitt","Kapitel","Textart","Genre","Charakter","Handlung",
  "Spannung","Auflösung","Wendepunkt","Erzählperspektive","Ich-Erzähler","Er-Sie-Erzähler","Zeitform",
  "Präsens","Präteritum","Perfekt","Plusquamperfekt","Futur","Direkte Rede","Indirekte Rede","Wörtliche Rede",
  "Gedichtform","Strophe","Vers","Reim","Metrum","Lyrik","Prosa","Drama","Theaterstück","Dialog","Monolog",
  "Szene","Akt","Regieanweisung","Kulisse","Kostüm","Maske","Bühnenbild","Publikum","Applaus","Premiere",
  "Aufführung","Vorstellung","Eintrittskarte","Reservierung","Platznummer","Reihe","Loge","Balkon","Parkett"
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
