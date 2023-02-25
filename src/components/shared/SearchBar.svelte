<script>
  import { filterNotes } from '../../stores/notes.js'

  function handleSearch(event) {
    filterNotes(event.target.value)
  }
</script>

<div class="relative">
  <div
    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg
      aria-hidden="true"
      class="w-5 h-5 text-gray-500 dark:text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
  </div>
  <input
    type="text"
    placeholder="Search"
    class="w-full p-2 mt-3 block pl-10 outline-[0.2px] rounded-md active:outline outline-primary placeholder:text-tertiary text-secondary"
    on:input={handleSearch} />
</div>
