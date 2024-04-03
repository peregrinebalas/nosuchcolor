<script>
  import { title } from './stores.js';
  export let props;

  let visible = false;
  let currentSection;

  function toggleVisible() {
    visible = !visible;
  }

  function handleMouseOver(link) {
    $title = link.heading.toUpperCase();
    currentSection = link.title;
  }
  function handleMouseLeave() {
    $title = 'COLOR';
    currentSection = null;
  }
</script>

<!-- <img src="" alt="headshot" /> -->
<span
  id={visible === true ? 'App-entry-active' : ''}
  class="App-entry"
  on:mouseover={() => handleMouseOver(props)}
  on:mouseleave={() => handleMouseLeave()}
  on:click={() => toggleVisible()}
>
  {props.title}
</span>

{#if visible}
  <span class="about-me">
    I was raised by a mathematician and an environmentalist. They recognized I
    would be a product of my time, distinct from theirs. It gave me a hope of
    understanding the differences and similarities between us. I recognize that
    my sense of humor may be hard to understand, as I think miswording things is
    funny. A sentence may be imperfect, or ultimately unintelligible, but an
    attempt in understanding is worth a smile.
  </span>
{/if}
