<script>
    import { userData } from "$lib/firebase";

  </script>
  
  <svelte:head>
    <title>MattBusscher.com - a place for links</title>
    <meta name="description" content="Demo project for the Full SvelteKit Course by Fireship" />
  </svelte:head>
  
  <main class="flex w-full min-h-screen">
  
    <div class="hero bg-base-200">
      <div class="hero-content text-center">
        <div class="w-full">
          <h1 class="text-7xl font-bold">MattBusscher.com</h1>
          <p class="py-6 text-2xl">One simple site to store all my important links</p>
          {#if $userData?.username}
            <a href="/{$userData.username}/edit" class="btn btn-primary">Edit Profile</a>
            <a href="/{$userData.username}" class="btn btn-secondary">View Profile</a>
          {:else}
            <a href="/login" class="btn btn-primary">Get Started</a>
            <a href="/busscher" class="btn btn-secondary">Example Profile</a>
          {/if}
        </div>
      </div>
    </div>
    
  </main>