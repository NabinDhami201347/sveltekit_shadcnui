<script lang="ts">
	import { Card, CardContent, CardFooter, CardTitle, CardHeader } from '$components/ui/card/';
	import SocialProvider from '$components/shared/SocialProvider.svelte';
	import Button from '$components/ui/button/Button.svelte';
	import Checkbox from '$components/ui/checkbox/Checkbox.svelte';
	import Input from '$components/ui/input/Input.svelte';
	import Label from '$components/ui/label/Label.svelte';

	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

	export let form: ActionData;
</script>

<main class="sm:flex items-center justify-center mt-10 px-1">
	<Card>
		<CardHeader>
			<CardTitle>Welcome Back!!</CardTitle>
		</CardHeader>
		<CardContent class="space-y-2">
			<form action="?/login" method="POST" use:enhance>
				<Label>Email</Label>
				<Input type="text" name="email" />

				<Label>Password</Label>
				<Input type="password" name="password" />

				{#if form?.invalid}
					<p class="text-red-500">Username and password is required.</p>
				{/if}
				{#if form?.credentials}
					<p class="text-rose-500">You have entered the wrong credentials.</p>
				{/if}

				<div class="flex items-center space-x-2 mt-4">
					<Checkbox id="terms" />
					<label
						for="terms"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						Accept terms and conditions
					</label>
				</div>

				<Button type="submit" class="w-full mt-4">Continue</Button>
			</form>
		</CardContent>

		<CardFooter>
			<SocialProvider />
		</CardFooter>
	</Card>
</main>
