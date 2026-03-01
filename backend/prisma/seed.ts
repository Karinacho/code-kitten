import "dotenv/config";
import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  // Create some topics
  const css = await prisma.topic.upsert({
    where: { name: "CSS" },
    update: {},
    create: { name: "CSS" },
  });

  const js = await prisma.topic.upsert({
    where: { name: "JavaScript" },
    update: {},
    create: { name: "JavaScript" },
  });

  // Create a quiz-like QuestionArea with flashcards
  const cssBasics = await prisma.questionArea.create({
    data: {
      title: "What is CSS?",
      summary: "Understand what CSS is and how it styles web pages.",
      learningText:
        "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of HTML documents.",
      codeSnippet: `h1 { color: rebeccapurple; font-size: 2rem; }`,
      topics: {
        connect: [{ id: css.id }],
      },
      flashcards: {
        create: [
          {
            question: "What does CSS stand for?",
            answer: "Cascading Style Sheets",
            topic: { connect: { id: css.id } },
          },
          {
            question: "Which HTML tag is used to link an external CSS file?",
            answer: "<link>",
            topic: { connect: { id: css.id } },
          },
        ],
      },
    },
  });

  // Another QuestionArea that spans multiple topics
  await prisma.questionArea.create({
    data: {
      title: "DOM Manipulation Basics",
      summary: "How JavaScript interacts with the DOM.",
      learningText:
        "The DOM represents the page so that programs can change the document structure, style, and content.",
      topics: {
        connect: [{ id: js.id }, { id: css.id }],
      },
      flashcards: {
        create: [
          {
            question: "What method is used to select an element by CSS selector?",
            answer: "document.querySelector()",
            topic: { connect: { id: js.id } },
          },
        ],
      },
    },
  });

  console.log(`Seeded topics, question areas, and flashcards. First quiz id: ${cssBasics.id}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

