import { useState } from "react";
import "./Technologies.css";

import reactLogo from "../assets/react.svg";
import vueLogo from "../assets/vue.png";
import svelteLogo from "../assets/svelte.png";
import nextLogo from "../assets/nextjs.jpg";
import nodeLogo from "../assets/node-js.png";
import postgresLogo from "../assets/postgresql.png";
import redisLogo from "../assets/redis.png";
import jsLogo from "../assets/javascript.png";
import tsLogo from "../assets/typescript.png";
import javaLogo from "../assets/java.png";
import tailwindLogo from "../assets/tailwind.png";
import dockerLogo from "../assets/docker.png";

interface Technology {
  id: number;
  name: string;
  image: string;
  badge: string;
  description: string;
  category: string;
  level: string;
  rating: number;
}

const technologies: Technology[] = [
  {
    id: 1,
    name: "React",
    image: reactLogo,
    badge: "Popular",
    description:
      "The declarative component-based JavaScript library for building modern user interfaces.",
    category: "Frontend",
    level: "Beginner Friendly",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Vue.js",
    image: vueLogo,
    badge: "Versatile",
    description:
      "An approachable, performant and versatile framework for building user interfaces.",
    category: "Frontend",
    level: "Beginner Friendly",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Svelte",
    image: svelteLogo,
    badge: "Fast",
    description:
      "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Next.js",
    image: nextLogo,
    badge: "Full Stack",
    description:
      "The React framework for full-stack web applications with hybrid static and server rendering.",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Node.js",
    image: nodeLogo,
    badge: "Standard",
    description:
      "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    category: "Backend",
    level: "Intermediate",
    rating: 4.8,
  },
  {
    id: 6,
    name: "PostgreSQL",
    image: postgresLogo,
    badge: "Top SQL",
    description:
      "A powerful, open source object-relational database system with proven reliability.",
    category: "Database",
    level: "Intermediate",
    rating: 4.9,
  },
  {
    id: 7,
    name: "Redis",
    image: redisLogo,
    badge: "Cache",
    description:
      "In-memory data structure store used as a database, cache and message broker.",
    category: "Database",
    level: "Intermediate",
    rating: 4.8,
  },
  {
    id: 8,
    name: "JavaScript",
    image: jsLogo,
    badge: "Ubiquitous",
    description:
      "The versatile scripting language powering dynamic behavior across the web.",
    category: "Language",
    level: "Beginner Friendly",
    rating: 4.9,
  },
  {
    id: 9,
    name: "TypeScript",
    image: tsLogo,
    badge: "Essential",
    description:
      "A strongly typed programming language that builds on JavaScript for robust tooling.",
    category: "Language",
    level: "Intermediate",
    rating: 4.9,
  },
  {
    id: 10,
    name: "Java",
    image: javaLogo,
    badge: "Robust",
    description:
      "A secure, object-oriented programming language designed for portability and scale.",
    category: "Language",
    level: "Intermediate",
    rating: 4.6,
  },
  {
    id: 11,
    name: "Tailwind CSS",
    image: tailwindLogo,
    badge: "Modern",
    description:
      "A utility-first CSS framework packed with classes for building custom UI.",
    category: "Styling",
    level: "Beginner Friendly",
    rating: 4.9,
  },
  {
    id: 12,
    name: "Docker",
    image: dockerLogo,
    badge: "Containers",
    description:
      "A platform designed to build, share and run containerized applications reliably.",
    category: "DevOps",
    level: "Intermediate",
    rating: 4.9,
  },
];

const Technologies = () => {
  const [stack, setStack] = useState<Technology[]>([]);

  const addToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (!alreadyAdded) {
      setStack([...stack, technology]);
    }
  };

  const removeFromStack = (id: number) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  return (
    <section className="technologies">

      <div className="technology-heading">
        <h2>Explore the <span>Technologies</span></h2>

        <p>
          Pick technologies to build your ideal development stack.
        </p>
      </div>

      <div className="technology-layout">

        <div className="technology-container">

          {technologies.map((technology) => (
            <div
              className="technology-card"
              key={technology.id}
            >
              <div className="card-top">
                <img
                  src={technology.image}
                  alt={technology.name}
                />

                <span className="badge">
                  {technology.badge}
                </span>
              </div>

              <h3>{technology.name}</h3>

              <p>{technology.description}</p>

              <div className="tags">
                <span>{technology.category}</span>
                <span>{technology.level}</span>
              </div>

              <div className="rating">
                ⭐ {technology.rating}
              </div>

              <button
                className="add-btn"
                onClick={() => addToStack(technology)}
              >
                Add to Stack
              </button>
            </div>
          ))}

        </div>

        {/* Dynamic Stack */}


        <aside className="stack-box">

          <h2>Your Stack</h2>

          <p>
            {stack.length === 0
              ? "No technologies selected yet."
              : `${stack.length} technology selected`}
          </p>

          {stack.map((technology) => (
            <div
              className="selected-item"
              key={technology.id}
            >
              <img
                src={technology.image}
                alt={technology.name}
              />

              <strong>{technology.name}</strong>

              <br/>

              <button
                onClick={() => removeFromStack(technology.id)}
              >
                ×
              </button>
              <div>  
                 <button className="onClick">Remove All</button></div>
              
            </div>
          ))}

          {stack.length === 0 && (
            <button className="empty-btn">
              Your stack is empty
            </button>
          )}

        </aside>

      </div>
    </section>
  );
};

export default Technologies;
