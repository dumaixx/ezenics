<template>
  <div class="container-fluid">
    <wj-flex-chart
      :itemssource="getAllData"
      bindingx="month"
      charttype="Line"
      header="Temperature of New York"
      :palette="['rgba(42,159,214,1)', 'rgba(119,179,0,1)', 'rgba(153,51,204,1)', 'rgba(255,136,0,1)', 'rgba(204,0,0,1)', 'rgba(0,204,163,1)', 'rgba(61,109,204,1)', 'rgba(82,82,82,1)', 'rgba(0,0,0,1)']"
    >
      <wj-flex-chart-legend position="Bottom"></wj-flex-chart-legend>
      <wj-flex-chart-axis wjProperty="axisY" title="Temperature(°C)"></wj-flex-chart-axis>
      <wj-flex-chart-series binding="low" name="Average Low"></wj-flex-chart-series>
      <wj-flex-chart-series binding="high" name="Average High"></wj-flex-chart-series>
      <wj-flex-chart-series binding="mean" name="Daily Mean"></wj-flex-chart-series>
      <wj-flex-chart-animation animationMode="Point"></wj-flex-chart-animation>
    </wj-flex-chart>
  </div>
</template>

<script>
import '@grapecity/wijmo.styles/wijmo.css';
import '@grapecity/wijmo.vue2.chart';
import '@grapecity/wijmo.vue2.chart.animation';

export default {
  computed: {
    getAllData() {
      return this.$store.getters.getAllData;
    },
  },
};
</script>

<style>
  body {
    margin-bottom: 24px;
  }
</style>
