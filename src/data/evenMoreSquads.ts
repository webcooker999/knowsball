import { Squad } from './squads';

export const EVEN_MORE_SQUADS: Squad[] = [
  // 1. BRAZIL 2014
  {
    id: "brazil-2014",
    country: "Brazil",
    year: 2014,
    formation: "4-2-3-1",
    jerseyColor: "#FFEB3B",
    numberColor: "#0D47A1",
    trimColor: "#4CAF50",
    squadName: "The Seleção Semifinalists",
    isIconic: true,
    players: [
      { id: "br14-1", name: "Júlio César", aliases: ["julio cesar", "j. cesar"], number: 12, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Toronto FC", hintInitials: "J. C." },
      { id: "br14-2", name: "Daniel Alves", aliases: ["dani alves", "daniel alves", "d. alves"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Barcelona", hintInitials: "D. A." },
      { id: "br14-3", name: "Thiago Silva", aliases: ["thiago silva", "t. silva"], number: 3, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Paris Saint-Germain", hintInitials: "T. S." },
      { id: "br14-4", name: "David Luiz", aliases: ["david luiz", "d. luiz"], number: 4, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Chelsea", hintInitials: "D. L." },
      { id: "br14-5", name: "Marcelo", aliases: ["marcelo", "marcelo vieira"], number: 6, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Real Madrid", hintInitials: "M." },
      { id: "br14-6", name: "Fernandinho", aliases: ["fernandinho"], number: 17, position: "MF", positionLabel: "RDM", x: 62, y: 55, hintClub: "Manchester City", hintInitials: "F." },
      { id: "br14-7", name: "Luiz Gustavo", aliases: ["luiz gustavo", "l. gustavo"], number: 17, position: "MF", positionLabel: "LDM", x: 38, y: 55, hintClub: "VfL Wolfsburg", hintInitials: "L. G." },
      { id: "br14-8", name: "Hulk", aliases: ["hulk"], number: 7, position: "FW", positionLabel: "RW", x: 80, y: 35, hintClub: "Zenit Saint Petersburg", hintInitials: "H." },
      { id: "br14-9", name: "Oscar", aliases: ["oscar"], number: 11, position: "MF", positionLabel: "CAM", x: 50, y: 35, hintClub: "Chelsea", hintInitials: "O." },
      { id: "br14-10", name: "Neymar", aliases: ["neymar", "neymar jr", "n. jr"], number: 10, position: "FW", positionLabel: "LW", x: 20, y: 35, hintClub: "Barcelona", hintInitials: "N." },
      { id: "br14-11", name: "Fred", aliases: ["fred"], number: 9, position: "FW", positionLabel: "ST", x: 50, y: 15, hintClub: "Fluminense", hintInitials: "F." }
    ]
  },
  // 2. SPAIN 2018
  {
    id: "spain-2018",
    country: "Spain",
    year: 2018,
    formation: "4-2-3-1",
    jerseyColor: "#D32F2F",
    numberColor: "#FFEB3B",
    trimColor: "#FFEB3B",
    squadName: "La Roja Midfield Heavy",
    isIconic: true,
    players: [
      { id: "es18-1", name: "David de Gea", aliases: ["de gea", "david de gea", "d. de gea"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Manchester United", hintInitials: "D. D. G." },
      { id: "es18-2", name: "Nacho", aliases: ["nacho", "nacho fernandez"], number: 4, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Real Madrid", hintInitials: "N." },
      { id: "es18-3", name: "Gerard Piqué", aliases: ["pique", "gerard pique", "g. pique"], number: 3, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Barcelona", hintInitials: "G. P." },
      { id: "es18-4", name: "Sergio Ramos", aliases: ["ramos", "sergio ramos", "s. ramos"], number: 15, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Real Madrid", hintInitials: "S. R." },
      { id: "es18-5", name: "Jordi Alba", aliases: ["alba", "jordi alba", "j. alba"], number: 18, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Barcelona", hintInitials: "J. A." },
      { id: "es18-6", name: "Sergio Busquets", aliases: ["busquets", "sergio busquets", "s. busquets"], number: 5, position: "MF", positionLabel: "RDM", x: 62, y: 55, hintClub: "Barcelona", hintInitials: "S. B." },
      { id: "es18-7", name: "Koke", aliases: ["koke"], number: 8, position: "MF", positionLabel: "LDM", x: 38, y: 55, hintClub: "Atlético Madrid", hintInitials: "K." },
      { id: "es18-8", name: "David Silva", aliases: ["silva", "david silva", "d. silva"], number: 21, position: "FW", positionLabel: "RW", x: 80, y: 35, hintClub: "Manchester City", hintInitials: "D. S." },
      { id: "es18-9", name: "Isco", aliases: ["isco"], number: 22, position: "MF", positionLabel: "CAM", x: 50, y: 35, hintClub: "Real Madrid", hintInitials: "I." },
      { id: "es18-10", name: "Andrés Iniesta", aliases: ["iniesta", "andres iniesta", "a. iniesta"], number: 6, position: "FW", positionLabel: "LW", x: 20, y: 35, hintClub: "Vissel Kobe", hintInitials: "A. I." },
      { id: "es18-11", name: "Diego Costa", aliases: ["costa", "diego costa", "d. costa"], number: 19, position: "FW", positionLabel: "ST", x: 50, y: 15, hintClub: "Atlético Madrid", hintInitials: "D. C." }
    ]
  },
  // 3. ITALY 1994
  {
    id: "italy-1994",
    country: "Italy",
    year: 1994,
    formation: "4-4-2",
    jerseyColor: "#1E88E5",
    numberColor: "#FFFFFF",
    trimColor: "#FFFFFF",
    squadName: "Gli Azzurri Finalists",
    isIconic: true,
    players: [
      { id: "it94-1", name: "Gianluca Pagliuca", aliases: ["pagliuca", "gianluca pagliuca", "g. pagliuca"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Sampdoria", hintInitials: "G. P." },
      { id: "it94-2", name: "Roberto Mussi", aliases: ["mussi", "roberto mussi", "r. mussi"], number: 8, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Torino", hintInitials: "R. M." },
      { id: "it94-3", name: "Alessandro Costacurta", aliases: ["costacurta", "alessandro costacurta", "a. costacurta"], number: 5, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "AC Milan", hintInitials: "A. C." },
      { id: "it94-4", name: "Franco Baresi", aliases: ["baresi", "franco baresi", "f. baresi"], number: 6, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "AC Milan", hintInitials: "F. B." },
      { id: "it94-5", name: "Paolo Maldini", aliases: ["maldini", "paolo maldini", "p. maldini"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "AC Milan", hintInitials: "P. M." },
      { id: "it94-6", name: "Roberto Donadoni", aliases: ["donadoni", "roberto donadoni", "r. donadoni"], number: 16, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "AC Milan", hintInitials: "R. D." },
      { id: "it94-7", name: "Demetrio Albertini", aliases: ["albertini", "demetrio albertini", "d. albertini"], number: 11, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "AC Milan", hintInitials: "D. A." },
      { id: "it94-8", name: "Dino Baggio", aliases: ["dino baggio", "d. baggio"], number: 13, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Juventus", hintInitials: "D. B." },
      { id: "it94-9", name: "Nicola Berti", aliases: ["berti", "nicola berti", "n. berti"], number: 14, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Inter Milan", hintInitials: "N. B." },
      { id: "it94-10", name: "Roberto Baggio", aliases: ["baggio", "roberto baggio", "r. baggio", "the divine ponytail"], number: 10, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Juventus", hintInitials: "R. B." },
      { id: "it94-11", name: "Daniele Massaro", aliases: ["massaro", "daniele massaro", "d. massaro"], number: 19, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "AC Milan", hintInitials: "D. M." }
    ]
  },
  // 4. ARGENTINA 1994
  {
    id: "argentina-1994",
    country: "Argentina",
    year: 1994,
    formation: "4-4-2",
    jerseyColor: "#80DEEA",
    numberColor: "#000000",
    trimColor: "#FFFFFF",
    squadName: "Diego's Final Dance",
    isIconic: true,
    players: [
      { id: "ar94-1", name: "Luis Islas", aliases: ["islas", "luis islas", "l. islas"], number: 12, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Independiente", hintInitials: "L. I." },
      { id: "ar94-2", name: "Roberto Sensini", aliases: ["sensini", "roberto sensini", "r. sensini"], number: 4, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Parma", hintInitials: "R. S." },
      { id: "ar94-3", name: "Fernando Cáceres", aliases: ["caceres", "fernando caceres", "f. caceres"], number: 2, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Real Zaragoza", hintInitials: "F. C." },
      { id: "ar94-4", name: "Oscar Ruggeri", aliases: ["ruggeri", "oscar ruggeri", "o. ruggeri"], number: 6, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "San Lorenzo", hintInitials: "O. R." },
      { id: "ar94-5", name: "José Chamot", aliases: ["chamot", "jose chamot", "j. chamot"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Foggia", hintInitials: "J. C." },
      { id: "ar94-6", name: "Diego Simeone", aliases: ["simeone", "diego simeone", "d. simeone", "cholo simeone"], number: 8, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Atlético Madrid", hintInitials: "D. S." },
      { id: "ar94-7", name: "Fernando Redondo", aliases: ["redondo", "fernando redondo", "f. redondo"], number: 5, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Tenerife", hintInitials: "F. R." },
      { id: "ar94-8", name: "Diego Maradona", aliases: ["maradona", "diego maradona", "d. maradona", "el diego"], number: 10, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Newell's Old Boys", hintInitials: "D. M." },
      { id: "ar94-9", name: "Ariel Ortega", aliases: ["ortega", "ariel ortega", "a. ortega", "el burrito"], number: 17, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "River Plate", hintInitials: "A. O." },
      { id: "ar94-10", name: "Gabriel Batistuta", aliases: ["batistuta", "gabriel batistuta", "g. batistuta", "batigol"], number: 9, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Fiorentina", hintInitials: "G. B." },
      { id: "ar94-11", name: "Claudio Caniggia", aliases: ["caniggia", "claudio caniggia", "c. caniggia"], number: 7, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Roma", hintInitials: "C. C." }
    ]
  },
  // 5. ARGENTINA 2010
  {
    id: "argentina-2010",
    country: "Argentina",
    year: 2010,
    formation: "4-4-2",
    jerseyColor: "#80DEEA",
    numberColor: "#000000",
    trimColor: "#FFFFFF",
    squadName: "Maradona's Star Studded XI",
    isIconic: true,
    players: [
      { id: "ar10-1", name: "Sergio Romero", aliases: ["romero", "sergio romero", "s. romero"], number: 22, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "AZ Alkmaar", hintInitials: "S. R." },
      { id: "ar10-2", name: "Nicolás Otamendi", aliases: ["otamendi", "nicolas otamendi", "n. otamendi"], number: 15, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Vélez Sarsfield", hintInitials: "N. O." },
      { id: "ar10-3", name: "Martín Demichelis", aliases: ["demichelis", "martin demichelis", "m. demichelis"], number: 2, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Bayern Munich", hintInitials: "M. D." },
      { id: "ar10-4", name: "Walter Samuel", aliases: ["samuel", "walter samuel", "w. samuel"], number: 13, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Inter Milan", hintInitials: "W. S." },
      { id: "ar10-5", name: "Gabriel Heinze", aliases: ["heinze", "gabriel heinze", "g. heinze"], number: 6, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Marseille", hintInitials: "G. H." },
      { id: "ar10-6", name: "Maxi Rodríguez", aliases: ["maxi rodriguez", "m. rodriguez", "rodriguez"], number: 20, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Liverpool", hintInitials: "M. R." },
      { id: "ar10-7", name: "Javier Mascherano", aliases: ["mascherano", "javier mascherano", "j. mascherano"], number: 14, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Liverpool", hintInitials: "J. M." },
      { id: "ar10-8", name: "Ángel Di María", aliases: ["di maria", "angel di maria", "a. di maria"], number: 7, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Benfica", hintInitials: "Á. D. M." },
      { id: "ar10-9", name: "Lionel Messi", aliases: ["messi", "lionel messi", "l. messi", "leo messi"], number: 10, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Barcelona", hintInitials: "L. M." },
      { id: "ar10-10", name: "Gonzalo Higuaín", aliases: ["higuain", "gonzalo higuain", "g. higuain"], number: 9, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Real Madrid", hintInitials: "G. H." },
      { id: "ar10-11", name: "Carlos Tevez", aliases: ["tevez", "carlos tevez", "c. tevez"], number: 11, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Manchester City", hintInitials: "C. T." }
    ]
  },
  // 6. ARGENTINA 2018
  {
    id: "argentina-2018",
    country: "Argentina",
    year: 2018,
    formation: "4-4-2",
    jerseyColor: "#80DEEA",
    numberColor: "#000000",
    trimColor: "#FFFFFF",
    squadName: "The Rollercoaster Sampaoli Era",
    isIconic: true,
    players: [
      { id: "ar18-1", name: "Franco Armani", aliases: ["armani", "franco armani", "f. armani"], number: 12, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "River Plate", hintInitials: "F. A." },
      { id: "ar18-2", name: "Gabriel Mercado", aliases: ["mercado", "gabriel mercado", "g. mercado"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Sevilla", hintInitials: "G. M." },
      { id: "ar18-3", name: "Nicolás Otamendi", aliases: ["otamendi", "nicolas otamendi", "n. otamendi"], number: 17, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Manchester City", hintInitials: "N. O." },
      { id: "ar18-4", name: "Marcos Rojo", aliases: ["rojo", "marcos rojo", "m. rojo"], number: 16, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Manchester United", hintInitials: "M. R." },
      { id: "ar18-5", name: "Nicolás Tagliafico", aliases: ["tagliafico", "nicolas tagliafico", "n. tagliafico"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Ajax", hintInitials: "N. T." },
      { id: "ar18-6", name: "Enzo Pérez", aliases: ["perez", "enzo perez", "e. perez"], number: 15, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "River Plate", hintInitials: "E. P." },
      { id: "ar18-7", name: "Javier Mascherano", aliases: ["mascherano", "javier mascherano", "j. mascherano"], number: 14, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Hebei China Fortune", hintInitials: "J. M." },
      { id: "ar18-8", name: "Éver Banega", aliases: ["banega", "ever banega", "e. banega"], number: 7, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Sevilla", hintInitials: "É. B." },
      { id: "ar18-9", name: "Ángel Di María", aliases: ["di maria", "angel di maria", "a. di maria"], number: 11, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Paris Saint-Germain", hintInitials: "Á. D. M." },
      { id: "ar18-10", name: "Lionel Messi", aliases: ["messi", "lionel messi", "l. messi", "leo messi"], number: 10, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Barcelona", hintInitials: "L. M." },
      { id: "ar18-11", name: "Cristian Pavón", aliases: ["pavon", "cristian pavon", "c. pavon"], number: 22, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Boca Juniors", hintInitials: "C. P." }
    ]
  },
  // 7. FRANCE 1982
  {
    id: "france-1982",
    country: "France",
    year: 1982,
    formation: "4-4-2",
    jerseyColor: "#0D47A1",
    numberColor: "#FFFFFF",
    trimColor: "#D32F2F",
    squadName: "The Carré Magique Generation",
    isIconic: true,
    players: [
      { id: "fr82-1", name: "Jean-Luc Ettori", aliases: ["ettori", "jean-luc ettori", "j. ettori"], number: 22, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Monaco", hintInitials: "J. L. E." },
      { id: "fr82-2", name: "Manuel Amoros", aliases: ["amoros", "manuel amoros", "m. amoros"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Monaco", hintInitials: "M. A." },
      { id: "fr82-3", name: "Marius Trésor", aliases: ["tresor", "marius tresor", "m. tresor"], number: 8, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Bordeaux", hintInitials: "M. T." },
      { id: "fr82-4", name: "Maxime Bossis", aliases: ["bossis", "maxime bossis", "m. bossis"], number: 5, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Nantes", hintInitials: "M. B." },
      { id: "fr82-5", name: "Gérard Janvion", aliases: ["janvion", "gerard janvion", "g. janvion"], number: 4, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Saint-Étienne", hintInitials: "G. J." },
      { id: "fr82-6", name: "Alain Giresse", aliases: ["giresse", "alain giresse", "a. giresse"], number: 12, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Bordeaux", hintInitials: "A. G." },
      { id: "fr82-7", name: "Jean Tigana", aliases: ["tigana", "jean tigana", "j. tigana"], number: 14, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Bordeaux", hintInitials: "J. T." },
      { id: "fr82-8", name: "Michel Platini", aliases: ["platini", "michel platini", "m. platini"], number: 10, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Saint-Étienne", hintInitials: "M. P." },
      { id: "fr82-9", name: "Bernard Genghini", aliases: ["genghini", "bernard genghini", "b. genghini"], number: 9, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Sochaux", hintInitials: "B. G." },
      { id: "fr82-10", name: "Gérard Soler", aliases: ["soler", "gerard soler", "g. soler"], number: 16, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Bordeaux", hintInitials: "G. S." },
      { id: "fr82-11", name: "Didier Six", aliases: ["six", "didier six", "d. six"], number: 20, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "VfB Stuttgart", hintInitials: "D. S." }
    ]
  },
  // 8. FRANCE 1986
  {
    id: "france-1986",
    country: "France",
    year: 1986,
    formation: "4-4-2",
    jerseyColor: "#0D47A1",
    numberColor: "#FFFFFF",
    trimColor: "#D32F2F",
    squadName: "Platini's Masterclass 3rd Place",
    isIconic: true,
    players: [
      { id: "fr86-1", name: "Joël Bats", aliases: ["bats", "joel bats", "j. bats"], number: 19, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Paris Saint-Germain", hintInitials: "J. B." },
      { id: "fr86-2", name: "Manuel Amoros", aliases: ["amoros", "manuel amoros", "m. amoros"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Monaco", hintInitials: "M. A." },
      { id: "fr86-3", name: "Patrick Battiston", aliases: ["battiston", "patrick battiston", "p. battiston"], number: 6, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Bordeaux", hintInitials: "P. B." },
      { id: "fr86-4", name: "Maxime Bossis", aliases: ["bossis", "maxime bossis", "m. bossis"], number: 4, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Racing Paris", hintInitials: "M. B." },
      { id: "fr86-5", name: "Thierry Tusseau", aliases: ["tusseau", "thierry tusseau", "t. tusseau"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Bordeaux", hintInitials: "T. T." },
      { id: "fr86-6", name: "Alain Giresse", aliases: ["giresse", "alain giresse", "a. giresse"], number: 12, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Bordeaux", hintInitials: "A. G." },
      { id: "fr86-7", name: "Jean Tigana", aliases: ["tigana", "jean tigana", "j. tigana"], number: 14, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Bordeaux", hintInitials: "J. T." },
      { id: "fr86-8", name: "Luis Fernandez", aliases: ["fernandez", "luis fernandez", "l. fernandez"], number: 9, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Paris Saint-Germain", hintInitials: "L. F." },
      { id: "fr86-9", name: "Michel Platini", aliases: ["platini", "michel platini", "m. platini"], number: 10, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Juventus", hintInitials: "M. P." },
      { id: "fr86-10", name: "Yannick Stopyra", aliases: ["stopyra", "yannick stopyra", "y. stopyra"], number: 16, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Toulouse", hintInitials: "Y. S." },
      { id: "fr86-11", name: "Jean-Pierre Papin", aliases: ["papin", "jean-pierre papin", "j. p. papin", "jpp"], number: 17, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Club Brugge", hintInitials: "J. P. P." }
    ]
  },
  // 9. FRANCE 2002
  {
    id: "france-2002",
    country: "France",
    year: 2002,
    formation: "4-2-3-1",
    jerseyColor: "#0D47A1",
    numberColor: "#FFFFFF",
    trimColor: "#D32F2F",
    squadName: "The Shock Group Stage Exit",
    isIconic: true,
    players: [
      { id: "fr02-1", name: "Fabien Barthez", aliases: ["barthez", "fabien barthez", "f. barthez"], number: 16, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Manchester United", hintInitials: "F. B." },
      { id: "fr02-2", name: "Lilian Thuram", aliases: ["thuram", "lilian thuram", "l. thuram"], number: 15, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Juventus", hintInitials: "L. T." },
      { id: "fr02-3", name: "Frank Leboeuf", aliases: ["leboeuf", "frank leboeuf", "f. leboeuf"], number: 18, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Chelsea", hintInitials: "F. L." },
      { id: "fr02-4", name: "Marcel Desailly", aliases: ["desailly", "marcel desailly", "m. desailly"], number: 8, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Chelsea", hintInitials: "M. D." },
      { id: "fr02-5", name: "Bixente Lizarazu", aliases: ["lizarazu", "bixente lizarazu", "b. lizarazu"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Bayern Munich", hintInitials: "B. L." },
      { id: "fr02-6", name: "Patrick Vieira", aliases: ["vieira", "patrick vieira", "p. vieira"], number: 4, position: "MF", positionLabel: "RDM", x: 62, y: 55, hintClub: "Arsenal", hintInitials: "P. V." },
      { id: "fr02-7", name: "Emmanuel Petit", aliases: ["petit", "emmanuel petit", "e. petit"], number: 17, position: "MF", positionLabel: "LDM", x: 38, y: 55, hintClub: "Chelsea", hintInitials: "E. P." },
      { id: "fr02-8", name: "Sylvain Wiltord", aliases: ["wiltord", "sylvain wiltord", "s. wiltord"], number: 11, position: "FW", positionLabel: "RW", x: 80, y: 35, hintClub: "Arsenal", hintInitials: "S. W." },
      { id: "fr02-9", name: "Youri Djorkaeff", aliases: ["djorkaeff", "youri djorkaeff", "y. djorkaeff"], number: 6, position: "MF", positionLabel: "CAM", x: 50, y: 35, hintClub: "Bolton Wanderers", hintInitials: "Y. D." },
      { id: "fr02-10", name: "Thierry Henry", aliases: ["henry", "thierry henry", "t. henry"], number: 12, position: "FW", positionLabel: "LW", x: 20, y: 35, hintClub: "Arsenal", hintInitials: "T. H." },
      { id: "fr02-11", name: "David Trezeguet", aliases: ["trezeguet", "david trezeguet", "d. trezeguet"], number: 20, position: "FW", positionLabel: "ST", x: 50, y: 15, hintClub: "Juventus", hintInitials: "D. T." }
    ]
  },
  // 10. FRANCE 2014
  {
    id: "france-2014",
    country: "France",
    year: 2014,
    formation: "4-3-3",
    jerseyColor: "#0F2042",
    numberColor: "#FFFFFF",
    trimColor: "#FFFFFF",
    squadName: "The Quarterfinal Core",
    isIconic: true,
    players: [
      { id: "fr14-1", name: "Hugo Lloris", aliases: ["lloris", "hugo lloris", "h. lloris"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Tottenham Hotspur", hintInitials: "H. L." },
      { id: "fr14-2", name: "Mathieu Debuchy", aliases: ["debuchy", "mathieu debuchy", "m. debuchy"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Newcastle United", hintInitials: "M. D." },
      { id: "fr14-3", name: "Raphaël Varane", aliases: ["varane", "raphael varane", "r. varane"], number: 4, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Real Madrid", hintInitials: "R. V." },
      { id: "fr14-4", name: "Mamadou Sakho", aliases: ["sakho", "mamadou sakho", "m. sakho"], number: 5, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Liverpool", hintInitials: "M. S." },
      { id: "fr14-5", name: "Patrice Evra", aliases: ["evra", "patrice evra", "p. evra"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Manchester United", hintInitials: "P. E." },
      { id: "fr14-6", name: "Yohan Cabaye", aliases: ["cabaye", "yohan cabaye", "y. cabaye"], number: 6, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "Paris Saint-Germain", hintInitials: "Y. C." },
      { id: "fr14-7", name: "Paul Pogba", aliases: ["pogba", "paul pogba", "p. pogba"], number: 19, position: "MF", positionLabel: "RCM", x: 66, y: 48, hintClub: "Juventus", hintInitials: "P. P." },
      { id: "fr14-8", name: "Blaise Matuidi", aliases: ["matuidi", "blaise matuidi", "b. matuidi"], number: 14, position: "MF", positionLabel: "LCM", x: 34, y: 48, hintClub: "Paris Saint-Germain", hintInitials: "B. M." },
      { id: "fr14-9", name: "Mathieu Valbuena", aliases: ["valbuena", "mathieu valbuena", "m. valbuena"], number: 8, position: "FW", positionLabel: "RW", x: 80, y: 22, hintClub: "Marseille", hintInitials: "M. V." },
      { id: "fr14-10", name: "Karim Benzema", aliases: ["benzema", "karim benzema", "k. benzema"], number: 10, position: "FW", positionLabel: "ST", x: 50, y: 13, hintClub: "Real Madrid", hintInitials: "K. B." },
      { id: "fr14-11", name: "Antoine Griezmann", aliases: ["griezmann", "antoine griezmann", "a. griezmann"], number: 11, position: "FW", positionLabel: "LW", x: 20, y: 22, hintClub: "Real Sociedad", hintInitials: "A. G." }
    ]
  },
  // 11. ITALY 2002
  {
    id: "italy-2002",
    country: "Italy",
    year: 2002,
    formation: "4-4-2",
    jerseyColor: "#1E88E5",
    numberColor: "#FFFFFF",
    trimColor: "#FFFFFF",
    squadName: "Totti-Vieri Heartbreak",
    isIconic: true,
    players: [
      { id: "it02-1", name: "Gianluigi Buffon", aliases: ["buffon", "gianluigi buffon", "g. buffon", "gigi buffon"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Juventus", hintInitials: "G. B." },
      { id: "it02-2", name: "Christian Panucci", aliases: ["panucci", "christian panucci", "c. panucci"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Roma", hintInitials: "C. P." },
      { id: "it02-3", name: "Alessandro Nesta", aliases: ["nesta", "alessandro nesta", "a. nesta"], number: 13, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Lazio", hintInitials: "A. N." },
      { id: "it02-4", name: "Fabio Cannavaro", aliases: ["cannavaro", "fabio cannavaro", "f. cannavaro"], number: 5, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Parma", hintInitials: "F. C." },
      { id: "it02-5", name: "Paolo Maldini", aliases: ["maldini", "paolo maldini", "p. maldini"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "AC Milan", hintInitials: "P. M." },
      { id: "it02-6", name: "Gianluca Zambrotta", aliases: ["zambrotta", "gianluca zambrotta", "g. zambrotta"], number: 19, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Juventus", hintInitials: "G. Z." },
      { id: "it02-7", name: "Cristiano Zanetti", aliases: ["zanetti", "cristiano zanetti", "c. zanetti"], number: 17, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Inter Milan", hintInitials: "C. Z." },
      { id: "it02-8", name: "Damiano Tommasi", aliases: ["tommasi", "damiano tommasi", "d. tommasi"], number: 8, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Roma", hintInitials: "D. T." },
      { id: "it02-9", name: "Cristiano Doni", aliases: ["doni", "cristiano doni", "c. doni"], number: 11, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Atalanta", hintInitials: "C. D." },
      { id: "it02-10", name: "Francesco Totti", aliases: ["totti", "francesco totti", "f. totti"], number: 10, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Roma", hintInitials: "F. T." },
      { id: "it02-11", name: "Christian Vieri", aliases: ["vieri", "christian vieri", "c. vieri", "bobo vieri"], number: 21, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Inter Milan", hintInitials: "C. V." }
    ]
  },
  // 12. ITALY 1998
  {
    id: "italy-1998",
    country: "Italy",
    year: 1998,
    formation: "4-4-2",
    jerseyColor: "#1E88E5",
    numberColor: "#FFFFFF",
    trimColor: "#FFFFFF",
    squadName: "Maldini-Baggio Quarterfinal Shootout",
    isIconic: true,
    players: [
      { id: "it98-1", name: "Gianluca Pagliuca", aliases: ["pagliuca", "gianluca pagliuca", "g. pagliuca"], number: 12, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Inter Milan", hintInitials: "G. P." },
      { id: "it98-2", name: "Francesco Moriero", aliases: ["moriero", "francesco moriero", "f. moriero"], number: 17, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Inter Milan", hintInitials: "F. M." },
      { id: "it98-3", name: "Alessandro Costacurta", aliases: ["costacurta", "alessandro costacurta", "a. costacurta"], number: 5, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "AC Milan", hintInitials: "A. C." },
      { id: "it98-4", name: "Fabio Cannavaro", aliases: ["cannavaro", "fabio cannavaro", "f. cannavaro"], number: 5, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Parma", hintInitials: "F. C." },
      { id: "it98-5", name: "Paolo Maldini", aliases: ["maldini", "paolo maldini", "p. maldini"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "AC Milan", hintInitials: "P. M." },
      { id: "it98-6", name: "Giuseppe Bergomi", aliases: ["bergomi", "giuseppe bergomi", "g. bergomi"], number: 2, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Inter Milan", hintInitials: "G. B." },
      { id: "it98-7", name: "Demetrio Albertini", aliases: ["albertini", "demetrio albertini", "d. albertini"], number: 9, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "AC Milan", hintInitials: "D. A." },
      { id: "it98-8", name: "Luigi Di Biagio", aliases: ["di biagio", "luigi di biagio", "l. di biagio"], number: 14, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Roma", hintInitials: "L. D. B." },
      { id: "it98-9", name: "Gianluca Pessotto", aliases: ["pessotto", "gianluca pessotto", "g. pessotto"], number: 7, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Juventus", hintInitials: "G. P." },
      { id: "it98-10", name: "Christian Vieri", aliases: ["vieri", "christian vieri", "c. vieri"], number: 21, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Atlético Madrid", hintInitials: "C. V." },
      { id: "it98-11", name: "Alessandro Del Piero", aliases: ["del piero", "alessandro del piero", "a. del piero"], number: 10, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Juventus", hintInitials: "A. D. P." }
    ]
  },
  // 13. GERMANY 1994
  {
    id: "germany-1994",
    country: "Germany",
    year: 1994,
    formation: "5-3-2",
    jerseyColor: "#FFFFFF",
    numberColor: "#000000",
    trimColor: "#000000",
    squadName: "The Title Defenders Fall",
    isIconic: true,
    players: [
      { id: "de94-1", name: "Bodo Illgner", aliases: ["illgner", "bodo illgner", "b. illgner"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "1. FC Köln", hintInitials: "B. I." },
      { id: "de94-2", name: "Thomas Berthold", aliases: ["berthold", "thomas berthold", "t. berthold"], number: 14, position: "DF", positionLabel: "RWB", x: 85, y: 65, hintClub: "VfB Stuttgart", hintInitials: "TB" },
      { id: "de94-3", name: "Jürgen Kohler", aliases: ["kohler", "jurgen kohler", "j. kohler"], number: 4, position: "DF", positionLabel: "RCB", x: 65, y: 70, hintClub: "Juventus", hintInitials: "J. K." },
      { id: "de94-4", name: "Lothar Matthäus", aliases: ["matthaus", "lothar matthaeus", "lothar matthaus", "l. matthaus"], number: 10, position: "DF", positionLabel: "SW", x: 50, y: 75, hintClub: "Bayern Munich", hintInitials: "L. M." },
      { id: "de94-5", name: "Thomas Helmer", aliases: ["helmer", "thomas helmer", "t. helmer"], number: 5, position: "DF", positionLabel: "LCB", x: 35, y: 70, hintClub: "Bayern Munich", hintInitials: "T. H." },
      { id: "de94-6", name: "Martin Wagner", aliases: ["wagner", "martin wagner", "m. wagner"], number: 17, position: "DF", positionLabel: "LWB", x: 15, y: 65, hintClub: "1. FC Kaiserslautern", hintInitials: "M. W." },
      { id: "de94-7", name: "Thomas Häßler", aliases: ["hassler", "thomas hassler", "t. hassler", "häßler"], number: 8, position: "MF", positionLabel: "RCM", x: 65, y: 48, hintClub: "Roma", hintInitials: "T. H." },
      { id: "de94-8", name: "Stefan Effenberg", aliases: ["effenberg", "stefan effenberg", "s. effenberg"], number: 20, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "Fiorentina", hintInitials: "S. E." },
      { id: "de94-9", name: "Andreas Möller", aliases: ["moller", "andreas moeller", "andreas möller", "a. möller"], number: 7, position: "MF", positionLabel: "LCM", x: 35, y: 48, hintClub: "Juventus", hintInitials: "A. M." },
      { id: "de94-10", name: "Jürgen Klinsmann", aliases: ["klinsmann", "jurgen klinsmann", "j. klinsmann"], number: 18, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Monaco", hintInitials: "J. K." },
      { id: "de94-11", name: "Rudi Völler", aliases: ["voller", "rudi voeller", "rudi völler", "r. völler"], number: 9, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Marseille", hintInitials: "R. V." }
    ]
  },
  // 14. GERMANY 1998
  {
    id: "germany-1998",
    country: "Germany",
    year: 1998,
    formation: "5-3-2",
    jerseyColor: "#FFFFFF",
    numberColor: "#000000",
    trimColor: "#000000",
    squadName: "The Veteran German Exit",
    isIconic: true,
    players: [
      { id: "de98-1", name: "Andreas Köpke", aliases: ["kopke", "andreas koepke", "andreas köpke", "a. köpke"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Marseille", hintInitials: "A. K." },
      { id: "de98-2", name: "Christian Wörns", aliases: ["woerns", "christian woerns", "christian wörns", "c. wörns"], number: 2, position: "DF", positionLabel: "RWB", x: 85, y: 65, hintClub: "Bayer Leverkusen", hintInitials: "C. W." },
      { id: "de98-3", name: "Jürgen Kohler", aliases: ["kohler", "jurgen kohler", "j. kohler"], number: 4, position: "DF", positionLabel: "RCB", x: 65, y: 70, hintClub: "Borussia Dortmund", hintInitials: "J. K." },
      { id: "de98-4", name: "Lothar Matthäus", aliases: ["matthaus", "lothar matthaeus", "lothar matthaus", "l. matthaus"], number: 8, position: "DF", positionLabel: "SW", x: 50, y: 75, hintClub: "Bayern Munich", hintInitials: "L. M." },
      { id: "de98-5", name: "Olaf Thon", aliases: ["thon", "olaf thon", "o. thon"], number: 6, position: "DF", positionLabel: "LCB", x: 35, y: 70, hintClub: "Schalke 04", hintInitials: "O. T." },
      { id: "de98-6", name: "Michael Tarnat", aliases: ["tarnat", "michael tarnat", "m. tarnat"], number: 17, position: "DF", positionLabel: "LWB", x: 15, y: 65, hintClub: "Bayern Munich", hintInitials: "M. T." },
      { id: "de98-7", name: "Thomas Häßler", aliases: ["hassler", "thomas hassler", "t. hassler", "häßler"], number: 10, position: "MF", positionLabel: "RCM", x: 65, y: 48, hintClub: "Karlsruher SC", hintInitials: "T. H." },
      { id: "de98-8", name: "Jens Jeremies", aliases: ["jeremies", "jens jeremies", "j. jeremies"], number: 16, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "1. FC Köln", hintInitials: "J. J." },
      { id: "de98-9", name: "Dietmar Hamann", aliases: ["hamann", "dietmar hamann", "d. hamann"], number: 13, position: "MF", positionLabel: "LCM", x: 35, y: 48, hintClub: "Bayern Munich", hintInitials: "D. H." },
      { id: "de98-10", name: "Jürgen Klinsmann", aliases: ["klinsmann", "jurgen klinsmann", "j. klinsmann"], number: 18, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Tottenham Hotspur", hintInitials: "J. K." },
      { id: "de98-11", name: "Oliver Bierhoff", aliases: ["bierhoff", "oliver bierhoff", "o. bierhoff"], number: 20, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Udinese", hintInitials: "O. B." }
    ]
  },
  // 15. GERMANY 2018
  {
    id: "germany-2018",
    country: "Germany",
    year: 2018,
    formation: "4-2-3-1",
    jerseyColor: "#FFFFFF",
    numberColor: "#000000",
    trimColor: "#000000",
    squadName: "The Kazan Nightmare",
    isIconic: true,
    players: [
      { id: "de18-1", name: "Manuel Neuer", aliases: ["neuer", "manuel neuer", "m. neuer"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Bayern Munich", hintInitials: "M. N." },
      { id: "de18-2", name: "Joshua Kimmich", aliases: ["kimmich", "joshua kimmich", "j. kimmich"], number: 18, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Bayern Munich", hintInitials: "J. K." },
      { id: "de18-3", name: "Jérôme Boateng", aliases: ["boateng", "jerome boateng", "j. boateng"], number: 17, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Bayern Munich", hintInitials: "J. B." },
      { id: "de18-4", name: "Mats Hummels", aliases: ["hummels", "mats hummels", "m. hummels"], number: 5, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Bayern Munich", hintInitials: "M. H." },
      { id: "de18-5", name: "Jonas Hector", aliases: ["hector", "jonas hector", "j. hector"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "1. FC Köln", hintInitials: "J. H." },
      { id: "de18-6", name: "Sami Khedira", aliases: ["khedira", "sami khedira", "s. khedira"], number: 6, position: "MF", positionLabel: "RDM", x: 62, y: 55, hintClub: "Juventus", hintInitials: "S. K." },
      { id: "de18-7", name: "Toni Kroos", aliases: ["kroos", "toni kroos", "t. kroos"], number: 8, position: "MF", positionLabel: "LDM", x: 38, y: 55, hintClub: "Real Madrid", hintInitials: "T. K." },
      { id: "de18-8", name: "Thomas Müller", aliases: ["muller", "thomas muller", "thomas müller", "t. müller"], number: 13, position: "FW", positionLabel: "RW", x: 80, y: 35, hintClub: "Bayern Munich", hintInitials: "T. M." },
      { id: "de18-9", name: "Mesut Özil", aliases: ["ozil", "mesut ozil", "mesut özil", "m. özil"], number: 10, position: "MF", positionLabel: "CAM", x: 50, y: 35, hintClub: "Arsenal", hintInitials: "M. Ö." },
      { id: "de18-10", name: "Marco Reus", aliases: ["reus", "marco reus", "m. reus"], number: 11, position: "FW", positionLabel: "LW", x: 20, y: 35, hintClub: "Borussia Dortmund", hintInitials: "M. R." },
      { id: "de18-11", name: "Timo Werner", aliases: ["werner", "timo werner", "t. werner"], number: 9, position: "FW", positionLabel: "ST", x: 50, y: 15, hintClub: "RB Leipzig", hintInitials: "T. W." }
    ]
  },
  // 16. SPAIN 1994
  {
    id: "spain-1994",
    country: "Spain",
    year: 1994,
    formation: "5-3-2",
    jerseyColor: "#C62828",
    numberColor: "#FFEB3B",
    trimColor: "#FFEB3B",
    squadName: "Quarterfinal Core under Clemente",
    isIconic: true,
    players: [
      { id: "es94-1", name: "Andoni Zubizarreta", aliases: ["zubizarreta", "andoni zubizarreta", "a. zubizarreta"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Barcelona", hintInitials: "A. Z." },
      { id: "es94-2", name: "Albert Ferrer", aliases: ["ferrer", "albert ferrer", "a. ferrer"], number: 2, position: "DF", positionLabel: "RWB", x: 85, y: 65, hintClub: "Barcelona", hintInitials: "A. F." },
      { id: "es94-3", name: "Miguel Ángel Nadal", aliases: ["nadal", "miguel angel nadal", "m. a. nadal"], number: 20, position: "DF", positionLabel: "RCB", x: 65, y: 70, hintClub: "Barcelona", hintInitials: "M. A. N." },
      { id: "es94-4", name: "Fernando Hierro", aliases: ["hierro", "fernando hierro", "f. hierro"], number: 4, position: "DF", positionLabel: "SW", x: 50, y: 75, hintClub: "Real Madrid", hintInitials: "F. H." },
      { id: "es94-5", name: "Abelardo Fernández", aliases: ["abelardo", "abelardo fernandez", "a. fernandez"], number: 18, position: "DF", positionLabel: "LCB", x: 35, y: 70, hintClub: "Sporting Gijón", hintInitials: "A. F." },
      { id: "es94-6", name: "Sergi Barjuán", aliases: ["sergi", "sergi barjuan", "s. barjuan"], number: 12, position: "DF", positionLabel: "LWB", x: 15, y: 65, hintClub: "Barcelona", hintInitials: "S. B." },
      { id: "es94-7", name: "José Mari Bakero", aliases: ["bakero", "jose mari bakero", "j. m. bakero"], number: 15, position: "MF", positionLabel: "RCM", x: 65, y: 48, hintClub: "Barcelona", hintInitials: "J. M. B." },
      { id: "es94-8", name: "Pep Guardiola", aliases: ["guardiola", "pep guardiola", "josep guardiola", "p. guardiola"], number: 9, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "Barcelona", hintInitials: "P. G." },
      { id: "es94-9", name: "José Luis Caminero", aliases: ["caminero", "jose luis caminero", "j. l. caminero"], number: 21, position: "MF", positionLabel: "LCM", x: 35, y: 48, hintClub: "Atlético Madrid", hintInitials: "J. L. C." },
      { id: "es94-10", name: "Luis Enrique", aliases: ["luis enrique", "l. enrique"], number: 7, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Real Madrid", hintInitials: "L. E." },
      { id: "es94-11", name: "Julio Salinas", aliases: ["salinas", "julio salinas", "j. salinas"], number: 19, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Barcelona", hintInitials: "J. S." }
    ]
  },
  // 17. SPAIN 2002
  {
    id: "spain-2002",
    country: "Spain",
    year: 2002,
    formation: "4-4-2",
    jerseyColor: "#C62828",
    numberColor: "#FFEB3B",
    trimColor: "#FFEB3B",
    squadName: "The Controversial South Korea Exit",
    isIconic: true,
    players: [
      { id: "es02-1", name: "Iker Casillas", aliases: ["casillas", "iker casillas", "i. casillas"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Real Madrid", hintInitials: "I. C." },
      { id: "es02-2", name: "Carles Puyol", aliases: ["puyol", "carles puyol", "c. puyol"], number: 5, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Barcelona", hintInitials: "C. P." },
      { id: "es02-3", name: "Fernando Hierro", aliases: ["hierro", "fernando hierro", "f. hierro"], number: 6, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Real Madrid", hintInitials: "F. H." },
      { id: "es02-4", name: "Iván Helguera", aliases: ["helguera", "ivan helguera", "i. helguera"], number: 4, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Real Madrid", hintInitials: "I. H." },
      { id: "es02-5", name: "Juanfran García", aliases: ["juanfran", "juanfran garcia", "j. garcia"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Celta Vigo", hintInitials: "J. G." },
      { id: "es02-6", name: "Joaquín", aliases: ["joaquin", "joaquin sanchez"], number: 22, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Real Betis", hintInitials: "J." },
      { id: "es02-7", name: "Rubén Baraja", aliases: ["baraja", "ruben baraja", "r. baraja"], number: 8, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Valencia", hintInitials: "R. B." },
      { id: "es02-8", name: "Juan Carlos Valerón", aliases: ["valeron", "juan carlos valeron", "j. c. valeron"], number: 17, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Deportivo La Coruña", hintInitials: "J. C. V." },
      { id: "es02-9", name: "Francisco De Pedro", aliases: ["de pedro", "javier de pedro", "j. de pedro"], number: 11, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Real Sociedad", hintInitials: "F. D. P." },
      { id: "es02-10", name: "Fernando Morientes", aliases: ["morientes", "fernando morientes", "f. morientes"], number: 9, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Real Madrid", hintInitials: "F. M." },
      { id: "es02-11", name: "Raúl González", aliases: ["raul", "raul gonzalez", "r. gonzalez"], number: 7, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Real Madrid", hintInitials: "R. G." }
    ]
  },
  // 18. SPAIN 2022
  {
    id: "spain-2022",
    country: "Spain",
    year: 2022,
    formation: "4-3-3",
    jerseyColor: "#C62828",
    numberColor: "#FFEB3B",
    trimColor: "#FFEB3B",
    squadName: "The Tiki Taka Passing Record Exit",
    isIconic: true,
    players: [
      { id: "es22-1", name: "Unai Simón", aliases: ["simon", "unai simon", "u. simon"], number: 23, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Athletic Bilbao", hintInitials: "U. S." },
      { id: "es22-2", name: "Marcos Llorente", aliases: ["llorente", "marcos llorente", "m. llorente"], number: 6, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Atlético Madrid", hintInitials: "M. L." },
      { id: "es22-3", name: "Rodri", aliases: ["rodri", "rodrigo", "rodrigo hernandez"], number: 16, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Manchester City", hintInitials: "R." },
      { id: "es22-4", name: "Aymeric Laporte", aliases: ["laporte", "aymeric laporte", "a. laporte"], number: 24, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Manchester City", hintInitials: "A. L." },
      { id: "es22-5", name: "Jordi Alba", aliases: ["alba", "jordi alba", "j. alba"], number: 18, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Barcelona", hintInitials: "J. A." },
      { id: "es22-6", name: "Sergio Busquets", aliases: ["busquets", "sergio busquets", "s. busquets"], number: 5, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "Barcelona", hintInitials: "S. B." },
      { id: "es22-7", name: "Gavi", aliases: ["gavi", "pablo martin paez gavira"], number: 9, position: "MF", positionLabel: "RCM", x: 66, y: 48, hintClub: "Barcelona", hintInitials: "G." },
      { id: "es22-8", name: "Pedri", aliases: ["pedri", "pedro gonzalez lopez"], number: 26, position: "MF", positionLabel: "LCM", x: 34, y: 48, hintClub: "Barcelona", hintInitials: "P." },
      { id: "es22-9", name: "Ferran Torres", aliases: ["torres", "ferran torres", "f. torres"], number: 11, position: "FW", positionLabel: "RW", x: 80, y: 22, hintClub: "Barcelona", hintInitials: "F. T." },
      { id: "es22-10", name: "Marco Asensio", aliases: ["asensio", "marco asensio", "m. asensio"], number: 10, position: "FW", positionLabel: "ST", x: 50, y: 13, hintClub: "Real Madrid", hintInitials: "M. A." },
      { id: "es22-11", name: "Dani Olmo", aliases: ["olmo", "dani olmo", "d. olmo"], number: 21, position: "FW", positionLabel: "LW", x: 20, y: 22, hintClub: "RB Leipzig", hintInitials: "D. O." }
    ]
  },
  // 19. NETHERLANDS 1978
  {
    id: "netherlands-1978",
    country: "Netherlands",
    year: 1978,
    formation: "4-3-3",
    jerseyColor: "#FF6D00",
    numberColor: "#FFFFFF",
    trimColor: "#000000",
    squadName: "The Second Star Finalists",
    isIconic: true,
    players: [
      { id: "nl78-1", name: "Jan Jongbloed", aliases: ["jongbloed", "jan jongbloed", "j. jongbloed"], number: 8, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Roda JC", hintInitials: "J. J." },
      { id: "nl78-2", name: "Wim Suurbier", aliases: ["suurbier", "wim suurbier", "w. suurbier"], number: 20, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Schalke 04", hintInitials: "W. S." },
      { id: "nl78-3", name: "Ruud Krol", aliases: ["krol", "ruud krol", "r. krol"], number: 5, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Ajax", hintInitials: "R. K." },
      { id: "nl78-4", name: "Ernie Brandts", aliases: ["brandts", "ernie brandts", "e. brandts"], number: 22, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "PSV Eindhoven", hintInitials: "E. B." },
      { id: "nl78-5", name: "Jan Poortvliet", aliases: ["poortvliet", "jan poortvliet", "j. poortvliet"], number: 15, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "PSV Eindhoven", hintInitials: "J. P." },
      { id: "nl78-6", name: "Willy van de Kerkhof", aliases: ["willy van de kerkhof", "w. van de kerkhof"], number: 11, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "PSV Eindhoven", hintInitials: "W. V. D. K." },
      { id: "nl78-7", name: "Arie Haan", aliases: ["haan", "arie haan", "a. haan"], number: 2, position: "MF", positionLabel: "RCM", x: 66, y: 48, hintClub: "Anderlecht", hintInitials: "A. H." },
      { id: "nl78-8", name: "Johan Neeskens", aliases: ["neeskens", "johan neeskens", "j. neeskens"], number: 13, position: "MF", positionLabel: "LCM", x: 34, y: 48, hintClub: "Barcelona", hintInitials: "J. N." },
      { id: "nl78-9", name: "René van de Kerkhof", aliases: ["rene van de kerkhof", "r. van de kerkhof"], number: 10, position: "FW", positionLabel: "RW", x: 80, y: 22, hintClub: "PSV Eindhoven", hintInitials: "R. V. D. K." },
      { id: "nl78-10", name: "Johnny Rep", aliases: ["rep", "johnny rep", "j. rep"], number: 16, position: "FW", positionLabel: "ST", x: 50, y: 13, hintClub: "Bastia", hintInitials: "J. R." },
      { id: "nl78-11", name: "Rob Rensenbrink", aliases: ["rensenbrink", "rob rensenbrink", "r. rensenbrink"], number: 12, position: "FW", positionLabel: "LW", x: 20, y: 22, hintClub: "Anderlecht", hintInitials: "R. R." }
    ]
  },
  // 20. NETHERLANDS 1990
  {
    id: "netherlands-1990",
    country: "Netherlands",
    year: 1990,
    formation: "4-4-2",
    jerseyColor: "#FF6D00",
    numberColor: "#FFFFFF",
    trimColor: "#000000",
    squadName: "The Milan Trio Generation Falls",
    isIconic: true,
    players: [
      { id: "nl90-1", name: "Hans van Breukelen", aliases: ["van breukelen", "hans van breukelen", "h. van breukelen"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "PSV Eindhoven", hintInitials: "H. V. B." },
      { id: "nl90-2", name: "Berry van Aerle", aliases: ["van aerle", "berry van aerle", "b. van aerle"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "PSV Eindhoven", hintInitials: "B. V. A." },
      { id: "nl90-3", name: "Ronald Koeman", aliases: ["koeman", "ronald koeman", "r. koeman"], number: 4, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Barcelona", hintInitials: "R. K." },
      { id: "nl90-4", name: "Adri van Tiggelen", aliases: ["van tiggelen", "adri van tiggelen", "a. van tiggelen"], number: 5, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Anderlecht", hintInitials: "A. V. T." },
      { id: "nl90-5", name: "Frank Rijkaard", aliases: ["rijkaard", "frank rijkaard", "f. rijkaard"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "AC Milan", hintInitials: "F. R." },
      { id: "nl90-6", name: "Jan Wouters", aliases: ["wouters", "jan wouters", "j. wouters"], number: 6, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Ajax", hintInitials: "J. W." },
      { id: "nl90-7", name: "Aron Winter", aliases: ["winter", "aron winter", "a. winter"], number: 20, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Ajax", hintInitials: "A. W." },
      { id: "nl90-8", name: "Richard Witschge", aliases: ["witschge", "richard witschge", "r. witschge"], number: 11, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Ajax", hintInitials: "R. W." },
      { id: "nl90-9", name: "Ruud Gullit", aliases: ["gullit", "ruud gullit", "r. gullit"], number: 10, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "AC Milan", hintInitials: "R. G." },
      { id: "nl90-10", name: "Marco van Basten", aliases: ["van basten", "marco van basten", "m. van basten"], number: 9, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "AC Milan", hintInitials: "M. V. B." },
      { id: "nl90-11", name: "Hans Gillhaus", aliases: ["gillhaus", "hans gillhaus", "h. gillhaus"], number: 14, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Aberdeen", hintInitials: "H. G." }
    ]
  },
  // 21. ENGLAND 1982
  {
    id: "england-1982",
    country: "England",
    year: 1982,
    formation: "4-4-2",
    jerseyColor: "#FFFFFF",
    numberColor: "#0D47A1",
    trimColor: "#D32F2F",
    squadName: "The Unbeaten Second Round Exit",
    isIconic: true,
    players: [
      { id: "en82-1", name: "Peter Shilton", aliases: ["shilton", "peter shilton", "p. shilton"], number: 22, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Nottingham Forest", hintInitials: "P. S." },
      { id: "en82-2", name: "Mick Mills", aliases: ["mills", "mick mills", "m. mills"], number: 12, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Ipswich Town", hintInitials: "M. M." },
      { id: "en82-3", name: "Phil Thompson", aliases: ["thompson", "phil thompson", "p. thompson"], number: 18, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Liverpool", hintInitials: "P. T." },
      { id: "en82-4", name: "Steve Foster", aliases: ["foster", "steve foster", "s. foster"], number: 6, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Brighton & Hove Albion", hintInitials: "S. F." },
      { id: "en82-5", name: "Kenny Sansom", aliases: ["sansom", "kenny sansom", "k. sansom"], number: 17, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Arsenal", hintInitials: "K. S." },
      { id: "en82-6", name: "Bryan Robson", aliases: ["robson", "bryan robson", "b. robson"], number: 15, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Manchester United", hintInitials: "B. R." },
      { id: "en82-7", name: "Ray Wilkins", aliases: ["wilkins", "ray wilkins", "r. wilkins"], number: 19, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Manchester United", hintInitials: "R. W." },
      { id: "en82-8", name: "Glenn Hoddle", aliases: ["hoddle", "glenn hoddle", "g. hoddle"], number: 3, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Tottenham Hotspur", hintInitials: "G. H." },
      { id: "en82-9", name: "Graham Rix", aliases: ["rix", "graham rix", "g. rix"], number: 16, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Arsenal", hintInitials: "G. R." },
      { id: "en82-10", name: "Paul Mariner", aliases: ["mariner", "paul mariner", "p. mariner"], number: 11, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Ipswich Town", hintInitials: "P. M." },
      { id: "en82-11", name: "Trevor Francis", aliases: ["francis", "trevor francis", "t. francis"], number: 8, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Manchester City", hintInitials: "T. F." }
    ]
  },
  // 22. ENGLAND 1986
  {
    id: "england-1986",
    country: "England",
    year: 1986,
    formation: "4-4-2",
    jerseyColor: "#FFFFFF",
    numberColor: "#0D47A1",
    trimColor: "#D32F2F",
    squadName: "Lineker's Golden Boot & Hand of God",
    isIconic: true,
    players: [
      { id: "en86-1", name: "Peter Shilton", aliases: ["shilton", "peter shilton", "p. shilton"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Southampton", hintInitials: "P. S." },
      { id: "en86-2", name: "Gary Stevens", aliases: ["stevens", "gary stevens", "g. stevens"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Everton", hintInitials: "G. S." },
      { id: "en86-3", name: "Terry Fenwick", aliases: ["fenwick", "terry fenwick", "t. fenwick"], number: 14, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Queens Park Rangers", hintInitials: "T. F." },
      { id: "en86-4", name: "Terry Butcher", aliases: ["butcher", "terry butcher", "t. butcher"], number: 6, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Ipswich Town", hintInitials: "T. B." },
      { id: "en86-5", name: "Kenny Sansom", aliases: ["sansom", "kenny sansom", "k. sansom"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Arsenal", hintInitials: "K. S." },
      { id: "en86-6", name: "Steve Hodge", aliases: ["hodge", "steve hodge", "s. hodge"], number: 18, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Aston Villa", hintInitials: "S. H." },
      { id: "en86-7", name: "Glenn Hoddle", aliases: ["hoddle", "glenn hoddle", "g. hoddle"], number: 4, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Tottenham Hotspur", hintInitials: "G. H." },
      { id: "en86-8", name: "Peter Reid", aliases: ["reid", "peter reid", "p. reid"], number: 16, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Everton", hintInitials: "P. R." },
      { id: "en86-9", name: "Trevor Steven", aliases: ["steven", "trevor steven", "t. steven"], number: 17, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Everton", hintInitials: "T. S." },
      { id: "en86-10", name: "Gary Lineker", aliases: ["lineker", "gary lineker", "g. lineker"], number: 10, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Everton", hintInitials: "G. L." },
      { id: "en86-11", name: "Peter Beardsley", aliases: ["beardsley", "peter beardsley", "p. beardsley"], number: 20, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Newcastle United", hintInitials: "P. B." }
    ]
  },
  // 23. ENGLAND 1998
  {
    id: "england-1998",
    country: "England",
    year: 1998,
    formation: "4-4-2",
    jerseyColor: "#FFFFFF",
    numberColor: "#0D47A1",
    trimColor: "#D32F2F",
    squadName: "Beckham Red Card & Owen Sensation",
    isIconic: true,
    players: [
      { id: "en98-1", name: "David Seaman", aliases: ["seaman", "david seaman", "d. seaman"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Arsenal", hintInitials: "D. S." },
      { id: "en98-2", name: "Gary Neville", aliases: ["neville", "gary neville", "g. neville"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Manchester United", hintInitials: "G. N." },
      { id: "en98-3", name: "Tony Adams", aliases: ["adams", "tony adams", "t. adams"], number: 5, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Arsenal", hintInitials: "T. A." },
      { id: "en98-4", name: "Sol Campbell", aliases: ["campbell", "sol campbell", "s. campbell"], number: 12, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Tottenham Hotspur", hintInitials: "S. C." },
      { id: "en98-5", name: "Graeme Le Saux", aliases: ["le saux", "graeme le saux", "g. le saux"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Chelsea", hintInitials: "G. L. S." },
      { id: "en98-6", name: "David Beckham", aliases: ["beckham", "david beckham", "d. beckham"], number: 7, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Manchester United", hintInitials: "D. B." },
      { id: "en98-7", name: "Paul Ince", aliases: ["ince", "paul ince", "p. ince"], number: 4, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Liverpool", hintInitials: "P. I." },
      { id: "en98-8", name: "Paul Scholes", aliases: ["scholes", "paul scholes", "p. scholes"], number: 14, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Manchester United", hintInitials: "P. S." },
      { id: "en98-9", name: "Darren Anderton", aliases: ["anderton", "darren anderton", "d. anderton"], number: 16, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Tottenham Hotspur", hintInitials: "D. A." },
      { id: "en98-10", name: "Alan Shearer", aliases: ["shearer", "alan shearer", "a. shearer"], number: 9, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Newcastle United", hintInitials: "A. S." },
      { id: "en98-11", name: "Michael Owen", aliases: ["owen", "michael owen", "m. owen"], number: 20, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Liverpool", hintInitials: "M. O." }
    ]
  },
  // 24. ENGLAND 2006
  {
    id: "england-2006",
    country: "England",
    year: 2006,
    formation: "4-4-2",
    jerseyColor: "#FFFFFF",
    numberColor: "#0D47A1",
    trimColor: "#D32F2F",
    squadName: "The Golden Generation Quarterfinal",
    isIconic: true,
    players: [
      { id: "en06-1", name: "Paul Robinson", aliases: ["robinson", "paul robinson", "p. robinson"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Tottenham Hotspur", hintInitials: "P. R." },
      { id: "en06-2", name: "Gary Neville", aliases: ["neville", "gary neville", "g. neville"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Manchester United", hintInitials: "G. N." },
      { id: "en06-3", name: "Rio Ferdinand", aliases: ["ferdinand", "rio ferdinand", "r. ferdinand"], number: 5, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Manchester United", hintInitials: "R. F." },
      { id: "en06-4", name: "John Terry", aliases: ["terry", "john terry", "j. terry"], number: 6, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Chelsea", hintInitials: "J. T." },
      { id: "en06-5", name: "Ashley Cole", aliases: ["cole", "ashley cole", "a. cole"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Arsenal", hintInitials: "A. C." },
      { id: "en06-6", name: "David Beckham", aliases: ["beckham", "david beckham", "d. beckham"], number: 7, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Real Madrid", hintInitials: "D. B." },
      { id: "en06-7", name: "Steven Gerrard", aliases: ["gerrard", "steven gerrard", "s. gerrard"], number: 4, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Liverpool", hintInitials: "S. G." },
      { id: "en06-8", name: "Frank Lampard", aliases: ["lampard", "frank lampard", "f. lampard"], number: 8, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Chelsea", hintInitials: "F. L." },
      { id: "en06-9", name: "Joe Cole", aliases: ["joe cole", "j. cole"], number: 11, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Chelsea", hintInitials: "J. C." },
      { id: "en06-10", name: "Wayne Rooney", aliases: ["rooney", "wayne rooney", "w. rooney"], number: 9, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Manchester United", hintInitials: "W. R." },
      { id: "en06-11", name: "Frank Lampard", aliases: ["hargreaves", "owen hargreaves", "o. hargreaves"], number: 16, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Bayern Munich", hintInitials: "O. H." }
    ]
  },
  // 25. ENGLAND 2018
  {
    id: "england-2018",
    country: "England",
    year: 2018,
    formation: "3-5-2",
    jerseyColor: "#FFFFFF",
    numberColor: "#0D47A1",
    trimColor: "#D32F2F",
    squadName: "It's Coming Home Semifinalists",
    isIconic: true,
    players: [
      { id: "en18-1", name: "Jordan Pickford", aliases: ["pickford", "jordan pickford", "j. pickford"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Everton", hintInitials: "J. P." },
      { id: "en18-2", name: "Kyle Walker", aliases: ["walker", "kyle walker", "k. walker"], number: 2, position: "DF", positionLabel: "RCB", x: 65, y: 72, hintClub: "Manchester City", hintInitials: "K. W." },
      { id: "en18-3", name: "John Stones", aliases: ["stones", "john stones", "j. stones"], number: 5, position: "DF", positionLabel: "CB", x: 50, y: 75, hintClub: "Manchester City", hintInitials: "J. S." },
      { id: "en18-4", name: "Harry Maguire", aliases: ["maguire", "harry maguire", "h. maguire"], number: 6, position: "DF", positionLabel: "LCB", x: 35, y: 72, hintClub: "Leicester City", hintInitials: "H. M." },
      { id: "en18-5", name: "Kieran Trippier", aliases: ["trippier", "kieran trippier", "k. trippier"], number: 12, position: "DF", positionLabel: "RWB", x: 85, y: 58, hintClub: "Tottenham Hotspur", hintInitials: "K. T." },
      { id: "en18-6", name: "Ashley Young", aliases: ["young", "ashley young", "a. young"], number: 18, position: "DF", positionLabel: "LWB", x: 15, y: 58, hintClub: "Manchester United", hintInitials: "A. Y." },
      { id: "en18-7", name: "Jesse Lingard", aliases: ["lingard", "jesse lingard", "j. lingard", "lingardinho"], number: 7, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Manchester United", hintInitials: "J. L." },
      { id: "en18-8", name: "Jordan Henderson", aliases: ["henderson", "jordan henderson", "j. henderson"], number: 8, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "Liverpool", hintInitials: "J. H." },
      { id: "en18-9", name: "Dele Alli", aliases: ["dele", "alli", "dele alli", "d. alli"], number: 20, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Tottenham Hotspur", hintInitials: "D. A." },
      { id: "en18-10", name: "Raheem Sterling", aliases: ["sterling", "raheem sterling", "r. sterling"], number: 10, position: "FW", positionLabel: "RST", x: 65, y: 18, hintClub: "Manchester City", hintInitials: "R. S." },
      { id: "en18-11", name: "Harry Kane", aliases: ["kane", "harry kane", "h. kane"], number: 9, position: "FW", positionLabel: "LST", x: 35, y: 18, hintClub: "Tottenham Hotspur", hintInitials: "H. K." }
    ]
  },
  // 26. ENGLAND 2022
  {
    id: "england-2022",
    country: "England",
    year: 2022,
    formation: "4-3-3",
    jerseyColor: "#FFFFFF",
    numberColor: "#0D47A1",
    trimColor: "#D32F2F",
    squadName: "Quarterfinal Heavyweights",
    isIconic: true,
    players: [
      { id: "en22-1", name: "Jordan Pickford", aliases: ["pickford", "jordan pickford", "j. pickford"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Everton", hintInitials: "J. P." },
      { id: "en22-2", name: "Kyle Walker", aliases: ["walker", "kyle walker", "k. walker"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Manchester City", hintInitials: "K. W." },
      { id: "en22-3", name: "John Stones", aliases: ["stones", "john stones", "j. stones"], number: 5, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Manchester City", hintInitials: "J. S." },
      { id: "en22-4", name: "Harry Maguire", aliases: ["maguire", "harry maguire", "h. maguire"], number: 6, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Manchester United", hintInitials: "H. M." },
      { id: "en22-5", name: "Luke Shaw", aliases: ["shaw", "luke shaw", "l. shaw"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Manchester United", hintInitials: "L. S." },
      { id: "en22-6", name: "Declan Rice", aliases: ["rice", "declan rice", "d. rice"], number: 4, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "West Ham United", hintInitials: "D. R." },
      { id: "en22-7", name: "Jordan Henderson", aliases: ["henderson", "jordan henderson", "j. henderson"], number: 8, position: "MF", positionLabel: "RCM", x: 66, y: 48, hintClub: "Liverpool", hintInitials: "J. H." },
      { id: "en22-8", name: "Jude Bellingham", aliases: ["bellingham", "jude bellingham", "j. bellingham"], number: 22, position: "MF", positionLabel: "LCM", x: 34, y: 48, hintClub: "Borussia Dortmund", hintInitials: "J. B." },
      { id: "en22-9", name: "Bukayo Saka", aliases: ["saka", "bukayo saka", "b. saka"], number: 17, position: "FW", positionLabel: "RW", x: 80, y: 22, hintClub: "Arsenal", hintInitials: "B. S." },
      { id: "en22-10", name: "Harry Kane", aliases: ["kane", "harry kane", "h. kane"], number: 9, position: "FW", positionLabel: "ST", x: 50, y: 13, hintClub: "Tottenham Hotspur", hintInitials: "H. K." },
      { id: "en22-11", name: "Phil Foden", aliases: ["foden", "phil foden", "p. foden"], number: 20, position: "FW", positionLabel: "LW", x: 20, y: 22, hintClub: "Manchester City", hintInitials: "P. F." }
    ]
  },
  // 27. BELGIUM 2014
  {
    id: "belgium-2014",
    country: "Belgium",
    year: 2014,
    formation: "4-3-3",
    jerseyColor: "#C62828",
    numberColor: "#FFEB3B",
    trimColor: "#000000",
    squadName: "The Red Devils Golden Rise",
    isIconic: true,
    players: [
      { id: "be14-1", name: "Thibaut Courtois", aliases: ["courtois", "thibaut courtois", "t. courtois"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Atlético Madrid", hintInitials: "T. C." },
      { id: "be14-2", name: "Toby Alderweireld", aliases: ["alderweireld", "toby alderweireld", "t. alderweireld"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Atlético Madrid", hintInitials: "T. A." },
      { id: "be14-3", name: "Daniel Van Buyten", aliases: ["van buyten", "daniel van buyten", "d. van buyten"], number: 15, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Bayern Munich", hintInitials: "D. V. B." },
      { id: "be14-4", name: "Vincent Kompany", aliases: ["kompany", "vincent kompany", "v. kompany"], number: 4, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Manchester City", hintInitials: "V. K." },
      { id: "be14-5", name: "Jan Vertonghen", aliases: ["vertonghen", "jan vertonghen", "j. vertonghen"], number: 5, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Tottenham Hotspur", hintInitials: "J. V." },
      { id: "be14-6", name: "Axel Witsel", aliases: ["witsel", "axel witsel", "a. witsel"], number: 6, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "Zenit Saint Petersburg", hintInitials: "A. W." },
      { id: "be14-7", name: "Marouane Fellaini", aliases: ["fellaini", "marouane fellaini", "m. fellaini"], number: 8, position: "MF", positionLabel: "RCM", x: 66, y: 48, hintClub: "Manchester United", hintInitials: "M. F." },
      { id: "be14-8", name: "Kevin De Bruyne", aliases: ["de bruyne", "kevin de bruyne", "kdb", "k. de bruyne"], number: 7, position: "MF", positionLabel: "LCM", x: 34, y: 48, hintClub: "VfL Wolfsburg", hintInitials: "K. D. B." },
      { id: "be14-9", name: "Dries Mertens", aliases: ["mertens", "dries mertens", "d. mertens"], number: 14, position: "FW", positionLabel: "RW", x: 80, y: 22, hintClub: "Napoli", hintInitials: "D. M." },
      { id: "be14-10", name: "Divock Origi", aliases: ["origi", "divock origi", "d. origi"], number: 17, position: "FW", positionLabel: "ST", x: 50, y: 13, hintClub: "Lille", hintInitials: "D. O." },
      { id: "be14-11", name: "Eden Hazard", aliases: ["hazard", "eden hazard", "e. hazard"], number: 10, position: "FW", positionLabel: "LW", x: 20, y: 22, hintClub: "Chelsea", hintInitials: "E. H." }
    ]
  },
  // 28. BELGIUM 2022
  {
    id: "belgium-2022",
    country: "Belgium",
    year: 2022,
    formation: "3-4-3",
    jerseyColor: "#C62828",
    numberColor: "#FFEB3B",
    trimColor: "#000000",
    squadName: "The Sunset of the Golden Generation",
    isIconic: true,
    players: [
      { id: "be22-1", name: "Thibaut Courtois", aliases: ["courtois", "thibaut courtois", "t. courtois"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Real Madrid", hintInitials: "T. C." },
      { id: "be22-2", name: "Leander Dendoncker", aliases: ["dendoncker", "leander dendoncker", "l. dendoncker"], number: 19, position: "DF", positionLabel: "RCB", x: 65, y: 72, hintClub: "Aston Villa", hintInitials: "L. D." },
      { id: "be22-3", name: "Toby Alderweireld", aliases: ["alderweireld", "toby alderweireld", "t. alderweireld"], number: 2, position: "DF", positionLabel: "CB", x: 50, y: 75, hintClub: "Royal Antwerp", hintInitials: "T. A." },
      { id: "be22-4", name: "Jan Vertonghen", aliases: ["vertonghen", "jan vertonghen", "j. vertonghen"], number: 5, position: "DF", positionLabel: "LCB", x: 35, y: 72, hintClub: "Anderlecht", hintInitials: "J. V." },
      { id: "be22-5", name: "Thomas Meunier", aliases: ["meunier", "thomas meunier", "t. meunier"], number: 15, position: "MF", positionLabel: "RM", x: 84, y: 55, hintClub: "Borussia Dortmund", hintInitials: "T. M." },
      { id: "be22-6", name: "Axel Witsel", aliases: ["witsel", "axel witsel", "a. witsel"], number: 6, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Atlético Madrid", hintInitials: "A. W." },
      { id: "be22-7", name: "Kevin De Bruyne", aliases: ["de bruyne", "kevin de bruyne", "kdb", "k. de bruyne"], number: 7, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Manchester City", hintInitials: "K. D. B." },
      { id: "be22-8", name: "Timothy Castagne", aliases: ["castagne", "timothy castagne", "t. castagne"], number: 21, position: "MF", positionLabel: "LM", x: 16, y: 55, hintClub: "Leicester City", hintInitials: "T. C." },
      { id: "be22-9", name: "Eden Hazard", aliases: ["hazard", "eden hazard", "e. hazard"], number: 10, position: "FW", positionLabel: "RW", x: 75, y: 22, hintClub: "Real Madrid", hintInitials: "E. H." },
      { id: "be22-10", name: "Michy Batshuayi", aliases: ["batshuayi", "michy batshuayi", "m. batshuayi"], number: 23, position: "FW", positionLabel: "ST", x: 50, y: 13, hintClub: "Fenerbahçe", hintInitials: "M. B." },
      { id: "be22-11", name: "Yannick Carrasco", aliases: ["carrasco", "yannick carrasco", "y. carrasco"], number: 11, position: "FW", positionLabel: "LW", x: 25, y: 22, hintClub: "Atlético Madrid", hintInitials: "Y. C." }
    ]
  },
  // 29. URUGUAY 2014
  {
    id: "uruguay-2014",
    country: "Uruguay",
    year: 2014,
    formation: "4-4-2",
    jerseyColor: "#29B6F6",
    numberColor: "#FFFFFF",
    trimColor: "#FFFFFF",
    squadName: "The Suarez Bite Drama",
    isIconic: true,
    players: [
      { id: "uy14-1", name: "Fernando Muslera", aliases: ["muslera", "fernando muslera", "f. muslera"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Galatasaray", hintInitials: "F. M." },
      { id: "uy14-2", name: "Martín Cáceres", aliases: ["caceres", "martin caceres", "m. caceres"], number: 22, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Juventus", hintInitials: "M. C." },
      { id: "uy14-3", name: "José Giménez", aliases: ["gimenez", "jose gimenez", "j. gimenez"], number: 13, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Atlético Madrid", hintInitials: "J. G." },
      { id: "uy14-4", name: "Diego Godín", aliases: ["godin", "diego godin", "d. godin"], number: 3, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Atlético Madrid", hintInitials: "D. G." },
      { id: "uy14-5", name: "Álvaro Pereira", aliases: ["pereira", "alvaro pereira", "a. pereira"], number: 6, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "São Paulo", hintInitials: "Á. P." },
      { id: "uy14-6", name: "Álvaro González", aliases: ["gonzalez", "alvaro gonzalez", "a. gonzalez"], number: 20, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Lazio", hintInitials: "Á. G." },
      { id: "uy14-7", name: "Egidio Arévalo Ríos", aliases: ["arevalo rios", "egidio arevalo rios", "e. arevalo rios", "arevalo"], number: 17, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Morelia", hintInitials: "E. A. R." },
      { id: "uy14-8", name: "Nicolás Lodeiro", aliases: ["lodeiro", "nicolas lodeiro", "n. lodeiro"], number: 14, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Botafogo", hintInitials: "N. L." },
      { id: "uy14-9", name: "Cristian Rodríguez", aliases: ["rodriguez", "cristian rodriguez", "c. rodriguez", "cebolla"], number: 7, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Atlético Madrid", hintInitials: "C. R." },
      { id: "uy14-10", name: "Edinson Cavani", aliases: ["cavani", "edinson cavani", "e. cavani"], number: 21, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Paris Saint-Germain", hintInitials: "E. C." },
      { id: "uy14-11", name: "Luis Suárez", aliases: ["suarez", "luis suarez", "l. suarez", "el pistolero"], number: 9, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Liverpool", hintInitials: "L. S." }
    ]
  },
  // 30. URUGUAY 2018
  {
    id: "uruguay-2018",
    country: "Uruguay",
    year: 2018,
    formation: "4-4-2",
    jerseyColor: "#29B6F6",
    numberColor: "#FFFFFF",
    trimColor: "#FFFFFF",
    squadName: "The Cavani-Suarez Masterclass",
    isIconic: true,
    players: [
      { id: "uy18-1", name: "Fernando Muslera", aliases: ["muslera", "fernando muslera", "f. muslera"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Galatasaray", hintInitials: "F. M." },
      { id: "uy18-2", name: "Martín Cáceres", aliases: ["caceres", "martin caceres", "m. caceres"], number: 22, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Verona", hintInitials: "M. C." },
      { id: "uy18-3", name: "José Giménez", aliases: ["gimenez", "jose gimenez", "j. gimenez"], number: 2, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Atlético Madrid", hintInitials: "J. G." },
      { id: "uy18-4", name: "Diego Godín", aliases: ["godin", "diego godin", "d. godin"], number: 3, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Atlético Madrid", hintInitials: "D. G." },
      { id: "uy18-5", name: "Diego Laxalt", aliases: ["laxalt", "diego laxalt", "d. laxalt"], number: 17, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Genoa", hintInitials: "D. L." },
      { id: "uy18-6", name: "Nahitan Nández", aliases: ["nandez", "nahitan nandez", "n. nandez"], number: 8, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Boca Juniors", hintInitials: "N. N." },
      { id: "uy18-7", name: "Lucas Torreira", aliases: ["torreira", "lucas torreira", "l. torreira"], number: 14, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Sampdoria", hintInitials: "L. T." },
      { id: "uy18-8", name: "Rodrigo Bentancur", aliases: ["bentancur", "rodrigo bentancur", "r. bentancur"], number: 6, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Juventus", hintInitials: "R. B." },
      { id: "uy18-9", name: "Matías Vecino", aliases: ["vecino", "matias vecino", "m. vecino"], number: 15, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Inter Milan", hintInitials: "M. V." },
      { id: "uy18-10", name: "Edinson Cavani", aliases: ["cavani", "edinson cavani", "e. cavani"], number: 21, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Paris Saint-Germain", hintInitials: "E. C." },
      { id: "uy18-11", name: "Luis Suárez", aliases: ["suarez", "luis suarez", "l. suarez", "el pistolero"], number: 9, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Barcelona", hintInitials: "L. S." }
    ]
  },
  // 31. CROATIA 1998
  {
    id: "croatia-1998",
    country: "Croatia",
    year: 1998,
    formation: "3-5-2",
    jerseyColor: "#FFFFFF",
    numberColor: "#C62828",
    trimColor: "#C62828",
    squadName: "The Debutant 3rd Place Sensation",
    isIconic: true,
    players: [
      { id: "hr98-1", name: "Dražen Ladić", aliases: ["ladic", "drazen ladic", "d. ladic"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Croatia Zagreb", hintInitials: "D. L." },
      { id: "hr98-2", name: "Dario Šimić", aliases: ["simic", "dario simic", "d. simic"], number: 20, position: "DF", positionLabel: "RCB", x: 65, y: 72, hintClub: "Croatia Zagreb", hintInitials: "D. Š." },
      { id: "hr98-3", name: "Zvonimir Soldo", aliases: ["soldo", "zvonimir soldo", "z. soldo"], number: 4, position: "DF", positionLabel: "CB", x: 50, y: 75, hintClub: "VfB Stuttgart", hintInitials: "Z. S." },
      { id: "hr98-4", name: "Igor Štimac", aliases: ["stimac", "igor stimac", "i. stimac"], number: 6, position: "DF", positionLabel: "LCB", x: 35, y: 72, hintClub: "Derby County", hintInitials: "I. Š." },
      { id: "hr98-5", name: "Mario Stanić", aliases: ["stanic", "mario stanic", "m. stanic"], number: 13, position: "DF", positionLabel: "RWB", x: 85, y: 58, hintClub: "Parma", hintInitials: "M. S." },
      { id: "hr98-6", name: "Robert Jarni", aliases: ["jarni", "robert jarni", "r. jarni"], number: 17, position: "DF", positionLabel: "LWB", x: 15, y: 58, hintClub: "Real Betis", hintInitials: "R. J." },
      { id: "hr98-7", name: "Krunoslav Jurčić", aliases: ["jurcic", "krunoslav jurcic", "k. jurcic"], number: 14, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Croatia Zagreb", hintInitials: "K. J." },
      { id: "hr98-8", name: "Aljoša Asanović", aliases: ["asanovic", "aljosa asanovic", "a. asanovic"], number: 7, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "Napoli", hintInitials: "A. A." },
      { id: "hr98-9", name: "Zvonimir Boban", aliases: ["boban", "zvonimir boban", "z. boban"], number: 10, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "AC Milan", hintInitials: "Z. B." },
      { id: "hr98-10", name: "Goran Vlaović", aliases: ["vlaovic", "goran vlaovic", "g. vlaovic"], number: 19, position: "FW", positionLabel: "RST", x: 65, y: 18, hintClub: "Valencia", hintInitials: "G. V." },
      { id: "hr98-11", name: "Davor Šuker", aliases: ["suker", "davor suker", "d. suker"], number: 9, position: "FW", positionLabel: "LST", x: 35, y: 18, hintClub: "Real Madrid", hintInitials: "D. Š." }
    ]
  },
  // 32. PORTUGAL 1966
  {
    id: "portugal-1966",
    country: "Portugal",
    year: 1966,
    formation: "4-4-2",
    jerseyColor: "#C62828",
    numberColor: "#FFFFFF",
    trimColor: "#4CAF50",
    squadName: "Eusébio's Debutant Magic 3rd Place",
    isIconic: true,
    players: [
      { id: "pt66-1", name: "José Pereira", aliases: ["jose pereira", "j. pereira"], number: 3, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Belenenses", hintInitials: "J. P." },
      { id: "pt66-2", name: "Alberto Festa", aliases: ["festa", "alberto festa", "a. festa"], number: 22, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Porto", hintInitials: "A. F." },
      { id: "pt66-3", name: "Alexandre Baptista", aliases: ["baptista", "alexandre baptista", "a. baptista"], number: 20, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Sporting CP", hintInitials: "A. B." },
      { id: "pt66-4", name: "José Carlos", aliases: ["jose carlos", "j. carlos"], number: 4, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Sporting CP", hintInitials: "J. C." },
      { id: "pt66-5", name: "Hilário da Conceição", aliases: ["hilario", "hilario da conceicao", "h. da conceicao"], number: 9, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Sporting CP", hintInitials: "H." },
      { id: "pt66-6", name: "Graça", aliases: ["graca", "jaime graca", "j. graca"], number: 10, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Vitória de Setúbal", hintInitials: "J. G." },
      { id: "pt66-7", name: "Mário Coluna", aliases: ["coluna", "mario coluna", "m. coluna"], number: 16, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Benfica", hintInitials: "M. C." },
      { id: "pt66-8", name: "José Augusto", aliases: ["jose augusto", "j. augusto"], number: 11, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Benfica", hintInitials: "J. A." },
      { id: "pt66-9", name: "António Simões", aliases: ["simoes", "antonio simoes", "a. simoes"], number: 12, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Benfica", hintInitials: "A. S." },
      { id: "pt66-10", name: "Eusébio", aliases: ["eusebio", "eusebio da silva ferreira", "black panther"], number: 13, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Benfica", hintInitials: "E." },
      { id: "pt66-11", name: "José Torres", aliases: ["torres", "jose torres", "j. torres"], number: 18, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Benfica", hintInitials: "J. T." }
    ]
  },
  // 33. PORTUGAL 2006
  {
    id: "portugal-2006",
    country: "Portugal",
    year: 2006,
    formation: "4-2-3-1",
    jerseyColor: "#C62828",
    numberColor: "#FFFFFF",
    trimColor: "#4CAF50",
    squadName: "Figo-Ronaldo Semifinalists",
    isIconic: true,
    players: [
      { id: "pt06-1", name: "Ricardo", aliases: ["ricardo", "ricardo pereira"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Sporting CP", hintInitials: "R." },
      { id: "pt06-2", name: "Miguel", aliases: ["miguel", "miguel monteiro"], number: 13, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Valencia", hintInitials: "M." },
      { id: "pt06-3", name: "Fernando Meira", aliases: ["meira", "fernando meira", "f. meira"], number: 5, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "VfB Stuttgart", hintInitials: "F. M." },
      { id: "pt06-4", name: "Ricardo Carvalho", aliases: ["carvalho", "ricardo carvalho", "r. carvalho"], number: 16, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Chelsea", hintInitials: "R. C." },
      { id: "pt06-5", name: "Nuno Valente", aliases: ["valente", "nuno valente", "n. valente"], number: 14, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Everton", hintInitials: "N. V." },
      { id: "pt06-6", name: "Costinha", aliases: ["costinha", "francisco da costa"], number: 6, position: "MF", positionLabel: "RDM", x: 62, y: 55, hintClub: "Dynamo Moscow", hintInitials: "C." },
      { id: "pt06-7", name: "Maniche", aliases: ["maniche", "nuno ribeiro"], number: 18, position: "MF", positionLabel: "LDM", x: 38, y: 55, hintClub: "Chelsea", hintInitials: "M." },
      { id: "pt06-8", name: "Luís Figo", aliases: ["figo", "luis figo", "l. figo"], number: 7, position: "FW", positionLabel: "RW", x: 80, y: 35, hintClub: "Inter Milan", hintInitials: "L. F." },
      { id: "pt06-9", name: "Deco", aliases: ["deco", "anderson luis de souza"], number: 20, position: "MF", positionLabel: "CAM", x: 50, y: 35, hintClub: "Barcelona", hintInitials: "D." },
      { id: "pt06-10", name: "Cristiano Ronaldo", aliases: ["ronaldo", "cristiano ronaldo", "cr7", "c. ronaldo"], number: 17, position: "FW", positionLabel: "LW", x: 20, y: 35, hintClub: "Manchester United", hintInitials: "C. R." },
      { id: "pt06-11", name: "Pauleta", aliases: ["pauleta", "pedro pauleta"], number: 9, position: "FW", positionLabel: "ST", x: 50, y: 15, hintClub: "Paris Saint-Germain", hintInitials: "P." }
    ]
  },
  // 34. PORTUGAL 2018
  {
    id: "portugal-2018",
    country: "Portugal",
    year: 2018,
    formation: "4-4-2",
    jerseyColor: "#C62828",
    numberColor: "#FFFFFF",
    trimColor: "#4CAF50",
    squadName: "Ronaldo's Hattrick vs Spain Generation",
    isIconic: true,
    players: [
      { id: "pt18-1", name: "Rui Patrício", aliases: ["patricio", "rui patricio", "r. patricio"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Sporting CP", hintInitials: "R. P." },
      { id: "pt18-2", name: "Cédric Soares", aliases: ["cedric", "cedric soares", "c. soares"], number: 21, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Southampton", hintInitials: "C. S." },
      { id: "pt18-3", name: "Pepe", aliases: ["pepe", "kepler laveran"], number: 3, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Beşiktaş", hintInitials: "P." },
      { id: "pt18-4", name: "José Fonte", aliases: ["fonte", "jose fonte", "j. fonte"], number: 6, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Dalian Yifang", hintInitials: "J. F." },
      { id: "pt18-5", name: "Raphaël Guerreiro", aliases: ["guerreiro", "raphael guerreiro", "r. guerreiro"], number: 5, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Borussia Dortmund", hintInitials: "R. G." },
      { id: "pt18-6", name: "Bernardo Silva", aliases: ["bernardo silva", "b. silva", "bernardo"], number: 11, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Manchester City", hintInitials: "B. S." },
      { id: "pt18-7", name: "William Carvalho", aliases: ["carvalho", "william carvalho", "w. carvalho"], number: 14, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Sporting CP", hintInitials: "W. C." },
      { id: "pt18-8", name: "João Moutinho", aliases: ["moutinho", "joao moutinho", "j. moutinho"], number: 8, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Monaco", hintInitials: "J. M." },
      { id: "pt18-9", name: "Bruno Fernandes", aliases: ["bruno", "bruno fernandes", "b. fernandes"], number: 16, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Sporting CP", hintInitials: "B. F." },
      { id: "pt18-10", name: "Gonçalo Guedes", aliases: ["guedes", "goncalo guedes", "g. guedes"], number: 17, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Valencia", hintInitials: "G. G." },
      { id: "pt18-11", name: "Cristiano Ronaldo", aliases: ["ronaldo", "cristiano ronaldo", "cr7", "c. ronaldo"], number: 7, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Real Madrid", hintInitials: "C. R." }
    ]
  },
  // 35. USA 2002
  {
    id: "usa-2002",
    country: "USA",
    year: 2002,
    formation: "4-4-2",
    jerseyColor: "#FFFFFF",
    numberColor: "#0D47A1",
    trimColor: "#D32F2F",
    squadName: "The Historic Quarterfinal Sensation",
    isIconic: true,
    players: [
      { id: "us02-1", name: "Brad Friedel", aliases: ["friedel", "brad friedel", "b. friedel"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Blackburn Rovers", hintInitials: "B. F." },
      { id: "us02-2", name: "Tony Sanneh", aliases: ["sanneh", "tony sanneh", "t. sanneh"], number: 22, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "1. FC Nürnberg", hintInitials: "T. S." },
      { id: "us02-3", name: "Eddie Pope", aliases: ["pope", "eddie pope", "e. pope"], number: 23, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "D.C. United", hintInitials: "E. P." },
      { id: "us02-4", name: "Gregg Berhalter", aliases: ["berhalter", "gregg berhalter", "g. berhalter"], number: 14, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Crystal Palace", hintInitials: "G. B." },
      { id: "us02-5", name: "Frankie Hejduk", aliases: ["hejduk", "frankie hejduk", "f. hejduk"], number: 2, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Bayer Leverkusen", hintInitials: "F. H." },
      { id: "us02-6", name: "Cobi Jones", aliases: ["jones", "cobi jones", "c. jones"], number: 13, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "LA Galaxy", hintInitials: "C. J." },
      { id: "us02-7", name: "Pablo Mastroeni", aliases: ["mastroeni", "pablo mastroeni", "p. mastroeni"], number: 4, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Colorado Rapids", hintInitials: "P. M." },
      { id: "us02-8", name: "Claudio Reyna", aliases: ["reyna", "claudio reyna", "c. reyna"], number: 10, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Sunderland", hintInitials: "C. R." },
      { id: "us02-9", name: "John O'Brien", aliases: ["o'brien", "john o'brien", "j. o'brien"], number: 5, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Ajax", hintInitials: "J. O." },
      { id: "us02-10", name: "Landon Donovan", aliases: ["donovan", "landon donovan", "l. donovan"], number: 21, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "San Jose Earthquakes", hintInitials: "L. D." },
      { id: "us02-11", name: "Brian McBride", aliases: ["mcbride", "brian mcbride", "b. mcbride"], number: 20, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Columbus Crew", hintInitials: "B. M." }
    ]
  },
  // 36. USA 2010
  {
    id: "usa-2010",
    country: "USA",
    year: 2010,
    formation: "4-4-2",
    jerseyColor: "#FFFFFF",
    numberColor: "#0D47A1",
    trimColor: "#D32F2F",
    squadName: "The Group Winners Run",
    isIconic: true,
    players: [
      { id: "us10-1", name: "Tim Howard", aliases: ["howard", "tim howard", "t. howard"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Everton", hintInitials: "T. H." },
      { id: "us10-2", name: "Steve Cherundolo", aliases: ["cherundolo", "steve cherundolo", "s. cherundolo"], number: 6, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Hannover 96", hintInitials: "S. C." },
      { id: "us10-3", name: "Jay DeMerit", aliases: ["demerit", "jay demerit", "j. demerit"], number: 15, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Watford", hintInitials: "J. D." },
      { id: "us10-4", name: "Carlos Bocanegra", aliases: ["bocanegra", "carlos bocanegra", "c. bocanegra"], number: 3, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Rennes", hintInitials: "C. B." },
      { id: "us10-5", name: "Jonathan Bornstein", aliases: ["bornstein", "jonathan bornstein", "j. bornstein"], number: 12, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Chivas USA", hintInitials: "J. B." },
      { id: "us10-6", name: "Landon Donovan", aliases: ["donovan", "landon donovan", "l. donovan"], number: 10, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "LA Galaxy", hintInitials: "L. D." },
      { id: "us10-7", name: "Michael Bradley", aliases: ["bradley", "michael bradley", "m. bradley"], number: 4, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Borussia Mönchengladbach", hintInitials: "M. B." },
      { id: "us10-8", name: "Ricardo Clark", aliases: ["clark", "ricardo clark", "r. clark"], number: 13, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Eintracht Frankfurt", hintInitials: "R. C." },
      { id: "us10-9", name: "Clint Dempsey", aliases: ["dempsey", "clint dempsey", "c. dempsey"], number: 8, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Fulham", hintInitials: "C. D." },
      { id: "us10-10", name: "Jozy Altidore", aliases: ["altidore", "jozy altidore", "j. altidore"], number: 17, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Hull City", hintInitials: "J. A." },
      { id: "us10-11", name: "Robbie Findley", aliases: ["findley", "robbie findley", "r. findley"], number: 20, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Real Salt Lake", hintInitials: "R. F." }
    ]
  },
  // 37. USA 2014
  {
    id: "usa-2014",
    country: "USA",
    year: 2014,
    formation: "4-2-3-1",
    jerseyColor: "#FFFFFF",
    numberColor: "#0D47A1",
    trimColor: "#D32F2F",
    squadName: "The Howard Record 15-Save Match",
    isIconic: true,
    players: [
      { id: "us14-1", name: "Tim Howard", aliases: ["howard", "tim howard", "t. howard"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Everton", hintInitials: "T. H." },
      { id: "us14-2", name: "Fabian Johnson", aliases: ["johnson", "fabian johnson", "f. johnson"], number: 23, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Borussia Mönchengladbach", hintInitials: "F. J." },
      { id: "us14-3", name: "Geoff Cameron", aliases: ["cameron", "geoff cameron", "g. cameron"], number: 20, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Stoke City", hintInitials: "G. C." },
      { id: "us14-4", name: "Matt Besler", aliases: ["besler", "matt besler", "m. besler"], number: 5, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Sporting Kansas City", hintInitials: "M. B." },
      { id: "us14-5", name: "DaMarcus Beasley", aliases: ["beasley", "damarcus beasley", "d. beasley"], number: 7, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Puebla", hintInitials: "D. B." },
      { id: "us14-6", name: "Jermaine Jones", aliases: ["jones", "jermaine jones", "j. jones"], number: 13, position: "MF", positionLabel: "RDM", x: 62, y: 55, hintClub: "Beşiktaş", hintInitials: "J. J." },
      { id: "us14-7", name: "Kyle Beckerman", aliases: ["beckerman", "kyle beckerman", "k. beckerman"], number: 15, position: "MF", positionLabel: "LDM", x: 38, y: 55, hintClub: "Real Salt Lake", hintInitials: "K. B." },
      { id: "us14-8", name: "Graham Zusi", aliases: ["zusi", "graham zusi", "g. zusi"], number: 19, position: "FW", positionLabel: "RW", x: 80, y: 35, hintClub: "Sporting Kansas City", hintInitials: "G. Z." },
      { id: "us14-9", name: "Michael Bradley", aliases: ["bradley", "michael bradley", "m. bradley"], number: 4, position: "MF", positionLabel: "CAM", x: 50, y: 35, hintClub: "Toronto FC", hintInitials: "M. B." },
      { id: "us14-10", name: "Alejandro Bedoya", aliases: ["bedoya", "alejandro bedoya", "a. bedoya"], number: 11, position: "FW", positionLabel: "LW", x: 20, y: 35, hintClub: "Nantes", hintInitials: "A. B." },
      { id: "us14-11", name: "Clint Dempsey", aliases: ["dempsey", "clint dempsey", "c. dempsey"], number: 8, position: "FW", positionLabel: "ST", x: 50, y: 15, hintClub: "Seattle Sounders FC", hintInitials: "C. D." }
    ]
  },
  // 38. MEXICO 1986
  {
    id: "mexico-1986",
    country: "Mexico",
    year: 1986,
    formation: "4-4-2",
    jerseyColor: "#388E3C",
    numberColor: "#FFFFFF",
    trimColor: "#D32F2F",
    squadName: "The Aztec Home Quarterfinalists",
    isIconic: true,
    players: [
      { id: "mx86-1", name: "Pablo Larios", aliases: ["larios", "pablo larios", "p. larios"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Cruz Azul", hintInitials: "P. L." },
      { id: "mx86-2", name: "Mario Trejo", aliases: ["trejo", "mario trejo", "m. trejo"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Club América", hintInitials: "M. T." },
      { id: "mx86-3", name: "Fernando Quirarte", aliases: ["quirarte", "fernando quirarte", "f. quirarte"], number: 3, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Guadalajara", hintInitials: "F. Q." },
      { id: "mx86-4", name: "Felix Cruz", aliases: ["cruz", "felix cruz", "f. cruz"], number: 14, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "UNAM", hintInitials: "F. C." },
      { id: "mx86-5", name: "Raúl Servín", aliases: ["servin", "raul servin", "r. servin"], number: 17, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "UNAM", hintInitials: "R. S." },
      { id: "mx86-6", name: "Carlos Muñoz", aliases: ["munoz", "carlos munoz", "c. munoz"], number: 16, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Tigres UANL", hintInitials: "C. M." },
      { id: "mx86-7", name: "Miguel España", aliases: ["espana", "miguel espana", "m. espana", "españa"], number: 7, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "UNAM", hintInitials: "M. E." },
      { id: "mx86-8", name: "Javier Aguirre", aliases: ["aguirre", "javier aguirre", "j. aguirre", "el vasco"], number: 13, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Atlante", hintInitials: "J. A." },
      { id: "mx86-9", name: "Manuel Negrete", aliases: ["negrete", "manuel negrete", "m. negrete"], number: 22, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "UNAM", hintInitials: "M. N." },
      { id: "mx86-10", name: "Hugo Sánchez", aliases: ["sanchez", "hugo sanchez", "h. sanchez", "hugol"], number: 9, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Real Madrid", hintInitials: "H. S." },
      { id: "mx86-11", name: "Tomás Boy", aliases: ["boy", "tomas boy", "t. boy"], number: 10, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Tigres UANL", hintInitials: "T. B." }
    ]
  },
  // 39. MEXICO 1998
  {
    id: "mexico-1998",
    country: "Mexico",
    year: 1998,
    formation: "4-4-2",
    jerseyColor: "#388E3C",
    numberColor: "#FFFFFF",
    trimColor: "#D32F2F",
    squadName: "The Aztec Comeback Kings",
    isIconic: true,
    players: [
      { id: "mx98-1", name: "Jorge Campos", aliases: ["campos", "jorge campos", "j. campos"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Chicago Fire", hintInitials: "J. C." },
      { id: "mx98-2", name: "Pável Pardo", aliases: ["pardo", "pavel pardo", "p. pardo"], number: 13, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Atlas", hintInitials: "P. P." },
      { id: "mx98-3", name: "Claudio Suárez", aliases: ["suarez", "claudio suarez", "c. suarez", "el emperador"], number: 2, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Guadalajara", hintInitials: "C. S." },
      { id: "mx98-4", name: "Duilio Davino", aliases: ["davino", "duilio davino", "d. davino"], number: 5, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Club América", hintInitials: "D. D." },
      { id: "mx98-5", name: "Joel Sánchez", aliases: ["sanchez", "joel sanchez", "j. sanchez"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Guadalajara", hintInitials: "J. S." },
      { id: "mx98-6", name: "Jesús Arellano", aliases: ["arellano", "jesus arellano", "j. arellano", "cabrito"], number: 17, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Guadalajara", hintInitials: "J. A." },
      { id: "mx98-7", name: "Alberto García Aspe", aliases: ["garcia aspe", "alberto garcia aspe", "a. garcia aspe"], number: 8, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "América", hintInitials: "A. G. A." },
      { id: "mx98-8", name: "Jaime Ordiales", aliases: ["ordiales", "jaime ordiales", "j. ordiales"], number: 6, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Toluca", hintInitials: "J. O." },
      { id: "mx98-9", name: "Cuauhtémoc Blanco", aliases: ["blanco", "cuauhtemoc blanco", "c. blanco"], number: 11, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Necaxa", hintInitials: "C. B." },
      { id: "mx98-10", name: "Luis Hernández", aliases: ["hernandez", "luis hernandez", "l. hernandez", "el matador"], number: 15, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Necaxa", hintInitials: "L. H." },
      { id: "mx98-11", name: "Francisco Palencia", aliases: ["palencia", "francisco palencia", "f. palencia"], number: 19, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Cruz Azul", hintInitials: "F. P." }
    ]
  },
  // 40. MEXICO 2014
  {
    id: "mexico-2014",
    country: "Mexico",
    year: 2014,
    formation: "5-3-2",
    jerseyColor: "#388E3C",
    numberColor: "#FFFFFF",
    trimColor: "#D32F2F",
    squadName: "The Ochoa Wall & Robben Dive",
    isIconic: true,
    players: [
      { id: "mx14-1", name: "Guillermo Ochoa", aliases: ["ochoa", "guillermo ochoa", "g. ochoa", "memo ochoa"], number: 13, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Ajaccio", hintInitials: "G. O." },
      { id: "mx14-2", name: "Paul Aguilar", aliases: ["aguilar", "paul aguilar", "p. aguilar"], number: 22, position: "DF", positionLabel: "RWB", x: 85, y: 65, hintClub: "Club América", hintInitials: "P. A." },
      { id: "mx14-3", name: "Francisco Rodríguez", aliases: ["rodriguez", "francisco rodriguez", "f. rodriguez", "maza rodriguez"], number: 2, position: "DF", positionLabel: "RCB", x: 65, y: 70, hintClub: "Club América", hintInitials: "F. R." },
      { id: "mx14-4", name: "Rafael Márquez", aliases: ["marquez", "rafael marquez", "r. marquez", "rafa marquez"], number: 4, position: "DF", positionLabel: "CB", x: 50, y: 75, hintClub: "León", hintInitials: "R. M." },
      { id: "mx14-5", name: "Héctor Moreno", aliases: ["moreno", "hector moreno", "h. moreno"], number: 15, position: "DF", positionLabel: "LCB", x: 35, y: 70, hintClub: "Espanyol", hintInitials: "H. M." },
      { id: "mx14-6", name: "Miguel Layún", aliases: ["layun", "miguel layun", "m. layun"], number: 7, position: "DF", positionLabel: "LWB", x: 15, y: 65, hintClub: "Club América", hintInitials: "M. L." },
      { id: "mx14-7", name: "Héctor Herrera", aliases: ["herrera", "hector herrera", "h. herrera"], number: 6, position: "MF", positionLabel: "RCM", x: 66, y: 48, hintClub: "Porto", hintInitials: "H. H." },
      { id: "mx14-8", name: "José Juan Vázquez", aliases: ["vazquez", "jose juan vazquez", "j. j. vazquez", "gallito vazquez"], number: 23, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "León", hintInitials: "J. J. V." },
      { id: "mx14-9", name: "Andrés Guardado", aliases: ["guardado", "andres guardado", "a. guardado"], number: 18, position: "MF", positionLabel: "LCM", x: 34, y: 48, hintClub: "Bayer Leverkusen", hintInitials: "A. G." },
      { id: "mx14-10", name: "Giovani dos Santos", aliases: ["dos santos", "giovani dos santos", "g. dos santos"], number: 10, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Villarreal", hintInitials: "G. D. S." },
      { id: "mx14-11", name: "Oribe Peralta", aliases: ["peralta", "oribe peralta", "o. peralta"], number: 19, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Santos Laguna", hintInitials: "O. P." }
    ]
  },
  // 41. CAMEROON 1990
  {
    id: "cameroon-1990",
    country: "Cameroon",
    year: 1990,
    formation: "4-4-2",
    jerseyColor: "#388E3C",
    numberColor: "#FFFFFF",
    trimColor: "#D32F2F",
    squadName: "The Untamed Lions Quarterfinal Run",
    isIconic: true,
    players: [
      { id: "cm90-1", name: "Thomas N'Kono", aliases: ["n'kono", "thomas n'kono", "t. n'kono", "nkono"], number: 16, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Espanyol", hintInitials: "T. N." },
      { id: "cm90-2", name: "Stephen Tataw", aliases: ["tataw", "stephen tataw", "s. tataw"], number: 14, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Tonnerre Yaoundé", hintInitials: "S. T." },
      { id: "cm90-3", name: "Jules Onana", aliases: ["onana", "jules onana", "j. onana"], number: 5, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Canon Yaoundé", hintInitials: "J. O." },
      { id: "cm90-4", name: "Benjamin Massing", aliases: ["massing", "benjamin massing", "b. massing"], number: 9, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Créteil", hintInitials: "B. M." },
      { id: "cm90-5", name: "Bertin Ebwellé", aliases: ["ebwelle", "bertin ebwelle", "b. ebwelle"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Tonnerre Yaoundé", hintInitials: "B. E." },
      { id: "cm90-6", name: "Louis-Paul M'Fédé", aliases: ["m'fede", "louis-paul m'fede", "l. p. m'fede", "mfede"], number: 8, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Canon Yaoundé", hintInitials: "L. P. M." },
      { id: "cm90-7", name: "André Kana-Biyik", aliases: ["kana-biyik", "andre kana-biyik", "a. kana-biyik", "kana biyik"], number: 21, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Metz", hintInitials: "A. K. B." },
      { id: "cm90-8", name: "Emmanuel Kundé", aliases: ["kunde", "emmanuel kunde", "e. kunde"], number: 4, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Canon Yaoundé", hintInitials: "E. K." },
      { id: "cm90-9", name: "Cyrille Makanaky", aliases: ["makanaky", "cyrille makanaky", "c. makanaky"], number: 20, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Toulon", hintInitials: "C. M." },
      { id: "cm90-10", name: "François Omam-Biyik", aliases: ["omam-biyik", "francois omam-biyik", "f. omam-biyik", "omam biyik"], number: 7, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Laval", hintInitials: "F. O. B." },
      { id: "cm90-11", name: "Roger Milla", aliases: ["milla", "roger milla", "r. milla"], number: 9, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Saint-Pierroise", hintInitials: "R. M." }
    ]
  },
  // 42. NIGERIA 1994
  {
    id: "nigeria-1994",
    country: "Nigeria",
    year: 1994,
    formation: "4-4-2",
    jerseyColor: "#2E7D32",
    numberColor: "#FFFFFF",
    trimColor: "#FFFFFF",
    squadName: "The Super Eagles US Debut Sensation",
    isIconic: true,
    players: [
      { id: "ng94-1", name: "Peter Rufai", aliases: ["rufai", "peter rufai", "p. rufai"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Go Ahead Eagles", hintInitials: "P. R." },
      { id: "ng94-2", name: "Augustine Eguavoen", aliases: ["eguavoen", "augustine eguavoen", "a. eguavoen"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Kortrijk", hintInitials: "A. E." },
      { id: "ng94-3", name: "Uche Okechukwu", aliases: ["okechukwu", "uche okechukwu", "u. okechukwu"], number: 5, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Fenerbahçe", hintInitials: "U. O." },
      { id: "ng94-4", name: "Chidi Nwanu", aliases: ["nwanu", "chidi nwanu", "c. nwanu"], number: 6, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Anderlecht", hintInitials: "C. N." },
      { id: "ng94-5", name: "Benedict Iroha", aliases: ["iroha", "benedict iroha", "b. iroha"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Vitesse Arnhem", hintInitials: "B. I." },
      { id: "ng94-6", name: "Finidi George", aliases: ["finidi", "finidi george", "f. george"], number: 7, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Ajax", hintInitials: "F. G." },
      { id: "ng94-7", name: "Sunday Oliseh", aliases: ["oliseh", "sunday oliseh", "s. oliseh"], number: 15, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Liège", hintInitials: "S. O." },
      { id: "ng94-8", name: "Jay-Jay Okocha", aliases: ["okocha", "jay-jay okocha", "jay jay okocha", "j. j. okocha"], number: 10, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Eintracht Frankfurt", hintInitials: "J. J. O." },
      { id: "ng94-9", name: "Emmanuel Amunike", aliases: ["amunike", "emmanuel amunike", "e. amunike"], number: 11, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Zamalek", hintInitials: "E. A." },
      { id: "ng94-10", name: "Daniel Amokachi", aliases: ["amokachi", "daniel amokachi", "d. amokachi", "the bull"], number: 14, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Club Brugge", hintInitials: "D. A." },
      { id: "ng94-11", name: "Rashidi Yekini", aliases: ["yekini", "rashidi yekini", "r. yekini"], number: 9, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Vitória de Setúbal", hintInitials: "R. Y." }
    ]
  },
  // 43. BRAZIL 1978
  {
    id: "brazil-1978",
    country: "Brazil",
    year: 1978,
    formation: "4-3-3",
    jerseyColor: "#FFEB3B",
    numberColor: "#0D47A1",
    trimColor: "#4CAF50",
    squadName: "The Unbeaten Moral Champions",
    isIconic: true,
    players: [
      { id: "br78-1", name: "Émerson Leão", aliases: ["leao", "emerson leao", "e. leao"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Palmeiras", hintInitials: "É. L." },
      { id: "br78-2", name: "Toninho", aliases: ["toninho", "antônio dias dos santos"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Flamengo", hintInitials: "T." },
      { id: "br78-3", name: "Oscar", aliases: ["oscar", "josé oscar bernardi"], number: 3, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Ponte Preta", hintInitials: "O." },
      { id: "br78-4", name: "Amaral", aliases: ["amaral", "joão justino amaral dos santos"], number: 4, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Guarani", hintInitials: "A." },
      { id: "br78-5", name: "Rodrigues Neto", aliases: ["rodrigues neto", "r. neto"], number: 6, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Botafogo", hintInitials: "R. N." },
      { id: "br78-6", name: "Batista", aliases: ["batista", "joão batista da silva"], number: 5, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "Internacional", hintInitials: "B." },
      { id: "br78-7", name: "Toninho Cerezo", aliases: ["cerezo", "toninho cerezo", "t. cerezo"], number: 17, position: "MF", positionLabel: "RCM", x: 66, y: 48, hintClub: "Atlético Mineiro", hintInitials: "T. C." },
      { id: "br78-8", name: "Dirceu", aliases: ["dirceu", "dirceu josé guimarães"], number: 18, position: "MF", positionLabel: "LCM", x: 34, y: 48, hintClub: "Vasco da Gama", hintInitials: "D." },
      { id: "br78-9", name: "Gil", aliases: ["gil", "gilberto alves"], number: 19, position: "FW", positionLabel: "RW", x: 80, y: 22, hintClub: "Botafogo", hintInitials: "G." },
      { id: "br78-10", name: "Roberto Dinamite", aliases: ["dinamite", "roberto dinamite", "r. dinamite"], number: 20, position: "FW", positionLabel: "ST", x: 50, y: 13, hintClub: "Vasco da Gama", hintInitials: "R. D." },
      { id: "br78-11", name: "Zico", aliases: ["zico", "arthur antunes coimbra"], number: 8, position: "FW", positionLabel: "LW", x: 20, y: 22, hintClub: "Flamengo", hintInitials: "Z." }
    ]
  },
  // 44. BRAZIL 1986
  {
    id: "brazil-1986",
    country: "Brazil",
    year: 1986,
    formation: "4-4-2",
    jerseyColor: "#FFEB3B",
    numberColor: "#0D47A1",
    trimColor: "#4CAF50",
    squadName: "The Tele Santana Classic Era II",
    isIconic: true,
    players: [
      { id: "br86-1", name: "Carlos", aliases: ["carlos", "carlos roberto gallo"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Corinthians", hintInitials: "C." },
      { id: "br86-2", name: "Edson Boaro", aliases: ["edson", "edson boaro", "e. boaro"], number: 13, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Corinthians", hintInitials: "E. B." },
      { id: "br86-3", name: "Júlio César", aliases: ["julio cesar", "j. cesar"], number: 4, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Guarani", hintInitials: "J. C." },
      { id: "br86-4", name: "Edinho", aliases: ["edinho", "edino nazareth filho"], number: 3, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Udinese", hintInitials: "E." },
      { id: "br86-5", name: "Branco", aliases: ["branco", "claudio ibrahim vaz leal"], number: 17, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Fluminense", hintInitials: "B." },
      { id: "br86-6", name: "Elzo", aliases: ["elzo", "elzo coelho"], number: 6, position: "MF", positionLabel: "RDM", x: 62, y: 52, hintClub: "Palmeiras", hintInitials: "E." },
      { id: "br86-7", name: "Alemão", aliases: ["alemao", "ricardo rogerio de brito"], number: 15, position: "MF", positionLabel: "LDM", x: 38, y: 52, hintClub: "Botafogo", hintInitials: "A." },
      { id: "br86-8", name: "Sócrates", aliases: ["socrates", "socrates brasileiro"], number: 18, position: "MF", positionLabel: "RAM", x: 80, y: 35, hintClub: "Flamengo", hintInitials: "S." },
      { id: "br86-9", name: "Junior", aliases: ["junior", "leovegildo lins da gama"], number: 6, position: "MF", positionLabel: "LAM", x: 20, y: 35, hintClub: "Torino", hintInitials: "J." },
      { id: "br86-10", name: "Müller", aliases: ["muller", "luis antonio correa da costa"], number: 7, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "São Paulo", hintInitials: "M." },
      { id: "br86-11", name: "Careca", aliases: ["careca", "antonio de oliveira filho"], number: 9, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "São Paulo", hintInitials: "C." }
    ]
  },
  // 45. BRAZIL 1990
  {
    id: "brazil-1990",
    country: "Brazil",
    year: 1990,
    formation: "5-3-2",
    jerseyColor: "#FFEB3B",
    numberColor: "#0D47A1",
    trimColor: "#4CAF50",
    squadName: "The Lazaroni Defensiveness Fall",
    isIconic: true,
    players: [
      { id: "br90-1", name: "Taffarel", aliases: ["taffarel", "claudio taffarel", "c. taffarel"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Internacional", hintInitials: "T." },
      { id: "br90-2", name: "Jorginho", aliases: ["jorginho", "jorge de amorim campos"], number: 2, position: "DF", positionLabel: "RWB", x: 85, y: 65, hintClub: "Bayer Leverkusen", hintInitials: "J." },
      { id: "br90-3", name: "Mauro Galvão", aliases: ["mauro galvao", "m. galvao"], number: 3, position: "DF", positionLabel: "RCB", x: 65, y: 70, hintClub: "Botafogo", hintInitials: "M. G." },
      { id: "br90-4", name: "Ricardo Gomes", aliases: ["ricardo gomes", "r. gomes"], number: 13, position: "DF", positionLabel: "SW", x: 50, y: 75, hintClub: "Benfica", hintInitials: "R. G." },
      { id: "br90-5", name: "Ricardo Rocha", aliases: ["ricardo rocha", "r. rocha"], number: 4, position: "DF", positionLabel: "LCB", x: 35, y: 70, hintClub: "São Paulo", hintInitials: "R. R." },
      { id: "br90-6", name: "Branco", aliases: ["branco", "claudio ibrahim vaz leal"], number: 6, position: "DF", positionLabel: "LWB", x: 15, y: 65, hintClub: "Porto", hintInitials: "B." },
      { id: "br90-7", name: "Dunga", aliases: ["dunga", "carlos caetano bledorn"], number: 8, position: "MF", positionLabel: "RCM", x: 65, y: 48, hintClub: "Fiorentina", hintInitials: "D." },
      { id: "br90-8", name: "Alemão", aliases: ["alemao", "ricardo rogerio de brito"], number: 5, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "Napoli", hintInitials: "A." },
      { id: "br90-9", name: "Valdo", aliases: ["valdo", "valdo filho"], number: 9, position: "MF", positionLabel: "LCM", x: 35, y: 48, hintClub: "Benfica", hintInitials: "V." },
      { id: "br90-10", name: "Müller", aliases: ["muller", "luis antonio correa da costa"], number: 15, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Torino", hintInitials: "M." },
      { id: "br90-11", name: "Careca", aliases: ["careca", "antonio de oliveira filho"], number: 9, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Napoli", hintInitials: "C." }
    ]
  },
  // 46. BRAZIL 2010
  {
    id: "brazil-2010",
    country: "Brazil",
    year: 2010,
    formation: "4-2-3-1",
    jerseyColor: "#FFEB3B",
    numberColor: "#0D47A1",
    trimColor: "#4CAF50",
    squadName: "The Defensive Dunga Pragmatism Exit",
    isIconic: true,
    players: [
      { id: "br10-1", name: "Júlio César", aliases: ["julio cesar", "j. cesar"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Inter Milan", hintInitials: "J. C." },
      { id: "br10-2", name: "Maicon", aliases: ["maicon", "maicon douglas"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Inter Milan", hintInitials: "M." },
      { id: "br10-3", name: "Lúcio", aliases: ["lucio", "lucimar da silva ferreira"], number: 3, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Inter Milan", hintInitials: "L." },
      { id: "br10-4", name: "Juan", aliases: ["juan", "juan silveira dos santos"], number: 4, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "AS Roma", hintInitials: "J." },
      { id: "br10-5", name: "Michel Bastos", aliases: ["bastos", "michel bastos", "m. bastos"], number: 6, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Lyon", hintInitials: "M. B." },
      { id: "br10-6", name: "Felipe Melo", aliases: ["felipe melo", "f. melo", "melo"], number: 5, position: "MF", positionLabel: "RDM", x: 62, y: 55, hintClub: "Juventus", hintInitials: "F. M." },
      { id: "br10-7", name: "Gilberto Silva", aliases: ["gilberto silva", "g. silva"], number: 8, position: "MF", positionLabel: "LDM", x: 38, y: 55, hintClub: "Panathinaikos", hintInitials: "G. S." },
      { id: "br10-8", name: "Daniel Alves", aliases: ["dani alves", "daniel alves", "d. alves"], number: 13, position: "FW", positionLabel: "RW", x: 80, y: 35, hintClub: "Barcelona", hintInitials: "D. A." },
      { id: "br10-9", name: "Kaká", aliases: ["kaka", "ricardo izecson"], number: 10, position: "MF", positionLabel: "CAM", x: 50, y: 35, hintClub: "Real Madrid", hintInitials: "K." },
      { id: "br10-10", name: "Robinho", aliases: ["robinho", "robson de souza"], number: 11, position: "FW", positionLabel: "LW", x: 20, y: 35, hintClub: "Santos", hintInitials: "R." },
      { id: "br10-11", name: "Luís Fabiano", aliases: ["luis fabiano", "l. fabiano", "fabiano"], number: 9, position: "FW", positionLabel: "ST", x: 50, y: 15, hintClub: "Sevilla", hintInitials: "L. F." }
    ]
  },
  // 47. BRAZIL 2018
  {
    id: "brazil-2018",
    country: "Brazil",
    year: 2018,
    formation: "4-3-3",
    jerseyColor: "#FFEB3B",
    numberColor: "#0D47A1",
    trimColor: "#4CAF50",
    squadName: "Tite's Balanced Quarterfinal Team",
    isIconic: true,
    players: [
      { id: "br18-1", name: "Alisson Becker", aliases: ["alisson", "alisson becker", "a. becker"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "AS Roma", hintInitials: "A. B." },
      { id: "br18-2", name: "Fagner", aliases: ["fagner", "fagner conservas"], number: 22, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Corinthians", hintInitials: "F." },
      { id: "br18-3", name: "Thiago Silva", aliases: ["thiago silva", "t. silva"], number: 2, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Paris Saint-Germain", hintInitials: "T. S." },
      { id: "br18-4", name: "Miranda", aliases: ["miranda", "joao miranda"], number: 3, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Inter Milan", hintInitials: "M." },
      { id: "br18-5", name: "Marcelo", aliases: ["marcelo", "marcelo vieira"], number: 12, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Real Madrid", hintInitials: "M." },
      { id: "br18-6", name: "Fernandinho", aliases: ["fernandinho"], number: 17, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "Manchester City", hintInitials: "F." },
      { id: "br18-7", name: "Paulinho", aliases: ["paulinho", "jose paulo bezerra"], number: 15, position: "MF", positionLabel: "RCM", x: 66, y: 48, hintClub: "Barcelona", hintInitials: "P." },
      { id: "br18-8", name: "Philippe Coutinho", aliases: ["coutinho", "philippe coutinho", "p. coutinho"], number: 11, position: "MF", positionLabel: "LCM", x: 34, y: 48, hintClub: "Barcelona", hintInitials: "P. C." },
      { id: "br18-9", name: "Willian", aliases: ["willian", "willian borges"], number: 19, position: "FW", positionLabel: "RW", x: 80, y: 22, hintClub: "Chelsea", hintInitials: "W." },
      { id: "br18-10", name: "Gabriel Jesus", aliases: ["jesus", "gabriel jesus", "g. jesus"], number: 9, position: "FW", positionLabel: "ST", x: 50, y: 13, hintClub: "Manchester City", hintInitials: "G. J." },
      { id: "br18-11", name: "Neymar", aliases: ["neymar", "neymar jr", "n. jr"], number: 10, position: "FW", positionLabel: "LW", x: 20, y: 22, hintClub: "Paris Saint-Germain", hintInitials: "N." }
    ]
  },
  // 48. BRAZIL 2022
  {
    id: "brazil-2022-wc",
    country: "Brazil",
    year: 2022,
    formation: "4-3-3",
    jerseyColor: "#FFEB3B",
    numberColor: "#0D47A1",
    trimColor: "#4CAF50",
    squadName: "The Croatia Penalty Shootout Heartbreak",
    isIconic: true,
    players: [
      { id: "br22-1", name: "Alisson Becker", aliases: ["alisson", "alisson becker", "a. becker"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Liverpool", hintInitials: "A. B." },
      { id: "br22-2", name: "Éder Militão", aliases: ["militao", "eder militao", "e. militao"], number: 14, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Real Madrid", hintInitials: "É. M." },
      { id: "br22-3", name: "Marquinhos", aliases: ["marquinhos", "marcos aoas"], number: 4, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Paris Saint-Germain", hintInitials: "M." },
      { id: "br22-4", name: "Thiago Silva", aliases: ["thiago silva", "t. silva"], number: 3, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Chelsea", hintInitials: "T. S." },
      { id: "br22-5", name: "Danilo", aliases: ["danilo", "danilo da silva"], number: 2, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Juventus", hintInitials: "D." },
      { id: "br22-6", name: "Casemiro", aliases: ["casemiro", "carlos casemiro"], number: 5, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "Manchester United", hintInitials: "C." },
      { id: "br22-7", name: "Lucas Paquetá", aliases: ["paqueta", "lucas paqueta", "l. paqueta"], number: 7, position: "MF", positionLabel: "RCM", x: 66, y: 48, hintClub: "West Ham United", hintInitials: "L. P." },
      { id: "br22-8", name: "Neymar", aliases: ["neymar", "neymar jr", "n. jr"], number: 10, position: "MF", positionLabel: "LCM", x: 34, y: 48, hintClub: "Paris Saint-Germain", hintInitials: "N." },
      { id: "br22-9", name: "Raphinha", aliases: ["raphinha", "raphael dias"], number: 11, position: "FW", positionLabel: "RW", x: 80, y: 22, hintClub: "Barcelona", hintInitials: "R." },
      { id: "br22-10", name: "Richarlison", aliases: ["richarlison", "pombo"], number: 9, position: "FW", positionLabel: "ST", x: 50, y: 13, hintClub: "Tottenham Hotspur", hintInitials: "R." },
      { id: "br22-11", name: "Vinícius Júnior", aliases: ["vinicius", "vinicius jr", "vini jr", "v. jr", "vinicius junior"], number: 20, position: "FW", positionLabel: "LW", x: 20, y: 22, hintClub: "Real Madrid", hintInitials: "V. J." }
    ]
  },
  // 49. CAMEROON 2002
  {
    id: "cameroon-2002",
    country: "Cameroon",
    year: 2002,
    formation: "3-5-2",
    jerseyColor: "#388E3C",
    numberColor: "#FFFFFF",
    trimColor: "#D32F2F",
    squadName: "The Sleeveless Shirt Sensation",
    isIconic: true,
    players: [
      { id: "cm02-1", name: "Alioum Boukar", aliases: ["boukar", "alioum boukar", "a. boukar"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Samsunspor", hintInitials: "A. B." },
      { id: "cm02-2", name: "Rigobert Song", aliases: ["song", "rigobert song", "r. song"], number: 4, position: "DF", positionLabel: "RCB", x: 65, y: 72, hintClub: "1. FC Köln", hintInitials: "R. S." },
      { id: "cm02-3", name: "Raymond Kalla", aliases: ["kalla", "raymond kalla", "r. kalla"], number: 5, position: "DF", positionLabel: "CB", x: 50, y: 75, hintClub: "Extremadura", hintInitials: "R. K." },
      { id: "cm02-4", name: "Bill Tchato", aliases: ["tchato", "bill tchato", "b. tchato"], number: 3, position: "DF", positionLabel: "LCB", x: 35, y: 72, hintClub: "Montpellier", hintInitials: "B. T." },
      { id: "cm02-5", name: "Geremi Njitap", aliases: ["geremi", "geremi njitap"], number: 8, position: "DF", positionLabel: "RWB", x: 85, y: 58, hintClub: "Real Madrid", hintInitials: "G." },
      { id: "cm02-6", name: "Pierre Womé", aliases: ["wome", "pierre wome", "p. wome"], number: 2, position: "DF", positionLabel: "LWB", x: 15, y: 58, hintClub: "Bologna", hintInitials: "P. W." },
      { id: "cm02-7", name: "Lauren", aliases: ["lauren", "lauren etame mayer"], number: 12, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Arsenal", hintInitials: "L." },
      { id: "cm02-8", name: "Marc-Vivien Foé", aliases: ["foe", "marc-vivien foe", "m. foe"], number: 17, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "Lyon", hintInitials: "M. V. F." },
      { id: "cm02-9", name: "Daniel Ngom Kome", aliases: ["kome", "daniel ngom kome", "d. kome"], number: 20, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Numancia", hintInitials: "D. N. K." },
      { id: "cm02-10", name: "Samuel Eto'o", aliases: ["eto'o", "samuel eto'o", "s. eto'o", "etoo"], number: 9, position: "FW", positionLabel: "RST", x: 65, y: 18, hintClub: "Mallorca", hintInitials: "S. E." },
      { id: "cm02-11", name: "Patrick M'Boma", aliases: ["m'boma", "patrick m'boma", "p. m'boma", "mboma"], number: 10, position: "FW", positionLabel: "LST", x: 35, y: 18, hintClub: "Sunderland", hintInitials: "P. M." }
    ]
  },
  // 50. NIGERIA 1998
  {
    id: "nigeria-1998",
    country: "Nigeria",
    year: 1998,
    formation: "4-4-2",
    jerseyColor: "#2E7D32",
    numberColor: "#FFFFFF",
    trimColor: "#FFFFFF",
    squadName: "The Super Eagles France Spectacle",
    isIconic: true,
    players: [
      { id: "ng98-1", name: "Peter Rufai", aliases: ["rufai", "peter rufai", "p. rufai"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Deportivo La Coruña", hintInitials: "P. R." },
      { id: "ng98-2", name: "Mobolaji Johnson", aliases: ["babayaro", "celestine babayaro", "c. babayaro"], number: 3, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Chelsea", hintInitials: "C. B." },
      { id: "ng98-3", name: "Uche Okechukwu", aliases: ["okechukwu", "uche okechukwu", "u. okechukwu"], number: 5, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Fenerbahçe", hintInitials: "U. O." },
      { id: "ng98-4", name: "Taribo West", aliases: ["west", "taribo west", "t. west"], number: 6, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Inter Milan", hintInitials: "T. W." },
      { id: "ng98-5", name: "Augustine Eguavoen", aliases: ["eguavoen", "augustine eguavoen", "a. eguavoen"], number: 2, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Torpedo Moscow", hintInitials: "A. E." },
      { id: "ng98-6", name: "Finidi George", aliases: ["finidi", "finidi george", "f. george"], number: 7, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Real Betis", hintInitials: "F. G." },
      { id: "ng98-7", name: "Sunday Oliseh", aliases: ["oliseh", "sunday oliseh", "s. oliseh"], number: 15, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Ajax", hintInitials: "S. O." },
      { id: "ng98-8", name: "Jay-Jay Okocha", aliases: ["okocha", "jay-jay okocha", "jay jay okocha", "j. j. okocha"], number: 10, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Fenerbahçe", hintInitials: "J. J. O." },
      { id: "ng98-9", name: "Garba Lawal", aliases: ["lawal", "garba lawal", "g. lawal"], number: 11, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Roda JC", hintInitials: "G. L." },
      { id: "ng98-10", name: "Victor Ikpeba", aliases: ["ikpeba", "victor ikpeba", "v. ikpeba"], number: 20, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Monaco", hintInitials: "V. I." },
      { id: "ng98-11", name: "Nwankwo Kanu", aliases: ["kanu", "nwankwo kanu", "n. kanu"], number: 4, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Inter Milan", hintInitials: "N. K." }
    ]
  }
];
