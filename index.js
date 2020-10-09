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

function titleCased() {
    return tutorials.map(function(tutorial) {
    let tutArray =  tutorial.split(' ')
    
    
    for (let i = 0; i<tutArray.length; i++) {
     tutArray[i] = tutArray[i].charAt(0).toUpperCase() + tutArray[i].slice(1)
      
    }
    // if (tutArray[1].includes("Oo")) {
    //   let newArray = tutArray[1].split(' ')
    //   newArray[4] = "OO"
    //   newArray.join(' ')
    // }
    
    
    
    return tutArray.join(' ')
    
    
    

  })
}


titleCased()
