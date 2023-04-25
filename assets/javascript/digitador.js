document.addEventListener("DOMContentLoaded",()=> {
   new TypeIt("#digitador",{
      speed:100,
   })
   .type("Desenlvovimento Inteligente").pause()
   .delete()
   .type("Um Dev Promissor").pause(1000)
   .delete()
   .type("No caminho para FullStack").pause(1000)
   .delete()
   .type("Programo em HTML/CSS").pause(1000)
   .delete(8)
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