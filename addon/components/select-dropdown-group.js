import { computed, get } from '@ember/object';
import { isPresent } from '@ember/utils';

import SelectDropdownComponent from './select-dropdown';
import layout from '../templates/components/select-dropdown-group';
import { getDescendents } from '../utils/tree';

export default class SelectDropdownGroupComponent extends SelectDropdownComponent {
  layout = layout;
  groups = null;
  list = null;

  didReceiveAttrs() {
    super.didReceiveAttrs(...arguments);

    // Tree built in extended component
    let groups = this.get('list');
    let list = getDescendents(groups);

    this.setProperties({ list, groups });
  }

  @computed('token', 'model.[]', 'values.[]')
  get options() {
    if (this.get('shouldFilter')) {
      this.filterModel();
    }

    return this.get('groups');
  }

  setVisibility(list, token) {
    list
      .filter(el => isPresent(get(el, 'parentId')))
      .filter(el => get(el, 'name').toString().toLowerCase().indexOf(token) > -1)
      .forEach(el => {
        el.set('isVisible', true);

        // Mark parent visible
        list
          .filter(x => x.id === get(el, 'parentId'))
          .shift()
          .set('isVisible', true);
      });
  }

  upDownKeys(selected, event) {
    let list = this.get('list')
      .filterBy('isVisible')
      .filter(el => isPresent(get(el, 'parentId')));

    this.move(list, selected, event.keyCode);
  }
}
