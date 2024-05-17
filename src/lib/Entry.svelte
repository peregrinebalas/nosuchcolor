<script>
  import { title, titleDisplay, currentSection } from './stores.js';
  export let entry;

  let visible = false;

  function toggleVisible() {
    visible = !visible;
  }

  function handleMouseOver(entry) {
    console.log('handleMouseOver entry', entry);
    console.log('handleMouseOver $currentSection', $currentSection);
    if (!titleDisplay) {
      $currentSection = entry;
    } else if ($currentSection !== entry) {
      console.log('handleMouseOver $titleDisplay', $titleDisplay);
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
