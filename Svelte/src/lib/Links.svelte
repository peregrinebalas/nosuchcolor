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
  <h3>"List of Sources"</h3>

  <p class="entry-p">
    "I am not sure that I exist, actually. I am all the writers that I have
    read, all the people that I have met, all the women that I have loved; all
    the cities I have visited."
    <span>--Jorge Luis Borges</span>
  </p>

  {#each links as link}
    <div>
      <a class="entry-p" href={link.url}>{link.title}</a>
    </div>
  {/each}
</div>
