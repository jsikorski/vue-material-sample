<template lang="pug">
	#app
		contacts-list(:contacts='contacts', @delete='deleteSelectedContacts')

		md-button.md-primary.md-fab.md-fab-bottom-right(@click='openAddContactDialog')
			md-icon add

		add-contact-dialog(ref='addContactDialog', @add='addContact')
</template>


<script>
	import ContactsList from './components/ContactsList';
	import AddContactDialog from './components/AddContactDialog';
	import contacts from './contacts';


	export default {
		components: { ContactsList, AddContactDialog },

		data() {
			return { contacts };
		},

		methods: {
			openAddContactDialog() {
				this.$refs.addContactDialog.open();
			},

			addContact(contact) {
				this.contacts.push(Object.assign(contact, { createDate: new Date() }));
			},

			deleteSelectedContacts(selectedContacts) {
				selectedContacts.forEach((contact) => {
					const index = this.contacts.indexOf(contact);
					if (index === -1) return;
					this.contacts.splice(index, 1);
				});
			},
		},
	};
</script>


<style scoped>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
	}
</style>
