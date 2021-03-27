export class Account {
    
    id!: string;

    // Authentication Info
    login?: string;
    pwd?: string;
    jwtToken?: string;

    // Personnal Info
    mail?: string;
    role?: Role;
}

export enum Role {
    User = 'User',
    Admin = 'Admin'
}