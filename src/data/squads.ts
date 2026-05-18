import { MORE_SQUADS } from './moreSquads';
import { REAL_SQUADS } from './realSquads';

export interface Player {
  id: string;
  name: string;
  aliases: string[];
  number: number;
  position: 'GK' | 'DF' | 'MF' | 'FW';
  positionLabel: string;
  x: number; // percentage from left (0-100)
  y: number; // percentage from top (0-100)
  hintClub?: string;
  hintInitials?: string;
}

export interface Squad {
  id: string;
  country: string;
  year: number;
  formation: string;
  jerseyColor: string;
  numberColor: string;
  trimColor: string;
  squadName: string;
  players: Player[];
  isIconic?: boolean;
}

export const SQUADS: Squad[] = [
  // 1. BRAZIL 1970 (Legendary 4-2-4 / 4-3-3 asymmetric)
  {
    id: "brazil-1970",
    country: "Brazil",
    year: 1970,
    formation: "4-3-3",
    jerseyColor: "#FFEB3B",
    numberColor: "#4CAF50",
    trimColor: "#4CAF50",
    squadName: "The Beautiful Game Kings",
    players: [
      { id: "br70-1", name: "Félix", aliases: ["felix", "felix mielli venerando"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Fluminense", hintInitials: "F." },
      { id: "br70-2", name: "Carlos Alberto", aliases: ["carlos alberto", "carlos alberto torres", "c. alberto"], number: 4, position: "DF", positionLabel: "RB", x: 82, y: 65, hintClub: "Santos", hintInitials: "C. A." },
      { id: "br70-3", name: "Brito", aliases: ["brito", "hercules brito ruas"], number: 2, position: "DF", positionLabel: "RCB", x: 60, y: 72, hintClub: "Flamengo", hintInitials: "B." },
      { id: "br70-4", name: "Piazza", aliases: ["piazza", "wilson piazza"], number: 3, position: "DF", positionLabel: "LCB", x: 40, y: 72, hintClub: "Cruzeiro", hintInitials: "P." },
      { id: "br70-5", name: "Everaldo", aliases: ["everaldo", "everaldo marques da silva"], number: 16, position: "DF", positionLabel: "LB", x: 18, y: 65, hintClub: "Gremio", hintInitials: "E." },
      { id: "br70-6", name: "Clodoaldo", aliases: ["clodoaldo", "clodoaldo tavares de Santana"], number: 5, position: "MF", positionLabel: "DM", x: 50, y: 55, hintClub: "Santos", hintInitials: "C." },
      { id: "br70-7", name: "Gérson", aliases: ["gerson", "gerson de oliveira nunes"], number: 8, position: "MF", positionLabel: "LCM", x: 35, y: 44, hintClub: "Sao Paulo", hintInitials: "G." },
      { id: "br70-8", name: "Rivelino", aliases: ["rivelino", "roberto rivelino", "rivellino"], number: 11, position: "MF", positionLabel: "LAM", x: 20, y: 28, hintClub: "Corinthians", hintInitials: "R." },
      { id: "br70-9", name: "Jairzinho", aliases: ["jairzinho", "jair ventura filho"], number: 7, position: "FW", positionLabel: "RW", x: 80, y: 22, hintClub: "Botafogo", hintInitials: "J." },
      { id: "br70-10", name: "Pelé", aliases: ["pele", "edson arantes do nascimento", "the king"], number: 10, position: "FW", positionLabel: "CF", x: 44, y: 20, hintClub: "Santos", hintInitials: "P." },
      { id: "br70-11", name: "Tostão", aliases: ["tostao", "eduardo goncalves de andrade"], number: 9, position: "FW", positionLabel: "ST", x: 58, y: 12, hintClub: "Cruzeiro", hintInitials: "T." }
    ]
  },
  // 2. ARGENTINA 1986 (Maradona 3-5-2 masterpiece)
  {
    id: "argentina-1986",
    country: "Argentina",
    year: 1986,
    formation: "3-5-2",
    jerseyColor: "#74C3FF",
    numberColor: "#FFFFFF",
    trimColor: "#FFFFFF",
    squadName: "Maradona's Masterclass",
    players: [
      { id: "arg86-1", name: "Nery Pumpido", aliases: ["pumpido", "nery pumpido", "n. pumpido"], number: 18, position: "GK", positionLabel: "GK", x: 50, y: 86, hintClub: "River Plate", hintInitials: "N. P." },
      { id: "arg86-2", name: "José Luis Brown", aliases: ["brown", "jose luis brown", "j. brown"], number: 5, position: "DF", positionLabel: "CB", x: 50, y: 74, hintClub: "Deportivo Espanol", hintInitials: "J. L. B." },
      { id: "arg86-3", name: "José Luis Cuciuffo", aliases: ["cuciuffo", "jose luis cuciuffo", "j. cuciuffo"], number: 9, position: "DF", positionLabel: "RCB", x: 72, y: 68, hintClub: "Velez Sarsfield", hintInitials: "J. L. C." },
      { id: "arg86-4", name: "Oscar Ruggeri", aliases: ["ruggeri", "oscar ruggeri", "o. ruggeri"], number: 19, position: "DF", positionLabel: "LCB", x: 28, y: 68, hintClub: "River Plate", hintInitials: "O. R." },
      { id: "arg86-5", name: "Ricardo Giusti", aliases: ["giusti", "ricardo giusti", "r. giusti"], number: 14, position: "MF", positionLabel: "RWB", x: 86, y: 50, hintClub: "Independiente", hintInitials: "R. G." },
      { id: "arg86-6", name: "Sergio Batista", aliases: ["batista", "sergio batista", "s. batista"], number: 2, position: "MF", positionLabel: "DM", x: 50, y: 54, hintClub: "Argentinos Juniors", hintInitials: "S. B." },
      { id: "arg86-7", name: "Julio Olarticoechea", aliases: ["olarticoechea", "julio olarticoechea", "j. olarticoechea"], number: 16, position: "MF", positionLabel: "LWB", x: 14, y: 50, hintClub: "Boca Juniors", hintInitials: "J. O." },
      { id: "arg86-8", name: "Héctor Enrique", aliases: ["enrique", "hector enrique", "h. enrique"], number: 12, position: "MF", positionLabel: "RCM", x: 66, y: 44, hintClub: "River Plate", hintInitials: "H. E." },
      { id: "arg86-9", name: "Jorge Burruchaga", aliases: ["burruchaga", "jorge burruchaga", "j. burruchaga"], number: 7, position: "MF", positionLabel: "LCM", x: 34, y: 44, hintClub: "Nantes", hintInitials: "J. B." },
      { id: "arg86-10", name: "Diego Maradona", aliases: ["maradona", "diego maradona", "d. maradona", "el diego"], number: 10, position: "MF", positionLabel: "AM", x: 50, y: 32, hintClub: "Napoli", hintInitials: "D. M." },
      { id: "arg86-11", name: "Jorge Valdano", aliases: ["valdano", "jorge valdano", "j. valdano"], number: 11, position: "FW", positionLabel: "ST", x: 50, y: 15, hintClub: "Real Madrid", hintInitials: "J. V." }
    ]
  },
  // 3. ITALY 2006 (World Champions 4-2-3-1 / 4-4-1-1)
  {
    id: "italy-2006",
    country: "Italy",
    year: 2006,
    formation: "4-4-2",
    jerseyColor: "#1E88E5",
    numberColor: "#FFFFFF",
    trimColor: "#FFFFFF",
    squadName: "The Azzurri Wall",
    players: [
      { id: "it06-1", name: "Gianluigi Buffon", aliases: ["buffon", "gianluigi buffon", "g. buffon"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 86, hintClub: "Juventus", hintInitials: "G. B." },
      { id: "it06-2", name: "Gianluca Zambrotta", aliases: ["zambrotta", "gianluca zambrotta", "g. zambrotta"], number: 19, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Juventus", hintInitials: "G. Z." },
      { id: "it06-3", name: "Marco Materazzi", aliases: ["materazzi", "marco materazzi", "m. materazzi"], number: 23, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Inter Milan", hintInitials: "M. M." },
      { id: "it06-4", name: "Fabio Cannavaro", aliases: ["cannavaro", "fabio cannavaro", "f. cannavaro"], number: 5, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Juventus", hintInitials: "F. C." },
      { id: "it06-5", name: "Fabio Grosso", aliases: ["grosso", "fabio grosso", "f. grosso"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Palermo", hintInitials: "F. G." },
      { id: "it06-6", name: "Mauro Camoranesi", aliases: ["camoranesi", "mauro camoranesi", "m. camoranesi"], number: 16, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Juventus", hintInitials: "M. C." },
      { id: "it06-7", name: "Gennaro Gattuso", aliases: ["gattuso", "gennaro gattuso", "g. gattuso"], number: 8, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "AC Milan", hintInitials: "G. G." },
      { id: "it06-8", name: "Andrea Pirlo", aliases: ["pirlo", "andrea pirlo", "a. pirlo"], number: 21, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "AC Milan", hintInitials: "A. P." },
      { id: "it06-9", name: "Simone Perrotta", aliases: ["perrotta", "simone perrotta", "s. perrotta"], number: 20, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "AS Roma", hintInitials: "S. P." },
      { id: "it06-10", name: "Francesco Totti", aliases: ["totti", "francesco totti", "f. totti"], number: 10, position: "MF", positionLabel: "AM", x: 50, y: 30, hintClub: "AS Roma", hintInitials: "F. T." },
      { id: "it06-11", name: "Luca Toni", aliases: ["toni", "luca toni", "l. toni"], number: 9, position: "FW", positionLabel: "ST", x: 50, y: 14, hintClub: "Fiorentina", hintInitials: "L. T." }
    ]
  },
  // 4. SPAIN 2010 (Tiki-Taka Masterpiece)
  {
    id: "spain-2010",
    country: "Spain",
    year: 2010,
    formation: "4-2-3-1",
    jerseyColor: "#E53935",
    numberColor: "#FFD54F",
    trimColor: "#FFD54F",
    squadName: "Tiki-Taka Royalty",
    players: [
      { id: "es10-1", name: "Iker Casillas", aliases: ["casillas", "iker casillas", "i. casillas", "san iker"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 86, hintClub: "Real Madrid", hintInitials: "I. C." },
      { id: "es10-2", name: "Sergio Ramos", aliases: ["ramos", "sergio ramos", "s. ramos"], number: 15, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Real Madrid", hintInitials: "S. R." },
      { id: "es10-3", name: "Gerard Piqué", aliases: ["pique", "gerard pique", "g. pique"], number: 3, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Barcelona", hintInitials: "G. P." },
      { id: "es10-4", name: "Carles Puyol", aliases: ["puyol", "carles puyol", "c. puyol"], number: 5, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Barcelona", hintInitials: "C. P." },
      { id: "es10-5", name: "Joan Capdevila", aliases: ["capdevila", "joan capdevila", "j. capdevila"], number: 11, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Villarreal", hintInitials: "J. C." },
      { id: "es10-6", name: "Sergio Busquets", aliases: ["busquets", "sergio busquets", "s. busquets"], number: 16, position: "MF", positionLabel: "LDM", x: 38, y: 55, hintClub: "Barcelona", hintInitials: "S. B." },
      { id: "es10-7", name: "Xabi Alonso", aliases: ["alonso", "xabi alonso", "x. alonso"], number: 14, position: "MF", positionLabel: "RDM", x: 62, y: 55, hintClub: "Real Madrid", hintInitials: "X. A." },
      { id: "es10-8", name: "Xavi", aliases: ["xavi", "xavi hernandez", "x. hernandez"], number: 8, position: "MF", positionLabel: "AM", x: 50, y: 34, hintClub: "Barcelona", hintInitials: "X." },
      { id: "es10-9", name: "Andrés Iniesta", aliases: ["iniesta", "andres iniesta", "a. iniesta"], number: 6, position: "MF", positionLabel: "LW", x: 20, y: 24, hintClub: "Barcelona", hintInitials: "A. I." },
      { id: "es10-10", name: "Pedro", aliases: ["pedro", "pedro rodriguez", "p. rodriguez"], number: 18, position: "MF", positionLabel: "RW", x: 80, y: 24, hintClub: "Barcelona", hintInitials: "P." },
      { id: "es10-11", name: "David Villa", aliases: ["villa", "david villa", "d. villa"], number: 7, position: "FW", positionLabel: "ST", x: 50, y: 13, hintClub: "Valencia / Barcelona", hintInitials: "D. V." }
    ]
  },
  // 5. ARGENTINA 2022 (Messi's Ultimate Victory)
  {
    id: "argentina-2022",
    country: "Argentina",
    year: 2022,
    formation: "4-3-3",
    jerseyColor: "#74C3FF",
    numberColor: "#000000",
    trimColor: "#FFFFFF",
    squadName: "Champions of the World",
    players: [
      { id: "arg22-1", name: "Emiliano Martínez", aliases: ["martinez", "emiliano martinez", "dibu martinez", "dibu", "e. martinez"], number: 23, position: "GK", positionLabel: "GK", x: 50, y: 86, hintClub: "Aston Villa", hintInitials: "E. M." },
      { id: "arg22-2", name: "Nahuel Molina", aliases: ["molina", "nahuel molina", "n. molina"], number: 26, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Atletico Madrid", hintInitials: "N. M." },
      { id: "arg22-3", name: "Cristian Romero", aliases: ["romero", "cristian romero", "cuti romero", "cuti", "c. romero"], number: 13, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Tottenham", hintInitials: "C. R." },
      { id: "arg22-4", name: "Nicolás Otamendi", aliases: ["otamendi", "nicolas otamendi", "n. otamendi"], number: 19, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Benfica", hintInitials: "N. O." },
      { id: "arg22-5", name: "Nicolás Tagliafico", aliases: ["tagliafico", "nicolas tagliafico", "n. tagliafico"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Lyon", hintInitials: "N. T." },
      { id: "arg22-6", name: "Rodrigo De Paul", aliases: ["de paul", "rodrigo de paul", "r. de paul"], number: 7, position: "MF", positionLabel: "RCM", x: 66, y: 48, hintClub: "Atletico Madrid", hintInitials: "R. D. P." },
      { id: "arg22-7", name: "Enzo Fernández", aliases: ["fernandez", "enzo fernandez", "e. fernandez"], number: 24, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "Benfica", hintInitials: "E. F." },
      { id: "arg22-8", name: "Alexis Mac Allister", aliases: ["mac allister", "alexis mac allister", "a. mac allister"], number: 20, position: "MF", positionLabel: "LCM", x: 34, y: 48, hintClub: "Brighton", hintInitials: "A. M. A." },
      { id: "arg22-9", name: "Lionel Messi", aliases: ["messi", "lionel messi", "l. messi", "leo messi"], number: 10, position: "FW", positionLabel: "RW", x: 80, y: 22, hintClub: "PSG", hintInitials: "L. M." },
      { id: "arg22-10", name: "Ángel Di María", aliases: ["di maria", "angel di maria", "a. di maria"], number: 11, position: "FW", positionLabel: "LW", x: 20, y: 22, hintClub: "Juventus", hintInitials: "A. D. M." },
      { id: "arg22-11", name: "Julián Álvarez", aliases: ["alvarez", "julian alvarez", "j. alvarez", "araña"], number: 9, position: "FW", positionLabel: "ST", x: 50, y: 13, hintClub: "Manchester City", hintInitials: "J. A." }
    ]
  },
  // 6. FRANCE 2018 (The Mbappe & Pogba Generation)
  {
    id: "france-2018",
    country: "France",
    year: 2018,
    formation: "4-2-3-1",
    jerseyColor: "#0D47A1",
    numberColor: "#FFFFFF",
    trimColor: "#E53935",
    squadName: "The Golden Generation Part II",
    players: [
      { id: "fr18-1", name: "Hugo Lloris", aliases: ["lloris", "hugo lloris", "h. lloris"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 86, hintClub: "Tottenham", hintInitials: "H. L." },
      { id: "fr18-2", name: "Benjamin Pavard", aliases: ["pavard", "benjamin pavard", "b. pavard"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Stuttgart", hintInitials: "B. P." },
      { id: "fr18-3", name: "Raphaël Varane", aliases: ["varane", "raphael varane", "r. varane"], number: 4, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Real Madrid", hintInitials: "R. V." },
      { id: "fr18-4", name: "Samuel Umtiti", aliases: ["umtiti", "samuel umtiti", "s. umtiti"], number: 5, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Barcelona", hintInitials: "S. U." },
      { id: "fr18-5", name: "Lucas Hernández", aliases: ["hernandez", "lucas hernandez", "l. hernandez"], number: 21, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Atletico Madrid", hintInitials: "L. H." },
      { id: "fr18-6", name: "Paul Pogba", aliases: ["pogba", "paul pogba", "p. pogba"], number: 6, position: "MF", positionLabel: "RDM", x: 62, y: 55, hintClub: "Manchester United", hintInitials: "P. P." },
      { id: "fr18-7", name: "N'Golo Kanté", aliases: ["kante", "ngolo kante", "n. kante"], number: 13, position: "MF", positionLabel: "LDM", x: 38, y: 55, hintClub: "Chelsea", hintInitials: "N. K." },
      { id: "fr18-8", name: "Kylian Mbappé", aliases: ["mbappe", "kylian mbappe", "k. mbappe", "donatello"], number: 10, position: "MF", positionLabel: "RM", x: 80, y: 30, hintClub: "PSG", hintInitials: "K. M." },
      { id: "fr18-9", name: "Blaise Matuidi", aliases: ["matuidi", "blaise matuidi", "b. matuidi"], number: 14, position: "MF", positionLabel: "LM", x: 20, y: 30, hintClub: "Juventus", hintInitials: "B. M." },
      { id: "fr18-10", name: "Antoine Griezmann", aliases: ["griezmann", "antoine griezmann", "a. griezmann", "grizou"], number: 7, position: "MF", positionLabel: "AM", x: 50, y: 32, hintClub: "Atletico Madrid", hintInitials: "A. G." },
      { id: "fr18-11", name: "Olivier Giroud", aliases: ["giroud", "olivier giroud", "o. giroud"], number: 9, position: "FW", positionLabel: "ST", x: 50, y: 13, hintClub: "Chelsea", hintInitials: "O. G." }
    ]
  },
  // 7. BRAZIL 2002 (The 3 R's: Ronaldo, Rivaldo, Ronaldinho)
  {
    id: "brazil-2002",
    country: "Brazil",
    year: 2002,
    formation: "3-5-2",
    jerseyColor: "#FFEB3B",
    numberColor: "#4CAF50",
    trimColor: "#4CAF50",
    squadName: "The Pentacampeões",
    players: [
      { id: "br02-1", name: "Marcos", aliases: ["marcos", "marcos roberto silveira reis"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 86, hintClub: "Palmeiras", hintInitials: "M." },
      { id: "br02-2", name: "Lúcio", aliases: ["lucio", "lucimar da silva ferreira"], number: 3, position: "DF", positionLabel: "RCB", x: 72, y: 68, hintClub: "Bayer Leverkusen", hintInitials: "L." },
      { id: "br02-3", name: "Edmílson", aliases: ["edmilson", "jose edmilson gomes de souza"], number: 5, position: "DF", positionLabel: "CB", x: 50, y: 74, hintClub: "Lyon", hintInitials: "E." },
      { id: "br02-4", name: "Roque Júnior", aliases: ["roque junior", "roque jr", "roque júnior"], number: 4, position: "DF", positionLabel: "LCB", x: 28, y: 68, hintClub: "AC Milan", hintInitials: "R. J." },
      { id: "br02-5", name: "Cafu", aliases: ["cafu", "marcos evangelista de morais"], number: 2, position: "MF", positionLabel: "RWB", x: 86, y: 50, hintClub: "AS Roma", hintInitials: "C." },
      { id: "br02-6", name: "Gilberto Silva", aliases: ["gilberto silva", "gilberto", "g. silva"], number: 8, position: "MF", positionLabel: "DM", x: 38, y: 54, hintClub: "Atletico Mineiro", hintInitials: "G. S." },
      { id: "br02-7", name: "Kléberson", aliases: ["kleberson", "jose kleberson pereira"], number: 15, position: "MF", positionLabel: "CM", x: 62, y: 54, hintClub: "Athletico Paranaense", hintInitials: "K." },
      { id: "br02-8", name: "Roberto Carlos", aliases: ["roberto carlos", "r. carlos", "rc"], number: 6, position: "MF", positionLabel: "LWB", x: 14, y: 50, hintClub: "Real Madrid", hintInitials: "R. C." },
      { id: "br02-9", name: "Ronaldinho", aliases: ["ronaldinho", "ronaldinho gaucho", "r. gaucho"], number: 11, position: "MF", positionLabel: "AM", x: 34, y: 32, hintClub: "PSG", hintInitials: "R." },
      { id: "br02-10", name: "Rivaldo", aliases: ["rivaldo", "rivaldo vitor borba ferreira"], number: 10, position: "MF", positionLabel: "AM", x: 66, y: 32, hintClub: "Barcelona", hintInitials: "R." },
      { id: "br02-11", name: "Ronaldo", aliases: ["ronaldo", "ronaldo nazario", "r9", "el fenomeno"], number: 9, position: "FW", positionLabel: "ST", x: 50, y: 15, hintClub: "Inter Milan", hintInitials: "R." }
    ]
  },
  // 8. GERMANY 2014 (The 7-1 Demolition Masters)
  {
    id: "germany-2014",
    country: "Germany",
    year: 2014,
    formation: "4-3-3",
    jerseyColor: "#FFFFFF",
    numberColor: "#000000",
    trimColor: "#E53935",
    squadName: "Die Mannschaft Champions",
    players: [
      { id: "de14-1", name: "Manuel Neuer", aliases: ["neuer", "manuel neuer", "m. neuer"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 86, hintClub: "Bayern Munich", hintInitials: "M. N." },
      { id: "de14-2", name: "Philipp Lahm", aliases: ["lahm", "philipp lahm", "p. lahm"], number: 16, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Bayern Munich", hintInitials: "P. L." },
      { id: "de14-3", name: "Jérôme Boateng", aliases: ["boateng", "jerome boateng", "j. boateng"], number: 20, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Bayern Munich", hintInitials: "J. B." },
      { id: "de14-4", name: "Mats Hummels", aliases: ["hummels", "mats hummels", "m. hummels"], number: 5, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Borussia Dortmund", hintInitials: "M. H." },
      { id: "de14-5", name: "Benedikt Höwedes", aliases: ["howedes", "benedikt howedes", "b. howedes"], number: 4, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Schalke 04", hintInitials: "B. H." },
      { id: "de14-6", name: "Bastian Schweinsteiger", aliases: ["schweinsteiger", "bastian schweinsteiger", "b. schweinsteiger"], number: 7, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "Bayern Munich", hintInitials: "B. S." },
      { id: "de14-7", name: "Sami Khedira", aliases: ["khedira", "sami khedira", "s. khedira"], number: 6, position: "MF", positionLabel: "RCM", x: 66, y: 48, hintClub: "Real Madrid", hintInitials: "S. K." },
      { id: "de14-8", name: "Toni Kroos", aliases: ["kroos", "toni kroos", "t. kroos"], number: 18, position: "MF", positionLabel: "LCM", x: 34, y: 48, hintClub: "Bayern Munich", hintInitials: "T. K." },
      { id: "de14-9", name: "Thomas Müller", aliases: ["muller", "thomas muller", "t. muller"], number: 13, position: "FW", positionLabel: "RW", x: 80, y: 22, hintClub: "Bayern Munich", hintInitials: "T. M." },
      { id: "de14-10", name: "Mesut Özil", aliases: ["ozil", "mesut ozil", "m. ozil"], number: 8, position: "FW", positionLabel: "LW", x: 20, y: 22, hintClub: "Arsenal", hintInitials: "M. O." },
      { id: "de14-11", name: "Miroslav Klose", aliases: ["klose", "miroslav klose", "m. klose"], number: 11, position: "FW", positionLabel: "ST", x: 50, y: 13, hintClub: "Lazio", hintInitials: "M. K." }
    ]
  },
  // 9. NETHERLANDS 1974 (Total Football Originators)
  {
    id: "netherlands-1974",
    country: "Netherlands",
    year: 1974,
    formation: "4-3-3",
    jerseyColor: "#FF9800",
    numberColor: "#FFFFFF",
    trimColor: "#000000",
    squadName: "The Clockwork Orange",
    players: [
      { id: "nl74-1", name: "Jan Jongbloed", aliases: ["jongbloed", "jan jongbloed", "j. jongbloed"], number: 8, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "FC Amsterdam", hintInitials: "J. J." },
      { id: "nl74-2", name: "Wim Suurbier", aliases: ["suurbier", "wim suurbier", "w. suurbier"], number: 20, position: "DF", positionLabel: "RB", x: 82, y: 65, hintClub: "Ajax", hintInitials: "W. S." },
      { id: "nl74-3", name: "Wim Rijsbergen", aliases: ["rijsbergen", "wim rijsbergen", "w. rijsbergen"], number: 17, position: "DF", positionLabel: "RCB", x: 60, y: 72, hintClub: "Feyenoord", hintInitials: "W. R." },
      { id: "nl74-4", name: "Arie Haan", aliases: ["haan", "arie haan", "a. haan"], number: 2, position: "DF", positionLabel: "LCB", x: 40, y: 72, hintClub: "Ajax", hintInitials: "A. H." },
      { id: "nl74-5", name: "Ruud Krol", aliases: ["krol", "ruud krol", "r. krol"], number: 12, position: "DF", positionLabel: "LB", x: 18, y: 65, hintClub: "Ajax", hintInitials: "R. K." },
      { id: "nl74-6", name: "Wim Jansen", aliases: ["jansen", "wim jansen", "w. jansen"], number: 6, position: "MF", positionLabel: "DM", x: 50, y: 55, hintClub: "Feyenoord", hintInitials: "W. J." },
      { id: "nl74-7", name: "Johan Neeskens", aliases: ["neeskens", "johan neeskens", "j. neeskens"], number: 13, position: "MF", positionLabel: "RCM", x: 65, y: 44, hintClub: "Ajax", hintInitials: "J. N." },
      { id: "nl74-8", name: "Willem van Hanegem", aliases: ["van hanegem", "willem van hanegem", "w. van hanegem"], number: 3, position: "MF", positionLabel: "LCM", x: 35, y: 44, hintClub: "Feyenoord", hintInitials: "W. v. H." },
      { id: "nl74-9", name: "Johnny Rep", aliases: ["rep", "johnny rep", "j. rep"], number: 16, position: "FW", positionLabel: "RW", x: 80, y: 22, hintClub: "Ajax", hintInitials: "J. R." },
      { id: "nl74-10", name: "Johan Cruyff", aliases: ["cruyff", "johan cruyff", "j. cruyff", "cruijff"], number: 14, position: "FW", positionLabel: "CF", x: 50, y: 15, hintClub: "Barcelona", hintInitials: "J. C." },
      { id: "nl74-11", name: "Rob Rensenbrink", aliases: ["rensenbrink", "rob rensenbrink", "r. rensenbrink"], number: 15, position: "FW", positionLabel: "LW", x: 20, y: 22, hintClub: "Anderlecht", hintInitials: "R. R." }
    ]
  },
  // 10. ENGLAND 1966 (The Wembley Heroes)
  {
    id: "england-1966",
    country: "England",
    year: 1966,
    formation: "4-4-2",
    jerseyColor: "#FFFFFF",
    numberColor: "#E53935",
    trimColor: "#0D47A1",
    squadName: "The Wingless Wonders",
    players: [
      { id: "en66-1", name: "Gordon Banks", aliases: ["banks", "gordon banks", "g. banks"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 86, hintClub: "Leicester City", hintInitials: "G. B." },
      { id: "en66-2", name: "George Cohen", aliases: ["cohen", "george cohen", "g. cohen"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Fulham", hintInitials: "G. C." },
      { id: "en66-3", name: "Jack Charlton", aliases: ["charlton", "jack charlton", "j. charlton"], number: 5, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Leeds United", hintInitials: "J. C." },
      { id: "en66-4", name: "Bobby Moore", aliases: ["moore", "bobby moore", "b. moore"], number: 6, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "West Ham United", hintInitials: "B. M." },
      { id: "en66-5", name: "Ray Wilson", aliases: ["wilson", "ray wilson", "r. wilson"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Everton", hintInitials: "R. W." },
      { id: "en66-6", name: "Nobby Stiles", aliases: ["stiles", "nobby stiles", "n. stiles"], number: 4, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "Manchester United", hintInitials: "N. S." },
      { id: "en66-7", name: "Alan Ball", aliases: ["ball", "alan ball", "a. ball"], number: 7, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Blackpool", hintInitials: "A. B." },
      { id: "en66-8", name: "Bobby Charlton", aliases: ["bobby charlton", "sir bobby charlton", "b. charlton"], number: 9, position: "MF", positionLabel: "AM", x: 50, y: 34, hintClub: "Manchester United", hintInitials: "B. C." },
      { id: "en66-9", name: "Martin Peters", aliases: ["peters", "martin peters", "m. peters"], number: 16, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "West Ham United", hintInitials: "M. P." },
      { id: "en66-10", name: "Roger Hunt", aliases: ["hunt", "roger hunt", "r. hunt"], number: 21, position: "FW", positionLabel: "ST", x: 35, y: 16, hintClub: "Liverpool", hintInitials: "R. H." },
      { id: "en66-11", name: "Geoff Hurst", aliases: ["hurst", "geoff hurst", "g. hurst"], number: 10, position: "FW", positionLabel: "ST", x: 65, y: 16, hintClub: "West Ham United", hintInitials: "G. H." }
    ]
  }
];


const markedSQUADS = SQUADS.map(s => ({ ...s, isIconic: true }));
const markedREAL = REAL_SQUADS.map(s => ({ ...s, isIconic: true }));
export const ALL_SQUADS = [...markedSQUADS, ...markedREAL, ...MORE_SQUADS];
