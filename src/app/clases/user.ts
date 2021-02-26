export interface User {
    id?: number
    nombre?: string
    apellidos?: string
    password?: string
    email?: string
    telefono?: number
    ciudad?: string
    provincia?: string
    intrumetos?: string
}

export interface accesoUsuario {
    email: string
    password: string
}
