<template lang="pug">
	md-table-card.contacts-list
		md-toolbar
			h3.md-title Lista kontaktów

		md-table-alternate-header.md-primary(md-selected-label='wybrano')
			md-button.md-icon-button(@click='triggerDelete')
				md-icon delete

		md-table(@select='setSelectedContacts')
			md-table-header
				md-table-row
					md-table-head Imię
					md-table-head Nazwisko
					md-table-head Numer telefonu
					md-table-head Data utworzenia

			md-table-body
				md-table-row(v-for='contact in contacts' md-auto-select md-selection :md-item='contact')
					md-table-cell {{ contact.firstName }}
					md-table-cell {{ contact.lastName }}
					md-table-cell {{ contact.phoneNumber }}
					md-table-cell {{ contact.createDate | date }}
</template>


<script>
	export default {
		props: ['contacts'],

		methods: {
			triggerDelete() {
				this.$emit('delete', Object.values(this.selectedContacts));
			},

			setSelectedContacts(selectedContacts) {
				this.selectedContacts = selectedContacts;
			},
		},
	};
</script>


<style lang="css" scoped>
	.contacts-list {
		width: 100%;
	}
</style>
