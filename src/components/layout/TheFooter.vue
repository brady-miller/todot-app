<template>
    <footer>
        
        <div class="container">
            <h3>Page Links</h3>
            <div class="row">
                <div class="column col-4">
                    <router-link to="/login" class="link">Log In</router-link>
                    <router-link to="/register" class="link">Register</router-link>
                    <router-link to="/logout" class="link">Log Out</router-link>
                </div>
                <div class="column col-4">
                    <router-link to="/" class="link">Home</router-link>
                    <router-link to="/about" class="link">About</router-link>
                </div>
                <div class="column col-4">
                    <router-link to="/" class="link">Todos</router-link>
                    <router-link to="/" class="link">Profile</router-link>
                </div>
            </div>
        </div>
        <div class="message">
            <p>&copy; 2019 - Brady Miller | To view the project, head to <a href="https://github.com/brady-miller/todot-app">this link</a>.</p>
        </div>
    </footer>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import 'bootstrap/dist/css/bootstrap.min.css';

@Component
export default class TheFooter extends Vue {

}
</script>

<style lang="scss" scoped>
$footer-color: #222831;
$footer-message: #393e46;
$footer-accent: #55595f;

footer {
    background-color: $footer-color;
    width: 100%;

    h3 {
        display: block;
        color: #ffffff;
        text-align: center;
        padding-bottom: 10px;
    }

    .container {
        text-align: center;
        padding: 70px 0;
    }

    .link {
        display: block;
        color: #ffffff;
        text-decoration: none;
        transition: all ease-in-out 250ms;
        font-size: 1.2em;
        font-weight: 100;
        padding-bottom: 10px;
        text-align: center;
    }

    .link:hover {
        color: $footer-accent;
        cursor: pointer;
    }

    .message {
        background-color: $footer-message;
        width: 100%;
        max-width: 100%;
        padding: 20px 0;

        p {
            color: #ffffff;
            margin: 0;
        }

        a {
            text-decoration: none;
            transition: all ease-in-out 250ms;

        }
    }

    .row {
        margin-left: 0;
        margin-right: 0;
    }
}
</style>