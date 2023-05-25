<script lang="ts">
	export let label: string;
	export let type = 'text';
	export let id = '';
	export let value: string;
</script>

<label class="label align-baseline w-full mt-3" for={id}
	>{label}
	{#if type === 'text' || type === 'email'}
		<input class="input w-full p-2 text-center mt-3" type="text" name={id} {id} bind:value />
	{:else if type === 'password'}
		<input class="input w-full p-2 text-center mt-3" type="password" name={id} {id} bind:value />
	{/if}
</label>
