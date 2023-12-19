import { Grupo } from './grupo';
import { Usuario } from './usuario';

export interface Pago {
    idPago: BigInt;
    /*monto: Decimal;*/
    grupo: Grupo;
    usuario: Usuario;
    usuarioDestino: Usuario
}