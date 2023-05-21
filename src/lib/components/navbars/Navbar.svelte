<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import LightSwitch from './LightSwitch.svelte';
</script>

<AppBar padding="p-4 pl-10 pr-10">
	<div slot="lead">
		<a href="/">Home</a>
		<a href="/register">Register</a>
	</div>
	<svelte:fragment slot="trail">
		<LightSwitch />
	</svelte:fragment>
</AppBar>

<style>
	div a {
		margin: 0 1rem 0 0;
	}
</style>
