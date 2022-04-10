<script>
	import Button from "$components/shared/Button.svelte";
</script>

<div class="bg-DarkBlue lg:w-fit w-full p-8 pr-24 flex flex-col gap-6 rounded-lg rounded-tr-[84px]">
	<img class="w-36" src="/logo.svg" alt="fylo logo" />
	<div class="flex flex-row gap-3">
		<Button iconSrc='/icon-document.svg' alt="document icon" />
		<Button iconSrc='/icon-folder.svg' alt="folder icon" />
		<Button iconSrc='/icon-upload.svg' alt="upload icon" />
	</div>
</div>
