/* @ds-bundle: {"format":3,"namespace":"VirtualCreationsDesignSystem_42bcde","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"ProjectCard","sourcePath":"components/media/ProjectCard.jsx"},{"name":"FilterTabs","sourcePath":"components/navigation/FilterTabs.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"d79978fffee2","components/core/Button.jsx":"76a513cd9c6c","components/core/Card.jsx":"4c7233a6cbb9","components/core/Tag.jsx":"c6958bf6baa8","components/forms/Field.jsx":"ba0c27c926f6","components/media/ProjectCard.jsx":"a4d5e7bbb5c7","components/navigation/FilterTabs.jsx":"c8d43d586ea9","components/navigation/Navbar.jsx":"c37cab7f5fb3","ui_kits/portfolio/Footer.jsx":"c96a88a86dc4","ui_kits/portfolio/Hero.jsx":"763822495a9e","ui_kits/portfolio/ProjectDetail.jsx":"1b1ade3f44e2","ui_kits/portfolio/ProjectGrid.jsx":"5c2bb3d68d05","ui_kits/portfolio/data.js":"7d697c86cdf7","ui_kits/portfolio/tweaks-panel.jsx":"6591467622ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VirtualCreationsDesignSystem_42bcde = window.VirtualCreationsDesignSystem_42bcde || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/**
 * Badge — mono engine/tech identity pill (UNITY, UNREAL, VR, AR, AI).
 * Colored by `tone`. Outline by default; `solid` for high emphasis.
 */
function Badge({
  children,
  tone = 'cyan',
  solid = false,
  size = 'md'
}) {
  const tones = {
    cyan: 'var(--cyan)',
    unity: 'var(--tag-unity)',
    unreal: 'var(--tag-unreal)',
    vr: 'var(--tag-vr)',
    ar: 'var(--tag-ar)',
    ai: 'var(--tag-ai)',
    magenta: 'var(--magenta)',
    violet: 'var(--violet)',
    lime: 'var(--lime)',
    amber: 'var(--amber)'
  };
  const c = tones[tone] || tones.cyan;
  const sizes = {
    sm: {
      fontSize: 10.5,
      padding: '4px 10px'
    },
    md: {
      fontSize: 12,
      padding: '6px 13px'
    }
  };
  const s = sizes[size] || sizes.md;
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    fontFamily: 'var(--font-mono)',
    fontSize: s.fontSize,
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    padding: s.padding,
    borderRadius: 'var(--r-pill)',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    color: solid ? 'var(--ink-on-bright)' : c,
    background: solid ? c : 'color-mix(in srgb, ' + c + ' 12%, transparent)',
    border: '1px solid ' + (solid ? 'transparent' : 'color-mix(in srgb, ' + c + ' 45%, transparent)')
  };
  return /*#__PURE__*/React.createElement("span", {
    style: style
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the brand's primary action. Chunky, rounded, neon.
 * Variants: primary (cyan glow), secondary (outline), ghost, aurora (gradient).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  iconRight = null,
  full = false,
  disabled = false,
  onClick,
  type = 'button',
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 13,
      height: 36,
      gap: 7
    },
    md: {
      padding: '12px 22px',
      fontSize: 15,
      height: 46,
      gap: 9
    },
    lg: {
      padding: '16px 30px',
      fontSize: 17,
      height: 56,
      gap: 11
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    width: full ? '100%' : 'auto',
    fontFamily: 'var(--font-sans)',
    fontSize: s.fontSize,
    fontWeight: 700,
    letterSpacing: '0.01em',
    lineHeight: 1,
    border: '1px solid transparent',
    borderRadius: 'var(--r-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'transform var(--dur-fast) var(--ease-bounce), box-shadow var(--dur) var(--ease-out), background var(--dur), border-color var(--dur)',
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: 'var(--cyan)',
      color: 'var(--ink-on-bright)',
      boxShadow: 'var(--glow-cyan)'
    },
    aurora: {
      background: 'var(--grad-aurora)',
      color: 'var(--ink-on-bright)',
      boxShadow: 'var(--glow-violet)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--ink-1)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-2)'
    }
  };
  const style = {
    ...base,
    ...(variants[variant] || variants.primary)
  };
  const hover = (e, on) => {
    if (disabled) return;
    const el = e.currentTarget;
    el.style.transform = on ? 'translateY(-2px)' : 'translateY(0)';
    if (variant === 'primary') el.style.boxShadow = on ? 'var(--glow-cyan-lg)' : 'var(--glow-cyan)';
    if (variant === 'aurora') el.style.boxShadow = on ? 'var(--glow-cyan-lg)' : 'var(--glow-violet)';
    if (variant === 'secondary') el.style.borderColor = on ? 'var(--cyan)' : 'var(--border-strong)';
    if (variant === 'ghost') el.style.color = on ? 'var(--cyan)' : 'var(--ink-2)';
  };
  const press = (e, on) => {
    if (disabled) return;
    e.currentTarget.style.transform = on ? 'scale(0.96)' : 'translateY(-2px)';
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: style,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: e => hover(e, true),
    onMouseLeave: e => hover(e, false),
    onMouseDown: e => press(e, true),
    onMouseUp: e => press(e, false)
  }, rest), icon, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — generic surface container on the dark base.
 * `glow` adds an interactive cyan hover halo + lift.
 */
function Card({
  children,
  glow = true,
  padding = 'var(--s-6)',
  style = {},
  ...rest
}) {
  const ref = React.useRef(null);
  const enter = () => {
    if (!glow || !ref.current) return;
    ref.current.style.transform = 'translateY(-4px)';
    ref.current.style.borderColor = 'var(--cyan)';
    ref.current.style.boxShadow = 'var(--glow-cyan), var(--shadow-card)';
  };
  const leave = () => {
    if (!glow || !ref.current) return;
    ref.current.style.transform = 'translateY(0)';
    ref.current.style.borderColor = 'var(--border)';
    ref.current.style.boxShadow = 'var(--shadow-card)';
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    onMouseEnter: enter,
    onMouseLeave: leave,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-lg)',
      boxShadow: 'var(--shadow-card)',
      padding,
      transition: 'transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out), border-color var(--dur)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/**
 * Tag — feature chip for case-study highlights (e.g. "VR IK", "Haptics").
 * Subtle by default; carries an optional leading neon dot.
 */
function Tag({
  children,
  dot = true,
  tone = 'cyan'
}) {
  const tones = {
    cyan: 'var(--cyan)',
    magenta: 'var(--magenta)',
    violet: 'var(--violet)',
    lime: 'var(--lime)',
    amber: 'var(--amber)'
  };
  const c = tones[tone] || tones.cyan;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--ink-2)',
      padding: '7px 14px',
      borderRadius: 'var(--r-pill)',
      background: 'var(--bg-2)',
      border: '1px solid var(--line)',
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: c,
      boxShadow: '0 0 8px ' + c,
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
/**
 * Field — labelled text input / textarea on the dark base.
 * Mono label, glass-dark field, cyan focus ring + glow.
 */
function Field({
  label,
  placeholder = '',
  type = 'text',
  textarea = false,
  value,
  onChange,
  name
}) {
  const [focus, setFocus] = React.useState(false);
  const sharedStyle = {
    width: '100%',
    fontFamily: 'var(--font-sans)',
    fontSize: 15,
    color: 'var(--ink-1)',
    background: 'var(--bg-1)',
    border: '1px solid ' + (focus ? 'var(--cyan)' : 'var(--line)'),
    borderRadius: 'var(--r-md)',
    padding: textarea ? '14px 16px' : '0 16px',
    height: textarea ? 'auto' : 48,
    minHeight: textarea ? 112 : undefined,
    outline: 'none',
    boxShadow: focus ? 'var(--glow-cyan)' : 'none',
    transition: 'border-color var(--dur), box-shadow var(--dur)',
    resize: textarea ? 'vertical' : undefined,
    lineHeight: textarea ? 1.5 : undefined
  };
  const Tag = textarea ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, label), /*#__PURE__*/React.createElement(Tag, {
    name: name,
    type: textarea ? undefined : type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: sharedStyle
  }));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/media/ProjectCard.jsx
try { (() => {
/**
 * ProjectCard — image-forward tile for a VR/AR/XR project.
 * Falls back to a neon gradient placeholder (with initials) when no
 * image is supplied. Hover lifts, intensifies glow, zooms the art, and
 * reveals the blurb.
 */
function ProjectCard({
  title,
  blurb = '',
  engine = 'Unity',
  medium = 'VR',
  image = null,
  initials = '',
  accent = 'cyan',
  onOpen
}) {
  const ref = React.useRef(null);
  const artRef = React.useRef(null);
  const bodyRef = React.useRef(null);
  const accents = {
    cyan: 'var(--cyan)',
    magenta: 'var(--magenta)',
    violet: 'var(--violet)',
    lime: 'var(--lime)',
    amber: 'var(--amber)'
  };
  const glows = {
    cyan: 'var(--glow-cyan)',
    magenta: 'var(--glow-magenta)',
    violet: 'var(--glow-violet)',
    lime: 'var(--glow-lime)',
    amber: 'var(--glow-cyan)'
  };
  const c = accents[accent] || accents.cyan;
  const placeholderBg = {
    cyan: 'linear-gradient(135deg,#0E2A33,#12101F 60%), radial-gradient(120% 80% at 30% 10%, rgba(25,227,255,.5), transparent 60%)',
    magenta: 'linear-gradient(135deg,#33122A,#12101F 60%), radial-gradient(120% 80% at 30% 10%, rgba(255,61,203,.5), transparent 60%)',
    violet: 'linear-gradient(135deg,#1E1840,#12101F 60%), radial-gradient(120% 80% at 30% 10%, rgba(123,91,255,.55), transparent 60%)',
    lime: 'linear-gradient(135deg,#1E2A12,#12101F 60%), radial-gradient(120% 80% at 30% 10%, rgba(182,255,60,.4), transparent 60%)',
    amber: 'linear-gradient(135deg,#33260F,#12101F 60%), radial-gradient(120% 80% at 30% 10%, rgba(255,178,61,.45), transparent 60%)'
  };
  const enter = () => {
    if (ref.current) {
      ref.current.style.transform = 'translateY(-6px)';
      ref.current.style.borderColor = c;
      ref.current.style.boxShadow = glows[accent] + ', var(--shadow-pop)';
    }
    if (artRef.current) artRef.current.style.transform = 'scale(1.06)';
    if (bodyRef.current) {
      bodyRef.current.style.maxHeight = '120px';
      bodyRef.current.style.opacity = '1';
    }
  };
  const leave = () => {
    if (ref.current) {
      ref.current.style.transform = 'translateY(0)';
      ref.current.style.borderColor = 'var(--border)';
      ref.current.style.boxShadow = 'var(--shadow-card)';
    }
    if (artRef.current) artRef.current.style.transform = 'scale(1)';
    if (bodyRef.current) {
      bodyRef.current.style.maxHeight = '0px';
      bodyRef.current.style.opacity = '0';
    }
  };
  const engineTone = engine.toLowerCase() === 'unreal' ? 'unreal' : 'unity';
  const mt = medium.toLowerCase();
  const mediumTone = mt === 'ar' ? 'ar' : mt === 'ai' ? 'ai' : mt === 'mr' ? 'cyan' : mt === '3d' ? 'violet' : 'vr';
  return /*#__PURE__*/React.createElement("article", {
    ref: ref,
    onMouseEnter: enter,
    onMouseLeave: leave,
    onClick: onOpen,
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-lg)',
      boxShadow: 'var(--shadow-card)',
      overflow: 'hidden',
      cursor: onOpen ? 'pointer' : 'default',
      transition: 'transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out), border-color var(--dur)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16 / 10',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: artRef,
    style: {
      position: 'absolute',
      inset: 0,
      background: image ? `center/cover no-repeat url(${image})` : placeholderBg[accent],
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }, !image && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'clamp(40px,7vw,72px)',
      letterSpacing: '-0.03em',
      color: 'rgba(255,255,255,0.10)'
    }
  }, initials)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(7,6,14,0.92) 0%, rgba(7,6,14,0.25) 45%, transparent 75%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14,
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: engineTone,
    solid: true,
    size: "sm"
  }, engine), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: mediumTone,
    size: "sm"
  }, medium)), /*#__PURE__*/React.createElement("h3", {
    style: {
      position: 'absolute',
      left: 18,
      right: 18,
      bottom: 16,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(19px,2vw,24px)',
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      color: 'var(--ink-0)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    ref: bodyRef,
    style: {
      maxHeight: 0,
      opacity: 0,
      overflow: 'hidden',
      transition: 'max-height var(--dur) var(--ease-out), opacity var(--dur)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      padding: '14px 18px 18px',
      fontSize: 13.5,
      lineHeight: 1.55,
      color: 'var(--ink-2)'
    }
  }, blurb)));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/FilterTabs.jsx
try { (() => {
/**
 * FilterTabs — pill segmented control for filtering the project grid
 * (All / VR / Unreal / Unity …). Active pill gets cyan fill + glow;
 * an animated row, playful on select.
 */
function FilterTabs({
  tabs = ['All'],
  active = 'All',
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, tabs.map(t => {
    const on = t === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(t),
      onMouseEnter: e => {
        if (!on) {
          e.currentTarget.style.borderColor = 'var(--cyan)';
          e.currentTarget.style.color = 'var(--ink-1)';
        }
      },
      onMouseLeave: e => {
        if (!on) {
          e.currentTarget.style.borderColor = 'var(--line)';
          e.currentTarget.style.color = 'var(--ink-2)';
        }
      },
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12.5,
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        padding: '9px 18px',
        borderRadius: 'var(--r-pill)',
        cursor: 'pointer',
        color: on ? 'var(--ink-on-bright)' : 'var(--ink-2)',
        background: on ? 'var(--cyan)' : 'transparent',
        border: '1px solid ' + (on ? 'transparent' : 'var(--line)'),
        boxShadow: on ? 'var(--glow-cyan)' : 'none',
        transition: 'all var(--dur) var(--ease-bounce)'
      }
    }, t);
  }));
}
Object.assign(__ds_scope, { FilterTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/FilterTabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
/**
 * Navbar — sticky glass HUD header with portal mark, wordmark and links.
 * `markSrc` points to the portal SVG; links is an array of {label, href}.
 */
function Navbar({
  markSrc = 'assets/portal-mark.svg',
  brand = 'VIRTUAL CREATIONS',
  links = [{
    label: 'Home',
    href: '#'
  }, {
    label: 'Work',
    href: '#work'
  }, {
    label: 'About',
    href: '#about'
  }],
  active = 'Work',
  cta = 'Get in touch',
  onCta,
  onNav
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px clamp(20px,5vw,48px)',
      background: 'var(--glass-fill)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "",
    style: {
      width: 34,
      height: 34,
      filter: 'drop-shadow(0 0 10px rgba(25,227,255,.5))'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 16,
      letterSpacing: '-0.01em',
      color: 'var(--ink-1)'
    }
  }, brand)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(14px,2.5vw,30px)'
    }
  }, links.map(l => {
    const isActive = l.label === active;
    return /*#__PURE__*/React.createElement("a", {
      key: l.label,
      href: l.href,
      onClick: e => {
        if (onNav) {
          e.preventDefault();
          onNav(l.label);
        }
      },
      onMouseEnter: e => {
        if (!isActive) e.currentTarget.style.color = 'var(--cyan-bright)';
      },
      onMouseLeave: e => {
        if (!isActive) e.currentTarget.style.color = 'var(--ink-2)';
      },
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12.5,
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: isActive ? 'var(--cyan)' : 'var(--ink-2)',
        transition: 'color var(--dur-fast)'
      }
    }, l.label);
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onCta,
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = 'var(--glow-cyan-lg)';
      e.currentTarget.style.transform = 'translateY(-1px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = 'var(--glow-cyan)';
      e.currentTarget.style.transform = 'translateY(0)';
    },
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--ink-on-bright)',
      background: 'var(--cyan)',
      border: 'none',
      borderRadius: 'var(--r-pill)',
      padding: '9px 18px',
      cursor: 'pointer',
      boxShadow: 'var(--glow-cyan)',
      transition: 'box-shadow var(--dur), transform var(--dur-fast)'
    }
  }, cta)));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Footer.jsx
try { (() => {
// Footer — contact band + social. Aurora top border, mono details.
function Footer() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("footer", {
    id: "about",
    style: {
      position: 'relative',
      background: 'var(--bg-1)',
      borderTop: '1px solid var(--line)',
      padding: 'clamp(56px,8vw,100px) clamp(20px,5vw,48px) 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: 'var(--grad-aurora)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,1fr)',
      gap: 'clamp(32px,6vw,80px)',
      alignItems: 'start'
    },
    className: "vc-footgrid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "vc-kicker"
  }, "About Me"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-h2)',
      letterSpacing: '-0.03em',
      color: 'var(--ink-1)',
      margin: '12px 0 18px',
      textWrap: 'balance'
    }
  }, "Hey \u2014 I\u2019m Manasi."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--ink-2)',
      maxWidth: 470,
      marginBottom: 16
    }
  }, "I\u2019m an XR developer based in Swansea, and building immersive worlds is the thing I genuinely lose track of time doing. I started out in computer science back in India, but the moment I tried VR I was hooked \u2014 so I came to the UK to chase immersive tech properly."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--ink-2)',
      maxWidth: 470,
      marginBottom: 22
    }
  }, "Most of my projects start as a \u201Cwhat if\u201D \u2014 what if mini-golf taught you Hogwarts, what if VR let you feel what it\u2019s like to lose your hearing? Lately I\u2019ve been moving into mixed reality too (the Festo project was my first proper step there), blending the digital into the real room. I work in Unity and Unreal, usually fussing over the lighting way longer than I should. Outside of headsets I\u2019m a karate kid at heart \u2014 state-level gold medalist, which probably explains the stubborn streak. Still learning, still experimenting, always uploading new stuff as I go."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      marginBottom: 24
    }
  }, [['box', 'Unity'], ['gamepad-2', 'Unreal'], ['scan-eye', 'Mixed Reality'], ['bot', 'AI NPCs'], ['sparkles', 'Environment Art']].map(([ic, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--ink-2)',
      padding: '7px 13px',
      borderRadius: 'var(--r-pill)',
      background: 'var(--bg-2)',
      border: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 15,
      height: 15,
      color: 'var(--cyan)'
    }
  }), t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cyan)'
    }
  }, "EMAIL"), " \xA0 manasiylodha@gmail.com"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cyan)'
    }
  }, "BASE"), " \xA0\xA0 Swansea, United Kingdom"))), /*#__PURE__*/React.createElement("div", null, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 220,
      flexDirection: 'column',
      gap: 10,
      textAlign: 'center',
      border: '1px solid var(--line)',
      borderRadius: 'var(--r-lg)',
      background: 'var(--bg-2)',
      boxShadow: 'var(--glow-cyan)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 24,
      color: 'var(--cyan)'
    }
  }, "Thanks for submitting!"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-2)',
      fontSize: 14
    }
  }, "I\u2019ll get back to you soon.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "First name",
    placeholder: "Jane"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Last name",
    placeholder: "Doe"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    type: "email",
    placeholder: "you@studio.com"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Message",
    textarea: true,
    placeholder: "Tell me about your project\u2026"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    type: "submit"
  }, "Send Message"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '48px auto 0',
      paddingTop: 24,
      borderTop: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2023 Manasi\u2019s Virtual Creations. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/in/manasi-lodha/",
    style: {
      color: 'var(--ink-2)'
    }
  }, "LINKEDIN"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/_i_am_manasi",
    style: {
      color: 'var(--ink-2)'
    }
  }, "INSTAGRAM"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
// Hero — immersive landing. Huge Unbounded headline over the void grid,
// floating portal mark, aurora gradient accent, big animated reveal.
function Hero({
  onExplore,
  onAbout
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: 'clamp(60px,9vw,120px) clamp(20px,5vw,48px) clamp(70px,10vw,130px)',
      background: 'var(--grad-void)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vc-grid-bg",
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.7,
      maskImage: 'radial-gradient(80% 70% at 50% 30%, #000 30%, transparent 80%)',
      WebkitMaskImage: 'radial-gradient(80% 70% at 50% 30%, #000 30%, transparent 80%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-12%',
      right: '-8%',
      width: 460,
      height: 460,
      background: 'radial-gradient(circle, rgba(123,91,255,0.42), transparent 62%)',
      filter: 'blur(20px)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '-18%',
      left: '-6%',
      width: 420,
      height: 420,
      background: 'radial-gradient(circle, rgba(25,227,255,0.30), transparent 60%)',
      filter: 'blur(20px)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "vc-kicker reveal",
    style: {
      animationDelay: '0ms'
    }
  }, "Manasi Lodha \xB7 XR Developer"), /*#__PURE__*/React.createElement("h1", {
    className: "reveal",
    style: {
      animationDelay: '90ms',
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'var(--fs-mega)',
      lineHeight: 0.92,
      letterSpacing: '-0.035em',
      color: 'var(--ink-1)',
      margin: 0
    }
  }, "IMMERSIVE", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "vc-grad-text"
  }, "CREATIONS")), /*#__PURE__*/React.createElement("p", {
    className: "reveal",
    style: {
      animationDelay: '180ms',
      maxWidth: 640,
      fontSize: 'var(--fs-lead)',
      color: 'var(--ink-2)',
      lineHeight: 1.55
    }
  }, "I craft virtual and mixed-reality experiences with imagination and innovation \u2014 VR worlds, AI-driven NPCs and cinematic environments that put you inside the story."), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      animationDelay: '260ms',
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    size: "lg",
    onClick: onExplore
  }, "Explore the Work"), /*#__PURE__*/React.createElement(Btn, {
    variant: "secondary",
    size: "lg",
    onClick: onAbout
  }, "About Me")), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      animationDelay: '340ms',
      display: 'flex',
      gap: 14,
      marginTop: 22,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, [['orbit', '9', 'XR experiences'], ['scan-eye', 'VR · MR', 'Virtual & mixed reality'], ['gamepad-2', 'Unity · Unreal', 'My toolkit']].map(([ic, n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      padding: '14px 20px',
      borderRadius: 'var(--r-md)',
      background: 'var(--glass-fill)',
      border: '1px solid var(--line)',
      backdropFilter: 'var(--blur-glass)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 24,
      height: 24,
      color: 'var(--cyan)',
      filter: 'drop-shadow(0 0 8px rgba(25,227,255,.5))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 20,
      color: 'var(--ink-1)',
      lineHeight: 1.05
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)',
      marginTop: 3
    }
  }, l)))))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/ProjectDetail.jsx
try { (() => {
// ProjectDetail — full-screen case-study overlay for a single project.
function ProjectDetail({
  project,
  onClose
}) {
  if (!project) return null;
  const p = project;
  const accents = {
    cyan: 'var(--cyan)',
    magenta: 'var(--magenta)',
    violet: 'var(--violet)',
    lime: 'var(--lime)',
    amber: 'var(--amber)'
  };
  const placeholder = {
    cyan: 'linear-gradient(135deg,#0E2A33,#12101F 60%), radial-gradient(120% 80% at 30% 10%, rgba(25,227,255,.5), transparent 60%)',
    magenta: 'linear-gradient(135deg,#33122A,#12101F 60%), radial-gradient(120% 80% at 30% 10%, rgba(255,61,203,.5), transparent 60%)',
    violet: 'linear-gradient(135deg,#1E1840,#12101F 60%), radial-gradient(120% 80% at 30% 10%, rgba(123,91,255,.55), transparent 60%)',
    lime: 'linear-gradient(135deg,#1E2A12,#12101F 60%), radial-gradient(120% 80% at 30% 10%, rgba(182,255,60,.4), transparent 60%)',
    amber: 'linear-gradient(135deg,#33260F,#12101F 60%), radial-gradient(120% 80% at 30% 10%, rgba(255,178,61,.45), transparent 60%)'
  };
  const c = accents[p.accent];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      overflowY: 'auto',
      background: 'rgba(7,6,14,0.72)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      animation: 'vc-rise .3s var(--ease-out)',
      padding: 'clamp(16px,4vw,48px)'
    }
  }, /*#__PURE__*/React.createElement("article", {
    onClick: e => e.stopPropagation(),
    style: {
      maxWidth: 920,
      margin: '0 auto',
      background: 'var(--bg-1)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-xl)',
      boxShadow: 'var(--shadow-pop)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16 / 8',
      background: p.image ? `#0B0A14 center/cover no-repeat url(${p.image})` : placeholder[p.accent]
    }
  }, !p.image && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'clamp(60px,12vw,140px)',
      color: 'rgba(255,255,255,0.09)',
      letterSpacing: '-0.04em'
    }
  }, p.initials), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(18,16,31,0.97) 4%, rgba(18,16,31,0.35) 45%, transparent 72%)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      position: 'absolute',
      top: 18,
      right: 18,
      width: 42,
      height: 42,
      borderRadius: '50%',
      background: 'var(--glass-fill)',
      backdropFilter: 'var(--blur-glass)',
      border: '1px solid var(--line-2)',
      color: 'var(--ink-1)',
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1
    }
  }, "\u2715"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'clamp(20px,4vw,40px)',
      bottom: 24,
      right: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.engine === 'Unreal' ? 'unreal' : 'unity',
    solid: true,
    size: "md"
  }, p.engine), /*#__PURE__*/React.createElement(Badge, {
    tone: p.medium === 'AI' ? 'ai' : p.medium === 'MR' ? 'cyan' : p.medium === '3D' ? 'violet' : 'vr',
    size: "md"
  }, p.medium), /*#__PURE__*/React.createElement(Badge, {
    tone: "cyan",
    size: "md"
  }, p.year)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(28px,4vw,52px)',
      letterSpacing: '-0.03em',
      color: 'var(--ink-0)',
      lineHeight: 1,
      margin: 0
    }
  }, p.title))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(24px,4vw,44px)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(18px,2.2vw,26px)',
      lineHeight: 1.3,
      color: c,
      letterSpacing: '-0.01em',
      marginBottom: 22,
      textWrap: 'balance'
    }
  }, p.hook), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--ink-2)',
      marginBottom: 28,
      maxWidth: 680
    }
  }, p.body), /*#__PURE__*/React.createElement("span", {
    className: "vc-kicker",
    style: {
      color: 'var(--ink-3)'
    }
  }, "Features & Tech"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      marginTop: 14
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    tone: p.accent
  }, t))))));
}
window.ProjectDetail = ProjectDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/ProjectDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/ProjectGrid.jsx
try { (() => {
// ProjectGrid — filterable gallery of ProjectCards.
function ProjectGrid({
  projects,
  onOpen
}) {
  const filters = ['All', 'VR', 'MR', 'AI', 'Unreal', 'Unity'];
  const [filter, setFilter] = React.useState('All');
  const match = p => {
    if (filter === 'All') return true;
    if (filter === 'Unreal' || filter === 'Unity') return p.engine === filter;
    return p.medium === filter; // VR / MR / AI
  };
  const shown = projects.filter(match);
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      padding: 'clamp(56px,8vw,110px) clamp(20px,5vw,48px)',
      background: 'var(--bg-0)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 20,
      marginBottom: 34
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "vc-kicker"
  }, "Selected Work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-h1)',
      letterSpacing: '-0.03em',
      color: 'var(--ink-1)',
      marginTop: 10
    }
  }, "The Portfolio")), /*#__PURE__*/React.createElement(Tabs, {
    tabs: filters,
    active: filter,
    onChange: setFilter
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
      gap: 22
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(PCard, {
    key: p.id,
    title: p.title,
    blurb: p.blurb,
    engine: p.engine,
    medium: p.medium,
    accent: p.accent,
    initials: p.initials,
    image: p.image,
    onOpen: () => onOpen(p)
  })))));
}
window.ProjectGrid = ProjectGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/ProjectGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
// The projects from Manasi's Virtual Creations portfolio.
// Real screenshots live in assets/projects/ (imported from the
// Portfolio-Website repo). Paths are relative to ui_kits/portfolio/.
window.VC_PROJECTS = [{
  id: 'empathy',
  title: 'Empathy Machine for Hard to Hear',
  engine: 'Unity',
  medium: 'VR',
  accent: 'cyan',
  initials: 'EM',
  year: '2024',
  image: '../../assets/projects/empathy.png',
  tags: ['VR IK Embodiment', 'Meta Haptics', 'Yarn Dialogue', 'Reactive NPCs'],
  blurb: 'A VR experience that drops you into a restaurant where you can\u2019t hear a word \u2014 built so people feel the daily reality of hard-of-hearing folks.',
  hook: 'Can VR help us experience the world through someone else\u2019s eyes?',
  body: 'I built full-body inverse kinematics for presence, used Meta Haptics to simulate stress responses like a racing heartbeat, and scripted NPCs in Yarn so they react to your gestures. This one mattered to me \u2014 it\u2019s proof VR can be a tool for awareness, not just entertainment.'
}, {
  id: 'vault',
  title: 'Vault Raiders: Save Verdantia',
  engine: 'Unity',
  medium: 'VR',
  accent: 'magenta',
  initials: 'VR',
  year: '2024',
  image: '../../assets/projects/vault.png',
  tags: ['XR Interaction Toolkit', 'Hand Grab & Throw', 'Power-ups', 'Boss Fights'],
  blurb: 'An action-packed VR adventure where YOU are the hero \u2014 battle a giant Teddy Monster, grab Monkey Bombs and Ice Bombs, and save the world one level at a time.',
  hook: 'Ever battled a giant Teddy Monster in VR? Now\u2019s your chance.',
  body: 'I designed dynamic hand interactions for grabbing and throwing, levels that run from castles to candy lands to icy boss fights, and immersive hazards like slippery floors and crumbling paths. Built in Unity with the XR Interaction Toolkit.'
}, {
  id: 'hpgolf',
  title: 'Harry Potter Magical Mini-Golf',
  engine: 'Unity',
  medium: 'VR',
  accent: 'violet',
  initials: 'HP',
  year: '2023',
  image: '../../assets/projects/hpgolf.png',
  tags: ['Animator System', 'Magical Portals', 'Teleportation', 'Spatial Audio'],
  blurb: 'A VR mini-golf adventure through the wizarding world. Each hole recreates an iconic scene, and the Sorting Hat assigns your Hogwarts house at the end.',
  hook: 'Easy to learn, difficult to master \u2014 magical mini-golf across Hogwarts.',
  body: 'I built story-driven levels across Hogwarts, the Forbidden Forest and Hagrid\u2019s Hut. The Unity Animator drives moving trains, flying owls and magical portals; physics interactions and spatial audio pull the whole thing together.'
}, {
  id: 'gambling',
  title: 'Gambling Room',
  engine: 'Unity',
  medium: 'AI',
  accent: 'amber',
  initials: 'GR',
  year: '2024',
  image: '../../assets/projects/gambling.png',
  tags: ['AI-Driven NPCs', 'Yarn Dialogue', 'Head-Tracking', 'Built-in Music Player'],
  blurb: 'A high-stakes VR gambling den brought to life with AI-driven NPCs, dynamic lighting and interactive elements \u2014 cinematic and a little surreal.',
  hook: 'A realistic yet surreal world \u2014 cinematic, reactive, alive.',
  body: 'The NPCs respond to your actions through Yarn dialogue and head-tracking so they follow and react to you. I spent a lot of time on the dynamic lighting and added an in-game music player so players can set the mood themselves.'
}, {
  id: 'climate',
  title: 'Climate Change Awareness',
  engine: 'Unity',
  medium: 'VR',
  accent: 'lime',
  initials: 'CC',
  year: '2024',
  image: '../../assets/projects/climate.png',
  tags: ['Recycling Mini-Games', 'Ambisonic Audio', 'Recycled-Art Gallery', 'Educational'],
  blurb: 'An interactive VR project about sustainable choices \u2014 sort waste, run the recycling lab, and see how everyday decisions shape the planet.',
  hook: 'Every everyday choice shapes the planet \u2014 feel it in VR.',
  body: 'I made a Garbage Sorting game and a Recycling Lab that teach how materials get recycled, plus a gallery of upcycled products and a recycled lion sculpture. Ambisonic NPC audio and real sustainability facts help the message land.'
}, {
  id: 'festo',
  title: 'Festo Mixed Reality Experience',
  engine: 'Unity',
  medium: 'MR',
  accent: 'cyan',
  initials: 'MR',
  year: '2024',
  image: '../../assets/projects/festo.gif',
  tags: ['Mixed Reality', 'Passthrough', 'Spatial Interaction', 'Industrial Training'],
  blurb: 'A mixed-reality experience built for Festo \u2014 blending digital content into the real space for hands-on, spatial interaction.',
  hook: 'Where the digital and the physical share the same room.',
  body: 'This is where I moved from fully-virtual into mixed reality \u2014 anchoring interactive 3D content into the user\u2019s real environment with passthrough and spatial interaction. Designing for the real world around the headset is a completely different (and brilliant) challenge.'
}, {
  id: 'office',
  title: 'Modern Office Interiors',
  engine: 'Unreal',
  medium: '3D',
  accent: 'violet',
  initials: 'OI',
  year: '2023',
  image: '../../assets/projects/office.png',
  tags: ['Material Craft', 'Themed Sections', 'Realistic Lighting', 'Environment Design'],
  blurb: 'A meticulously crafted head-office environment with themed sections \u2014 every detail, from lighting to materials, designed for a realistic, immersive space.',
  hook: 'From lighting to materials, every detail meticulously crafted.',
  body: 'Built in Unreal Engine, I designed every detail of a head office and gave each section its own theme to balance aesthetics and function. A real study in environment design, material selection and lighting.'
}, {
  id: 'cafe',
  title: 'Cafe Design',
  engine: 'Unity',
  medium: '3D',
  accent: 'amber',
  initials: 'CF',
  year: '2023',
  image: '../../assets/projects/cafe.png',
  tags: ['Interior Design', 'Intricate Detail'],
  blurb: 'A cosy cafe environment created in Unity with intricate interior detailing.',
  hook: 'A cosy, intricately detailed virtual cafe.',
  body: 'A focused interior-design study in Unity \u2014 warm materials, considered lighting and lots of small intricate props.'
}, {
  id: 'unreal-anim',
  title: 'Unreal Animation',
  engine: 'Unreal',
  medium: '3D',
  accent: 'magenta',
  initials: 'UA',
  year: '2024',
  image: '../../assets/projects/unreal-anim.png',
  tags: ['Character Animation', 'Cinematic', 'Environment Design'],
  blurb: 'A cinematic scene of a tense woman on a ship \u2014 character animation and environment design in Unreal Engine.',
  hook: 'Storytelling through motion and atmosphere.',
  body: 'I designed and animated a cinematic scene including character animation and environment design, playing with mood, pacing and camera in Unreal Engine.'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.FilterTabs = __ds_scope.FilterTabs;

__ds_ns.Navbar = __ds_scope.Navbar;

})();
