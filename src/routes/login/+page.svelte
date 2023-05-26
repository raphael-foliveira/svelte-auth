<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/buttons/Button.svelte';
	import FormCard from '$lib/components/cards/FormCard.svelte';
	import BoundInput from '$lib/components/inputs/BoundInput.svelte';

	interface LoginData {
		email: string;
		password: string;
		error?: string;
	}

	let form: LoginData = {
		email: '',
		password: ''
	};

	const handleSubmit = async (event: SubmitEvent) => {
		event.preventDefault();
		const body = form;
		await fetch('/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body)
		})
			.then((res) => res.json())
			.then((data) => {
				if (data?.error) {
					form.error = data.error;
					return;
				}
				goto('/');
			});
	};
</script>

<form action="" on:submit={handleSubmit}>
	<FormCard>
		<h1>Login form</h1>
		<BoundInput label="Email" type="email" id="email" bind:value={form.email} />
		<BoundInput label="Password" type="password" id="password" bind:value={form.password} />
		<div class="w-full text-center text-red-500">
			<p>{form.error || ''}</p>
		</div>
		<Button>Submit</Button>
	</FormCard>
</form>
