document.addEventListener("DOMContentLoaded",()=> {
   new TypeIt("#digitador",{
      speed:100,
   })
   .type("Desenlvovimento Inteligente").pause()
   .delete()
   .type("Um Dev Promissor").pause()
   .delete()
   .type("Em busca do FullStack").pause()
   .delete()
   .type("Programo em HTML/CSS").pause()
   .delete(8)
   .pause(500)
   .type("Javascript").pause(500)
   .delete(10)
   .type("Node.js").pause(500)
   .delete(7)
   .type("React")
   .go()
 });