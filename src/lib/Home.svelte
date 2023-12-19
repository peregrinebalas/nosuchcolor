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

<!-- export default function Home() {
  return (
      <div className="App-home">
      <h3 style={{color: "white"}}>About Me</h3>
      <div>
      <a
          className="App-link"
          href="https://github.com/peregrinebalas"
          target="_blank"
          rel="noopener noreferrer"
      >
          GitHub
      </a>
      </div>
      <div>
     
      <a
          className="App-link"
          href="https://www.linkedin.com/in/peregrine-balas/"
          target="_blank"
          rel="noopener noreferrer"
      >
          LinkedIn
      </a>
      </div>
      <div>

      <a
          className="App-link"
          href="https://www.instagram.com/peregram_/"
          target="_blank"
          rel="noopener noreferrer"
      >
          Instagram
      </a>
      </div>
      <div>

      <a
          className="App-link"
          href="https://www.facebook.com/peregrine.balas"
          target="_blank"
          rel="noopener noreferrer"
      >
          Facebook
      </a>
      </div>
      </div>
  );
} -->
