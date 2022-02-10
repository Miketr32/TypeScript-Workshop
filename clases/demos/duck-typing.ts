interface Instructor {
    name: string;
    age: number;
  }
  
  function infoInstructors(inst: Instructor) {
    console.log(`${inst.name} - ${inst.age} years old`);
  }
  
  const noTypeVars = {name: "Franco", age: 26};
  
  infoInstructor(noTypeVar); // "Franco - 26 years old"