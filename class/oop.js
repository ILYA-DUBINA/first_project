// function Student(name, age) {
//    this.name = name;
//    this.age = age;
//    this.technologies = [];
//    this.status = 'Junior';
   
//    this.setTechnologies = function(technologies) {
//       this.technologies = [
//          ...this.technologies,
//          ...technologies,
//       ];
//    }
//    this.setNewStatus = function(newStatus) {
//       this.status = newStatus;
//    }
// }


// class Student {
//    constructor(name, age){
//       this.name = name;
//       this.age = age;
//       this.technologies = [];
//       this.status = 'Junior';
//    }   
   
//    setTechnologies(technologies) {
//       this.technologies = [
//          ...this.technologies,
//          ...technologies,
//       ];
//    }
//    setNewStatus(newStatus) {
//       this.status = newStatus;
//    }
// }


// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;

//         this.technologies = [];
//         this.status = 'Junior';
//     }

//     setTechnologies(technologies) {
//         this.technologies = [
//             ...this.technologies,
//             ...technologies,
//         ];
//     }

//     setNewStatus(newStatus) {
//         this.status = newStatus;
//     }
// }

// const student = new Student ('Maxim', 20);
// student.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ]);
// student.setNewStatus('Middle');
// console.log(student);

//? ======================================================

// class Person {
//    constructor(name, age){
//       this.name = name;
//       this.age = age;
//    }

//    compareAge(Person){
//       if(Person.age > this.age){
//          alert(`${Person.name} старше, чем ${this.name}`);
//       } else {
//          alert(`${Person.name} младше, чем ${this.name}`);
//       }
//    }
// }

// const person1 = new Person('Максим', 24);
// const person2 = new Person('Светлана', 36);
// const person3 = new Person('Ирина', 23);

// person1.compareAge(person2); // Максим младше, чем Светлана 
// person2.compareAge(person3); // Светлана старше, чем Ирина 
// person3.compareAge(person1); // Ирина младше, чем Максим

//? ======================================================

// class Dictionary {   
//    #name;
//    #words;

//    constructor(name) {
//       this.name = name;
//       this.words = this.#words = {};
//    }

//    set setMainName(name){
//       this.#name = this.name = name;
//    }
//    get mainName() {
//       return this.#name, this.name; 
//    }



//    add(word, description){
//       this.word = word;
//       this.words[this.word] = {};  
//       this.words[this.word]['word'] = word; 
//       this.words[this.word]['description'] = description; 
//       if(this.word in this.words){
//          console.log(this.word);
//          return this.word;
//       }
//    }
//    addNewWord(wordKey, wordObj) {
//       if(wordKey.toString() && typeof wordObj === 'object'){         
//          if(wordKey.length > 8){
//             wordObj.isDifficult = true;
//             return {
//                [`${wordKey}`]: wordObj,                              
//             }
//          } else {
//             return {
//                [`${wordKey}`]: wordObj,                              
//             }
//          }
//       }
//    }
//    remove(word){
//       this.word = word;      
//       delete this.words[this.word];
//    }
//    get(word){
//       this.word = word;
//       return [this.words[this.word]].find((item) => {
//         return item;        
//       });
//    }
//    showAllWords(){
//       Object.values(this.words).forEach((wordItem) => {
//          console.log(`${wordItem.word} - ${wordItem.description}`);
//       });   
//    }   
// }

// class HardWordsDictionary extends Dictionary {   

//    constructor(name){
//       super(name);
//       this.name = name;
//    }

//    add(word, description){        
//       if (!this.words[word]) {
//          this.words[word] = {
//             word,
//             description        
//          }
//          this.addNewWord(word, this.words[word]);
//       }

//    }

//    get allWords(){
//       return  this.words;
//    }

  
// }


// // let obj = {
// //    word: 'word',
// //    description: 'description',
// // }

// // const dictionary = new Dictionary('Толковый словарь');
// // let result = dictionary.addNewWord('ilya', obj);
// // console.log(result);
// // console.log(dictionary);
// // dictionary.add('JavaScript', 'популярный язык программирования');
// // dictionary.add('JavaScript', 'популярный язык программирования');
// // console.log(dictionary);
// // dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
// // console.log(dictionary);
// // dictionary.remove('JavaScript');
// // console.log(dictionary);
// // dictionary.showAllWords();
// // let i = dictionary.get('JavaScript');
// // console.log(i);

// // words.add('js', 'язык программирования');
// // console.log(words);

// const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
    
// hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
    
// hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
    
// hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');
    
// hardWordsDictionary.remove('неологизм');
    
// hardWordsDictionary.showAllWords();
    
// console.log(hardWordsDictionary.mainName); // Сложные слова
// hardWordsDictionary.setMainName = 'Новый Словарь';
// console.log(hardWordsDictionary.mainName); // Новый Словарь
// console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова 
// // дилетант и квант


//? ======================================================

// class Developer {
//    constructor(fullName, age, position){
//       this.fullName = fullName;
//       this.age = age;
//       this.position = position;
//       this.technologies = [];
//    }

//    code(){}

//    learnNewTechnology(...arg){
//       this.technologies.push(...arg);
//    }
// }

// class JuniorDeveloper extends Developer{
//    constructor(fullName, age){
//       super(fullName, age);
//       this.position = 'Junior';
//    }

//    code(){
//       console.log('Junior разработчик пишет код..');
//    }

//    learnNewTechnology(...arg){
//       this.technologies.push('HTML', 'CSS', 'JavaScript', ...arg);
//    }

// }

// class MiddleDeveloper extends Developer{
//    constructor(fullName, age){
//       super(fullName, age);
//       this.position = 'Middle';
//    }

//    code(){
//       console.log('Middle разработчик пишет код..');
//    }

//    learnNewTechnology(...arg){
//       this.technologies.push('HTML', 'CSS', 'JavaScript', 'React', ...arg);
//    }

// }

// class SeniorDeveloper extends Developer{
//    constructor(fullName, age){
//       super(fullName, age);
//       this.position = 'Senior';
//    }

//    code(){
//       console.log('Senior разработчик пишет код..');
//    }

//    learnNewTechnology(...arg){
//       this.technologies.push('HTML', 'CSS', 'JavaScript', 'NodeJS', ...arg);
//    }

// }

// const juniorDeveloper = new JuniorDeveloper('Анастасия', 20)
// const middleDeveloper = new MiddleDeveloper('Игорь', 25)
// const seniorDeveloper = new SeniorDeveloper('Максим', 30)

// juniorDeveloper.code(); // Junior разработчик пишет код... 
// middleDeveloper.code(); // Middle разработчик пишет код…
// seniorDeveloper.code(); // Senior разработчик пишет код... 

// console.log(juniorDeveloper.fullName, juniorDeveloper.age,
// juniorDeveloper.position); // 'Анастасия', 20, 'Junior'
// console.log(middleDeveloper.fullName, middleDeveloper.age,
// middleDeveloper.position); // 'Игорь', 25, 'Middle'
// console.log(seniorDeveloper.fullName, seniorDeveloper.age,
// seniorDeveloper.position); // 'Максим', 30, 'Senior'

//?=======================================================================
class CarService {

   constructor(name, workingHours = DefaultWorkingHours){
      this.name = name;
      this.workingHours = workingHours ; //?   || carService.DefaultWorkingHours
   }

   static DefaultWorkingHours = {
      from: '9:00', 	
      till: '20:00',
   }

   repairCar(carName){
      if(carName.toString() || carName !== ''){
         let firstTime = this.workingHours.from.split(':')[0];
         firstTime = Number(firstTime);         
         let secondTime = this.workingHours.till.split(':')[0];
         secondTime = Number(secondTime);         
         
         let date = new Date();
         let time = date.getHours();

         if(time >= firstTime && time <= secondTime){
            console.log(`Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста`)
         } else {
            console.log('К сожалению, мы сейчас закрыты. Приходите завтра')
         }
      } else {
         console.error('Вам необходимо указать название машины, чтобы ее отремонтировать')
      }
   }

}
const carService = new CarService('RepairCarNow', { from: '8:00', till: '20:00' });
carService.repairCar('BMW');