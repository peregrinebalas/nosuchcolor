<script>
  export let props;
</script>

<div>
  {#each props as link}
    <div>
      <a class="about-me" href={link.url}>{link.title}</a>
    </div>
  {/each}
</div>
