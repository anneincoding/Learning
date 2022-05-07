import {h, render} from 'vue';
// Vue 2 
// vDom is inspired by snabbdom
render(h){
/*
*v1 element type
*v2 attributes you bind
*v3 child nodes it contains
*/
  return h('div', {
    attrs: {
      id: 'foo'
    },
    on: {
      click: this.onClick
    }
  }, 'hello')
};

// vue3
/*
* flat props structure
* Globally imported 'h' helper
*/
render() {
  return h('div', {
    id:'foo',
    onClick: this.onClick
  }, 'hello')
}