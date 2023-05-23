<script lang="ts">
	export let label: string;
	export let type = 'text';
	export let value = '';
	export let name = '';
	export let id = '';
</script>

<label class="label align-baseline w-full mt-3" for={id}
	>{label}
	<input class="input w-full p-2 text-center mt-3" {type} {name} {id} {value} />
</label>
