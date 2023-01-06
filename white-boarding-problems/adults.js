function adults(people) {
    const names = [];
    people.forEach(person => {
        if (person.age >= 18) {
            names.push(person.name);
        }
    })

    return names;
}

//time O(n) space O(n);

const ppl = [
    {name: 'John', age: 20},
    {name: 'Jim', age: 13},
    {name: 'Jane', age: 18},
    {name: 'Bob', age: 7}
  ];
  debugger
  console.log(adults(ppl)); // => [ 'John', 'Jane' ]