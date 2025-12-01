<script lang="ts">
  import config from '$src/helpers/config';
  import Heading from '$src/components/Heading.svelte';
  import Icon from '$src/components/Icon.svelte';
  import Button from '$src/components/Button.svelte';

  const { workExperience } = config; 

  </script>

<Heading level="h2" color="var(--foreground)">Resume</Heading>

<a class="download-btn" href="src/content/files/resume.pdf" download="resume.ryosoikutsu.pdf" role="button">
  <Icon name="download" />
  Download Resume
</a>

<style lang="scss">
  a {
    color: var(--accent);
  }
  small {
    display: block;
    margin-top: 1rem; 
    opacity: 0.6;
  }
  .download-btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
  }
  .download-btn:active {
    transform: translateY(1px);
  }

</style>
