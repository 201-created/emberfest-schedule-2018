import Component from '@ember/component';
import { computed } from '@ember/object';
import ENV from 'emberconf/config/environment';
import moment from 'emberconf/src/libs/moment';

const TIME_FORMAT = 'HH:mm';

export default Component.extend({
  classNames: ['session'],
  classNameBindings: ['isBreak', 'isExpanded', 'isNow', 'isPast'],

  now: moment().format(),
  isExpanded: false,
  session: null,

  isBreak: computed('session.name', function() {
    return ['Lunch', 'Snack Break'].includes(this.get('session.name'));
  }),

  isNow: computed('now', 'session.{start,end}', function() {
    return moment(this.now).isBetween(this.get('session.start', null, '[)'), this.get('session.end'));
  }),

  isPast: computed('now', 'session.end', function() {
    return moment(this.now).isSameOrAfter(this.get('session.end'));
  }),

  formattedTime: computed('session.{start,end}', function() {
    let startMoment = this._localMoment(this.get('session.start'));
    let endMoment = this._localMoment(this.get('session.end'));
    return `${startMoment.format(TIME_FORMAT)}-${endMoment.format(TIME_FORMAT)}`;
  }),

  _localMoment(timestamp) {
    return moment(timestamp).utcOffset(ENV.APP.UTC_OFFSET);
  },

  click() {
    this.toggleProperty('isExpanded');
  }
});
