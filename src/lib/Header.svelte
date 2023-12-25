<script>
  import { title } from './stores.js';

  let color = 'color';
</script>

<div class="App-header">
  <h1 class="App-title">
    <code
      >NO SUCH <span
        class="App-title-nav"
        on:click={() => ($title = color.toUpperCase())}>{$title}</span
      ></code
    >
  </h1>
</div>
