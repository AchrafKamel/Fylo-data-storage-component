<script>
    import CtrlPanel from "$components/custom/CtrlPanel.svelte";
    import InfoPanel from "$components/custom/infoPanel.svelte";
</script>

<main class="h-screen w-screen grid place-items-center bg-VeryDarkBlue bg-bgMobile bg-cover lg:bg-bgDesktop lg:bg-contain bg-bottom bg-no-repeat ">
    <div class="flex flex-col lg:flex-row lg:items-end gap-6 w-[90%] lg:w-[60%] lg:-translate-y-12 items-start">
        <CtrlPanel />
        <InfoPanel />
    </div>
</main>