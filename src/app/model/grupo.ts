import { Categoria } from "./categoria";
import { Gasto } from "./gasto";
import { Pago } from "./pago";
import { Saldo } from "./saldo";
import { Usuario } from "./usuario";

 export interface Grupo {
    idGrupo: BigInt;
    nombre: String;
    imagen: Text;
    integrantes: [Usuario];
    categoria: Categoria;
   saldos: [Saldo];
    gastos: [Gasto];
    pagos: [Pago]  
}