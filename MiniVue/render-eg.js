import { h } from 'vue';

const App = {
  render() {
    const slot = this.$slots.default ? this.$slots.default() : [];
    // can manipulate the slot here
    return h('div', slot);
    // // v-for = "item in list"
    // return  this.list.map(item => {
    //   return('div', {key: item.id}, item.text)
    // })
    // // v-if = "ok" v-else ="ohterCondition"
    // return  this.ok 
    // ? h('div', { id: 'hello' }, [ h('span', 'world')])
    // : this.otherCondition 
    //   ? h('p', 'hi')
    //   : h('span', 'other')
  }
}