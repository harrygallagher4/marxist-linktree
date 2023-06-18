<script>
  // accept `creator` as a parameter
  export let creator;
</script>


<div role="listitem" class="bg-zinc-900 text-zinc-50 p-7 pt-6 rounded-3xl">
  <div class="space-y-3">

    <!-- Avatar/Username -->
    <div>
      <a href="/content-creators/{creator.slug}">
        <div class="flex items-center gap-x-4">
          <img
            class="rounded-full h-20 flex-none"
            src="/creator_avatars/{creator.avatar}"
            loading="lazy"
            alt=""/>
          <div class="text-lg font-bold">{creator.name}</div>
        </div>
      </a>
    </div>

    <!-- Tags -->
    <div class="flex flex-wrap items-center justify-items-start gap-x-2">
      {#each creator.tags as tag, i}
        <div class="text-xs rounded-full text-zinc-200 bg-zinc-700 p-0.5">{tag.name}</div>
      {/each}
    </div>

    <!-- Description -->
    <div>
      <p class="text-sm text-zinc-300">{creator.short_description}</p>
    </div>

  </div>
</div>

