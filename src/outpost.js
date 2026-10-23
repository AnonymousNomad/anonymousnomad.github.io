const bgCanvas = document.querySelector('[data-outpost-canvas]');
const fxCanvas = document.querySelector('[data-power-canvas]');
const hero = document.querySelector('.outpost-hero');
const title = document.querySelector('[data-outpost-title]');
const noiseNode = document.querySelector('#grid-noise');
const warpNode = document.querySelector('#grid-warp');

if (bgCanvas && fxCanvas && hero) {
  const bg = bgCanvas.getContext('2d', { alpha: false });
  const fx = fxCanvas.getContext('2d');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');

  const state = {
    w: 0,
    h: 0,
    dpr: 1,
    rain: [],
    px: 0,
    py: 0,
    tx: 0,
    ty: 0,
    last: 0,
    start: performance.now(),
    running: true,
    titleRect: null,
    wireSegments: [],
    surgeId: -1
  };

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const mix = (a, b, t) => a + (b - a) * t;
  const smooth = t => t * t * (3 - 2 * t);
  const rand = n => {
    const x = Math.sin(n * 91.719 + 17.13) * 43758.5453;
    return x - Math.floor(x);
  };

  function resizeCanvas(canvas, ctx) {
    const r = hero.getBoundingClientRect();
    state.w = Math.max(1, r.width);
    state.h = Math.max(1, r.height);
    state.dpr = Math.min(devicePixelRatio || 1, 1.65);
    canvas.width = Math.round(state.w * state.dpr);
    canvas.height = Math.round(state.h * state.dpr);
    canvas.style.width = state.w + 'px';
    canvas.style.height = state.h + 'px';
    ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
  }

  function rebuildRain() {
    const count = Math.round(clamp((state.w * state.h) / 14500, 65, 175));
    state.rain = Array.from({ length: count }, (_, i) => ({
      x: rand(i + 10) * state.w,
      y: rand(i + 80) * state.h,
      len: 9 + rand(i + 210) * 28,
      speed: 280 + rand(i + 410) * 520,
      alpha: .055 + rand(i + 610) * .17,
      drift: 38 + rand(i + 810) * 42
    }));
  }

  function resize() {
    resizeCanvas(bgCanvas, bg);
    resizeCanvas(fxCanvas, fx);
    rebuildRain();
    const heroRect = hero.getBoundingClientRect();
    const r = title?.getBoundingClientRect();
    if (r) {
      state.titleRect = {
        x: r.left - heroRect.left,
        y: r.top - heroRect.top,
        w: r.width,
        h: r.height
      };
    }
    draw(performance.now(), true);
  }

  function mountain(points, fill, ox, oy) {
    bg.beginPath();
    bg.moveTo(-50, state.h);
    for (const p of points) bg.lineTo(p[0] * state.w + ox, p[1] * state.h + oy);
    bg.lineTo(state.w + 50, state.h);
    bg.closePath();
    bg.fillStyle = fill;
    bg.fill();
  }

  function drawSky(px, py, surge) {
    const sky = bg.createLinearGradient(0, 0, 0, state.h);
    sky.addColorStop(0, '#071017');
    sky.addColorStop(.42, '#081117');
    sky.addColorStop(.72, '#060b0e');
    sky.addColorStop(1, '#020405');
    bg.fillStyle = sky;
    bg.fillRect(0, 0, state.w, state.h);

    const storm = bg.createRadialGradient(
      state.w * .78 + px * 10,
      state.h * .2 + py * 5,
      0,
      state.w * .78,
      state.h * .2,
      state.w * .55
    );
    storm.addColorStop(0, `rgba(121,160,177,${.045 + surge * .075})`);
    storm.addColorStop(.45, 'rgba(50,72,82,.025)');
    storm.addColorStop(1, 'rgba(4,8,10,0)');
    bg.fillStyle = storm;
    bg.fillRect(0, 0, state.w, state.h);

    for (let i = 0; i < 5; i++) {
      const y = state.h * (.08 + i * .065);
      bg.fillStyle = `rgba(2,5,7,${.14 + i * .035})`;
      bg.beginPath();
      bg.ellipse(state.w * (.22 + i * .17) + px * (i + 1) * 3, y, state.w * .28, state.h * .055, 0, 0, Math.PI * 2);
      bg.fill();
    }
  }

  function drawTerrain(px, py) {
    mountain([
      [-.06,.58],[.04,.52],[.13,.55],[.22,.44],[.31,.52],[.40,.41],[.49,.48],
      [.58,.35],[.67,.47],[.76,.39],[.86,.48],[.95,.41],[1.07,.53]
    ], '#0a1116', px * -7, py * -3);

    mountain([
      [-.06,.69],[.08,.61],[.18,.65],[.29,.54],[.40,.62],[.51,.53],[.62,.61],
      [.73,.50],[.84,.59],[.94,.52],[1.07,.63]
    ], '#061015', px * -12, py * -5);

    const haze = bg.createLinearGradient(0, state.h * .34, 0, state.h * .75);
    haze.addColorStop(0, 'rgba(137,167,179,0)');
    haze.addColorStop(.48, 'rgba(137,167,179,.045)');
    haze.addColorStop(1, 'rgba(137,167,179,0)');
    bg.fillStyle = haze;
    bg.fillRect(0, state.h * .3, state.w, state.h * .48);

    bg.beginPath();
    bg.moveTo(0, state.h * .755);
    bg.bezierCurveTo(state.w * .17, state.h * .72, state.w * .40, state.h * .8, state.w * .62, state.h * .75);
    bg.bezierCurveTo(state.w * .79, state.h * .70, state.w * .91, state.h * .76, state.w, state.h * .715);
    bg.lineTo(state.w, state.h);
    bg.lineTo(0, state.h);
    bg.closePath();
    bg.fillStyle = '#020405';
    bg.fill();

    bg.strokeStyle = 'rgba(130,159,171,.075)';
    bg.lineWidth = 1;
    for (let i = 0; i < 7; i++) {
      const y = state.h * (.79 + i * .031);
      bg.beginPath();
      bg.moveTo(0, y);
      bg.quadraticCurveTo(state.w * .48, y - 8 + px * 2, state.w, y + 4);
      bg.stroke();
    }
  }

  function drawTank(x, y, scale, surge) {
    const w = 70 * scale;
    const h = 105 * scale;
    bg.save();
    bg.translate(x, y);
    bg.fillStyle = '#0a1115';
    bg.strokeStyle = 'rgba(146,173,184,.20)';
    bg.lineWidth = 1;
    bg.fillRect(-w / 2, -h, w, h);
    bg.strokeRect(-w / 2, -h, w, h);
    bg.beginPath();
    bg.ellipse(0, -h, w / 2, 10 * scale, 0, Math.PI, 0);
    bg.stroke();
    bg.beginPath();
    bg.ellipse(0, 0, w / 2, 10 * scale, 0, 0, Math.PI);
    bg.stroke();

    bg.strokeStyle = 'rgba(126,151,161,.14)';
    for (let i = 1; i < 4; i++) {
      const yy = -h + (h / 4) * i;
      bg.beginPath();
      bg.moveTo(-w / 2, yy);
      bg.lineTo(w / 2, yy);
      bg.stroke();
    }

    bg.strokeStyle = `rgba(160,191,204,${.16 + surge * .15})`;
    bg.beginPath();
    bg.moveTo(w / 2, -h * .35);
    bg.lineTo(w / 2 + 24 * scale, -h * .35);
    bg.lineTo(w / 2 + 24 * scale, 0);
    bg.stroke();
    bg.restore();
  }

  function drawMast(x, groundY, h, surge) {
    bg.save();
    bg.strokeStyle = 'rgba(125,153,164,.32)';
    bg.lineWidth = 1;
    bg.beginPath();
    bg.moveTo(x, groundY);
    bg.lineTo(x, groundY - h);
    bg.stroke();

    for (let y = groundY - 18; y > groundY - h; y -= 18) {
      const half = (groundY - y) * .09 + 5;
      bg.beginPath();
      bg.moveTo(x - half, y);
      bg.lineTo(x + half, y);
      bg.stroke();
    }

    bg.strokeStyle = 'rgba(109,137,148,.18)';
    bg.beginPath();
    bg.moveTo(x, groundY - h * .58);
    bg.lineTo(x - 54, groundY);
    bg.moveTo(x, groundY - h * .58);
    bg.lineTo(x + 52, groundY);
    bg.stroke();

    if (surge > .55) {
      bg.fillStyle = `rgba(219,247,255,${surge * .7})`;
      bg.shadowColor = '#bfeeff';
      bg.shadowBlur = 12;
      bg.beginPath();
      bg.arc(x, groundY - h, 2, 0, Math.PI * 2);
      bg.fill();
      bg.shadowBlur = 0;
    }
    bg.restore();
  }

  function drawStation(px, py, surge) {
    const baseX = state.w * .63 + px * 9;
    const groundY = state.h * .775 + py * 3;
    const w = Math.min(state.w * .27, 380);
    const h = Math.min(state.h * .19, 178);

    bg.save();
    bg.translate(baseX, groundY);

    bg.fillStyle = '#081014';
    bg.strokeStyle = 'rgba(151,177,187,.22)';
    bg.lineWidth = 1;

    bg.beginPath();
    bg.moveTo(0, 0);
    bg.lineTo(0, -h * .65);
    bg.lineTo(w * .10, -h * .88);
    bg.lineTo(w * .63, -h * .88);
    bg.lineTo(w * .71, -h * .72);
    bg.lineTo(w * .98, -h * .72);
    bg.lineTo(w, 0);
    bg.closePath();
    bg.fill();
    bg.stroke();

    bg.fillStyle = '#0d1519';
    bg.fillRect(w * .73, -h * .54, w * .25, h * .54);
    bg.strokeRect(w * .73, -h * .54, w * .25, h * .54);

    bg.strokeStyle = 'rgba(144,169,178,.11)';
    for (let i = 1; i < 6; i++) {
      const gx = w * (.08 + i * .11);
      bg.beginPath();
      bg.moveTo(gx, -h * .82);
      bg.lineTo(gx, -h * .05);
      bg.stroke();
    }

    const warm = .24 + surge * .56;
    bg.fillStyle = `rgba(216,157,84,${warm})`;
    bg.shadowColor = 'rgba(216,157,84,.5)';
    bg.shadowBlur = 9 + surge * 18;
    bg.fillRect(w * .14, -h * .57, w * .13, h * .15);
    bg.fillRect(w * .35, -h * .57, w * .10, h * .15);
    bg.shadowBlur = 0;

    bg.fillStyle = '#030506';
    bg.fillRect(w * .54, -h * .40, w * .12, h * .40);

    bg.fillStyle = '#0a1114';
    bg.fillRect(-w * .10, -h * .31, w * .08, h * .31);
    bg.strokeRect(-w * .10, -h * .31, w * .08, h * .31);

    bg.restore();

    drawTank(baseX + w * 1.11, groundY, .78, surge);
    drawMast(baseX + w * .78, groundY - h * .72, h * .85, surge);

    const reflect = bg.createLinearGradient(0, groundY, 0, state.h);
    reflect.addColorStop(0, `rgba(211,153,80,${.08 + surge * .12})`);
    reflect.addColorStop(.55, `rgba(211,153,80,${.025 + surge * .04})`);
    reflect.addColorStop(1, 'rgba(211,153,80,0)');
    bg.fillStyle = reflect;
    bg.beginPath();
    bg.moveTo(baseX + w * .12, groundY);
    bg.lineTo(baseX + w * .46, groundY);
    bg.lineTo(baseX + w * .53, state.h);
    bg.lineTo(baseX + w * .04, state.h);
    bg.closePath();
    bg.fill();
  }

  function wirePoint(seg, t) {
    const u = 1 - t;
    return {
      x: u * u * seg.a.x + 2 * u * t * seg.c.x + t * t * seg.b.x,
      y: u * u * seg.a.y + 2 * u * t * seg.c.y + t * t * seg.b.y
    };
  }

  function drawWire(a, b, sag) {
    const c = { x: (a.x + b.x) / 2, y: Math.max(a.y, b.y) + sag };
    bg.strokeStyle = 'rgba(150,177,188,.28)';
    bg.lineWidth = 1;
    bg.beginPath();
    bg.moveTo(a.x, a.y);
    bg.quadraticCurveTo(c.x, c.y, b.x, b.y);
    bg.stroke();
    return { a, b, c };
  }

  function drawPoles(px, py) {
    const poles = [
      { x: state.w * .965 + px * 12, y: state.h * .69 + py * 4, h: state.h * .47 },
      { x: state.w * .81 + px * 9, y: state.h * .70 + py * 3, h: state.h * .40 },
      { x: state.w * .635 + px * 6, y: state.h * .715 + py * 2, h: state.h * .34 }
    ];

    for (const pole of poles) {
      const top = pole.y - pole.h;
      bg.strokeStyle = '#111a1f';
      bg.lineWidth = 5;
      bg.beginPath();
      bg.moveTo(pole.x, pole.y + 24);
      bg.lineTo(pole.x, top);
      bg.stroke();

      bg.strokeStyle = 'rgba(155,183,194,.28)';
      bg.lineWidth = 1;
      bg.beginPath();
      bg.moveTo(pole.x - 28, top + 17);
      bg.lineTo(pole.x + 28, top + 17);
      bg.stroke();

      for (const off of [-18, 0, 18]) {
        bg.beginPath();
        bg.moveTo(pole.x + off, top + 17);
        bg.lineTo(pole.x + off, top + 24);
        bg.stroke();
      }
    }

    return poles.map(p => ({ x: p.x, y: p.y - p.h + 17 }));
  }

  function drawGrid(px, py) {
    const poles = drawPoles(px, py);
    const service = { x: state.w * .56 + px * 4, y: state.h * .43 + py * 2 };

    state.wireSegments = [
      drawWire(poles[0], poles[1], 25),
      drawWire(poles[1], poles[2], 22),
      drawWire(poles[2], service, 18)
    ];

    bg.strokeStyle = 'rgba(135,163,175,.22)';
    bg.beginPath();
    bg.moveTo(service.x, service.y);
    bg.lineTo(service.x, state.h * .60);
    bg.lineTo(state.w * .61, state.h * .66);
    bg.stroke();

    return service;
  }

  function surgeState(time) {
    if (reduce.matches) return { amount: .08, peak: 0, cycle: 0, id: 0 };

    const duration = 6100;
    const raw = ((time - state.start) % duration) / duration;
    let amount = 0;
    let peak = 0;

    if (raw > .08 && raw < .34) {
      const local = (raw - .08) / .26;
      amount = Math.sin(local * Math.PI);
      peak = local > .73 ? smooth((local - .73) / .27) : 0;
    }

    return {
      amount,
      peak,
      cycle: raw,
      id: Math.floor((time - state.start) / duration)
    };
  }

  function drawRain(dt) {
    fx.save();
    fx.lineCap = 'round';

    for (let i = 0; i < state.rain.length; i++) {
      const d = state.rain[i];
      if (!reduce.matches) {
        d.y += d.speed * dt / 1000;
        d.x -= d.drift * dt / 1000;
        if (d.y > state.h + 40 || d.x < -40) {
          d.y = -d.len;
          d.x = rand(i + performance.now() * .001) * (state.w + 80);
        }
      }

      fx.strokeStyle = `rgba(178,204,214,${d.alpha})`;
      fx.lineWidth = d.len > 24 ? .85 : .6;
      fx.beginPath();
      fx.moveTo(d.x, d.y);
      fx.lineTo(d.x - d.len * .17, d.y + d.len);
      fx.stroke();
    }

    fx.restore();
  }

  function bolt(points, alpha, width, blur) {
    fx.save();
    fx.strokeStyle = `rgba(218,247,255,${alpha})`;
    fx.lineWidth = width;
    fx.lineCap = 'round';
    fx.lineJoin = 'round';
    fx.shadowColor = 'rgba(142,216,255,.95)';
    fx.shadowBlur = blur;
    fx.beginPath();
    fx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) fx.lineTo(points[i].x, points[i].y);
    fx.stroke();
    fx.restore();
  }

  function jagged(a, b, seed, steps = 8, spread = 10) {
    const pts = [a];
    for (let i = 1; i < steps; i++) {
      const t = i / steps;
      const x = mix(a.x, b.x, t);
      const y = mix(a.y, b.y, t);
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const mag = Math.max(1, Math.hypot(dx, dy));
      const nx = -dy / mag;
      const ny = dx / mag;
      const n = (rand(seed + i * 19) - .5) * spread * (1 - Math.abs(t - .5) * .7);
      pts.push({ x: x + nx * n, y: y + ny * n });
    }
    pts.push(b);
    return pts;
  }

  function drawGridCharge(surge, time, service) {
    if (surge.amount <= 0 || !state.wireSegments.length) return;

    const pathProgress = clamp((surge.cycle - .08) / .19, 0, 1);
    const total = state.wireSegments.length;
    const scaled = pathProgress * total;
    const index = Math.min(total - 1, Math.floor(scaled));
    const local = scaled - index;
    const point = wirePoint(state.wireSegments[index], local);

    const glow = fx.createRadialGradient(point.x, point.y, 0, point.x, point.y, 26);
    glow.addColorStop(0, `rgba(240,252,255,${.88 * surge.amount})`);
    glow.addColorStop(.18, `rgba(160,225,255,${.55 * surge.amount})`);
    glow.addColorStop(1, 'rgba(120,205,245,0)');
    fx.fillStyle = glow;
    fx.beginPath();
    fx.arc(point.x, point.y, 26, 0, Math.PI * 2);
    fx.fill();

    fx.fillStyle = `rgba(244,253,255,${.95 * surge.amount})`;
    fx.beginPath();
    fx.arc(point.x, point.y, 1.6, 0, Math.PI * 2);
    fx.fill();

    if (surge.peak > .12) {
      const seed = Math.floor(time / 48);
      const mainEnd = { x: service.x - 38 - rand(seed + 4) * 22, y: service.y + (rand(seed + 8) - .5) * 18 };
      bolt(jagged(service, mainEnd, seed, 6, 12), .36 + surge.peak * .58, .75 + surge.peak, 7 + surge.peak * 10);

      if (surge.peak > .48) {
        const branchStart = { x: mix(service.x, mainEnd.x, .55), y: mix(service.y, mainEnd.y, .55) };
        const branchEnd = { x: branchStart.x - 15 - rand(seed + 22) * 18, y: branchStart.y - 12 + rand(seed + 24) * 25 };
        bolt(jagged(branchStart, branchEnd, seed + 33, 4, 7), .26 + surge.peak * .35, .55, 5);
      }
    }
  }

  function drawTitleCorona(surge, time) {
    const r = state.titleRect;
    if (!r || surge.peak < .24) return;

    const seed = Math.floor(time / 62);
    const count = surge.peak > .72 ? 4 : 2;

    for (let i = 0; i < count; i++) {
      const side = i % 2;
      const y = r.y + r.h * (.12 + rand(seed + i * 7) * .75);
      const a = side === 0
        ? { x: r.x - 10, y }
        : { x: r.x + r.w + 9, y };
      const b = side === 0
        ? { x: r.x - 31 - rand(seed + i * 13) * 30, y: y + (rand(seed + i * 17) - .5) * 30 }
        : { x: r.x + r.w + 31 + rand(seed + i * 13) * 30, y: y + (rand(seed + i * 17) - .5) * 30 };

      bolt(jagged(a, b, seed + i * 31, 5, 9), .16 + surge.peak * .42, .55 + surge.peak * .35, 7);
    }
  }

  function syncTypography(surge, time) {
    const active = surge.peak > .18 && !reduce.matches;
    hero.classList.toggle('grid-surge', active);

    if (!noiseNode || !warpNode) return;

    if (active) {
      const seed = 7 + (Math.floor(time / 74) % 19);
      const scale = 1.3 + surge.peak * 5.2;
      const fxFreq = .040 + (Math.floor(time / 96) % 3) * .004;
      noiseNode.setAttribute('seed', String(seed));
      noiseNode.setAttribute('baseFrequency', `0.005 ${fxFreq.toFixed(3)}`);
      warpNode.setAttribute('scale', scale.toFixed(2));
    } else {
      warpNode.setAttribute('scale', '0');
    }
  }

  function drawWetFlash(surge) {
    if (surge.peak < .25) return;
    const g = fx.createLinearGradient(0, state.h * .70, 0, state.h);
    g.addColorStop(0, `rgba(159,224,250,${surge.peak * .05})`);
    g.addColorStop(.52, `rgba(138,209,239,${surge.peak * .025})`);
    g.addColorStop(1, 'rgba(108,191,228,0)');
    fx.fillStyle = g;
    fx.fillRect(state.w * .52, state.h * .70, state.w * .46, state.h * .3);
  }

  function draw(time, force = false) {
    if (!state.w || !state.h) return;

    const dt = force ? 0 : Math.min(40, time - (state.last || time));
    state.last = time;

    state.px += (state.tx - state.px) * .035;
    state.py += (state.ty - state.py) * .035;

    const px = reduce.matches ? 0 : state.px;
    const py = reduce.matches ? 0 : state.py;
    const surge = surgeState(time);

    bg.clearRect(0, 0, state.w, state.h);
    fx.clearRect(0, 0, state.w, state.h);

    drawSky(px, py, surge.peak);
    drawTerrain(px, py);
    const service = drawGrid(px, py);
    drawStation(px, py, surge.peak);

    drawRain(dt);
    drawGridCharge(surge, time, service);
    drawWetFlash(surge);
    drawTitleCorona(surge, time);
    syncTypography(surge, time);

    if (state.running && !reduce.matches) requestAnimationFrame(draw);
  }

  function pointer(e) {
    const r = hero.getBoundingClientRect();
    state.tx = clamp((e.clientX - r.left) / r.width - .5, -.5, .5);
    state.ty = clamp((e.clientY - r.top) / r.height - .5, -.5, .5);
  }

  addEventListener('pointermove', pointer, { passive: true });

  document.addEventListener('visibilitychange', () => {
    state.running = !document.hidden;
    if (state.running && !reduce.matches) {
      state.last = performance.now();
      requestAnimationFrame(draw);
    }
  });

  reduce.addEventListener('change', () => {
    state.running = !document.hidden;
    state.last = performance.now();
    draw(performance.now(), true);
  });

  new ResizeObserver(resize).observe(hero);
}
