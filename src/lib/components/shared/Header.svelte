<script>
	import Button from '$components/ui/button/Button.svelte';
	import Separator from '$components/ui/separator/Separator.svelte';

	import { page } from '$app/stores';
</script>

<nav class="flex items-center justify-between p-4">
	<a href="/"><h1>Cricket betting</h1></a>

	<ul class="flex items-center gap-4">
		{#if $page.data.user}
			<li><a href="/">Home</a></li>
			<li><a href="/dashboard">Dashboard</a></li>
			<li><a href="/contact">Contact</a></li>
			<form action="/logout" method="post">
				<Button variant="destructive" type="submit">Logout</Button>
			</form>
		{:else}
			<a href="/login"><Button>Login</Button></a>
			<a href="/register"> <Button variant="outline">Register</Button></a>
		{/if}
	</ul>
</nav>
<Separator />
