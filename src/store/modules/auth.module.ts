import axios, { AxiosResponse } from 'axios';
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import AlertModule from './alert.module';
import { userData, responseData } from '../types';
import store from '../store';

@Module({
    namespaced: true,
})
export default class UserModule extends VuexModule {
    public static handleResponse(response: AxiosResponse) {
        if (response.status === 401) {
            // auto logout if 401 response returned from api
            store.commit('auth/removeUser', {root: true});
            location.reload(true);
            return response;
        }
        return response;
    }

    private isAuthenticated: boolean = JSON.parse(localStorage.getItem('isAuthenticated') as string) || false;
    private user: userData = {
        username: '',
        email: '',
        id: '',
    };

    public get isAuth(): boolean {
        return this.isAuthenticated;
    }

    @Mutation
    public addUser(data: responseData): void {
        if (data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('isAuthenticated', JSON.stringify(true));
            this.user.username = data.user.username;
            if (data.user.email) {
                this.user.email = data.user.email;
            }
            if (data.user.id) {
                this.user.id = data.user.id;
            }
            this.isAuthenticated = true;
        } else {
            this.context.commit('alert/setError', 'Please try again');
        }
    }

    @Mutation
    public removeUser(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('isAuthenticated');
        this.user.username = '';
        this.user.email = '';
        this.user.id = '';
        this.isAuthenticated = false;
    }

    @Action
    public async logOut() {
        try {
            axios({
                method: 'post',
                url: 'http://localhost:3000/users/logout',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.token,
                },
            }).then((response) => {
                this.context.commit('removeUser', response.data.user);
            }).catch((error) => {
                this.context.commit('alert/setError', error, {root: true});
            });
        } catch (error) {
            this.context.commit('alert/setError', 'There was an issue communicating with the server', {root: true});
        }
    }

    @Action
    public async logIn(user: userData) {
        if (this.isAuthenticated) {
            this.context.commit(
                'alert/setError',
                'You are already signed in, please log out to continue.',
                {root: true},
            );
        }
        try {
            axios({
                method: 'post',
                url: 'http://localhost:3000/users/login',
                data: {
                    username: user.username,
                    password: user.password,
                },
            }).then(UserModule.handleResponse)
            .then((response) => {
                if (response.status === 200) {
                    this.context.commit('auth/addUser', {
                        user: response.data.user,
                        token: response.data.token,
                    }, {root: true});
                } else {
                    this.context.commit(
                        'alert/setError',
                        'There was an issue communicating with the server',
                        {root: true},
                    );
                }
            }).catch((error) => {
                this.context.commit('alert/setError', error, {root: true});
            });
        } catch (error) {
            this.context.commit('alert/setError', 'There was an issue communicating with the server', {root: true});
        }
    }

    @Action
    public async signUp(user: userData) {
        if (this.isAuthenticated) {
            this.context.commit(
                'alert/setError',
                'You are already signed in, please log out to continue.',
                {root: true},
            );
        }
        try {
            axios({
                method: 'post',
                url: 'http://localhost:3000/users',
                data: {
                    username: user.username,
                    email: user.email,
                    password: user.password,
                },
            })
            .then((response) => UserModule.handleResponse(response))
            .then((response) => {
                if (response.status === 201) {
                    this.context.commit('auth/addUser', {
                        user: response.data.user,
                        token: response.data.token,
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
        } catch (error) {
            this.context.commit('alert/setError', 'There was an issue communicating with the server', {root: true});
        }
    }
}
