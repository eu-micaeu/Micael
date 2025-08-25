<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Curriculum Vitae - Micael</title>
</svelte:head>

{@render children?.()}
