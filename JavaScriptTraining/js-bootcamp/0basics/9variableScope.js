// Javascript use Lexical scoping also known as static scoping.
// Global Scope - Defined outside of all code block.
// Local Scope - Defined inside a code block.

//In a scope you can access all variable defined in that scope, or in any parent/ancestor scope.
//Global Scope (varOne)
  //Local Scope (varTwo)
    //Local Scope (varThree)
  //Local Scope (varFour)

  //Variable shadowing - different scope can have same name variables and local scope shadows global scope
  //                     if variable names are same. 
  
  let varOne = 'varOne';

  if(true){
      console.log(varOne);
     
      let varTwo = 'varTwo';
      console.log(varTwo);
     
      let varThree = 'varThree;' 
      if(true){
        console.log('varThree')
      }
   let varFour = 'varFour';
   if(true){
    console.log('varFour')
   }   
  }

  //Leacked Global
  //Here name variable is not defined. It is directly assigned value without declaration.
  //In such situation, the JS search for variable named name till Global Scope and if don't found it,
  //It declares a global variable with name name. It is called Leacked Global.
  //Here Vineesh will be printed in console twice.
  //Global Scope 
    //Local Scope
      //Local Scope
    //Global Scope 

    if(true){

      if(true)
        name = 'Vineesh'
        console.log(name)
    }
    console.log(name)
