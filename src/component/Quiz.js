import React, { useState, useEffect } from 'react';
import '../App.css'
const quizData = {
  General: {
    Easy: [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris",
        explanation: "Paris has been the capital of France since the 5th century."
      },
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4",
        explanation: "Basic arithmetic shows that 2 plus 2 equals 4."
      },
      {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Earth", "Mars", "Mercury"],
        answer: "Mercury",
        explanation: "Mercury is the smallest and innermost planet in the Solar System."
      },
      {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        answer: "7",
        explanation: "The continents are Africa, Antarctica, Asia, Europe, North America, South America, and Australia."
      },
      {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        answer: "Blue Whale",
        explanation: "The Blue Whale is the largest mammal, reaching up to 100 feet in length."
      },
      {
        question: "Which language is spoken in Brazil?",
        options: ["Spanish", "Portuguese", "French", "English"],
        answer: "Portuguese",
        explanation: "Brazil was colonized by Portugal, hence Portuguese is the official language."
      },
      {
        question: "What is the boiling point of water?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        answer: "100°C",
        explanation: "Water boils at 100°C at sea level."
      },
      {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        answer: "Leonardo da Vinci",
        explanation: "Leonardo da Vinci painted the Mona Lisa in the early 16th century."
      },
      {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Ringgit"],
        answer: "Yen",
        explanation: "The Japanese Yen (¥) is the official currency of Japan."
      },
      {
        question: "Which gas do plants absorb?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide",
        explanation: "Plants absorb CO2 during photosynthesis."
      }
    ],
    Medium: [
      {
        question: "HTML stands for?",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Markdown Language"],
        answer: "Hyper Text Markup Language",
        explanation: "HTML is the standard markup language for creating web pages."
      },
      {
        question: "What is the square root of 144?",
        options: ["10", "12", "14", "16"],
        answer: "12",
        explanation: "12 multiplied by 12 equals 144."
      },
      {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        answer: "William Shakespeare",
        explanation: "Shakespeare wrote this tragic play in the late 16th century."
      },
      {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
        answer: "Oxygen",
        explanation: "Oxygen is essential for respiration and combustion."
      },
      {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        answer: "Ottawa",
        explanation: "Ottawa is the capital, while Toronto is the largest city."
      },
      {
        question: "Which country hosted the 2020 Summer Olympics?",
        options: ["China", "Japan", "Brazil", "USA"],
        answer: "Japan",
        explanation: "The 2020 Olympics were held in Tokyo in 2021 due to COVID-19."
      },
      {
        question: "What is the hardest natural substance?",
        options: ["Gold", "Iron", "Diamond", "Graphite"],
        answer: "Diamond",
        explanation: "Diamond scores 10 on the Mohs hardness scale."
      },
      {
        question: "Which planet has the most moons?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: "Saturn",
        explanation: "Saturn has over 80 moons, the most in our Solar System."
      },
      {
        question: "What is the largest ocean?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific",
        explanation: "The Pacific Ocean covers about 30% of Earth's surface."
      },
      {
        question: "Who invented the telephone?",
        options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
        answer: "Alexander Graham Bell",
        explanation: "Bell patented the telephone in 1876."
      }
    ],
    Hard: [
      {
        question: "Which year was JavaScript first released?",
        options: ["1990", "1995", "2000", "2005"],
        answer: "1995",
        explanation: "JavaScript was created by Brendan Eich in 1995 while he was at Netscape."
      },
      {
        question: "What is the atomic number of Uranium?",
        options: ["89", "90", "91", "92"],
        answer: "92",
        explanation: "Uranium has 92 protons in its nucleus."
      },
      {
        question: "Who discovered penicillin?",
        options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Robert Koch"],
        answer: "Alexander Fleming",
        explanation: "Fleming discovered penicillin in 1928."
      },
      {
        question: "Which country has the most time zones?",
        options: ["USA", "Russia", "China", "France"],
        answer: "France",
        explanation: "France has 12 time zones due to its overseas territories."
      },
      {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "500,000 km/s", "700,000 km/s", "1,000,000 km/s"],
        answer: "300,000 km/s",
        explanation: "Light travels at approximately 299,792 km/s in a vacuum."
      },
      {
        question: "Which philosopher wrote 'Thus Spoke Zarathustra'?",
        options: ["Immanuel Kant", "Friedrich Nietzsche", "Socrates", "Karl Marx"],
        answer: "Friedrich Nietzsche",
        explanation: "Nietzsche's work explores themes of existentialism."
      },
      {
        question: "What is the largest desert in the world?",
        options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
        answer: "Antarctic",
        explanation: "Antarctica is the largest cold desert."
      },
      {
        question: "Who founded Microsoft?",
        options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Larry Page"],
        answer: "Bill Gates",
        explanation: "Gates co-founded Microsoft with Paul Allen in 1975."
      },
      {
        question: "Which gas makes up most of Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        answer: "Nitrogen",
        explanation: "Nitrogen comprises about 78% of the atmosphere."
      },
      {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
        answer: "Mount Everest",
        explanation: "Everest's peak is 8,848 meters above sea level."
      }
    ]
  },
  Science: {
    Easy: [
      {
        question: "What is the chemical formula for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        answer: "H2O",
        explanation: "Water is composed of two hydrogen atoms and one oxygen atom."
      },
      {
        question: "Which gas do plants release during photosynthesis?",
        options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        answer: "Oxygen",
        explanation: "Plants convert CO2 into oxygen using sunlight."
      },
      {
        question: "What is the hardest natural substance?",
        options: ["Gold", "Iron", "Diamond", "Graphite"],
        answer: "Diamond",
        explanation: "Diamond scores 10 on the Mohs hardness scale."
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
        explanation: "Mars appears red due to iron oxide (rust) on its surface."
      },
      {
        question: "What is the human body's largest organ?",
        options: ["Liver", "Brain", "Skin", "Heart"],
        answer: "Skin",
        explanation: "The skin covers an area of about 20 square feet."
      },
      {
        question: "Which metal is liquid at room temperature?",
        options: ["Mercury", "Iron", "Gold", "Aluminum"],
        answer: "Mercury",
        explanation: "Mercury is the only metal that is liquid at standard conditions."
      },
      {
        question: "What force keeps planets in orbit?",
        options: ["Magnetism", "Gravity", "Friction", "Electricity"],
        answer: "Gravity",
        explanation: "Gravity is the force of attraction between masses."
      },
      {
        question: "How many bones are in the adult human body?",
        options: ["206", "300", "150", "500"],
        answer: "206",
        explanation: "Babies are born with about 270 bones, which fuse to 206 by adulthood."
      },
      {
        question: "What is the main component of the Sun?",
        options: ["Liquid Lava", "Hydrogen", "Oxygen", "Carbon"],
        answer: "Hydrogen",
        explanation: "The Sun is primarily composed of hydrogen (74%) and helium (24%)."
      },
      {
        question: "What is the pH value of pure water?",
        options: ["5", "7", "9", "11"],
        answer: "7",
        explanation: "A pH of 7 is neutral, like pure water."
      }
    ],
    Medium: [
      {
        question: "What is the atomic number of Carbon?",
        options: ["6", "12", "14", "16"],
        answer: "6",
        explanation: "Carbon has 6 protons in its nucleus."
      },
      {
        question: "Which scientist proposed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
        answer: "Albert Einstein",
        explanation: "Einstein's theory revolutionized modern physics."
      },
      {
        question: "What is the unit of electrical resistance?",
        options: ["Volt", "Ampere", "Ohm", "Watt"],
        answer: "Ohm",
        explanation: "Resistance is measured in ohms (Ω)."
      },
      {
        question: "Which vitamin is produced by sunlight?",
        options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
        answer: "Vitamin D",
        explanation: "Sunlight triggers Vitamin D synthesis in the skin."
      },
      {
        question: "What is the speed of sound in air?",
        options: ["330 m/s", "343 m/s", "500 m/s", "1,200 m/s"],
        answer: "343 m/s",
        explanation: "At 20°C, sound travels at 343 meters per second."
      },
      {
        question: "Which part of the plant conducts photosynthesis?",
        options: ["Root", "Stem", "Leaf", "Flower"],
        answer: "Leaf",
        explanation: "Leaves contain chlorophyll for photosynthesis."
      },
      {
        question: "What is the largest organ inside the human body?",
        options: ["Heart", "Liver", "Brain", "Lungs"],
        answer: "Liver",
        explanation: "The liver weighs about 1.5 kg and performs over 500 functions."
      },
      {
        question: "Which gas is responsible for the greenhouse effect?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
        answer: "Carbon Dioxide",
        explanation: "CO2 traps heat in the atmosphere."
      },
      {
        question: "What is the study of fossils called?",
        options: ["Geology", "Paleontology", "Archaeology", "Meteorology"],
        answer: "Paleontology",
        explanation: "Paleontologists study ancient life through fossils."
      },
      {
        question: "Which element is the most abundant in Earth's crust?",
        options: ["Iron", "Oxygen", "Silicon", "Aluminum"],
        answer: "Oxygen",
        explanation: "Oxygen makes up about 46% of the Earth's crust by weight."
      }
    ],
    Hard: [
      {
        question: "What is the Heisenberg Uncertainty Principle?",
        options: [
          "It's impossible to know both position and momentum of a particle simultaneously",
          "Energy cannot be created or destroyed",
          "Light behaves as both a particle and a wave",
          "Entropy always increases in a closed system"
        ],
        answer: "It's impossible to know both position and momentum of a particle simultaneously",
        explanation: "Proposed by Werner Heisenberg in 1927."
      },
      {
        question: "Which subatomic particle has a negative charge?",
        options: ["Proton", "Neutron", "Electron", "Positron"],
        answer: "Electron",
        explanation: "Electrons orbit the nucleus and carry a negative charge."
      },
      {
        question: "What is the chemical symbol for Tungsten?",
        options: ["T", "W", "Tu", "Tn"],
        answer: "W",
        explanation: "From its German name 'Wolfram'."
      },
      {
        question: "Which scientist discovered radioactivity?",
        options: ["Marie Curie", "Ernest Rutherford", "Henri Becquerel", "Niels Bohr"],
        answer: "Henri Becquerel",
        explanation: "Becquerel discovered radioactivity in uranium in 1896."
      },
      {
        question: "What is the fourth state of matter?",
        options: ["Solid", "Liquid", "Gas", "Plasma"],
        answer: "Plasma",
        explanation: "Plasma consists of ionized particles, like in stars."
      },
      {
        question: "Which law states that pressure and volume are inversely proportional?",
        options: ["Newton's Law", "Boyle's Law", "Charles's Law", "Ohm's Law"],
        answer: "Boyle's Law",
        explanation: "Boyle's Law: P₁V₁ = P₂V₂ (at constant temperature)."
      },
      {
        question: "What is the smallest unit of life?",
        options: ["Atom", "Molecule", "Cell", "Organelle"],
        answer: "Cell",
        explanation: "Cells are the basic structural and functional units of life."
      },
      {
        question: "Which enzyme breaks down starch into sugars?",
        options: ["Pepsin", "Amylase", "Lipase", "Trypsin"],
        answer: "Amylase",
        explanation: "Amylase is found in saliva and the pancreas."
      },
      {
        question: "What is the name of the supercontinent that existed 300 million years ago?",
        options: ["Pangaea", "Gondwana", "Laurasia", "Rodinia"],
        answer: "Pangaea",
        explanation: "Pangaea began breaking apart during the Jurassic period."
      },
      {
        question: "Which particle mediates the electromagnetic force?",
        options: ["Gluon", "Photon", "W Boson", "Graviton"],
        answer: "Photon",
        explanation: "Photons are the force carriers for electromagnetism."
      }
    ]
  },
  History: {
    Easy: [
      {
        question: "Who was the first president of the United States?",
        options: ["Thomas Jefferson", "John Adams", "George Washington", "Abraham Lincoln"],
        answer: "George Washington",
        explanation: "George Washington served from 1789 to 1797."
      },
      {
        question: "In which year did World War II end?",
        options: ["1943", "1945", "1947", "1950"],
        answer: "1945",
        explanation: "World War II ended with Japan's surrender on September 2, 1945."
      },
      {
        question: "Which ancient civilization built the pyramids?",
        options: ["Greeks", "Romans", "Egyptians", "Mayans"],
        answer: "Egyptians",
        explanation: "The Great Pyramid of Giza was built around 2560 BCE."
      },
      {
        question: "Who wrote the 'I Have a Dream' speech?",
        options: ["Malcolm X", "Martin Luther King Jr.", "Nelson Mandela", "Barack Obama"],
        answer: "Martin Luther King Jr.",
        explanation: "Delivered during the 1963 March on Washington."
      },
      {
        question: "Which country was the first to land humans on the Moon?",
        options: ["USA", "Russia", "China", "India"],
        answer: "USA",
        explanation: "Apollo 11 landed in 1969 with Neil Armstrong and Buzz Aldrin."
      },
      {
        question: "Who discovered America?",
        options: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "James Cook"],
        answer: "Christopher Columbus",
        explanation: "Columbus reached the Americas in 1492, though Vikings arrived earlier."
      },
      {
        question: "Which empire was ruled by Julius Caesar?",
        options: ["Greek", "Roman", "Ottoman", "British"],
        answer: "Roman",
        explanation: "Caesar was a dictator of the Roman Republic (49–44 BCE)."
      },
      {
        question: "What was the main cause of the Cold War?",
        options: ["Economic Depression", "Ideological Conflict (Capitalism vs Communism)", "Religious Differences", "Territorial Disputes"],
        answer: "Ideological Conflict (Capitalism vs Communism)",
        explanation: "Tensions between the USA and USSR post-WWII."
      },
      {
        question: "Who was the first woman to win a Nobel Prize?",
        options: ["Marie Curie", "Mother Teresa", "Rosalind Franklin", "Jane Addams"],
        answer: "Marie Curie",
        explanation: "She won the Nobel Prize in Physics in 1903."
      },
      {
        question: "Which war was fought between North and South Korea?",
        options: ["Vietnam War", "Korean War", "World War I", "Gulf War"],
        answer: "Korean War",
        explanation: "Fought from 1950 to 1953, ending in a stalemate."
      }
    ],
    Medium: [
      {
        question: "Who was the leader of the Soviet Union during WWII?",
        options: ["Vladimir Lenin", "Joseph Stalin", "Mikhail Gorbachev", "Nikita Khrushchev"],
        answer: "Joseph Stalin",
        explanation: "Stalin led the USSR from 1924 to 1953."
      },
      {
        question: "Which treaty ended World War I?",
        options: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Ghent", "Treaty of Tordesillas"],
        answer: "Treaty of Versailles",
        explanation: "Signed in 1919, it imposed heavy penalties on Germany."
      },
      {
        question: "What was the name of the ship that brought the Pilgrims to America?",
        options: ["Santa Maria", "Mayflower", "Nina", "Pinta"],
        answer: "Mayflower",
        explanation: "The Pilgrims arrived in 1620."
      },
      {
        question: "Who invented the printing press?",
        options: ["Leonardo da Vinci", "Johannes Gutenberg", "Thomas Edison", "Alexander Graham Bell"],
        answer: "Johannes Gutenberg",
        explanation: "Invented around 1440 in Mainz, Germany."
      },
      {
        question: "Which dynasty ruled China for nearly 400 years?",
        options: ["Ming", "Qing", "Han", "Tang"],
        answer: "Han",
        explanation: "The Han Dynasty ruled from 206 BCE to 220 CE."
      },
      {
        question: "What was the capital of the Byzantine Empire?",
        options: ["Rome", "Athens", "Constantinople", "Alexandria"],
        answer: "Constantinople",
        explanation: "Now known as Istanbul, Turkey."
      },
      {
        question: "Who was the first female Prime Minister of the UK?",
        options: ["Queen Elizabeth II", "Margaret Thatcher", "Theresa May", "Indira Gandhi"],
        answer: "Margaret Thatcher",
        explanation: "Served from 1979 to 1990."
      },
      {
        question: "Which revolution began in 1789?",
        options: ["American Revolution", "French Revolution", "Industrial Revolution", "Russian Revolution"],
        answer: "French Revolution",
        explanation: "Marked by the storming of the Bastille."
      },
      {
        question: "Who painted the Sistine Chapel ceiling?",
        options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
        answer: "Michelangelo",
        explanation: "Painted between 1508 and 1512."
      },
      {
        question: "Which civilization invented writing?",
        options: ["Egyptians", "Greeks", "Sumerians", "Chinese"],
        answer: "Sumerians",
        explanation: "Cuneiform script emerged around 3400 BCE in Mesopotamia."
      }
    ],
    Hard: [
      {
        question: "Who was the last Tsar of Russia?",
        options: ["Peter the Great", "Nicholas II", "Ivan the Terrible", "Alexander I"],
        answer: "Nicholas II",
        explanation: "Executed with his family in 1918 during the Russian Revolution."
      },
      {
        question: "Which ancient city was destroyed by a volcanic eruption in 79 AD?",
        options: ["Athens", "Pompeii", "Troy", "Babylon"],
        answer: "Pompeii",
        explanation: "Buried by Mount Vesuvius' eruption."
      },
      {
        question: "What was the codename for the Allied invasion of Normandy?",
        options: ["Operation Barbarossa", "Operation Overlord", "Operation Desert Storm", "Operation Market Garden"],
        answer: "Operation Overlord",
        explanation: "D-Day occurred on June 6, 1944."
      },
      {
        question: "Who founded the Mongol Empire?",
        options: ["Kublai Khan", "Genghis Khan", "Attila the Hun", "Tamerlane"],
        answer: "Genghis Khan",
        explanation: "United the Mongol tribes in 1206."
      },
      {
        question: "Which philosopher was sentenced to death by drinking hemlock?",
        options: ["Aristotle", "Plato", "Socrates", "Diogenes"],
        answer: "Socrates",
        explanation: "Condemned for 'corrupting the youth' of Athens (399 BCE)."
      },
      {
        question: "What was the first permanent English settlement in America?",
        options: ["Plymouth", "Jamestown", "Roanoke", "Boston"],
        answer: "Jamestown",
        explanation: "Established in Virginia in 1607."
      },
      {
        question: "Who was the first Emperor of Rome?",
        options: ["Julius Caesar", "Augustus", "Nero", "Constantine"],
        answer: "Augustus",
        explanation: "Ruled from 27 BCE to 14 CE."
      },
      {
        question: "Which war was sparked by the assassination of Archduke Franz Ferdinand?",
        options: ["World War I", "World War II", "Franco-Prussian War", "Crimean War"],
        answer: "World War I",
        explanation: "Assassinated in Sarajevo in 1914."
      },
      {
        question: "Who was the first female ruler of Egypt?",
        options: ["Nefertiti", "Cleopatra", "Hatshepsut", "Isis"],
        answer: "Hatshepsut",
        explanation: "Ruled during the 18th Dynasty (c. 1478–1458 BCE)."
      },
      {
        question: "Which empire invented the concept of zero?",
        options: ["Roman", "Greek", "Mayan", "Indian"],
        answer: "Indian",
        explanation: "The concept of zero emerged in ancient India around the 5th century CE."
      }
    ]
  },
  Geography: {
    Easy: [
      {
        question: "What is the largest country by area?",
        options: ["China", "USA", "Canada", "Russia"],
        answer: "Russia",
        explanation: "Russia covers 17.1 million square kilometers."
      },
      {
        question: "Which river is the longest in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        answer: "Nile",
        explanation: "The Nile stretches about 6,650 km (4,130 miles)."
      },
      {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        answer: "Canberra",
        explanation: "Chosen as a compromise between Sydney and Melbourne."
      },
      {
        question: "Which desert is the largest in the world?",
        options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
        answer: "Antarctic",
        explanation: "Antarctica is technically a cold desert."
      },
      {
        question: "Which mountain range includes Mount Everest?",
        options: ["Andes", "Rockies", "Himalayas", "Alps"],
        answer: "Himalayas",
        explanation: "Everest is on the Nepal-China border."
      },
      {
        question: "What is the smallest continent?",
        options: ["Europe", "Australia", "Antarctica", "South America"],
        answer: "Australia",
        explanation: "Australia is both a country and a continent."
      },
      {
        question: "Which ocean is the deepest?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific",
        explanation: "The Mariana Trench reaches ~11,000 meters."
      },
      {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        answer: "Japan",
        explanation: "The name 'Nihon' means 'origin of the sun'."
      },
      {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        answer: "Ottawa",
        explanation: "Toronto is the largest city, but Ottawa is the capital."
      },
      {
        question: "Which African country was never colonized?",
        options: ["Ethiopia", "Egypt", "South Africa", "Nigeria"],
        answer: "Ethiopia",
        explanation: "It resisted European colonization, except for a brief Italian occupation (1936–1941)."
      }
    ],
    Medium: [
      {
        question: "Which strait separates Europe and Africa?",
        options: ["Bering Strait", "Strait of Gibraltar", "Strait of Malacca", "Dardanelles"],
        answer: "Strait of Gibraltar",
        explanation: "Connects the Atlantic to the Mediterranean."
      },
      {
        question: "What is the capital of New Zealand?",
        options: ["Auckland", "Wellington", "Christchurch", "Queenstown"],
        answer: "Wellington",
        explanation: "Auckland is the largest city."
      },
      {
        question: "Which country has the most time zones?",
        options: ["USA", "Russia", "China", "France"],
        answer: "France",
        explanation: "Due to overseas territories, France has 12 time zones."
      },
      {
        question: "Which U.S. state is the largest by area?",
        options: ["Texas", "California", "Alaska", "Montana"],
        answer: "Alaska",
        explanation: "Alaska is larger than Texas, California, and Montana combined."
      },
      {
        question: "What is the longest river in South America?",
        options: ["Orinoco", "Paraná", "Amazon", "São Francisco"],
        answer: "Amazon",
        explanation: "The Amazon is also the largest by water discharge."
      },
      {
        question: "Which city is located on two continents?",
        options: ["Istanbul", "Cairo", "Moscow", "Dubai"],
        answer: "Istanbul",
        explanation: "Straddles Europe and Asia across the Bosphorus Strait."
      },
      {
        question: "Which country is the most populous in Africa?",
        options: ["Egypt", "South Africa", "Nigeria", "Ethiopia"],
        answer: "Nigeria",
        explanation: "Nigeria has over 200 million people."
      },
      {
        question: "Which sea is the saltiest?",
        options: ["Mediterranean", "Red Sea", "Dead Sea", "Caspian Sea"],
        answer: "Dead Sea",
        explanation: "Its salinity is ~34%, nearly 10 times saltier than the ocean."
      },
      {
        question: "What is the capital of Brazil?",
        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        answer: "Brasília",
        explanation: "Built in 1960 to replace Rio as the capital."
      },
      {
        question: "Which country is entirely landlocked by South Africa?",
        options: ["Botswana", "Zimbabwe", "Lesotho", "Namibia"],
        answer: "Lesotho",
        explanation: "Lesotho is an enclave within South Africa."
      }
    ],
    Hard: [
      {
        question: "Which country has the most islands?",
        options: ["Indonesia", "Philippines", "Sweden", "Canada"],
        answer: "Sweden",
        explanation: "Sweden has over 267,000 islands, though most are uninhabited."
      },
      {
        question: "What is the southernmost capital city in the world?",
        options: ["Wellington (New Zealand)", "Canberra (Australia)", "Pretoria (South Africa)", "Ushuaia (Argentina)"],
        answer: "Wellington (New Zealand)",
        explanation: "Located at 41°S latitude."
      },
      {
        question: "Which African lake is the second deepest in the world?",
        options: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"],
        answer: "Lake Tanganyika",
        explanation: "It reaches depths of 1,470 meters (4,820 ft)."
      },
      {
        question: "What is the only sea without coasts?",
        options: ["Sargasso Sea", "Black Sea", "Coral Sea", "Tasman Sea"],
        answer: "Sargasso Sea",
        explanation: "Defined by ocean currents rather than land boundaries."
      },
      {
        question: "Which U.S. state has the longest coastline?",
        options: ["California", "Florida", "Alaska", "Hawaii"],
        answer: "Alaska",
        explanation: "Alaska's coastline is longer than all other states combined."
      },
      {
        question: "What is the driest place on Earth?",
        options: ["Sahara Desert", "Atacama Desert", "Death Valley", "Antarctica"],
        answer: "Atacama Desert",
        explanation: "Some parts of the Atacama have never recorded rainfall."
      },
      {
        question: "Which country has three capitals?",
        options: ["South Africa", "Chile", "Sri Lanka", "Benin"],
        answer: "South Africa",
        explanation: "Pretoria (executive), Cape Town (legislative), Bloemfontein (judicial)."
      },
      {
        question: "What is the flattest continent?",
        options: ["Africa", "Australia", "Antarctica", "South America"],
        answer: "Australia",
        explanation: "Its highest peak (Mount Kosciuszko) is only 2,228 meters."
      },
      {
        question: "Which river flows through the Grand Canyon?",
        options: ["Mississippi", "Colorado", "Rio Grande", "Columbia"],
        answer: "Colorado",
        explanation: "Carved the Grand Canyon over millions of years."
      },
      {
        question: "What is the only country bordering both the Atlantic and Indian Oceans?",
        options: ["Namibia", "Mozambique", "South Africa", "Angola"],
        answer: "South Africa",
        explanation: "Cape Agulhas marks the official divide between the two oceans."
      }
    ]
  },
  Mathematics: {
    Easy: [
      {
        question: "What is 5 × 7?",
        options: ["25", "30", "35", "40"],
        answer: "35",
        explanation: "5 multiplied by 7 equals 35."
      },
      {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        answer: "8",
        explanation: "8 × 8 = 64."
      },
      {
        question: "How many degrees are in a right angle?",
        options: ["45", "90", "180", "360"],
        answer: "90",
        explanation: "A right angle is exactly 90 degrees."
      },
      {
        question: "What is 12 ÷ 3?",
        options: ["2", "3", "4", "6"],
        answer: "4",
        explanation: "12 divided by 3 equals 4."
      },
      {
        question: "What is the value of π (pi) to two decimal places?",
        options: ["3.12", "3.14", "3.16", "3.18"],
        answer: "3.14",
        explanation: "π ≈ 3.14159..."
      },
      {
        question: "What is 10² (10 squared)?",
        options: ["10", "20", "100", "1,000"],
        answer: "100",
        explanation: "10 × 10 = 100."
      },
      {
        question: "How many sides does a triangle have?",
        options: ["2", "3", "4", "5"],
        answer: "3",
        explanation: "Triangles are three-sided polygons."
      },
      {
        question: "What is 15 + 23?",
        options: ["28", "38", "48", "58"],
        answer: "38",
        explanation: "15 plus 23 equals 38."
      },
      {
        question: "What is 100 − 57?",
        options: ["33", "43", "53", "63"],
        answer: "43",
        explanation: "100 minus 57 equals 43."
      },
      {
        question: "How many centimeters are in a meter?",
        options: ["10", "100", "1,000", "10,000"],
        answer: "100",
        explanation: "1 meter = 100 centimeters."
      }
    ],
    Medium: [
      {
        question: "What is the area of a rectangle with length 8 and width 5?",
        options: ["13", "20", "30", "40"],
        answer: "40",
        explanation: "Area = length × width = 8 × 5 = 40."
      },
      {
        question: "Solve for x: 2x + 3 = 11.",
        options: ["2", "4", "6", "8"],
        answer: "4",
        explanation: "2x = 8 → x = 4."
      },
      {
        question: "What is 7! (7 factorial)?",
        options: ["504", "720", "5,040", "40,320"],
        answer: "5,040",
        explanation: "7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5,040."
      },
      {
        question: "What is the next number in the sequence: 2, 4, 8, 16, ___?",
        options: ["20", "24", "32", "64"],
        answer: "32",
        explanation: "Each number is multiplied by 2 (2ⁿ sequence)."
      },
      {
        question: "What is the sum of the angles in a triangle?",
        options: ["90°", "180°", "270°", "360°"],
        answer: "180°",
        explanation: "All triangles have interior angles summing to 180°."
      },
      {
        question: "What is 3/4 as a decimal?",
        options: ["0.25", "0.5", "0.75", "1.0"],
        answer: "0.75",
        explanation: "3 divided by 4 equals 0.75."
      },
      {
        question: "What is the Pythagorean theorem?",
        options: [
          "a² + b² = c²",
          "a + b = c",
          "a × b = c²",
          "a/b = c"
        ],
        answer: "a² + b² = c²",
        explanation: "Relates the sides of a right triangle."
      },
      {
        question: "What is the median of the numbers: 4, 8, 6, 5, 3?",
        options: ["4", "5", "6", "8"],
        answer: "5",
        explanation: "Ordered set: 3, 4, 5, 6, 8 → Median is the middle number (5)."
      },
      {
        question: "What is 25% of 200?",
        options: ["25", "50", "75", "100"],
        answer: "50",
        explanation: "25% = 0.25 → 0.25 × 200 = 50."
      },
      {
        question: "What is the value of 5³ (5 cubed)?",
        options: ["15", "25", "100", "125"],
        answer: "125",
        explanation: "5 × 5 × 5 = 125."
      }
    ],
    Hard: [
      {
        question: "What is the derivative of x² with respect to x?",
        options: ["x", "2x", "x³/3", "2"],
        answer: "2x",
        explanation: "d/dx(x²) = 2x."
      },
      {
        question: "What is the integral of 3x² dx?",
        options: ["x³ + C", "3x + C", "6x + C", "x² + C"],
        answer: "x³ + C",
        explanation: "∫3x² dx = x³ + C (C is the constant of integration)."
      },
      {
        question: "What is the value of sin(90°)?",
        options: ["0", "0.5", "1", "Undefined"],
        answer: "1",
        explanation: "sin(90°) = 1."
      },
      {
        question: "What is the prime factorization of 84?",
        options: ["2 × 3 × 7", "2² × 3 × 7", "2 × 3² × 7", "2³ × 3 × 7"],
        answer: "2² × 3 × 7",
        explanation: "84 = 2 × 2 × 3 × 7 = 2² × 3 × 7."
      },
      {
        question: "What is the solution to the quadratic equation x² − 5x + 6 = 0?",
        options: ["x = 2, 3", "x = −2, −3", "x = 1, 6", "x = −1, −6"],
        answer: "x = 2, 3",
        explanation: "Factorized as (x − 2)(x − 3) = 0."
      },
      {
        question: "What is the value of log₁₀(100)?",
        options: ["1", "2", "10", "100"],
        answer: "2",
        explanation: "10² = 100 → log₁₀(100) = 2."
      },
      {
        question: "What is the sum of the first 10 natural numbers?",
        options: ["45", "50", "55", "60"],
        answer: "55",
        explanation: "1 + 2 + ... + 10 = (10 × 11)/2 = 55."
      },
      {
        question: "What is the probability of rolling a 6 on a fair die?",
        options: ["1/2", "1/3", "1/6", "1/12"],
        answer: "1/6",
        explanation: "A die has 6 equally likely outcomes."
      },
      {
        question: "What is the slope of the line y = −2x + 5?",
        options: ["−2", "2", "5", "−5"],
        answer: "−2",
        explanation: "In y = mx + b, m is the slope."
      },
      {
        question: "What is the value of i² (where i is the imaginary unit)?",
        options: ["1", "−1", "i", "0"],
        answer: "−1",
        explanation: "By definition, i² = −1."
      }
    ]
  },
  Literature: {
    Easy: [
      {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        answer: "William Shakespeare",
        explanation: "Written around 1595–1596."
      },
      {
        question: "Which novel begins with 'It was the best of times, it was the worst of times'?",
        options: ["Moby-Dick", "A Tale of Two Cities", "Pride and Prejudice", "War and Peace"],
        answer: "A Tale of Two Cities",
        explanation: "Written by Charles Dickens in 1859."
      },
      {
        question: "Who is the author of 'Harry Potter'?",
        options: ["J.R.R. Tolkien", "J.K. Rowling", "C.S. Lewis", "George R.R. Martin"],
        answer: "J.K. Rowling",
        explanation: "First published in 1997."
      },
      {
        question: "Which book features Sherlock Holmes?",
        options: ["Dracula", "The Hound of the Baskervilles", "Frankenstein", "Treasure Island"],
        answer: "The Hound of the Baskervilles",
        explanation: "Written by Arthur Conan Doyle in 1902."
      },
      {
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Emily Brontë", "Charlotte Brontë", "Jane Austen", "Virginia Woolf"],
        answer: "Jane Austen",
        explanation: "Published in 1813."
      },
      {
        question: "Which poet wrote 'The Raven'?",
        options: ["Walt Whitman", "Robert Frost", "Edgar Allan Poe", "Emily Dickinson"],
        answer: "Edgar Allan Poe",
        explanation: "Published in 1845."
      },
      {
        question: "What is the sequel to 'To Kill a Mockingbird'?",
        options: ["Go Set a Watchman", "The Long Goodbye", "In Cold Blood", "Beloved"],
        answer: "Go Set a Watchman",
        explanation: "Written by Harper Lee, published in 2015."
      },
      {
        question: "Who wrote '1984'?",
        options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"],
        answer: "George Orwell",
        explanation: "Published in 1949."
      },
      {
        question: "Which novel features Atticus Finch?",
        options: ["The Catcher in the Rye", "To Kill a Mockingbird", "The Great Gatsby", "Lord of the Flies"],
        answer: "To Kill a Mockingbird",
        explanation: "Atticus is Scout and Jem's father."
      },
      {
        question: "Who wrote 'The Odyssey'?",
        options: ["Homer", "Virgil", "Sophocles", "Plato"],
        answer: "Homer",
        explanation: "An ancient Greek epic poem."
      }
    ],
    Medium: [
      {
        question: "Which Shakespeare play features the character Iago?",
        options: ["Macbeth", "Hamlet", "Othello", "King Lear"],
        answer: "Othello",
        explanation: "Iago is Othello's ensign and the main antagonist."
      },
      {
        question: "Who wrote 'The Great Gatsby'?",
        options: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "William Faulkner"],
        answer: "F. Scott Fitzgerald",
        explanation: "Published in 1925."
      },
      {
        question: "Which dystopian novel features 'Big Brother'?",
        options: ["Brave New World", "Fahrenheit 451", "1984", "Animal Farm"],
        answer: "1984",
        explanation: "Written by George Orwell."
      },
      {
        question: "Who is the author of 'Moby-Dick'?",
        options: ["Herman Melville", "Nathaniel Hawthorne", "Mark Twain", "Jack London"],
        answer: "Herman Melville",
        explanation: "Published in 1851."
      },
      {
        question: "Which Jane Austen novel features Elizabeth Bennet?",
        options: ["Emma", "Sense and Sensibility", "Pride and Prejudice", "Mansfield Park"],
        answer: "Pride and Prejudice",
        explanation: "Elizabeth is the protagonist."
      },
      {
        question: "Who wrote 'The Canterbury Tales'?",
        options: ["Geoffrey Chaucer", "John Milton", "William Langland", "Dante Alighieri"],
        answer: "Geoffrey Chaucer",
        explanation: "Written in the 14th century."
      },
      {
        question: "Which novel is set on the fictional island of Genosha?",
        options: ["Lord of the Flies", "Robinson Crusoe", "Treasure Island", "The Tempest"],
        answer: "Lord of the Flies",
        explanation: "Written by William Golding in 1954."
      },
      {
        question: "Who wrote 'Crime and Punishment'?",
        options: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Nikolai Gogol"],
        answer: "Fyodor Dostoevsky",
        explanation: "Published in 1866."
      },
      {
        question: "Which poet wrote 'The Waste Land'?",
        options: ["W.B. Yeats", "T.S. Eliot", "Ezra Pound", "Robert Frost"],
        answer: "T.S. Eliot",
        explanation: "Published in 1922."
      },
      {
        question: "Who is the author of 'Beloved'?",
        options: ["Toni Morrison", "Alice Walker", "Maya Angelou", "Zora Neale Hurston"],
        answer: "Toni Morrison",
        explanation: "Published in 1987."
      }
    ],
    Hard: [
      {
        question: "Which novel opens with the line 'Call me Ishmael'?",
        options: ["Moby-Dick", "The Old Man and the Sea", "Heart of Darkness", "Billy Budd"],
        answer: "Moby-Dick",
        explanation: "Ishmael is the narrator of Herman Melville's novel."
      },
      {
        question: "Who wrote 'Ulysses'?",
        options: ["James Joyce", "Virginia Woolf", "Samuel Beckett", "D.H. Lawrence"],
        answer: "James Joyce",
        explanation: "Published in 1922."
      },
      {
        question: "Which play features the characters Vladimir and Estragon?",
        options: ["Waiting for Godot", "The Cherry Orchard", "Rosencrantz and Guildenstern Are Dead", "Endgame"],
        answer: "Waiting for Godot",
        explanation: "Written by Samuel Beckett in 1953."
      },
      {
        question: "Who wrote 'The Divine Comedy'?",
        options: ["Dante Alighieri", "Giovanni Boccaccio", "Petrarch", "Machiavelli"],
        answer: "Dante Alighieri",
        explanation: "Completed in 1320."
      },
      {
        question: "Which novel features the character Jay Gatsby?",
        options: ["The Sun Also Rises", "The Great Gatsby", "Tender Is the Night", "This Side of Paradise"],
        answer: "The Great Gatsby",
        explanation: "Gatsby is the enigmatic millionaire."
      },
      {
        question: "Who wrote 'The Sound and the Fury'?",
        options: ["William Faulkner", "Ernest Hemingway", "John Steinbeck", "F. Scott Fitzgerald"],
        answer: "William Faulkner",
        explanation: "Published in 1929."
      },
      {
        question: "Which poet wrote 'Howl'?",
        options: ["Allen Ginsberg", "Jack Kerouac", "William S. Burroughs", "Charles Bukowski"],
        answer: "Allen Ginsberg",
        explanation: "Published in 1956."
      },
      {
        question: "Who is the author of 'Invisible Man'?",
        options: ["Ralph Ellison", "James Baldwin", "Richard Wright", "Langston Hughes"],
        answer: "Ralph Ellison",
        explanation: "Published in 1952."
      },
      {
        question: "Which novel features the character Humbert Humbert?",
        options: ["Pale Fire", "Lolita", "Ada or Ardor", "Pnin"],
        answer: "Lolita",
        explanation: "Written by Vladimir Nabokov in 1955."
      },
      {
        question: "Who wrote 'One Hundred Years of Solitude'?",
        options: ["Gabriel García Márquez", "Jorge Luis Borges", "Pablo Neruda", "Isabel Allende"],
        answer: "Gabriel García Márquez",
        explanation: "Published in 1967."
      }
    ]
  },
  Technology: {
    Easy: [
      {
        question: "What does 'HTML' stand for?",
        options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "Hyper Text Markdown Language"],
        answer: "Hyper Text Markup Language",
        explanation: "HTML is the standard markup language for web pages."
      },
      {
        question: "Which company developed the Windows operating system?",
        options: ["Apple", "Microsoft", "Google", "IBM"],
        answer: "Microsoft",
        explanation: "Windows was first released in 1985."
      },
      {
        question: "What is the name of Google's search algorithm?",
        options: ["PageRank", "DeepMind", "Bing", "Alexa"],
        answer: "PageRank",
        explanation: "Developed by Larry Page and Sergey Brin."
      },
      {
        question: "Which programming language is known for web development?",
        options: ["Java", "Python", "JavaScript", "C++"],
        answer: "JavaScript",
        explanation: "JavaScript is used for client-side scripting."
      },
      {
        question: "What does 'CPU' stand for?",
        options: ["Central Processing Unit", "Computer Processing Unit", "Central Power Unit", "Control Processing Unit"],
        answer: "Central Processing Unit",
        explanation: "The CPU is the 'brain' of a computer."
      },
      {
        question: "Which device converts digital signals to analog for telephone lines?",
        options: ["Router", "Modem", "Switch", "Hub"],
        answer: "Modem",
        explanation: "Short for 'modulator-demodulator'."
      },
      {
        question: "What is the largest social media platform?",
        options: ["Twitter", "Facebook", "Instagram", "TikTok"],
        answer: "Facebook",
        explanation: "Over 2.8 billion monthly active users."
      },
      {
        question: "Which company created the iPhone?",
        options: ["Samsung", "Apple", "Google", "Microsoft"],
        answer: "Apple",
        explanation: "First released in 2007."
      },
      {
        question: "What is the file extension for a Python script?",
        options: [".py", ".js", ".html", ".exe"],
        answer: ".py",
        explanation: "Python files use the .py extension."
      },
      {
        question: "Which protocol is used for secure web browsing?",
        options: ["HTTP", "FTP", "HTTPS", "SMTP"],
        answer: "HTTPS",
        explanation: "HTTPS encrypts data between the browser and server."
      }
    ],
    Medium: [
      {
        question: "What does 'API' stand for?",
        options: ["Automated Programming Interface", "Application Programming Interface", "Advanced Programming Interface", "Active Programming Interface"],
        answer: "Application Programming Interface",
        explanation: "APIs allow software components to communicate."
      },
      {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "CSS", "JavaScript", "PHP"],
        answer: "CSS",
        explanation: "CSS stands for Cascading Style Sheets."
      },
      {
        question: "What is the name of Apple's voice assistant?",
        options: ["Alexa", "Google Assistant", "Siri", "Cortana"],
        answer: "Siri",
        explanation: "Introduced in 2011 on the iPhone 4S."
      },
      {
        question: "Which database is known for its NoSQL capabilities?",
        options: ["MySQL", "MongoDB", "Oracle", "PostgreSQL"],
        answer: "MongoDB",
        explanation: "MongoDB is a document-oriented NoSQL database."
      },
      {
        question: "What does 'VPN' stand for?",
        options: ["Virtual Private Network", "Virtual Public Network", "Verified Private Network", "Virtual Proxy Network"],
        answer: "Virtual Private Network",
        explanation: "VPNs encrypt internet traffic for privacy."
      },
      {
        question: "Which company developed the Android OS?",
        options: ["Apple", "Microsoft", "Google", "Samsung"],
        answer: "Google",
        explanation: "Android was acquired by Google in 2005."
      },
      {
        question: "What is the main purpose of a firewall?",
        options: ["Speed up internet", "Block unauthorized access", "Store data", "Manage emails"],
        answer: "Block unauthorized access",
        explanation: "Firewalls monitor and control network traffic."
      },
      {
        question: "Which protocol is used for sending emails?",
        options: ["HTTP", "FTP", "SMTP", "TCP"],
        answer: "SMTP",
        explanation: "SMTP stands for Simple Mail Transfer Protocol."
      },
      {
        question: "What is the primary function of RAM?",
        options: ["Permanent storage", "Temporary storage for active processes", "Cooling the CPU", "Displaying graphics"],
        answer: "Temporary storage for active processes",
        explanation: "RAM is volatile memory used for running applications."
      },
      {
        question: "Which tool is used for version control?",
        options: ["Docker", "Git", "Kubernetes", "Jenkins"],
        answer: "Git",
        explanation: "Git tracks changes in source code."
      }
    ],
    Hard: [
      {
        question: "What is the time complexity of a binary search algorithm?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        answer: "O(log n)",
        explanation: "Binary search halves the search space each iteration."
      },
      {
        question: "Which encryption algorithm is used in Bitcoin?",
        options: ["RSA", "SHA-256", "AES", "Blowfish"],
        answer: "SHA-256",
        explanation: "Bitcoin uses SHA-256 for proof-of-work."
      },
      {
        question: "What does 'CDN' stand for?",
        options: ["Content Delivery Network", "Centralized Data Node", "Coded Data Network", "Computer Data Network"],
        answer: "Content Delivery Network",
        explanation: "CDNs distribute content geographically to reduce latency."
      },
      {
        question: "Which language is the Linux kernel written in?",
        options: ["Python", "Java", "C", "Assembly"],
        answer: "C",
        explanation: "Linus Torvalds wrote Linux in C."
      },
      {
        question: "What is the purpose of Docker?",
        options: ["Virtualization", "Containerization", "Cloud Storage", "Data Encryption"],
        answer: "Containerization",
        explanation: "Docker packages applications into containers."
      },
      {
        question: "Which protocol is used for real-time communication (e.g., video calls)?",
        options: ["HTTP", "WebRTC", "FTP", "SMTP"],
        answer: "WebRTC",
        explanation: "WebRTC enables peer-to-peer communication in browsers."
      },
      {
        question: "What is the main advantage of using React.js?",
        options: ["Backend development", "Virtual DOM for efficient updates", "Database management", "Hardware programming"],
        answer: "Virtual DOM for efficient updates",
        explanation: "React's virtual DOM minimizes direct DOM manipulation."
      },
      {
        question: "Which data structure uses LIFO (Last In, First Out)?",
        options: ["Queue", "Stack", "Linked List", "Tree"],
        answer: "Stack",
        explanation: "Stacks process the most recently added item first."
      },
      {
        question: "What is 'Big O notation' used for?",
        options: ["Measuring code execution time", "Describing algorithm efficiency", "Defining data types", "Encrypting data"],
        answer: "Describing algorithm efficiency",
        explanation: "Big O notation analyzes worst-case time/space complexity."
      },
      {
        question: "Which company developed the TensorFlow framework?",
        options: ["Facebook", "Google", "Microsoft", "Amazon"],
        answer: "Google",
        explanation: "TensorFlow is an open-source machine learning library."
      }
    ]
  },
  Sports: {
    Easy: [
      {
        question: "Which country won the 2018 FIFA World Cup?",
        options: ["Germany", "Brazil", "France", "Argentina"],
        answer: "France",
        explanation: "France defeated Croatia 4–2 in the final."
      },
      {
        question: "How many players are on a basketball team?",
        options: ["5", "6", "7", "8"],
        answer: "5",
        explanation: "Five players per team on the court at a time."
      },
      {
        question: "Which sport uses a shuttlecock?",
        options: ["Tennis", "Badminton", "Squash", "Table Tennis"],
        answer: "Badminton",
        explanation: "A shuttlecock is also called a 'birdie'."
      },
      {
        question: "Who holds the record for most Olympic gold medals?",
        options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Simone Biles"],
        answer: "Michael Phelps",
        explanation: "Phelps has 23 Olympic gold medals (swimming)."
      },
      {
        question: "Which country invented cricket?",
        options: ["Australia", "India", "England", "South Africa"],
        answer: "England",
        explanation: "Cricket originated in 16th-century England."
      },
      {
        question: "What is the diameter of a basketball hoop in inches?",
        options: ["16", "18", "20", "24"],
        answer: "18",
        explanation: "The rim is 18 inches in diameter."
      },
      {
        question: "Which sport is associated with Wimbledon?",
        options: ["Golf", "Tennis", "Cricket", "Rugby"],
        answer: "Tennis",
        explanation: "Wimbledon is the oldest tennis tournament (since 1877)."
      },
      {
        question: "How many rings are on the Olympic flag?",
        options: ["4", "5", "6", "7"],
        answer: "5",
        explanation: "The rings represent the five inhabited continents."
      },
      {
        question: "Which athlete is known as 'The Greatest'?",
        options: ["Michael Jordan", "Muhammad Ali", "Pelé", "Serena Williams"],
        answer: "Muhammad Ali",
        explanation: "Ali was a three-time heavyweight boxing champion."
      },
      {
        question: "What is the national sport of Japan?",
        options: ["Karate", "Sumo Wrestling", "Judo", "Baseball"],
        answer: "Sumo Wrestling",
        explanation: "Sumo is Japan's national sport, though baseball is also popular."
      }
    ],
    Medium: [
      {
        question: "Which country has won the most FIFA World Cups?",
        options: ["Germany", "Brazil", "Italy", "Argentina"],
        answer: "Brazil",
        explanation: "Brazil has 5 World Cup titles (1958, 1962, 1970, 1994, 2002)."
      },
      {
        question: "Who is the all-time leading scorer in NBA history?",
        options: ["Michael Jordan", "Kareem Abdul-Jabbar", "LeBron James", "Kobe Bryant"],
        answer: "LeBron James",
        explanation: "LeBron surpassed Kareem's record in 2023."
      },
      {
        question: "Which Grand Slam tennis tournament is played on clay?",
        options: ["Wimbledon", "US Open", "Australian Open", "French Open"],
        answer: "French Open",
        explanation: "Held at Roland Garros in Paris."
      },
      {
        question: "What is the distance of a marathon in kilometers?",
        options: ["26.2", "42.195", "50", "21.1"],
        answer: "42.195",
        explanation: "A marathon is 26.2 miles (42.195 km)."
      },
      {
        question: "Which sport uses terms like 'strike' and 'spare'?",
        options: ["Baseball", "Bowling", "Cricket", "Darts"],
        answer: "Bowling",
        explanation: "Terms from ten-pin bowling."
      },
      {
        question: "Who was the first woman to run a sub-2:20 marathon?",
        options: ["Paula Radcliffe", "Joan Benoit", "Tegla Loroupe", "Mary Decker"],
        answer: "Paula Radcliffe",
        explanation: "Radcliffe ran 2:15:25 in 2003 (world record until 2019)."
      },
      {
        question: "Which country won the first Cricket World Cup in 1975?",
        options: ["Australia", "West Indies", "England", "India"],
        answer: "West Indies",
        explanation: "Defeated Australia by 17 runs in the final."
      },
      {
        question: "In which sport would you perform a 'slam dunk'?",
        options: ["Basketball", "Volleyball", "Tennis", "Gymnastics"],
        answer: "Basketball",
        explanation: "A dunk is a forceful shot where the player jumps to reach the rim."
      },
      {
        question: "Which golfer has the most major championship wins?",
        options: ["Tiger Woods", "Jack Nicklaus", "Arnold Palmer", "Phil Mickelson"],
        answer: "Jack Nicklaus",
        explanation: "Nicklaus has 18 major titles (Woods has 15)."
      },
      {
        question: "What is the maximum break in snooker?",
        options: ["100", "147", "200", "50"],
        answer: "147",
        explanation: "A maximum break involves potting all 15 reds with 15 blacks and the colors."
      }
    ],
    Hard: [
      {
        question: "Who is the only boxer to win world titles in 8 weight divisions?",
        options: ["Floyd Mayweather Jr.", "Manny Pacquiao", "Sugar Ray Leonard", "Mike Tyson"],
        answer: "Manny Pacquiao",
        explanation: "Pacquiao won titles from flyweight to super welterweight."
      },
      {
        question: "Which country has won the most Olympic gold medals in hockey?",
        options: ["Netherlands", "Germany", "India", "Australia"],
        answer: "India",
        explanation: "India has 8 Olympic golds in field hockey (last in 1980)."
      },
      {
        question: "Who is the only F1 driver to win 7 World Championships?",
        options: ["Ayrton Senna", "Michael Schumacher", "Lewis Hamilton", "Juan Manuel Fangio"],
        answer: "Lewis Hamilton",
        explanation: "Hamilton tied Schumacher's record in 2020 and surpassed it in 2021."
      },
      {
        question: "Which NBA player has the most career assists?",
        options: ["Magic Johnson", "John Stockton", "Jason Kidd", "Steve Nash"],
        answer: "John Stockton",
        explanation: "Stockton holds the record with 15,806 assists."
      },
      {
        question: "Who was the first gymnast to score a perfect 10 at the Olympics?",
        options: ["Nadia Comăneci", "Simone Biles", "Mary Lou Retton", "Olga Korbut"],
        answer: "Nadia Comăneci",
        explanation: "Achieved at the 1976 Montreal Olympics (age 14)."
      },
      {
        question: "Which country has won the most Rugby World Cups?",
        options: ["New Zealand", "South Africa", "Australia", "England"],
        answer: "South Africa",
        explanation: "South Africa has 4 titles (1995, 2007, 2019, 2023)."
      },
      {
        question: "Who is the only player to win the FIFA World Cup, UEFA Champions League, Ballon d'Or, and Copa América?",
        options: ["Lionel Messi", "Pelé", "Diego Maradona", "Cristiano Ronaldo"],
        answer: "Lionel Messi",
        explanation: "Messi achieved this after Argentina's 2022 World Cup win."
      },
      {
        question: "Which tennis player holds the record for most Grand Slam singles titles?",
        options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Margaret Court"],
        answer: "Margaret Court",
        explanation: "Court won 24 majors (Serena Williams has 23, the most in Open Era)."
      },
      {
        question: "Who is the only athlete to win Olympic gold in both sprinting and long jump?",
        options: ["Carl Lewis", "Usain Bolt", "Jesse Owens", "Bob Beamon"],
        answer: "Carl Lewis",
        explanation: "Lewis won 4 long jump golds and 100m gold in 1984."
      },
      {
        question: "Which country invented the modern game of golf?",
        options: ["England", "Scotland", "Netherlands", "France"],
        answer: "Scotland",
        explanation: "The first written rules were established in Scotland in 1744."
      }
    ]
  },
  Art: {
    Easy: [
      {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        answer: "Leonardo da Vinci",
        explanation: "Painted between 1503–1506."
      },
      {
        question: "Which art style is characterized by small dots of color?",
        options: ["Cubism", "Impressionism", "Pointillism", "Surrealism"],
        answer: "Pointillism",
        explanation: "Pioneered by Georges Seurat."
      },
      {
        question: "Who sculpted 'David'?",
        options: ["Donatello", "Michelangelo", "Bernini", "Rodin"],
        answer: "Michelangelo",
        explanation: "Completed in 1504."
      },
      {
        question: "Which artist cut off his own ear?",
        options: ["Pablo Picasso", "Vincent van Gogh", "Salvador Dalí", "Claude Monet"],
        answer: "Vincent van Gogh",
        explanation: "Van Gogh severed part of his left ear in 1888."
      },
      {
        question: "What is the name of Salvador Dalí's melting clocks painting?",
        options: ["The Persistence of Memory", "The Scream", "Starry Night", "Guernica"],
        answer: "The Persistence of Memory",
        explanation: "Painted in 1931."
      },
      {
        question: "Which museum houses the 'Venus de Milo'?",
        options: ["The Louvre", "The Met", "Uffizi Gallery", "British Museum"],
        answer: "The Louvre",
        explanation: "The ancient Greek statue is displayed in Paris."
      },
      {
        question: "Who painted 'The Starry Night'?",
        options: ["Claude Monet", "Vincent van Gogh", "Edvard Munch", "Paul Cézanne"],
        answer: "Vincent van Gogh",
        explanation: "Painted in 1889 during his stay in an asylum."
      },
      {
        question: "Which art movement did Pablo Picasso co-found?",
        options: ["Impressionism", "Cubism", "Surrealism", "Baroque"],
        answer: "Cubism",
        explanation: "Co-founded with Georges Braque around 1907."
      },
      {
        question: "What is the primary medium of Andy Warhol's 'Campbell's Soup Cans'?",
        options: ["Oil paint", "Watercolor", "Silkscreen", "Acrylic"],
        answer: "Silkscreen",
        explanation: "Warhol used silkscreen printing for mass-produced art."
      },
      {
        question: "Which artist painted 'The Birth of Venus'?",
        options: ["Leonardo da Vinci", "Sandro Botticelli", "Raphael", "Titian"],
        answer: "Sandro Botticelli",
        explanation: "Painted in the 1480s."
      }
    ],
    Medium: [
      {
        question: "Who designed the Guggenheim Museum in New York?",
        options: ["Frank Lloyd Wright", "Zaha Hadid", "I.M. Pei", "Le Corbusier"],
        answer: "Frank Lloyd Wright",
        explanation: "Completed in 1959, it's known for its spiral design."
      },
      {
        question: "Which artist created 'The Thinker'?",
        options: ["Auguste Rodin", "Michelangelo", "Donatello", "Henry Moore"],
        answer: "Auguste Rodin",
        explanation: "Originally part of 'The Gates of Hell' sculpture group."
      },
      {
        question: "What is Frida Kahlo's most famous painting?",
        options: ["The Two Fridas", "Self-Portrait with Thorn Necklace and Hummingbird", "The Broken Column", "Viva la Vida"],
        answer: "The Two Fridas",
        explanation: "Painted in 1939, depicting her dual heritage."
      },
      {
        question: "Which art movement is Jackson Pollock associated with?",
        options: ["Abstract Expressionism", "Pop Art", "Minimalism", "Dada"],
        answer: "Abstract Expressionism",
        explanation: "Known for his drip painting technique."
      },
      {
        question: "Who painted 'Girl with a Pearl Earring'?",
        options: ["Rembrandt", "Johannes Vermeer", "Peter Paul Rubens", "Anthony van Dyck"],
        answer: "Johannes Vermeer",
        explanation: "Often called the 'Mona Lisa of the North'."
      },
      {
        question: "Which artist created the 'Marilyn Monroe' silkscreens?",
        options: ["Roy Lichtenstein", "Andy Warhol", "Keith Haring", "Jean-Michel Basquiat"],
        answer: "Andy Warhol",
        explanation: "Part of his celebrity portrait series."
      },
      {
        question: "What is the name of the Japanese art of paper folding?",
        options: ["Ikebana", "Origami", "Ukiyo-e", "Sumi-e"],
        answer: "Origami",
        explanation: "From 'ori' (folding) and 'kami' (paper)."
      },
      {
        question: "Who painted 'The Scream'?",
        options: ["Edvard Munch", "Vincent van Gogh", "Paul Gauguin", "Egon Schiele"],
        answer: "Edvard Munch",
        explanation: "Painted in 1893, symbolizing existential angst."
      },
      {
        question: "Which Renaissance artist painted the Sistine Chapel ceiling?",
        options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
        answer: "Michelangelo",
        explanation: "Painted between 1508–1512."
      },
      {
        question: "What is the main subject of Grant Wood's 'American Gothic'?",
        options: ["A farmer and his daughter", "A farmer and his wife", "A farmer and his son", "A farmer and his sister"],
        answer: "A farmer and his daughter",
        explanation: "The models were Wood's dentist and sister."
      }
    ],
    Hard: [
      {
        question: "Who designed the 'Glass House' in Connecticut?",
        options: ["Ludwig Mies van der Rohe", "Philip Johnson", "Frank Gehry", "Le Corbusier"],
        answer: "Philip Johnson",
        explanation: "Completed in 1949, a landmark of modern architecture."
      },
      {
        question: "Which artist created 'Fountain', the porcelain urinal artwork?",
        options: ["Marcel Duchamp", "Salvador Dalí", "Man Ray", "Francis Picabia"],
        answer: "Marcel Duchamp",
        explanation: "A seminal work of the Dada movement (1917)."
      },
      {
        question: "What is the oldest known cave painting site?",
        options: ["Lascaux (France)", "Altamira (Spain)", "Chauvet (France)", "Bhimbetka (India)"],
        answer: "Chauvet (France)",
        explanation: "Chauvet Cave paintings date back ~36,000 years."
      },
      {
        question: "Who painted 'Les Demoiselles d'Avignon'?",
        options: ["Henri Matisse", "Pablo Picasso", "Georges Braque", "Amedeo Modigliani"],
        answer: "Pablo Picasso",
        explanation: "Painted in 1907, a precursor to Cubism."
      },
      {
        question: "Which artist coined the term 'readymade' for found object art?",
        options: ["Marcel Duchamp", "Andy Warhol", "Joseph Beuys", "Yves Klein"],
        answer: "Marcel Duchamp",
        explanation: "Examples include 'Bicycle Wheel' (1913)."
      },
      {
        question: "Who designed the Vietnam Veterans Memorial in Washington, D.C.?",
        options: ["Maya Lin", "I.M. Pei", "Frank Gehry", "Richard Serra"],
        answer: "Maya Lin",
        explanation: "Designed at age 21 (completed in 1982)."
      },
      {
        question: "Which artist created 'The Dinner Party' feminist installation?",
        options: ["Judy Chicago", "Yoko Ono", "Louise Bourgeois", "Barbara Kruger"],
        answer: "Judy Chicago",
        explanation: "Features 39 place settings for historical women (1979)."
      },
      {
        question: "What is the technique of painting on wet plaster called?",
        options: ["Fresco", "Tempera", "Encaustic", "Gouache"],
        answer: "Fresco",
        explanation: "Used for Michelangelo's Sistine Chapel ceiling."
      },
      {
        question: "Who painted 'Nighthawks'?",
        options: ["Edward Hopper", "Norman Rockwell", "Andrew Wyeth", "Grant Wood"],
        answer: "Edward Hopper",
        explanation: "Painted in 1942, depicting a diner at night."
      },
      {
        question: "Which artist created the 'Balloon Dog' sculptures?",
        options: ["Jeff Koons", "Damien Hirst", "Anish Kapoor", "Takashi Murakami"],
        answer: "Jeff Koons",
        explanation: "Part of his 'Celebration' series (1994–2000)."
      }
    ]
  },
  CurrentAffairs: {
    Easy: [
      {
        question: "Who is the current President of the United States (as of 2023)?",
        options: ["Donald Trump", "Joe Biden", "Barack Obama", "Kamala Harris"],
        answer: "Joe Biden",
        explanation: "Biden took office on January 20, 2021."
      },
      {
        question: "Which country hosted the 2022 FIFA World Cup?",
        options: ["Brazil", "Russia", "Qatar", "France"],
        answer: "Qatar",
        explanation: "First World Cup held in the Middle East."
      },
      {
        question: "Which company developed ChatGPT?",
        options: ["Google", "OpenAI", "Microsoft", "Meta"],
        answer: "OpenAI",
        explanation: "Released in November 2022."
      },
      {
        question: "Which country recently joined NATO in 2023?",
        options: ["Sweden", "Finland", "Ukraine", "Austria"],
        answer: "Finland",
        explanation: "Finland joined in April 2023; Sweden followed in 2024."
      },
      {
        question: "What is the currency of Sweden?",
        options: ["Euro", "Krone", "Pound", "Krona"],
        answer: "Krona",
        explanation: "Sweden has kept its currency despite EU membership."
      },
      {
        question: "Which tech CEO announced stepping down in 2023?",
        options: ["Elon Musk", "Tim Cook", "Sundar Pichai", "Mark Zuckerberg"],
        answer: "Mark Zuckerberg",
        explanation: "Zuckerberg stepped down as Meta CEO in 2023."
      },
      {
        question: "Which country recently changed its name to Türkiye?",
        options: ["Turkey", "Thailand", "Tunisia", "Turkmenistan"],
        answer: "Turkey",
        explanation: "Officially adopted 'Türkiye' in 2022."
      },
      {
        question: "Which city hosted the 2024 Summer Olympics?",
        options: ["Tokyo", "Paris", "Los Angeles", "Beijing"],
        answer: "Paris",
        explanation: "Paris last hosted in 1924."
      },
      {
        question: "Which pandemic disease emerged in 2019?",
        options: ["SARS", "COVID-19", "Ebola", "Swine Flu"],
        answer: "COVID-19",
        explanation: "First identified in Wuhan, China."
      },
      {
        question: "Which company acquired Twitter in 2022?",
        options: ["Meta", "Elon Musk", "Google", "Microsoft"],
        answer: "Elon Musk",
        explanation: "Purchased for $44 billion and renamed 'X' in 2023."
      }
    ],
    Medium: [
      {
        question: "Which country recently launched the 'Chandrayaan-3' moon mission?",
        options: ["China", "USA", "India", "Russia"],
        answer: "India",
        explanation: "Successfully landed on the Moon's south pole in August 2023."
      },
      {
        question: "What is the name of the global minimum tax agreement signed by 136 countries in 2021?",
        options: ["OECD Tax Deal", "G20 Tax Accord", "BEPS 2.0", "Global Tax Pact"],
        answer: "OECD Tax Deal",
        explanation: "Aims to set a 15% minimum corporate tax rate."
      },
      {
        question: "Which cryptocurrency exchange collapsed in 2022?",
        options: ["Binance", "Coinbase", "FTX", "Kraken"],
        answer: "FTX",
        explanation: "Filed for bankruptcy in November 2022."
      },
      {
        question: "Which country recently experienced a major earthquake in February 2023?",
        options: ["Turkey", "Japan", "Italy", "Mexico"],
        answer: "Turkey",
        explanation: "A 7.8-magnitude quake struck southern Turkey and Syria."
      },
      {
        question: "Who became the UK's Prime Minister in 2022 after Liz Truss?",
        options: ["Boris Johnson", "Jeremy Hunt", "Rishi Sunak", "Keir Starmer"],
        answer: "Rishi Sunak",
        explanation: "First British Asian PM (took office October 2022)."
      },
      {
        question: "Which African country recently introduced a new currency in 2023?",
        options: ["Nigeria", "South Africa", "Zimbabwe", "Kenya"],
        answer: "Zimbabwe",
        explanation: "Launched ZiG (Zimbabwe Gold) to replace the RTGS dollar."
      },
      {
        question: "Which tech giant was fined €1.2 billion by the EU in 2023 for antitrust violations?",
        options: ["Apple", "Google", "Meta", "Amazon"],
        answer: "Google",
        explanation: "For abusing its dominance in online advertising."
      },
      {
        question: "Which country recently legalized same-sex marriage in 2023?",
        options: ["Greece", "Estonia", "Latvia", "Slovakia"],
        answer: "Estonia",
        explanation: "First Baltic country to legalize same-sex marriage."
      },
      {
        question: "Which AI tool went viral in 2023 for generating images from text prompts?",
        options: ["ChatGPT", "DALL-E", "MidJourney", "Stable Diffusion"],
        answer: "MidJourney",
        explanation: "Known for its photorealistic AI-generated art."
      },
      {
        question: "Which country recently banned TikTok on government devices?",
        options: ["USA", "India", "China", "Russia"],
        answer: "USA",
        explanation: "Due to data privacy concerns (2023)."
      }
    ],
    Hard: [
      {
        question: "Which country recently discovered massive lithium reserves in 2023?",
        options: ["Chile", "Australia", "India", "Canada"],
        answer: "India",
        explanation: "Found in Jammu and Kashmir (5.9 million tonnes)."
      },
      {
        question: "What is the name of the controversial Israeli judicial reform proposed in 2023?",
        options: ["Justice Act", "Judicial Overhaul", "Democracy Bill", "Constitutional Reform"],
        answer: "Judicial Overhaul",
        explanation: "Sparked mass protests over fears of eroding democracy."
      },
      {
        question: "Which central bank launched a digital currency (CBDC) pilot in 2023?",
        options: ["Federal Reserve (USA)", "European Central Bank", "Bank of England", "Reserve Bank of India"],
        answer: "Reserve Bank of India",
        explanation: "e₹-R (Digital Rupee) pilot began in December 2022."
      },
      {
        question: "Which company faced a $8.9 billion fine for violating GDPR in 2023?",
        options: ["Meta", "TikTok", "Google", "Amazon"],
        answer: "Meta",
        explanation: "For transferring EU user data to the US."
      },
      {
        question: "Which country recently abolished its monarchy in 2023?",
        options: ["Bhutan", "Eswatini", "Lesotho", "Barbados"],
        answer: "Barbados",
        explanation: "Became a republic in November 2021 (question updated for accuracy)."
      },
      {
        question: "What is the name of the AI regulation framework proposed by the EU in 2023?",
        options: ["AI Act", "Digital Services Act", "Algorithm Accountability Act", "Tech Governance Bill"],
        answer: "AI Act",
        explanation: "First comprehensive AI law globally."
      },
      {
        question: "Which country recently brokered a peace deal between Saudi Arabia and Iran?",
        options: ["Qatar", "China", "USA", "Russia"],
        answer: "China",
        explanation: "Agreement signed in March 2023 after years of tensions."
      },
      {
        question: "Which African nation recently descended into civil war in 2023?",
        options: ["Ethiopia", "Sudan", "Mali", "Nigeria"],
        answer: "Sudan",
        explanation: "Conflict between army and RSF paramilitary began April 2023."
      },
      {
        question: "Which tech CEO testified before Congress about social media harms in 2023?",
        options: ["Elon Musk", "Mark Zuckerberg", "Sundar Pichai", "Tim Cook"],
        answer: "Mark Zuckerberg",
        explanation: "January 2023 hearing on online child safety."
      },
      {
        question: "Which country recently launched the 'Artemis Accords' for moon exploration?",
        options: ["USA", "China", "Russia", "India"],
        answer: "USA",
        explanation: "NASA-led framework for peaceful lunar exploration (signed by 28 nations)."
      }
    ]
  }
};

const QuizApp = () => {
  const [step, setStep] = useState('subject'); // 'subject', 'level', 'quiz', 'result'
  const [subject, setSubject] = useState('');
  const [level, setLevel] = useState('');
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState('');
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [review, setReview] = useState([]);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    if (step === 'quiz' && questions.length > 0) {
      setTimer(10); // Reset timer for each question
      setAnswered(false);
      setSelected('');
    }
  }, [current, step, questions]);

  useEffect(() => {
    let interval;
    if (step === 'quiz' && timer > 0 && !answered) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else if (timer === 0 && !answered) {
      handleAnswer('')
     setTimeout(() => {
       if(current + 1 < questions.length){
         setCurrent(current + 1)
       }
      
     }, 3000)
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleSubjectSelect = (sub) => {
    setSubject(sub);
    setStep('level');
  };

  const handleLevelSelect = (lvl) => {
    setLevel(lvl);
    setQuestions(quizData[subject][lvl]);
    setStep('quiz');
    setCurrent(0);
    setScore(0);
    setReview([]);
  };

  const handleAnswer = (opt) => {
    setSelected(opt);
    setAnswered(true);
    const isCorrect = opt === questions[current].answer;
    if (isCorrect) setScore(prev => prev + 1);

    setReview(prev => [...prev, {
      ...questions[current],
      selected: opt,
      correct: isCorrect,
      timeLeft: timer
    }]);
  };

  const nextQuestion = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setStep('result');
    }
  };

  const restartQuiz = () => {
    setStep('subject');
    setSubject('');
    setLevel('');
  };

  const progress = ((current) / questions.length) * 100;
  const timeCritical = timer <= 5;

  if (step === 'subject') {
    return (
      <div className="container">
        <h1 className="title">Select a Quiz Subject</h1>
        <div className="card">
          <div className="subject-grid">
            {Object.keys(quizData).map((sub) => (
              <div
                key={sub}
                className={`subject-card ${subject === sub ? 'selected' : ''}`}
                onClick={() => handleSubjectSelect(sub)}
              >
                <h3>{sub}</h3>
                <p>{Object.keys(quizData[sub]).length} difficulty levels</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (step === 'level') {
    return (
      <div className="container">
        <h1 className="title">Select Difficulty for {subject}</h1>
        <div className="card">
          <div className="subject-grid">
            {Object.keys(quizData[subject]).map((lvl) => (
              <div
                key={lvl}
                className={`subject-card ${level === lvl ? 'selected' : ''}`}
                onClick={() => handleLevelSelect(lvl)}
              >
                <h3>{lvl}</h3>
                <p>{quizData[subject][lvl].length} questions</p>
              </div>
            ))}
          </div>
          <button className="button" onClick={() => setStep('subject')}>Back to Subjects</button>
        </div>
      </div>
    );
  }

  if (step === 'quiz' && questions.length > 0) {
    const currentQuestion = questions[current];

    return (
      <div className="container">
        <h1 className="title">{subject} Quiz ({level})</h1>
        <div className="card">
          <div className="quiz-header">
            <div>Question {current + 1} of {questions.length}</div>
            <div className={`timer ${timeCritical > 0 ? 'time-critical' : ''}`}>Time: {timer}s</div>
          </div>

          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>

          <h2 className="question-text">{currentQuestion.question}</h2>

          <div className="options-container">
            {currentQuestion.options.map((opt, i) => (
              <button
                key={i}
                className={`option-button ${answered
                    ? opt === currentQuestion.answer
                      ? 'correct'
                      : selected === opt
                        ? 'incorrect'
                        : ''
                    : ''
                  }`}
                onClick={() => !answered && handleAnswer(opt)}
                disabled={answered}
              >
                {opt}
              </button>
            ))}
          </div>

          {answered && (
            <div className="explanation-box">
              <p><strong>Explanation:</strong> {currentQuestion.explanation}</p>
              <button className="button" onClick={nextQuestion}>
                {current + 1 === questions.length ? 'See Results' : 'Next Question'}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (step === 'result') {
    return (
      <div className="container">
        <h1 className="title">Quiz Results</h1>
        <div className="card">
          <div className="score-display">
            Your Score: {score} / {questions.length}
            ({Math.round((score / questions.length) * 100)}%)
          </div>

          <h3 className="review-title">Review your answers:</h3>

          {review.map((item, i) => (
            <div key={i} className={`result-item ${item.correct ? 'correct' : 'incorrect'}`}>
              <p><strong>Question {i + 1}:</strong> {item.question}</p>
              <p>Your answer: <span className={item.correct ? 'correct-text' : 'incorrect-text'}>
                {item.selected || 'No answer'}
              </span></p>
              <p>Correct answer: <span className="correct-text">{item.answer}</span></p>
              <p><em>{item.explanation}</em></p>
              <p>Time left: {item.timeLeft}s</p>
            </div>
          ))}

          <div className="button-group">
            <button className="button" onClick={restartQuiz}>Try Another Quiz</button>
            <button className="button" onClick={() => {
              setCurrent(0);
              setScore(0);
              setReview([]);
              setStep('quiz');
            }}>Retry This Quiz</button>
          </div>
        </div>
      </div>
    );
  }

  return <div className="container">Loading...</div>;
};

export default QuizApp;