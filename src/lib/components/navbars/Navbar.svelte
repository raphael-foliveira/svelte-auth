<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppBar padding="p-4 pl-10 pr-10">
	<div slot="lead">
		<a href="/">Home</a>
		<a href="/login">Login</a>
		<a href="/register">Register</a>
	</div>
	<LightSwitch slot="trail" />
</AppBar>

<style>
	div a {
		margin: 0 1rem 0 0;
	}
</style>
