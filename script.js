const questionArray = [
  {
    id: 1,
    category: "Geschichte",
    question: "In welchem Jahr fiel die Berliner Mauer?",
    answers: ["1987", "1989", "1991", "1993"],
    correct: 1,
  },
  {
    id: 2,
    category: "Geographie",
    question: "Welcher ist der längste Fluss Deutschlands?",
    answers: ["Elbe", "Rhein", "Donau", "Weser"],
    correct: 1,
  },
  {
    id: 3,
    category: "Wissenschaft",
    question: "Wer entwickelte die Relativitätstheorie?",
    answers: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Stephen Hawking",
    ],
    correct: 1,
  },
  {
    id: 4,
    category: "Kunst",
    question: "Welcher Künstler malte die 'Sternennacht'?",
    answers: [
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Vincent van Gogh",
      "Claude Monet",
    ],
    correct: 2,
  },
  {
    id: 5,
    category: "Sport",
    question:
      "Wie oft fand die Fußball-Weltmeisterschaft in Deutschland statt?",
    answers: ["1 Mal", "2 Mal", "3 Mal", "4 Mal"],
    correct: 1,
  },
  {
    id: 6,
    category: "Literatur",
    question: "Wer schrieb 'Faust'?",
    answers: [
      "Friedrich Schiller",
      "Johann Wolfgang von Goethe",
      "Heinrich Heine",
      "Thomas Mann",
    ],
    correct: 1,
  },
  {
    id: 7,
    category: "Musik",
    question: "Welcher Komponist schrieb die '9. Symphonie'?",
    answers: [
      "Wolfgang Amadeus Mozart",
      "Johann Sebastian Bach",
      "Ludwig van Beethoven",
      "Franz Schubert",
    ],
    correct: 2,
  },
  {
    id: 8,
    category: "Biologie",
    question: "Wie viele Herzen hat ein Oktopus?",
    answers: ["1", "2", "3", "4"],
    correct: 2,
  },
  {
    id: 9,
    category: "Astronomie",
    question: "Welcher Planet ist der Sonne am nächsten?",
    answers: ["Venus", "Merkur", "Mars", "Erde"],
    correct: 1,
  },
  {
    id: 10,
    category: "Geschichte",
    question: "Wer war der erste deutsche Kaiser?",
    answers: [
      "Otto I.",
      "Karl der Große",
      "Wilhelm I.",
      "Friedrich Barbarossa",
    ],
    correct: 0,
  },
  {
    id: 11,
    category: "Chemie",
    question: "Was ist das chemische Symbol für Gold?",
    answers: ["Go", "Gd", "Au", "Ag"],
    correct: 2,
  },
  {
    id: 12,
    category: "Geographie",
    question: "Welche ist die Hauptstadt von Australien?",
    answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correct: 2,
  },
  {
    id: 13,
    category: "Film",
    question: "Welcher Film gewann 1994 den Oscar als bester Film?",
    answers: ["Forrest Gump", "Pulp Fiction", "Der König der Löwen", "Speed"],
    correct: 0,
  },
  {
    id: 14,
    category: "Mathematik",
    question: "Was ist die Quadratwurzel von 144?",
    answers: ["10", "11", "12", "13"],
    correct: 2,
  },
  {
    id: 15,
    category: "Technologie",
    question: "Wer gründete Microsoft?",
    answers: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Larry Page"],
    correct: 1,
  },
  {
    id: 16,
    category: "Natur",
    question: "Welches ist das größte Säugetier der Welt?",
    answers: ["Elefant", "Blauwal", "Giraffe", "Nilpferd"],
    correct: 1,
  },
  {
    id: 17,
    category: "Politik",
    question: "Wie viele Bundesländer hat Deutschland?",
    answers: ["14", "15", "16", "17"],
    correct: 2,
  },
  {
    id: 18,
    category: "Medizin",
    question: "Welches Organ produziert Insulin?",
    answers: ["Leber", "Niere", "Bauchspeicheldrüse", "Milz"],
    correct: 2,
  },
  {
    id: 19,
    category: "Architektur",
    question: "In welcher Stadt steht der Schiefe Turm?",
    answers: ["Rom", "Venedig", "Pisa", "Florenz"],
    correct: 2,
  },
  {
    id: 20,
    category: "Kulinarik",
    question: "Aus welchem Land stammt Sushi ursprünglich?",
    answers: ["China", "Japan", "Korea", "Thailand"],
    correct: 1,
  },
  {
    id: 21,
    category: "Religion",
    question: "Welche Religion wurde von Buddha gegründet?",
    answers: ["Hinduismus", "Buddhismus", "Jainismus", "Sikhismus"],
    correct: 1,
  },
  {
    id: 22,
    category: "Physik",
    question: "Mit welcher Geschwindigkeit bewegt sich Licht?",
    answers: ["300.000 km/s", "150.000 km/s", "450.000 km/s", "600.000 km/s"],
    correct: 0,
  },
  {
    id: 23,
    category: "Sprache",
    question: "Welche Sprache wird in Brasilien gesprochen?",
    answers: ["Spanisch", "Portugiesisch", "Französisch", "Italienisch"],
    correct: 1,
  },
  {
    id: 24,
    category: "Mythologie",
    question: "Wer ist der König der Götter in der griechischen Mythologie?",
    answers: ["Poseidon", "Hades", "Zeus", "Apollo"],
    correct: 2,
  },
  {
    id: 25,
    category: "Erfindungen",
    question: "Wer erfand das Telefon?",
    answers: [
      "Thomas Edison",
      "Alexander Graham Bell",
      "Nikola Tesla",
      "Benjamin Franklin",
    ],
    correct: 1,
  },
  {
    id: 26,
    category: "Tierwelt",
    question: "Welches Tier ist als 'König des Dschungels' bekannt?",
    answers: ["Tiger", "Löwe", "Leopard", "Jaguar"],
    correct: 1,
  },
  {
    id: 27,
    category: "Olympische Spiele",
    question:
      "In welcher Stadt fanden die ersten modernen Olympischen Spiele statt?",
    answers: ["London", "Paris", "Athen", "Rom"],
    correct: 2,
  },
  {
    id: 28,
    category: "Weltwunder",
    question:
      "Welches ist das einzige noch erhaltene der sieben Weltwunder der Antike?",
    answers: [
      "Koloss von Rhodos",
      "Pyramiden von Gizeh",
      "Hängende Gärten",
      "Leuchtturm von Alexandria",
    ],
    correct: 1,
  },
  {
    id: 29,
    category: "Währung",
    question: "Welche Währung wird in Japan verwendet?",
    answers: ["Yuan", "Won", "Yen", "Rupie"],
    correct: 2,
  },
  {
    id: 30,
    category: "Berge",
    question: "Welcher ist der höchste Berg der Welt?",
    answers: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
    correct: 1,
  },
  {
    id: 31,
    category: "Meere",
    question: "Welches ist das größte Meer der Welt?",
    answers: [
      "Atlantischer Ozean",
      "Indischer Ozean",
      "Pazifischer Ozean",
      "Arktischer Ozean",
    ],
    correct: 2,
  },
  {
    id: 32,
    category: "Elemente",
    question: "Welches ist das häufigste Element im Universum?",
    answers: ["Sauerstoff", "Wasserstoff", "Helium", "Kohlenstoff"],
    correct: 1,
  },
  {
    id: 33,
    category: "Planeten",
    question: "Welcher Planet hat die meisten Monde?",
    answers: ["Jupiter", "Saturn", "Uranus", "Neptun"],
    correct: 1,
  },
  {
    id: 34,
    category: "Autoren",
    question: "Wer schrieb 'Romeo und Julia'?",
    answers: [
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      "Mark Twain",
    ],
    correct: 1,
  },
  {
    id: 35,
    category: "Körper",
    question: "Wie viele Knochen hat ein erwachsener Mensch?",
    answers: ["196", "206", "216", "226"],
    correct: 1,
  },
  {
    id: 36,
    category: "Kontinente",
    question: "Welcher ist der kleinste Kontinent?",
    answers: ["Europa", "Australien", "Antarktika", "Südamerika"],
    correct: 1,
  },
  {
    id: 37,
    category: "Hauptstädte",
    question: "Was ist die Hauptstadt von Kanada?",
    answers: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
    correct: 3,
  },
  {
    id: 38,
    category: "Malerei",
    question: "Wer malte die 'Mona Lisa'?",
    answers: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
    correct: 1,
  },
  {
    id: 39,
    category: "Dinosaurier",
    question: "Welcher war der größte Dinosaurier?",
    answers: [
      "Tyrannosaurus Rex",
      "Brachiosaurus",
      "Argentinasaurus",
      "Diplodocus",
    ],
    correct: 2,
  },
  {
    id: 40,
    category: "Wüsten",
    question: "Welche ist die größte Wüste der Welt?",
    answers: ["Sahara", "Gobi", "Antarktis", "Atacama"],
    correct: 2,
  },
  {
    id: 41,
    category: "Musik",
    question: "Wie viele Saiten hat eine Standardgitarre?",
    answers: ["4", "5", "6", "7"],
    correct: 2,
  },
  {
    id: 42,
    category: "Insekten",
    question: "Welches Insekt produziert Honig?",
    answers: ["Wespe", "Biene", "Hummel", "Hornisse"],
    correct: 1,
  },
  {
    id: 43,
    category: "Zeit",
    question: "Wie viele Sekunden hat eine Stunde?",
    answers: ["3600", "7200", "1800", "5400"],
    correct: 0,
  },
  {
    id: 44,
    category: "Vulkane",
    question: "Welcher Vulkan zerstörte Pompeji?",
    answers: ["Ätna", "Vesuv", "Stromboli", "Vulcano"],
    correct: 1,
  },
  {
    id: 45,
    category: "Erfinder",
    question: "Wer erfand die Glühbirne?",
    answers: [
      "Thomas Edison",
      "Nikola Tesla",
      "Benjamin Franklin",
      "Alexander Bell",
    ],
    correct: 0,
  },
  {
    id: 46,
    category: "Blut",
    question: "Welche Blutgruppe ist Universalspender?",
    answers: ["A", "B", "AB", "0"],
    correct: 3,
  },
  {
    id: 47,
    category: "Temperatur",
    question: "Bei welcher Temperatur gefriert Wasser?",
    answers: ["-1°C", "0°C", "1°C", "32°C"],
    correct: 1,
  },
  {
    id: 48,
    category: "Länder",
    question: "Welches ist das größte Land der Welt?",
    answers: ["Kanada", "China", "USA", "Russland"],
    correct: 3,
  },
  {
    id: 49,
    category: "Farben",
    question: "Welche Farben ergeben zusammen Grün?",
    answers: ["Rot und Blau", "Gelb und Blau", "Rot und Gelb", "Blau und Weiß"],
    correct: 1,
  },
  {
    id: 50,
    category: "Kriege",
    question: "In welchen Jahren fand der Erste Weltkrieg statt?",
    answers: ["1912-1918", "1914-1918", "1916-1920", "1913-1919"],
    correct: 1,
  },
  {
    id: 51,
    category: "Märchen",
    question: "Wer schrieb die Märchen der Gebrüder Grimm?",
    answers: [
      "Hans Christian Andersen",
      "Jacob und Wilhelm Grimm",
      "Charles Perrault",
      "Lewis Carroll",
    ],
    correct: 1,
  },
  {
    id: 52,
    category: "Symbole",
    question: "Welches chemische Symbol hat Eisen?",
    answers: ["Ei", "Fe", "Ir", "Er"],
    correct: 1,
  },
  {
    id: 53,
    category: "Rekorde",
    question: "Welches ist das schnellste Landtier?",
    answers: ["Löwe", "Gepard", "Antilope", "Pferd"],
    correct: 1,
  },
  {
    id: 54,
    category: "Sinne",
    question: "Wie viele Sinne hat der Mensch traditionell?",
    answers: ["4", "5", "6", "7"],
    correct: 1,
  },
  {
    id: 55,
    category: "Energie",
    question: "Was ist die Formel für Energie in der Physik?",
    answers: ["E=mc", "E=mc²", "E=m²c", "E=2mc"],
    correct: 1,
  },
  {
    id: 56,
    category: "Organe",
    question: "Welches ist das größte Organ des menschlichen Körpers?",
    answers: ["Leber", "Lunge", "Haut", "Herz"],
    correct: 2,
  },
  {
    id: 57,
    category: "Mond",
    question: "Wie lange dauert ein Mondzyklus?",
    answers: ["28 Tage", "30 Tage", "29,5 Tage", "31 Tage"],
    correct: 2,
  },
  {
    id: 58,
    category: "Bauwerke",
    question: "In welchem Land steht Machu Picchu?",
    answers: ["Bolivien", "Peru", "Ecuador", "Kolumbien"],
    correct: 1,
  },
  {
    id: 59,
    category: "Metalle",
    question: "Welches Metall ist bei Raumtemperatur flüssig?",
    answers: ["Blei", "Zinn", "Quecksilber", "Aluminium"],
    correct: 2,
  },
  {
    id: 60,
    category: "Photosynthese",
    question: "Was produzieren Pflanzen bei der Photosynthese?",
    answers: ["Kohlendioxid", "Sauerstoff", "Stickstoff", "Wasserstoff"],
    correct: 1,
  },
  {
    id: 61,
    category: "Klassische Musik",
    question: "Welcher Komponist schrieb 'Die vier Jahreszeiten'?",
    answers: ["Bach", "Vivaldi", "Mozart", "Haydn"],
    correct: 1,
  },
  {
    id: 62,
    category: "DNA",
    question: "Aus wie vielen Strängen besteht die DNA?",
    answers: ["1", "2", "3", "4"],
    correct: 1,
  },
  {
    id: 63,
    category: "Edelgase",
    question: "Welches ist das leichteste Edelgas?",
    answers: ["Neon", "Helium", "Argon", "Krypton"],
    correct: 1,
  },
  {
    id: 64,
    category: "Rekorde",
    question: "Welches ist das tiefste Gewässer der Erde?",
    answers: [
      "Marianengraben",
      "Puerto-Rico-Graben",
      "Java-Graben",
      "Tonga-Graben",
    ],
    correct: 0,
  },
  {
    id: 65,
    category: "Vitamine",
    question: "Welches Vitamin wird durch Sonnenlicht produziert?",
    answers: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    correct: 3,
  },
  {
    id: 66,
    category: "Weltrekorde",
    question: "Welches ist das höchste Gebäude der Welt?",
    answers: [
      "Empire State Building",
      "Burj Khalifa",
      "Shanghai Tower",
      "CN Tower",
    ],
    correct: 1,
  },
  {
    id: 67,
    category: "Sprachen",
    question: "Welche ist die meistgesprochene Sprache der Welt?",
    answers: ["Englisch", "Spanisch", "Mandarin", "Hindi"],
    correct: 2,
  },
  {
    id: 68,
    category: "Revolutionen",
    question: "In welchem Jahr begann die Französische Revolution?",
    answers: ["1789", "1791", "1793", "1795"],
    correct: 0,
  },
  {
    id: 69,
    category: "Periodensystem",
    question: "Welches Element hat die Ordnungszahl 1?",
    answers: ["Helium", "Wasserstoff", "Lithium", "Sauerstoff"],
    correct: 1,
  },
  {
    id: 70,
    category: "Säugetiere",
    question: "Welches Säugetier kann fliegen?",
    answers: ["Eichhörnchen", "Fledermaus", "Pinguin", "Emu"],
    correct: 1,
  },
  {
    id: 71,
    category: "Geometrie",
    question: "Wie viele Seiten hat ein Oktagon?",
    answers: ["6", "7", "8", "9"],
    correct: 2,
  },
  {
    id: 72,
    category: "Instrumente",
    question: "Zu welcher Instrumentenfamilie gehört die Trompete?",
    answers: [
      "Streichinstrumente",
      "Blasinstrumente",
      "Schlaginstrumente",
      "Tasteninstrumente",
    ],
    correct: 1,
  },
  {
    id: 73,
    category: "Nobelpreis",
    question: "Wer erhielt den ersten Nobelpreis für Physik?",
    answers: [
      "Marie Curie",
      "Albert Einstein",
      "Wilhelm Röntgen",
      "Max Planck",
    ],
    correct: 2,
  },
  {
    id: 74,
    category: "Ozeane",
    question: "Welcher Ozean trennt Europa von Amerika?",
    answers: ["Pazifik", "Atlantik", "Indik", "Arktik"],
    correct: 1,
  },
  {
    id: 75,
    category: "Mittelalter",
    question: "Wie lange dauerte das Mittelalter ungefähr?",
    answers: ["500 Jahre", "800 Jahre", "1000 Jahre", "1200 Jahre"],
    correct: 2,
  },
  {
    id: 76,
    category: "Kalender",
    question: "Wie viele Tage hat ein Schaltjahr?",
    answers: ["364", "365", "366", "367"],
    correct: 2,
  },
  {
    id: 77,
    category: "Ägypten",
    question: "Welcher Fluss fließt durch Ägypten?",
    answers: ["Euphrat", "Tigris", "Nil", "Jordan"],
    correct: 2,
  },
  {
    id: 78,
    category: "Verdauung",
    question: "Wie lange ist der Dünndarm beim Menschen?",
    answers: ["3-4 Meter", "6-7 Meter", "9-10 Meter", "12-13 Meter"],
    correct: 1,
  },
  {
    id: 79,
    category: "Technik",
    question: "Was bedeutet 'WWW'?",
    answers: [
      "World Wide Web",
      "World Web Works",
      "Wide World Web",
      "Web World Wide",
    ],
    correct: 0,
  },
  {
    id: 80,
    category: "Antike",
    question: "Welche Stadt war das Zentrum des Römischen Reiches?",
    answers: ["Athen", "Sparta", "Rom", "Konstantinopel"],
    correct: 2,
  },
  {
    id: 81,
    category: "Geschwindigkeit",
    question: "Was ist schneller: Schall oder Licht?",
    answers: ["Schall", "Licht", "Beide gleich schnell", "Kommt darauf an"],
    correct: 1,
  },
  {
    id: 82,
    category: "Dinosaurier",
    question: "Was bedeutet 'Dinosaurier' wörtlich übersetzt?",
    answers: [
      "Große Echse",
      "Schreckliche Echse",
      "Alte Echse",
      "Starke Echse",
    ],
    correct: 1,
  },
  {
    id: 83,
    category: "Erdkunde",
    question: "Auf welchem Kontinent liegt die Sahara?",
    answers: ["Asien", "Afrika", "Australien", "Südamerika"],
    correct: 1,
  },
  {
    id: 84,
    category: "Literatur",
    question: "Welches Buch schrieb J.K. Rowling?",
    answers: [
      "Der Hobbit",
      "Harry Potter",
      "Herr der Ringe",
      "Chronicles of Narnia",
    ],
    correct: 1,
  },
  {
    id: 85,
    category: "Bienen",
    question: "Welchen Tanz führen Bienen auf, um anderen den Weg zu zeigen?",
    answers: ["Rundtanz", "Schwänzeltanz", "Kreistanz", "Spiraltanz"],
    correct: 1,
  },
  {
    id: 86,
    category: "Mathematik",
    question: "Was ist Pi ungefähr?",
    answers: ["3,14", "2,71", "1,41", "1,73"],
    correct: 0,
  },
  {
    id: 87,
    category: "Erfindungen",
    question: "Wann wurde das Internet erfunden?",
    answers: ["1960er", "1970er", "1980er", "1990er"],
    correct: 1,
  },
  {
    id: 88,
    category: "Körperteile",
    question: "Welcher Muskel ist der stärkste im menschlichen Körper?",
    answers: ["Bizeps", "Kaumuskel", "Herzmuskel", "Oberschenkelmuskel"],
    correct: 1,
  },
  {
    id: 89,
    category: "Weltraum",
    question: "Wie heißt unsere Galaxie?",
    answers: ["Andromeda", "Milchstraße", "Whirlpool", "Sombrero"],
    correct: 1,
  },
  {
    id: 90,
    category: "Entdeckungen",
    question: "Wer entdeckte Amerika?",
    answers: ["Kolumbus", "Vespucci", "Magellan", "Cortés"],
    correct: 0,
  },
  {
    id: 91,
    category: "Vulkane",
    question: "Welcher ist der höchste aktive Vulkan?",
    answers: ["Kilimandscharo", "Fuji", "Ojos del Salado", "Ätna"],
    correct: 2,
  },
  {
    id: 92,
    category: "Computer",
    question: "Was bedeutet 'CPU'?",
    answers: [
      "Computer Processing Unit",
      "Central Processing Unit",
      "Central Program Unit",
      "Computer Program Unit",
    ],
    correct: 1,
  },
  {
    id: 93,
    category: "Kunst",
    question: "Welcher Künstler schnitt sich das Ohr ab?",
    answers: ["Picasso", "Van Gogh", "Monet", "Renoir"],
    correct: 1,
  },
  {
    id: 94,
    category: "Sport",
    question: "Wie oft finden die Olympischen Spiele statt?",
    answers: ["Jedes Jahr", "Alle 2 Jahre", "Alle 4 Jahre", "Alle 6 Jahre"],
    correct: 2,
  },
  {
    id: 95,
    category: "Metrik",
    question: "Wie viele Meter sind ein Kilometer?",
    answers: ["100", "1000", "10000", "100000"],
    correct: 1,
  },
  {
    id: 96,
    category: "Geschichte",
    question: "Welches Schiff sank 1912?",
    answers: ["Lusitania", "Titanic", "Britannic", "Olympic"],
    correct: 1,
  },
  {
    id: 97,
    category: "Tiere",
    question: "Welches Tier schläft am meisten?",
    answers: ["Katze", "Koala", "Faultier", "Bär"],
    correct: 2,
  },
  {
    id: 98,
    category: "Wetter",
    question: "Wie entsteht ein Regenbogen?",
    answers: ["Lichtbrechung", "Reflection", "Absorption", "Refraktion"],
    correct: 0,
  },
  {
    id: 99,
    category: "Medien",
    question: "Wann wurde das Fernsehen erfunden?",
    answers: ["1920er", "1930er", "1940er", "1950er"],
    correct: 0,
  },
  {
    id: 100,
    category: "Finale",
    question: "Welche Zahl folgt in der Fibonacci-Folge nach 1, 1, 2, 3, 5, 8?",
    answers: ["11", "13", "15", "17"],
    correct: 1,
  },
];

let answerIsTreu = false;
let correctAnswer = 0;
let answerButtonIsClicked = false;
const quizContainer = document.createElement("div");
const controlsContainer = document.createElement("div");
const solutionButton = document.createElement("button");
const nextButton = document.createElement("button");

quizContainer.classList.add("quiz-container");
controlsContainer.classList.add("controls");
solutionButton.classList.add("solution-btn");
nextButton.classList.add("next");

solutionButton.innerText = "Lösung";
nextButton.innerText = "Weiter";

controlsContainer.appendChild(solutionButton);
controlsContainer.appendChild(nextButton);

function nextQuestion() {
  answerButtonIsClicked = true;
  const randomIndex = Math.floor(Math.random() * questionArray.length);

  const question = document.createElement("h1");
  const answerContainer = document.createElement("div");

  const questionText = document.createTextNode(
    questionArray[Math.floor(randomIndex)].question
  );
  const answers = questionArray[Math.floor(randomIndex)].answers;
  correctAnswer = questionArray[Math.floor(randomIndex)].correct;
  console.log("Korrekte Antwort:", correctAnswer);

  for (let i = 0; i < answers.length; i++) {
    const answerOptionText = document.createTextNode(answers[i]);
    const answerButton = document.createElement("button");
    answerButton.appendChild(answerOptionText);
    answerButton.classList.add("answer-btn");
    answerContainer.appendChild(answerButton);
    if (i === correctAnswer) {
      console.log("Richtig");
      answerIsTreu = true;
      answerButton.addEventListener("click", () => {
        answerButton.classList.add("correct");
      });
    } else {
      console.log("Falsch");
      answerButton.addEventListener("click", () => {
        answerButton.classList.add("wrong");
      });
    }
  }
  answerIsTreu = false;

  question.appendChild(questionText);

  question.classList.add("question");
  answerContainer.classList.add("answer-container");

  quizContainer.innerHTML = "";
  quizContainer.appendChild(question);

  quizContainer.appendChild(answerContainer);
  quizContainer.appendChild(controlsContainer);
  console.log(answerContainer);
}

function showSolution() {
  // Logic to show the solution
}

nextButton.addEventListener("click", () => {
  nextQuestion();
});

solutionButton.addEventListener("click", () => {
  showSolution();
});

document.addEventListener("DOMContentLoaded", () => {
  nextQuestion();
  document.getElementById("quiz-container").appendChild(quizContainer);
});
