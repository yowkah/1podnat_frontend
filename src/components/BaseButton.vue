<template>
  <button
    :class="`bg-${color}-500 hover:bg-${color}-600`"
    class="rounded px-5 py-3 text-white shadow-md"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Options({
  components: {},
})
export default class BaseButton extends Vue {
  @Prop() readonly label!: string;
  @Prop({ default: "blue" }) readonly color!: string;
}
</script>
