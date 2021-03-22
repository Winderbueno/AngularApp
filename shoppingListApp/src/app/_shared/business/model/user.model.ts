export interface User {
    
    id: number;

    // Authentication Info
    login?: string;
    pwd?: string;
    token?: User;

    // Personnal Info
    firstName?: string;
    lastName?: string;
    mail?: string;
}