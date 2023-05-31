// Variables de ejemplo productos de verduleria
var Manzanas = 10;
var Naranjas = 2;
var Peras = 8;
var salida = false
while(salida == false){
    let opcion = Number(prompt("Para control de stock ingrese '1' \nPara agregar un nuevo producto ingrese '2' \nPara salir ingrese '0' "))
        switch(opcion){
                case 0 : alert("Gracias, vuelva proto")
                         salida = true
                         break
                case 1 :  let producto = Number(prompt("Ingrese el producto a controlar: \n'1' para Manzanas \n '2' para Naranjas \n '3' para Peras"))
                        if(producto === 1){
                                if(estaPorAgotarse(Manzanas)){
                                    alert("Atencion! el stock de manzanas Esta por agotarse"  )
                                }
                                else{
                                    alert("Quedan " + Manzanas + " En stock" )
                                }
                                break
                        }
                        else if(producto === 2){
                                if(estaPorAgotarse(Naranjas)){
                                    alert("Atencion! el stock de naranjas Esta por agotarse"  )
                                }
                                else{
                                    alert("Quedan " + Naranjas + " En stock" )
                                }
                                break
                        }
                        else if(producto ===3){
                                if(estaPorAgotarse(Peras)){
                                    alert("Atencion! el stock de peras Esta por agotarse"  )
                                }
                                else{
                                    alert("Quedan " + Peras + " En stock" )
                                }
                                break
                        }
                        else{
                            alert("El producto no esta en stock")
                        }
                        break
                case 2 :  agregarProducto()
                            break
                default :   alert("Error: debe ingresar solo numeros que esten en el menu")
                            break
        }
}
// Función para verificar si un producto está por agotarse
function estaPorAgotarse(stock) {
    if (stock <= 5) {
      return true;
    } else {
      return false;
    }
}

// Funcion para agregar un nuevo producto
function agregarProducto(){
    let nombre = prompt("Ingrese el nombre del producto")
    let cantidad = Number(prompt("Ingrese la cantidad del nuevo producto"))
    return alert("Gracias, se agregaron " + cantidad + " " + nombre )
}
  


  // Al no contar con array todavia queda muy verde y no puedo ir acumulando para mostrar los nuevos productos.