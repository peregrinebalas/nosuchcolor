<script>
  import { title, titleDisplay, currentSection } from './stores.js';
  export let entry;

  let visible = false;

  function toggleVisible() {
    visible = !visible;
  }

  function handleMouseOver(entry) {
    if ($currentSection !== entry) {
      $titleDisplay = false;
      $currentSection = entry;
    }
  }

  function handleMouseLeave() {
    if (!visible) {
      $titleDisplay = false;
      $currentSection = null;
    }
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
