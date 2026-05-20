export interface CrosswordPlayer {
  number: number;
  name: string;
  row: number;
  col: number;
  direction: 'across' | 'down';
  clue: string;
}

export interface CrosswordTheme {
  id: string;
  title: string;
  subtitle: string;
  gridSize: number;
  players: CrosswordPlayer[];
}

export const CROSSWORD_THEMES: CrosswordTheme[] = [
  {
    id: "argentina-finalists",
    title: "ARGENTINA HEROES",
    subtitle: "Legends who starred in the 2014 & 2022 finals",
    gridSize: 10,
    players: [
      {
        number: 1,
        name: "MARADONA",
        row: 4,
        col: 0,
        direction: "across",
        clue: "Captained Argentina to the 1986 trophy, famously scoring the 'Hand of God' and the 'Goal of the Century' against England."
      },
      {
        number: 2,
        name: "MESSI",
        row: 4,
        col: 0,
        direction: "down",
        clue: "Won the 2022 World Cup Final, scoring twice, and lifted the trophy wearing a traditional black Bisht robe."
      },
      {
        number: 3,
        name: "DIMARIA",
        row: 1,
        col: 1,
        direction: "down",
        clue: "Lethal Albiceleste winger who scored the crucial second goal in the 2022 Final against France."
      },
      {
        number: 4,
        name: "HIGUAIN",
        row: 2,
        col: 0,
        direction: "across",
        clue: "Lethal striker who scored the winning goal in the 2014 QF against Belgium but famously missed a clean 1-on-1 in the Final."
      },
      {
        number: 5,
        name: "AGUERO",
        row: 4,
        col: 3,
        direction: "down",
        clue: "Lionel Messi's best friend and legendary striker who scored a crucial consolation goal in the 2018 match against France."
      }
    ]
  },
  {
    id: "brazil-glory",
    title: "SAMBA KINGS",
    subtitle: "The legendary Penta-Campeões of 2002",
    gridSize: 10,
    players: [
      {
        number: 1,
        name: "RONALDO",
        row: 4,
        col: 2,
        direction: "across",
        clue: "Won the 2002 Golden Boot with 8 goals, famously sporting a bizarre half-moon haircut in the Final."
      },
      {
        number: 2,
        name: "RIVALDO",
        row: 0,
        col: 6,
        direction: "down",
        clue: "Lethal left-footed playmaker of the 2002 'Three Rs' frontline, famously fined by FIFA for play-acting against Turkey."
      },
      {
        number: 3,
        name: "RONALDINHO",
        row: 1,
        col: 0,
        direction: "across",
        clue: "Provided an assist, scored a 40-yard free-kick, and got red-carded in the 2002 quarter-final against England."
      },
      {
        number: 4,
        name: "CAFU",
        row: 3,
        col: 5,
        direction: "down",
        clue: "Legendary captain and right-back who is the only player to appear in 3 consecutive World Cup finals (1994, 1998, 2002)."
      },
      {
        number: 5,
        name: "KAKA",
        row: 0,
        col: 3,
        direction: "down",
        clue: "Young AC Milan prodigy who played only 18 minutes in the 2002 tournament before going on to win the 2007 Ballon d'Or."
      }
    ]
  },
  {
    id: "france-champs",
    title: "LES BLEUS ICONS",
    subtitle: "Architects of the 1998 & 2018 triumphs",
    gridSize: 10,
    players: [
      {
        number: 1,
        name: "MBAPPE",
        row: 4,
        col: 0,
        direction: "across",
        clue: "Scored a hat-trick in the 2022 Final and won the Golden Boot, but only walked away with a silver medal."
      },
      {
        number: 2,
        name: "ZIDANE",
        row: 1,
        col: 2,
        direction: "down",
        clue: "Scored twice in the 1998 Final with headers, and ended his international career with a red card in the 2006 Final."
      },
      {
        number: 3,
        name: "GRIEZMANN",
        row: 2,
        col: 0,
        direction: "across",
        clue: "Won Man of the Match in the 2018 Final, scoring a penalty and executing two clinical set-piece assists."
      },
      {
        number: 4,
        name: "POGBA",
        row: 4,
        col: 3,
        direction: "down",
        clue: "Scored a beautiful curling shot from outside the box in the 2018 Final to put France 3-1 up against Croatia."
      },
      {
        number: 5,
        name: "HENRY",
        row: 3,
        col: 5,
        direction: "down",
        clue: "France's all-time icon who won the 1998 tournament as a youngster and scored the winner against Brazil in the 2006 QF."
      }
    ]
  },
  {
    id: "germany-machine",
    title: "DIE MANNSCHAFT",
    subtitle: "German efficiency at the highest level",
    gridSize: 10,
    players: [
      {
        number: 1,
        name: "KLOSE",
        row: 4,
        col: 0,
        direction: "across",
        clue: "All-time leading goalscorer in World Cup history with 16 goals, overtaking Ronaldo Nazário in the 2014 semi-final."
      },
      {
        number: 2,
        name: "MULLER",
        row: 2,
        col: 1,
        direction: "down",
        clue: "Scored 5 goals to win the 2010 Golden Boot as a 20-year-old, and scored the opening goal in the 2014 semi-final vs Brazil."
      },
      {
        number: 3,
        name: "LAHM",
        row: 5,
        col: 1,
        direction: "across",
        clue: "Germany's legendary captain who lifted the 2014 World Cup trophy in Rio, playing as both right-back and defensive midfielder."
      },
      {
        number: 4,
        name: "NEUER",
        row: 6,
        col: 0,
        direction: "across",
        clue: "Revolutionary sweeper-keeper who won the 2014 Golden Glove, dominating his penalty box with incredible confidence."
      },
      {
        number: 5,
        name: "KROOS",
        row: 7,
        col: 0,
        direction: "across",
        clue: "German midfield maestro who scored two goals in 69 seconds against Brazil in the 2014 semi-final."
      }
    ]
  },
  {
    id: "spain-tikitaka",
    title: "SPAIN 2010",
    subtitle: "Tiki-Taka kings of the J’burg final",
    gridSize: 10,
    players: [
      {
        number: 1,
        name: "INIESTA",
        row: 4,
        col: 0,
        direction: "across",
        clue: "Scored the dramatic 116th-minute extra-time winning goal against the Netherlands in Johannesburg in 2010."
      },
      {
        number: 2,
        name: "XAVI",
        row: 3,
        col: 6,
        direction: "down",
        clue: "The midfield metronome of Spain's tiki-taka dominance, completing 544 passes during the 2010 campaign."
      },
      {
        number: 3,
        name: "CASILLAS",
        row: 2,
        col: 4,
        direction: "down",
        clue: "Spain's captain and goalkeeper who famously denied Arjen Robben in a crucial 1-on-1 save in the 2010 Final."
      },
      {
        number: 4,
        name: "PUYOL",
        row: 6,
        col: 0,
        direction: "across",
        clue: "Barca's legendary defender who scored a powerful header from a corner to secure a 1-0 semi-final win against Germany."
      },
      {
        number: 5,
        name: "VILLA",
        row: 6,
        col: 5,
        direction: "across",
        clue: "El Guaje who won the 2010 Silver Boot, scoring 5 of Spain's 8 total goals in the tournament."
      }
    ]
  },
  {
    id: "italy-legends",
    title: "AZZURRI 2006",
    subtitle: "The defensive masters of Berlin",
    gridSize: 10,
    players: [
      {
        number: 1,
        name: "BUFFON",
        row: 4,
        col: 0,
        direction: "across",
        clue: "Conceded only two goals in 2006 (an own goal and a Zidane penalty), keeping 5 clean sheets on his way to the title."
      },
      {
        number: 2,
        name: "PIRLO",
        row: 0,
        col: 4,
        direction: "down",
        clue: "Italy's midfield maestro who assisted Fabio Grosso's legendary semi-final goal and scored in the Final shootout."
      },
      {
        number: 3,
        name: "CANNAVARO",
        row: 1,
        col: 5,
        direction: "down",
        clue: "Nicknamed 'The Berlin Wall', he captained Italy's unbreakable defense in 2006 and won the Ballon d'Or that year."
      },
      {
        number: 4,
        name: "TOTTI",
        row: 9,
        col: 4,
        direction: "across",
        clue: "Italy's number 10 who played with a metal plate in his ankle, scoring a critical 95th-minute penalty against Australia."
      },
      {
        number: 5,
        name: "MATERAZZI",
        row: 2,
        col: 0,
        direction: "across",
        clue: "Scored Italy's equalizer in the Final, conceded the opening penalty, and got Zinedine Zidane sent off."
      }
    ]
  },
  {
    id: "world-cup-goats",
    title: "WORLD CUP GOATS",
    subtitle: "The consensus greatest in tournament history",
    gridSize: 10,
    players: [
      {
        number: 1,
        name: "ZIDANE",
        row: 4,
        col: 0,
        direction: "across",
        clue: "Won the 1998 World Cup Final with two headers, and ended his international career with a headbutt in the 2006 Final."
      },
      {
        number: 2,
        name: "PELE",
        row: 3,
        col: 5,
        direction: "down",
        clue: "The only player in football history to win three separate World Cup tournaments (1958, 1962, 1970)."
      },
      {
        number: 3,
        name: "MARADONA",
        row: 1,
        col: 3,
        direction: "down",
        clue: "Hand of God scorer who captained Argentina to the 1986 title, dribbling past 5 English players in the QF."
      },
      {
        number: 4,
        name: "MESSI",
        row: 6,
        col: 4,
        direction: "across",
        clue: "Two-time Golden Ball winner who completed football by lifting the 2022 World Cup trophy in Qatar."
      },
      {
        number: 5,
        name: "CRISTIANO",
        row: 1,
        col: 8,
        direction: "down",
        clue: "The only player to score in 5 consecutive World Cups, starting with a penalty against Iran in 2006."
      }
    ]
  },
  {
    id: "golden-boots",
    title: "GOLDEN BOOTS",
    subtitle: "Lethal goalscorers of the tournament",
    gridSize: 10,
    players: [
      {
        number: 1,
        name: "KLOSE",
        row: 4,
        col: 0,
        direction: "across",
        clue: "Germany's front-flipping striker who scored 16 goals to become the all-time leading scorer in World Cup history."
      },
      {
        number: 2,
        name: "RONALDO",
        row: 3,
        col: 2,
        direction: "down",
        clue: "The legendary Brazilian number 9 who scored 8 goals to capture the Golden Boot and the 2002 World Cup trophy."
      },
      {
        number: 3,
        name: "MBAPPE",
        row: 6,
        col: 0,
        direction: "across",
        clue: "French phenomenon who scored a hat-trick in the 2022 Final and a double as a teenager against Argentina in 2018."
      },
      {
        number: 4,
        name: "VILLA",
        row: 7,
        col: 0,
        direction: "across",
        clue: "Lethal Spanish forward who scored 5 crucial goals in South Africa to guide Spain to the 2010 title."
      },
      {
        number: 5,
        name: "KANE",
        row: 5,
        col: 0,
        direction: "across",
        clue: "England's captain who captured the 2018 Golden Boot in Russia, scoring 6 goals including a hat-trick against Panama."
      }
    ]
  },
  {
    id: "historic-clash",
    title: "CLASSIC RIVALS",
    subtitle: "Legends who fought in iconic matches",
    gridSize: 10,
    players: [
      {
        number: 1,
        name: "KLOSE",
        row: 4,
        col: 0,
        direction: "across",
        clue: "All-time top scorer in World Cups who made his name with a debut hat-trick of headers in 2002."
      },
      {
        number: 2,
        name: "INIESTA",
        row: 0,
        col: 3,
        direction: "down",
        clue: "Spanish wizard who scored the World Cup winning goal in the 2010 Final and dedicated it to Dani Jarque."
      },
      {
        number: 3,
        name: "RONALDINHO",
        row: 6,
        col: 0,
        direction: "across",
        clue: "Samba legend who wore the number 11 shirt in 2002, forming the lethal 'Three Rs' partnership with Ronaldo and Rivaldo."
      },
      {
        number: 4,
        name: "BECKHAM",
        row: 3,
        col: 2,
        direction: "across",
        clue: "England captain who scored a redemption penalty against Argentina in 2002, having been sent off against them in 1998."
      },
      {
        number: 5,
        name: "PELE",
        row: 2,
        col: 1,
        direction: "down",
        clue: "Brazilian king who scored a hat-trick as a 17-year-old in the 1958 semi-final, and scored Brazil's 100th World Cup goal in the 1970 Final."
      }
    ]
  },
  {
    id: "young-talents",
    title: "WUNDERKINDS",
    subtitle: "Players who exploded as teenagers at the WC",
    gridSize: 10,
    players: [
      {
        number: 1,
        name: "PELE",
        row: 4,
        col: 1,
        direction: "across",
        clue: "Scored a brace in the 1958 Final at just 17 years old, becoming the youngest player to score and win a World Cup."
      },
      {
        number: 2,
        name: "MBAPPE",
        row: 1,
        col: 1,
        direction: "down",
        clue: "Won the Best Young Player award in 2018, scoring from 25 yards in the Final against Croatia at age 19."
      },
      {
        number: 3,
        name: "OWEN",
        row: 2,
        col: 4,
        direction: "down",
        clue: "England teenage sensation who scored a sensational solo goal against Argentina in the 1998 Round of 16."
      },
      {
        number: 4,
        name: "MULLER",
        row: 1,
        col: 1,
        direction: "across",
        clue: "Germany's 20-year-old who captured the Golden Boot and Best Young Player award at the 2010 World Cup."
      },
      {
        number: 5,
        name: "GAVI",
        row: 3,
        col: 0,
        direction: "across",
        clue: "Spain's golden boy who scored a beautiful volley against Costa Rica in 2022, becoming their youngest goalscorer ever."
      }
    ]
  }
];
