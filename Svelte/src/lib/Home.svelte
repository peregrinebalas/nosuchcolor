<script>
  import About from './About.svelte';
  import Contact from './Contact.svelte';
  import Entry from './Entry.svelte';
  import Links from './Links.svelte';
  import Party from './Party.svelte';
  import Right from '$lib/assets/right-hand.png';
  import Left from '$lib/assets/left-hand.png';
  let entries = [
    {
      component: About,
      heading: 'INFORMATION',
      title: 'About',
    },
    {
      component: Links,
      heading: 'HOST',
      title: 'Links',
    },
    {
      component: Party,
      heading: 'EVENT',
      title: 'Parties',
    },
    {
      component: Contact,
      heading: 'MESSAGE',
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
  <div class="active-entry">
    <div class="glove" id="right-glove">
      <img class="right-hand" src={Right} alt="right hand" />
    </div>
    <div></div>
    <div class="glove" id="left-glove">
      <img class="left-hand" src={Left} alt="left hand" />
    </div>
  </div>
</div>
