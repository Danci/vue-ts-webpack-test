<template>
    <div>
        <div class="greeting">Hi for you: {{name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: ['name', 'initialEnthusiasm'],
    data() {
        return {
            enthusiasm: this.initialEnthusiasm,
        }
    },
    methods: {
        increment() { this.enthusiasm++; },
        decrement() {
            if (this.enthusiasm > 1) {
                this.enthusiasm--;
            }
        },
    },
    computed: {
        exclamationMarks(): string {
            let result:string[] = [];
            for (let i = 1; i<= this.enthusiasm; i++) result.push('!');
            return result.join('');
        }
    }
});
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>