const form = document.getElementById('uv-form');
const input = document.getElementById('uv-search-engine');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  let url = input.value;
  if (!url.startsWith('http')) url = 'https://' + url;
  
  // send directly to bypass backend
  location.href = 'https://uv.bypass.workers.dev/' + btoa(url);
});
