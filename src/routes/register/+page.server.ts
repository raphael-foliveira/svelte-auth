import { redirect, type Actions, fail } from '@sveltejs/kit';
import prisma from '$lib/prisma/prisma';

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const username = formData.get('username') as string;
		const password = formData.get('password') as string;
		const confirmPassword = formData.get('confirmPassword');
		const data = {
			email,
			username,
			password
		};
		if (password !== confirmPassword) {
			return fail(400, {
				email,
				username,
				error: "passwords don't match",
				incorrect: true
			});
		}

		try {
			await prisma.user.create({ data });
		} catch (e) {
			console.log(e);
			return fail(400, {
				email,
				username,
				error: 'username already taken',
				incorrect: true
			});
		}
		cookies.set('authorization', 'yes', {
			expires: new Date(Date.now() + 1000 * 60 * 30)
		});
		throw redirect(303, '/');
	}
};
