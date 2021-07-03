export interface User {
    emri?: string;
    mbiemri?: string;
    token: string;
    username: string;
    image?: string;
    // displayName: string;
    // roli?: number;
    
}

export interface UserFormValues {
    email: string;
    password: string;
    emri?: string;
    mbiemri?: string;
    username?: string;
}