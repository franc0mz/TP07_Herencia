import { Console } from "console";
import { Moto } from "./Moto";
import { RegistroAutomotor } from "./RegistroAutomotor";
import { Vehiculo } from "./Vehiculo";


let moto1: Moto = new Moto("AAA111", "Juan Lopez", "Zanella", "150", 150);
let moto2: Moto = new Moto("QQQ123", "Alberto Rodriguez", "Honda", "dax", 70)
console.log(`Datos titular original de moto 1 : `, moto1.getTitular());
console.log("-----------------------------------------------------------------")
//se realiza cambio de dueño a moto1
moto1.setTransferencia("Juan Lopez", "Ana Marquez");
console.log(`Datos moto 1 realizada la transferencia`);
console.log(`Datos del nuevo titular : `, moto1.getTitular());


let registroAutomotor: RegistroAutomotor = new RegistroAutomotor("Registro Automotor Olavarria",);
//Agregan motos al registro
registroAutomotor.AgregarMoto(moto1);
registroAutomotor.AgregarMoto(moto2);
console.log(`Datos del Registro Automotor lista de motos `, registroAutomotor.getlistaMoto());
console.log("-----------------------------------------------------------------");

//Se da de baja una moto desde el Registro Automotor
console.log("Se da de baja a moto patente AAA111 desde el Registro Automotor");
registroAutomotor.bajaMoto("AAA111");
console.log(`Datos del Registro Automotor lista de motos `, registroAutomotor.getlistaMoto());
console.log("-----------------------------------------------------------------");
// Cambio de patente desde registro automotor
registroAutomotor.cambioPatenteMoto("QQQ123", "BNM789");
console.log(`Datos del Registro Automotor lista de motos con cambio de patente `, registroAutomotor.getlistaMoto());
console.log(`Nueva patente de moto 2 :`, moto2.getPatente())
//prueba con patente no registrada
registroAutomotor.cambioPatenteMoto("eeqr", "asd");
