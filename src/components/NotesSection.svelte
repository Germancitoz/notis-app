<script>
  import AsideMobileMenu from './aside/AsideMobileMenu.svelte'
  import NotesGrid from './NotesGrid.svelte'
  import ExpandIcon from './shared/icons/ExpandIcon.svelte'
  import ReturnIcon from './shared/icons/ReturnIcon.svelte'

  let isOpened = false
</script>

<section>
  <header class="flex justify-between items-center">
    <h1 class="text-5xl font-bold">Notis</h1>
    <button on:click={() => (isOpened = !isOpened)} class="block md:hidden">
      {#if isOpened}
        <ReturnIcon />
      {:else}
        <ExpandIcon />
      {/if}
    </button>
  </header>

  {#if isOpened}
    <AsideMobileMenu />
  {/if}

  <NotesGrid />
</section>
