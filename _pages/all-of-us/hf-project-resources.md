---
layout: page
title: Heart Failure Project - Getting Started
permalink: /all-of-us/hf-project-resources
description: 
nav: false
nav_order: 2
display_categories: [work, fun]
horizontal: false
---


##### **Week 1: Registration and Training**
1. Go to the *All of Us* Research [Hub](https://www.researchallofus.org). Click on the "REGISTER" button on the top right corner and follow the instructions to verify identity and create an account.
2. Complete required training modules. University of Idaho has Controlled Tier level access. You must complete the second (longer) training module to gain access to the Controlled Tier data.
3. Watch New User Orientation recording:
    <div class="row mt-3">
        <div class="col-sm-10 mx-auto"> <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/N1WRwK-7OWM?si=9c0DL3br808Bbn_B" title="YouTube video player" allowfullscreen></iframe>
            </div>
        </div>
    </div>
4. Read support articles on Understanding the All of Us Data: 
    * [Data types and organization](https://support.researchallofus.org/hc/en-us/articles/4619151535508-Data-Types-and-Organization)
    * [Participant privacy protections](https://support.researchallofus.org/hc/en-us/articles/4552681983764-Participant-Privacy-Protections) 
    * [Understanding OMOP basics](https://support.researchallofus.org/hc/en-us/articles/360039585391-Understanding-OMOP-Basics) 
    * [Exploring concepts with OMOP and SQL](https://support.researchallofus.org/hc/en-us/articles/360039585491-Exploring-Concepts-with-OMOP-and-SQL) (Ignore SQL section) 
5. Baylor College of Medicine Train-the-Trainer Videos (Link to be sent via email)
    * Dropbox folders with recording files: Watch Lesson 1: Intro to the Workbench, and Lesson 2: Creating a dataset: Workspaces, Phenotypes & Cohorts 
6. Jupyter Notebook 
    * Jupyter Notebook in 10 Minutes (Don't worry about installing and running it. Just watch and get acquainted with the interface)
    <div class="row mt-3">
        <div class="col-sm-10 mx-auto"> <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/H9Iu49E6Mxs?si=a_17vHSRCkbn3Pyt" title="YouTube video player" allowfullscreen></iframe>
            </div>
        </div>
    </div>

7. Create a Workspace for this project (I will send you project descriptions)
    * Step-by-step [Creating a Workspace](https://support.researchallofus.org/hc/en-us/articles/30143658322836-Creating-a-Workspace)
        * **NOTE** When selecting data access tier, make sure to choose **Controlled Tier**. In most cases, this is what we want. For Dataset Version, choose v8 (whatever the latest)
    * [Writing Your Workspace Description](https://support.researchallofus.org/hc/en-us/articles/30351591538580-Writing-Your-Workspace-Description)
    * [Sample Workspace Description](https://support.researchallofus.org/hc/en-us/articles/360042673211-Sample-Workspace-Description)
8. Extra: 
    * Browse Featured Workspaces, duplicate one and explore. 
        * Recommended Workspace: Beginner Intro to AoU Data and the Workbench
    

##### **Week 2: Data Organization and Extraction (EHR and Survey)**
1. Learn to use Cohort Builder and Dataset Builder
    <div class="row mt-3">
        <div class="col-sm-10 mx-auto"> <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/V1Gt3gputpU?si=J8w3ABTpbVThetD0" title="YouTube video player" allowfullscreen></iframe>
            </div>
        </div>
    </div>
2. Create a cohort of participants with a history of heart failure
    * What should be the criteria? (at least 2 occurrences in EHR, at least 1 dx and HF med, etc)
    * What should be the age group?
3. Clinical variables 
    * Medical hx (we already have this code)
    * Medications (comprehensive list of classes and their OMOP Concept ID)
    * Procetures
4. Survey data variables
    * Check out various surveys and forms: Data & Tools > Survey Explorer 
