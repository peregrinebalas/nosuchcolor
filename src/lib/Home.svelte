<script>
  let titles = ['person', 'place', 'thing'];
  let sections = [
    { heading: 'person', title: 'about' },
    { heading: 'place', title: 'location' },
    { heading: 'thing', title: 'gallery' },
  ];

  const formatter = new Intl.ListFormat('en', {
    style: 'long',
    type: 'conjunction',
  });
</script>

{#each sections as section}
  <label>
    <button name="sections" value={section.heading}>
      {section.title}
    </button>
  </label>
{/each}

<div class="App-home">
  <div>
    <a
      class="App-link"
      href="https://github.com/peregrinebalas"
      rel="noopener noreferrer"
    >
      GitHub
    </a>
  </div>
  <div>
    <a
      class="App-link"
      href="https://www.linkedin.com/in/peregrine-balas/"
      rel="noopener noreferrer"
    >
      LinkedIn
    </a>
  </div>
  <div>
    <a
      class="App-link"
      href="https://www.instagram.com/peregram_/"
      rel="noopener noreferrer"
    >
      Instagram
    </a>
  </div>
  <div>
    <a
      class="App-link"
      href="https://www.facebook.com/peregrine.balas"
      rel="noopener noreferrer"
    >
      Facebook
    </a>
  </div>
</div>
