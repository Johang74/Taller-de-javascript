const main = () => {
    cambiarColor()

    
}



const cambiarColor = () =>{
    let color = localStorage.getItem("color")
    if (color == 1) {
        cambiarColor1()
    } else {
        if (color == 2) {
            cambiarColor2()

        }if (color == null) {
            cambiarColor1()
        }
        else{
            if (color == 3) {
                cambiarColor3()
            }
            
        }
        
    }
}

const cambiarColor1 = () => {
    let elemento = document.querySelector("link");
 elemento.setAttribute("href","css/style.css")
 localStorage.setItem("color",1)
}

const cambiarColor2 = () => {
    let elemento = document.querySelector("link");
 elemento.setAttribute("href","css/color2.css")
 localStorage.setItem("color",2)
}

const cambiarColor3 = () => {
    let elemento = document.querySelector("link");
 elemento.setAttribute("href","css/color3.css")
 localStorage.setItem("color",3)
}

const ocultar = (id) => {
    elemento = document.getElementById(id)
    elemento.style.display = 'none'
}

const mostrar = () =>{
    elemento = document.querySelectorAll(".ocultar")
    console.log(elemento)
    elemento.forEach(element => {
        element.style.display = '';
    });
    
}

