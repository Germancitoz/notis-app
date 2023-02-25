<script>
  import { filteredNotes, notes } from '../stores/notes.js'
  import Note from './note/Note.svelte'
  import NoteCreate from './note/NoteCreate.svelte'

  $: localStorage.setItem('notes', JSON.stringify($notes))
  $: $filteredNotes = $notes
</script>

<section class="h-[84vh] mt-8 overflow-y-auto grid justify-center gap-10">
  <NoteCreate on:click />
  {#each $filteredNotes as { title, body, color, id } (id)}
    <Note {id} {title} {body} {color} />
  {/each}
</section>

<style>
  section {
    grid-template-columns: repeat(auto-fill, minmax(200px, 350px));
  }
</style>
