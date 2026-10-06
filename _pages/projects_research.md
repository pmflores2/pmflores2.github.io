---
layout: page
title: research
permalink: /projects/research/
description:
nav: false
display_categories:
  - chirality and spin-polarization in photoionization
  - time-of-arrival operators
horizontal: false
toc:
  sidebar: left
---

<!-- pages/projects_research.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}

  {% for category in page.display_categories %}

    {% assign category_slug = category | slugify %}
    {% capture description_file %}research/{{ category_slug }}.html{% endcapture %}
    {% assign description_file = description_file | strip %}

    <section class="research-section">

      <!-- Category title + collapsible description only -->
      <details class="research-description-dropdown" {% if forloop.first %}open{% endif %}>
        <summary>
          <h2 id="{{ category_slug }}" class="category">{{ category }}</h2>
        </summary>

        <div class="research-category-description">
          {% include {{ description_file }} %}
        </div>
      </details>

      <!-- Project cards stay visible regardless of dropdown state -->
      {% assign categorized_projects = site.projects | where: "category", category %}
      {% assign sorted_projects = categorized_projects | sort: "importance" %}

      {% if page.horizontal %}
        <div class="container">
          <div class="row row-cols-1 row-cols-md-2">
            {% for project in sorted_projects %}
              {% include projects_research_horizontal_card.liquid %}
            {% endfor %}
          </div>
        </div>
      {% else %}
        <div class="row row-cols-1 row-cols-md-3">
          {% for project in sorted_projects %}
            {% include projects_research_card.liquid %}
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
          {% include projects_research_horizontal_card.liquid %}
        {% endfor %}
      </div>
    </div>
  {% else %}
    <div class="row row-cols-1 row-cols-md-3">
      {% for project in sorted_projects %}
        {% include projects_research_card.liquid %}
      {% endfor %}
    </div>
  {% endif %}

{% endif %}
</div>

<style>
  .research-section {
    margin-bottom: 2rem;
    scroll-margin-top: 90px;
  }

  .research-description-dropdown > summary {
    cursor: pointer;
    margin-bottom: 1rem;
  }

  .research-description-dropdown > summary .category {
    display: inline;
  }

  .research-category-description {
    margin: 1rem 0 2rem;
  }

  .research-subheading {
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }
</style>

<script>
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('#toc-sidebar a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function () {
      const id = this.getAttribute("href").slice(1);
      const target = document.getElementById(id);

      if (target) {
        const details = target.closest("details");
        if (details) {
          details.open = true;
        }
      }
    });
  });
});
</script>
