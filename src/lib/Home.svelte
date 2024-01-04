<script>
  import About from './About.svelte';
  import { title } from './stores.js';
  let links = [
    {
      heading: 'source',
      title: 'GitHub',
      url: 'https://github.com/peregrinebalas',
    },
    {
      heading: 'job',
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/peregrine-balas/',
    },
    {
      heading: 'image',
      title: 'Instagram',
      url: 'https://www.instagram.com/peregrinebalas/',
    },
    {
      heading: 'user',
      title: 'Facebook',
      url: 'https://www.facebook.com/peregrine.balas',
    },
  ];
  let currentSection;
  function handleClick(section) {
    $title = section.heading.toUpperCase();
    currentSection = section.title;
  }
</script>

<!-- {#each sections as section}
  <label>
    <button
      class="section-button"
      name="sections"
      value={section.heading}
      on:click=
    >
      <div class="section-title">{section.title}</div>
    </button>
  </label>
{/each} -->

<!-- {#if currentSection == 'about'}
  <About />
{:else if currentSection == 'location'}
  <
{/if} -->

<div class="App-home">
  {#each links as link}
    <label>
      <!-- <button class="section-button" name="sections" value={section.heading}>
        <div class="section-title">{section.title}</div>
      </button> -->
      <a
        class="App-link"
        href={link.url}
        rel="noopener noreferrer"
        on:mouseover={() => handleClick(link)}
        on:mouseleave={() => handleClick({ heading: 'color' })}
      >
        {link.title}
      </a>
    </label>
  {/each}
</div>
