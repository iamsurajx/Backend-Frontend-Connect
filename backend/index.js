import express from "express";
import cors from "cors"
const app = express();
const PORT =2323;

// ============= Middlewares ===============
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' })); // Allow frontend origin

// ================================================

app.get("/", (req, res)=>{
  res.send("<h1>Hello Express.js</h1>");
});

// ============== Array of JOKES ================
const jokes = [
  {
    id: 1,
    title: "Knock Knock Joke",
    content: "Knock knock." +
      "\nWho's there?" +
      "\nLettuce." +
      "\nLettuce who?" +
      "\nLettuce in, it's cold out there!"
  },
  {
    id: 2,
    title: "Punny Joke",
    content: "I tried starting a hot air balloon business, but it never took off."
  },
  {
    id: 3,
    title: "Dad Joke",
    content: "I tried starting a hot air balloon business, but it never took off."
  },
  {
    id: 4,
    title: "Knock Knock Joke 2",
    content: "Knock knock." +
      "\nWho's there?" +
      "\nCan." +
      "\nCan who?" +
      "\nCan you hear me?"
  },
  {
    id: 5,
    title: "Animal Joke",
    content: "Why did the chicken cross the road?" +
      "\nTo get to the other side!"
  },
  {
    id: 6,
    title: "Math Joke",
    content: "Why did the mathematician love baked goods?" +
      "\nBecause they had a lot of pi!"
  },
  {
    id: 7,
    title: "Punny Joke 2",
    content: "I tried starting a fish restaurant, but it was a flop."
  },
  {
    id: 8,
    title: "Knock Knock Joke 3",
    content: "Knock knock." +
      "\nWho's there?" +
      "\nInterrupting." +
      "\nInterrupting who?" +
      "\nInterrupting you!"
  },
  {
    id: 9,
    title: "Dad Joke 2",
    content: "I tried starting a hot air balloon business, but it never took off."
  },
  {
    id: 10,
    title: "Punny Joke 3",
    content: "I tried starting a hot air balloon business, but it never took off."
  }
];
// =====================================

//  Make an api to pass the jokes
app.get("/api/jokes", (req, res)=>{
  res.send(jokes);
})

app.listen(PORT, ()=>{
  console.warn(`LIVE: http://localhost:${PORT}`);
})