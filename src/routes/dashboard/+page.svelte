<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
</script>

<h1>Admin</h1>

{#if $page.data.user}
	<p>Welcome {$page.data.user.id}!</p>
{/if}

{#if $page.data.user.role === 1}
	<form action="/logout" method="POST" use:enhance>
		<button type="submit">Log out</button>
	</form>
{/if}
