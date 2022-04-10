<script>
    import ProgressBar from "$components/shared/ProgressBar.svelte";
</script>

<div class="w-full md:w-2/3 p-8 bg-DarkBlue relative font-Raleway text-PaleBlue rounded-lg">
    <h1 class="text-sm mb-3">You've used <strong>815 GB</strong> of your storage</h1>
    <ProgressBar value={81.5} />
    <div class="w-fit h-fit bg-white px-4 py-1 text-black absolute -bottom-7 right-1/2 translate-x-1/2 flex flex-row gap-2 rounded-lg \
                md:-top-9 md:rounded-br-none md:right-8 md:transform-none \
                md:after:content-[''] md:after:absolute md:after:top-full md:after:right-0 md:after:border-white md:after:border-t-[16px] md:after:border-l-[16px] md:after:border-l-transparent ">
        <span class="font-bold py-1 text-3xl flex">185</span>
        <span class="flex items-center text-GrayishBlue text-[10px] font-bold">GB LEFT</span>
    </div>
</div>