<script lang="ts">
	let isDark = true;
	const toggleTheme = () => {
		const htmlDoc = document.querySelector('html');
		isDark = !isDark;
		return htmlDoc!.classList.toggle('dark');
	};
</script>

<button on:click={toggleTheme}> {isDark ? 'Light' : 'Dark'} Theme </button>
