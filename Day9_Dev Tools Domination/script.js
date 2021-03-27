const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('hello i am a %s string!', '🧐')

// Styled %c
console.log('%c I am some greate text', 'font-size:50px; background:red;');

// warning!
console.warn('oh noooo!');

// Error :|
console.error('shit!');

// Info
console.info('crocodiles eat 3-4 people per year');

// Testing (if "false" => console.log)
console.assert(1 != 2, 'you did not select the right element!'); // true -> not shown
console.assert(1 === 2, 'you did not select the right element!'); // false -> shown
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'that is wrong'); // true -> not shown

// clearing
console.clear();

// Viewing DOM Elements
console.log(p); // actual element itself
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`)
    console.log(`this is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('Wes'); // Wes: 1
console.count('Wes'); // Wes: 2
console.count('Wes'); // Wes: 3
console.count('Wes'); // Wes: 4
console.count('Wes'); // Wes: 5

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });
    
console.table(dogs)