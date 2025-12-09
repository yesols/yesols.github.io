---
layout: page
title: Getting Started with All of Us Data
description: 
img: assets/img/aou.jpg
importance: 1
category: work
---

##### **1. Registration and Training**
* Go to the *All of Us* Research [Hub](https://www.researchallofus.org). Click on the "REGISTER" button on the top right corner and follow the instructions to verify identity and create an account.
* Complete required training modules. University of Idaho has Controlled Tier level access. You must complete the second (longer) training module to gain access to the Controlled Tier data.



##### **2. Learn about Data**
* Watch **New User Orientation recording**:
    <div class="row mt-3">
        <div class="col-sm-10 mx-auto"> <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/N1WRwK-7OWM?si=9c0DL3br808Bbn_B" title="YouTube video player" allowfullscreen></iframe>
            </div>
        </div>
    </div>
* Read support articles on Understanding the All of Us Data: 
    * [Data types and organization](https://support.researchallofus.org/hc/en-us/articles/4619151535508-Data-Types-and-Organization)
    * [Participant privacy protections](https://support.researchallofus.org/hc/en-us/articles/4552681983764-Participant-Privacy-Protections) 
    * [Understanding OMOP basics](https://support.researchallofus.org/hc/en-us/articles/360039585391-Understanding-OMOP-Basics) 
    * [Exploring concepts with OMOP and SQL](https://support.researchallofus.org/hc/en-us/articles/360039585491-Exploring-Concepts-with-OMOP-and-SQL) (You can gnore SQL section unless you will be using manual SQL queries) 

##### **3. Learn to use Researcher Workbench**
* Learn to use **Cohort Builder** and **Dataset Builder**
    <div class="row mt-3">
        <div class="col-sm-10 mx-auto"> <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/V1Gt3gputpU?si=J8w3ABTpbVThetD0" title="YouTube video player" allowfullscreen></iframe>
            </div>
        </div>
    </div>

* Familiarize with **Jupyter Notebook **
    * Researcher Workbench offers several apps: Jupyter Notebook, R Studio and SAS Studio. However, I recommend using Jupyter Notebook due to less cost and better stability.
    * Jupyter Notebook in 10 Minutes (Don't worry about installing and running it. Just watch and get acquainted with the interface)
    <div class="row mt-3">
        <div class="col-sm-10 mx-auto"> <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/H9Iu49E6Mxs?si=a_17vHSRCkbn3Pyt" title="YouTube video player" allowfullscreen></iframe>
            </div>
        </div>
    </div>

* Some notes on **storage** options:
    * The Workbench offers two storage options: Persistent Disk and Workspace bucket.
    * Persistent disk is like a thumb drive: it attacheds automatically every time you spin up an environment. However, I discourage you from relying on the persistent disk for following reasons:
        1. Additional cost (~$4 per month)
        2. Collaborators cannot access your files
    * A "bucket" is a permanent storage space on Google Cloud Platform associated with each Workspace. Accessing the bucket requires `gsutil` commands. It only requires 1-2 lines of code and I will have R or Python template codes in the Workspace for you.
    * **Best Practice:** Write any cleaned/important/final data frames to a CSV file and then save it in the bucket. When finished, remember to check "Delete persistent disk" option when deleting the environemnt. 
    * For more information on storage, check out this support [page](https://support.researchallofus.org/hc/en-us/articles/5139846877844-Storage-Options-Explained#h_01H2TQA21HX8YXVCK7RJRAMANH)

##### **4. More about EHR**



##### **5. More about Survey Data**




##### **Programming Resouces**

