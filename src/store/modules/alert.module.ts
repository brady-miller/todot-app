import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

@Module({
    namespaced: true,
})
export default class AlertModule extends VuexModule {
    private errorExists: boolean = false;
    private errorMessage: string = '';

    public get isError(): boolean {
        return this.errorExists;
    }

    public get getError(): string {
        return this.errorMessage;
    }

    @Mutation
    public setError(message: string): void {
        this.errorMessage = message;
        this.errorExists = true;
    }
}
