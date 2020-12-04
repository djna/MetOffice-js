const ACTIVE = "active";
var forecastActive = "";
var globalWarmingActive = "";
if (document.URL.endsWith("global_warming")) {
  globalWarmingActive = ACTIVE;
} else {
  forecastActive = ACTIVE;
}
document.write(`
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="/">Met Office Weather</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ${forecastActive}">
        <a class="nav-link" href="/">Forecast</a>
      </li>
      <li class="nav-item ${globalWarmingActive}">
        <a class="nav-link" href="global_warming">Global warming</a>
      </li>
    </ul>
  </div>
  </nav>
`);