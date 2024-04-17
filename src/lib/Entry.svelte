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

<div>
  <div
    id={visible === true ? 'App-entry-active' : ''}
    class="App-entry"
    on:mouseover={() => handleMouseOver(entry)}
    on:mouseleave={() => handleMouseLeave()}
    on:click={() => toggleVisible()}
  >
    {entry.title}
  </div>

  {#if visible}
    <div class="entry">
      <svelte:component this={entry.component} />
    </div>
  {/if}
</div>
