<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<div
	class={cn('rounded-sm sm:w-2/4 border bg-card text-card-foreground shadow-md', className)}
	{...$$restProps}
	on:click
	on:focusin
	on:focusout
	on:mouseenter
	on:mouseleave
>
	<slot />
</div>
