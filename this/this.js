// const student = {
//    stack: ['HTML'],
//    level: 1,
//    improveLevel(){
//       this.level++;
//       if(this.level == 2){
//          this.stack.push('CSS');       
//       } else
//       if(this.level == 3){
//          this.stack.push('JavaScript');     
//       } else
//       if(this.level == 4){
//          this.stack.push('React');        
//       } else
//       if(this.level == 5){
//          this.stack.push('NodeJs');        
//       } else
//       if(this.level > 5){
//          alert(`Студент выучил все технологии!`);         
//       }
//       return this;
//    }
// };

// student
//    .improveLevel()
//    .improveLevel()
//    .improveLevel()
//    .improveLevel()
//    .improveLevel();

//? ===========================================================
   
// const dog = {
//    name: 'Чарли',
//    type: 'Собака',
//    makeSound() {
//       return 'Гав-Гав';
//    }
// }

// const bird = {
//    name: 'Петя',
//    type: 'Воробей',
//    makeSound() {
//       return 'Чик-чирик';
//    }
// }

// function makeDomestic(isDomestic) {
//    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
//    // return animal = {
//    //    name: this.name,
//    //    type: this.type,
//    //    isDomestic: isDomestic,
//    //    makeSound: this.makeSound()
//    // }      
//    return {
//       ...this,
//       isDomestic,
//    }
// }

//  const result = makeDomestic.bind(dog, true);
//  console.log(result());
//  const result2 = makeDomestic.call(bird, false);
//   console.log(result2);
//  const result3 = makeDomestic.apply(bird, ['false']);
//   console.log(result3);

//? ===========================================================

// const footballer = {
//    fullName: 'Cristiano Ronaldo',
//    attack(){
//       console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
//    },
//    scoreGoal(sound) {
//       console.log(`${this.fullName} забил гол! Вот это да!`);
//       this.celebrate(sound);
//    },
//    celebrate(sound) {
//       console.log(sound);
//    },
//    goToSubstitution: function(newPlayer) {
//       console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
//    }
// };

// // const attack = footballer.attack.bind(footballer);
// // attack();
// // const score = footballer.scoreGoal.call(footballer, 'Сиииии');
// // const substitute = footballer.goToSubstitution.apply(footballer, ['Paulo Dibala']);


// const attack = footballer.attack;
// const score = footballer.scoreGoal;
// const substitute = footballer.goToSubstitution;

// attack.bind(footballer)();
// score.call(footballer, 'Сиииии');
// substitute.apply(footballer, ['Paulo Dibala']);

//? ===========================================================================
let array = [];

const defender = {
   archer: 33,
   footSoldier: 50,
   cavalry: 40,
   artillery: 10,
}

const attacker = {
   archer: 30,
   footSoldier: 55,
   cavalry: 10,
   artillery: 3, 

   checkChancesToWin(defenderObject = defender){     
      let captureChanceD = 0;

      if(this.archer > defenderObject.archer){
         captureChanceD++;          
      } 
      if(this.footSoldier > defenderObject.footSoldier){
         captureChanceD++;     
      } 
      if(this.cavalry > defenderObject.cavalry){
         captureChanceD++; 
      }  
      if(this.artillery > defenderObject.artillery){
         captureChanceD++;      
      }  
     
      array[0] = captureChanceD; 
      array[1] = Object.keys(defenderObject).length;      

      return array;
   },
   improveArmy(){           
      return Object.keys(this).map((item) => {     
         if(typeof this[item] === 'number'){
            this[item] += 5;         
         }
      })
   },
   attack(defender){      
      this.checkChancesToWin();

      let chanseMax = Object.keys(defender).length;    
      let chanse =  70 / 100 * chanseMax;      

      if(array[0] < chanse){                         
         alert(`Наши шансы равны ${array[0]}/${chanseMax}. Необходимо укрепление!`);   
         this.improveArmy();         
      } else {
         alert(`Мы усилились! Мы несомненно победим! Наши шансы высоки!`);
      }
   }
}

attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление! 
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление! 
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!