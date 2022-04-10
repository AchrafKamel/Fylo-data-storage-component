<script>
    import ProgressBar from "$components/shared/ProgressBar.svelte";
</script>

<div class="w-full p-8 bg-DarkBlue relative font-Raleway text-PaleBlue rounded-lg">
    <h1 class="text-sm mb-3">You've used <strong>815 GB</strong> of your storage</h1>
    <ProgressBar value={81.5} />
    <div class="w-fit h-fit bg-white px-4 py-2 text-black absolute -bottom-7 right-1/2 translate-x-1/2 flex flex-row gap-2 rounded-lg \
                lg:-top-9 lg:rounded-br-none lg:right-8 lg:transform-none \
                lg:after:content-[''] lg:after:absolute lg:after:top-full lg:after:right-0 lg:after:border-white lg:after:border-t-[16px] lg:after:border-l-[16px] lg:after:border-l-transparent ">
        <span class="font-bold py-1 text-3xl flex">185</span>
        <span class="flex items-center text-GrayishBlue text-[10px] font-bold">GB LEFT</span>
    </div>
</div>