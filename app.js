
    // Create Dino Constructor
    function Dino(species, weight, height, diet, where, when, fact) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
    }


    // Create Dino Objects


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
    const human = (function () {

        let name = document.getElementById('name').value;
        let feet = document.getElementById("feet").value;
        let inches = document.getElementById("inches").value;
        let weight = document.getElementById('weight').value;
        let diet = document.getElementById('diet').value;

        function getName() {
            return name;
        }
        function getHeight() {
            feet = Number(feet);
            inches = Number(inches);
            finalHeight = ( feet * 12 ) + inches;
            return finalHeight;
        }
        function getWeight() {
            return weight; 
        }
        function getDiet() {
            return diet;
        }
        return {
            name: getName(),
            height: getHeight(),
            weight: getWeight(),
            diet: getDiet()
        };
    })();


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
document.getElementById('btn').addEventListener('click', (event) => {
    let user = Human(human.name, human.height, human.weight, human.diet);
    console.log(user.name);
});
