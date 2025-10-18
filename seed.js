require('dotenv').config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
    auth: {
        username: process.env.MONGO_USERNAME,
        password: process.env.MONGO_PASSWORD
    },
    authSource: 'admin'
}).then(() => {
    console.log("MongoDB Connected - Seeding Data...");
}).catch(err => console.log("DB Connection Error: " + err));

const techStackSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    logo: String,
    category: String,
    yearCreated: String,
    popularity: String,
    useCase: String
});

const TechStack = mongoose.model("techstacks", techStackSchema);

async function seed() {
    await TechStack.deleteMany({}); // clear old data
    await TechStack.insertMany([
        {
            id: 1,
            name: "Python",
            description: "Python is a high-level, interpreted programming language known for its simplicity and readability. Widely used in data science, AI, web development, and automation.",
            logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
            category: "Programming Language",
            yearCreated: "1991",
            popularity: "⭐⭐⭐⭐⭐ (Top 1)",
            useCase: "AI/ML, Data Science, Web Development, Automation"
        },
        {
            id: 2,
            name: "JavaScript",
            description: "JavaScript is the language of the web, enabling interactive and dynamic web applications. It runs on both client and server side with Node.js.",
            logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
            category: "Programming Language",
            yearCreated: "1995",
            popularity: "⭐⭐⭐⭐⭐ (Top 2)",
            useCase: "Web Development, Mobile Apps, Backend (Node.js)"
        },
        {
            id: 3,
            name: "Java",
            description: "Java is a robust, object-oriented language designed for platform independence. Used extensively in enterprise applications, Android development, and large-scale systems.",
            logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
            category: "Programming Language",
            yearCreated: "1995",
            popularity: "⭐⭐⭐⭐⭐ (Top 3)",
            useCase: "Enterprise Apps, Android, Big Data, Banking Systems"
        },
        {
            id: 4,
            name: "Go (Golang)",
            description: "Go is Google's modern programming language built for speed, simplicity, and concurrency. Perfect for cloud-native applications and microservices.",
            logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
            category: "Programming Language",
            yearCreated: "2009",
            popularity: "⭐⭐⭐⭐ (Rising)",
            useCase: "Cloud Services, DevOps Tools, Microservices, Docker/Kubernetes"
        },
        {
            id: 5,
            name: "Rust",
            description: "Rust is a systems programming language focused on safety, speed, and concurrency. It prevents memory errors without sacrificing performance.",
            logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
            category: "Programming Language",
            yearCreated: "2010",
            popularity: "⭐⭐⭐⭐ (Most Loved)",
            useCase: "System Programming, WebAssembly, Game Engines, Blockchain"
        },
        {
            id: 6,
            name: "TypeScript",
            description: "TypeScript is JavaScript with syntax for types. It adds optional static typing to JavaScript, making code more maintainable and catching errors early.",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
            category: "Programming Language",
            yearCreated: "2012",
            popularity: "⭐⭐⭐⭐⭐ (Fastest Growing)",
            useCase: "Large-scale Web Apps, React/Angular/Vue, Node.js Backend"
        },
        {
            id: 7,
            name: "C++",
            description: "C++ is a powerful general-purpose language with performance close to the hardware. Used for game development, embedded systems, and high-performance applications.",
            logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
            category: "Programming Language",
            yearCreated: "1985",
            popularity: "⭐⭐⭐⭐ (Classic)",
            useCase: "Game Development, Systems Software, Real-time Applications"
        },
        {
            id: 8,
            name: "Ruby",
            description: "Ruby is an elegant, developer-friendly language designed for productivity and simplicity. Powers the Ruby on Rails framework for rapid web development.",
            logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
            category: "Programming Language",
            yearCreated: "1995",
            popularity: "⭐⭐⭐ (Established)",
            useCase: "Web Development (Rails), DevOps Automation, Scripting"
        },
        {
            id: 9,
            name: "PHP",
            description: "PHP is a server-side scripting language designed for web development. Powers a large portion of the internet including WordPress and Facebook.",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
            category: "Programming Language",
            yearCreated: "1995",
            popularity: "⭐⭐⭐⭐ (Still Strong)",
            useCase: "Web Development, CMS (WordPress), E-commerce, APIs"
        }
    ]);
    console.log("✅ Tech Stack Database Seeded Successfully! 🚀");
    process.exit();
}

seed();
