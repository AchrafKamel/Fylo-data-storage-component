<script>
    import CtrlPanel from "../components/custom/CtrlPanel.svelte";
    import InfoPanel from "../components/custom/infoPanel.svelte";
</script>

<main class="h-screen w-screen grid place-items-center bg-VeryDarkBlue bg-bgMobile bg-cover md:bg-bgDesktop md:bg-contain bg-bottom bg-no-repeat ">
    <div class="flex flex-col md:flex-row md:items-end gap-6 w-[60%] md:-translate-y-16 items-start">
        <CtrlPanel />
        <InfoPanel />
    </div>
</main>