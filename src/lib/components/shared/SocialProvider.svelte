<script>
	import { Icons } from "$components/icons";
	import {Button} from "$components/ui/button";


</script>

<div class="relative">
    <div class="absolute inset-0 flex items-center">
        <span class="w-full border-t" />
    </div>
    <div class="relative flex justify-center text-xs uppercase">
        <span class="bg-background px-2 text-muted-foreground">
            Or continue with
        </span>
    </div>
</div>
<div class="grid grid-cols-2 gap-6">
    <Button variant="outline">
        <Icons.gitHub class="mr-2 h-4 w-4" />
        Github
    </Button>
    <Button variant="outline">
        <Icons.google class="mr-2 h-4 w-4" />
        Google
    </Button>
</div>