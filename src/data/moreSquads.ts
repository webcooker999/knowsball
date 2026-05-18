import { Squad } from './squads';

export const MORE_SQUADS: Squad[] = [
  // 1. FRANCE 2006 (The Finalists)
  {
    id: "france-2006",
    country: "France",
    year: 2006,
    formation: "4-2-3-1",
    jerseyColor: "#0F172A", // Dark Navy
    numberColor: "#FFFFFF",
    trimColor: "#E53935",
    squadName: "Zidane's Last Dance",
    isIconic: true,
    players: [
      { id: "fr06-1", name: "Fabien Barthez", aliases: ["barthez", "fabien barthez", "f. barthez"], number: 16, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Marseille", hintInitials: "F. B." },
      { id: "fr06-2", name: "Willy Sagnol", aliases: ["sagnol", "willy sagnol", "w. sagnol"], number: 19, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Bayern Munich", hintInitials: "W. S." },
      { id: "fr06-3", name: "Lilian Thuram", aliases: ["thuram", "lilian thuram", "l. thuram"], number: 15, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Juventus", hintInitials: "L. T." },
      { id: "fr06-4", name: "William Gallas", aliases: ["gallas", "william gallas", "w. gallas"], number: 5, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Chelsea", hintInitials: "W. G." },
      { id: "fr06-5", name: "Éric Abidal", aliases: ["abidal", "eric abidal", "e. abidal"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Lyon", hintInitials: "E. A." },
      { id: "fr06-6", name: "Patrick Vieira", aliases: ["vieira", "patrick vieira", "p. vieira"], number: 4, position: "MF", positionLabel: "RDM", x: 62, y: 55, hintClub: "Juventus", hintInitials: "P. V." },
      { id: "fr06-7", name: "Claude Makélélé", aliases: ["makelele", "claude makelele", "c. makelele"], number: 6, position: "MF", positionLabel: "LDM", x: 38, y: 55, hintClub: "Chelsea", hintInitials: "C. M." },
      { id: "fr06-8", name: "Franck Ribéry", aliases: ["ribery", "franck ribery", "f. ribery"], number: 22, position: "MF", positionLabel: "RAM", x: 80, y: 35, hintClub: "Marseille", hintInitials: "F. R." },
      { id: "fr06-9", name: "Zinedine Zidane", aliases: ["zidane", "zinedine zidane", "z. zidane", "zizou"], number: 10, position: "MF", positionLabel: "CAM", x: 50, y: 35, hintClub: "Real Madrid", hintInitials: "Z. Z." },
      { id: "fr06-10", name: "Florent Malouda", aliases: ["malouda", "florent malouda", "f. malouda"], number: 7, position: "MF", positionLabel: "LAM", x: 20, y: 35, hintClub: "Lyon", hintInitials: "F. M." },
      { id: "fr06-11", name: "Thierry Henry", aliases: ["henry", "thierry henry", "t. henry"], number: 12, position: "FW", positionLabel: "ST", x: 50, y: 15, hintClub: "Arsenal", hintInitials: "T. H." }
    ]
  },
  // 2. BRAZIL 1958 (First Title Winners)
  {
    id: "brazil-1958",
    country: "Brazil",
    year: 1958,
    formation: "4-2-4",
    jerseyColor: "#FFEB3B",
    numberColor: "#0D47A1",
    trimColor: "#4CAF50",
    squadName: "The Birth of O Rei",
    isIconic: false,
    players: [
      { id: "br58-1", name: "Gilmar", aliases: ["gilmar", "gylmar"], number: 3, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Corinthians", hintInitials: "G." },
      { id: "br58-2", name: "Djalma Santos", aliases: ["djalma santos", "djalma", "d. santos"], number: 4, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Portuguesa", hintInitials: "D. S." },
      { id: "br58-3", name: "Bellini", aliases: ["bellini", "hilderaldo bellini"], number: 15, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Vasco da Gama", hintInitials: "B." },
      { id: "br58-4", name: "Orlando Peçanha", aliases: ["orlando", "orlando pecanha", "o. pecanha"], number: 16, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Vasco da Gama", hintInitials: "O. P." },
      { id: "br58-5", name: "Nílton Santos", aliases: ["nilton santos", "nilton", "n. santos"], number: 12, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Botafogo", hintInitials: "N. S." },
      { id: "br58-6", name: "Zito", aliases: ["zito", "jose ely de miranda"], number: 19, position: "MF", positionLabel: "RDM", x: 60, y: 52, hintClub: "Santos", hintInitials: "Z." },
      { id: "br58-7", name: "Didi", aliases: ["didi", "valdir pereira"], number: 6, position: "MF", positionLabel: "LDM", x: 40, y: 52, hintClub: "Botafogo", hintInitials: "D." },
      { id: "br58-8", name: "Garrincha", aliases: ["garrincha", "mane garrincha"], number: 11, position: "FW", positionLabel: "RW", x: 82, y: 22, hintClub: "Botafogo", hintInitials: "G." },
      { id: "br58-9", name: "Vavá", aliases: ["vava", "edvaldo izidio neto"], number: 20, position: "FW", positionLabel: "RST", x: 62, y: 15, hintClub: "Vasco da Gama", hintInitials: "V." },
      { id: "br58-10", name: "Pelé", aliases: ["pele", "edson arantes do nascimento"], number: 10, position: "FW", positionLabel: "LST", x: 38, y: 15, hintClub: "Santos", hintInitials: "P." },
      { id: "br58-11", name: "Mário Zagallo", aliases: ["zagallo", "mario zagallo", "m. zagallo"], number: 7, position: "FW", positionLabel: "LW", x: 18, y: 22, hintClub: "Flamengo", hintInitials: "M. Z." }
    ]
  },
  // 3. ARGENTINA 2014 (The Finalists)
  {
    id: "argentina-2014",
    country: "Argentina",
    year: 2014,
    formation: "4-4-2",
    jerseyColor: "#74C3FF",
    numberColor: "#000000",
    trimColor: "#FFFFFF",
    squadName: "So Close Yet So Far",
    isIconic: true,
    players: [
      { id: "arg14-1", name: "Sergio Romero", aliases: ["romero", "sergio romero", "s. romero"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Monaco", hintInitials: "S. R." },
      { id: "arg14-2", name: "Pablo Zabaleta", aliases: ["zabaleta", "pablo zabaleta", "p. zabaleta"], number: 4, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Manchester City", hintInitials: "P. Z." },
      { id: "arg14-3", name: "Martín Demichelis", aliases: ["demichelis", "martin demichelis", "m. demichelis"], number: 15, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Manchester City", hintInitials: "M. D." },
      { id: "arg14-4", name: "Ezequiel Garay", aliases: ["garay", "ezequiel garay", "e. garay"], number: 2, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Benfica", hintInitials: "E. G." },
      { id: "arg14-5", name: "Marcos Rojo", aliases: ["rojo", "marcos rojo", "m. rojo"], number: 16, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Sporting CP", hintInitials: "M. R." },
      { id: "arg14-6", name: "Enzo Pérez", aliases: ["perez", "enzo perez", "e. perez"], number: 8, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Benfica", hintInitials: "E. P." },
      { id: "arg14-7", name: "Lucas Biglia", aliases: ["biglia", "lucas biglia", "l. biglia"], number: 6, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Lazio", hintInitials: "L. B." },
      { id: "arg14-8", name: "Javier Mascherano", aliases: ["mascherano", "javier mascherano", "j. mascherano"], number: 14, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Barcelona", hintInitials: "J. M." },
      { id: "arg14-9", name: "Ezequiel Lavezzi", aliases: ["lavezzi", "ezequiel lavezzi", "e. lavezzi"], number: 22, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "PSG", hintInitials: "E. L." },
      { id: "arg14-10", name: "Lionel Messi", aliases: ["messi", "lionel messi", "l. messi", "leo messi"], number: 10, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Barcelona", hintInitials: "L. M." },
      { id: "arg14-11", name: "Gonzalo Higuaín", aliases: ["higuain", "gonzalo higuain", "g. higuain", "el pipita"], number: 9, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Napoli", hintInitials: "G. H." }
    ]
  },
  // 4. CROATIA 2018 (The Historic Run)
  {
    id: "croatia-2018",
    country: "Croatia",
    year: 2018,
    formation: "4-3-3",
    jerseyColor: "#E53935", // Red checkered
    numberColor: "#FFFFFF",
    trimColor: "#FFFFFF",
    squadName: "The Checkered Golden Generation",
    isIconic: true,
    players: [
      { id: "cr18-1", name: "Danijel Subašić", aliases: ["subasic", "danijel subasic", "d. subasic"], number: 23, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Monaco", hintInitials: "D. S." },
      { id: "cr18-2", name: "Šime Vrsaljko", aliases: ["vrsaljko", "sime vrsaljko", "s. vrsaljko"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Atletico Madrid", hintInitials: "S. V." },
      { id: "cr18-3", name: "Dejan Lovren", aliases: ["lovren", "dejan lovren", "d. lovren"], number: 6, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Liverpool", hintInitials: "D. L." },
      { id: "cr18-4", name: "Domagoj Vida", aliases: ["vida", "domagoj vida", "d. vida"], number: 21, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Besiktas", hintInitials: "D. V." },
      { id: "cr18-5", name: "Ivan Strinić", aliases: ["strinic", "ivan strinic", "i. strinic"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "AC Milan", hintInitials: "I. S." },
      { id: "cr18-6", name: "Marcelo Brozović", aliases: ["brozovic", "marcelo brozovic", "m. brozovic"], number: 11, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "Inter Milan", hintInitials: "M. B." },
      { id: "cr18-7", name: "Luka Modrić", aliases: ["modric", "luka modric", "l. modric"], number: 10, position: "MF", positionLabel: "RCM", x: 66, y: 48, hintClub: "Real Madrid", hintInitials: "L. M." },
      { id: "cr18-8", name: "Ivan Rakitić", aliases: ["rakitic", "ivan rakitic", "i. rakitic"], number: 7, position: "MF", positionLabel: "LCM", x: 34, y: 48, hintClub: "Barcelona", hintInitials: "I. R." },
      { id: "cr18-9", name: "Ante Rebić", aliases: ["rebic", "ante rebic", "a. rebic"], number: 18, position: "FW", positionLabel: "RW", x: 80, y: 22, hintClub: "Eintracht Frankfurt", hintInitials: "A. R." },
      { id: "cr18-10", name: "Mario Mandžukić", aliases: ["mandzukic", "mario mandzukic", "m. mandzukic", "mandzo"], number: 17, position: "FW", positionLabel: "ST", x: 50, y: 13, hintClub: "Juventus", hintInitials: "M. M." },
      { id: "cr18-11", name: "Ivan Perišić", aliases: ["perisic", "ivan perisic", "i. perisic"], number: 4, position: "FW", positionLabel: "LW", x: 20, y: 22, hintClub: "Inter Milan", hintInitials: "I. P." }
    ]
  },
  // 5. BELGIUM 2018 (Third Place Finishers)
  {
    id: "belgium-2018",
    country: "Belgium",
    year: 2018,
    formation: "3-4-3",
    jerseyColor: "#E53935", // Vibrant Red
    numberColor: "#FFD54F",
    trimColor: "#000000",
    squadName: "The Red Devils Bronze Run",
    isIconic: true,
    players: [
      { id: "be18-1", name: "Thibaut Courtois", aliases: ["courtois", "thibaut courtois", "t. courtois"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Chelsea", hintInitials: "T. C." },
      { id: "be18-2", name: "Toby Alderweireld", aliases: ["alderweireld", "toby alderweireld", "t. alderweireld"], number: 2, position: "DF", positionLabel: "RCB", x: 70, y: 70, hintClub: "Tottenham", hintInitials: "T. A." },
      { id: "be18-3", name: "Vincent Kompany", aliases: ["kompany", "vincent kompany", "v. kompany"], number: 4, position: "DF", positionLabel: "CB", x: 50, y: 74, hintClub: "Manchester City", hintInitials: "V. K." },
      { id: "be18-4", name: "Jan Vertonghen", aliases: ["vertonghen", "jan vertonghen", "j. vertonghen"], number: 5, position: "DF", positionLabel: "LCB", x: 30, y: 70, hintClub: "Tottenham", hintInitials: "J. V." },
      { id: "be18-5", name: "Thomas Meunier", aliases: ["meunier", "thomas meunier", "t. meunier"], number: 15, position: "MF", positionLabel: "RM", x: 85, y: 48, hintClub: "PSG", hintInitials: "T. M." },
      { id: "be18-6", name: "Marouane Fellaini", aliases: ["fellaini", "marouane fellaini", "m. fellaini", "felli"], number: 8, position: "MF", positionLabel: "RCM", x: 62, y: 52, hintClub: "Manchester United", hintInitials: "M. F." },
      { id: "be18-7", name: "Axel Witsel", aliases: ["witsel", "axel witsel", "a. witsel"], number: 6, position: "MF", positionLabel: "LCM", x: 38, y: 52, hintClub: "Tianjin Quanjian", hintInitials: "A. W." },
      { id: "be18-8", name: "Nacer Chadli", aliases: ["chadli", "nacer chadli", "n. chadli"], number: 22, position: "MF", positionLabel: "LM", x: 15, y: 48, hintClub: "West Brom", hintInitials: "N. C." },
      { id: "be18-9", name: "Kevin De Bruyne", aliases: ["de bruyne", "kevin de bruyne", "k. de bruyne", "kdb"], number: 7, position: "FW", positionLabel: "RW", x: 78, y: 22, hintClub: "Manchester City", hintInitials: "K. D. B." },
      { id: "be18-10", name: "Romelu Lukaku", aliases: ["lukaku", "romelu lukaku", "r. lukaku"], number: 9, position: "FW", positionLabel: "ST", x: 50, y: 15, hintClub: "Manchester United", hintInitials: "R. L." },
      { id: "be18-11", name: "Eden Hazard", aliases: ["hazard", "eden hazard", "e. hazard"], number: 10, position: "FW", positionLabel: "LW", x: 22, y: 22, hintClub: "Chelsea", hintInitials: "E. H." }
    ]
  },
  // 6. MOROCCO 2022 (The Historical Underdogs)
  {
    id: "morocco-2022",
    country: "Morocco",
    year: 2022,
    formation: "4-3-3",
    jerseyColor: "#C62828", // Deep Red
    numberColor: "#00E676",
    trimColor: "#FFD54F",
    squadName: "The Atlas Lions Semifinalists",
    isIconic: true,
    players: [
      { id: "ma22-1", name: "Yassine Bounou", aliases: ["bounou", "yassine bounou", "y. bounou", "bono"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Sevilla", hintInitials: "Y. B." },
      { id: "ma22-2", name: "Achraf Hakimi", aliases: ["hakimi", "achraf hakimi", "a. hakimi"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "PSG", hintInitials: "A. H." },
      { id: "ma22-3", name: "Achraf Dari", aliases: ["dari", "achraf dari", "a. dari"], number: 20, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Brest", hintInitials: "A. D." },
      { id: "ma22-4", name: "Romain Saïss", aliases: ["saiss", "romain saiss", "r. saiss"], number: 6, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Besiktas", hintInitials: "R. S." },
      { id: "ma22-5", name: "Noussair Mazraoui", aliases: ["mazraoui", "noussair mazraoui", "n. mazraoui"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Bayern Munich", hintInitials: "N. M." },
      { id: "ma22-6", name: "Sofyan Amrabat", aliases: ["amrabat", "sofyan amrabat", "s. amrabat"], number: 4, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "Fiorentina", hintInitials: "S. A." },
      { id: "ma22-7", name: "Azzedine Ounahi", aliases: ["ounahi", "azzedine ounahi", "a. ounahi"], number: 8, position: "MF", positionLabel: "RCM", x: 66, y: 48, hintClub: "Angers", hintInitials: "A. O." },
      { id: "ma22-8", name: "Jawad El Yamiq", aliases: ["el yamiq", "jawad el yamiq", "j. el yamiq"], number: 18, position: "DF", positionLabel: "LCM", x: 34, y: 48, hintClub: "Real Valladolid", hintInitials: "J. E. Y." },
      { id: "ma22-9", name: "Hakim Ziyech", aliases: ["ziyech", "hakim ziyech", "h. ziyech"], number: 7, position: "FW", positionLabel: "RW", x: 80, y: 22, hintClub: "Chelsea", hintInitials: "H. Z." },
      { id: "ma22-10", name: "Youssef En-Nesyri", aliases: ["en-nesyri", "youssef en-nesyri", "y. en-nesyri"], number: 19, position: "FW", positionLabel: "ST", x: 50, y: 13, hintClub: "Sevilla", hintInitials: "Y. E. N." },
      { id: "ma22-11", name: "Sofiane Boufal", aliases: ["boufal", "sofiane boufal", "s. boufal"], number: 17, position: "FW", positionLabel: "LW", x: 20, y: 22, hintClub: "Angers", hintInitials: "S. B." }
    ]
  },
  // 7. PORTUGAL 2022 (The 6-1 Switz Masterclass)
  {
    id: "portugal-2022",
    country: "Portugal",
    year: 2022,
    formation: "4-3-3",
    jerseyColor: "#B71C1C", // Dark Maroon Red
    numberColor: "#FFD54F",
    trimColor: "#2E7D32",
    squadName: "The New Wave Selection",
    isIconic: true,
    players: [
      { id: "pt22-1", name: "Diogo Costa", aliases: ["diogo costa", "d. costa"], number: 22, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "FC Porto", hintInitials: "D. C." },
      { id: "pt22-2", name: "Diogo Dalot", aliases: ["diogo dalot", "d. dalot", "dalot"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Manchester United", hintInitials: "D. D." },
      { id: "pt22-3", name: "Pepe", aliases: ["pepe", "kepler laveran"], number: 3, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "FC Porto", hintInitials: "P." },
      { id: "pt22-4", name: "Rúben Dias", aliases: ["ruben dias", "r. dias", "dias"], number: 4, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Manchester City", hintInitials: "R. D." },
      { id: "pt22-5", name: "Raphaël Guerreiro", aliases: ["guerreiro", "raphael guerreiro", "r. guerreiro"], number: 5, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Borussia Dortmund", hintInitials: "R. G." },
      { id: "pt22-6", name: "William Carvalho", aliases: ["carvalho", "william carvalho", "w. carvalho"], number: 14, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "Real Betis", hintInitials: "W. C." },
      { id: "pt22-7", name: "Otávio", aliases: ["otavio"], number: 25, position: "MF", positionLabel: "RCM", x: 66, y: 48, hintClub: "FC Porto", hintInitials: "O." },
      { id: "pt22-8", name: "Bernardo Silva", aliases: ["bernardo silva", "bernardo", "b. silva"], number: 10, position: "MF", positionLabel: "LCM", x: 34, y: 48, hintClub: "Manchester City", hintInitials: "B. S." },
      { id: "pt22-9", name: "Bruno Fernandes", aliases: ["bruno fernandes", "bruno", "b. fernandes"], number: 8, position: "FW", positionLabel: "RW", x: 80, y: 22, hintClub: "Manchester United", hintInitials: "B. F." },
      { id: "pt22-10", name: "Gonçalo Ramos", aliases: ["ramos", "goncalo ramos", "g. ramos"], number: 26, position: "FW", positionLabel: "ST", x: 50, y: 13, hintClub: "SL Benfica", hintInitials: "G. R." },
      { id: "pt22-11", name: "João Félix", aliases: ["felix", "joao felix", "j. felix"], number: 11, position: "FW", positionLabel: "LW", x: 20, y: 22, hintClub: "Atletico Madrid", hintInitials: "J. F." }
    ]
  },
  // 8. URUGUAY 2010 (The Golden Semi-run)
  {
    id: "uruguay-2010",
    country: "Uruguay",
    year: 2010,
    formation: "4-4-2",
    jerseyColor: "#29B6F6", // Sky Blue
    numberColor: "#FFFFFF",
    trimColor: "#FFD54F",
    squadName: "La Celeste Renaissance",
    isIconic: true,
    players: [
      { id: "uy10-1", name: "Fernando Muslera", aliases: ["muslera", "fernando muslera", "f. muslera"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "SS Lazio", hintInitials: "F. M." },
      { id: "uy10-2", name: "Maxi Pereira", aliases: ["maxi pereira", "m. pereira", "pereira"], number: 16, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "SL Benfica", hintInitials: "M. P." },
      { id: "uy10-3", name: "Mauricio Victorino", aliases: ["victorino", "mauricio victorino", "m. victorino"], number: 6, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Univ. Chile", hintInitials: "M. V." },
      { id: "uy10-4", name: "Diego Godín", aliases: ["godin", "diego godin", "d. godin"], number: 3, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Villarreal CF", hintInitials: "D. G." },
      { id: "uy10-5", name: "Martín Cáceres", aliases: ["caceres", "martin caceres", "m. caceres"], number: 22, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "FC Barcelona", hintInitials: "M. C." },
      { id: "uy10-6", name: "Diego Pérez", aliases: ["perez", "diego perez", "d. perez", "ruso perez"], number: 15, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "AS Monaco", hintInitials: "D. P." },
      { id: "uy10-7", name: "Egidio Arévalo Ríos", aliases: ["arevalo rios", "egidio arevalo", "e. arevalo", "arevalo"], number: 17, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "CA Peñarol", hintInitials: "E. A. R." },
      { id: "uy10-8", name: "Walter Gargano", aliases: ["gargano", "walter gargano", "w. gargano"], number: 5, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "SSC Napoli", hintInitials: "W. G." },
      { id: "uy10-9", name: "Álvaro Pereira", aliases: ["alvaro pereira", "a. pereira", "palito pereira"], number: 11, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "FC Porto", hintInitials: "A. P." },
      { id: "uy10-10", name: "Diego Forlán", aliases: ["forlan", "diego forlan", "d. forlan"], number: 10, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Atlético de Madrid", hintInitials: "D. F." },
      { id: "uy10-11", name: "Edinson Cavani", aliases: ["cavani", "edinson cavani", "e. cavani", "el matador"], number: 7, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "US Palermo", hintInitials: "E. C." }
    ]
  },
  // 9. SPAIN 2014 (End of Era squad)
  {
    id: "spain-2014",
    country: "Spain",
    year: 2014,
    formation: "4-3-3",
    jerseyColor: "#B71C1C", // Dark Red
    numberColor: "#FFD54F",
    trimColor: "#0D47A1",
    squadName: "The Falling Giants",
    isIconic: false,
    players: [
      { id: "es14-1", name: "Iker Casillas", aliases: ["casillas", "iker casillas", "i. casillas"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Real Madrid", hintInitials: "I. C." },
      { id: "es14-2", name: "César Azpilicueta", aliases: ["azpilicueta", "cesar azpilicueta", "c. azpilicueta"], number: 22, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Chelsea", hintInitials: "C. A." },
      { id: "es14-3", name: "Gerard Piqué", aliases: ["pique", "gerard pique", "g. pique"], number: 3, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Barcelona", hintInitials: "G. P." },
      { id: "es14-4", name: "Sergio Ramos", aliases: ["ramos", "sergio ramos", "s. ramos"], number: 15, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Real Madrid", hintInitials: "S. R." },
      { id: "es14-5", name: "Jordi Alba", aliases: ["alba", "jordi alba", "j. alba"], number: 18, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Barcelona", hintInitials: "J. A." },
      { id: "es14-6", name: "Sergio Busquets", aliases: ["busquets", "sergio busquets", "s. busquets"], number: 16, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "Barcelona", hintInitials: "S. B." },
      { id: "es14-7", name: "Xabi Alonso", aliases: ["alonso", "xabi alonso", "x. alonso"], number: 14, position: "MF", positionLabel: "RCM", x: 66, y: 48, hintClub: "Real Madrid", hintInitials: "X. A." },
      { id: "es14-8", name: "Xavi Hernández", aliases: ["xavi", "xavi hernandez", "hernandez"], number: 8, position: "MF", positionLabel: "LCM", x: 34, y: 48, hintClub: "Barcelona", hintInitials: "X." },
      { id: "es14-9", name: "Andrés Iniesta", aliases: ["iniesta", "andres iniesta", "a. iniesta"], number: 6, position: "MF", positionLabel: "RW", x: 80, y: 22, hintClub: "Barcelona", hintInitials: "A. I." },
      { id: "es14-10", name: "Diego Costa", aliases: ["costa", "diego costa", "d. costa"], number: 19, position: "FW", positionLabel: "ST", x: 50, y: 13, hintClub: "Atlético Madrid", hintInitials: "D. C." },
      { id: "es14-11", name: "David Silva", aliases: ["silva", "david silva", "d. silva"], number: 21, position: "MF", positionLabel: "LW", x: 20, y: 22, hintClub: "Manchester City", hintInitials: "D. S." }
    ]
  },
  // 10. NETHERLANDS 2014 (Spain 5-1 Annihilation)
  {
    id: "netherlands-2014",
    country: "Netherlands",
    year: 2014,
    formation: "5-3-2",
    jerseyColor: "#E65100", // Bright Orange
    numberColor: "#FFFFFF",
    trimColor: "#0D47A1",
    squadName: "Flying Dutchman Masterclass",
    isIconic: true,
    players: [
      { id: "nl14-1", name: "Jasper Cillessen", aliases: ["cillessen", "jasper cillessen", "j. cillessen"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Ajax", hintInitials: "J. C." },
      { id: "nl14-2", name: "Daryl Janmaat", aliases: ["janmaat", "daryl janmaat", "d. janmaat"], number: 7, position: "DF", positionLabel: "RWB", x: 85, y: 65, hintClub: "Feyenoord", hintInitials: "D. J." },
      { id: "nl14-3", name: "Stefan de Vrij", aliases: ["de vrij", "stefan de vrij", "s. de vrij"], number: 3, position: "DF", positionLabel: "RCB", x: 65, y: 70, hintClub: "Feyenoord", hintInitials: "S. d. V." },
      { id: "nl14-4", name: "Ron Vlaar", aliases: ["vlaar", "ron vlaar", "r. vlaar", "concrete ron"], number: 2, position: "DF", positionLabel: "CB", x: 50, y: 75, hintClub: "Aston Villa", hintInitials: "R. V." },
      { id: "nl14-5", name: "Bruno Martins Indi", aliases: ["martins indi", "bruno martins indi", "b. martins indi"], number: 4, position: "DF", positionLabel: "LCB", x: 35, y: 70, hintClub: "Feyenoord", hintInitials: "B. M. I." },
      { id: "nl14-6", name: "Daley Blind", aliases: ["blind", "daley blind", "d. blind"], number: 5, position: "DF", positionLabel: "LWB", x: 15, y: 65, hintClub: "Ajax", hintInitials: "D. B." },
      { id: "nl14-7", name: "Jonathan de Guzmán", aliases: ["de guzman", "jonathan de guzman", "j. de guzman"], number: 8, position: "MF", positionLabel: "RCM", x: 66, y: 45, hintClub: "Swansea City", hintInitials: "J. d. G." },
      { id: "nl14-8", name: "Nigel de Jong", aliases: ["de jong", "nigel de jong", "n. de jong"], number: 6, position: "MF", positionLabel: "DM", x: 50, y: 52, hintClub: "AC Milan", hintInitials: "N. d. J." },
      { id: "nl14-9", name: "Wesley Sneijder", aliases: ["sneijder", "wesley sneijder", "w. sneijder"], number: 10, position: "MF", positionLabel: "LCM", x: 34, y: 45, hintClub: "Galatasaray", hintInitials: "W. S." },
      { id: "nl14-10", name: "Arjen Robben", aliases: ["robben", "arjen robben", "a. robben"], number: 11, position: "FW", positionLabel: "RST", x: 62, y: 20, hintClub: "Bayern Munich", hintInitials: "A. R." },
      { id: "nl14-11", name: "Robin van Persie", aliases: ["van persie", "robin van persie", "rvp"], number: 9, position: "FW", positionLabel: "LST", x: 38, y: 20, hintClub: "Manchester United", hintInitials: "R. v. P." }
    ]
  },
  // 11. NETHERLANDS 1998 (Bergkamp Masterpiece)
  {
    id: "netherlands-1998",
    country: "Netherlands",
    year: 1998,
    formation: "4-4-2",
    jerseyColor: "#FF6D00", // Rich Dutch Orange
    numberColor: "#FFFFFF",
    trimColor: "#0D47A1",
    squadName: "There is Bear cum!",
    isIconic: false,
    players: [
      { id: "nl98-1", name: "Edwin van der Sar", aliases: ["van der sar", "edwin van der sar", "e. van der sar"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Ajax", hintInitials: "E. v. d. S." },
      { id: "nl98-2", name: "Michael Reiziger", aliases: ["reiziger", "michael reiziger", "m. reiziger"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Barcelona", hintInitials: "M. R." },
      { id: "nl98-3", name: "Jaap Stam", aliases: ["stam", "jaap stam", "j. stam"], number: 3, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "PSV Eindhoven", hintInitials: "J. S." },
      { id: "nl98-4", name: "Frank de Boer", aliases: ["de boer", "frank de boer", "f. de boer"], number: 4, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Ajax", hintInitials: "F. d. B." },
      { id: "nl98-5", name: "Arthur Numan", aliases: ["numan", "arthur numan", "a. numan"], number: 5, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "PSV Eindhoven", hintInitials: "A. N." },
      { id: "nl98-6", name: "Ronald de Boer", aliases: ["ronald de boer", "r. de boer"], number: 6, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Ajax", hintInitials: "R. d. B." },
      { id: "nl98-7", name: "Wim Jonk", aliases: ["jonk", "wim jonk", "w. jonk"], number: 10, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "PSV Eindhoven", hintInitials: "W. J." },
      { id: "nl98-8", name: "Edgar Davids", aliases: ["davids", "edgar davids", "e. davids", "pitbull"], number: 16, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Juventus", hintInitials: "E. D." },
      { id: "nl98-9", name: "Phillip Cocu", aliases: ["cocu", "phillip cocu", "p. cocu"], number: 11, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "PSV Eindhoven", hintInitials: "P. C." },
      { id: "nl98-10", name: "Dennis Bergkamp", aliases: ["bergkamp", "dennis bergkamp", "d. bergkamp", "iceman"], number: 8, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Arsenal", hintInitials: "D. B." },
      { id: "nl98-11", name: "Patrick Kluivert", aliases: ["kluivert", "patrick kluivert", "p. kluivert"], number: 9, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "AC Milan", hintInitials: "P. K." }
    ]
  },
  // 12. ARGENTINA 1998 (Quarterfinal Classic)
  {
    id: "argentina-1998",
    country: "Argentina",
    year: 1998,
    formation: "3-5-2",
    jerseyColor: "#E3F2FD",
    numberColor: "#000000",
    trimColor: "#0D47A1",
    squadName: "Batigol's Campaign",
    isIconic: false,
    players: [
      { id: "arg98-1", name: "Carlos Roa", aliases: ["roa", "carlos roa", "c. roa"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Mallorca", hintInitials: "C. R." },
      { id: "arg98-2", name: "Roberto Ayala", aliases: ["ayala", "roberto ayala", "r. ayala"], number: 2, position: "DF", positionLabel: "RCB", x: 72, y: 68, hintClub: "Napoli", hintInitials: "R. A." },
      { id: "arg98-3", name: "José Chamot", aliases: ["chamot", "jose chamot", "j. chamot"], number: 6, position: "DF", positionLabel: "CB", x: 50, y: 74, hintClub: "Lazio", hintInitials: "J. C." },
      { id: "arg98-4", name: "Roberto Sensini", aliases: ["sensini", "roberto sensini", "r. sensini"], number: 14, position: "DF", positionLabel: "LCB", x: 28, y: 68, hintClub: "Parma", hintInitials: "R. S." },
      { id: "arg98-5", name: "Javier Zanetti", aliases: ["zanetti", "javier zanetti", "j. zanetti", "el tractor"], number: 22, position: "MF", positionLabel: "RWB", x: 86, y: 50, hintClub: "Inter Milan", hintInitials: "J. Z." },
      { id: "arg98-6", name: "Matías Almeyda", aliases: ["almeyda", "matias almeyda", "m. almeyda"], number: 5, position: "MF", positionLabel: "DM", x: 50, y: 54, hintClub: "Lazio", hintInitials: "M. A." },
      { id: "arg98-7", name: "Diego Simeone", aliases: ["simeone", "diego simeone", "d. simeone", "el cholo"], number: 8, position: "MF", positionLabel: "LWB", x: 14, y: 50, hintClub: "Inter Milan", hintInitials: "D. S." },
      { id: "arg98-8", name: "Juan Sebastián Verón", aliases: ["veron", "juan sebastian veron", "j. veron", "la brujita"], number: 11, position: "MF", positionLabel: "RCM", x: 66, y: 44, hintClub: "Sampdoria", hintInitials: "J. S. V." },
      { id: "arg98-9", name: "Ariel Ortega", aliases: ["ortega", "ariel ortega", "a. ortega", "el burrito"], number: 10, position: "MF", positionLabel: "LCM", x: 34, y: 44, hintClub: "Valencia", hintInitials: "A. O." },
      { id: "arg98-10", name: "Claudio López", aliases: ["lopez", "claudio lopez", "c. lopez", "el piojo"], number: 7, position: "FW", positionLabel: "RST", x: 62, y: 18, hintClub: "Valencia", hintInitials: "C. L." },
      { id: "arg98-11", name: "Gabriel Batistuta", aliases: ["batistuta", "gabriel batistuta", "g. batistuta", "batigol"], number: 9, position: "FW", positionLabel: "LST", x: 38, y: 18, hintClub: "Fiorentina", hintInitials: "G. B." }
    ]
  },
  // 13. BRAZIL 1998 (The Finalists)
  {
    id: "brazil-1998",
    country: "Brazil",
    year: 1998,
    formation: "4-4-2",
    jerseyColor: "#FFEB3B",
    numberColor: "#0D47A1",
    trimColor: "#4CAF50",
    squadName: "The Phantom Finalist",
    isIconic: false,
    players: [
      { id: "br98-1", name: "Cláudio Taffarel", aliases: ["taffarel", "claudio taffarel", "c. taffarel"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Atlético Mineiro", hintInitials: "C. T." },
      { id: "br98-2", name: "Cafu", aliases: ["cafu", "marcos evangelista de moraes"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Roma", hintInitials: "C." },
      { id: "br98-3", name: "Aldair", aliases: ["aldair", "aldair nascimento dos santos"], number: 3, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Roma", hintInitials: "A." },
      { id: "br98-4", name: "Júnior Baiano", aliases: ["junior baiano", "j. baiano", "baiano"], number: 4, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Flamengo", hintInitials: "J. B." },
      { id: "br98-5", name: "Roberto Carlos", aliases: ["roberto carlos", "r. carlos"], number: 6, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Real Madrid", hintInitials: "R. C." },
      { id: "br98-6", name: "Dunga", aliases: ["dunga", "carlos caetano bledorn verri"], number: 8, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Júbilo Iwata", hintInitials: "D." },
      { id: "br98-7", name: "César Sampaio", aliases: ["cesar sampaio", "c. sampaio", "sampaio"], number: 5, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Yokohama Flügels", hintInitials: "C. S." },
      { id: "br98-8", name: "Leonardo", aliases: ["leonardo", "leonardo nascimento de araujo"], number: 18, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "AC Milan", hintInitials: "L." },
      { id: "br98-9", name: "Rivaldo", aliases: ["rivaldo", "rivaldo vitor borba ferreira"], number: 10, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Barcelona", hintInitials: "R." },
      { id: "br98-10", name: "Bebeto", aliases: ["bebeto", "jose roberto gama de oliveira"], number: 20, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Botafogo", hintInitials: "B." },
      { id: "br98-11", name: "Ronaldo", aliases: ["ronaldo", "ronaldo nazario", "fenomeno", "r9"], number: 9, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Inter Milan", hintInitials: "R." }
    ]
  },
  // 14. WEST GERMANY 1974 (Total Football Conquerors)
  {
    id: "germany-1974",
    country: "West Germany",
    year: 1974,
    formation: "4-3-3",
    jerseyColor: "#FFFFFF",
    numberColor: "#000000",
    trimColor: "#E53935",
    squadName: "Der Kaiser's Conquest",
    isIconic: false,
    players: [
      { id: "de74-1", name: "Sepp Maier", aliases: ["sepp maier", "maier", "s. maier"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Bayern Munich", hintInitials: "S. M." },
      { id: "de74-2", name: "Berti Vogts", aliases: ["vogts", "berti vogts", "b. vogts"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Borussia M'gladbach", hintInitials: "B. V." },
      { id: "de74-3", name: "Franz Beckenbauer", aliases: ["beckenbauer", "franz beckenbauer", "f. beckenbauer", "der kaiser"], number: 5, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Bayern Munich", hintInitials: "F. B." },
      { id: "de74-4", name: "Hans-Georg Schwarzenbeck", aliases: ["schwarzenbeck", "hans-georg schwarzenbeck"], number: 4, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Bayern Munich", hintInitials: "H. G. S." },
      { id: "de74-5", name: "Paul Breitner", aliases: ["breitner", "paul breitner", "p. breitner"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Bayern Munich", hintInitials: "P. B." },
      { id: "de74-6", name: "Rainer Bonhof", aliases: ["bonhof", "rainer bonhof", "r. bonhof"], number: 16, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "Borussia M'gladbach", hintInitials: "R. B." },
      { id: "de74-7", name: "Uli Hoeneß", aliases: ["hoeness", "hoeneß", "uli hoeness", "u. hoeness"], number: 12, position: "MF", positionLabel: "RCM", x: 66, y: 48, hintClub: "Bayern Munich", hintInitials: "U. H." },
      { id: "de74-8", name: "Wolfgang Overath", aliases: ["overath", "wolfgang overath", "w. overath"], number: 14, position: "MF", positionLabel: "LCM", x: 34, y: 48, hintClub: "FC Köln", hintInitials: "W. O." },
      { id: "de74-9", name: "Jürgen Grabowski", aliases: ["grabowski", "jurgen grabowski", "j. grabowski"], number: 9, position: "FW", positionLabel: "RW", x: 80, y: 22, hintClub: "Eintracht Frankfurt", hintInitials: "J. G." },
      { id: "de74-10", name: "Gerd Müller", aliases: ["muller", "gerd muller", "g. muller", "der bomber"], number: 13, position: "FW", positionLabel: "ST", x: 50, y: 13, hintClub: "Bayern Munich", hintInitials: "G. M." },
      { id: "de74-11", name: "Bernd Hölzenbein", aliases: ["hoelzenbein", "hölzenbein", "bernd hoelzenbein"], number: 17, position: "FW", positionLabel: "LW", x: 20, y: 22, hintClub: "Eintracht Frankfurt", hintInitials: "B. H." }
    ]
  },
  // 15. ARGENTINA 1978 (First Star Winners)
  {
    id: "argentina-1978",
    country: "Argentina",
    year: 1978,
    formation: "4-3-3",
    jerseyColor: "#E3F2FD",
    numberColor: "#000000",
    trimColor: "#0D47A1",
    squadName: "The Confetti Champions",
    isIconic: false,
    players: [
      { id: "arg78-1", name: "Ubaldo Fillol", aliases: ["fillol", "ubaldo fillol", "u. fillol", "el pato"], number: 5, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "River Plate", hintInitials: "U. F." },
      { id: "arg78-2", name: "Jorge Olguín", aliases: ["olguin", "jorge olguin", "j. olguin"], number: 15, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "San Lorenzo", hintInitials: "J. O." },
      { id: "arg78-3", name: "Luis Galván", aliases: ["galvan", "luis galvan", "l. galvan"], number: 7, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Talleres", hintInitials: "L. G." },
      { id: "arg78-4", name: "Daniel Passarella", aliases: ["passarella", "daniel passarella", "d. passarella"], number: 19, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "River Plate", hintInitials: "D. P." },
      { id: "arg78-5", name: "Alberto Tarantini", aliases: ["tarantini", "alberto tarantini", "a. tarantini"], number: 20, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Free Agent", hintInitials: "A. T." },
      { id: "arg78-6", name: "Américo Gallego", aliases: ["gallego", "americo gallego", "a. gallego"], number: 6, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "Newell's Old Boys", hintInitials: "A. G." },
      { id: "arg78-7", name: "Osvaldo Ardiles", aliases: ["ardiles", "osvaldo ardiles", "o. ardiles", "ossie"], number: 2, position: "MF", positionLabel: "RCM", x: 66, y: 48, hintClub: "Huracán", hintInitials: "O. A." },
      { id: "arg78-8", name: "Mario Kempes", aliases: ["kempes", "mario kempes", "m. kempes", "el matador"], number: 10, position: "MF", positionLabel: "LCM", x: 34, y: 48, hintClub: "Valencia", hintInitials: "M. K." },
      { id: "arg78-9", name: "Daniel Bertoni", aliases: ["bertoni", "daniel bertoni", "d. bertoni"], number: 4, position: "FW", positionLabel: "RW", x: 80, y: 22, hintClub: "Independiente", hintInitials: "D. B." },
      { id: "arg78-10", name: "Leopoldo Luque", aliases: ["luque", "leopoldo luque", "l. luque"], number: 14, position: "FW", positionLabel: "ST", x: 50, y: 13, hintClub: "River Plate", hintInitials: "L. L." },
      { id: "arg78-11", name: "Oscar Ortiz", aliases: ["ortiz", "oscar ortiz", "o. ortiz"], number: 21, position: "FW", positionLabel: "LW", x: 20, y: 22, hintClub: "River Plate", hintInitials: "O. O." }
    ]
  },
  // 16. GERMANY 2006 (Summer Fairytale Host)
  {
    id: "germany-2006",
    country: "Germany",
    year: 2006,
    formation: "4-4-2",
    jerseyColor: "#FFFFFF",
    numberColor: "#000000",
    trimColor: "#E53935",
    squadName: "The Summer Fairytale",
    isIconic: true,
    players: [
      { id: "de06-1", name: "Jens Lehmann", aliases: ["lehmann", "jens lehmann", "j. lehmann"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Arsenal", hintInitials: "J. L." },
      { id: "de06-2", name: "Arne Friedrich", aliases: ["friedrich", "arne friedrich", "a. friedrich"], number: 3, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Hertha Berlin", hintInitials: "A. F." },
      { id: "de06-3", name: "Per Mertesacker", aliases: ["mertesacker", "per mertesacker", "p. mertesacker"], number: 17, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Hannover 96", hintInitials: "P. M." },
      { id: "de06-4", name: "Christoph Metzelder", aliases: ["metzelder", "christoph metzelder", "c. metzelder"], number: 21, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Borussia Dortmund", hintInitials: "C. M." },
      { id: "de06-5", name: "Philipp Lahm", aliases: ["lahm", "philipp lahm", "p. lahm"], number: 16, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Bayern Munich", hintInitials: "P. L." },
      { id: "de06-6", name: "Bernd Schneider", aliases: ["schneider", "bernd schneider", "b. schneider"], number: 19, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Bayer Leverkusen", hintInitials: "B. S." },
      { id: "de06-7", name: "Sebastian Kehl", aliases: ["kehl", "sebastian kehl", "s. kehl"], number: 5, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Borussia Dortmund", hintInitials: "S. K." },
      { id: "de06-8", name: "Michael Ballack", aliases: ["ballack", "michael ballack", "m. ballack"], number: 13, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Bayern Munich", hintInitials: "M. B." },
      { id: "de06-9", name: "Tim Borowski", aliases: ["borowski", "tim borowski", "t. borowski"], number: 18, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Werder Bremen", hintInitials: "T. B." },
      { id: "de06-10", name: "Miroslav Klose", aliases: ["klose", "miroslav klose", "m. klose"], number: 11, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Werder Bremen", hintInitials: "M. K." },
      { id: "de06-11", name: "Lukas Podolski", aliases: ["podolski", "lukas podolski", "l. podolski", "poldi"], number: 20, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "1. FC Köln", hintInitials: "L. P." }
    ]
  },
  // 17. ITALY 1990 (The Semi Finalists)
  {
    id: "italy-1990",
    country: "Italy",
    year: 1990,
    formation: "4-4-2",
    jerseyColor: "#0D47A1",
    numberColor: "#FFFFFF",
    trimColor: "#FFFFFF",
    squadName: "Notti Magiche in Rome",
    isIconic: false,
    players: [
      { id: "it90-1", name: "Walter Zenga", aliases: ["zenga", "walter zenga", "w. zenga"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Inter Milan", hintInitials: "W. Z." },
      { id: "it90-2", name: "Giuseppe Bergomi", aliases: ["bergomi", "giuseppe bergomi", "g. bergomi", "lo zio"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Inter Milan", hintInitials: "G. B." },
      { id: "it90-3", name: "Franco Baresi", aliases: ["baresi", "franco baresi", "f. baresi"], number: 6, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "AC Milan", hintInitials: "F. B." },
      { id: "it90-4", name: "Riccardo Ferri", aliases: ["ferri", "riccardo ferri", "r. ferri"], number: 5, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Inter Milan", hintInitials: "R. F." },
      { id: "it90-5", name: "Paolo Maldini", aliases: ["maldini", "paolo maldini", "p. maldini"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "AC Milan", hintInitials: "P. M." },
      { id: "it90-6", name: "Roberto Donadoni", aliases: ["donadoni", "roberto donadoni", "r. donadoni"], number: 17, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "AC Milan", hintInitials: "R. D." },
      { id: "it90-7", name: "Fernando De Napoli", aliases: ["de napoli", "fernando de napoli", "f. de napoli"], number: 11, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Napoli", hintInitials: "F. D. N." },
      { id: "it90-8", name: "Giuseppe Giannini", aliases: ["giannini", "giuseppe giannini", "g. giannini", "el principe"], number: 10, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "AS Roma", hintInitials: "G. G." },
      { id: "it90-9", name: "Luigi De Agostini", aliases: ["de agostini", "luigi de agostini", "l. de agostini"], number: 4, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Juventus", hintInitials: "L. D. A." },
      { id: "it90-10", name: "Salvatore Schillaci", aliases: ["schillaci", "salvatore schillaci", "toto schillaci", "toto"], number: 19, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Juventus", hintInitials: "S. S." },
      { id: "it90-11", name: "Gianluca Vialli", aliases: ["vialli", "gianluca vialli", "g. vialli"], number: 9, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Sampdoria", hintInitials: "G. V." }
    ]
  },
  // 18. ENGLAND 1990 (Tears in Turin run)
  {
    id: "england-1990",
    country: "England",
    year: 1990,
    formation: "5-3-2",
    jerseyColor: "#FFFFFF",
    numberColor: "#0D47A1",
    trimColor: "#E53935",
    squadName: "Gazza's Crying Campaign",
    isIconic: false,
    players: [
      { id: "en90-1", name: "Peter Shilton", aliases: ["shilton", "peter shilton", "p. shilton"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Derby County", hintInitials: "P. S." },
      { id: "en90-2", name: "Paul Parker", aliases: ["parker", "paul parker", "p. parker"], number: 12, position: "DF", positionLabel: "RWB", x: 85, y: 65, hintClub: "QPR", hintInitials: "P. P." },
      { id: "en90-3", name: "Des Walker", aliases: ["walker", "des walker", "d. walker"], number: 14, position: "DF", positionLabel: "RCB", x: 65, y: 70, hintClub: "Nottingham Forest", hintInitials: "D. W." },
      { id: "en90-4", name: "Terry Butcher", aliases: ["butcher", "terry butcher", "t. butcher"], number: 5, position: "DF", positionLabel: "CB", x: 50, y: 75, hintClub: "Rangers", hintInitials: "T. B." },
      { id: "en90-5", name: "Mark Wright", aliases: ["wright", "mark wright", "m. wright"], number: 6, position: "DF", positionLabel: "LCB", x: 35, y: 70, hintClub: "Derby County", hintInitials: "M. W." },
      { id: "en90-6", name: "Stuart Pearce", aliases: ["pearce", "stuart pearce", "s. pearce", "psycho"], number: 3, position: "DF", positionLabel: "LWB", x: 15, y: 65, hintClub: "Nottingham Forest", hintInitials: "S. P." },
      { id: "en90-7", name: "Chris Waddle", aliases: ["waddle", "chris waddle", "c. waddle"], number: 8, position: "MF", positionLabel: "RCM", x: 70, y: 45, hintClub: "Marseille", hintInitials: "C. W." },
      { id: "en90-8", name: "Paul Gascoigne", aliases: ["gascoigne", "paul gascoigne", "gazza"], number: 19, position: "MF", positionLabel: "DM", x: 50, y: 52, hintClub: "Tottenham", hintInitials: "P. G." },
      { id: "en90-9", name: "David Platt", aliases: ["platt", "david platt", "d. platt"], number: 17, position: "MF", positionLabel: "LCM", x: 34, y: 45, hintClub: "Aston Villa", hintInitials: "D. P." },
      { id: "en90-10", name: "Peter Beardsley", aliases: ["beardsley", "peter beardsley", "p. beardsley"], number: 11, position: "FW", positionLabel: "RST", x: 62, y: 20, hintClub: "Liverpool", hintInitials: "P. B." },
      { id: "en90-11", name: "Gary Lineker", aliases: ["lineker", "gary lineker", "g. lineker"], number: 10, position: "FW", positionLabel: "LST", x: 38, y: 20, hintClub: "Tottenham", hintInitials: "G. L." }
    ]
  },
  // 19. FRANCE 2022 (The Epic Finalists)
  {
    id: "france-2022",
    country: "France",
    year: 2022,
    formation: "4-2-3-1",
    jerseyColor: "#0D47A1", // Classic Royal Navy
    numberColor: "#FFFFFF",
    trimColor: "#E53935",
    squadName: "The Back-to-Back Finalists",
    isIconic: true,
    players: [
      { id: "fr22-1", name: "Hugo Lloris", aliases: ["lloris", "hugo lloris", "h. lloris"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Tottenham", hintInitials: "H. L." },
      { id: "fr22-2", name: "Jules Koundé", aliases: ["kounde", "jules kounde", "j. kounde"], number: 5, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Barcelona", hintInitials: "J. K." },
      { id: "fr22-3", name: "Raphaël Varane", aliases: ["varane", "raphael varane", "r. varane"], number: 4, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Manchester United", hintInitials: "R. V." },
      { id: "fr22-4", name: "Dayot Upamecano", aliases: ["upamecano", "dayot upamecano", "d. upamecano"], number: 18, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Bayern Munich", hintInitials: "D. U." },
      { id: "fr22-5", name: "Theo Hernandez", aliases: ["hernandez", "theo hernandez", "t. hernandez"], number: 22, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "AC Milan", hintInitials: "T. H." },
      { id: "fr22-6", name: "Aurélien Tchouaméni", aliases: ["tchouameni", "aurelien tchouameni", "a. tchouameni"], number: 8, position: "MF", positionLabel: "RDM", x: 62, y: 55, hintClub: "Real Madrid", hintInitials: "A. T." },
      { id: "fr22-7", name: "Adrien Rabiot", aliases: ["rabiot", "adrien rabiot", "a. rabiot"], number: 14, position: "MF", positionLabel: "LDM", x: 38, y: 55, hintClub: "Juventus", hintInitials: "A. R." },
      { id: "fr22-8", name: "Ousmane Dembélé", aliases: ["dembele", "ousmane dembele", "o. dembele"], number: 11, position: "MF", positionLabel: "RAM", x: 80, y: 35, hintClub: "Barcelona", hintInitials: "O. D." },
      { id: "fr22-9", name: "Antoine Griezmann", aliases: ["griezmann", "antoine griezmann", "a. griezmann", "grizou"], number: 7, position: "MF", positionLabel: "CAM", x: 50, y: 35, hintClub: "Atlético Madrid", hintInitials: "A. G." },
      { id: "fr22-10", name: "Kylian Mbappé", aliases: ["mbappe", "kylian mbappe", "k. mbappe", "donatello"], number: 10, position: "FW", positionLabel: "LAM", x: 20, y: 35, hintClub: "PSG", hintInitials: "K. M." },
      { id: "fr22-11", name: "Olivier Giroud", aliases: ["giroud", "olivier giroud", "o. giroud"], number: 9, position: "FW", positionLabel: "ST", x: 50, y: 15, hintClub: "AC Milan", hintInitials: "O. G." }
    ]
  },
  // 20. CROATIA 2022 (Bronze Winners)
  {
    id: "croatia-2022",
    country: "Croatia",
    year: 2022,
    formation: "4-3-3",
    jerseyColor: "#FFFFFF",
    numberColor: "#E53935",
    trimColor: "#E53935",
    squadName: "The Veteran Bronze Run",
    isIconic: true,
    players: [
      { id: "cr22-1", name: "Dominik Livaković", aliases: ["livakovic", "dominik livakovic", "d. livakovic"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Dinamo Zagreb", hintInitials: "D. L." },
      { id: "cr22-2", name: "Josip Juranović", aliases: ["juranovic", "josip juranovic", "j. juranovic"], number: 22, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Celtic", hintInitials: "J. J." },
      { id: "cr22-3", name: "Dejan Lovren", aliases: ["lovren", "dejan lovren", "d. lovren"], number: 6, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Zenit", hintInitials: "D. L." },
      { id: "cr22-4", name: "Joško Gvardiol", aliases: ["gvardiol", "josko gvardiol", "j. gvardiol", "maskman"], number: 20, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "RB Leipzig", hintInitials: "J. G." },
      { id: "cr22-5", name: "Borna Sosa", aliases: ["sosa", "borna sosa", "b. sosa"], number: 19, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "VfB Stuttgart", hintInitials: "B. S." },
      { id: "cr22-6", name: "Marcelo Brozović", aliases: ["brozovic", "marcelo brozovic", "m. brozovic"], number: 11, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "Inter Milan", hintInitials: "M. B." },
      { id: "cr22-7", name: "Luka Modrić", aliases: ["modric", "luka modric", "l. modric"], number: 10, position: "MF", positionLabel: "RCM", x: 66, y: 48, hintClub: "Real Madrid", hintInitials: "L. M." },
      { id: "cr22-8", name: "Mateo Kovačić", aliases: ["kovacic", "mateo kovacic", "m. kovacic"], number: 8, position: "MF", positionLabel: "LCM", x: 34, y: 48, hintClub: "Chelsea", hintInitials: "M. K." },
      { id: "cr22-9", name: "Mario Pašalić", aliases: ["pasalic", "mario pasalic", "m. pasalic"], number: 15, position: "FW", positionLabel: "RW", x: 80, y: 22, hintClub: "Atalanta", hintInitials: "M. P." },
      { id: "cr22-10", name: "Andrej Kramarić", aliases: ["kramaric", "andrej kramaric", "a. kramaric"], number: 9, position: "FW", positionLabel: "ST", x: 50, y: 13, hintClub: "Hoffenheim", hintInitials: "A. K." },
      { id: "cr22-11", name: "Ivan Perišić", aliases: ["perisic", "ivan perisic", "i. perisic"], number: 4, position: "FW", positionLabel: "LW", x: 20, y: 22, hintClub: "Tottenham Hotspur", hintInitials: "I. P." }
    ]
  },
  // 21. GERMANY 2002 (The Suspension Finalists)
  {
    id: "germany-2002",
    country: "Germany",
    year: 2002,
    formation: "4-4-2",
    jerseyColor: "#FFFFFF",
    numberColor: "#000000",
    trimColor: "#E53935",
    squadName: "Kahn's Carry Job",
    isIconic: false,
    players: [
      { id: "de02-1", name: "Oliver Kahn", aliases: ["kahn", "oliver kahn", "o. kahn", "der titan"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Bayern Munich", hintInitials: "O. K." },
      { id: "de02-2", name: "Thomas Linke", aliases: ["linke", "thomas linke", "t. linke"], number: 2, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Bayern Munich", hintInitials: "T. L." },
      { id: "de02-3", name: "Christoph Metzelder", aliases: ["metzelder", "christoph metzelder", "c. metzelder"], number: 21, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Borussia Dortmund", hintInitials: "C. M." },
      { id: "de02-4", name: "Carsten Ramelow", aliases: ["ramelow", "carsten ramelow", "c. ramelow"], number: 5, position: "DF", positionLabel: "CB", x: 50, y: 76, hintClub: "Bayer Leverkusen", hintInitials: "C. R." },
      { id: "de02-5", name: "Torsten Frings", aliases: ["frings", "torsten frings", "t. frings"], number: 22, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Werder Bremen", hintInitials: "T. F." },
      { id: "de02-6", name: "Jens Jeremies", aliases: ["jeremies", "jens jeremies", "j. jeremies"], number: 16, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Bayern Munich", hintInitials: "J. J." },
      { id: "de02-7", name: "Dietmar Hamann", aliases: ["hamann", "dietmar hamann", "d. hamann", "didi hamann"], number: 8, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Liverpool", hintInitials: "D. H." },
      { id: "de02-8", name: "Bernd Schneider", aliases: ["schneider", "bernd schneider", "b. schneider"], number: 19, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Bayer Leverkusen", hintInitials: "B. S." },
      { id: "de02-9", name: "Marco Bode", aliases: ["bode", "marco bode", "m. bode"], number: 17, position: "MF", positionLabel: "AM", x: 50, y: 32, hintClub: "Werder Bremen", hintInitials: "M. B." },
      { id: "de02-10", name: "Oliver Neuville", aliases: ["neuville", "oliver neuville", "o. neuville"], number: 7, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Bayer Leverkusen", hintInitials: "O. N." },
      { id: "de02-11", name: "Miroslav Klose", aliases: ["klose", "miroslav klose", "m. klose"], number: 11, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Kaiserslautern", hintInitials: "M. K." }
    ]
  },
  // 22. ENGLAND 2002 (Beckham Redemption)
  {
    id: "england-2002",
    country: "England",
    year: 2002,
    formation: "4-4-2",
    jerseyColor: "#FFFFFF",
    numberColor: "#E53935",
    trimColor: "#0D47A1",
    squadName: "Beckham's Revenge Campaign",
    isIconic: true,
    players: [
      { id: "en02-1", name: "David Seaman", aliases: ["seaman", "david seaman", "d. seaman"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Arsenal", hintInitials: "D. S." },
      { id: "en02-2", name: "Danny Mills", aliases: ["mills", "danny mills", "d. mills"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Leeds United", hintInitials: "D. M." },
      { id: "en02-3", name: "Rio Ferdinand", aliases: ["ferdinand", "rio ferdinand", "r. ferdinand"], number: 5, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Leeds United", hintInitials: "R. F." },
      { id: "en02-4", name: "Sol Campbell", aliases: ["campbell", "sol campbell", "s. campbell"], number: 6, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Arsenal", hintInitials: "S. C." },
      { id: "en02-5", name: "Ashley Cole", aliases: ["ashley cole", "a. cole", "cole"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Arsenal", hintInitials: "A. C." },
      { id: "en02-6", name: "David Beckham", aliases: ["beckham", "david beckham", "d. beckham", "becks"], number: 7, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Manchester United", hintInitials: "D. B." },
      { id: "en02-7", name: "Nicky Butt", aliases: ["butt", "nicky butt", "n. butt"], number: 8, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Manchester United", hintInitials: "N. B." },
      { id: "en02-8", name: "Paul Scholes", aliases: ["scholes", "paul scholes", "p. scholes", "ginger prince"], number: 11, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Manchester United", hintInitials: "P. S." },
      { id: "en02-9", name: "Trevor Sinclair", aliases: ["sinclair", "trevor sinclair", "t. sinclair"], number: 4, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "West Ham", hintInitials: "T. S." },
      { id: "en02-10", name: "Michael Owen", aliases: ["owen", "michael owen", "m. owen"], number: 10, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Liverpool", hintInitials: "M. O." },
      { id: "en02-11", name: "Emile Heskey", aliases: ["heskey", "emile heskey", "e. heskey"], number: 11, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Liverpool", hintInitials: "E. H." }
    ]
  },
  // 23. TURKEY 2002 (Legendary Third Place Run)
  {
    id: "turkey-2002",
    country: "Turkey",
    year: 2002,
    formation: "3-5-2",
    jerseyColor: "#C62828", // Turkish Crimson Red
    numberColor: "#FFFFFF",
    trimColor: "#FFFFFF",
    squadName: "The Crescent Stars Miracle",
    isIconic: false,
    players: [
      { id: "tr02-1", name: "Rüştü Reçber", aliases: ["rustu recber", "rustu", "recber", "rüstü"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Fenerbahçe", hintInitials: "R. R." },
      { id: "tr02-2", name: "Fatih Akyel", aliases: ["fatih akyel", "fatih", "akyel"], number: 4, position: "DF", positionLabel: "RCB", x: 72, y: 68, hintClub: "Fenerbahçe", hintInitials: "F. A." },
      { id: "tr02-3", name: "Alpay Özalan", aliases: ["alpay ozalan", "alpay", "ozalan"], number: 5, position: "DF", positionLabel: "CB", x: 50, y: 74, hintClub: "Aston Villa", hintInitials: "A. Ö." },
      { id: "tr02-4", name: "Bülent Korkmaz", aliases: ["bulent korkmaz", "bulent", "korkmaz"], number: 3, position: "DF", positionLabel: "LCB", x: 28, y: 68, hintClub: "Galatasaray", hintInitials: "B. K." },
      { id: "tr02-5", name: "Ümit Davala", aliases: ["umit davala", "umit", "davala"], number: 22, position: "MF", positionLabel: "RWB", x: 86, y: 50, hintClub: "AC Milan", hintInitials: "Ü. D." },
      { id: "tr02-6", name: "Tugay Kerimoğlu", aliases: ["tugay kerimoglu", "tugay", "kerimoglu"], number: 8, position: "MF", positionLabel: "DM", x: 50, y: 54, hintClub: "Blackburn Rovers", hintInitials: "T. K." },
      { id: "tr02-7", name: "Ergün Penbe", aliases: ["ergun penbe", "ergun", "penbe"], number: 18, position: "MF", positionLabel: "LWB", x: 14, y: 50, hintClub: "Galatasaray", hintInitials: "E. P." },
      { id: "tr02-8", name: "Yıldıray Baştürk", aliases: ["yildiray basturk", "basturk", "yildiray", "bastürk"], number: 10, position: "MF", positionLabel: "RCM", x: 66, y: 44, hintClub: "Bayer Leverkusen", hintInitials: "Y. B." },
      { id: "tr02-9", name: "Emre Belözoğlu", aliases: ["emre belozoglu", "emre", "belozoglu", "belözoglu"], number: 21, position: "MF", positionLabel: "LCM", x: 34, y: 44, hintClub: "Inter Milan", hintInitials: "E. B." },
      { id: "tr02-10", name: "Hasan Şaş", aliases: ["hasan sas", "sas", "hasan", "sas"], number: 11, position: "FW", positionLabel: "RST", x: 62, y: 18, hintClub: "Galatasaray", hintInitials: "H. Ş." },
      { id: "tr02-11", name: "Hakan Şükür", aliases: ["hakan sukur", "sukur", "hakan", "sükür", "bull of bosphorus"], number: 9, position: "FW", positionLabel: "LST", x: 38, y: 18, hintClub: "Parma", hintInitials: "H. Ş." }
    ]
  },
  // 24. SOUTH KOREA 2002 (The Miracle Host Semifinal)
  {
    id: "south-korea-2002",
    country: "South Korea",
    year: 2002,
    formation: "3-5-2",
    jerseyColor: "#E53935", // Red Devil Red
    numberColor: "#FFFFFF",
    trimColor: "#0D47A1",
    squadName: "Guus Hiddink's Red Devils",
    isIconic: true,
    players: [
      { id: "kr02-1", name: "Lee Woon-Jae", aliases: ["lee woon-jae", "lee woon jae", "woon-jae", "l. w. jae"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Suwon Bluewings", hintInitials: "L. W. J." },
      { id: "kr02-2", name: "Choi Jin-Cheul", aliases: ["choi jin-cheul", "choi jin cheul", "jin-cheul"], number: 4, position: "DF", positionLabel: "RCB", x: 72, y: 68, hintClub: "Jeonbuk Motors", hintInitials: "C. J. C." },
      { id: "kr02-3", name: "Hong Myung-Bo", aliases: ["hong myung-bo", "hong myung bo", "myung-bo"], number: 20, position: "DF", positionLabel: "CB", x: 50, y: 74, hintClub: "Pohang Steelers", hintInitials: "H. M. B." },
      { id: "kr02-4", name: "Kim Tae-Young", aliases: ["kim tae-young", "kim tae young", "tae-young"], number: 7, position: "DF", positionLabel: "LCB", x: 28, y: 68, hintClub: "Chunnam Dragons", hintInitials: "K. T. Y." },
      { id: "kr02-5", name: "Song Chong-Gug", aliases: ["song chong-gug", "song chong gug", "chong-gug"], number: 22, position: "MF", positionLabel: "RWB", x: 86, y: 50, hintClub: "Busan I'cons", hintInitials: "S. C. G." },
      { id: "kr02-6", name: "Kim Nam-Il", aliases: ["kim nam-il", "kim nam il", "nam-il"], number: 5, position: "MF", positionLabel: "DM", x: 50, y: 54, hintClub: "Chunnam Dragons", hintInitials: "K. N. I." },
      { id: "kr02-7", name: "Lee Young-Pyo", aliases: ["lee young-pyo", "lee young pyo", "young-pyo"], number: 10, position: "MF", positionLabel: "LWB", x: 14, y: 50, hintClub: "Anyang LG Cheetahs", hintInitials: "L. Y. P." },
      { id: "kr02-8", name: "Yoo Sang-Chul", aliases: ["yoo sang-chul", "yoo sang chul", "sang-chul"], number: 6, position: "MF", positionLabel: "RCM", x: 66, y: 44, hintClub: "Kashiwa Reysol", hintInitials: "Y. S. C." },
      { id: "kr02-9", name: "Park Ji-Sung", aliases: ["park ji-sung", "park ji sung", "ji-sung park", "ji sung park"], number: 21, position: "MF", positionLabel: "LCM", x: 34, y: 44, hintClub: "Kyoto Purple Sanga", hintInitials: "P. J. S." },
      { id: "kr02-10", name: "Ahn Jung-Hwan", aliases: ["ahn jung-hwan", "ahn jung hwan", "jung-hwan ahn"], number: 19, position: "FW", positionLabel: "RST", x: 62, y: 18, hintClub: "Perugia", hintInitials: "A. J. H." },
      { id: "kr02-11", name: "Seol Ki-Hyeon", aliases: ["seol ki-hyeon", "seol ki hyeon", "ki-hyeon"], number: 9, position: "FW", positionLabel: "LST", x: 38, y: 18, hintClub: "RSC Anderlecht", hintInitials: "S. K. H." }
    ]
  },
  // 25. GHANA 2010 (The Black Stars Heartbreak)
  {
    id: "ghana-2010",
    country: "Ghana",
    year: 2010,
    formation: "4-3-3",
    jerseyColor: "#FFFFFF",
    numberColor: "#000000",
    trimColor: "#E53935",
    squadName: "The Black Stars Shootout",
    isIconic: true,
    players: [
      { id: "gh10-1", name: "Richard Kingson", aliases: ["kingson", "richard kingson", "r. kingson"], number: 22, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Wigan Athletic", hintInitials: "R. K." },
      { id: "gh10-2", name: "John Paintsil", aliases: ["paintsil", "john paintsil", "j. paintsil"], number: 4, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Fulham FC", hintInitials: "J. P." },
      { id: "gh10-3", name: "John Mensah", aliases: ["mensah", "john mensah", "j. mensah"], number: 5, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Sunderland AFC", hintInitials: "J. M." },
      { id: "gh10-4", name: "Isaac Vorsah", aliases: ["vorsah", "isaac vorsah", "i. vorsah"], number: 15, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "TSG 1899 Hoffenheim", hintInitials: "I. V." },
      { id: "gh10-5", name: "Hans Sarpei", aliases: ["sarpei", "hans sarpei", "h. sarpei"], number: 2, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Bayer 04 Leverkusen", hintInitials: "H. S." },
      { id: "gh10-6", name: "Samuel Inkoom", aliases: ["inkoom", "samuel inkoom", "s. inkoom"], number: 7, position: "MF", positionLabel: "RCM", x: 66, y: 48, hintClub: "FC Basel", hintInitials: "S. I." },
      { id: "gh10-7", name: "Anthony Annan", aliases: ["annan", "anthony annan", "a. annan"], number: 6, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "Rosenborg BK", hintInitials: "A. A." },
      { id: "gh10-8", name: "Kwadwo Asamoah", aliases: ["asamoah", "kwadwo asamoah", "k. asamoah"], number: 13, position: "MF", positionLabel: "LCM", x: 34, y: 48, hintClub: "Udinese Calcio", hintInitials: "K. A." },
      { id: "gh10-9", name: "Sulley Muntari", aliases: ["muntari", "sulley muntari", "s. muntari"], number: 11, position: "FW", positionLabel: "RW", x: 80, y: 22, hintClub: "Inter Milan", hintInitials: "S. M." },
      { id: "gh10-10", name: "Asamoah Gyan", aliases: ["gyan", "asamoah gyan", "a. gyan"], number: 3, position: "FW", positionLabel: "ST", x: 50, y: 13, hintClub: "Stade Rennais", hintInitials: "A. G." },
      { id: "gh10-11", name: "Kevin-Prince Boateng", aliases: ["boateng", "kevin prince boateng", "k. p. boateng", "kpb"], number: 23, position: "FW", positionLabel: "LW", x: 20, y: 22, hintClub: "Portsmouth FC", hintInitials: "K. P. B." }
    ]
  },
  // 26. URUGUAY 1930 (First World Cup Champions)
  {
    id: "uruguay-1930",
    country: "Uruguay",
    year: 1930,
    formation: "4-3-3",
    jerseyColor: "#29B6F6", // Celeste Sky Blue
    numberColor: "#FFFFFF",
    trimColor: "#FFFFFF",
    squadName: "The Pioneers Champions",
    isIconic: false,
    players: [
      { id: "uy30-1", name: "Enrique Ballestero", aliases: ["ballestero", "enrique ballestero", "e. ballestero"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Rampla Juniors", hintInitials: "E. B." },
      { id: "uy30-2", name: "José Nasazzi", aliases: ["nasazzi", "jose nasazzi", "j. nasazzi"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Bella Vista", hintInitials: "J. N." },
      { id: "uy30-3", name: "Ernesto Mascheroni", aliases: ["mascheroni", "ernesto mascheroni", "e. mascheroni"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Olimpia", hintInitials: "E. M." },
      { id: "uy30-4", name: "José Leandro Andrade", aliases: ["andrade", "jose leandro andrade", "j. l. andrade"], number: 4, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Nacional", hintInitials: "J. L. A." },
      { id: "uy30-5", name: "Lorenzo Fernández", aliases: ["fernandez", "lorenzo fernandez", "l. fernandez"], number: 5, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Peñarol", hintInitials: "L. F." },
      { id: "uy30-6", name: "Álvaro Gestido", aliases: ["gestido", "alvaro gestido", "a. gestido"], number: 6, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "Peñarol", hintInitials: "A. G." },
      { id: "uy30-7", name: "Pablo Dorado", aliases: ["dorado", "pablo dorado", "p. dorado"], number: 7, position: "FW", positionLabel: "RW", x: 80, y: 22, hintClub: "Bella Vista", hintInitials: "P. D." },
      { id: "uy30-8", name: "Héctor Scarone", aliases: ["scarone", "hector scarone", "h. scarone"], number: 8, position: "MF", positionLabel: "RCM", x: 66, y: 48, hintClub: "Nacional", hintInitials: "H. S." },
      { id: "uy30-9", name: "Héctor Castro", aliases: ["castro", "hector castro", "h. castro", "el manco"], number: 9, position: "FW", positionLabel: "ST", x: 50, y: 13, hintClub: "Nacional", hintInitials: "H. C." },
      { id: "uy30-10", name: "José Pedro Cea", aliases: ["cea", "jose pedro cea", "j. p. cea"], number: 10, position: "MF", positionLabel: "LCM", x: 34, y: 48, hintClub: "Nacional", hintInitials: "J. P. C." },
      { id: "uy30-11", name: "Santos Iriarte", aliases: ["iriarte", "santos iriarte", "s. iriarte"], number: 11, position: "FW", positionLabel: "LW", x: 20, y: 22, hintClub: "Racing Montevideo", hintInitials: "S. I." }
    ]
  },
  // 27. SPAIN 2006 (The Rise of generation)
  {
    id: "spain-2006",
    country: "Spain",
    year: 2006,
    formation: "4-3-3",
    jerseyColor: "#E53935",
    numberColor: "#FFD54F",
    trimColor: "#FFD54F",
    squadName: "The Pre-Tiki-Taka Era",
    isIconic: false,
    players: [
      { id: "es06-1", name: "Iker Casillas", aliases: ["casillas", "iker casillas", "i. casillas"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Real Madrid", hintInitials: "I. C." },
      { id: "es06-2", name: "Sergio Ramos", aliases: ["ramos", "sergio ramos", "s. ramos"], number: 15, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Real Madrid", hintInitials: "S. R." },
      { id: "es06-3", name: "Pablo Ibáñez", aliases: ["ibanez", "pablo ibanez", "p. ibanez"], number: 22, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Atlético Madrid", hintInitials: "P. I." },
      { id: "es06-4", name: "Carles Puyol", aliases: ["puyol", "carles puyol", "c. puyol"], number: 5, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Barcelona", hintInitials: "C. P." },
      { id: "es06-5", name: "Mariano Pernía", aliases: ["pernia", "mariano pernia", "m. pernia"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Getafe", hintInitials: "M. P." },
      { id: "es06-6", name: "Xabi Alonso", aliases: ["alonso", "xabi alonso", "x. alonso"], number: 14, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "Liverpool", hintInitials: "X. A." },
      { id: "es06-7", name: "Xavi Hernández", aliases: ["xavi", "xavi hernandez", "hernandez"], number: 8, position: "MF", positionLabel: "RCM", x: 66, y: 48, hintClub: "Barcelona", hintInitials: "X." },
      { id: "es06-8", name: "Cesc Fàbregas", aliases: ["fabregas", "cesc fabregas", "c. fabregas"], number: 18, position: "MF", positionLabel: "LCM", x: 34, y: 48, hintClub: "Arsenal", hintInitials: "C. F." },
      { id: "es06-9", name: "Raúl González", aliases: ["raul", "raul gonzalez", "r. gonzalez"], number: 7, position: "FW", positionLabel: "RW", x: 80, y: 22, hintClub: "Real Madrid", hintInitials: "R." },
      { id: "es06-10", name: "Fernando Torres", aliases: ["torres", "fernando torres", "f. torres", "el nino"], number: 9, position: "FW", positionLabel: "ST", x: 50, y: 13, hintClub: "Atlético Madrid", hintInitials: "F. T." },
      { id: "es06-11", name: "David Villa", aliases: ["villa", "david villa", "d. villa", "el guaje"], number: 21, position: "FW", positionLabel: "LW", x: 20, y: 22, hintClub: "Valencia CF", hintInitials: "D. V." }
    ]
  },
  // 28. ARGENTINA 2006 (Pekerman's Squad)
  {
    id: "argentina-2006",
    country: "Argentina",
    year: 2006,
    formation: "4-4-2",
    jerseyColor: "#74C3FF",
    numberColor: "#000000",
    trimColor: "#FFFFFF",
    squadName: "The Golden Generation Debut",
    isIconic: false,
    players: [
      { id: "arg06-1", name: "Roberto Abbondanzieri", aliases: ["abbondanzieri", "roberto abbondanzieri", "r. abbondanzieri", "el pato"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Boca Juniors", hintInitials: "R. A." },
      { id: "arg06-2", name: "Fabricio Coloccini", aliases: ["coloccini", "fabricio coloccini", "f. coloccini"], number: 4, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Deportivo La Coruña", hintInitials: "F. C." },
      { id: "arg06-3", name: "Roberto Ayala", aliases: ["ayala", "roberto ayala", "r. ayala", "el raton"], number: 2, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Valencia", hintInitials: "R. A." },
      { id: "arg06-4", name: "Gabriel Heinze", aliases: ["heinze", "gabriel heinze", "g. heinze"], number: 6, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Manchester United", hintInitials: "G. H." },
      { id: "arg06-5", name: "Juan Pablo Sorín", aliases: ["sorin", "juan pablo sorin", "j. p. sorin"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Villarreal", hintInitials: "J. P. S." },
      { id: "arg06-6", name: "Luis González", aliases: ["gonzalez", "luis gonzalez", "lucho gonzalez", "l. gonzalez"], number: 22, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "FC Porto", hintInitials: "L. G." },
      { id: "arg06-7", name: "Javier Mascherano", aliases: ["mascherano", "javier mascherano", "j. mascherano"], number: 8, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Corinthians", hintInitials: "J. M." },
      { id: "arg06-8", name: "Juan Román Riquelme", aliases: ["riquelme", "juan roman riquelme", "j. r. riquelme", "roman"], number: 10, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Villarreal", hintInitials: "J. R. R." },
      { id: "arg06-9", name: "Maxi Rodríguez", aliases: ["rodriguez", "maxi rodriguez", "m. rodriguez"], number: 18, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Atlético Madrid", hintInitials: "M. R." },
      { id: "arg06-10", name: "Carlos Tevez", aliases: ["tevez", "carlos tevez", "c. tevez", "el apache"], number: 11, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "Corinthians", hintInitials: "C. T." },
      { id: "arg06-11", name: "Hernán Crespo", aliases: ["crespo", "hernan crespo", "h. crespo"], number: 9, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Chelsea", hintInitials: "H. C." }
    ]
  },
  // 29. BRAZIL 2006 (The Magic Quartet)
  {
    id: "brazil-2006",
    country: "Brazil",
    year: 2006,
    formation: "4-4-2",
    jerseyColor: "#FFEB3B",
    numberColor: "#0D47A1",
    trimColor: "#4CAF50",
    squadName: "The Magic Quartet Asymmetric",
    isIconic: true,
    players: [
      { id: "br06-1", name: "Dida", aliases: ["dida", "nelson de jesus silva"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "AC Milan", hintInitials: "D." },
      { id: "br06-2", name: "Cafu", aliases: ["cafu", "marcos evangelista de moraes"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "AC Milan", hintInitials: "C." },
      { id: "br06-3", name: "Lúcio", aliases: ["lucio", "lucimar da silva ferreira"], number: 3, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Bayern Munich", hintInitials: "L." },
      { id: "br06-4", name: "Juan", aliases: ["juan", "juan silveira dos santos"], number: 4, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Bayer Leverkusen", hintInitials: "J." },
      { id: "br06-5", name: "Roberto Carlos", aliases: ["roberto carlos", "r. carlos"], number: 6, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Real Madrid", hintInitials: "R. C." },
      { id: "br06-6", name: "Gilberto Silva", aliases: ["gilberto silva", "gilberto", "g. silva"], number: 17, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Arsenal", hintInitials: "G. S." },
      { id: "br06-7", name: "Zé Roberto", aliases: ["ze roberto", "z. roberto", "ze"], number: 11, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "Bayern Munich", hintInitials: "Z. R." },
      { id: "br06-8", name: "Juninho Pernambucano", aliases: ["juninho", "juninho pernambucano", "j. pernambucano"], number: 19, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "Lyon", hintInitials: "J. P." },
      { id: "br06-9", name: "Kaká", aliases: ["kaka", "ricardo izecson dos santos leite"], number: 8, position: "MF", positionLabel: "AM", x: 50, y: 32, hintClub: "AC Milan", hintInitials: "K." },
      { id: "br06-10", name: "Ronaldinho", aliases: ["ronaldinho", "ronaldinho gaucho", "r10"], number: 10, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Barcelona", hintInitials: "R." },
      { id: "br06-11", name: "Ronaldo", aliases: ["ronaldo", "ronaldo nazario", "fenomeno", "r9"], number: 9, position: "FW", positionLabel: "ST", x: 50, y: 15, hintClub: "Real Madrid", hintInitials: "R." }
    ]
  },
  // 30. GERMANY 2010 (The Young Machine)
  {
    id: "germany-2010",
    country: "Germany",
    year: 2010,
    formation: "4-2-3-1",
    jerseyColor: "#FFFFFF",
    numberColor: "#000000",
    trimColor: "#E53935",
    squadName: "The Young Blitzkrieg",
    isIconic: true,
    players: [
      { id: "de10-1", name: "Manuel Neuer", aliases: ["neuer", "manuel neuer", "m. neuer"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Schalke 04", hintInitials: "M. N." },
      { id: "de10-2", name: "Philipp Lahm", aliases: ["lahm", "philipp lahm", "p. lahm"], number: 16, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Bayern Munich", hintInitials: "P. L." },
      { id: "de10-3", name: "Arne Friedrich", aliases: ["friedrich", "arne friedrich", "a. friedrich"], number: 3, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Hertha BSC", hintInitials: "A. F." },
      { id: "de10-4", name: "Per Mertesacker", aliases: ["mertesacker", "per mertesacker", "p. mertesacker"], number: 17, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Werder Bremen", hintInitials: "P. M." },
      { id: "de10-5", name: "Jérôme Boateng", aliases: ["boateng", "jerome boateng", "j. boateng"], number: 20, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Hamburger SV", hintInitials: "J. B." },
      { id: "de10-6", name: "Sami Khedira", aliases: ["khedira", "sami khedira", "s. khedira"], number: 6, position: "MF", positionLabel: "RDM", x: 62, y: 55, hintClub: "VfB Stuttgart", hintInitials: "S. K." },
      { id: "de10-7", name: "Bastian Schweinsteiger", aliases: ["schweinsteiger", "bastian schweinsteiger", "b. schweinsteiger"], number: 7, position: "MF", positionLabel: "LDM", x: 38, y: 55, hintClub: "Bayern Munich", hintInitials: "B. S." },
      { id: "de10-8", name: "Thomas Müller", aliases: ["muller", "thomas muller", "t. muller"], number: 13, position: "MF", positionLabel: "RAM", x: 80, y: 35, hintClub: "Bayern Munich", hintInitials: "T. M." },
      { id: "de10-9", name: "Mesut Özil", aliases: ["ozil", "mesut ozil", "m. ozil"], number: 8, position: "MF", positionLabel: "CAM", x: 50, y: 35, hintClub: "Werder Bremen", hintInitials: "M. O." },
      { id: "de10-10", name: "Lukas Podolski", aliases: ["podolski", "lukas podolski", "l. podolski", "poldi"], number: 10, position: "MF", positionLabel: "LAM", x: 20, y: 35, hintClub: "1. FC Köln", hintInitials: "L. P." },
      { id: "de10-11", name: "Miroslav Klose", aliases: ["klose", "miroslav klose", "m. klose"], number: 11, position: "FW", positionLabel: "ST", x: 50, y: 15, hintClub: "Bayern Munich", hintInitials: "M. K." }
    ]
  },
  // 31. COLOMBIA 2014 (James Rodriguez breakout)
  {
    id: "colombia-2014",
    country: "Colombia",
    year: 2014,
    formation: "4-2-3-1",
    jerseyColor: "#FFEB3B", // Yellow
    numberColor: "#0D47A1",
    trimColor: "#E53935",
    squadName: "James Rodriguez Breakout",
    isIconic: true,
    players: [
      { id: "co14-1", name: "David Ospina", aliases: ["ospina", "david ospina", "d. ospina"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "OGC Nice", hintInitials: "D. O." },
      { id: "co14-2", name: "Juan Camilo Zúñiga", aliases: ["zuniga", "camilo zuniga", "j. c. zuniga", "juan camilo zuniga"], number: 18, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Napoli", hintInitials: "J. C. Z." },
      { id: "co14-3", name: "Cristián Zapata", aliases: ["zapata", "cristian zapata", "c. zapata"], number: 2, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "AC Milan", hintInitials: "C. Z." },
      { id: "co14-4", name: "Mario Yepes", aliases: ["yepes", "mario yepes", "m. yepes"], number: 3, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Atalanta", hintInitials: "M. Y." },
      { id: "co14-5", name: "Pablo Armero", aliases: ["armero", "pablo armero", "p. armero"], number: 7, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "West Ham United", hintInitials: "P. A." },
      { id: "co14-6", name: "Abel Aguilar", aliases: ["aguilar", "abel aguilar", "a. aguilar"], number: 8, position: "MF", positionLabel: "RDM", x: 62, y: 55, hintClub: "Toulouse", hintInitials: "A. A." },
      { id: "co14-7", name: "Carlos Sánchez", aliases: ["sanchez", "carlos sanchez", "c. sanchez", "la roca"], number: 6, position: "MF", positionLabel: "LDM", x: 38, y: 55, hintClub: "Elche", hintInitials: "C. S." },
      { id: "co14-8", name: "Juan Guillermo Cuadrado", aliases: ["cuadrado", "juan cuadrado", "j. g. cuadrado"], number: 11, position: "MF", positionLabel: "RAM", x: 80, y: 35, hintClub: "Fiorentina", hintInitials: "J. G. C." },
      { id: "co14-9", name: "James Rodríguez", aliases: ["james rodriguez", "james", "j. rodriguez", "rodriguez"], number: 10, position: "MF", positionLabel: "CAM", x: 50, y: 35, hintClub: "AS Monaco", hintInitials: "J. R." },
      { id: "co14-10", name: "Jackson Martínez", aliases: ["martinez", "jackson martinez", "j. martinez", "cha cha cha"], number: 21, position: "MF", positionLabel: "LAM", x: 20, y: 35, hintClub: "FC Porto", hintInitials: "J. M." },
      { id: "co14-11", name: "Teófilo Gutiérrez", aliases: ["gutierrez", "teofilo gutierrez", "t. gutierrez", "teo"], number: 9, position: "FW", positionLabel: "ST", x: 50, y: 15, hintClub: "River Plate", hintInitials: "T. G." }
    ]
  },
  // 32. SENEGAL 2002 (The Defeating Champions opener)
  {
    id: "senegal-2002",
    country: "Senegal",
    year: 2002,
    formation: "4-4-2",
    jerseyColor: "#FFFFFF",
    numberColor: "#2E7D32",
    trimColor: "#FFD54F",
    squadName: "The Opener Shockers",
    isIconic: false,
    players: [
      { id: "sn02-1", name: "Tony Sylva", aliases: ["sylva", "tony sylva", "t. sylva"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Monaco", hintInitials: "T. S." },
      { id: "sn02-2", name: "Ferdinand Coly", aliases: ["coly", "ferdinand coly", "f. coly"], number: 17, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "RC Lens", hintInitials: "F. C." },
      { id: "sn02-3", name: "Lamine Diatta", aliases: ["diatta", "lamine diatta", "l. diatta"], number: 13, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "Stade Rennais", hintInitials: "L. D." },
      { id: "sn02-4", name: "Pape Malick Diop", aliases: ["diop", "pape malick diop", "p. m. diop"], number: 4, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "FC Lorient", hintInitials: "P. M. D." },
      { id: "sn02-5", name: "Omar Daf", aliases: ["daf", "omar daf", "o. daf"], number: 2, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "FC Sochaux", hintInitials: "O. D." },
      { id: "sn02-6", name: "Aliou Cissé", aliases: ["cisse", "aliou cisse", "a. cisse"], number: 6, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Montpellier HSC", hintInitials: "A. C." },
      { id: "sn02-7", name: "Pape Bouba Diop", aliases: ["bouba diop", "pape bouba diop", "p. b. diop", "wardrobe"], number: 19, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "RC Lens", hintInitials: "P. B. D." },
      { id: "sn02-8", name: "Salif Diao", aliases: ["diao", "salif diao", "s. diao"], number: 15, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "CS Sedan", hintInitials: "S. D." },
      { id: "sn02-9", name: "Moussa N'Diaye", aliases: ["n'diaye", "ndiaye", "moussa ndiaye", "m. ndiaye"], number: 10, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "CS Sedan", hintInitials: "M. N." },
      { id: "sn02-10", name: "Khalilou Fadiga", aliases: ["fadiga", "khalilou fadiga", "k. fadiga"], number: 11, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "AJ Auxerre", hintInitials: "K. F." },
      { id: "sn02-11", name: "El-Hadji Diouf", aliases: ["diouf", "el hadji diouf", "el-hadji diouf", "e. h. diouf"], number: 11, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "RC Lens", hintInitials: "E. H. D." }
    ]
  },
  // 33. URUGUAY 1950 (The Maracanazo Winners)
  {
    id: "uruguay-1950",
    country: "Uruguay",
    year: 1950,
    formation: "4-3-3",
    jerseyColor: "#29B6F6",
    numberColor: "#FFFFFF",
    trimColor: "#FFFFFF",
    squadName: "The Maracanazo Shockers",
    isIconic: false,
    players: [
      { id: "uy50-1", name: "Roque Máspoli", aliases: ["maspoli", "roque maspoli", "r. maspoli"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "CA Peñarol", hintInitials: "R. M." },
      { id: "uy50-2", name: "Matías González", aliases: ["gonzalez", "matias gonzalez", "m. gonzalez"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "CA Cerro", hintInitials: "M. G." },
      { id: "uy50-3", name: "Eusebio Tejera", aliases: ["tejera", "eusebio tejera", "e. tejera"], number: 3, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "CA Nacional", hintInitials: "E. T." },
      { id: "uy50-4", name: "Schubert Gambetta", aliases: ["gambetta", "schubert gambetta", "s. gambetta"], number: 4, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "CA Nacional", hintInitials: "S. G." },
      { id: "uy50-5", name: "Obdulio Varela", aliases: ["varela", "obdulio varela", "o. varela", "el negro jefe"], number: 5, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "CA Peñarol", hintInitials: "O. V." },
      { id: "uy50-6", name: "Víctor Rodríguez Andrade", aliases: ["andrade", "victor rodriguez andrade", "v. r. andrade"], number: 6, position: "MF", positionLabel: "DM", x: 50, y: 56, hintClub: "Central Español", hintInitials: "V. R. A." },
      { id: "uy50-7", name: "Alcides Ghiggia", aliases: ["ghiggia", "alcides ghiggia", "a. ghiggia"], number: 7, position: "FW", positionLabel: "RW", x: 80, y: 22, hintClub: "CA Peñarol", hintInitials: "A. G." },
      { id: "uy50-8", name: "Julio Pérez", aliases: ["perez", "julio perez", "j. perez"], number: 8, position: "MF", positionLabel: "RCM", x: 66, y: 48, hintClub: "River Plate (Mvd)", hintInitials: "J. P." },
      { id: "uy50-9", name: "Óscar Míguez", aliases: ["miguez", "oscar miguez", "o. miguez"], number: 9, position: "FW", positionLabel: "ST", x: 50, y: 13, hintClub: "CA Peñarol", hintInitials: "Ó. M." },
      { id: "uy50-10", name: "Juan Alberto Schiaffino", aliases: ["schiaffino", "juan alberto schiaffino", "j. a. schiaffino", "pepe schiaffino"], number: 10, position: "MF", positionLabel: "LCM", x: 34, y: 48, hintClub: "CA Peñarol", hintInitials: "J. A. S." },
      { id: "uy50-11", name: "Rubén Morán", aliases: ["moran", "ruben moran", "r. moran"], number: 11, position: "FW", positionLabel: "LW", x: 20, y: 22, hintClub: "CA Cerro", hintInitials: "R. M." }
    ]
  },
  // 34. BRAZIL 1982 (The Greatest Never to Win)
  {
    id: "brazil-1982",
    country: "Brazil",
    year: 1982,
    formation: "4-4-2",
    jerseyColor: "#FFEB3B",
    numberColor: "#0D47A1",
    trimColor: "#4CAF50",
    squadName: "Futebol Arte Beauty",
    isIconic: false,
    players: [
      { id: "br82-1", name: "Waldir Peres", aliases: ["waldir peres", "peres", "w. peres"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "São Paulo", hintInitials: "W. P." },
      { id: "br82-2", name: "Leandro", aliases: ["leandro", "josé leandro"], number: 2, position: "DF", positionLabel: "RB", x: 84, y: 66, hintClub: "Flamengo", hintInitials: "L." },
      { id: "br82-3", name: "Oscar", aliases: ["oscar", "jose oscar bernardi"], number: 3, position: "DF", positionLabel: "RCB", x: 62, y: 72, hintClub: "São Paulo", hintInitials: "O." },
      { id: "br82-4", name: "Luizinho", aliases: ["luizinho", "luiz carlos ferreira"], number: 4, position: "DF", positionLabel: "LCB", x: 38, y: 72, hintClub: "Atlético Mineiro", hintInitials: "L." },
      { id: "br82-5", name: "Júnior", aliases: ["junior", "leovegildo lins da gama"], number: 6, position: "DF", positionLabel: "LB", x: 16, y: 66, hintClub: "Flamengo", hintInitials: "J." },
      { id: "br82-6", name: "Toninho Cerezo", aliases: ["cerezo", "toninho cerezo", "t. cerezo"], number: 5, position: "MF", positionLabel: "RDM", x: 62, y: 52, hintClub: "Atlético Mineiro", hintInitials: "T. C." },
      { id: "br82-7", name: "Falcão", aliases: ["falcao", "paulo roberto falcao"], number: 15, position: "MF", positionLabel: "LDM", x: 38, y: 52, hintClub: "AS Roma", hintInitials: "F." },
      { id: "br82-8", name: "Sócrates", aliases: ["socrates", "socrates brasileiro"], number: 8, position: "MF", positionLabel: "RAM", x: 80, y: 35, hintClub: "Corinthians", hintInitials: "S." },
      { id: "br82-9", name: "Zico", aliases: ["zico", "arthur antunes coimbra"], number: 10, position: "MF", positionLabel: "LAM", x: 20, y: 35, hintClub: "Flamengo", hintInitials: "Z." },
      { id: "br82-10", name: "Serginho", aliases: ["serginho", "sergio bernardino"], number: 9, position: "FW", positionLabel: "RST", x: 65, y: 16, hintClub: "São Paulo", hintInitials: "S." },
      { id: "br82-11", name: "Éder", aliases: ["eder", "eder aleixo de assis"], number: 11, position: "FW", positionLabel: "LST", x: 35, y: 16, hintClub: "Atlético Mineiro", hintInitials: "É." }
    ]
  },
  // 35. COSTA RICA 2014 (Historic Underdog Run)
  {
    id: "costa-rica-2014",
    country: "Costa Rica",
    year: 2014,
    formation: "5-4-1",
    jerseyColor: "#D32F2F", // Vibrant Red
    numberColor: "#FFFFFF",
    trimColor: "#0D47A1",
    squadName: "The Ticos Sensation",
    isIconic: true,
    players: [
      { id: "cr14-1", name: "Keylor Navas", aliases: ["navas", "keylor navas", "k. navas"], number: 1, position: "GK", positionLabel: "GK", x: 50, y: 85, hintClub: "Levante", hintInitials: "K. N." },
      { id: "cr14-2", name: "Cristian Gamboa", aliases: ["gamboa", "cristian gamboa", "c. gamboa"], number: 16, position: "DF", positionLabel: "RWB", x: 85, y: 65, hintClub: "Rosenborg", hintInitials: "C. G." },
      { id: "cr14-3", name: "Óscar Duarte", aliases: ["duarte", "oscar duarte", "o. duarte"], number: 6, position: "DF", positionLabel: "RCB", x: 65, y: 70, hintClub: "Club Brugge", hintInitials: "Ó. D." },
      { id: "cr14-4", name: "Giancarlo González", aliases: ["gonzalez", "giancarlo gonzalez", "g. gonzalez", "pipo gonzalez"], number: 3, position: "DF", positionLabel: "CB", x: 50, y: 75, hintClub: "Columbus Crew", hintInitials: "G. G." },
      { id: "cr14-5", name: "Michael Umaña", aliases: ["umana", "michael umana", "m. umana"], number: 4, position: "DF", positionLabel: "LCB", x: 35, y: 70, hintClub: "Saprissa", hintInitials: "M. U." },
      { id: "cr14-6", name: "Júnior Díaz", aliases: ["diaz", "junior diaz", "j. diaz"], number: 15, position: "DF", positionLabel: "LWB", x: 15, y: 65, hintClub: "Mainz 05", hintInitials: "J. D." },
      { id: "cr14-7", name: "Bryan Ruiz", aliases: ["ruiz", "bryan ruiz", "b. ruiz"], number: 10, position: "MF", positionLabel: "RM", x: 84, y: 44, hintClub: "PSV Eindhoven", hintInitials: "B. R." },
      { id: "cr14-8", name: "Yeltsin Tejeda", aliases: ["tejeda", "yeltsin tejeda", "y. tejeda"], number: 17, position: "MF", positionLabel: "RCM", x: 62, y: 48, hintClub: "Saprissa", hintInitials: "Y. T." },
      { id: "cr14-9", name: "Celso Borges", aliases: ["borges", "celso borges", "c. borges"], number: 5, position: "MF", positionLabel: "LCM", x: 38, y: 48, hintClub: "AIK", hintInitials: "C. B." },
      { id: "cr14-10", name: "Christian Bolaños", aliases: ["bolanos", "christian bolanos", "c. bolanos"], number: 7, position: "MF", positionLabel: "LM", x: 16, y: 44, hintClub: "Copenhagen", hintInitials: "C. B." },
      { id: "cr14-11", name: "Joel Campbell", aliases: ["campbell", "joel campbell", "j. campbell"], number: 9, position: "FW", positionLabel: "ST", x: 50, y: 15, hintClub: "Olympiacos", hintInitials: "J. C." }
    ]
  }
];
