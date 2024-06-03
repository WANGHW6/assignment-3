document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("query");
  if (query) {
      document.getElementById("search").value = query;
      document.getElementById("search-results-title").textContent = `Result for “${query}”`;
  }
});