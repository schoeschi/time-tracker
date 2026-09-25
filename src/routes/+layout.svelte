<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
    import Header from "$lib/components/Header.svelte";
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Header />

<main class="p-4">
    {@render children()}
</main>

<ModeWatcher />