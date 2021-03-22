export interface User {
    
    id: number;

    // Authentication Info
    login?: string;
    pwd?: string;
    token?: User;

    // Personnal Info
    mail?: string;
}