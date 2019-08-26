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

export interface TodoType {
    title: string;
    description: string | null;
    completed: boolean;
    priority: number;
    due: Date | null;
    _id?: string;
}
