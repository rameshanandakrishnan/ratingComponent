# Star Component built with stencil

This is a test to evalutate web compnents and stencil

## Getting Started

To start building a new web component using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/ionic-team/stencil-component-starter.git rating-component
cd rating-component
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

#Usage
##HTML
You will need to add the following script:
```
<script type="module" src="https://unpkg.com/rating-stencil-test-component@1.0.0"></script>
```

and you should be able inject the component anywhere in the body
```
<rating-component max-value="6" value="2"></rating-component>
```