const publicidadGral = document.querySelector('#publicidad')
const pedirPosts = async () => {
    const respuesta = await
   fetch('./datos.json')
    const buscaPeli = await respuesta.json()

    function elCajondeLasPelis() {   
    buscaPeli.forEach((pelicula) => {
    


    const publicidad = document.createElement('publicidad')
    publicidad.innerHTML = `
    <div class="card img-publici">
    <img src="${pelicula.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h6 class="card-title publi-titulo">${pelicula.nombre}</h5>
      <p class="publi-descripcion">${pelicula.desc}</p>
    </div>
    <div class="card-footer">
    <p>Año de Lanzamiento: ${pelicula.id}</p>
    </div>
  </div>
    `
    publicidadGral.append(publicidad)
    })
   }

      let botonIniciar = document.getElementById("botonIniciar")
      botonIniciar.addEventListener("click", ()=>{
        let laFilmoteca = document.getElementById("laFilmoteca")
        laFilmoteca.innerHTML = `<div class="loader"></div>`
        setTimeout(()=>{
      laFilmoteca.remove()
      const tituloInicial = document.getElementById("tituloInicial")
      tituloInicial.innerHTML = `  <h1>TODA LA FIMOTECA DE LOS MINIONS</h1>`
      elCajondeLasPelis()
    },3000 )
    })
   }

   pedirPosts()
 



