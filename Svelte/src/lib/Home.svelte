<script>
  import About from './About.svelte';
  import Contact from './Contact.svelte';
  import Entry from './Entry.svelte';
  import Links from './Links.svelte';
  import Definitions from './Definitions.svelte';
  import Party from './Party.svelte';
  import Hands from './Hands.svelte';

  let entries = [
    {
      component: About,
      heading: 'INFORMATION',
      title: 'About',
    },
    {
      component: Links,
      heading: 'SOURCE',
      title: 'Technologies',
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
    {
      component: Definitions,
      heading: 'MEANING',
      title: 'Definitions',
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
    <Hands></Hands>
  </div>
</div>
