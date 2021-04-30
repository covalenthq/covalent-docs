---
title: Primer
order: 1
hidden: false
---

# Primer

Primer is a query language built to transform Covalent API responses at query time. Primer queries are listed in order of precedence. Eg: If `primer={ ... }` and `match={ ... }` are used, `primer` is executed first. All top-level queries including the _primer pipeline_ are executed on the set of records returned after _pagination_. In other words, if you want these queries to include _all_ records, you must set the ```page-number=0``` and the ```page-size=...``` to an amount that includes all records.

The guides below serve as a knowledge resource to give you an indepth understanding of Primer.

## How-to Guides

* [Querying with Primer: Beginner](../../learn/tutorials/query-with-primer-beg)
* [Querying with Primer: Intermediate](../../learn/tutorials/query-with-primer-int)
