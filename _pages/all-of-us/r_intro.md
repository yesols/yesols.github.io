---
layout: page
title: Introduction to R
permalink: /projects/all-of-us/r/
toc:
    sidebar: left
---

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="/projects/">Projects</a></li>
    <li class="breadcrumb-item"><a href="/projects/all-of-us/">Getting Started</a></li>
    <li class="breadcrumb-item active" aria-current="page">Intro to R</li>
  </ol>
</nav>
<hr>

This short tutorial will introduce you to basic R syntax and useful commands to help you get started with manipulating and analyzing *All of Us* datasets. To learn more about R programming, check out following online books:

* Example 1
* Example 2

<br>

## 1. R Basics

<br>

#### *Hello World and Variables*

In R, we typically use the assignment operator `<-` to create variables.

{% highlight r %}
# Displaying a simple string
print("Hello, All of Us!")

# Variables and basic arithmetic
age <- 30
years_in_study <- 5
total_time <- age + years_in_study

# Printing the variable value
print(total_time)
{% endhighlight %}

**Output:**

```text
[1] "Hello, All of Us!"
[1] 35
```
<br>

#### *Data Structures: Vectors and Data Frames*

* **Vectors** are sequences of data elements of the same basic type (created with `c()`).
* **Data Frames** are tables where columns can contain different types of data.

{% highlight r %}
# A vector of participant IDs
participant_ids <- c(1001, 1002, 1003, 1004)
print(participant_ids[1]) # R indexes start at 1, not 0!

# Creating a Data Frame from scratch
df <- data.frame(
  person_id = c(1001, 1002, 1003, 1004),
  age_at_enrollment = c(65, 42, 71, 35),
  gender_concept_id = c(8507, 8532, 8507, 8532),
  blood_pressure = c(130, 120, 145, 110)
)
print(df$age_at_enrollment) # Access a column using $
{% endhighlight %}

**Output:**

```text
[1] 1001
[1] 65 42 71 35
```
<br>

## 2. Introduction to Tidyverse

<br>

The `tidyverse` is a collection of R packages (including `dplyr` for manipulation and `ggplot2` for visualization) that share a common design philosophy.

#### *Loading the Library*

{% highlight r %}
# Load the core tidyverse packages
library(tidyverse)
{% endhighlight %}

<br>

#### *Reading and Writing Data Files*

Assume a file named `my_data.csv` exists (we created the data above, but this is how you load external files).

{% highlight r %}
# Reading a CSV file into a Data Frame (tibble)
# read_csv is faster and smarter than standard read.csv
df <- read_csv("my_data.csv")

# Display the first few rows
print(head(df))

# Saving the data frame back to a new CSV file
write_csv(df, "modified_data.csv")
{% endhighlight %}

<br>

## 3. Data Manipulation: Selection and Recoding

<br>

#### *Filtering Rows*

The `filter()` function selects rows based on conditions. The pipe operator `%>%` (or `|>`) passes the data from one step to the next.

{% highlight r %}
# Filter rows where age is over 60
older_participants <- df %>%
  filter(age_at_enrollment > 60)

print(older_participants)
{% endhighlight %}

**Output:**

```text
# A tibble: 2 × 4
  person_id age_at_enrollment gender_concept_id blood_pressure
      <dbl>             <dbl>             <dbl>          <dbl>
1      1001                65              8507            130
2      1003                71              8507            145
```
<br>

#### *Recoding Values*

Use `mutate()` to create or change columns, and `case_match()` (or `recode`) to map concept IDs to labels.

{% highlight r %}
# Create a new column 'gender_label' based on concept IDs
df <- df %>%
  mutate(gender_label = case_match(gender_concept_id,
    8507 ~ "Male",
    8532 ~ "Female",
    .default = "Other/Unknown"
  ))

# Select specific columns to view
print(df %>% select(person_id, gender_concept_id, gender_label))
{% endhighlight %}

**Output:**

```text
# A tibble: 4 × 3
  person_id gender_concept_id gender_label
      <dbl>             <dbl> <chr>       
1      1001              8507 Male        
2      1002              8532 Female      
3      1003              8507 Male        
4      1004              8532 Female      
```
<br>

## 4. Merging Data Frames

<br>

The `inner_join()`, `left_join()`, etc., functions merge tables by a common key.

{% highlight r %}
# Create a second data frame for lab results
labs_df <- data.frame(
  person_id = c(1001, 1004, 1005),
  cholesterol = c(210, 185, 225)
)

# Perform an inner join (keeps only matching IDs: 1001 and 1004)
merged_df <- inner_join(df, labs_df, by = "person_id")

print(merged_df)
{% endhighlight %}

**Output:**

```text
# A tibble: 2 × 6
  person_id age_at_enrollment gender_concept_id blood_pressure gender_label cholesterol
      <dbl>             <dbl>             <dbl>          <dbl> <chr>              <dbl>
1      1001                65              8507            130 Male                 210
2      1004                35              8532            110 Female               185
```
<br>

## 5. Descriptive Statistics and Visualization

<br>

#### *Basic Statistics*

Use `group_by()` and `summarize()` to calculate aggregated statistics.

{% highlight r %}
# Calculate mean age and count by gender
summary_stats <- df %>%
  group_by(gender_label) %>%
  summarize(
    mean_age = mean(age_at_enrollment),
    count = n()
  )

print(summary_stats)
{% endhighlight %}

**Output:**

```text
# A tibble: 2 × 3
  gender_label mean_age count
  <chr>           <dbl> <int>
1 Female           38.5     2
2 Male             68.0     2
```
<br>

#### *Simple Visualization*

`ggplot2` is the standard visualization package in R.

{% highlight r %}
# Create a bar plot of participant counts by gender
plot <- ggplot(df, aes(x = gender_label)) +
  geom_bar(fill = "steelblue") +
  labs(
    title = "Participant Count by Gender",
    x = "Gender",
    y = "Count"
  ) +
  theme_minimal()

# Display the plot
print(plot)

# Save the plot to a file
ggsave("gender_counts_bar.png", plot)
{% endhighlight %}

