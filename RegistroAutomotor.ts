import { Sign } from "crypto";
import { Auto } from "./Auto";
import { Camion } from "./Camion";
import { Moto } from "./Moto";
import { Vehiculo } from "./Vehiculo";


export class RegistroAutomotor {
    
    private nombre : string;
    
    private listaMoto :Moto[];
    private listaAuto : Auto [];
    private listaCamion : Camion [];

    constructor(nombre:string,listaMoto?:Moto[],listaAuto?:Auto[],listaCamion?:Camion[]){
     
        this.nombre=nombre;
        if (listaAuto!=undefined) {
            this.listaAuto=listaAuto;
        }else{
            this.listaAuto=[]
        }if (listaMoto!=undefined) {
            this.listaMoto=listaMoto;
        }else{
            this.listaMoto=[]
        }
        if (listaCamion!=undefined) {
            this.listaCamion=listaCamion;
        }else{
            this.listaCamion=[]
        }        
    }
    getlistaMoto(): Moto[]{
        return this.listaMoto;
    }
    AgregarMoto(moto:Moto):void{
        this.listaMoto.push(moto);
    }
    bajaMoto(patente:string):void{
        this.listaMoto= this.listaMoto.filter(moto => moto.getPatente() !== patente);
    }
    AgregarAuto(auto:Auto):void{
        this.listaAuto.push(auto);
    }
    cambioPatenteMoto(pat1:string,pat2:string):void{
        let pos = this.listaMoto.findIndex(moto=>moto.getPatente() ===pat1);
        if (pos==-1) {
            console.log("No hay motos con esa patente")
        }else{
         this.listaMoto[pos].setPatente(pat2);
        }
    }
}