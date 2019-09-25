var r=0;
var sumador = (x) => {

    for(let i=0; i< x.length; i++){
        r = r +  x[i];
        if(i == x.length-1){
            console.log('La suma de los datos es: '+r)
            let prom= r/x.length;
            console.log('El promedio es: '+prom)
        }
    }
    r=0;
}
var num = [1,1,1,12];
sumador(num);
    
