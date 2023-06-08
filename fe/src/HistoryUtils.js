export function setURL(url) {
  history.pushState({}, '', url);
  window.dispatchEvent(new Event('popstate'));
}