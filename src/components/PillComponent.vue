<template>
    <div class="pill" :style="{backgroundColor: amountColor}">
      <span class="word">{{ word }}</span>
      <span class="amount" :style="{color: amountColor}">{{ amount }}</span>
    </div>
</template>

<script>
export default {
  props: ["word", "amount"],
  computed: {
    amountColor() {
      if (this.amount > 100) {
        return "#ff061a";
      } if (this.amount > 75) {
        return "#ff6221";
      } if (this.amount > 50) {
        return "#ff9e31";
      } if (this.amount > 25) {
        return "#f2d040";
      } if (this.amount > 10) {
        return "#00d13c";
      } if (this.amount > 5) {
        return "#0073c3";
      } else {
        return "#9175a1";
      }
      
    }
  }
}
</script>

<style scoped>
.pill {
  margin: 10px;
  height: 55px;
  width: fit-content;
  border-radius: 35px;
  color: #fff;
  font-size: 1.3rem;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.pill .word {
  margin-left: 15px;
}

.pill .amount {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  margin: 10px;
  padding: 10px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>