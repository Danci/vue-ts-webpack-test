<template>
    <div>
        <p>
        Nameee: <b-form-input v-model="name" type="text" />
        <hello-component :name="name" :initialEnthusiasm="5" />
        </p>
        <p></p>
        <p>
            <counter :initcounter="10"/>
        </p>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import HelloComponent from "./Hello.vue";
import Counter from "./Counter.vue";

export default Vue.extend({
  data(){
      return { name: "World" };
  },
  components: {
    HelloComponent,
    Counter
  }
});
</script>

