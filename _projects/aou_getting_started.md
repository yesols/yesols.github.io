---
layout: page
title: Getting Started with All of Us Projects
description: 
img: assets/img/aou.jpg
importance: 1
category: work
permalink: /projects/all-of-us/
---

<h3> Initiating a Project</h3>

1. **Get to know All of Us:** If you are thinking of doing a project using the *All of Us* database, start with watching this New User Orientation recording. This video will introduce you to the *All of Us* Research Program, types of data available, and an overview of the analysis platform and tools. 
    <div class="row mt-3">
        <div class="col-sm-10 mx-auto"> <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/N1WRwK-7OWM?si=9c0DL3br808Bbn_B" title="YouTube video player" allowfullscreen></iframe>
            </div>
        </div>
    </div>

2. **Explore All of Us:** Go to the [*All of Us* Research Hub](https://researchallofus.org/) and look around. In particular, explore data using [Data Browser](https://databrowser.researchallofus.org/?_gl=1*15lp0pj*_ga*Mjc3MTE0NjEwLjE3NzA2OTUwNTA.*_ga_MQVR5DG2C4*czE3NzA2OTUwNTEkbzEkZzEkdDE3NzA2OTUxNTckajQ0JGwwJGg4Nzg4Njc5Mjg.) and look at published studies and ongoing projects by searching [Publication Directory](https://www.researchallofus.org/publication-directory/?_gl=1*1unkb3a*_ga*Mjc3MTE0NjEwLjE3NzA2OTUwNTA.*_ga_MQVR5DG2C4*czE3NzA2OTUwNTEkbzEkZzEkdDE3NzA2OTUyNzMkajU2JGwwJGg4Nzg4Njc5Mjg.) and [Research Project Directory](https://www.researchallofus.org/research-project-directory/)
3. **Establish a research question:** Now that you have an idea what can be done using the *All of Us* database, work on forming your own research question.
  * How to Establish a Research Question (resource material coming soon)
4. **Identify an advisor:** While IOURMR Research Core can provide general research support or *All of Us*-specific technical support, you need an advisor with an established research activities related to your chosen topic. Identify and contact the person to discuss feasibility and project plans.
5. **Meet with us:** Once you have completed above steps, contact Yesol or Nick at IOURMR to arrange a meeting. Come to us with any questions and a draft of your research plan.

<h3> Registration</h3>

1. **Create an account:** Once you have formed a team and finalized the research plan, the next step is becoming a registered user of the database. Go to the [*All of Us* Research Hub](https://www.researchallofus.org). Click on the "REGISTER" button on the top right corner and follow the instructions to verify identity and create an account.
2. **Complete required training:** You must complete training modules and sign the Data User Code of Conduct to become a registered user. There are two training modules: the first one satisfies the requirement to use the "Registered Tier" level of data while the second module is required for the "Controlled Tier" level of data. You may choose either level depending on your project. 

##### **Note:**
* **Plan ahead:** Plan to spend at least several hours for the registration and training step. Sometimes identity verification can take a long time. Training modules (if completing both parts) also can take awhile!
* **Computational cost:** Accessing data and usage of analysis applications incur charges. However, the *All of Us* Program provides new users an initial credit of $300, which is more than enough for a typical student project (using genomic data costs more). The initial credits expire after a year and you must set up your own Google Billing Account and link it to your project Workspace if your project takes longer than a year. Reimbursement process will be released soon.

<h3> Using Researcher Workbench</h3>

1. Create a Workspace for your project
    * Step-by-step [Creating a Workspace](https://support.researchallofus.org/hc/en-us/articles/30143658322836-Creating-a-Workspace)
        * **NOTE** When selecting data access tier, make sure to choose **Controlled Tier** if this is what your project requires. In most cases, this is what we want. For Dataset Version, choose v8 (whatever the latest)
    * [Writing Your Workspace Description](https://support.researchallofus.org/hc/en-us/articles/30351591538580-Writing-Your-Workspace-Description)
    * [Sample Workspace Description](https://support.researchallofus.org/hc/en-us/articles/360042673211-Sample-Workspace-Description)
2. Learn to use **Cohort Builder** and **Dataset Builder**
    <div class="row mt-3">
        <div class="col-sm-10 mx-auto"> <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/V1Gt3gputpU?si=J8w3ABTpbVThetD0" title="YouTube video player" allowfullscreen></iframe>
            </div>
        </div>
    </div>
3. Familiarize with **Jupyter Notebook**
    * Researcher Workbench offers several apps: Jupyter Notebook, R Studio and SAS Studio. However, I recommend using Jupyter Notebook due to less cost and better stability.
    * Jupyter Notebook in 10 Minutes (Don't worry about installing and running it. Just watch and get acquainted with the interface)
    <div class="row mt-3">
        <div class="col-sm-10 mx-auto"> <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/H9Iu49E6Mxs?si=a_17vHSRCkbn3Pyt" title="YouTube video player" allowfullscreen></iframe>
            </div>
        </div>
    </div>
4. Some notes on **storage** options:
    * The Workbench offers two storage options: Persistent Disk and Workspace bucket.
    * Persistent disk is like a thumb drive: it attacheds automatically every time you spin up an environment. However, I discourage you from relying on the persistent disk for following reasons:
      1. Additional cost (~$4 per month)
      2. Collaborators cannot access your files
    * A "bucket" is a permanent storage space on Google Cloud Platform associated with each Workspace. Accessing the bucket requires `gsutil` commands. It only requires 1-2 lines of code and I will show you the R or Python template codes.
    * **Best Practice:** Write any cleaned/important/final data frames to a CSV file and then save it in the bucket. When finished, remember to check "Delete persistent disk" option when deleting the environemnt. 
    * For more information on storage, check out this support [page](https://support.researchallofus.org/hc/en-us/articles/5139846877844-Storage-Options-Explained#h_01H2TQA21HX8YXVCK7RJRAMANH)

5. Some helpful support articles in understanding the *All of Us* data:
  * [Data types and organization](https://support.researchallofus.org/hc/en-us/articles/4619151535508-Data-Types-and-Organization)
  * [Participant privacy protections](https://support.researchallofus.org/hc/en-us/articles/4552681983764-Participant-Privacy-Protections) 
  * [Understanding OMOP basics](https://support.researchallofus.org/hc/en-us/articles/360039585391-Understanding-OMOP-Basics) 
  * [Exploring concepts with OMOP and SQL](https://support.researchallofus.org/hc/en-us/articles/360039585491-Exploring-Concepts-with-OMOP-and-SQL) (You can gnore SQL section unless you will be using manual SQL queries) 


<h3> Hands-On Workshop</h3>
I will offer a workshop either prior to or during the first week of the Triple I project period. You may attend in-person or by Zoom, although it will be difficult to get direct help if you attend by Zoom. Sessions will not be recorded due to the sensitive nature of the *All of Us* data. However, workshop materials including code examples will be available on the workshop website (coming soon)

The workshop will consist of four 2-hr sessions and will cover following topics:
  * Session 1: 
    * Introduction to cloud computing
    * Super-brief introduction to relational database structures and queries
    * Selecting cohorts and building your dataset
  * Session 2:
    * Introduction to R
    * Working with dataframes in R
    * Obtaining query results and data wrangling
  * Session 3:
    * More data wrangling: survey data
    * Exploratory data analysis
    * Data visualization
  * Session 4:
    * Performing statistical tests
    * Fitting regression models

Prerequisites:
  * You must have completed all the previous steps as laid out on this page. 
  * You must be a registered user and have created a Workspace prior to the workshop.
  * For project teams consisting of multiple students, *all* members must be registered users. The project Workspace may be created by the team leader, but others must also have their own workspaces -- see me prior to the workshop to set up "educational" workspaces.
  * While not required, I highly recommend reviewing the Programming Tutorials at the bottom of the page prior to Session 2.



<br>



<h3>Additional Resources</h3>
<div class="row mt-3">

  <div class="col-sm-6 mb-3">
    <div class="card h-100 hoverable">
      <div class="card-body">
        <h5 class="card-title">
          <a href="https://support.researchallofus.org/hc/en-us" target="_blank" class="stretched-link text-decoration-none" style="color: inherit;">
            Official Support
          </a>
        </h5>
        <p class="card-text">Access the official All of Us User Support Hub and documentation.</p>
      </div>
    </div>
  </div>


</div>

<br>

<h3> Programming Tutorials</h3>
<div class="row mt-3">

  <div class="col-sm-6 mb-3">
    <div class="card h-100 hoverable">
      <div class="card-body">
        <h5 class="card-title">
          <a href="/projects/all-of-us/python/" class="stretched-link text-decoration-none" style="color: inherit;">
            Intro to Python
          </a>
        </h5>
      </div>
    </div>
  </div>

  <div class="col-sm-6 mb-3">
    <div class="card h-100 hoverable">
      <div class="card-body">
        <h5 class="card-title">
          <a href="/projects/all-of-us/r/" class="stretched-link text-decoration-none" style="color: inherit;">
            Intro to R
          </a>
        </h5>
      </div>
    </div>
  </div>

</div>