---
layout: default_page
title: Blog
---
<section class="posts" role="main">
  <ul class="nav  nav--stacked">
    {% for post in site.posts %}
      {% if post.category == "case-study" %}
      {% else if %}
        <li class="u--m-bottom--huge">
          <a href="{{ post.url }}" class="">
            <span class="heading  t--center  no-spacing  page-subtitle">{{ post.date | date: "%B %-d" }}</span>
            <h3 class="heading  kilo  t--center  post-title">{{ post.title }}</h3>
          </a>
          <div class="text-col">
            <p class="t--center  lede">{{ post.content | strip_html | truncatewords: 40 }}</p>
          </div>
        </li>
      {% endif %}
    {% endfor %}
  </ul>
</section>