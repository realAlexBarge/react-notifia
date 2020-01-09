# React Tracking Notifia

[![Build Status](https://travis-ci.org/realalexbarge/react-notifia.svg?branch=master)](https://travis-ci.org/realalexbarge/react-notifia) [![dependencies Status](https://david-dm.org/realalexbarge/react-notifia/status.svg)](https://david-dm.org/realalexbarge/react-notifia) [![devDependencies Status](https://david-dm.org/realalexbarge/react-notifia/dev-status.svg)](https://david-dm.org/realalexbarge/react-notifia?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Un-official module to easily add Notifia to react apps. It functions as a tiny wrapper for the native script. After initialization the Notifia script is injected into the document.

# Installation

With [npm](https://www.npmjs.com/):

```bash
npm install react-notifia --save
```

# Usage

Notifia needs to be imported and initialized with the custom id:

```js
import NotifiaTracking from 'react-notifia';
NotifiaTracking.initialize('NOTIFIA_ID');
```

After initializing campaigns can be run from the Notifia Portal.

# How this works

This modules takes care of injecting the provider specific tracking script into the document.
