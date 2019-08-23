<template>
    <section class="cta">
        <div class="text">
            <h1 class="heading"><slot name="cta-title">Ready to get started?</slot></h1>
            <p class="helper"><slot name="cta-helper">Click the button below to sign up.</slot></p>
        </div>
        <router-link v-bind:to="url">
            <button class="signup-button">
                <slot name="cta-button">Sign up</slot>
            </button>
        </router-link>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HomeCTA extends Vue {
    @Prop(String) private url!: string;
}
</script>

<style scoped lang="scss">
$background-color: rgb(0, 173, 182);
$text-color: #ffffff;

section {
    background-color: $background-color;
    width: 100%;
    max-width: 100%;
    padding: 130px 0;

    h1, p, button {
        color: $text-color;
    }

    button {
        background-color: #393e46;
        border: 1px solid #393e46;
        border-radius: 50px;
        transition: all ease-in-out 250ms;
        padding: 7px 20px;
        font-size: 1.2em;
        margin-top: 20px;
    }

    button:hover {
        cursor: pointer;
        background-color: #222831;
    }

    h1 {
        font-size: 2.7em;
    }

    p {
        opacity: 0.8;
    }
}
</style>