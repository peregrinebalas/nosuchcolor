<script>
  import { title } from './stores.js';
  export let entry;

  let visible = false;
  let currentSection;

  function toggleVisible() {
    visible = !visible;
  }

  function handleMouseOver(entry) {
    $title = entry.heading.toUpperCase();
    currentSection = entry.title;
  }
  function handleMouseLeave() {
    $title = 'COLOR';
    currentSection = null;
  }
</script>

<!-- <img src="" alt="headshot" /> -->
<div>
  <span
    id={visible === true ? 'App-entry-active' : ''}
    class="App-entry"
    on:mouseover={() => handleMouseOver(entry)}
    on:mouseleave={() => handleMouseLeave()}
    on:click={() => toggleVisible()}
  >
    {entry.title}
  </span>

  {#if visible}
    <svelte:component this={entry.component} props={entry.props} />
  {/if}
</div>
