import type { Handle } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';

export const handle: Handle = async ({ event, resolve }) => {
	// get cookies from browser
	const session = event.cookies.get('session');

	if (!session) {
		// if there is no session load page as normal
		return await resolve(event);
	}

	// find the user based on the session
	const user = jwt.verify(session, 'secret');

	// if `user` exists set `events.local`
	if (user) {
		event.locals.user = {
			// @ts-ignore
			id: user.id,
			// @ts-ignore
			role: user.role
		};
	}

	// load page as normal
	return await resolve(event);
};
