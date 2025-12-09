---
layout: page
title: Projects
permalink: /projects/
description: 
nav: true
nav_order: 2
display_categories: [work, fun]
horizontal: false
---

## Featured

<div class="container">
  <div class="row">
  {% for project in site.projects %}
    <div class="col-sm-6 col-md-4 mb-4"> <a href="{{ project.url | relative_url }}">
        <div class="card hoverable h-100">
          {% if project.img %}
            <img src="{{ project.img | relative_url }}" class="card-img-top" alt="{{ project.title }}">
          {% endif %}
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
          </div>
        </div>
      </a>
    </div>
  {% endfor %}
  </div>
</div>

<br> 

## Current Projects

##### **Rural Heart Failure Patients and Perceived Health**
Managing heart failure can be challenging for rural individuals due to many logistical barriers. Using electronic health records and survey data, this study seeks to understand factors that influence health outcomes in those with heart failure in rural areas by building machine learning models to predict self-reported perception of health. <br>
([Assistant resources](/all-of-us/hf-project-resources))

##### **Antibiotic-Resistant Infections**
Antibiotic-resistant infections pose a serious global health threat. In this project, we leverage the rich dataset from [*All of Us* Research Program](https://allofus.nih.gov) to learn significant genetic, clinical, and socio-environmental risk factors in developing antibiotic-resistant infections. This project is part of the [All of Us Biomedical Researchers Scholars Program](https://www.bcm.edu/departments/molecular-and-human-genetics/engagement/all-of-us-evenings-with-genetics-research-program/all-of-us-biomedical-researchers-scholars-program) by Baylor College of Medicine, Cohort 4. *(Team Resistance: Natasha Mavengere, Easton Ford, Yesol Sapozhnikov, Jordan Langston, Stella Adeyemo, Greater Oyejobi)*


<br>
## Student Projects
I mentor students conducting research projects using *All of Us* data. The *All of Us* Research Program, funded by NIH, is a historic effort to gather health data from over one million people across the United States to advance precision medicine. Registered researchers can access the large, diverse data from electronic health records, survey responses, wearables, and genome sequencing.  

##### **[Resources](/all-of-us/) to get started with *All of Us* data**

##### **Mentored Projects:**<br>
--Skin cancer and barriers to healthcare access<br>
--GLP-1 agonists and alopecia<br>
--COVID-19 and risk of life-threatening infections<br>

<br>
## Completed Projects