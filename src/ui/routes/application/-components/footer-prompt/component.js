import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  fastboot: service(),

  tagName: 'footer',
  classNameBindings: ['isDismissed'],

  isDismissed: computed({
    get(key) {
      // eslint-disable-line no-unused-vars
      if (this.get('fastboot.isFastBoot')) {
        return true;
      } else {
        return document.cookie.split(';').filter(i => i.includes('isDismissed=true')).length > 0;
      }
    },
    set(key, value) {
      // eslint-disable-line no-unused-vars
      if (!this.get('fastboot.isFastBoot')) {
        document.cookie = 'isDismissed=true;max-age=86400';
      }
      return value;
    },
  }),
});
