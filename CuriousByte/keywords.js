const articles = [

/* ================= ARTICLE 1 ================= */
{
    id: 1,
    title: "Story of the First Website",
    link: "article_1.html",
    image: "articles_1-header.jpg",
    description: "Discover how the first website created at CERN became the foundation of the World Wide Web.",
    category: "Internet",
    show: "yes",
    keywords: [
        "first website",
        "world wide web origin",
        "tim berners lee",
        "cern website",
        "internet history",
        "how web started",
        "first webpage ever",
        "birth of internet",
        "www invention",
        "early web system",
        "history of websites"
    ]
},

/* ================= ARTICLE 2 ================= */
{
    id: 2,
    title: "The Story of Minecraft",
    link: "article_2.html",
    image: "articles_2-header.png",
    description: "How a small indie game became one of the most influential sandbox games in history.",
    category: "Games",
    show: "yes",
    keywords: [
        "minecraft story",
        "minecraft history",
        "markus persson",
        "notch minecraft",
        "how minecraft started",
        "minecraft evolution",
        "sandbox game origin",
        "mojang minecraft",
        "minecraft success story",
        "why minecraft popular",
        "gaming history minecraft"
    ]
},

/* ================= ARTICLE 3 ================= */
{
    id: 3,
    title: "Why Keyboards Use QWERTY",
    link: "article_3.html",
    image: "articles_3-header.jpg",
    description: "The surprising history behind the QWERTY keyboard layout and why it still exists today.",
    category: "Technology",
    show: "yes",
    keywords: [
        "qwerty keyboard",
        "keyboard layout history",
        "why qwerty exists",
        "typewriter keyboard",
        "christopher sholes",
        "keyboard invention",
        "why keyboard not alphabetical",
        "typing system history",
        "qwerty explanation",
        "computer keyboard origin",
        "how keyboards were designed"
    ]
},

/* ================= ARTICLE 4 ================= */
{
    id: 4,
    title: "The Birth of Assembly Language",
    link: "article_4.html",
    image: "articles_4-header.png",
    description: "How assembly language became the bridge between machine code and human programming.",
    category: "Programming",
    show: "yes",
    keywords: [
        "assembly language",
        "machine code history",
        "low level programming",
        "how assembly works",
        "programming languages evolution",
        "binary to assembly",
        "cpu instructions",
        "mnemonics programming",
        "computer architecture basics",
        "early programming history",
        "what is assembly language"
    ]
},

/* ================= ARTICLE 5 ================= */
{
    id: 5,
    title: "The birth of Artificial Intelligence",
    link: "article_5.html",
    image: "articles_5-header.jpg",
    description: "A simple explanation of how artificial intelligence learns patterns and makes decisions.",
    category: "AI",
    show: "yes",
    keywords: [
        "artificial intelligence",
        "how ai works",
        "machine learning basics",
        "ai learning process",
        "neural networks explained",
        "deep learning simple",
        "what is ai",
        "ai training data",
        "pattern recognition ai",
        "how machines learn",
        "ai explained simply"
    ]
},

/* ================= ARTICLE 6 ================= */
{
    id: 6,
    title: "Why Gravity Exists",
    link: "article_6.html",
    image: "articles_6-header.jpg",
    description: "A simple explanation of gravity, how it works, and why everything in the universe is pulled together.",
    category: "Science",
    show: "yes",
    keywords: [
        "gravity explained",
        "what is gravity",
        "why gravity exists",
        "how gravity works",
        "isaac newton gravity",
        "einstein general relativity",
        "spacetime curvature",
        "earth gravity force",
        "why things fall down",
        "science of gravity",
        "physics gravity basics",
        "mass and gravity",
        "gravitational force explanation"
    ]
},

/* ================= ARTICLE 7 ================= */
{
    id: 7,
    title: "Why Do We Dream",
    link: "article_7.html",
    image: "articles_7-header.jpg",
    description: "An exploration of why humans dream, the science behind it, and how dreams influence memory, emotions, and creativity.",
    category: "Psychology",
    show: "yes",
    keywords: [
        "why do we dream",
        "science of dreams",
        "dreams explained",
        "REM sleep dreams",
        "Freud dream theory",
        "modern neuroscience dreams",
        "memory and dreams",
        "emotions in dreams",
        "dream psychology",
        "purpose of dreaming",
        "sleep and dreaming",
        "brain activity during dreams",
        "dream mystery"
    ]
},

/* ================= ARTICLE 8 ================= */
{
    id: 8,
    title: "The Mystery of Kaprekar Constant",
    link: "article_8.html",
    image: "articles_8-header.jpg",
    description: "Explore the fascinating Kaprekar constant (6174), a unique number that emerges when repeatedly rearranging and subtracting digits of four-digit numbers. Discover the mathematical curiosity behind why this process always converges to 6174.",
    category: "Math",
    show: "yes",
    keywords: [
        "Kaprekar constant",
        "6174 mystery",
        "Kaprekar number",
        "math curiosity",
        "number theory",
        "digit rearrangement",
        "mathematical patterns",
        "D.R. Kaprekar",
        "math tricks",
        "math puzzles"
    ]
},

/* ================= ARTICLE 9 ================= */
{
    id: 9,
    title: "The Race to the Moon",
    link: "article_9.html",
    image: "articles_9-header.jpg",
    description: "Discover how the Cold War rivalry between the United States and the Soviet Union led to one of humanity’s greatest achievements: landing on the Moon in 1969.",
    category: "Space",
    show: "yes",
    keywords: [
        "moon landing history",
        "space race",
        "apollo 11 mission",
        "cold war space exploration",
        "Neil Armstrong",
        "Buzz Aldrin",
        "NASA Apollo program",
        "Soviet space program",
        "moon exploration",
        "space history"
    ]
},

/* ================= ARTICLE 10 ================= */
{
    id: 10,
    title: "Why Do We Have Calendars",
    link: "article_10.html",
    image: "articles_10-header.jpg",
    description: "Discover why calendars exist, how ancient civilizations tracked time, and why modern society depends on calendars to organize life, science, and history.",
    category: "History",
    show: "yes",
    keywords: [
        "why do we have calendars",
        "history of calendars",
        "calendar origin",
        "gregorian calendar",
        "julian calendar",
        "ancient timekeeping",
        "lunar calendar",
        "solar calendar",
        "why leap years exist",
        "time measurement history",
        "how calendars were invented",
        "egyptian calendar",
        "roman calendar",
        "tracking time ancient civilizations"
    ]
},

/* ================= ARTICLE 11 ================= */
{
    id: 11,
    title: "The Secret Life of Bees",
    link: "article_11.html",
    image: "articles_11-header.jpg",
    description: "Discover the secret life of bees, their role in pollination, hive society, communication, and the challenges they face in the modern world.",
    category: "Nature",
    show: "no",
    keywords: [
        "bees",
        "honeybees",
        "pollination",
        "bee colony",
        "queen bee",
        "worker bees",
        "drone bees",
        "waggle dance",
        "bee communication",
        "colony collapse disorder",
        "bee threats",
        "bee protection",
        "urban beekeeping",
        "bee culture",
        "importance of bees",
        "save the bees",
        "bee ecology",
        "bee biodiversity"
    ]
},

/* ================= ARTICLE 12 ================= */
{
    id: 12,
    title: "The Quantum Future",
    link: "article_12.html",
    image: "articles_12-header.jpg",
    description: "Explore the future of quantum technology, from quantum computers and communication to breakthroughs that could transform science, medicine, and society.",
    category: "Future",
    show: "no",
    keywords: [
        "quantum future",
        "quantum computing",
        "quantum communication",
        "quantum sensors",
        "quantum mechanics",
        "quantum technology",
        "quantum advantage",
        "quantum supremacy",
        "quantum breakthroughs",
        "future of computing",
        "quantum cryptography",
        "quantum research",
        "quantum revolution",
        "quantum innovation",
        "quantum science"
    ]
}

];
