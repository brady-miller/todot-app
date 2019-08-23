<template>
    <header id="top">
        <h1 class="title"><slot name="title">Todot</slot></h1>
        <h3 class="subtitle"><slot name="subtitle">A simple todo app</slot></h3>
        <router-link v-bind:to="url">
            <button class="register-button">
                <slot name="button">Sign Up</slot>
            </button>
        </router-link>
    </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HomeHeader extends Vue {
    @Prop(String) private url!: string;
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Work+Sans&display=swap');
$header-background: #ffffff;
$accent-color-hover: rgb(0, 148, 156);
$accent-color: rgb(0, 173, 182);

header {
    height: 100%;
    width: 80%;
    background-color: $header-background;
    font-family: 'Work Sans', sans-serif;
    margin: 35% auto 15%;
    max-width: 100%;
    text-align: left;

    .title {
        font-weight: 500;
        font-size: 2.1em;
    }

    .subtitle {
        margin-top: 20px;
        font-weight: 400;
        font-size: 1.2em;
        color: rgb(100, 111, 121);
        line-height: 1.5em;
    }

    .register-button {
        background-color: $accent-color;
        border: 1px solid $accent-color;
        border-radius: 50px;
        color: #ffffff;
        font-size: 1.3em;
        font-weight: 400;
        padding: 10px 20px;
        margin-top: 10px;
        margin-bottom: 15px;
        transition: all ease-in-out 250ms;
    }


    .register-button:hover {
        background-color: $accent-color-hover;
        border: 1px solid $accent-color-hover;
        cursor: pointer;
    }
}

@media screen and (min-width: 350px) {
    header {
        .title {
            font-size: 2.4em;
        }
    }
}

@media screen and (min-width: 480px) {
    header {
        text-align: center;
        .title {
            font-size: 2.5em;
        }

        .subtitle {
            font-size: 1.3em;
        }
    }
}

@media screen and (min-width: 550px) {
    header {
        .title {
            font-size: 2.7em;
        }

        .register-button {
            font-size: 1.4em;
            padding: 12px 30px;
        }
    }
}

@media screen and (min-width: 650px) {
    header {
        margin: 20% auto 15%;

        .title {
            font-size: 2.8em;
        }
    }
}

@media screen and (min-width: 900px) {
    header {
        width: 70%;
        .subtitle {
            font-size: 1.5em;
        }
    }
}
</style>