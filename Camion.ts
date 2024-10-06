import { Vehiculo } from "./Vehiculo";

export class Camion extends Vehiculo {
    
    private ruedas: number;
    constructor(patente: string, titular: string, marca: string, modelo: string, ruedas: number) {
        super(patente, titular, marca, modelo);
        this.ruedas = this.ruedas;
    }

    
}