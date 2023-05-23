<script lang="ts">
	import Button from '$lib/components/buttons/Button.svelte';
	import FormCard from '$lib/components/cards/FormCard.svelte';
	import Input from '$lib/components/inputs/Input.svelte';
	import type { ActionData } from '../register/$types';

	export let form: ActionData;
</script>

<form action="">
	<FormCard>
		<h1>Login form</h1>
		<Input label="Email" type="email" name="email" id="email" value={form?.email || ''} />
		<Input label="Password" type="password" name="password" id="password" />
		<div class="w-full text-center text-red-500">
			{#if form?.error}
				<p>{form.error}</p>
			{/if}
		</div>
		<Button>Submit</Button>
	</FormCard>
</form>
