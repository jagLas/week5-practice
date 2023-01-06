function countScores(people) {
    const scores = {};
    people.forEach(person => {
        scores[person.name] = person.score
    })

    return scores;
}

//time O(n) space O(n)


// Example 1:
const ppl = [
    { name: "Anthony", score: 10 },
    { name: "Fred", score : 10 },
    { name: "Anthony", score: -8 },
    { name: "Winnie", score: 12 }
  ];
  console.log(countScores(ppl)); // => { Anthony: 2, Fred: 10, Winnie: 12 }
  
  // Example 2
  const peeps = [
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 }
  ];
  
  console.log(countScores(peeps)); // => { Anthony: 4, Fred: 4, Winnie: 6 }