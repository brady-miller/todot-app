<template>
    <section id="columns">
        <div class="col-left">
            <h2><slot name="title-left"></slot></h2>
            <p><slot name="content-left"></slot></p>
        </div>
        <div class="col-middle">
            <h2><slot name="title-middle"></slot></h2>
            <p><slot name="content-middle"></slot></p>
        </div>
        <div class="col-right">
            <h2><slot name="title-right"></slot></h2>
            <p><slot name="content-right"></slot></p>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HomeColumns extends Vue {

}
</script>

<style lang="scss" scoped>
$background-color: #eeeeee;

section {
    background-color: $background-color;
    padding: 30px 0;
    text-align: center;
    width: 100%;
    max-width: 100%;
    
    div {
        width: 90%;
        max-width: 90%;
        display: block;
        text-align: center;
        margin: 0 auto;
    }

    h2 {
        font-weight: 1;
        font-size: 1.4em;
        margin-bottom: 0px;
        text-align: center;
    }

    p {
        font-weight: 100;
        margin-top: 10px;
        margin-bottom: 50px;
        color: rgb(100, 111, 121);
        text-align: center;
    }
}

@media screen and (min-width: 700px) {
    section {
        display: inline-block;
        text-align: center;
        padding: 50px 0;

        div {
            width: 30%;
            max-width: 30%;
            display: inline-block;
        }

        .col-left, .col-right, .col-middle {
            text-align: center;
        }

        .col-middle {
            margin: 0 20px;
        }
    }
}

@media screen and (min-width: 1040px) {
    section {
        padding: 80px 0;
    }
}
</style>