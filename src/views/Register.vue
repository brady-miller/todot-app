<template>
    <section>
        <form @submit.prevent="handleSubmit">
            <h2 class="title">Register</h2>
            <!-- Username Field -->
            <input-container>
                <form-input name="username" type="text" placeholder="username"
                :required="true" v-model="user.username">Username</form-input>
            </input-container>

            <!-- Email Field -->
            <input-container>
                <form-input name="email" type="email" placeholder="email@example.com"
                :required="false" v-model="user.email">Email</form-input>
            </input-container>

            <!-- Password Field -->
            <input-container>
                <form-input name="password" type="password" placeholder="password"
                :required="true" v-model="user.password">Password</form-input>
            </input-container>

            <router-link v-bind:to="extraRoute" class="sub-link">Already have an account?</router-link>
            <submit-button>Submit</submit-button>
        </form>
    </section> 
</template>

<script lang="ts">
import { Vue, Prop, Component, Model } from 'vue-property-decorator';
import FormInput from '../components/forms/FormInput.vue';
import SubmitButton from '../components/forms/SubmitButton.vue';
import InputContainer from '../components/forms/InputContainer.vue';

interface UserObject {
    username: string;
    email: string;
    password: string;
}

@Component({
    components: {
        InputContainer,
        FormInput,
        SubmitButton,
    },
})
export default class Register extends Vue {
    public extraRoute: string = '/login';
    private user: UserObject = {
        username: '',
        email: '',
        password: '',
    };

    public get isAuthenticated(): boolean {
        return this.$store.getters['auth/isAuth'];
    }

    public handleSubmit(): void {
        this.$store.dispatch('auth/signUp', this.user);
        this.$router.push('/');
    }
}
</script>

<style lang="scss" scoped>
form {
    border-radius: 10px;
    width: 90%;
    margin: 25px auto 0;
    padding: 3% 0 25%;
    box-shadow: 0 20px 8px 0 rgba(0, 0, 0, 0.2), 0px 0px 20px 0px rgba(0, 0, 0, 0.19);
    position: relative;
}

.form-group {
    padding-bottom: 5px;
}

.sub-link {
    color: #000000;
    transition: all ease-in-out 250ms;
}

.sub-link:hover {
    color: #42b983;
}

@media screen and (min-width: 600px) {
    form {
        width: 80%;
        padding: 3% 0 17%;
    }
}

@media screen and (min-width: 900px) {
    form {
        padding: 3% 0 13%;
    }
}
</style>