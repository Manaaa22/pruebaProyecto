import { Gasto } from "./gasto";
import { Grupo } from "./grupo";
import { Pago } from "./pago";
import { Saldo } from "./saldo";

export interface Usuario {
    idUsuario: BigInt;
    usuario: String;
    nombre: String;
    contraseña: String;
    email: String;
    foto: Text;
    amigos: [Usuario];
    grupos: [Grupo];
    pagos: [Pago];
    gastos: [Gasto];
    saldos: [Saldo] 
}
