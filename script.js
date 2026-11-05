// Complete 100 Questions Database extracted from Question Bank UNIT - 2
const questionsData = [
    { q: "Sustainability in Indian Knowledge Systems mainly emphasizes:", options: ["Harmony between humans and nature", "Exploitation of natural resources", "Industrial expansion", "Urban development"], answer: 0 },
    { q: "Vedic texts view nature as:", options: ["Sacred and life-sustaining", "A resource to be consumed", "Separate from human life", "Economically insignificant"], answer: 0 },
    { q: "Which of the following reflects environmental awareness in Vedic thought?", options: ["Panchamahabhutas", "Industrialization", "Urban planning", "Capitalism"], answer: 0 },
    { q: "Traditional Indian architecture is considered sustainable because it:", options: ["Adapts to climate and environment", "Uses imported materials", "Depends on air-conditioning", "Avoids natural light"], answer: 0 },
    { q: "Vastu Shastra mainly deals with:", options: ["Spatial harmony and energy balance", "Decoration of buildings", "Structural engineering", "Urban commercialization"], answer: 0 },
    { q: "Stepwells (Baolis/Vavs) were primarily built for:", options: ["Water conservation and access", "Storage of grains", "Religious ceremonies only", "Military use"], answer: 0 },
    { q: "Johads are traditional structures used for:", options: ["Rainwater harvesting", "Irrigation through canals", "Flood control dams", "Temple construction"], answer: 0 },
    { q: "Water harvesting systems in ancient India helped in:", options: ["Ensuring water availability during dry seasons", "Increasing water wastage", "Promoting urban flooding", "Reducing agricultural activity"], answer: 0 },
    { q: "Ancient Indian agricultural practices focused on:", options: ["Long-term soil fertility", "Chemical fertilizers", "Monoculture farming", "Mechanized farming"], answer: 0 },
    { q: "Crop rotation was practiced mainly to:", options: ["Improve soil nutrients", "Increase soil erosion", "Reduce crop yield", "Increase pests"], answer: 0 },
    { q: "Organic manure in traditional farming was obtained from:", options: ["Animal and plant waste", "Factories", "Chemical industries", "Imported materials"], answer: 0 },
    { q: "Sacred groves in India were protected to:", options: ["Promote biodiversity conservation", "Increase urban land", "Expand agriculture", "Support industries"], answer: 0 },
    { q: "Terrace farming helped in:", options: ["Preventing soil erosion", "Flooding agricultural land", "Reducing productivity", "Eliminating irrigation"], answer: 0 },
    { q: "Post-Vedic sustainability practices emphasized:", options: ["Resource regeneration", "Resource exhaustion", "Industrial dependence", "Urban expansion"], answer: 0 },
    { q: "Traditional Indian houses were eco-friendly because they used:", options: ["Local materials and designs", "Glass and steel", "Imported construction methods", "Artificial insulation only"], answer: 0 },
    { q: "Environmental ethics in IKS encourage:", options: ["Responsible use of natural resources", "Human dominance over nature", "Rapid industrial growth", "Commercial exploitation"], answer: 0 },
    { q: "Community-based resource management was important because:", options: ["Resources were shared and protected collectively", "It discouraged cooperation", "It reduced environmental awareness", "It promoted inequality"], answer: 0 },
    { q: "Rainwater harvesting was essential in ancient India due to:", options: ["Seasonal rainfall patterns", "Absence of rivers", "Lack of technology", "Excess water availability"], answer: 0 },
    { q: "Environmental sustainability in IKS aims at:", options: ["Long-term ecological balance", "Short-term benefits", "Immediate economic gain", "Rapid modernization"], answer: 0 },
    { q: "Which modern concept aligns closely with traditional sustainability practices?", options: ["Regenerative and circular practices", "Linear economy", "Over-industrialization", "Resource monopolization"], answer: 0 },
    { q: "Indian Knowledge Systems contributed to the pharmaceutical industry mainly through:", options: ["Ayurveda and herbal medicine", "Synthetic drug production", "Imported medical systems", "Chemical-based treatments"], answer: 0 },
    { q: "Traditional Indian agriculture promoted economic sustainability by:", options: ["Use of indigenous seeds and practices", "Excessive use of chemicals", "Dependence on imports", "Industrial monoculture"], answer: 0 },
    { q: "Handicrafts in traditional India were important because they:", options: ["Supported local economies and skills", "Reduced employment", "Encouraged mass industrialization", "Replaced agriculture"], answer: 0 },
    { q: "The Indian textile tradition is best known for:", options: ["Handloom and natural dyes", "Synthetic fabrics", "Machine-only production", "Imported raw materials"], answer: 0 },
    { q: "Khadi and handloom industries reflect IKS values of:", options: ["Eco-friendly and self-reliant production", "Fast fashion", "Luxury consumption", "Industrial dominance"], answer: 0 },
    { q: "Traditional cosmetics in India were mainly prepared using:", options: ["Natural herbs and plant extracts", "Chemical compounds", "Petroleum products", "Artificial fragrances"], answer: 0 },
    { q: "Which sector benefited from IKS knowledge of plant-based formulations?", options: ["Pharmaceuticals", "Mining", "Heavy engineering", "Aviation"], answer: 0 },
    { q: "Eco-friendly innovations in IKS emphasize:", options: ["Sustainable use of natural resources", "Maximum waste generation", "Short-term profit", "Industrial pollution"], answer: 0 },
    { q: "Traditional industries in India were largely based on:", options: ["Community-based production systems", "Centralized factories", "Foreign investment", "Automated machinery"], answer: 0 },
    { q: "Economic practices in Indian Knowledge Systems aimed at:", options: ["Balanced livelihood and sustainability", "Profit maximization alone", "Rapid urbanization", "Resource exploitation"], answer: 0 },
    { q: "Ayurveda originated in:", options: ["Ancient India", "Medieval India", "Modern India", "Colonial India"], answer: 0 },
    { q: "The word ‘Ayurveda’ literally means:", options: ["Science of life", "Science of medicine", "Art of healing", "Path of spirituality"], answer: 0 },
    { q: "Which of the following is NOT one of the Tridoshas?", options: ["Agni", "Vata", "Pitta", "Kapha"], answer: 0 },
    { q: "Vata dosha is primarily associated with:", options: ["Movement and communication", "Digestion and metabolism", "Structure and stability", "Immunity"], answer: 0 },
    { q: "Pitta dosha mainly governs:", options: ["Digestion and metabolism", "Circulation and movement", "Growth and lubrication", "Stability and strength"], answer: 0 },
    { q: "Kapha dosha is related to:", options: ["Structure and immunity", "Heat and transformation", "Movement and respiration", "Digestion only"], answer: 0 },
    { q: "Yoga in Ayurveda primarily aims at:", options: ["Mental and spiritual well-being", "Physical fitness alone", "Competitive performance", "Muscle building"], answer: 0 },
    { q: "Panchakarma in Ayurveda refers to:", options: ["Five cleansing and detoxification therapies", "Five yoga postures", "Five dietary rules", "Five herbal medicines"], answer: 0 },
    { q: "Rejuvenation practices in Ayurveda are known as:", options: ["Rasayana", "Shodhana", "Abhyanga", "Pranayama"], answer: 0 },
    { q: "Ayurvedic healing is considered holistic because it:", options: ["Addresses body, mind, and lifestyle", "Treats symptoms only", "Focuses only on medicines", "Depends on surgery"], answer: 0 },
    { q: "Traditional Knowledge (TK) refers to:", options: ["Knowledge passed through generations within communities", "Modern industrial techniques", "Imported scientific methods", "Digitally generated data"], answer: 0 },
    { q: "TK plays an important role in environmental conservation by:", options: ["Encouraging sustainable use of natural resources", "Promoting resource exploitation", "Supporting industrial pollution", "Ignoring ecological balance"], answer: 0 },
    { q: "Traditional Knowledge contributes to green technologies mainly through:", options: ["Nature-based and low-impact solutions", "High-energy consumption methods", "Chemical-intensive processes", "Large-scale industrial systems"], answer: 0 },
    { q: "Which of the following is an example of TK-based environmental practice?", options: ["Sacred grove protection", "Nuclear power generation", "Space technology", "Heavy industrial manufacturing"], answer: 0 },
    { q: "Traditional water management practices are considered innovative because they:", options: ["Use locally available materials and knowledge", "Require advanced machinery", "Depend on external energy sources", "Are highly expensive"], answer: 0 },
    { q: "Green technologies inspired by TK mainly aim to:", options: ["Reduce environmental impact", "Maximize profits", "Increase resource extraction", "Promote urbanization"], answer: 0 },
    { q: "Community participation is central to TK-based sustainability because:", options: ["Environmental management is collectively practiced", "Knowledge is individually owned", "It reduces cooperation", "It encourages competition"], answer: 0 },
    { q: "Traditional agricultural knowledge supports sustainability by:", options: ["Maintaining soil fertility and biodiversity", "Encouraging monoculture", "Increasing chemical use", "Reducing crop diversity"], answer: 0 },
    { q: "TK-based innovations are often described as eco-friendly because they:", options: ["Work in harmony with nature", "Depend on fossil fuels", "Focus on rapid industrial growth", "Ignore ecological limits"], answer: 0 },
    { q: "The main objective of using TK in environmental conservation is to:", options: ["Ensure long-term ecological balance", "Achieve short-term benefits", "Increase industrial output", "Promote urban expansion"], answer: 0 },
    { q: "The main aim of government initiatives related to Traditional Knowledge is to:", options: ["Preserve and protect indigenous knowledge", "Replace traditional systems", "Promote industrial exploitation", "Encourage foreign technologies"], answer: 0 },
    { q: "The Traditional Knowledge Digital Library (TKDL) was established to:", options: ["Prevent misuse and misappropriation of traditional knowledge", "Promote modern patents only", "Replace classical Indian texts", "Support industrial monopolies"], answer: 0 },
    { q: "TKDL mainly contains information related to:", options: ["Traditional medicinal knowledge of India", "Modern engineering techniques", "Computer science databases", "Space research data"], answer: 0 },
    { q: "The Ministry of AYUSH is responsible for promoting:", options: ["Ayurveda, Yoga, Unani, Siddha, and Homeopathy", "Only allopathic medicine", "Foreign medical systems", "Industrial pharmaceuticals"], answer: 0 },
    { q: "The full form of AYUSH is:", options: ["Ayurveda, Yoga, Unani, Siddha, and Homeopathy", "Agriculture, Yoga, Unani, Science, and Health", "Ayurveda, Yoga, Science, and Health", "Agriculture, Unani, Siddha, and Health"], answer: 0 },
    { q: "The National Innovation Foundation (NIF) supports:", options: ["Grassroots and traditional innovations", "Corporate industrial projects", "Imported technologies", "Large multinational companies"], answer: 0 },
    { q: "Community empowerment through NIF is achieved by:", options: ["Recognizing and encouraging local innovators", "Ignoring traditional practices", "Promoting industrial dominance", "Discouraging indigenous knowledge"], answer: 0 },
    { q: "Geographical Indications (GI) are used to:", options: ["Protect products linked to a specific region", "Promote mass production", "Encourage duplication of goods", "Remove regional identity"], answer: 0 },
    { q: "GI tagging benefits traditional communities by:", options: ["Providing legal protection and economic recognition", "Reducing product value", "Discouraging local production", "Promoting foreign brands"], answer: 0 },
    { q: "Initiatives like TKDL, AYUSH, and NIF collectively help in:", options: ["Preserving and promoting Indian Knowledge Systems", "Eliminating traditional practices", "Complete industrialization", "Loss of indigenous knowledge"], answer: 0 },
    { q: "Aryabhata is best known for his contributions to:", options: ["Mathematics and astronomy", "Modern physics", "Chemistry", "Political science"], answer: 0 },
    { q: "The concept of zero as a number was systematically developed by:", options: ["Brahmagupta", "Euclid", "Archimedes", "Pythagoras"], answer: 0 },
    { q: "The decimal place value system originated in:", options: ["Ancient India", "Ancient Greece", "Ancient Rome", "Medieval Europe"], answer: 0 },
    { q: "Brahmagupta made significant contributions to:", options: ["Algebra and arithmetic", "Biology", "Medicine", "Architecture"], answer: 0 },
    { q: "Trigonometric concepts such as sine (jya) were developed in:", options: ["Ancient Indian mathematics", "Modern Europe", "Chinese mathematics", "Egyptian mathematics"], answer: 0 },
    { q: "Bhaskara I is known for his work mainly on:", options: ["Trigonometry and astronomical calculations", "Mechanical engineering", "Metallurgy", "Medical science"], answer: 0 },
    { q: "Bhaskara II made early contributions related to:", options: ["Calculus-like concepts and algebra", "Quantum mechanics", "Nuclear physics", "Genetics"], answer: 0 },
    { q: "Vedic Mathematics is mainly concerned with:", options: ["Mental calculation techniques", "Industrial mathematics", "Statistical software", "Computer algorithms"], answer: 0 },
    { q: "Ancient Indian mathematics influenced the world through:", options: ["Transmission of numerical and algebraic concepts", "Military expansion", "Industrial revolution", "Colonial administration"], answer: 0 },
    { q: "The overall aim of mathematical innovations in IKS was to:", options: ["Solve practical and astronomical problems", "Promote industrialization", "Encourage commercial trade only", "Support warfare"], answer: 0 },
    { q: "The Iron Pillar of Delhi is famous for its:", options: ["Resistance to corrosion", "Decorative carvings", "Modern construction", "Use of cement"], answer: 0 },
    { q: "The Iron Pillar reflects ancient Indian knowledge of:", options: ["Metallurgy", "Painting", "Architecture only", "Sculpture"], answer: 0 },
    { q: "Wootz steel was well known for its:", options: ["High quality and strength", "Low durability", "Industrial mass production", "Synthetic composition"], answer: 0 },
    { q: "Wootz steel from India was mainly used to make:", options: ["Swords and tools", "Pottery", "Jewellery", "Coins"], answer: 0 },
    { q: "Ancient Indian zinc extraction was significant because it:", options: ["Used distillation techniques", "Relied on imports", "Was accidental", "Was chemically unknown"], answer: 0 },
    { q: "Zinc was first produced on a large scale in:", options: ["Ancient India", "Medieval Europe", "Modern America", "Ancient China"], answer: 0 },
    { q: "Laboratory practices in ancient India were related to:", options: ["Metallurgy and alchemy", "Space science", "Nuclear energy", "Robotics"], answer: 0 },
    { q: "Ancient metallurgical knowledge was transmitted through:", options: ["Texts and practical traditions", "Digital media", "Industrial manuals", "Online platforms"], answer: 0 },
    { q: "The durability of ancient Indian metals shows:", options: ["Advanced scientific understanding", "Lack of experimentation", "Random success", "Foreign influence only"], answer: 0 },
    { q: "Indian metallurgical practices mainly focused on:", options: ["Practical applications", "Decorative use only", "Artistic expression", "Luxury trade"], answer: 0 },
    { q: "Ancient Indian science viewed the universe as:", options: ["Interconnected and holistic", "Random and chaotic", "Mechanically isolated", "Completely materialistic"], answer: 0 },
    { q: "Panchabhutas refer to:", options: ["Five fundamental elements", "Five planets", "Five senses", "Five scriptures"], answer: 0 },
    { q: "The five elements include earth, water, fire, air, and:", options: ["Space", "Metal", "Light", "Energy"], answer: 0 },
    { q: "Panchabhutas represent ancient understanding of:", options: ["Matter and life", "Industry", "Warfare", "Commerce"], answer: 0 },
    { q: "Ancient Indian thinkers recognized gravity as:", options: ["A natural force", "A supernatural event", "An illusion", "A modern concept"], answer: 0 },
    { q: "Celestial mechanics in ancient India dealt with:", options: ["Motion of heavenly bodies", "Chemical reactions", "Human anatomy", "Ocean currents"], answer: 0 },
    { q: "Sage Agastya is associated with early ideas of:", options: ["Electrical energy", "Nuclear power", "Solar panels", "Magnetism"], answer: 0 },
    { q: "Agastya’s model of the battery shows:", options: ["Experimental scientific thinking", "Mythical imagination only", "Industrial technology", "Fictional concepts"], answer: 0 },
    { q: "Vedic cosmology explains the universe in terms of:", options: ["Cyclic time", "Linear time", "Random events", "Industrial growth"], answer: 0 },
    { q: "Ancient Indian timekeeping was based on:", options: ["Astronomical observations", "Mechanical clocks", "Digital systems", "Atomic devices"], answer: 0 },
    { q: "Planetary models in ancient India described:", options: ["Motion of planets", "Chemical reactions", "Earth’s interior", "Weather patterns"], answer: 0 },
    { q: "Solar and lunar phenomena were studied mainly to:", options: ["Understand eclipses and calendars", "Promote astrology only", "Support agriculture alone", "Encourage rituals only"], answer: 0 },
    { q: "Ancient texts mention the velocity of light as:", options: ["A measurable quantity", "An imaginary idea", "A modern discovery only", "A myth"], answer: 0 },
    { q: "Vimaana Shastra is associated with:", options: ["Ancient Indian aeronautics", "Naval engineering", "Civil construction", "Mechanical tools"], answer: 0 },
    { q: "Vimaanas described in ancient texts are:", options: ["Flying machines", "Water vehicles", "Agricultural tools", "Musical instruments"], answer: 0 },
    { q: "Ancient Indian theories of flight indicate:", options: ["Technological imagination and innovation", "Industrial mass production", "Modern aviation only", "Space travel"], answer: 0 },
    { q: "Vimaana concepts emphasize:", options: ["Propulsion and movement", "Decoration and art", "Trade and commerce", "Metallurgy only"], answer: 0 },
    { q: "Ancient propulsion concepts were based on:", options: ["Natural forces and materials", "Fossil fuels", "Electricity grids", "Nuclear energy"], answer: 0 },
    { q: "The study of Vimaanas shows:", options: ["Curiosity about science and technology", "Lack of scientific thought", "Dependence on magic", "Pure mythology only"], answer: 0 },
    { q: "The significance of Vimaana Shastra lies in its:", options: ["Contribution to early technological thought", "Practical aviation use today", "Military dominance", "Industrial production"], answer: 0 }
];

let activeQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;

// Utility: Fisher-Yates Shuffle
function shuffle(array) {
    let arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function startQuiz(count) {
    let shuffledList = shuffle(questionsData);
    activeQuestions = shuffledList.slice(0, count).map(qItem => {
        // Shuffle options for each selected question
        let originalOptions = qItem.options.map((opt, idx) => ({ text: opt, isCorrect: idx === qItem.answer }));
        let shuffledOptions = shuffle(originalOptions);
        return {
            q: qItem.q,
            options: shuffledOptions
        };
    });

    currentQuestionIndex = 0;
    score = 0;
    
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');

    loadQuestion();
}

function loadQuestion() {
    answered = false;
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('feedback').classList.add('hidden');

    const qData = activeQuestions[currentQuestionIndex];
    document.getElementById('question-tracker').innerText = `Question ${currentQuestionIndex + 1} of ${activeQuestions.length}`;
    document.getElementById('score-tracker').innerText = `Score: ${score}`;
    document.getElementById('question-text').innerText = qData.q;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    qData.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt.text;
        btn.onclick = () => selectOption(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function selectOption(selectedIndex, selectedBtn) {
    if (answered) return;
    answered = true;

    const qData = activeQuestions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');
    const feedback = document.getElementById('feedback');

    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (qData.options[idx].isCorrect) {
            btn.classList.add('correct');
        }
    });

    if (qData.options[selectedIndex].isCorrect) {
        score++;
        selectedBtn.classList.add('correct');
        feedback.innerText = "Correct Answer! 🎉";
        feedback.className = "feedback-msg correct-msg";
    } else {
        selectedBtn.classList.add('wrong');
        feedback.innerText = "Incorrect Answer ❌";
        feedback.className = "feedback-msg wrong-msg";
    }

    feedback.classList.remove('hidden');
    document.getElementById('score-tracker').innerText = `Score: ${score}`;
    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < activeQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    
    const percentageVal = ((score / activeQuestions.length) * 100).toFixed(1);
    document.getElementById('final-score').innerText = `Your Score: ${score} / ${activeQuestions.length}`;
    document.getElementById('percentage').innerText = `Percentage: ${percentageVal}%`;
}

function restartQuiz() {
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
}

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    document.getElementById('theme-toggle-btn').innerText = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
}
