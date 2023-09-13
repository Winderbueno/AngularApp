import { RoleEnum } from "./role.enum";

export interface Account {

    userId?: string;

    // Authentication Info
    email?: string;
    pwd?: string;
    jwtToken?: string;

    // Personnal Info
    userName?: string;
    role?: RoleEnum;
}