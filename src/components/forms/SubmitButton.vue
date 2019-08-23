<template>
    <button type="submit" class="submit">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class SubmitButton extends Vue {

}
</script>

<style lang="scss" scoped>
.submit {
    background-color: #42b983;
    border: 1px solid #42b983;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    color: #ffffff;
    font-size: 1.2em;
    opacity: 0.8;
    transition: all ease-in-out 250ms;
    display: block;
    position: absolute;
    bottom: 0;
    height: 15%;
    width: 100%;
}

.submit:hover {
    cursor: pointer;
    opacity: 1;
}
</style>