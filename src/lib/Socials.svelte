<script lang="ts">
  export let urls: Array<String>;
</script>

<div>
  <p class="about-me">test</p>
  {#each urls as url}
    <span>{url}</span>
  {/each}
</div>
