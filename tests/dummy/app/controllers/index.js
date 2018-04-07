import Controller from '@ember/controller';

// BEGIN-SNIPPET controller.js
export default Controller.extend({
  favoriteFruit: null,
  fruits: [
    { id: 'a', name: 'Apple' },
    { id: 'p', name: 'Pear' },
    { id: 'o', name: 'Orange' }
  ]
});
// END-SNIPPET
