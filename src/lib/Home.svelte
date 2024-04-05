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
      title: 'Links',
      props: [
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
      ],
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
    <ul class="App-entries">
      {#each entries as entry}
        <li>
          <Entry {entry} />
        </li>
      {/each}
    </ul>
  </div>
  <div class="glove" id="right-glove">
    <img class="right-hand" src={Right} alt="right hand" />
  </div>
  <div class="glove" id="left-glove">
    <img class="left-hand" src={Left} alt="left hand" />
  </div>
</div>
