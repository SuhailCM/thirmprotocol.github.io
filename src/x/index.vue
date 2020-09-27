<template>
  <div>
    <land />
    <feat />
    <platforms />
    <medium />
  </div>
</template>

<script>
import land from "../components/land";
import feat from "../components/feat";
import platforms from "../components/platforms";
import medium from "../components/medium";

export default {
  components: {
    land,
    feat,
    platforms,
    medium,
  },
};
</script>


