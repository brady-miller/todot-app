<template>
    <div class="form-group">
        <label v-bind:for="reference">
            <slot></slot>
        </label>
        <input 
            v-bind:type="type"
            v-bind:name="name"
            v-bind:placeholder="placeholder"
            v-bind:required="required ? true : false"
            v-bind:value="value"
            v-on:input="onValueChanged($event.target.value)"
        >
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class FormInput extends Vue {
    @Prop(String) private value!: string;
    @Prop(String) private placeholder!: string;
    @Prop(String) private name!: string;
    @Prop(String) private reference!: string;
    @Prop(String) private type!: string;
    @Prop(Boolean) private required!: boolean;

    @Emit('input')
    public onValueChanged(value: string) {
        return;
    }
}
</script>

<style scoped lang="scss">

.form-group {
    text-align: center;
    width: 80%;
    margin: 0 auto;
}

label {
    display: block;
    text-align: left;
    color: rgb(204, 197, 197);
    font-size: 1em;
}

input {
    border: none;
    border-bottom: 1px solid #aaaaaa;
    width: 100%;
    color: #444444;
    padding: 5px 7px;
    margin: 5px 0;
    text-align: left;
    font-size: 0.9em;
}

</style>