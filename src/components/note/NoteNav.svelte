<script>
  import { createEventDispatcher } from 'svelte'
  import { fly } from 'svelte/transition'
  import AcceptIcon from '../shared/icons/AcceptIcon.svelte'
  import BinDelete from '../shared/icons/BinDelete.svelte'
  import ChangeColorIcon from '../shared/icons/ChangeColorIcon.svelte'
  import RejectIcon from '../shared/icons/RejectIcon.svelte'

  let deleting = false
  const dispatch = createEventDispatcher()

  const handleDeletingMode = () => (deleting = !deleting)

  const handleColorChange = () => {
    dispatch('change', {
      target: {
        id: 'color'
      }
    })
  }

  const handleDelete = () => {
    dispatch('delete')
  }
</script>

<nav class="flex justify-between items-center py-4">
  <button on:click={handleColorChange} aria-label="Change note color">
    <ChangeColorIcon
      className="w-6 h-6 stroke-secondary stroke-2 transition-all hover:stroke-cblue" />
  </button>

  <div>
    {#if deleting}
      <button
        transition:fly={{
          x: 50,
          duration: 300
        }}
        on:click={handleDelete}
        class="accept"
        aria-label="Delete note">
        <AcceptIcon
          className="w-6 h-6 stroke-secondary stroke-2 transition-all hover:stroke-green-800" />
      </button>

      <button
        transition:fly={{
          x: 50,
          duration: 300
        }}
        on:click={handleDeletingMode}
        class="decline"
        style="margin-right: 5px;"
        aria-label="Change delete mode">
        <RejectIcon
          className="w-6 h-6 stroke-secondary stroke-2 transition-all hover:stroke-red-900" />
      </button>
    {/if}

    <button
      on:click={handleDeletingMode}
      class={deleting ? 'stroke-' : 'delete'}
      aria-label="Change delete mode">
      <BinDelete
        className="w-6 h-6 stroke-secondary stroke-2 transition-all hover:stroke-red-900 {deleting
          ? 'stroke-cblue'
          : ''}" />
    </button>
  </div>
</nav>
