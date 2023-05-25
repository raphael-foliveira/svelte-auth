<script lang="ts">
	import type { ActionData } from './$types';
	import FormCard from '$lib/components/cards/FormCard.svelte';
	import Input from '$lib/components/inputs/Input.svelte';
	import Button from '$lib/components/buttons/Button.svelte';
	import FormError from '$lib/components/helpers/FormError.svelte';
	export let form: ActionData;
</script>

<form action="" method="POST">
	<FormCard>
		<h1>Registration form</h1>
		<Input label="Email" type="email" id="email" value={form?.email || ''} />
		<Input label="Username" type="text" id="username" value={form?.username || ''} />
		<Input label="Password" type="password" id="password" />
		<Input label="Confirm Password" type="password" id="confirmPassword" />
		<FormError errorMessage={form?.error} />
		<Button>Submit</Button>
	</FormCard>
</form>
