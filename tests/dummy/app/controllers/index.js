import Controller from '@ember/controller';

// BEGIN-SNIPPET controller.js
export default Controller.extend({
  favoriteFruit: null,
  fruits: [
    { id: 'a', name: 'apple', article: 'an' },
    { id: 'p', name: 'pear', article: 'a' },
    { id: 'o', name: 'orange', article: 'an' }
  ],

  actions: {
    selectFruit(id, model) {
      this.set('favoriteFruit', model);
    }
  }
});
// END-SNIPPET
