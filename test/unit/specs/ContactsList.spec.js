import Vue from 'vue';
import VueMaterial from 'vue-material';
import ContactsList from 'src/components/ContactsList';
import { date } from 'src/filters';
import contacts from './contacts';

Vue.use(VueMaterial);
Vue.filter('date', date);


describe('ContactsList.vue', () => {
	it('should render correct number of contacts', () => {
		const Ctor = Vue.extend(ContactsList);
		const propsData = { contacts };
		const vm = new Ctor({ propsData }).$mount();
		expect(vm.$el.querySelectorAll('table tbody tr').length).to.equal(contacts.length);
	});
});
