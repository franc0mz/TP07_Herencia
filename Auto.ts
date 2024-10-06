import { Vehiculo } from "./Vehiculo";

export class Auto extends Vehiculo {
    private tipoAuto: string;

    constructor(patente: string, titular: string, marca: string, modelo: string, tipoAuto: string) {
        super(patente, titular, marca, modelo);
        this.tipoAuto = tipoAuto;
    }

    
}