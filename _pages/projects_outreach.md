---
layout: page
title: outreach
permalink: /outreach/
description:
nav: true
nav_order: 5
display_categories:
  - science communication
  - volunteer activities
horizontal: true
toc:
  sidebar: left
---

<!-- pages/projects_outreach.md -->
<div class="projects">

{% if site.enable_project_categories and page.display_categories %}

  {% for category in page.display_categories %}

    {% assign category_slug = category | slugify %}

    <section class="outreach-section">

      <h2 id="{{ category_slug }}" class="category">
        {{ category }}
      </h2>

      {% assign categorized_projects = site.projects | where: "category", category %}
      {% assign sorted_projects = categorized_projects | sort: "importance" %}

      {% if page.horizontal %}

        <div class="container">
          <div class="row row-cols-1 row-cols-md-2">

            {% for project in sorted_projects %}
              {% include projects_outreach_horizontal_card.liquid %}
            {% endfor %}

          </div>
        </div>

      {% else %}

        <div class="row row-cols-1 row-cols-md-3">

          {% for project in sorted_projects %}
            {% include projects_outreach_card.liquid %}
          {% endfor %}

        </div>

      {% endif %}

    </section>

  {% endfor %}

{% else %}

  {% assign sorted_projects = site.projects | sort: "importance" %}

  {% if page.horizontal %}

    <div class="container">
      <div class="row row-cols-1 row-cols-md-2">

        {% for project in sorted_projects %}
          {% include projects_outreach_horizontal_card.liquid %}
        {% endfor %}

      </div>
    </div>

  {% else %}

    <div class="row row-cols-1 row-cols-md-3">

      {% for project in sorted_projects %}
        {% include projects_outreach_card.liquid %}
      {% endfor %}

    </div>

  {% endif %}

{% endif %}

</div>

<style>
  .outreach-section {
    margin-bottom: 2.5rem;
    scroll-margin-top: 90px;
  }
</style>
