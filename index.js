const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCase = str => {
  let strLower = str.toLowerCase()
  let wordArray = strLower.split(" ").map(currentWord => {
    return currentWord[0].toUpperCase() + currentWord.slice(1)
  })
  return wordArray.join(" ")
}

const titleCased = (strings) => {
  strings.map(str => titleCase(str))
}

titleCased(tutorials)
