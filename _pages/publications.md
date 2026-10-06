---
layout: page
permalink: /publications/
title: publications
description: collection of preprints, journal articles, and conference proceedings
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

{% include bib_search.liquid %}

<div class="publication-groups">

  <details class="publication-dropdown" open>
    <summary>Publications</summary>

    <div class="publications">
      {% bibliography --query @*[category=publication] %}
    </div>
  </details>

  <details class="publication-dropdown">
    <summary>Preprints</summary>

    <div class="publications">
      {% bibliography --query @*[category=preprint] %}
    </div>
  </details>

  <details class="publication-dropdown">
    <summary>Proceedings</summary>

    <div class="publications">
      {% bibliography --query @*[category=proceedings] %}
    </div>
  </details>

</div>
