# Angular Components

![Angular](https://img.shields.io/badge/Angular-21-dd0031?logo=angular)
![Deploy](https://github.com/AndriiMalamuzh/angular-components/actions/workflows/angular-ci.yml/badge.svg?branch=master)

A showcase of reusable UI components built with Angular 21, Signals, and SCSS. Each component has a dedicated example page with live demos and highlighted source code.

**[Live Demo](https://andriimalamuzh.github.io/angular-components/)**

---

## Features

### Components

| Component        | Description |
|------------------|---|
| **Button**       | Directive that styles native buttons with ripple effect, color variants, loading state, and icon mode |
| **Badge**        | Directive that adds a numeric or text badge overlay to any element |
| **Ripple**       | Material-style ripple animation on click, used standalone or composed into Button |
| **Checkbox**     | Accessible checkbox with indeterminate state, label positioning, and form integration via `ControlValueAccessor` |
| **Radio**        | Accessible radio button with grouped selection and form integration via `ControlValueAccessor` |
| **Slide Toggle** | Toggle switch with label positioning and form integration via `ControlValueAccessor` |
| **Select**       | Dropdown with single/multi-select, portal-based overlay, keyboard navigation, and form integration via `ControlValueAccessor` |
| **Form Field**   | Wrapper with floating label, prefix/suffix slots, error messages, and input state tracking |
| **Icon**         | SVG sprite renderer with configurable size and sprite file |
| **Spinner**      | CSS-based animated spinner with customizable size, color, and thickness via CSS custom properties |
| **Tabs**         | Tabbed content container with active tab selection and ripple on tab buttons |
| **Toast**        | Notification system with success/error/warning/info types, configurable position, and auto-dismiss |

### Highlights

- Angular Signals (`signal`, `computed`, `effect`, `model`) for state management
- `ControlValueAccessor` integration for all form controls
- Full keyboard navigation and ARIA attributes (WCAG AA)
- `OnPush` change detection on every component
- Lazy-loaded routes for all example pages
- BEM naming convention in SCSS
- Source code display with syntax highlighting (ngx-highlightjs)

---

## Tech Stack

| Technology | Version |
|---|---|
| Angular | 21 |
| Angular CDK | 21 |
| TypeScript | 5.9 |
| RxJS | 7.8 |
| ngx-highlightjs | 14 |
| ESLint | 10 (flat config) |
| Prettier | 3.8 |
| Karma + Jasmine | Test runner |
| GitHub Pages | Deployment via angular-cli-ghpages |

---
