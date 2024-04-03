<script>
  import About from './About.svelte';
  import Contact from './Contact.svelte';
  import Entry from './Entry.svelte';
  import Socials from './Socials.svelte';
  import Right from '$lib/assets/right-hand.png';
  import Left from '$lib/assets/left-hand.png';
  let entries = [
    {
      component: About,
      heading: 'information',
      title: 'About',
    },
    {
      component: Socials,
      heading: 'host',
      title: 'Socials',
      urls: {
        github: 'https://github.com/peregrinebalas',
        linkedin: 'https://www.linkedin.com/in/peregrine-balas/',
        instagram: 'https://www.instagram.com/peregrinebalas/',
        facebook: 'https://www.facebook.com/peregrine.balas',
      },
    },
    {
      component: Contact,
      heading: 'message',
      title: 'Contact',
    },
  ];
</script>

<div class="App-home">
  <div class="box">
    <div class="App-entries">
      {#each entries as entry}
        <section>
          <Entry {entry} />
        </section>
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
