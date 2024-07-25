<script>
  import { title, titleDisplay, currentSection } from './stores.js';
  export let entry;
  export let visible = false;
  export let toggleOthers;

  function toggleVisible() {
    toggleOthers();
    visible = !visible;
  }

  function handleMouseOver(entry) {
    if (!titleDisplay) {
      $currentSection = entry;
    } else if ($currentSection !== entry) {
      $titleDisplay = false;
      $currentSection = entry;
    } else {
      $titleDisplay = true;
    }
  }

  function handleMouseLeave() {
    if (!$titleDisplay) {
      $titleDisplay = true;
    } else if (!visible) {
      $titleDisplay = false;
      $currentSection = { heading: 'COLOR' };
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
