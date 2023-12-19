<!-- import React from 'react';
import './App.css';
import Home from './Home'
import AppHeader from './AppHeader'

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <Home></Home>
    </div>
  );
}

export default App; -->

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
