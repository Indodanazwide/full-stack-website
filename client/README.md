# Restaurant Website Design System
A comprehensive design system for creating a professional and aesthetically pleasing restaurant website.

## Table of Contents
- [Color Palette](#color-palette)
- [Typography](#typography)
- [Design Principles](#design-principles)
- [Usage Guidelines](#usage-guidelines)

## Color Palette

### Primary Colors
These colors serve as the main visual anchors for the brand identity:

```scss
$ebony: #0F152C;     // Deep navy - main headers, primary elements
$mirage: #1D1F33;    // Rich dark blue - secondary headers, accents
$judge-gray: #594136; // Warm brown - grounding elements
```

### Secondary Colors
Colors that complement the primary palette:

```scss
$roti: #B2A43B;        // Warm gold - highlighting
$martini: #B5A4A9;     // Soft mauve - sophistication elements
$trendy-pink: #9A669B; // Elegant purple - accent elements
```

### Tertiary Colors
Additional accent colors for balance:

```scss
$mantis: #7DB95B;      // Fresh green - organic/fresh sections
$hippie-green: #638849; // Deep green - complementary accent
```

## Typography

### Font Families

#### Primary Headings & Logo
```css
font-family: 'Playfair Display', 'Cormorant Garamond', Georgia, serif;
```
- Restaurant name
- Main headlines
- Featured content

#### Secondary Headings
```css
font-family: 'Cinzel', 'Libre Baskerville', 'Times New Roman', serif;
```
- Section headers
- Menu categories
- Announcements

#### Body Text
```css
font-family: 'Source Sans Pro', 'Open Sans', 'Helvetica Neue', sans-serif;
```
- Menu descriptions
- General content
- Contact information

#### Accent Text
```css
font-family: 'Lora', 'Merriweather', Georgia, serif;
```
- Quotes
- Reviews
- Special notes

#### Alternative Body Text
```css
font-family: 'Montserrat', 'Raleway', Arial, sans-serif;
```
- Navigation
- Buttons
- Call-to-action elements

### Font Weights
- Headers: 700 (bold)
- Subheaders: 600 (semibold)
- Body text: 400 (regular)
- Accent text: 500 (medium)

### Font Sizes
```css
/* Desktop */
h1 { font-size: 3rem; }    /* 48px */
h2 { font-size: 2.5rem; }  /* 40px */
h3 { font-size: 2rem; }    /* 32px */
body { font-size: 1rem; }  /* 16px */

/* Mobile */
@media (max-width: 768px) {
  h1 { font-size: 2.5rem; }  /* 40px */
  h2 { font-size: 2rem; }    /* 32px */
  h3 { font-size: 1.5rem; }  /* 24px */
  body { font-size: 1rem; }  /* 16px */
}
```

## Design Principles

### 1. Visual Hierarchy
- Use primary colors for main elements
- Apply secondary colors for supporting content
- Implement tertiary colors sparingly for accents

### 2. Typography Hierarchy
- Use Playfair Display for main headlines
- Implement Cinzel for secondary headers
- Employ Source Sans Pro for body content
- Apply Lora for special text elements
- Utilize Montserrat for interactive elements

### 3. Spacing System
```css
--space-xs: 0.25rem;  /* 4px */
--space-sm: 0.5rem;   /* 8px */
--space-md: 1rem;     /* 16px */
--space-lg: 1.5rem;   /* 24px */
--space-xl: 2rem;     /* 32px */
--space-2xl: 3rem;    /* 48px */
```

## Usage Guidelines

### Color Application
- Use `$ebony` for main navigation and headers
- Apply `$mirage` for secondary elements and backgrounds
- Implement `$roti` for call-to-action buttons
- Use `$mantis` and `$hippie-green` for organic/fresh food sections
- Apply `$trendy-pink` and `$martini` for accent elements

### Typography Application
1. **Headers**
   - Use Playfair Display for main page titles
   - Apply Cinzel for menu section headers

2. **Body Content**
   - Use Source Sans Pro for menu descriptions
   - Apply Lora for customer testimonials
   - Implement Montserrat for buttons and navigation

### Responsive Design
- Follow mobile-first approach
- Implement provided mobile typography scales
- Maintain consistent spacing using the spacing system
- Ensure color contrast meets WCAG 2.1 guidelines

## Getting Started

### 1. Include Google Fonts
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Cinzel:wght@400;700&family=Source+Sans+Pro:wght@400;600&family=Lora:wght@400;500&family=Montserrat:wght@400;500&display=swap" rel="stylesheet">
```

### 2. Import SCSS Variables
```scss
@import 'styles/variables';  // Contains color variables
@import 'styles/typography'; // Contains typography settings
```

### 3. Apply CSS Custom Properties
```css
:root {
  /* Colors */
  --color-primary: var(--ebony);
  --color-secondary: var(--roti);
  --color-accent: var(--trendy-pink);
  
  /* Fonts */
  --font-primary: var(--playfair);
  --font-body: var(--source-sans);
  --font-accent: var(--lora);
}
```

## Contributing
When contributing to this design system:
1. Follow the established color palette
2. Maintain typography hierarchy
3. Use the defined spacing system
4. Test across different viewport sizes
5. Document any new patterns or components

## Maintainers
[Your Name/Team]
[Contact Information]

---

Last Updated: [Current Date]
Version: 1.0.0