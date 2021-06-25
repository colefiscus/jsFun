const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { books } = require('./datasets/books');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');

// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {

    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']

    const orangeCats = kitties.filter(cat => cat.color === 'orange');
    const result = orangeCats.map(cat => cat.name);
    return result;

    // Annotation: 
    // I have an array of objects.
    // Each object is a cat that has properties of name, age, and color.
    // I want an array of just the names of cats that only hold the color 'orange' under the color property.
    // I will try the filter method to first filter out the cats that aren't orange.
    // I will then use the map method to return an array of only the names of the remaining cat objects.
  },

  sortByAge() {
    const result = kitties.sort((a, b) => b.age - a.age);
    return result;

    // Annotation:
    // I have an array of objects of cats.
    // I want an array of objects of identical cat objects except sorted by descending age.
    // I will use the sort method on the age property of the cat objects to sort the cats by age.
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    // I have an array of cat objects.
    // I want to return an array of cat objects that have an age property that has been increased by 2 for each cat object.
    // I will try the forEach method and return the original, altered array.

    kitties.forEach(cat => cat.age = cat.age + 2);
    return kitties;
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    // I have an array of objects each representing a club with its members.
    // I want object with keys of the names of people whose values are the clubs that that person is in.
    // I will most likely use a reduce method, starting with an empty object.
    // On each iteration over the clubs array, I will access the nested members array and test if each name in the array exists already in the final object.
    // If not, I will add the key along with the value of the club that is being iterated over.

    const result = clubs.reduce((acc, club) => {
      club.members.forEach(member => {
        if (!acc[member]) {
          acc[member] = [club.club];
        } else {
          acc[member].push(club.club);
        }
      });
      return acc;
    }, {});
    return result;
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    // I have an array of objects with each representing a mod, with keys of mod, number of students, and number of instructors.
    // I want an array of objects with keys of the mod and value of the mod number and a key of studentsPerInstructor with an average calculated for the value.
    // I will try to use the map method to create a new object for each iteration.
    // The mod key I will just use the mod value that exists.
    // The studentsPerInstructor key I will calculate the avg and in the end I will return the new array.
    

    const result = mods.map(mod => {
      return {
        mod: mod.mod, 
        studentsPerInstructor: (mod.students / mod.instructors)
      };
    });
    return result;
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    // I have an array of cake objects, with keys of cakeFlavor, filling, frosting, toppings (array), and inStock (number).
    // I want to return an array of cake objects that only list the flavor of the cake and the number of cakes inStock.
    // I will use the map method to create a new array, using the existing cakeFlavor and inStock key-value pairs.

    const result = cakes.map(cake => {
      return {
        flavor: cake.cakeFlavor,
        inStock: cake.inStock
      };
    });
    return result;
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    // I have the same array of cake objects.
    // I want to return an array of identical cake objects, but only including the cakes that are inStock (> 0)
    // I will use the filter method to make a new array of cakes that are inStock and return that array.

    const result = cakes.filter(cake => {
      return cake.inStock > 0;
    });
    return result;
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    // I have the same array of cake objects. 
    // I want to return an integer of the total amount of cakes inStock.
    // I will use the reduce method, starting at 0, and add the cake.inStock value on each iteration of the cakes array. Then return that final acc value.

    const result = cakes.reduce((total, cake) => {
      return total + cake.inStock;
    }, 0);
    return result;
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    // I have the same cake array.
    // I want to return an array of all unique toppings that exist in the cake array (no duplicates).
    // I will use the reduce method, starting with an empty array.
    // On each iteration, I will iterate over the toppings array and check if the acc already includes each topping.
    // I will return the final array after going through each cake.

    const result = cakes.reduce((acc, cake) => {
      cake.toppings.forEach(topping => {
        if (!acc.includes(topping)) {
          acc.push(topping);
        }
      });
      return acc;
    }, []);
    return result;
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    // I have the same cake array.
    // I want to return an object with keys of each topping, and values of integers - the number of individual toppings needed to buy.
    // I will need to use the reduce method.
    // I will iterate over each cake object and iterate over the toppings array.
    // If a topping doesn't exist in the acc as a key, I will add it along with the value seen in the toppings array.
    // If it does exist I will add the the value that exists in the acc.

    const result = cakes.reduce((acc, cake) => {
      cake.toppings.forEach(topping => {
        if (!acc[topping]) {
          acc[topping] = 1;
        } else {
          acc[topping]++;
        }
      });
      return acc;
    }, {});
    return result;
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    // I have an array of classroom objects, with keys of roomLetter, program, and capacity.
    // I want to return an array of objects of identical objects, but only with the objects that are FE programs.
    // I will try the filter method to create a new array of only classroom objects that are FE.

    const result = classrooms.filter(classroom => classroom.program === 'FE');
    return result;
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    // I have the same array of classroom objects.
    // I want to return an object with two key-value pairs - feCapacity & beCapacity with values of the total number of capacity for each program.
  
    const capacities = {
      feCapacity: 0,
      beCapacity: 0
    };
    classrooms.forEach(classroom => {
      if (classroom.program === 'FE') {
        capacities.feCapacity += classroom.capacity;
      } else if (classroom.program === 'BE') {
        capacities.beCapacity += classroom.capacity;
      }
    });
    return capacities;
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    // I have the same array of classroom objects.
    // I want to return an array of the same classroom objects, but sorted by their capacity from lowest to greatest.
    // I will need to use the sort method on the capacity property to sort the entire objects based on that property.

    const result = classrooms.sort((a, b) => a.capacity - b.capacity);
    return result;
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']

    // I have an array of book objects with key-value pairs of title, author, genre, and year published.
    // I want to return an array of just book title strings that are from book objects that are not of the horror or true crime genre.
    // I could do a filter + map, but I think I could also do all of that in a single reduce.
    // Either way, I will need to iterate over the books array, check the genre of the book, then add the book title to the new array if the genre is not horror/true crime.

    const result = books.reduce((acc, book) => {
      if (book.genre !== 'Horror' && book.genre !== 'True Crime') {
        acc.push(book.title);
      }
      return acc;
    }, []);
    return result;
  },

  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    // I have the same array of book objects.
    // I want to return an array of objects with key-value pairs of title and year, but only the books that were published in the 90's and 00's.
    // I will want to use reduce using the same title and year properties.
    // On each iteration I will want to check the published property to check if the year is between 1990 and 2009.
    // Only add the new object if that condition has been met.

    const result = books.reduce((acc, book) => {
      if (book.published > 1989 && book.published < 2010) {
        const newBook = {
          title: book.title,
          year: book.published
        };
        acc.push(newBook);
      }
      return acc;
    }, []);
    return result;
  }

};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    // I have an array of weather objects.
    // I want to return an array on integers - the averages for each weather object between their high and low.
    // I will try a map method to create an array while averaging the two values on each iteration.

    const result = weather.map(city => {
      return (city.temperature.high + city.temperature.low) / 2;
    });
    return result;
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    // I have the same array of weather objects.
    // I want to return an array of strings that say 'CITY is sunny.' / 'CITY is mostly sunny.' And only include the sunny/mostly sunny cities.
    // I could do a filter + map, but it could all be done in one reduce I think.
    // On every iteration, check to see if the type property is 'sunny' or 'mostly sunny'.
    // If it does, add a new string with an interpolation of the location and the type.

    const result = weather.reduce((acc, city) => {
      if (city.type === 'sunny' || city.type === 'mostly sunny') {
        let newCity = `${city.location} is ${city.type}.`;
        acc.push(newCity);
      }
      return acc;
    }, []);
    return result;
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    // I have the same array of weather objects.
    // I want to return a single weather object, same format, but only the one with the highest humidity.
    // I will use the sort method to arrange the weather objects in descending order based on humidity.
    // Then I will return the 0 index of the resulting array.

    const result = weather.sort((a, b) => b.humidity - a.humidity);
    return result[0];
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    // I have an array of parks objects with keys of name, visited, location, and activities (array).
    // I want to return an object with two keys - parksToVisit (where visited is false) and parksVisited (visited is true), with an array of park names as the value.
    // I will want to use a reduce.
    // On each iteration I will need to check the visited property and add the park name to either the created parksToVisit array or parksVisited array.
    // I will first try to create the keys in the acc.

    const result = nationalParks.reduce((acc, park) => {
      if (park.visited === true) {
        acc.parksVisited.push(park.name);
      } else {
        acc.parksToVisit.push(park.name);
      }
      return acc;
    }, {
      parksToVisit: [],
      parksVisited: []
    });
    return result;
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]

    // I have the same array of park objects.
    // I want to return an array of objects whose key is the location and the value is the national park.
    // I will try a map method.
    // On each iteration I will return a new object with the correct key-value pair taken from the original object.

    const result = nationalParks.map(nationalPark => {
      const newPark = {
        [nationalPark.location]: nationalPark.name
      };
      return newPark;
    });
    return result;
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    // I have the same array of park objects.
    // I want to return an array of all activies that exist inside all park objects.
    // I will want to use reduce.
    // On each iteration, I will want to iterate over the activities array and check if each activity already exists in the acc.

    const result = nationalParks.reduce((activities, park) => {
      park.activities.forEach(activity => {
        if (!activities.includes(activity)) {
          activities.push(activity);
        }
      });
      return activities;
    }, []);
    return result;
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    // I have an array of brewery objects with key-value pairs of name, neighborhood, and beers (array of objects).
    // I want to return the total number of unique beers from all breweries.
    // I will want to use a reduce method.
    // On each iteration, I will add the length of the beers array to the accumulator until I've gone through all breweries.

    const result = breweries.reduce((total, brewery) => {
      return total + brewery.beers.length;
    }, 0);
    return result;
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    // I have the same array of breweries objects.
    // I want to return an array of different brewery objects with the key-value pairs of the name and beerCount which is a number of how many beers that brewery has.
    // I will try to use a map method.
    // On each iteration I will return a new object with the same name property + a beerCount property with a value of the length of the beers property.

    const result = breweries.map(brewery => {
      return {
        name: brewery.name,
        beerCount: brewery.beers.length
      };
    });
    return result;
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    // I have the same array of beer objects.
    // I want to return an individual beer object from the beers array from a single brewery - the single beer with the single highest ABV.
    // I will want to create a new function that takes in an array to sort based on the objects abv value then returns the beer object with the highest - the 0 index.
    // Then I will use that function first on all breweries, then again on the resulting array of the strongest beer from each brewery to get the strongest beer from all breweries.

    const findStrongestBeer = (arr) => {
      const sortedBeers = arr.sort((a, b) => b.abv - a.abv);
      return sortedBeers[0];
    };

    const strongBeers = breweries.map(brewery => findStrongestBeer(brewery.beers));

    const result = findStrongestBeer(strongBeers);
    return result;
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    // I have two arrays of objects - instructors with properties of name, module, and teaches (array) AND cohorts with properties of cohort, module, studentCount, and curriculum (array).
    // I want to return an array of instructor objects with properties of name and studentCount.
    // I will have to iterate over the instructors array, and for every instructor I will have to iterate over the cohorts array.
    // I'll try a map + forEach method combo - if a cohort.module matches the instructor.module, I will return an object with the instructor.name: cohort.studentCount until I've gone through each instructor.

    const matchingInstructors = [];
    instructors.map(instructor => {
      cohorts.forEach(cohort => {
        if (instructor.module === cohort.module) {
          const match = {
            name: instructor.name,
            studentCount: cohort.studentCount
          };
          matchingInstructors.push(match);
        }
      });
    });
    return matchingInstructors;
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    // I have the same arrays of objects.
    // I want to return an object with keys of cohort${cohortNumber} and a value of how many students per teacher there are in each cohort.
    // I'm going to try to iterate over the cohorts array with reduce. On each iteration I'm going to filter the instructors array for instrucors on the correct module.
    // I will add to the acc the cohort + the cohort number for the key with the value of the length of the filtered instructors array over the studentCount.

    const result = cohorts.reduce((acc, cohort) => {
      const filteredInstructors = instructors.filter(instructor => {
        return instructor.module === cohort.module;
      });
      acc[`cohort${cohort.cohort}`] = cohort.studentCount / filteredInstructors.length;
      return acc;
    }, {});
    return result;
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    // I have the same arrays of cohort and instructor objects.
    // I want to return an object, with keys of instructor names and values of arrays holding the module integers that each instructor CAN teach based on the skills they have.
    // The final values will depend on the skills an instructor has and what matches in the curriculum array inside of each cohort array.
    // I will try iterating over the instructor array using reduce, and for every iteration, I will iterate over the cohorts array and iterate over the curriculum array to test whether each subject is included in the current instructors skills.
    // If so, I will add that cohort number to the final array value.

    const result = instructors.reduce((acc, instructor) => {
      cohorts.forEach(cohort => {
        cohort.curriculum.forEach(subject => {
          if (instructor.teaches.includes(subject) && !acc[instructor.name]) {
            acc[instructor.name] = [cohort.module];
          } else if (instructor.teaches.includes(subject) && !acc[instructor.name].includes(cohort.module)) {
            acc[instructor.name].push(cohort.module);
          }
        });
      });
      return acc;
    }, {});
    return result;
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
