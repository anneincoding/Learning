import Vue from 'vue';

var vm = new Vue({
  el: "#app",
  data: {
    price: 5.00,
    quantity: 2
  },
  computed: {
    totalPriceWithTax() {
      return this.price * this.quantity * 1.03
    }
  }
})