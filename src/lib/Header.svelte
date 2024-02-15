<script>
  import { title } from './stores.js';

  let color = 'color';
</script>

<div class="App-header">
  <div>
    <h1 class="App-title">
      NO SUCH <span
        class="app-title-nav"
        on:click={() => ($title = color.toUpperCase())}>{$title}</span
      >
    </h1>
  </div>
  <div class="slidecontainer">
    <input type="range" min="1" max="100" value="0" class="spectrum-slider" />
  </div>
</div>
