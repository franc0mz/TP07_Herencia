import { Vehiculo } from "./Vehiculo";

export class Moto extends Vehiculo {
    private cilindrada: number;
    constructor(patente: string, titular: string, marca: string, modelo: string, cilindrada: number) {
        super(patente, titular, marca, modelo);
        this.cilindrada = cilindrada;
    }

    
}