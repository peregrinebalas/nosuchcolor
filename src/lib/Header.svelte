<script>
  import { title, titleDisplay, currentSection } from './stores.js';

  let color = 'color';

  function typewriter(node, { speed = 1 }) {
    const valid =
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
      throw new Error(
        `This transition only works on elements with a single text node child`
      );
    }

    const text = node.textContent;

    const duration = text.length / (speed * 0.01);

    return {
      duration,
      tick: (t) => {
        const i = Math.trunc(text.length * t);
        node.textContent = text.slice(0, i);
        if (i === 0) {
          console.log($currentSection);
          if ($currentSection) {
            $title = $currentSection.heading;
          } else {
            $title = 'COLOR';
          }
          $titleDisplay = true;
        }
      },
    };
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
