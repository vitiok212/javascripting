const a = 1; const b = 2; const c = 3;  
       
(() => {  
  const b = 5; const c = 6; 
   
  (() => {  
    const b = 8;  
  
    (() => {  
      const a = 7; const c = 9;  
  
      (() => {  
        const a = 1; const c = 8;     
      }) 
      ()
    }) 
    ()
    console.log(`a: ${a}, b: ${b}, c: ${c}`);   
  })
  ()
})
()

// (() => {
//   console.log("test");
// })

// ();

// function artem () {
//   console.log("test");
// }
// const test = artem;

// artem();
// test();