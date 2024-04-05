<script>
  let links = [
    { title: 'github', url: 'https://github.com/peregrinebalas' },
    {
      title: 'linkedin',
      url: 'https://www.linkedin.com/in/peregrine-balas/',
    },
    {
      title: 'instagram',
      url: 'https://www.instagram.com/peregrinebalas/',
    },
    { title: 'facebook', url: 'https://www.facebook.com/peregrine.balas' },
  ];
</script>

<div>
  {#each links as link}
    <div>
      <a class="about-me" href={link.url}>{link.title}</a>
    </div>
  {/each}
</div>
