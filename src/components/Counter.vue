<template>
    <div>
        <p>
            {{ count }}
            <b-button @click="increment">Incrementt</b-button>
        </p>
        <p>
            Name: <b-form-input v-model="name" type="text" />
            <hello-component :name="name" :initialEnthusiasm="5" />
        </p>
    </div>
</template>

<script lang=ts>
import Vue from 'vue';
import HelloComponent from "./Hello.vue";

export default Vue.extend({
    props:['initcounter'],
    data() {
        return {
           count: this.initcounter ? this.initcounter : 0,
           name: 'Sanyi'
        };
    },

    methods: {
        increment() {
            this.count++;
        }
    },
    components: {
        HelloComponent
    }
});
</script>

<style scoped>
    div {
        background: silver;
    }
</style>
