import { Categoria } from './categoria';
import { Grupo } from './grupo';
import { Usuario } from './usuario';
import { Saldo } from './saldo';

export interface Gasto {
    idGasto: BigInt;
    /*monto: Decimal;*/
    fecha: Date;
    imagen: Text;
    tipoDivision: number;
    categoria: Categoria;
    grupo: Grupo;
    usuario: Usuario;
    saldos: [Saldo]  
}