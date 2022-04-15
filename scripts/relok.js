

function jergaBinariaRelok() {  

        let time = new Date();

        let year = time.getFullYear().toString();
        let month = time.getMonth() + 1;
        let day = time.getDate();
        let hour = time.getHours().toString();
        let min = time.getMinutes().toString();
        let sec = time.getSeconds().toString();
        
        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
        
        let currentTime = hour + min + sec;
        
        let html = `<div class="jergaBinariaRelok">`;
        
        let hiloInput = currentTime.toString().split("");
        let hiloB = hiloInput.map((char) => char.charCodeAt(0).toString(2).slice(2)); 
    
        // let hilo4B = hiloB.map((hilo) => hilo.slice(2));   

        for (let hilo of hiloB) {
                let celda = hilo.split("").map((char) => char == 0  
                        ? char = `<div class="celda cero"></div>` 
                        : char = `<div class="celda uno"></div>`);
                // celda[0] = `<div class="celda cero">${hiloInput[0]}</div>`;
                html = html + `<div class="fila">${celda.join("")}</div>`;
        }
        html += `<p class="tiempo">${currentTime}</p>`;    
        html = html + `</div>`;
        
        document.getElementById('jergaBinariaRelok').innerHTML = html;
}

setInterval(jergaBinariaRelok, 1000);

function click() {
        let uno = document.querySelectorAll('.uno');
        uno.forEach(u => u.style.background = 'green');

}

// const relok = document.getElementById('jergaBinariaRelok');
// relok.addEventListener('click', () => {
//     if (relok.style.filter == 'blur(0px)' ? 
//         relok.style.filter = 'blur(25px)' :
//         relok.style.filter = 'blur(0px)'
//     );
// });

  