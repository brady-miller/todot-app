<template>
    <div class="red-alert" v-if="isError">
        <p><span>!</span> ERROR: {{ getError }}</p>
    </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

@Component
export default class Alert extends Vue {
    public get isError(): boolean {
        return this.$store.getters.isError;
    }

    public get getError(): string {
        return this.$store.getters.getError;
    }
}
</script>

<style scoped lang="scss">

.red-alert {
    width: 75%;
    background-color: red;
    border: 1px solid red;
    border-radius: 5px;

    p {
        color: #ffffff;
    }

    span {
        font-size: 1.2em;
    }
}

</style>