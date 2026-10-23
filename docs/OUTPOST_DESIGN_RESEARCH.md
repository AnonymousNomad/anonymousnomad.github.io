# Nomadic Labs Outpost — Design Research and V1 Decision

Date: 2026-10-23

## Research scope

Reviewed 48 search results across six workstreams, then cross-checked primary/practitioner sources and official implementation documentation.

Workstreams:
1. immersive developer portfolios
2. professional industrial / science-fiction visual language
3. Three.js / scroll / production performance
4. rain, electrical, wet-surface and shader techniques
5. accessibility / reduced motion / Core Web Vitals
6. umbrella sites containing multiple distinct products

## High-signal references

- Aurel's Grand Theater — Communication Arts case study
  - immersive world establishes identity
  - long-form case studies move into readable DOM content
  - environment feels lived-in through small grounded details
  - aggressive instancing / frame-rate management was required for web performance

- Samsy Ninja — Communication Arts case study
  - immersive environment still preserves conventional navigation concepts
  - custom post-processing and reflections create atmosphere
  - creator cut secondary environmental features to protect the core experience
  - cross-platform rendering required deliberate optimization

- More Than a Portfolio — Codrops 2026
  - one continuous 3D world rather than disconnected animated sections
  - Three.js + GSAP/ScrollTrigger
  - KTX2/Basis texture compression
  - Draco geometry compression
  - GPU instancing
  - reduced-resolution mobile shaders

- AmazingOS — Sean Guadron
  - one shared platform can support multiple public brands/products
  - shared architecture does not require one shared visual identity

- Three.js WebGPURenderer documentation
  - WebGPU can fall back to WebGL2
  - renderer remains experimental
  - pure WebGL2 remains a valid production choice
  - custom ShaderMaterial workflows require migration to TSL for WebGPURenderer

- GSAP ScrollTrigger documentation
  - precomputes trigger positions rather than constantly measuring layout
  - supports responsive matchMedia behavior
  - scroll-linked animation can remain synchronized to requestAnimationFrame

- MDN reduced-motion guidance
  - continuous nonessential motion should be reduced/replaced for users requesting reduced motion
  - large panning/scaling and flashing effects require particular restraint

## Design conclusion

Nomadic Labs should not be a themed dashboard or a collage of personal interests.

The professional signal should come from:
- a coherent environmental system
- restrained typography
- interaction quality
- performance discipline
- truthful project content
- evidence-backed engineering beneath the art direction

## V1 outpost brief

One opening scene only:

> A remote engineering outpost during bad weather, with the interface visibly powered by infrastructure inside the scene.

Visible ingredients:
- dark northern mountain silhouettes
- rain
- wet/cold atmosphere
- utility poles and sagging power lines
- moving electrical charge along the line
- small worn industrial outpost silhouette
- two restrained amber work lights
- large NOMADIC LABS typography
- POWER / WATER / SIGNAL / CODE
- sparse operating-status readouts

Not in V1:
- droid
- dog
- truck
- hunting/fishing props
- game controller
- Star Wars-like vehicles
- product cards in the hero
- neon rainbow cyberpunk
- fake hologram windows
- full 3D navigation
- audio

Those elements can be reconsidered only after the base scene feels professional.

## Technical decision

V1 uses Canvas2D plus semantic DOM.

Why:
- extremely small implementation cost
- no framework/dependency commitment
- proves composition before building 3D assets
- DOM text remains accessible/selectable/indexable
- easy to discard if art direction fails

V1 performance rules:
- DPR capped at 1.75
- requestAnimationFrame animation
- animation pauses when page becomes hidden
- responsive particle count
- reduced-motion renders a stable composition instead of continuous motion
- no third-party font or graphics dependency

## Promotion gate to WebGL / Three.js

Promote the scene only if the V1 composition is accepted.

Then use Three.js/WebGL2 first, keeping a path toward WebGPURenderer/TSL later.

Candidate upgrades:
- real 3D parallax and depth
- KTX2/Basis textures
- Draco-compressed GLTF
- GPU-instanced rain/vegetation
- controlled wet-surface reflection
- subtle volumetric fog
- original maintenance drone/droid as rare environmental life
- GSAP-driven camera transitions into project worlds

The underlying semantic site and project registry stay independent from the renderer.
