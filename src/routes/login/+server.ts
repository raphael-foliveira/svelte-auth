import prisma from '$lib/prisma/prisma';
import { redirect } from '@sveltejs/kit';
import type { RequestEvent } from '../register/$types';

export const POST = async ({ request, cookies }: RequestEvent) => {
	const data = await request.json();
	const { email, password } = data;
	try {
		if (!data.password) {
			throw new Error("Password can't be empty");
		}
		const user = await prisma.user.findFirst({
			where: {
				email,
				password
			}
		});
		if (!user) {
			throw new Error("User doesn't exist");
		}
		return new Response('{}', { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ error }));
	}
};
