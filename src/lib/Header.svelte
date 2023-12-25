<script>
  import { title } from './stores.js';

  let color = 'Color';
</script>

<div class="App-header">
  <h1 class="App-title">
    <code
      >No Such <span class="App-title-nav" on:click={() => ($title = color)}
        >{$title}</span
      ></code
    >
  </h1>
</div>
