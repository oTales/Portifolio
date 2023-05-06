document.addEventListener("DOMContentLoaded",()=> {
   new TypeIt("#digitador",{
      speed:100,
   })
   .type("Desenlvovimento Inteligente").pause()
   .delete()
   .type("Um Dev Promissor").pause(500)
   .delete()
   .type("No caminho para FullStack").pause(500)
   .delete()
   .type("PHP/Laravel").pause(1000)
   .delete(11)
   .pause(500)
   .type("Javascript").pause(500)
   .delete(10)
   .type("Node.js").pause(500)
   .delete(7)
   .type("React").pause(500)
   .delete()
   .type("Tales Dev")
   .go()
 });