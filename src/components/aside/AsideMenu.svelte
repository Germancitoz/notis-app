<script>
  import GithubIcon from '../shared/icons/GithubIcon.svelte'
  import SearchBar from '../shared/SearchBar.svelte'
</script>

<aside
  class="rounded-2xl bg-[#F4F4F4] p-6 hidden md:flex md:flex-col md:justify-between ">
  <header>
    <h1 class="text-3xl font-bold text-secondary">Menu</h1>
    <SearchBar />
  </header>
  <aside class="flex-grow" />
  <footer class="flex flex-col justify-center items-center gap-2">
    <a
      target="_blank"
      rel="noreferrer"
      href="https://github.com/Germancitoz/notis">
      <GithubIcon />
    </a>
    <h1 class="flex-glow text-center">
      Created by <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Germancitoz"
        ><span
          class="font-bold hover:underline text-cblue opacity-70 hover:opacity-100 transition-colors"
          >@Germancitoz</span
        ></a>
    </h1>
  </footer>
  <section />
</aside>
