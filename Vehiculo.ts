import { Auto } from "./Auto";
import { Camion } from "./Camion";
import { Moto } from "./Moto";

export class Vehiculo {
    protected patente: string;
    protected titular: string;
    protected marca: string;
    protected modelo: string;

    constructor(patente: string, titular: string, marca: string, modelo: string) {
        this.patente = patente;
        this.titular = titular;
        this.marca = marca;
        this.modelo = modelo;
    }
    public getPatente(): string {
        return this.patente;
    }
    public getTitular(): string {
        return this.titular;
    }
    public getMarca(): string {
        return this.marca;
    }
    public getModelo(): string {
        return this.modelo;
    }
    public setPatente(patente: string) {
        this.patente = patente;
    }
    setTitular(titular: string): void {
        this.titular = titular;
    }
    setMarca(marca: string): void {
        this.marca = marca;
    }
    setModelo(modelo: string): void {
        this.modelo = modelo;
    }
    setTransferencia(titularActual:string, nuevoTitular:string):void{
        if (titularActual===this.titular) {
            this.titular=nuevoTitular;
        }
    }
    
}