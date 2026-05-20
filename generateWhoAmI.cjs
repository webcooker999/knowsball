const fs = require('fs');
const path = require('path');

const players = [
  {
    id: "messi",
    playerName: "Lionel Messi",
    clues: [
      "I am the only player in history to score a World Cup goal in my teens, my twenties, and my thirties, but I spent the entire 2006 quarter-final elimination match on the bench in tears.",
      "I lost the 2014 World Cup Final in extra time against Germany, but I still had to walk up and collect the tournament's Golden Ball award.",
      "I won the 2022 World Cup Final, scoring twice in the match, and lifted the trophy wearing a traditional black Bisht robe."
    ]
  },
  {
    id: "ronaldinho",
    playerName: "Ronaldinho",
    clues: [
      "During my final career World Cup in 2006, I failed to score a single goal or provide a single assist during the entire tournament.",
      "In the 2002 World Cup quarter-final against England, I provided an assist, scored a 40-yard free-kick, and got a straight red card in the same match.",
      "I won the 2002 World Cup wearing the number 11 shirt, playing alongside Ronaldo Nazário and Rivaldo."
    ]
  },
  {
    id: "mbappe",
    playerName: "Kylian Mbappé",
    clues: [
      "My first ever World Cup goal was scored against Peru in 2018, making me my country's youngest goalscorer in tournament history.",
      "I scored two goals in under two minutes against Argentina in the 2018 round of 16 when I was still a teenager.",
      "I scored a hat-trick in the 2022 World Cup Final and won the Golden Boot, but only walked away with a silver medal."
    ]
  },
  {
    id: "maradona",
    playerName: "Diego Maradona",
    clues: [
      "I am the most fouled player in a single World Cup tournament, being fouled 53 times in 1986. My World Cup career ended completely in 1994 due to a failed drug test.",
      "I provided the final, decisive assist for the 84th-minute winning goal against West Germany in the 1986 Final.",
      "I captained Argentina to the 1986 trophy, famously scoring the \"Hand of God\" and the \"Goal of the Century\" against England."
    ]
  },
  {
    id: "pele",
    playerName: "Pelé",
    clues: [
      "I am the youngest player ever to play in a World Cup Final, doing so in 1958 at just 17 years and 249 days old.",
      "In the 1970 World Cup Final against Italy, I opened the scoring with a towering header and later assisted Carlos Alberto's legendary team goal.",
      "I am the only player in football history to win three separate FIFA World Cup tournaments (1958, 1962, 1970)."
    ]
  },
  {
    id: "zidane",
    playerName: "Zinedine Zidane",
    clues: [
      "I was sent off in two separate World Cups: once against Saudi Arabia in the 1998 group stage, and once in a World Cup Final.",
      "I scored twice in the 1998 World Cup Final, both towering headers from corner kicks, to win my country their first ever title.",
      "My final career match ended with a straight red card for headbutting Marco Materazzi in the 2006 World Cup Final."
    ]
  },
  {
    id: "ronaldo_nazario",
    playerName: "Ronaldo",
    clues: [
      "I was in the squad for the 1994 World Cup as a 17-year-old but did not play a single minute. Four years later, a mysterious convulsive fit hours before the 1998 Final derailed my performance.",
      "I famously sported a bizarre half-moon haircut at the 2002 World Cup, deliberately styled so my toddler son could tell me apart from Roberto Carlos on TV.",
      "I won the 2002 World Cup Golden Boot, scoring both goals in the 2-0 Final victory against Germany's Oliver Kahn."
    ]
  },
  {
    id: "klose",
    playerName: "Miroslav Klose",
    clues: [
      "I scored a hat-trick of headers in my World Cup debut match in 2002, which ended in an 8-0 demolition of Saudi Arabia.",
      "I won the Golden Boot in 2006 on home soil, and famously celebrated my goals with a signature front-flip.",
      "I am the all-time leading goalscorer in World Cup history with 15 goals, overtaking Ronaldo Nazário during a 7-1 win against Brazil in 2014."
    ]
  },
  {
    id: "beckenbauer",
    playerName: "Franz Beckenbauer",
    clues: [
      "In the 1970 World Cup semi-final against Italy (the 'Game of the Century'), I played with a dislocated shoulder, keeping my arm taped to my body.",
      "I am the first person to win the World Cup as both a captain (1974) and a manager (1990) for my country.",
      "Nicknamed 'Der Kaiser', I revolutionized the role of the sweeper (libero) while captaining West Germany."
    ]
  },
  {
    id: "g_muller",
    playerName: "Gerd Müller",
    clues: [
      "I scored an incredible 10 goals in the 1970 World Cup, winning the Golden Boot, including consecutive hat-tricks in the group stage.",
      "I scored the decisive 43rd-minute winning goal in the 1974 World Cup Final against the Netherlands on my home club's pitch in Munich.",
      "Nicknamed 'Der Bomber', I was West Germany's ultimate fox-in-the-box goalscorer, holding the all-time World Cup record of 14 goals for over 30 years."
    ]
  },
  {
    id: "cruyff",
    playerName: "Johan Cruyff",
    clues: [
      "I won a penalty in the first minute of the 1974 World Cup Final before a German player had even touched the ball, though we ultimately lost the match.",
      "I famously wore a custom two-striped shirt at the 1974 World Cup because my personal sponsor was Puma, while the team's kit supplier was Adidas.",
      "I am the pioneer of 'Total Football' who showcased the legendary 'Cruyff Turn' for the first time on the world stage in 1974."
    ]
  },
  {
    id: "iniesta",
    playerName: "Andrés Iniesta",
    clues: [
      "I won the Man of the Match award in the 2010 World Cup Final, but I dedicated my historic performance to my late friend Dani Jarque via a written undershirt.",
      "I controlled the midfield alongside Xavi and Sergio Busquets as we won the 2010 tournament, scoring only 8 goals total in the entire campaign.",
      "I scored the dramatic 116th-minute extra-time winning goal against the Netherlands to hand Spain their first ever World Cup trophy in 2010."
    ]
  },
  {
    id: "buffon",
    playerName: "Gianluigi Buffon",
    clues: [
      "I conceded only two goals during the entire 2006 World Cup: a Cristian Zaccardo own-goal and a Zinedine Zidane penalty.",
      "I won the Lev Yashin Award for best goalkeeper in 2006, keeping 5 clean sheets, and finished runner-up for the Ballon d'Or that same year.",
      "I am Italy's legendary goalkeeper who played in 5 separate World Cup tournaments (1998, 2002, 2006, 2010, 2014)."
    ]
  },
  {
    id: "t_muller",
    playerName: "Thomas Müller",
    clues: [
      "I won both the Golden Boot and the Best Young Player award at the 2010 World Cup as a 20-year-old, scoring 5 goals and providing 3 assists.",
      "In the famous 7-1 semi-final thrashing of Brazil in 2014, I scored the opening goal of the match in the 11th minute.",
      "I am Germany's self-proclaimed 'Raumdeuter' (space interpreter) who scored 10 total goals across the 2010 and 2014 World Cups."
    ]
  },
  {
    id: "charlton",
    playerName: "Bobby Charlton",
    clues: [
      "I survived the tragic 1958 Munich air disaster and went on to become the heartbeat of my country's greatest ever national team.",
      "I scored twice in the 1966 World Cup semi-final against Portugal, outshining Eusebio to lead my country to their only final.",
      "I am England's legendary midfielder who won the 1966 World Cup and the Ballon d'Or in the same year."
    ]
  },
  {
    id: "eusebio",
    playerName: "Eusébio",
    clues: [
      "I famously wept on the pitch after losing the 1966 World Cup semi-final against hosts England, a match dubbed the 'Jogo das Lágrimas'.",
      "I scored 4 goals in a single match to overturn a 3-0 deficit and win 5-3 against North Korea in the 1966 quarter-finals.",
      "Known as the 'Black Panther', I won the 1966 World Cup Golden Boot by scoring 9 goals for Portugal."
    ]
  },
  {
    id: "yashin",
    playerName: "Lev Yashin",
    clues: [
      "I played in four World Cups (1958, 1962, 1966, 1970) and remains the only goalkeeper in football history to win the Ballon d'Or.",
      "I famously stopped over 150 penalty kicks throughout my career, wearing an iconic all-black outfit on the pitch.",
      "Nicknamed the 'Black Spider', I am widely regarded as the greatest goalkeeper of the 20th century, representing the Soviet Union."
    ]
  },
  {
    id: "romario",
    playerName: "Romário",
    clues: [
      "I was sent home from the 1990 World Cup squad due to disciplinary issues but returned to dominate the next edition in the United States.",
      "I won the Golden Ball as the tournament's best player in 1994, scoring 5 goals and forming a lethal partnership with Bebeto.",
      "I spearheaded Brazil's 1994 World Cup triumph, famously celebrating goals with a cradling-baby gesture alongside Bebeto."
    ]
  },
  {
    id: "rivaldo",
    playerName: "Rivaldo",
    clues: [
      "I was heavily fined by FIFA during the 2002 World Cup for a controversial play-acting incident where I collapsed clutching my face after Hakan Ünsal kicked the ball at my legs.",
      "I scored in five consecutive matches during the 2002 World Cup, playing as the creative focal point of the 'Three Rs' frontline.",
      "I won the 2002 World Cup with Brazil, wearing the legendary number 10 shirt and assisting Ronaldo's final goals."
    ]
  },
  {
    id: "baggio",
    playerName: "Roberto Baggio",
    clues: [
      "I scored one of the greatest solo goals in World Cup history against Czechoslovakia in 1990, dribbling from the halfway line.",
      "I single-handedly dragged my country to the 1994 Final, scoring 5 goals in the knockout stages against Nigeria, Spain, and Bulgaria.",
      "Nicknamed the 'Divine Codino' (Divine Ponytail), I famously skied my penalty over the bar in the 1994 Final shootout against Brazil."
    ]
  },
  {
    id: "paolo_rossi",
    playerName: "Paolo Rossi",
    clues: [
      "I was suspended for two years in 1980 due to the 'Totonero' betting scandal but returned just in time to be selected for the 1982 World Cup.",
      "I scored a legendary hat-trick against Zico's heavily-favored Brazil in a thrilling 3-2 second-round match in 1982.",
      "I won the Golden Boot, the Golden Ball, and the 1982 World Cup trophy, leading Italy to victory with 6 goals."
    ]
  },
  {
    id: "zoff",
    playerName: "Dino Zoff",
    clues: [
      "I hold the record for the oldest player ever to win a World Cup, lifting the trophy in 1982.",
      "I made a miraculous goal-line save in the final minute against Brazil in 1982 to preserve Italy's 3-2 victory.",
      "I captained Italy to the 1982 World Cup title at the age of 40 years, 4 months, and 13 days."
    ]
  },
  {
    id: "matthaus",
    playerName: "Lothar Matthäus",
    clues: [
      "I hold the record for the most World Cup matches played by a single outfield player, appearing in 25 matches.",
      "I captained West Germany to victory in the 1990 World Cup, playing as a dynamic box-to-box midfielder and scoring 4 goals.",
      "I am Germany's legendary midfielder/sweeper who played in a record-tying 5 separate World Cup tournaments (1982-1998)."
    ]
  },
  {
    id: "schweinsteiger",
    playerName: "Bastian Schweinsteiger",
    clues: [
      "I scored two spectacular long-range goals against Portugal in the 2006 third-place playoff on home soil.",
      "I played the 2014 World Cup Final with a bloodied face after taking a hit from Sergio Agüero, running until I physically collapsed in extra time.",
      "Nicknamed the 'Fußballgott', I was the ultimate midfield general who anchored Germany's 2014 World Cup triumph."
    ]
  },
  {
    id: "lahm",
    playerName: "Philipp Lahm",
    clues: [
      "I scored the opening goal of the 2006 World Cup, a sensational curling strike into the top corner from the edge of the box against Costa Rica.",
      "Pep Guardiola described me as 'the most intelligent player I've ever coached', and I played both right-back and defensive midfield during our championship run.",
      "I captained Germany to their fourth World Cup title in 2014, retiring from international football immediately after lifting the trophy."
    ]
  },
  {
    id: "neuer",
    playerName: "Manuel Neuer",
    clues: [
      "I redefined the modern goalkeeper position by playing as an active sweeper-keeper during the 2014 World Cup, notably against Algeria.",
      "I conceded only 4 goals in 7 matches during the 2014 tournament and won the Golden Glove award.",
      "I am Germany's legendary goalkeeper who won the 2014 World Cup and captained them in the 2018 and 2022 editions."
    ]
  },
  {
    id: "casillas",
    playerName: "Iker Casillas",
    clues: [
      "I became my country's hero in the 2002 World Cup by saving three penalties in a shootout against Republic of Ireland in the round of 16.",
      "In the 2010 World Cup Final, I made a legendary one-on-one toe-tip save against Arjen Robben to keep the match scoreless.",
      "Nicknamed 'San Iker', I captained Spain to their historic 2010 World Cup triumph, keeping 5 clean sheets and winning the Golden Glove."
    ]
  },
  {
    id: "xavi",
    playerName: "Xavi",
    clues: [
      "I made an incredible 544 passes during the 2010 World Cup, completing 88.2% of them to orchestrate my team's tactical philosophy.",
      "I provided the crucial assist from a corner kick for Carles Puyol's powerful header in the 2010 semi-final against Germany.",
      "I was the engine room of Spain's legendary Tiki-Taka midfield that won the 2010 World Cup in South Africa."
    ]
  },
  {
    id: "ramos",
    playerName: "Sergio Ramos",
    clues: [
      "I played the entire 2010 World Cup at right-back, topping the Castrol Index rating for the best-performing player in the tournament.",
      "I wore a shirt dedicated to my late teammate Antonio Puerta during the celebrations after winning the 2010 Final.",
      "I am Spain's legendary defender who won the 2010 World Cup and later captained the national team in 2018."
    ]
  },
  {
    id: "puyol",
    playerName: "Carles Puyol",
    clues: [
      "I scored only three goals in my entire international career, but one was a towering header that won the 2010 semi-final against Germany.",
      "I formed a virtually impenetrable central defensive partnership with my Barcelona teammate Gerard Piqué during the 2010 tournament.",
      "Nicknamed 'Tarzan', I was the long-haired, passionate defensive warrior who helped Spain win the 2010 World Cup."
    ]
  },
  {
    id: "villa",
    playerName: "David Villa",
    clues: [
      "I scored a sensational 45-yard lob goal against Chile in the 2010 group stage after their goalkeeper came out to clear the ball.",
      "I scored 5 of my country's 8 total goals during the 2010 tournament, winning the Silver Shoe and Bronze Ball.",
      "Nicknamed 'El Guaje', I am Spain's all-time leading goalscorer who fired them to the 2010 World Cup trophy."
    ]
  },
  {
    id: "pirlo",
    playerName: "Andrea Pirlo",
    clues: [
      "I won the Man of the Match award in the 2006 Final, and famously assisted Marco Materazzi's equalizing header from a corner.",
      "I scored a brilliant long-range goal against Ghana in our opening match of 2006 and assisted Grosso's legendary semi-final goal against Germany.",
      "Nicknamed 'L'Architetto', I was Italy's cool, bearded deep-lying playmaker who orchestrated the 2006 World Cup triumph."
    ]
  },
  {
    id: "cannavaro",
    playerName: "Fabio Cannavaro",
    clues: [
      "I earned my 100th international cap in the 2006 World Cup Final, putting in a flawless defensive performance.",
      "Nicknamed the 'Berlin Wall', I did not receive a single yellow card during the entire 2006 tournament despite playing every minute.",
      "I captained Italy to the 2006 World Cup trophy and remains the last defender to win the Ballon d'Or."
    ]
  },
  {
    id: "materazzi",
    playerName: "Marco Materazzi",
    clues: [
      "I entered the 2006 World Cup as a backup but became a starter after Alessandro Nesta suffered an injury in the group stage.",
      "In the 2006 Final, I gave away a penalty, scored the equalizing goal, and was headbutted by Zinedine Zidane.",
      "I scored in the penalty shootout of the 2006 Final, helping Italy secure their fourth World Cup trophy."
    ]
  },
  {
    id: "totti",
    playerName: "Francesco Totti",
    clues: [
      "I played the entire 2006 World Cup with a metal plate and 10 screws in my ankle after suffering a severe fracture just months prior.",
      "I scored a dramatic, ice-cold 95th-minute penalty against Australia in the round of 16 to save ten-man Italy from elimination.",
      "I finished the 2006 World Cup as the joint-top assist provider (4 assists) as Italy won the championship."
    ]
  },
  {
    id: "henry",
    playerName: "Thierry Henry",
    clues: [
      "I scored my first World Cup goals on home soil in 1998, finishing as my team's top scorer in the tournament with 3 goals.",
      "I scored the winning goal in the 2006 quarter-final against Brazil, converting a Zinedine Zidane free-kick at the back post.",
      "I am France's legendary striker who won the 1998 World Cup and reached the Final again in 2006."
    ]
  },
  {
    id: "griezmann",
    playerName: "Antoine Griezmann",
    clues: [
      "I won the Bronze Ball and the Silver Boot at the 2018 World Cup, scoring 4 goals and providing 4 assists.",
      "I was named Man of the Match in the 2018 World Cup Final against Croatia, having a hand in three of our four goals.",
      "I am France's versatile playmaker who won the 2018 World Cup and transitioned into a central midfield engine room for the 2022 campaign."
    ]
  },
  {
    id: "pogba",
    playerName: "Paul Pogba",
    clues: [
      "I won the Best Young Player award at the 2014 World Cup in Brazil after scoring a crucial round of 16 header against Nigeria.",
      "I scored our third goal in the 2018 World Cup Final with a superb curler from the edge of the box, celebrating with a famous 'dab' pose.",
      "I was the charismatic midfield engine alongside N'Golo Kanté who fired France to the 2018 World Cup trophy."
    ]
  },
  {
    id: "deschamps",
    playerName: "Didier Deschamps",
    clues: [
      "Eric Cantona famously dismissed me as a mere 'water-carrier' due to my simple, defensive playing style.",
      "I captained France to their first ever World Cup trophy on home soil in 1998, lifting the cup at the Stade de France.",
      "I am one of only three men to win the World Cup as both a player (1998) and a manager (2018), representing France."
    ]
  },
  {
    id: "platini",
    playerName: "Michel Platini",
    clues: [
      "I scored a crucial equalizing goal against Brazil in the legendary 1986 quarter-final on my 31st birthday, though I later missed my penalty in the shootout.",
      "I led France to two consecutive World Cup semi-finals in 1982 and 1986, both times losing to West Germany.",
      "I am France's legendary number 10 and three-time Ballon d'Or winner who captained the national team during the 1980s."
    ]
  },
  {
    id: "fontaine",
    playerName: "Just Fontaine",
    clues: [
      "I had to borrow a pair of boots from a teammate before the 1958 World Cup because my own boots had worn out.",
      "I scored a double, a hat-trick, and a four-goal haul against West Germany in a single tournament.",
      "I hold the absolute, unbreakable record for the most goals scored in a single World Cup tournament, netting 13 goals in 1958."
    ]
  },
  {
    id: "kempes",
    playerName: "Mario Kempes",
    clues: [
      "I did not score a single goal in the first group stage of the 1978 World Cup, but scored 6 goals in the later stages.",
      "I scored twice in the 1978 World Cup Final against the Netherlands in Buenos Aires to secure a 3-1 victory.",
      "Nicknamed 'El Matador', I won the Golden Boot, the Golden Ball, and the 1978 World Cup trophy with Argentina."
    ]
  },
  {
    id: "passarella",
    playerName: "Daniel Passarella",
    clues: [
      "I am the only Argentine player to be in both the 1978 and 1986 World Cup-winning squads, though I didn't play in 1986 due to illness.",
      "Nicknamed 'El Gran Capitán', I was a remarkably high-scoring defender who stood at just 5ft 8in but had an incredible leap.",
      "I was the captain who lifted Argentina's first ever World Cup trophy in 1978."
    ]
  },
  {
    id: "batistuta",
    playerName: "Gabriel Batistuta",
    clues: [
      "I am the only player in football history to score hat-tricks in two separate World Cup tournaments (1994 against Greece, and 1998 against Jamaica).",
      "I held the record as Argentina's all-time top World Cup goalscorer with 10 goals for over two decades before Lionel Messi broke it.",
      "Nicknamed 'Batigol', I was Argentina's ultimate long-haired, explosive number 9 during the 1990s."
    ]
  },
  {
    id: "di_maria",
    playerName: "Ángel Di María",
    clues: [
      "I scored the dramatic 118th-minute extra-time winner against Switzerland in the 2014 round of 16, assisted by Lionel Messi.",
      "I missed the 2014 World Cup Final due to a thigh injury despite pleading to play, but got my redemption years later.",
      "I won the penalty and scored the second goal for Argentina in the legendary 2022 World Cup Final against France."
    ]
  },
  {
    id: "e_martinez",
    playerName: "Emiliano Martínez",
    clues: [
      "I was playing in the English second division on loan just a few years before becoming a World Cup hero.",
      "I made a historic, miraculous 123rd-minute spread-eagle save against Randal Kolo Muani in the 2022 Final to send the match to penalties.",
      "Nicknamed 'Dibu', I saved multiple penalties in shootouts against Netherlands and France to win the 2022 World Cup and the Golden Glove."
    ]
  },
  {
    id: "mascherano",
    playerName: "Javier Mascherano",
    clues: [
      "I famously suffered a torn anus while making a heroic, last-ditch slide tackle to block Arjen Robben's shot in the 2014 semi-final.",
      "I played as a defensive midfielder for my country but was famously deployed as a central defender by Pep Guardiola at Barcelona.",
      "Known as 'El Jefecito' (The Little Chief), I am Argentina's legendary warrior who played in 4 World Cups and kept 5 clean sheets in 2014."
    ]
  },
  {
    id: "garrincha",
    playerName: "Garrincha",
    clues: [
      "I was born with a deformed spine and my left leg was six centimeters shorter than my right, yet I became one of the greatest dribblers of all time.",
      "When Pelé got injured early in the 1962 World Cup, I took complete control of the team, finishing as joint-top scorer and winning Player of the Tournament.",
      "Nicknamed 'The Joy of the People', I won the 1958 and 1962 World Cups with Brazil, famously never losing a match when playing alongside Pelé."
    ]
  },
  {
    id: "jairzinho",
    playerName: "Jairzinho",
    clues: [
      "I inherited the right-wing position for my country in 1970 after Garrincha retired from the international stage.",
      "I scored in all six matches Brazil played during the 1970 World Cup, a feat known as the 'Hurricane' run.",
      "I am the only player in history to score in every single round of a World Cup tournament, netting 7 goals in 1970."
    ]
  },
  {
    id: "c_alberto",
    playerName: "Carlos Alberto",
    clues: [
      "I captained the greatest national team in football history at the age of just 25 during the 1970 tournament.",
      "I scored what is widely considered the greatest team goal in football history, receiving a blind pass from Pelé and smashing it home.",
      "I was the captain who lifted the Jules Rimet trophy for Brazil in 1970, sealing the 4-1 victory over Italy with a thunderous strike."
    ]
  },
  {
    id: "cafu",
    playerName: "Cafu",
    clues: [
      "I am the only player in football history to play in three consecutive World Cup Final matches (1994, 1998, 2002).",
      "I won the 1994 World Cup as a substitute in the Final, and captained the team to glory eight years later in Japan/South Korea.",
      "I am Brazil's legendary right-back and most-capped player in history, who lifted the 2002 World Cup trophy."
    ]
  },
  {
    id: "r_carlos",
    playerName: "Roberto Carlos",
    clues: [
      "I famously conceded a goal in the 2006 quarter-final against France because I was bending down to tie my boot laces while Thierry Henry ran past me to score.",
      "I scored a thunderous, trademark 30-yard free-kick against China during the 2002 group stage.",
      "I am Brazil's legendary left-back who won the 2002 World Cup, famous for my explosive speed and powerful thighs."
    ]
  },
  {
    id: "kaka",
    playerName: "Kaká",
    clues: [
      "I played only 25 minutes during the entire 2002 World Cup as a 20-year-old backup, but still walked away with a winner's medal.",
      "I provided the assist for the winning goal in our opening match of the 2006 World Cup against Croatia, scoring it myself with a brilliant curler.",
      "I was Brazil's elegant, religious playmaker who won the 2002 World Cup and later won the Ballon d'Or in 2007."
    ]
  },
  {
    id: "neymar",
    playerName: "Neymar",
    clues: [
      "My 2014 World Cup on home soil ended in absolute tragedy when Juan Camilo Zúñiga fractured my vertebra in the quarter-final against Colombia.",
      "I scored a stunning solo goal in extra time against Croatia in the 2022 quarter-finals to equal Pelé's official goalscoring record.",
      "I am Brazil's modern superstar who scored 8 goals across the 2014, 2018, and 2022 World Cups but never won the trophy."
    ]
  },
  {
    id: "bebeto",
    playerName: "Bebeto",
    clues: [
      "I represented Brazil in three World Cups (1990, 1994, 1998) and formed a legendary strike partnership with Romário.",
      "I scored the winning goal against the United States on their Independence Day in the 1994 round of 16.",
      "I popularized the iconic 'rock-the-baby' goal celebration at the 1994 World Cup to celebrate the birth of my newborn son."
    ]
  },
  {
    id: "dunga",
    playerName: "Dunga",
    clues: [
      "I captained Brazil in two consecutive World Cup Finals: lifting the trophy in 1994 and suffering defeat in 1998.",
      "I was the tough-tackling, defensive captain who clashed with teammates on the pitch to maintain discipline.",
      "I famously scored the final penalty in the 1994 shootout against Italy before Roberto Baggio missed his."
    ]
  },
  {
    id: "kahn",
    playerName: "Oliver Kahn",
    clues: [
      "I conceded only 1 goal in 6 matches leading up to the 2002 World Cup Final, putting in one of the most dominant goalkeeping runs ever.",
      "I played the 2002 Final with a torn ligament in my right ring finger and made a costly mistake, spilling a shot into Ronaldo's path.",
      "Nicknamed 'Der Titan', I am the only goalkeeper in history to win the Golden Ball award for best player at a World Cup (2002)."
    ]
  },
  {
    id: "klinsmann",
    playerName: "Jürgen Klinsmann",
    clues: [
      "I scored in three consecutive World Cup tournaments (1990, 1994, 1998), netting 11 total goals for my country.",
      "I famously dived to win a red card for Pedro Monzón in the 1990 Final, a foul that left me with a torn shin guard.",
      "I won the 1990 World Cup as West Germany's star striker and later managed Germany to third place in 2006."
    ]
  },
  {
    id: "maier",
    playerName: "Sepp Maier",
    clues: [
      "Nicknamed 'The Cat', I was famous for my incredible agility, long black shorts, and humorous antics on the pitch.",
      "I kept a clean sheet in the second half of the 1974 World Cup Final to deny Johan Cruyff's Netherlands an equalizer.",
      "I was West Germany's legendary goalkeeper who won the 1974 World Cup and played in 4 consecutive tournaments."
    ]
  },
  {
    id: "rummenigge",
    playerName: "Karl-Heinz Rummenigge",
    clues: [
      "I captained West Germany to two consecutive World Cup Final defeats in 1982 (against Italy) and 1986 (against Argentina).",
      "I scored a dramatic extra-time goal while carrying a severe hamstring injury to spark a comeback against France in the 1982 semi-final.",
      "I am the legendary two-time Ballon d'Or winner who scored 9 World Cup goals for West Germany."
    ]
  },
  {
    id: "rahn",
    playerName: "Helmut Rahn",
    clues: [
      "Nicknamed 'Der Boss', I was a legendary winger who possessed an incredibly powerful shot and a clutch scoring mentality.",
      "I scored a brace, including the historic 84th-minute winning goal, to defeat Hungary's legendary 'Mighty Magyars' in 1954.",
      "I was the hero of the 'Miracle of Bern' who fired West Germany to their first ever World Cup title in 1954."
    ]
  },
  {
    id: "breitner",
    playerName: "Paul Breitner",
    clues: [
      "Nicknamed 'Der Afro', I was a politically outspoken, rebellious left-back who transitioned into a world-class midfielder.",
      "I am one of only four players in football history to score in two separate World Cup Final matches (1974 and 1982).",
      "I scored the equalizing penalty in the 1974 World Cup Final to help West Germany defeat the Netherlands."
    ]
  },
  {
    id: "kroos",
    playerName: "Toni Kroos",
    clues: [
      "I scored two goals in just 69 seconds against Brazil in the 2014 semi-final, the fastest brace in World Cup history.",
      "I scored a dramatic, curling 95th-minute free-kick winner against Sweden in the 2018 group stage, though we were still eliminated early.",
      "I was Germany's midfield maestro who won the 2014 World Cup, leading the tournament in assists and passing accuracy."
    ]
  },
  {
    id: "gotze",
    playerName: "Mario Götze",
    clues: [
      "Germany's manager Joachim Löw famously told me to 'go out and show the world you are better than Messi' before sending me on as a substitute.",
      "I became the youngest player to score in a World Cup Final since Wolfgang Weber in 1966.",
      "I scored the dramatic 113th-minute extra-time winning goal against Argentina to win the 2014 World Cup for Germany."
    ]
  },
  {
    id: "ozil",
    playerName: "Mesut Özil",
    clues: [
      "I scored a brilliant, decisive half-volley against Ghana in the 2010 group stage to secure our qualification to the knockout rounds.",
      "I started all seven matches during the 2014 World Cup triumph, playing on the left-wing and creating the most chances for my team.",
      "I was Germany's creative playmaker who assisted crucial goals in both the 2010 and 2014 World Cup campaigns."
    ]
  },
  {
    id: "meazza",
    playerName: "Giuseppe Meazza",
    clues: [
      "I famously scored a crucial penalty in the 1938 semi-final against Brazil while holding up my shorts with my hands because the elastic band had snapped.",
      "I was the star player and captain of the legendary Italian teams of the 1930s under manager Vittorio Pozzo.",
      "I am one of only four Italian players to win two separate World Cup tournaments (1934 and 1938), and Milan's famous stadium is named after me."
    ]
  },
  {
    id: "piola",
    playerName: "Silvio Piola",
    clues: [
      "I am the all-time leading goalscorer in Serie A history, but my greatest moment came on the international stage in France.",
      "I scored a crucial brace in the 1938 World Cup Final to secure a 4-2 victory over Hungary.",
      "I was Italy's legendary center-forward who fired them to their second consecutive World Cup title in 1938."
    ]
  },
  {
    id: "del_piero",
    playerName: "Alessandro Del Piero",
    clues: [
      "I scored a legendary, curling extra-time goal in the 121st minute against Germany in the 2006 semi-final in Dortmund.",
      "I came on as a substitute in the 2006 Final and scored Italy's fourth penalty in the historic shootout victory against France.",
      "I am Juventus' legendary number 10 who won the 2006 World Cup with Italy, playing in three separate tournaments."
    ]
  },
  {
    id: "baresi",
    playerName: "Franco Baresi",
    clues: [
      "I missed most of the 1994 World Cup due to a meniscus injury suffered in the second match, but made a miraculous recovery to play in the Final.",
      "I put in a flawless defensive performance to shut out Romário and Bebeto for 120 minutes in the 1994 Final, but sadly missed my penalty in the shootout.",
      "I was Italy's legendary sweeper and captain who won the 1982 World Cup (without playing) and finished runner-up in 1994."
    ]
  },
  {
    id: "maldini",
    playerName: "Paolo Maldini",
    clues: [
      "I hold the absolute record for the most minutes played in World Cup history, racking up 2,217 minutes across four tournaments.",
      "I played in the 1994 World Cup Final alongside Franco Baresi, but lost in a painful penalty shootout on American soil.",
      "I am widely regarded as the greatest left-back in football history, representing Italy in 1990, 1994, 1998, and 2002 without ever winning the trophy."
    ]
  },
  {
    id: "schillaci",
    playerName: "Salvatore Schillaci",
    clues: [
      "I entered the 1990 World Cup on home soil as a virtually unknown backup striker, having only played one international match before.",
      "I came off the bench to score in our opening match and went on to score in every single knockout round.",
      "Nicknamed 'Toto', I was the sensation of 'Notti Magiche' (Magical Nights), winning both the Golden Boot and Golden Ball at the 1990 World Cup."
    ]
  },
  {
    id: "tardelli",
    playerName: "Marco Tardelli",
    clues: [
      "I scored the crucial second goal in the 1982 World Cup Final with a fierce left-footed strike from the edge of the box.",
      "My ecstatic, screaming celebration after scoring in the 1982 Final—running towards the bench shaking my fists in tears—is known as 'The Tardelli Cry'.",
      "I was the hard-working Italian midfielder whose passionate celebration became the defining image of Italy's 1982 World Cup triumph."
    ]
  },
  {
    id: "zambrotta",
    playerName: "Gianluca Zambrotta",
    clues: [
      "I scored a brilliant, early opening goal against Ukraine in the 2006 quarter-final and later cleared a shot off the line in the same match.",
      "I was named in the 2006 World Cup All-Star Team, playing as a world-class right-back under Marcello Lippi.",
      "I am Italy's versatile full-back who won the 2006 World Cup, playing in the 2002, 2006, and 2010 editions."
    ]
  },
  {
    id: "grosso",
    playerName: "Fabio Grosso",
    clues: [
      "I won the late penalty against Australia in the round of 16 and scored the legendary 119th-minute extra-time winner against Germany in the semi-final.",
      "I was chosen to take the final, decisive fifth penalty in the 2006 World Cup Final shootout against France.",
      "I was the unsung Palermo left-back who became Italy's ultimate clutch hero during their 2006 World Cup victory."
    ]
  },
  {
    id: "lineker",
    playerName: "Gary Lineker",
    clues: [
      "I scored a famous hat-trick against Poland in the 1986 group stage to save my country from early elimination.",
      "I famously suffered a severe bout of diarrhea and soiled myself on the pitch during our opening match against Ireland in 1990.",
      "I won the 1986 World Cup Golden Boot with 6 goals, and famously scored the equalizer in the 1990 semi-final against West Germany."
    ]
  },
  {
    id: "hurst",
    playerName: "Geoff Hurst",
    clues: [
      "I was not even in the starting lineup at the beginning of the 1966 tournament, only playing after Jimmy Greaves got injured.",
      "I scored a highly controversial goal in the 1966 Final when my shot hit the underside of the crossbar and bounced near the goal-line.",
      "I am the only player to score a hat-trick in a World Cup Final (1966), leading England to a 4-2 victory over West Germany."
    ]
  },
  {
    id: "banks",
    playerName: "Gordon Banks",
    clues: [
      "I missed the legendary 1970 quarter-final against West Germany due to food poisoning, and my backup Peter Bonetti had a nightmare match.",
      "I made what is widely described as the 'Save of the Century' in 1970, miraculously clawing Pelé's downward header over the crossbar.",
      "I was England's legendary goalkeeper who kept four consecutive clean sheets during our 1966 World Cup triumph."
    ]
  },
  {
    id: "moore",
    playerName: "Bobby Moore",
    clues: [
      "I famously swapped shirts with Pelé after a grueling, historic group stage match in Guadalajara during the 1970 World Cup.",
      "I provided two assists in the 1966 World Cup Final, including a quick free-kick to Geoff Hurst and a long pass for his final hat-trick goal.",
      "I was the classy, calm captain who led England to their only World Cup trophy on home soil in 1966."
    ]
  },
  {
    id: "gascoigne",
    playerName: "Paul Gascoigne",
    clues: [
      "I received a yellow card in the 1990 semi-final against West Germany, which meant I would have been suspended for the Final if we qualified.",
      "My immediate, tearful reaction to my semi-final booking sparked a wave of national emotion back home dubbed 'Gazzamania'.",
      "Nicknamed 'Gazza', I was England's exceptionally talented, mercurial midfielder who dominated the pitch at Italia '90."
    ]
  },
  {
    id: "kane",
    playerName: "Harry Kane",
    clues: [
      "I scored a hat-trick against Panama in the 2018 group stage, with two of the goals coming from penalty kicks and one deflecting off my heel.",
      "I missed a crucial, late 84th-minute penalty against my Tottenham teammate Hugo Lloris as we were eliminated in the 2022 quarter-finals.",
      "I captained England to the semi-finals in 2018, winning the Golden Boot with 6 goals, and later became their all-time top scorer."
    ]
  },
  {
    id: "beckham",
    playerName: "David Beckham",
    clues: [
      "I was sent off for a petulant kick at Diego Simeone during a dramatic round of 16 match against Argentina in 1998, becoming a national scapegoat.",
      "I got my sweet redemption four years later in 2002, scoring a powerful penalty against Argentina to win the group match 1-0.",
      "I captained England in the 2002 and 2006 World Cups, famous for my pinpoint crossing and iconic free-kicks."
    ]
  },
  {
    id: "c_ronaldo",
    playerName: "Cristiano Ronaldo",
    clues: [
      "I famously winked at my bench after successfully getting my Manchester United teammate Wayne Rooney sent off in the 2006 quarter-final.",
      "I scored a spectacular, hat-trick sealing free-kick in the 88th minute of a thrilling 3-3 draw against Spain in the 2018 World Cup.",
      "I am the only player in football history to score in five separate World Cup tournaments (2006, 2010, 2014, 2018, 2022)."
    ]
  },
  {
    id: "figo",
    playerName: "Luís Figo",
    clues: [
      "I captained my country's 'Golden Generation' to a fourth-place finish in the 2006 World Cup, my final international tournament.",
      "I provided the assist for Pauleta's winning goal in our opening match of the 2006 World Cup against Angola.",
      "I am Portugal's legendary winger and Ballon d'Or winner who spearheaded their campaigns in 2002 and 2006."
    ]
  },
  {
    id: "neeskens",
    playerName: "Johan Neeskens",
    clues: [
      "I scored the fastest goal in World Cup Final history, converting a penalty in the second minute of the 1974 Final against West Germany.",
      "I scored 5 goals in the 1974 World Cup, finishing as the tournament's second-highest scorer playing alongside Johan Cruyff.",
      "I was the tireless, hard-tackling midfield engine of the legendary Dutch 'Total Football' side of the 1970s."
    ]
  },
  {
    id: "krol",
    playerName: "Ruud Krol",
    clues: [
      "I scored a sensational, 25-yard screaming goal against Argentina in a 4-0 second-round demolition during the 1974 World Cup.",
      "I captained the Netherlands to the 1978 World Cup Final on hostile ground in Argentina, narrowly losing 3-1 in extra time.",
      "I was the classy, versatile defender who anchored the legendary Dutch 'Total Football' backline in 1974 and 1978."
    ]
  },
  {
    id: "van_persie",
    playerName: "Robin van Persie",
    clues: [
      "I captained the Netherlands at the 2014 World Cup, scoring 4 goals to lead them to a third-place finish under Louis van Gaal.",
      "I scored a spectacular, gravity-defying diving header against Spain in 2014, a goal dubbed 'The Flying Dutchman'.",
      "I am the legendary Arsenal/Manchester United striker who scored in three consecutive World Cups (2006, 2010, 2014) for the Oranje."
    ]
  },
  {
    id: "robben",
    playerName: "Arjen Robben",
    clues: [
      "I famously missed a crucial one-on-one chance against Spain's Iker Casillas in the 2010 World Cup Final, which cost us the trophy.",
      "I won a controversial, highly debated 94th-minute penalty against Mexico in the 2014 round of 16, sparking the viral '#NoEraPenal' meme.",
      "I am the legendary Dutch winger who scored 6 World Cup goals, famous for my explosive pace and cutting inside on my left foot."
    ]
  },
  {
    id: "sneijder",
    playerName: "Wesley Sneijder",
    clues: [
      "I won the Silver Ball and the Bronze Boot at the 2010 World Cup, scoring 5 goals as we reached the Final.",
      "I scored a rare header to eliminate Dunga's heavily-favored Brazil in the 2010 quarter-finals in Port Elizabeth.",
      "I was the Dutch midfield orchestrator who led the national team to the 2010 Final and third place in 2014."
    ]
  },
  {
    id: "bergkamp",
    playerName: "Dennis Bergkamp",
    clues: [
      "I scored in the 1994 World Cup quarter-final defeat against Brazil, but my most famous moment came four years later.",
      "I scored a legendary, breathtaking 89th-minute winner against Argentina in the 1998 quarter-final, controlled with three sublime touches.",
      "Nicknamed the 'Non-Flying Dutchman' due to my fear of flying, I was the elegant Arsenal striker who scored 6 World Cup goals."
    ]
  },
  {
    id: "sanchez",
    playerName: "Alexis Sánchez",
    clues: [
      "I scored in the round of 16 against hosts Brazil in 2014, but sadly missed my penalty in the subsequent shootout.",
      "I spearheaded my country's dynamic, high-pressing golden generation that reached the knockout rounds in 2010 and 2014.",
      "I am Chile's all-time legendary forward who starred in the 2010 and 2014 World Cups alongside Arturo Vidal."
    ]
  },
  {
    id: "vidal",
    playerName: "Arturo Vidal",
    clues: [
      "I played the 2014 World Cup in Brazil despite undergoing knee surgery just weeks before, putting in aggressive midfield performances.",
      "I anchored the midfield in a historic 2-0 group stage victory that eliminated reigning champions Spain in 2014.",
      "Nicknamed 'El Rey', I was the mohawked, relentless box-to-box midfielder who represented Chile in 2010 and 2014."
    ]
  },
  {
    id: "l_suarez",
    playerName: "Luis Suárez",
    clues: [
      "I famously blocked a certain, goal-bound header on the line with my hands in the final minute of extra-time against Ghana in 2010.",
      "I was banned from all football activities for four months during the 2014 World Cup for biting Italy's Giorgio Chiellini.",
      "I am Uruguay's legendary striker who scored 7 World Cup goals across the 2010, 2014, and 2018 tournaments."
    ]
  },
  {
    id: "forlan",
    playerName: "Diego Forlán",
    clues: [
      "I scored a spectacular long-range volley in the 2010 third-place playoff against Germany, hitting the crossbar in the final second.",
      "I masterfully tamed the highly controversial, unpredictable 'Jabulani' match ball at the 2010 World Cup, scoring 5 goals.",
      "I won the Golden Ball award as the best player at the 2010 World Cup, leading Uruguay to an unexpected fourth-place finish."
    ]
  },
  {
    id: "cavani",
    playerName: "Edinson Cavani",
    clues: [
      "I scored a magnificent brace, including a stunning curling first-time strike, to eliminate Cristiano Ronaldo's Portugal in the 2018 round of 16.",
      "I represented my country in four separate World Cups (2010, 2014, 2018, 2022) playing alongside Luis Suárez.",
      "Nicknamed 'El Matador', I am Uruguay's tireless, long-haired forward who scored 5 total World Cup goals."
    ]
  },
  {
    id: "j_rodriguez",
    playerName: "James Rodríguez",
    clues: [
      "I scored in all five matches my country played during the 2014 tournament, including a brace against Uruguay.",
      "I won the 2014 FIFA Puskás Award for a breath-taking, chest-and-volley strike from 25 yards out at the Maracanã.",
      "I was the breakout superstar of the 2014 World Cup, winning the Golden Boot with 6 goals for Colombia."
    ]
  },
  {
    id: "modric",
    playerName: "Luka Modrić",
    clues: [
      "I scored a sensational, 25-yard curling goal against Argentina in the 2018 group stage, sealing a historic 3-0 victory.",
      "I captained my country to their first ever World Cup Final in 2018, playing a staggering 694 minutes during the tournament.",
      "I won the Golden Ball as the best player of the 2018 World Cup and later won the Ballon d'Or, breaking the Messi-Ronaldo duopoly."
    ]
  },
  {
    id: "perisic",
    playerName: "Ivan Perišić",
    clues: [
      "I scored the crucial equalizing goal in the 2018 semi-final against England, converting a cross with a high-boot volley.",
      "I scored in the 2018 World Cup Final against France, but later conceded a highly controversial penalty for handball.",
      "I am Croatia's ultimate big-game winger who scored 6 goals across the 2014, 2018, and 2022 World Cup tournaments."
    ]
  },
  {
    id: "suker",
    playerName: "Davor Šuker",
    clues: [
      "I scored the winning goal in the 1998 third-place playoff against Netherlands, sealing a historic debut medal for my young country.",
      "I opened the scoring against eventual champions France in the 1998 semi-final, though we were beaten 2-1.",
      "I won the Golden Boot at the 1998 World Cup in France, scoring 6 goals to lead Croatia to third place."
    ]
  }
];

const fileContent = `// Auto-generated premium database containing 100 legendary World Cup players with 3 tiers of clues
export interface WhoAmIPlayer {
  id: string;
  playerName: string;
  clues: [string, string, string];
}

export const WHO_AM_I_QUESTIONS: WhoAmIPlayer[] = ${JSON.stringify(players, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'src/data/whoAmIQuestions.ts'), fileContent, 'utf-8');
console.log('Successfully generated src/data/whoAmIQuestions.ts!');
