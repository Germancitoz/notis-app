<script>
  import { deleteNote, editNote } from '../../stores/notes.js'
  import NoteNav from './NoteNav.svelte'

  export let id
  export let title
  export let body
  export let color

  function handleChange(event) {
    editNote({
      id,
      title,
      body,
      color: event.detail.target.id === 'color' ? true : color
    })
  }

  function handleDelete() {
    deleteNote(id)
  }
</script>

<article
  class="max-w-[400px] h-[300px] w-full rounded-md px-4"
  style="background: {color};">
  <NoteNav on:change={handleChange} on:delete={handleDelete} />
  <input
    type="text"
    on:change={handleChange}
    placeholder="Insert a title"
    bind:value={title} />
  <textarea
    on:change={handleChange}
    placeholder="Insert a body"
    bind:value={body} />
</article>

<style>
  input {
    font-weight: bold;
    background: transparent;
    border: none;
    width: 100%;
    font-size: 1.2rem;
    outline: none;
    overflow-y: scroll;
  }

  input::placeholder {
    color: var(--color-gray);
  }

  textarea {
    margin-top: 8px;
    background: transparent;
    border: none;
    width: 100%;
    height: 65%;
    font-size: 1rem;
    outline: none;
    resize: none;
  }

  textarea::placeholder {
    color: var(--color-gray);
  }
</style>
