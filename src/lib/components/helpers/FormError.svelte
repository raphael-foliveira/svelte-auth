<script lang="ts">
	export let errorMessage: string = '';
</script>

{#if errorMessage !== ''}
	<div class="w-full text-center text-red-500">
		<p>{errorMessage}</p>
	</div>
{/if}
