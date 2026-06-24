const articles = [
/* ================= ARTICLE 1 ================= */
{
    id: 1,
    title: "Story of the First Website",
    link: "/Story-of-the-First-Website",
    image: "articles_1-header.jpg",
    description: "Discover how the first website created at CERN became the foundation of the World Wide Web.",
    category: "Technology",
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
    link: "/The-Story-of-Minecraft",
    image: "articles_2-header.png",
    description: "How a small indie game became one of the most influential sandbox games in history.",
    category: "Technology",
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
    link: "/Why-Keyboards-use-QWERTY",
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
    link: "/The-Birth-of-Assembly-Language",
    image: "articles_4-header.png",
    description: "How assembly language became the bridge between machine code and human programming.",
    category: "Computing",
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
    link: "/The-Birth-of-Artificial-Intelligence",
    image: "articles_5-header.jpg",
    description: "A simple explanation of how artificial intelligence learns patterns and makes decisions.",
    category: "Computing",
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
    link: "/Why-Gravity-Exists",
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
    link: "/Why-do-we-Dream",
    image: "articles_7-header.jpg",
    description: "An exploration of why humans dream, the science behind it, and how dreams influence memory, emotions, and creativity.",
    category: "Science",
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
    link: "/Mystery-of-the-Kaprekar-Constant",
    image: "articles_8-header.jpg",
    description: "Explore the fascinating Kaprekar constant (6174), a unique number that emerges when repeatedly rearranging and subtracting digits of four-digit numbers.",
    category: "Mathematics",
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
    link: "/The-Race-to-the-Moon",
    image: "articles_9-header.jpg",
    description: "Discover how the Cold War rivalry between the United States and the Soviet Union led to one of humanity’s greatest achievements: landing on the Moon in 1969.",
    category: "History",
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
    link: "/Why-do-we-have-Calendars",
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
    link: "/The-Secret-Life-of-Bees",
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
    link: "/The-Quantum-Future",
    image: "articles_12-header.jpg",
    description: "Explore the future of quantum technology, from quantum computers and communication to breakthroughs that could transform science, medicine, and society.",
    category: "Computing",
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
},

{
    id: 13,
    title: "How Touchscreens Work",
    link: "/How-Touchscreens-Work",
    image: "articles_13-header.jpg",
    description: "Discover how touchscreens work in detail, from capacitive sensing and electrical fields to multi-touch technology and the hidden engineering behind modern smartphones and devices.",
    category: "Technology",
    show: "no",
    keywords: [
        "how touchscreens work",
        "touchscreen technology",
        "capacitive touchscreen",
        "resistive touchscreen",
        "multi touch",
        "touchscreen sensors",
        "how phone screen detects touch",
        "why touchscreens work",
        "touchscreen physics",
        "touchscreen electric field",
        "touch input system",
        "how smartphones detect touch",
        "touchscreen layers",
        "touch controller chip",
        "touchscreen explained"
    ]
},

{
    id: 14,
    title: "What Happens When You Run a Program",
    link: "/What-happens-when-you-run-a-program",
    image: "articles_14-header.png",
    description: "Discover what happens when you run a program, from source code execution to machine instructions, memory allocation, and how the operating system brings software to life.",
    category: "Computing",
    show: "no",
    keywords: [
        "what happens when you run a program",
        "program execution",
        "how programs run",
        "code execution process",
        "compiler vs interpreter",
        "operating system process",
        "cpu fetch decode execute",
        "memory allocation in programs",
        "stack and heap memory",
        "how software runs",
        "program lifecycle",
        "runtime process",
        "machine code execution",
        "programming basics explained",
        "how code becomes machine language"
    ]
},
{
    id: 15,
    title: "Can AI Become Truly Conscious?",
    link: "/Can-AI-become-truly-Conscious",
    image: "article_15-header.jpeg",
    description: "Explore whether AI can ever become truly conscious, how modern AI systems work, and the difference between intelligence, simulation, and awareness in machines.",
    category: "Computing",
    show: "no",
    keywords: [
        "can ai become conscious",
        "ai consciousness",
        "is ai conscious",
        "artificial intelligence consciousness",
        "ai thinking",
        "machine consciousness",
        "do ai have feelings",
        "ai vs human brain",
        "how ai works",
        "neural networks explained",
        "ai awareness",
        "future of ai",
        "strong ai vs weak ai",
        "ai philosophy",
        "hard problem of consciousness"
    ]
},

{
	id: 16,
	title: "What Happens Inside a Black Hole?",
	link: "/What-Happens-inside-a-black-hole",
	image: "articles_16-header.jpg",
	description: "Explore what happens inside a black hole, how they form, what lies beyond the event horizon, and why they remain one of the greatest mysteries in the universe.",
	category: "Science",
	show: "no",
	keywords: [
	"black hole",
	"inside a black hole",
	"what happens inside a black hole",
	"event horizon",
	"black hole singularity",
	"how black holes form",
	"supermassive black hole",
	"hawking radiation",
	"stephen hawking",
	"black hole information paradox",
	"spaghettification",
	"wormholes",
	"time dilation",
	"gravity in black holes",
	"space mysteries",
	"universe mysteries",
	"astronomy",
	"astrophysics",
	"can you survive a black hole",
	"what is a singularity"
    ]
},

/* ================= ARTICLE 17 ================= */
{
    id: 17,
    title: "What are Dark Matter and Dark Energy",
    link: "/What-are-dark-matter-and-dark-energy",
    image: "articles_17-header.jpg",
    description: "Explore dark matter and dark energy, invisible forces that make up most of the universe and drive its expansion.",
    category: "Science",
    show: "no",
    keywords: [
        "dark matter",
        "dark energy",
        "invisible universe",
        "universe expansion",
        "cosmology",
        "astrophysics",
        "missing mass",
        "accelerating universe",
        "cosmic web",
        "space mysteries"
    ]
},

{
    id: 18,
    title: "The Rise and Fall of the Roman Empire",
    link: "/The-Rise-and-Fall-of-the-Roman-Empire",
    image: "articles_18-header.jpg",
    description: "Explore the rise and fall of the Roman Empire, how it shaped modern law, architecture, politics, and why it remains one of the most influential civilizations in history.",
    category: "History",
    show: "no",
    keywords: [
        "roman empire",
        "ancient rome",
        "rise of rome",
        "fall of roman empire",
        "roman civilization",
        "julius caesar",
        "roman republic",
        "roman empire history",
        "colosseum rome",
        "roman architecture",
        "caesar augustus",
        "byzantine empire",
        "roman law system",
        "ancient history",
        "rome empire timeline"
    ]
},

/* ================= ARTICLE 19 ================= */
{
    id: 19,
    title: "The Story of the YouTube",
    link: "/The-story-of-Youtube",
    image: "articles_19-header.jpg",
    description: "Explore how YouTube started as a simple video-sharing platform and grew into a global giant with billions of users, million+ creators, and endless uploads shaping modern internet culture.",
    category: "Technology",
    show: "no",
    keywords: [
        "youtube history",
        "how youtube started",
        "youtube founders",
        "jawed karim",
        "first youtube video",
        "youtube evolution",
        "video sharing platform",
        "youtube growth",
        "billions of views",
        "youtube success story",
        "online video revolution",
        "how youtube became big",
        "content creation platform",
        "youtube milestones"
    ]
},

/* ================= ARTICLE 20 ================= */
{
    id: 20,
    title: "The Story of Football",
    link: "/The-story-of-Football",
    image: "articles_20-header.jpg",
    description: "Explore how football began in ancient civilizations, evolved through chaotic early versions, and became the world's most popular sport with global tournaments and billions of fans.",
    category: "History",
    show: "no",
    keywords: [
        "football history",
        "how football started",
        "origin of football",
        "ancient football games",
        "cuju history",
        "modern football rules",
        "football evolution",
        "fifa world cup history",
        "why football is popular",
        "global sport football",
        "soccer origin",
        "history of soccer",
        "football development",
        "world cup tournament",
        "football popularity growth"
    ]
},

/* ================= ARTICLE 21 ================= */
{
    id: 21,
    title: "The Story of Zero",
    link: "/The-story-of-Zero",
    image: "articles_21-header.jpg",
    description: "Explore how the concept of zero changed mathematics forever, from ancient India to modern computing, and how 'nothing' became one of the most powerful ideas in human history.",
    category: "Mathematics",
    show: "no",
    keywords: [
        "story of zero",
        "history of zero",
        "who invented zero",
        "zero in mathematics",
        "brahmagupta zero",
        "origin of zero",
        "importance of zero",
        "zero concept history",
        "zero in ancient india",
        "mathematical zero meaning",
        "why zero is important",
        "zero and number system",
        "binary system zero",
        "zero discovery",
        "math history zero"
    ]
}

];