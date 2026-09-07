---
layout: page
permalink: /teaching/
title: Teaching
description: Courses and workshops taught at the University of Idaho and Cedars-Sinai Medical Center, spanning research methods, data science, and clinical nursing education.
nav: true
nav_order: 4
_styles: >
  .teaching-group + .teaching-group {
    margin-top: 2.75rem;
  }

  h2.teaching-inst {
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--global-theme-color);
    margin: 0 0 0.9rem 0;
  }

  .teaching-inst-years {
    letter-spacing: 0.04em;
    text-transform: none;
    font-weight: 400;
    font-size: 0.8rem;
    color: var(--global-text-color-light);
    margin-left: 0.35rem;
  }

  .teaching-card {
    border: 1px solid var(--global-divider-color);
    border-radius: 6px;
    background-color: var(--global-card-bg-color);
    padding: 0.95rem 1.15rem;
    margin-bottom: 0.65rem;
    transition: border-color 0.15s ease-in-out;
  }

  .teaching-card:hover {
    border-color: var(--global-theme-color);
  }

  .teaching-card-top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    flex-wrap: wrap;
  }

  h3.teaching-title {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.35;
    margin: 0;
    color: var(--global-text-color);
  }

  h3.teaching-title a {
    color: inherit;
  }

  h3.teaching-title a:hover {
    color: var(--global-theme-color);
  }

  h3.teaching-title i {
    font-size: 0.68em;
    margin-left: 0.4em;
    vertical-align: 0.15em;
    color: var(--global-theme-color);
  }

  .teaching-term {
    font-size: 0.78rem;
    color: var(--global-text-color-light);
    white-space: nowrap;
  }

  .teaching-role {
    display: inline-block;
    font-size: 0.7rem;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--global-theme-color);
    background-color: rgba(74, 121, 158, 0.1);
    background-color: color-mix(in srgb, var(--global-theme-color) 12%, transparent);
    border-radius: 3px;
    padding: 0.12rem 0.45rem;
    margin-top: 0.5rem;
  }

  .teaching-details {
    font-size: 0.88rem;
    line-height: 1.55;
    color: var(--global-text-color);
    opacity: 0.85;
    margin-top: 0.5rem;
  }

  .teaching-details span {
    display: block;
  }
---

{% include teaching.liquid %}
