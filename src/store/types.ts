// tslint:disable: class-name
export interface todoType {
    title: string;
    description?: string;
    completed: boolean;
}

export interface userData {
    username: string;
    email?: string;
    password?: string;
    id?: string;
}

export interface responseData {
    token: string;
    user: userData;
}
