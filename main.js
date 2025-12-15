const grid = new Muuri('.grid',{
    layout: {
        rounding: false 
    }
});

  
// Agregamos los listeners de los enlaces para filtrar por categoria.
window.addEventListener('load', () => {
    grid.refreshItems().layout();     
    document.getElementById('grid').classList.add('imagenes-cargadas')
    document.getElementById('header').classList.add('visible')

    const enlaces = document.querySelectorAll('#categories a');
    enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('active'))
            evento.target.classList.add('active');


            const categoria = evento.target.innerHTML.toLowerCase(); 
            categoria === 'todos los proyectos' || categoria === 'all projects' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`)
        })
    }); 

    
    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.grid .item img').forEach((elemento) =>{
        
        elemento.addEventListener('click',() =>{
            overlay.classList.add('activo');
            const ruta = elemento.getAttribute('src');
            const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
            document.querySelector('#overlay img').src = ruta;
            document.querySelector('#overlay .descripcion').innerHTML = descripcion;
        })

    });

});

