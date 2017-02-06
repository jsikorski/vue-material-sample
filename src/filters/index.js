import moment from 'moment';

/* eslint-disable import/prefer-default-export */
export function date(value) {
	return moment(value).format('hh:mm DD-MM-YYYY');
}
