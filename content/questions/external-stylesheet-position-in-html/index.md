---
title: Where in an HTML document to put external stylesheet?
tags:
  - stylesheet
  - external stylesheet
order: 6
date: Thu Oct 17 2019 21:48:49 GMT+0700 (Western Indonesia Time)
answers:
  - At the start of document
  - In the <body> section
  - At the end of document
  - In the <head> section // correct
---

<!-- explanation -->

A `<link>` element can occur either in the `<head>` or `<body>` element, depending on whether it has a link type that is body-ok. For example, the stylesheet link type is body-ok, and therefore `<link rel="stylesheet">` is permitted in the body. However, this isn't a good practice to follow; it makes more sense to separate your `<link>` elements from your body content, putting them in the `<head>`

Read for detail [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
