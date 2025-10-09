// Los tipos deben ser fieles al contrato definido por el backend
export interface RegisterData {
  nombre: string;
  apellido: string;
  documento: string;
  numeroTelefono: string;
  email: string;
  confirmarEmail: string;
  password: string;
  repetirPassword: string;
  tipoVehiculo: string;
}