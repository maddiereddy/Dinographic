
    // Create Dino Constructor
class Dino {
    constructor(species, weight, height, diet, where, when, fact) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
    }

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    compareHeight(humanHeight) {
        if (this.height > humanHeight) {
            return `The ${this.species} is taller than you!`;
        }
        else if (this.height < humanHeight) {
            return `The ${this.species} is shorter than you!`;
        }
        else {
            return `The ${this.species} is the same height as you!`;
        }
    }
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    compareWeight(humanWeight) {
        if (this.weight > humanWeight) {
            return `The ${this.species} is heavier than you!`;
        }
        else if (this.weight < humanWeight) {
            return `The ${this.species} is lighter than you!`;
        }
        else {
            return `The ${this.species} is the same weight as you!`;
        }
    }
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    compareDiet(humanDiet) {
        if (this.diet..toLowerCase() === humanDiet.toLowerCase()) {
            return `The ${this.species} and you have the same diet!`;
        }
        else {
            return `The ${this.species} and you have different diets!`;
        }
    }
}


    // Create Dino Objects
    const dinos = [];

    Dinos.map(data => {
        const dino = new Dino(
            data.species,
            data.weight,
            data.height,
            data.diet,
            data.where,
            data.when,
            data.fact
        );
        dino.image = `./images/${this.species.toLowerCase()}.png`;
        dinos.push(dino);
    });


    // Create Human Object
    function Human (name, weight, height, diet) {
        return {
            name: name,
            weight: weight,
            height: height,
            diet: diet
        };
    }

    // Use IIFE to get human data from form
    function getUserInput() {
        const input = (function () {

            let name = document.getElementById("name").value;
            let feet = document.getElementById("feet").value;
            let inches = document.getElementById("inches").value;
            let weight = document.getElementById("weight").value;
            let diet = document.getElementById("diet").value;
            let image = `./images/human.png`;

            function getName() {
                return name;
            }
            function getHeight() {
                feet = Number(feet);
                inches = Number(inches);
                let heightInInches = ( feet * 12 ) + inches;
                return heightInInches;
            }
            function getWeight() {
                return weight; 
            }
            function getDiet() {
                return diet;
            }
            function getImage() {
                return image;
            }
            return {
                name: getName(),
                height: getHeight(),
                weight: getWeight(),
                diet: getDiet(),
                image: getImage()
            };
        })();
        return input;
    }

    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
document.getElementById('btn').addEventListener('click', (event) => {
    event.preventDefault;
    const human = getUserInput();
    //console.log(`Name: ${human.name}; Weight: ${human.weight}; Height: ${human.height}; Diet: ${human.diet}`);
    //console.log(`Name: ${dinos[0].species}; Weight: ${dinos[0].weight}; Height: ${dinos[0].height}; Diet: ${dinos[0].diet}`);
    
    // TODO: prepare function call
    // TODO: display infographic function call
});
