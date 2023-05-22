<script lang="ts">
	import type { ActionData } from './$types';
	import FormCard from '$lib/components/cards/FormCard.svelte';
	import { buttonClasses, inputClasses, labelClasses } from '$lib/tailwindStyles/constants';

	export let form: ActionData;
</script>

<form action="" method="POST">
	<FormCard>
		<h1>Registration form</h1>
		<label class={labelClasses} for="email"
			>Email
			<input class={inputClasses} type="email" name="email" id="email" value={form?.email || ''} />
		</label>
		<label class={labelClasses} for="username"
			>Username
			<input
				class={inputClasses}
				type="text"
				name="username"
				id="username"
				value={form?.username || ''}
			/>
		</label>
		<label class={labelClasses} for="password"
			>Password
			<input class={inputClasses} type="password" name="password" id="password" />
		</label>
		<label class={labelClasses} for="confirmPassword"
			>Confirm Password
			<input class={inputClasses} type="password" name="confirmPassword" id="confirmPassword" />
		</label>
		<div class="w-full text-center text-red-500">
			{#if form?.error}
				<p>{form.error}</p>
			{/if}
		</div>

		<button class={buttonClasses}>Submit</button>
	</FormCard>
</form>

<style>
	.card {
		max-width: 400px;
	}
	input:focus-visible {
		outline: none;
	}
</style>
