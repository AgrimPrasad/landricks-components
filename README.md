# Landricks: Landing-Bricks
A set of React components to build structured landing pages

## Introduction
Have you ever built a product landing page? They are all the same, they have a big banner on top, some call-to-action buttons, a list of features, some quotes from customers, pricing options, etc. Most of the time, these elements are displayed as horizontal bands, laid out vertically. Design varies a lot, but it can often be defined as a result of basic rules (font, primary/secondary color, background) that apply differently to each band.

## Goal
Landricks provide a set of opinionated React DOM-components that can be laid out as bricks, one on top of the other, to easily obtain a fully formatted landing page. The props of each component are used to set the actual content (text, images, urls) presented to the user. Visual design can be defined by providing a "theme", which is a set of high-level properties which are used by each component to build their internal styles.
