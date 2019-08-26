// tslint:disable: variable-name
import axios, { AxiosResponse } from 'axios';
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import { TodoType } from '../types';
import store from '../store';

@Module({
    namespaced: true,
})
export default class TodoModule extends VuexModule {
    public static handleResponse(response: AxiosResponse) {
        if (response.status === 401) {
            // auto logout if 401 response returned from api
            store.commit('auth/removeUser', {root: true});
            location.reload(true);
            return response;
        }
        return response;
    }

    private todos: TodoType[] = [];

    public get getTodos(): TodoType[] {
        return this.todos;
    }

    @Mutation
    public addTodo(todo: TodoType): void {
        if (!todo.completed) { todo.completed = false; }
        if (!todo.description) { todo.description = null; }
        if (!todo.priority) { todo.priority = 1; }
        if (!todo.due) { todo.due = null; }
        this.todos.unshift(todo);
    }

    @Mutation
    public deleteTodo(_id: string): void {
        // Gets todo index
        const index = this.todos.findIndex((i) => i._id === _id);
        this.todos.splice(index, 1);
    }

    @Mutation
    public deleteAllTodos(): void {
        this.todos.length = 0;
    }

    @Mutation
    public editTodo(editedTodo: TodoType): void {
        const index = this.todos.findIndex((i) => i._id === editedTodo._id);
        // Check title
        if (this.todos[index].title !== editedTodo.title) {
            this.todos[index].title = editedTodo.title;
        }
        // Check description
        if (this.todos[index].description !== editedTodo.description) {
            this.todos[index].description = editedTodo.description;
        }
        // Check completed
        if (this.todos[index].completed !== editedTodo.completed) {
            this.todos[index].completed = editedTodo.completed;
        }
        // Check due date
        if (this.todos[index].due !== editedTodo.due) {
            this.todos[index].due = editedTodo.due;
        }
        // Check priority
        if (this.todos[index].priority !== editedTodo.priority) {
            this.todos[index].priority = editedTodo.priority;
        }
    }

    @Action
    public async createTodo(todo: TodoType): Promise<void> {
        try {
            axios({
                method: 'post',
                url: 'http://localhost:3000/todos',
                data: {
                    todo,
                },
            }).then((response) => TodoModule.handleResponse(response))
            .then((response) => {
                if (response.status === 201) {
                    this.context.commit('todo/addTodo', {
                        todo: response.data.todo,
                    }, {root: true});
                } else {
                    this.context.commit('alert/setError',
                        'There was an issue communicating with the server',
                        {root: true},
                    );
                }
            }).catch((error) => {
                this.context.commit('alert/setError', error, {root: true});
            });
        } catch {
            this.context.commit('alert/setError', 'There was an issue communicating with the server', {root: true});
        }
    }

    @Action
    public async destroyTodo(_id: string): Promise<void> {
        const index = this.todos.findIndex((i) => i._id === _id);
        const todoToDelete = this.todos[index];

        try {
            axios({
                method: 'delete',
                url: 'http://localhost:3000/todos/' + todoToDelete._id,
                data: {
                    todoToDelete,
                },
            }).then((response) => TodoModule.handleResponse(response))
            .then((response) => {
                if (response.status === 200) {
                    this.context.commit('todo/deleteTodo', todoToDelete._id, {root: true});
                } else {
                    this.context.commit('alert/setError',
                        'There was an issue communicating with the server',
                        {root: true},
                    );
                }
            }).catch((error) => {
                this.context.commit('alert/setError', error, {root: true});
            });
        } catch {
            this.context.commit('alert/setError', 'There was an issue communicating with the server', {root: true});
        }
    }

    @Action
    public async changeTodo(newTodo: TodoType): Promise<void> {
        const id = newTodo._id;
        delete newTodo._id;

        try {
            axios({
                method: 'patch',
                url: 'http://localhost:3000/todos/' + id,
                data: {
                    newTodo,
                },
            }).then((response) => TodoModule.handleResponse(response))
            .then((response) => {
                if (response.status === 200) {
                    this.context.commit('todo/editTodo', newTodo, {root: true});
                } else {
                    this.context.commit('alert/setError',
                        'There was an issue communicating with the server',
                        {root: true},
                    );
                }
            }).catch((error) => {
                this.context.commit('alert/setError', error, {root: true});
            });
        } catch {
            this.context.commit('alert/setError', 'There was an issue communicating with the server', {root: true});
        }
    }

    @Action
    public async destroyAllTodos(_id: string): Promise<void> {
        const index = this.todos.findIndex((i) => i._id === _id);
        const todoToDelete = this.todos[index];

        try {
            axios({
                method: 'delete',
                url: 'http://localhost:3000/todos/all',
                data: {
                    todoToDelete,
                },
            }).then((response) => TodoModule.handleResponse(response))
            .then((response) => {
                if (response.status === 200) {
                    this.context.commit('todo/deleteAllTodo', todoToDelete._id, {root: true});
                } else {
                    this.context.commit('alert/setError',
                        'There was an issue communicating with the server',
                        {root: true},
                    );
                }
            }).catch((error) => {
                this.context.commit('alert/setError', error, {root: true});
            });
        } catch {
            this.context.commit('alert/setError', 'There was an issue communicating with the server', {root: true});
        }
    }
}
