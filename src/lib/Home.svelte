<script>
  import About from './About.svelte';
  import { title } from './stores.js';
  import Right from '$lib/assets/right-hand.png';
  import Left from '$lib/assets/left-hand.png';
  let links = [
    {
      heading: 'information',
      title: 'About',
      content: '',
      url: 'https://github.com/peregrinebalas',
    },
    {
      heading: 'host',
      title: 'Socials',
      url: 'https://www.linkedin.com/in/peregrine-balas/',
    },
    {
      heading: 'message',
      title: 'Contact',
      url: 'https://www.instagram.com/peregrinebalas/',
    },
    // {
    //   heading: 'source',
    //   title: 'GitHub',
    //   url: 'https://github.com/peregrinebalas',
    // },
    // {
    //   heading: 'job',
    //   title: 'LinkedIn',
    //   url: 'https://www.linkedin.com/in/peregrine-balas/',
    // },
    // {
    //   heading: 'image',
    //   title: 'Instagram',
    //   url: 'https://www.instagram.com/peregrinebalas/',
    // },
    // {
    //   heading: 'user',
    //   title: 'Facebook',
    //   url: 'https://www.facebook.com/peregrine.balas',
    // },
  ];
  let currentSection;
  function handleMouseOver(link) {
    $title = link.heading.toUpperCase();
    currentSection = link.title;
  }
  function handleMouseLeave() {
    $title = 'COLOR';
    currentSection = null;
  }
</script>

<div class="App-home">
  <div class="box">
    <div class="App-links">
      {#each links as link}
        <label>
          <section>
            <a
              class="App-entry"
              href={link.url}
              rel="noopener noreferrer"
              on:mouseover={() => handleMouseOver(link)}
              on:mouseleave={() => handleMouseLeave()}
            >
              {link.title}
            </a>
          </section>
        </label>
      {/each}
    </div>
  </div>
  <div class="glove" id="right-glove">
    <img class="right-hand" src={Right} alt="right hand" />
  </div>
  <div class="glove" id="left-glove">
    <img class="left-hand" src={Left} alt="left hand" />
  </div>
</div>
