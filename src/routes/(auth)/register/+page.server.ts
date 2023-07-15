import { fail, redirect } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';

import { db } from '$lib/database';
import bcrypt from 'bcrypt';

enum Roles {
	ADMIN = 'ADMIN',
	USER = 'USER'
}

export const load: PageServerLoad = async () => {
	// todo
};

const register: Action = async ({ request }) => {
	const data = await request.formData();
	const email = data.get('email');
	const password = data.get('password');

	if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
		return fail(400, { invalid: true });
	}

	const user = await db.user.findUnique({
		where: { email }
	});

	if (user) {
		return fail(400, { user: true });
	}

	await db.user.create({
		data: {
			email,
			password: await bcrypt.hash(password, 10),
			role: { connect: { name: Roles.USER } }
		}
	});

	throw redirect(303, '/login');
};

export const actions: Actions = { register };
