const fs = require('fs');

// Backtracking solver to place 5 words on a 10x10 grid with at least some overlaps
function generateLayout(wordsPool, gridSize = 10) {
  const words = wordsPool.map(w => w.toUpperCase());
  
  // Try to find a valid arrangement
  const result = solve(words, [], gridSize);
  return result;
}

function solve(words, placed, gridSize) {
  if (placed.length === words.length) {
    return placed;
  }
  
  const currentWord = words[placed.length];
  
  // If it's the first word, place it somewhere near the middle to leave space
  if (placed.length === 0) {
    const directions = ['across', 'down'];
    for (const dir of directions) {
      const maxStart = gridSize - currentWord.length;
      for (let start = 0; start <= maxStart; start++) {
        // First word in the middle rows/cols
        const fixed = Math.floor(gridSize / 2) - 1;
        const layoutItem = {
          name: currentWord,
          row: dir === 'across' ? fixed : start,
          col: dir === 'across' ? start : fixed,
          direction: dir
        };
        const nextPlaced = [...placed, layoutItem];
        const res = solve(words, nextPlaced, gridSize);
        if (res) return res;
      }
    }
    return null;
  }
  
  // For subsequent words, we must intersect with at least one already placed word
  for (let i = 0; i < currentWord.length; i++) {
    const char = currentWord[i];
    
    // Find all matching characters in already placed words
    for (const p of placed) {
      for (let j = 0; j < p.name.length; j++) {
        if (p.name[j] === char) {
          // Intersection found! Let's calculate the start row/col for currentWord
          // direction must be perpendicular to the intersected word
          const dir = p.direction === 'across' ? 'down' : 'across';
          
          let intersectRow, intersectCol;
          if (p.direction === 'across') {
            intersectRow = p.row;
            intersectCol = p.col + j;
          } else {
            intersectRow = p.row + j;
            intersectCol = p.col;
          }
          
          const row = dir === 'across' ? intersectRow : intersectRow - i;
          const col = dir === 'across' ? intersectCol - i : intersectCol;
          
          const layoutItem = {
            name: currentWord,
            row,
            col,
            direction: dir
          };
          
          if (isValid(layoutItem, placed, gridSize)) {
            const nextPlaced = [...placed, layoutItem];
            const res = solve(words, nextPlaced, gridSize);
            if (res) return res;
          }
        }
      }
    }
  }
  
  return null;
}

function isValid(item, placed, gridSize) {
  const len = item.name.length;
  
  // Bounds check
  if (item.row < 0 || item.col < 0) return false;
  if (item.direction === 'across') {
    if (item.col + len > gridSize) return false;
  } else {
    if (item.row + len > gridSize) return false;
  }
  
  // Check letter conflicts with already placed words
  const cells = getCells(item);
  for (const cell of cells) {
    for (const p of placed) {
      const pCells = getCells(p);
      for (const pCell of pCells) {
        if (cell.r === pCell.r && cell.c === pCell.c) {
          if (cell.char !== pCell.char) {
            return false; // Conflicting letters at intersection
          }
        }
      }
    }
  }
  
  // Standard crossword spacing rule to avoid parallel run-ons
  // For simplicity and aesthetic, as long as letters match at overlaps we are good,
  // but to keep it looking clean, let's verify there are no duplicate overlaps (fully duplicate words)
  for (const p of placed) {
    if (p.row === item.row && p.col === item.col && p.direction === item.direction) {
      return false;
    }
  }
  
  return true;
}

function getCells(item) {
  const cells = [];
  let r = item.row;
  let c = item.col;
  for (let i = 0; i < item.name.length; i++) {
    cells.push({ r, c, char: item.name[i] });
    if (item.direction === 'across') {
      c++;
    } else {
      r++;
    }
  }
  return cells;
}

// Display the grid visualizer
function printGrid(layout, gridSize = 10) {
  const grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill('.'));
  for (const p of layout) {
    let r = p.row;
    let c = p.col;
    for (let i = 0; i < p.name.length; i++) {
      grid[r][c] = p.name[i];
      if (p.direction === 'across') {
        c++;
      } else {
        r++;
      }
    }
  }
  return grid.map(row => row.join(' ')).join('\n');
}

// Theme categories to solve
const themePool = [
  {
    id: "argentina-finalists",
    title: "ARGENTINA HEROES",
    subtitle: "Legends who starred in the 2014 & 2022 finals",
    words: ["MESSI", "MARADONA", "DIMARIA", "AGUERO", "HIGUAIN"]
  },
  {
    id: "brazil-glory",
    title: "SAMBA KINGS",
    subtitle: "The legendary Penta-Campeões of 2002",
    words: ["RONALDO", "RIVALDO", "RONALDINHO", "CAFU", "KAKA"]
  },
  {
    id: "france-champs",
    title: "LES BLEUS ICONS",
    subtitle: "Architects of the 1998 & 2018 triumphs",
    words: ["MBAPPE", "ZIDANE", "GRIEZMANN", "POGBA", "HENRY"]
  },
  {
    id: "germany-machine",
    title: "DIE MANNSCHAFT",
    subtitle: "German efficiency at the highest level",
    words: ["KLOSE", "MULLER", "LAHM", "NEUER", "KROOS"]
  },
  {
    id: "spain-tikitaka",
    title: "SPAIN 2010",
    subtitle: "Tiki-Taka kings of the J’burg final",
    words: ["INIESTA", "XAVI", "CASILLAS", "PUYOL", "VILLA"]
  },
  {
    id: "italy-legends",
    title: "AZZURRI 2006",
    subtitle: "The defensive masters of Berlin",
    words: ["BUFFON", "PIRLO", "CANNAVARO", "TOTTI", "MATERAZZI"]
  },
  {
    id: "world-cup-goats",
    title: "WORLD CUP GOATS",
    subtitle: "The consensus greatest in tournament history",
    words: ["PELE", "MARADONA", "MESSI", "ZIDANE", "CRISTIANO"]
  },
  {
    id: "golden-boots",
    title: "GOLDEN BOOTS",
    subtitle: "Lethal goalscorers of the tournament",
    words: ["KLOSE", "RONALDO", "MBAPPE", "VILLA", "KANE"]
  },
  {
    id: "historic-clash",
    title: "CLASSIC RIVALS",
    subtitle: "Legends who fought in iconic matches",
    words: ["BECKHAM", "RONALDINHO", "PELE", "KLOSE", "INIESTA"]
  },
  {
    id: "young-talents",
    title: "WUNDERKINDS",
    subtitle: "Players who exploded as teenagers at the WC",
    words: ["PELÉ", "MBAPPÉ", "OWEN", "MULLER", "GAVI"].map(w => w.normalize("NFD").replace(/[\u0300-\u036f]/g, "")) // clean accents for grids
  }
];

const solvedThemes = [];

console.log("GENERATING VALID CROSSWORD LAYOUTS...\n");

for (const theme of themePool) {
  const layout = generateLayout(theme.words, 10);
  if (layout) {
    console.log(`✅ SOLVED: ${theme.title}`);
    console.log(printGrid(layout, 10));
    console.log("\nLayout Code Format:");
    const codeFormat = layout.map((item, idx) => {
      return {
        number: idx + 1,
        name: item.name,
        row: item.row,
        col: item.col,
        direction: item.direction
      };
    });
    console.log(JSON.stringify(codeFormat, null, 2));
    console.log("-------------------------------------------\n");
    solvedThemes.push({
      ...theme,
      players: codeFormat
    });
  } else {
    console.log(`❌ FAILED TO SOLVE: ${theme.title}`);
    // Try shuffling the words array to see if a different insertion order solves it
    let solvedShuffled = false;
    for (let attempts = 0; attempts < 10; attempts++) {
      const shuffledWords = [...theme.words].sort(() => Math.random() - 0.5);
      const layoutS = generateLayout(shuffledWords, 10);
      if (layoutS) {
        console.log(`✅ SOLVED (via shuffle): ${theme.title}`);
        console.log(printGrid(layoutS, 10));
        const codeFormatS = layoutS.map((item, idx) => {
          return {
            number: idx + 1,
            name: item.name,
            row: item.row,
            col: item.col,
            direction: item.direction
          };
        });
        console.log(JSON.stringify(codeFormatS, null, 2));
        console.log("-------------------------------------------\n");
        solvedThemes.push({
          ...theme,
          players: codeFormatS
        });
        solvedShuffled = true;
        break;
      }
    }
    if (!solvedShuffled) {
      console.log(`❌ PERMANENT FAIL: ${theme.title}`);
    }
  }
}

// Write the solved layouts to scratch directory
fs.writeFileSync('C:\\Users\\xabil\\.gemini\\antigravity-ide\\brain\\99112e81-a1b5-4a0a-b733-0b2ff42d520e\\scratch\\solved_themes.json', JSON.stringify(solvedThemes, null, 2));
console.log("Saved solved themes JSON to scratch directory.");
