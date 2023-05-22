<script lang="ts">
	import FormCard from '$lib/components/cards/FormCard.svelte';
	import { buttonClasses, inputClasses, labelClasses } from '$lib/tailwindStyles/constants';
	import type { ActionData } from '../register/$types';

	export let form: ActionData;
</script>

<form action="">
	<FormCard>
		<h1>Login form</h1>
		<label class={labelClasses} for="email"
			>Email
			<input class={inputClasses} type="email" name="email" id="email" value={form?.email || ''} />
		</label>
		<label class={labelClasses} for="password"
			>Password
			<input class={inputClasses} type="password" name="password" id="password" />
		</label>
		<div class="w-full text-center text-red-500">
			{#if form?.error}
				<p>{form.error}</p>
			{/if}
		</div>
		<button class={buttonClasses}>Submit</button>
	</FormCard>
</form>
