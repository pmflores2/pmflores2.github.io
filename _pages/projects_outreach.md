---
layout: page
title: outreach
permalink: /outreach/
description:
nav: true
nav_order: 5
horizontal: false
---

<!-- pages/projects_outreach.md -->
{% assign outreach_projects = site.projects
  | where_exp: "p", "p.category == 'science communication' or p.category == 'volunteer activities'"
  | sort: "importance" %}

<div class="projects">

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
      {% for project in outreach_projects %}
        {% include projects_outreach_horizontal_card.liquid %}
      {% endfor %}
    </div>
  </div>

{% else %}

  <div class="row row-cols-1 row-cols-md-3">
    {% for project in outreach_projects %}
      {% include projects_outreach_card.liquid %}
    {% endfor %}
  </div>

{% endif %}

</div>