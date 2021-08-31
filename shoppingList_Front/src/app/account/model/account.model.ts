import { RoleEnum } from "@account/model/enum/role.enum";

export class Account {

    accountId!: string;

    // Authentication Info
    email?: string;
    pwd?: string;
    jwtToken?: string;

    // Personnal Info
    userName?: string;
    role?: RoleEnum;
}

