<template>
  <div>
    <div class="table"><history-table></history-table></div>
  </div>
</template>

<script>
import HistoryTable from "@/components/HistoryTable.vue";
export default {
  components: { HistoryTable },
};
</script>

<style style lang="scss" scoped>
.table {
  padding-top: 120px;
}
</style>