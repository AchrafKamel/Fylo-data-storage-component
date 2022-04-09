<script>
    export let value = 0;

    $: safeValue = (value < 3)? 3 : (value > 100)? 100 : value;
</script>

<div class="w-full p-[0.2rem] bg-VeryDarkBlue rounded-full">
    <div class={`p-0.5 rounded-full bg-gradient-to-r from-Primary-first to-Primary-second flex justify-end`} style={`width: ${safeValue}%;`} >
        <div class="w-fit p-1 bg-white rounded-full"></div>
    </div>
</div>
<div class="w-full mt-1 text-[10px] font-bold flex justify-between">
    <span>0 GB</span>
    <span>1000 GB</span>
</div>