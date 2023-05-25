import prisma from '$lib/prisma/prisma';
import { redirect } from '@sveltejs/kit';
import type { RequestEvent } from '../register/$types';

export const POST = async ({ request, cookies }: RequestEvent) => {
	const data = await request.json();
	const { email, password } = data;
	if (!data.password) {
		return new Response(JSON.stringify({ error: 'Password is required' }));
	}

	const user = await prisma.user.findFirst({
		where: {
			email,
			password
		}
	});
	if (!user) {
		return new Response(JSON.stringify({ error: 'Incorrect credentials' }));
	}
	return new Response('{}', { status: 200 });
};
