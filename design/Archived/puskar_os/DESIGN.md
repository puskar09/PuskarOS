---
name: Puskar OS
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#929090'
  on-tertiary-container: '#2a2a2a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: '0'
  code-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: '0'
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  sidebar-width: 260px
  gutter: 16px
---

## Brand & Style
The design system is engineered for deep focus, catering to developers and AI researchers who require a high-performance, distraction-free environment. It draws inspiration from the utility of professional developer tools and the aesthetic refinement of modern productivity software.

The style is a hybrid of **Minimalism** and **Precision-Dark**, characterized by:
- **Focused Workspace:** A sidebar-centric architecture that prioritizes the active document or terminal while keeping navigation secondary.
- **High-Contrast Utility:** Text and primary actions utilize high-contrast pairings to ensure legibility during extended coding sessions.
- **Architectural Rigor:** UI elements are governed by a strict grid and thin, purposeful borders rather than expansive shadows, evoking the feel of a high-end physical hardware interface.
- **Atmosphere:** Calm, dark, and industrial. The interface recedes to allow the user's data and code to take center stage.

## Colors
This design system utilizes a "Midnight Graphite" palette designed for long-term eye comfort and technical clarity.

- **Surface Layers:** The base layer is a true Matte Black (#0A0A0A). Secondary surfaces like sidebars or card containers use Charcoal (#1A1A1A) to create subtle depth without breaking the dark aesthetic.
- **Typography:** Headlines and primary content use Soft White (#F5F5F5) for maximum readability. Metadata, captions, and secondary labels use Light Gray (#A1A1A1) to establish a clear information hierarchy.
- **Accents:** A single Subtle Blue (#3B82F6) is used sparingly for active states, notifications, and primary calls-to-action.
- **Structural Lines:** Borders are strictly defined at #262626, providing the necessary separation between workspace modules without the visual weight of heavy shadows.

## Typography
The typography system prioritizes clarity and technical precision. **Inter** is the primary typeface for all UI and prose, chosen for its exceptional legibility in dark environments. **Geist** is introduced for labels and code snippets to provide a distinct, developer-centric feel.

- **Scale:** Maintain a tight typographic scale. Avoid excessive size variations; instead, use font weight and color (Soft White vs. Light Gray) to denote hierarchy.
- **Letter Spacing:** Headlines utilize slight negative tracking (-0.01em to -0.02em) to appear more compact and "locked-in." Labels use slight positive tracking (0.05em) for better scanability at small sizes.
- **Code First:** All technical data, coordinates, and terminal outputs must use the `code-md` or `label-sm` roles to maintain the OS's developer identity.

## Layout & Spacing
The layout follows a **Fixed Sidebar / Fluid Content** model, reminiscent of modern browser-based IDEs.

- **Sidebar:** A fixed 260px sidebar on the left (or right) serves as the primary navigation and workspace switcher.
- **Grid:** A 12-column fluid grid is used for the main content area, though most developer views should default to a single-column focused container with 40px margins.
- **Rhythm:** An 8px linear scale (4, 8, 16, 24, 40, 64) governs all padding and margins. 
- **Responsive:** 
  - **Desktop:** Generous 40px external margins.
  - **Tablet:** 24px margins, sidebar collapses into a floating overlay.
  - **Mobile:** 16px margins, focus shifts to a single-stack view with bottom navigation for quick AI prompts.

## Elevation & Depth
In this design system, depth is communicated through **Tonal Layering** and **Subtle Outlines** rather than traditional shadows.

- **L0 (Base):** Matte Black (#0A0A0A) - used for the main application background.
- **L1 (Surfaces):** Charcoal (#1A1A1A) - used for sidebars, cards, and input fields. 
- **L2 (Popovers):** A slightly lighter gray (#222222) with a 1px border (#333333). This is used for context menus and tooltips.
- **Glass Effects:** Use a subtle backdrop-blur (20px) only on floating navigation bars or sidebars to maintain a sense of space without cluttering the visual field. 
- **Borders:** All interactive elements must have a 1px solid border (#262626) to define their silhouette against the dark background.

## Shapes
The shape language is "Softly Industrial." It balances the coldness of the dark palette with approachable, rounded corners.

- **Standard Elements:** Buttons, inputs, and list items use `rounded` (8px).
- **Containers:** Large cards, workspace modules, and main window frames use `rounded-lg` (16px).
- **Utility:** Small tags or status indicators use `rounded-sm` (4px).
- **Selection:** Active states in sidebars or lists use a rounded-rect shape that follows the container's inner radius precisely.

## Components
- **Buttons:**
  - *Primary:* Solid Soft White with Matte Black text. No shadow.
  - *Secondary:* Transparent with a 1px #262626 border. Soft White text.
  - *Action:* Ghost buttons (text only) that highlight to Charcoal on hover.
- **Input Fields:** Background: #1A1A1A; Border: 1px #262626. On focus, the border changes to the Blue Accent (#3B82F6).
- **Cards:** No background by default; defined by a #262626 border. If grouping is needed, use #1A1A1A background.
- **Sidebar Items:** High-contrast Soft White text for the active item with a subtle #1A1A1A background pill. Inactive items use Light Gray text.
- **AI Prompt Bar:** A specialized floating input at the bottom of the workspace. Highly rounded (24px), anchored with a subtle blue outer glow when the AI is processing.
- **Monospace Tags:** Used for language indicators (e.g., "Python", "Rust") or status codes. Geist font, small caps, 1px border.