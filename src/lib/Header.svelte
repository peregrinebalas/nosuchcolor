<script>
  import { title } from './stores.js';

  let color = 'color';
</script>

<div class="App-header">
  <div class="app-title-div">
    <h1 class="App-title">
      NO SUCH <span
        class="app-title-nav"
        on:click={() => ($title = color.toUpperCase())}>{$title}</span
      >
    </h1>
  </div>
</div>
<div class="header-svg-div">
  <svg viewBox="0 0 100 5">
    <line x1="0" y1="4" x2="100" y2="1" stroke="lightgray" stroke-width="0.2" />
  </svg>
</div>
