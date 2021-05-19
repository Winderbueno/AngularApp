import { RoleEnum } from "./enum/role.enum";

export class Account {
    
    id!: string;

    // Authentication Info
    email?: string;
    pwd?: string;
    jwtToken?: string;

    // Personnal Info
    userName?: string;
    role?: RoleEnum;
}

