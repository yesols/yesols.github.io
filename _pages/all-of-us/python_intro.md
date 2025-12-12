---
layout: page
title: Introduction to Python
permalink: /projects/all-of-us/python/
toc:
    sidebar: left
---

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="/projects/">Projects</a></li>
    <li class="breadcrumb-item"><a href="/projects/all-of-us/">Getting Started</a></li>
    <li class="breadcrumb-item active" aria-current="page">Intro to Python</li>
  </ol>
</nav>
<hr>


This tutorial covers the fundamentals of Python and the Pandas library, essential tools for working with structured data like that found in the *All of Us* Research Program datasets.

<br>

## 1. Python Basics

<br>

#### *Hello World and Variables*

The `print()` function displays output. Variables store data.

{% highlight python %}
# Displaying a simple string
print("Hello, All of Us!")

# Variables and basic arithmetic
age = 30
years_in_study = 5
total_time = age + years_in_study

# Printing the variable value
print(total_time)
{% endhighlight %}

**Output:**

```text
Hello, All of Us!
35
```
<br>

#### *Data Structures: Lists and Dictionaries*

* **Lists** are ordered, mutable sequences.
* **Dictionaries** are unordered collections of key-value pairs.

{% highlight python %}
# A list of participant IDs
participant_ids = [1001, 1002, 1003, 1004]
print(participant_ids[0]) # Access the first element (index 0)

# A dictionary storing participant information
participant_info = {
    "1001": {"age": 55, "sex": "Male"},
    "1002": {"age": 62, "sex": "Female"}
}
print(participant_info["1001"]["sex"]) # Access a value by its key
{% endhighlight %}

**Output:**

```text
1001
Male
```

<br>

## 2. Introduction to Pandas


<br>

#### *Importing Pandas*

Pandas is the primary library for working with **DataFrame** in Python. A **DataFrame** object is how we often organize our datasets for an analysis.

We typically import Pandas using the alias `pd`.

{% highlight python %}
import pandas as pd
{% endhighlight %}

<br>

#### *Reading and Inspecting Data Files*

Assume a file named `my_data.csv` is loaded.

{% highlight python %}
# Reading a CSV file into a DataFrame
df = pd.read_csv('my_data.csv')

# Display the first few rows of the DataFrame
print(df.head())

# Saving the modified DataFrame back to a new CSV file
df.to_csv('modified_data.csv', index=False)
{% endhighlight %}

**Example Data Input (`my_data.csv`):**

| person_id | age_at_enrollment | gender_concept_id | blood_pressure |
| :--- | :--- | :--- | :--- |
| 1001 | 65 | 8507 | 130 |
| 1002 | 42 | 8532 | 120 |
| 1003 | 71 | 8507 | 145 |
| 1004 | 35 | 8532 | 110 |

**Expected Output (`df.head()`):**

```text
   person_id  age_at_enrollment  gender_concept_id  blood_pressure
0       1001                 65               8507             130
1       1002                 42               8532             120
2       1003                 71               8507             145
3       1004                 35               8532             110
```

<br>

## 3. Data Manipulation: Selection and Recoding

<br>

#### *Filtering Rows*

Filter for participants older than 60.

{% highlight python %}
# Filter rows where age is over 60 (Boolean indexing)
older_participants = df[df['age_at_enrollment'] > 60]
print(older_participants)
{% endhighlight %}

**Output:**

```text
   person_id  age_at_enrollment  gender_concept_id  blood_pressure
0       1001                 65               8507             130
2       1003                 71               8507             145
```
<br>

#### *Recoding Values*

Recode the numeric `gender_concept_id` to descriptive labels using `.replace()`.

{% highlight python %}
# Recode gender_concept_id (e.g., 8507 is Male, 8532 is Female)
df['gender_label'] = df['gender_concept_id'].replace({
    8507: 'Male',
    8532: 'Female',
    9000: 'Other/Unknown'
})
print(df[['person_id', 'gender_concept_id', 'gender_label']].head())
{% endhighlight %}

**Output:**

```text
   person_id  gender_concept_id gender_label
0       1001               8507         Male
1       1002               8532       Female
2       1003               8507         Male
3       1004               8532       Female
```
<br>

## 4. Merging DataFrames

<br>

The `pd.merge()` function joins data from two different tables using a common identifier like `person_id`.

**Assume a second DataFrame (`labs_df`) is loaded:**

| person_id | cholesterol |
| :--- | :--- |
| 1001 | 210 |
| 1004 | 185 |
| 1005 | 225 |

{% highlight python %}
# Perform an inner merge: only includes IDs present in BOTH tables (1001, 1004)
merged_df = pd.merge(
    df,       # Left DF (demographics)
    labs_df,  # Right DF (labs)
    on='person_id',
    how='inner' # Change to 'left', 'right', or 'outer' as needed
)
print(merged_df)
{% endhighlight %}

**Output (`merged_df`):**

```text
   person_id  age_at_enrollment  gender_concept_id  blood_pressure gender_label  cholesterol
0       1001                 65               8507             130         Male          210
1       1004                 35               8532             110       Female          185
```
<br>

## 5. Descriptive Statistics and Visualization

<br>

#### *Basic Statistics*

Use `.groupby()` to calculate statistics per category.

{% highlight python %}
# Mean age grouped by the new gender label
mean_age_by_gender = df.groupby('gender_label')['age_at_enrollment'].mean()
print("Mean Age by Gender:\n", mean_age_by_gender)

# Count of participants in each gender group
gender_counts = df['gender_label'].value_counts()
print("\nGender Counts:\n", gender_counts)
{% endhighlight %}

**Output:**

```text
Mean Age by Gender:
 gender_label
Female    38.5
Male      68.0
Name: age_at_enrollment, dtype: float64

Gender Counts:
 gender_label
Male      2
Female    2
Name: count, dtype: int64
```
<br>

#### *Simple Visualization*

<br>

Pandas has a built-in `.plot()` method that uses Matplotlib for quick visualizations.

{% highlight python %}
import matplotlib.pyplot as plt

# Bar plot of participant counts by gender
df['gender_label'].value_counts().plot(
    kind='bar',
    title='Participant Count by Gender',
    xlabel='Gender',
    ylabel='Count',
    rot=0 
)

# Save the plot to a file
plt.savefig('gender_counts_bar.png')
plt.close() # Close the plot to prevent displaying inline
{% endhighlight %}

