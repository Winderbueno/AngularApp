export class Account {
    
    id!: string;

    // Authentication Info
    email?: string;
    pwd?: string;
    jwtToken?: string;

    // Personnal Info
    username?: string;
    role?: Role;
}

export enum Role {
    User = 'User',
    Admin = 'Admin'
}