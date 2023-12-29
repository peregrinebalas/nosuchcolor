<script>
  import About from './About.svelte';
  import { title } from './stores.js';
  let sections = [
    { heading: 'host', title: 'about' },
    { heading: 'information', title: 'location' },
    { heading: 'thing', title: 'gallery' },
  ];
  let currentSection;
  function handleClick(section) {
    $title = section.heading.toUpperCase();
    currentSection = section.title;
  }
</script>

{#each sections as section}
  <label>
    <button
      class="section-button"
      name="sections"
      value={section.heading}
      on:click={() => handleClick(section)}
    >
      <div class="section-title">{section.title}</div>
    </button>
  </label>
{/each}

{#if currentSection == 'about'}
  <About />
{:else if currentSection == 'location'}{/if}

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
