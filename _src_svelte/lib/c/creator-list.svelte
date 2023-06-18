<script>
  import data from '$lib/data';
  import CreatorItem from '$lib/c/creator-item.svelte';
</script>

<!-- Search & filters -->
<div class="container mx-auto">
  <div class="content-heading">
    <div class="content-heading-title">
      <img src="/images/youtube_logo.png" class="content-heading-icon" alt="YouTube Logo" loading="lazy"/>
      <h1 class="content-heading-text">Content creators</h1>
    </div>
    <div class="content-heading-disclaimer">
      <strong>Consuming content is not radical political activism.</strong>
      It is also not a substitute for organizing, demonstrating, unionizing,
      agitating &amp; educating. Don&#x27;t forget to touch grass.
    </div>
  </div>
  <div class="content-form-block w-form">
    <form method="get" class="content-form">
      <div class="content-search">
        <label for="name" class="search-label">Search creator by name</label>
        <input id="name" type="text" class="search-field w-input" name="name" placeholder=""/>
      </div>
      <div class="content-filters">
        {#each data.tags as tag, i}
          <label class="w-checkbox filter-checkbox">
            <input type="checkbox" class="w-checkbox-input checkbox"/>
            <span class="checkbox-label w-form-label">{tag.text}</span>
          </label>
        {/each}
      </div>
    </form>
    <div class="w-form-done"><div>Thank you! Your submission has been received!</div></div>
    <div class="w-form-fail"><div>Oops! Something went wrong while submitting the form.</div></div>
  </div>
</div>

<!-- Creators list -->
<div class="container mx-auto grid grid-cols-3 gap-4 justify-center">
  {#each data.creators as creator}
    <CreatorItem {creator} />
  {/each}
</div>

