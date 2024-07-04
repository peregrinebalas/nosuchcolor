<script>
  import { get } from 'svelte/store';
  import { title, titleDisplay, currentSection } from './stores.js';

  let color = 'color';

  $: $title, displayTitle();

  function displayTitle() {
    $titleDisplay = true;
  }

  function typewriter(node, { speed = 1 }) {
    let text = node.textContent;
    const duration = text.length / (speed * 0.01);

    return {
      duration,
      tick: (t) => {
        const i = Math.trunc(text.length * t);
        node.textContent = text.slice(0, i);
        if (i === 0) {
          // if ($currentSection) {
          $title = $currentSection?.heading;
          // } else {
          //   $title = 'COLOR';
          // }

          text = $title;
        }
      },
    };
  }

  function setTitle() {
    if ($currentSection) {
      $title = $currentSection.heading;
    } else {
      $title = 'COLOR';
    }
  }
</script>

<div class="App-header">
  <div class="app-title-div">
    <h1 class="App-title">
      NO SUCH {#if $titleDisplay}<span
          transition:typewriter
          class="app-title-nav"
          on:click={() => ($title = color.toUpperCase())}>{$title}</span
        >{/if}
    </h1>
  </div>
</div>
<div class="header-svg-div">
  <svg viewBox="0 0 100 5">
    <line x1="0" y1="4" x2="100" y2="1" stroke="lightgray" stroke-width="0.2" />
  </svg>
</div>
