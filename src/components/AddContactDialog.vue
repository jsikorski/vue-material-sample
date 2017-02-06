<template lang="pug">
	md-dialog.add-contact-dialog(ref='dialog')
		form(novalidate, @submit.stop.prevent='add')
			md-dialog-title
				| Dodaj kontakt

			md-dialog-content
				md-input-container
					md-icon person
					label Imię
					md-input(v-model='firstName')

				md-input-container
					md-icon person
					label Nazwisko
					md-input(v-model='lastName')

				md-input-container
					md-icon phone
					label Numer telefonu
					md-input(type='tel', v-model='phoneNumber')

			md-dialog-actions
				md-button(@click='close') Anuluj
				md-button.md-primary(type='submit', :disabled='!isValid') Dodaj
</template>


<script>
	export default {
		data() {
			return {
				firstName: '',
				lastName: '',
				phoneNumber: '',
			};
		},

		computed: {
			isValid() {
				return !!this.firstName && !!this.lastName && !!this.phoneNumber && this.phoneNumber.length === 9;
			},
		},

		methods: {
			add() {
				this.$emit('add', {
					firstName: this.firstName,
					lastName: this.lastName,
					phoneNumber: this.phoneNumber,
				});
				this.close();
			},

			open() {
				this.firstName = '';
				this.lastName = '';
				this.phoneNumber = '';
				this.$refs.dialog.open();
			},

			close() {
				this.$refs.dialog.close();
			},
		},
	};
</script>


<style lang="css">
	.add-contact-dialog .md-dialog {
		width: 500px;
	}
</style>
