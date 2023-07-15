import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		console.log(email, password, 'login route');

		// redirect the user
		throw redirect(302, '/dashboard');
	}
};
