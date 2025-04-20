const form = document.getElementById('uv-form');
const input = document.getElementById('uv-search-engine');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  let url = input.value.trim();
  if (!url.startsWith('http')) url = 'https://' + url;

  // THIS IS THE FIX: Send to public proxy directly
 window.location.href = 'https://uv.titaniumnetwork.org/' + btoa(url);
});
