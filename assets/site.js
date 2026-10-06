const BASE = 'https://orgfarm-e88355df2d-dev-ed.develop.my.site.com/vistaranovavforcesite/services/apexrest/vistaraNova';

const CONFIG = Object.freeze({
  keyStorage: 'vn.opsKey',
  refreshMs: 60000,
  pollMs: 2500,
  timeoutMs: 30000,
  pollTimeoutMs: 20000,
  sendTimeoutMs: 90000,
  slowNoticeMs: 8000,
  resetSettleMs: 4000,
  resetCheckMs: 3000,
  resetChecks: 8,
  sentHintMs: 30000,
  watchLimitMs: 900000,
  pendingTtlMs: 600000
});

const PHOTO = Object.freeze({
  hero: 'photo-1436491865332-7a61a109cc05',
  airport: 'photo-1530521954074-e64f6810b32d',
  travel: 'photo-1488646953014-85cb44e25828',
  DXB: 'photo-1512453979798-5ea266f8880c',
  CDG: 'photo-1502602898657-3e91760cbb34',
  MLE: 'photo-1514282401047-d79a71a590e8',
  LHR: 'photo-1513635269975-59663e0ac1ad',
  JFK: 'photo-1496442226666-8d4d0e62e6e9',
  HND: 'photo-1540959733332-eab4deabeeaf',
  NRT: 'photo-1540959733332-eab4deabeeaf',
  SIN: 'photo-1525625293386-3f8f99389edd',
  FCO: 'photo-1552832230-c0197dd311b5',
  CUN: 'photo-1510097467424-192d713fd8b2'
});

const PLACES = Object.freeze({
  MLE: { city: 'Malé', country: 'Maldives', rank: 6, blurb: 'Overwater villas on lagoons of impossible blue, a short seaplane hop from Malé.' },
  DXB: { city: 'Dubai', country: 'United Arab Emirates', rank: 5, blurb: 'Desert sunsets, gold souks and skyline dining above the Gulf.' },
  CDG: { city: 'Paris', country: 'France', rank: 4, blurb: 'Winter light on the Seine, warm bistros and grand galleries.' },
  SIN: { city: 'Singapore', country: 'Singapore', rank: 3, blurb: 'A garden city of hawker feasts and rooftop pools.' },
  FCO: { city: 'Rome', country: 'Italy', rank: 2, blurb: 'Ancient wonders, long lunches and evening strolls.' },
  CUN: { city: 'Cancún', country: 'Mexico', rank: 1, blurb: 'Caribbean beaches, cenote swims and Mayan ruins.' },
  JFK: { city: 'New York', country: 'United States', rank: 0, blurb: 'Broadway nights and gallery mornings.' },
  LHR: { city: 'London', country: 'United Kingdom', rank: 0, blurb: 'Theatre, markets and riverside walks.' },
  MIA: { city: 'Miami', country: 'United States', rank: 0, blurb: 'Art Deco streets and ocean breezes.' },
  HND: { city: 'Tokyo', country: 'Japan', rank: 0, blurb: 'Neon nights and quiet temple gardens.' },
  NRT: { city: 'Tokyo', country: 'Japan', rank: 0, blurb: 'Neon nights and quiet temple gardens.' }
});

const TYPES = Object.freeze([
  { value: 'CANCELLED', key: 'cancel', label: 'Cancel', verb: 'cancel', past: 'cancelled', noun: 'cancellation', icon: 'cancel', text: 'The flight will not operate. Every traveller on board needs a new flight.' },
  { value: 'DELAYED', key: 'delay', label: 'Delay', verb: 'delay', past: 'delayed', noun: 'delay', icon: 'clock', text: 'Same flight, later departure. Tight connections and plans may be at risk.' },
  { value: 'RESCHEDULED', key: 'resched', label: 'Reschedule', verb: 'reschedule', past: 'rescheduled', noun: 'schedule change', icon: 'calendar', text: 'Move the flight to a new date and time.' }
]);

const REASONS = Object.freeze([
  { value: 'Weather', icon: 'cloud', phrase: 'due to weather' },
  { value: 'Crew availability', icon: 'users', phrase: 'due to crew availability' },
  { value: 'Technical', icon: 'wrench', phrase: 'for technical reasons' },
  { value: 'Air traffic control', icon: 'radar', phrase: 'due to air traffic control restrictions' },
  { value: 'Airport operations', icon: 'building', phrase: 'due to airport operations' }
]);

const WHY = Object.freeze([
  { icon: 'seat', title: 'Room to breathe', text: 'Generous legroom in every cabin, lighting tuned to your body clock and quiet zones on overnight flights.' },
  { icon: 'shield', title: 'Rebooked before you ask', text: 'If a flight changes, partners such as Aspire Lifestyles hear instantly and move travellers to the best next flight automatically.' },
  { icon: 'dining', title: 'Dining with a sense of place', text: 'Seasonal menus inspired by where you are heading, from Gulf spices to Parisian pastry.' },
  { icon: 'globe', title: 'One trip, many partners', text: 'Connect with trusted codeshare partners on a single ticket and earn Nova Club miles on every leg.' }
]);

const PARTNERS = Object.freeze([
  { name: 'Aspire Lifestyles', style: 'caps' },
  { name: 'Aurora Sky', small: 'Alliance', style: 'serif' },
  { name: 'Halden Hotels', style: 'light' },
  { name: 'lumen lounges', style: 'bold' },
  { name: 'Cirrus', small: 'Chauffeur', style: 'serif' },
  { name: 'Tidewater Rail', style: 'caps' }
]);

const STATE = Object.freeze({
  ontime: { key: 'ontime', label: 'On time' },
  confirmed: { key: 'ontime', label: 'Confirmed' },
  scheduled: { key: 'scheduled', label: 'Scheduled' },
  cancelled: { key: 'cancelled', label: 'Cancelled' },
  rescheduled: { key: 'rescheduled', label: 'Rescheduled' },
  delayed: { key: 'delayed', label: 'Delayed' }
});

const UPDATE_STATUS = Object.freeze({
  sent: { key: 'sent', label: 'Update sent' },
  received: { key: 'received', label: 'Received' },
  processing: { key: 'processing', label: 'Rebooking' },
  completed: { key: 'completed', label: 'Completed' },
  failed: { key: 'failed', label: 'Failed' },
  reset: { key: 'reset', label: 'Reset' }
});

const CUSTOMER_TONE = Object.freeze({
  detected: 'neutral',
  analysing: 'active',
  analyzing: 'active',
  rebooked: 'good',
  kept: 'good',
  confirmed: 'good',
  changed: 'good',
  resolved: 'good',
  'needs attention': 'warn',
  'with rep': 'rep',
  refunded: 'rep',
  'credit issued': 'rep',
  cancelled: 'bad'
});

const SAFE_STATUSES = new Set(['rebooked', 'kept', 'confirmed', 'changed']);
const WAITING_STATUSES = new Set(['detected', 'analysing', 'analyzing']);

const PROGRESS_STEPS = Object.freeze([
  { id: 'sent', title: 'Update sent' },
  { id: 'received', title: 'Received by Salesforce' },
  { id: 'identified', title: 'Customers identified' },
  { id: 'notified', title: 'Notifications sent' },
  { id: 'rebooking', title: 'Rebooking each customer' },
  { id: 'done', title: 'Done' }
]);

const MASK = '••••••••••••';

const ICONS = Object.freeze({
  plane: '<path d="M21.6 12c0 .7-.6 1.25-1.35 1.25H15l-4.1 7.25H8.75l2.35-7.25H6.3l-1.65 2.2H3l1.05-3.45L3 8.55h1.65l1.65 2.2h4.8L8.75 3.5h2.15L15 10.75h5.25c.75 0 1.35.55 1.35 1.25z"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/>',
  swap: '<path d="M7 4L3.5 7.5 7 11"/><path d="M3.5 7.5h13"/><path d="M17 13l3.5 3.5L17 20"/><path d="M20.5 16.5h-13"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="3"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  cancel: '<circle cx="12" cy="12" r="8.5"/><path d="M9 9l6 6M15 9l-6 6"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowLeft: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  lock: '<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
  users: '<circle cx="9" cy="8.5" r="3.5"/><path d="M2.8 19.5c.8-3.2 3.3-5 6.2-5s5.4 1.8 6.2 5"/><path d="M15.5 5.3a3.5 3.5 0 0 1 0 6.4M17.5 14.8c1.8.6 3.1 2.2 3.7 4.7"/>',
  refresh: '<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8"/><path d="M4 4v4h4"/><path d="M4 13a8 8 0 0 0 14.3 4.9L20 16"/><path d="M20 20v-4h-4"/>',
  alert: '<path d="M10.3 4.3L2.6 17.6a2 2 0 0 0 1.7 2.9h15.4a2 2 0 0 0 1.7-2.9L13.7 4.3a2 2 0 0 0-3.4 0z"/><path d="M12 9.5v4.2M12 16.8v.2"/>',
  info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.8v.2"/>',
  phone: '<rect x="7" y="2.8" width="10" height="18.4" rx="2.5"/><path d="M11 18h2"/>',
  mail: '<rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="M3.5 7l8.5 6 8.5-6"/>',
  send: '<path d="M21 3L10 14"/><path d="M21 3l-7 18-4-7-7-4z"/>',
  eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
  eyeOff: '<path d="M3 3l18 18"/><path d="M10.6 5.6A9.6 9.6 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a17 17 0 0 1-3 3.8M6.6 6.6C3.9 8.4 2.5 12 2.5 12S6 18.5 12 18.5c1.7 0 3.2-.5 4.5-1.2"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',
  seat: '<path d="M7.5 4.5l1.6 9.5h7.4a1.5 1.5 0 0 1 1.5 1.5V17"/><path d="M12.5 14v6M8.5 20h8"/><path d="M9.6 9.5h5.4"/>',
  globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.6 3.6 5.4 3.6 8.5s-1.2 5.9-3.6 8.5c-2.4-2.6-3.6-5.4-3.6-8.5s1.2-5.9 3.6-8.5z"/>',
  dining: '<path d="M7 3v7.5M4.5 3v4.5A2.5 2.5 0 0 0 7 10a2.5 2.5 0 0 0 2.5-2.5V3M7 10v11"/><path d="M17.5 21V3c-2.5 1.5-3.5 4.5-3.5 8h3.5"/>',
  shield: '<path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6z"/><path d="M8.8 12.2l2.2 2.2 4.4-4.6"/>',
  sparkle: '<path d="M12 3c.6 5 3 7.4 8 8-5 .6-7.4 3-8 8-.6-5-3-7.4-8-8 5-.6 7.4-3 8-8z"/>',
  logout: '<path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3"/><path d="M10 16l4-4-4-4M14 12H4"/>',
  copy: '<rect x="8.5" y="8.5" width="11" height="11" rx="2.2"/><path d="M15.5 8.5V6A1.5 1.5 0 0 0 14 4.5H6A1.5 1.5 0 0 0 4.5 6v8A1.5 1.5 0 0 0 6 15.5h2.5"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  bolt: '<path d="M13 2.8L5 13.5h6l-1 7.7 8-10.7h-6z"/>',
  cloud: '<path d="M7 18.5h10a4 4 0 0 0 .6-7.95A5.5 5.5 0 0 0 7 9.5a4.5 4.5 0 0 0 0 9z"/>',
  wrench: '<path d="M15.2 4.2a4.5 4.5 0 0 0-5.6 5.9l-5.4 5.4a2 2 0 0 0 2.8 2.8l5.4-5.4a4.5 4.5 0 0 0 5.9-5.6l-2.6 2.6-2.4-.6-.6-2.4z"/>',
  radar: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><path d="M12 12l5.5-5.5"/>',
  building: '<path d="M4 20.5h16"/><path d="M6 20.5V9l6-4.5L18 9v11.5"/><path d="M10 20.5v-5h4v5"/><path d="M9.5 11h.01M14.5 11h.01"/>',
  bell: '<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
  headset: '<path d="M4.5 13.5V12a7.5 7.5 0 0 1 15 0v1.5"/><rect x="3.5" y="13" width="4" height="6" rx="1.5"/><rect x="16.5" y="13" width="4" height="6" rx="1.5"/><path d="M18.5 19c0 1.2-1.6 2-4 2h-2"/>'
});

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ESCAPES[ch]);
const lower = value => String(value ?? '').trim().toLowerCase();
const fold = value => String(value ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const pad = n => String(n).padStart(2, '0');
const plural = (n, one, many) => `${n} ${n === 1 ? one : many || `${one}s`}`;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const scrollBehavior = () => (reduceMotion() ? 'auto' : 'smooth');
const isNarrow = () => window.matchMedia('(max-width: 1023px)').matches;
const titleCase = value => {
  const text = lower(value);
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : '';
};
const num = (value, fallback) => {
  if (value === null || value === undefined || value === '') return fallback;
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
};
const moneyFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const money = value => {
  const n = num(value, null);
  return n === null ? '' : moneyFormat.format(n);
};
const countBy = (items, keyFn) => items.reduce((map, item) => {
  const key = keyFn(item);
  map.set(key, (map.get(key) || 0) + 1);
  return map;
}, new Map());
const topKey = map => [...map.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;

function patch(el, html) {
  if (!el || el.vnHtml === html) return false;
  el.innerHTML = html;
  el.vnHtml = html;
  return true;
}

function icon(name, extra = '') {
  const fill = name === 'plane' ? ' icon--fill' : '';
  return `<svg class="icon${fill}${extra ? ` ${extra}` : ''}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICONS[name] || ''}</svg>`;
}

function photoUrl(id, width) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=70`;
}

function photoImg(id, { widths = [480, 800, 1200], sizes = '100vw', cls = '', eager = false } = {}) {
  const srcset = widths.map(w => `${photoUrl(id, w)} ${w}w`).join(', ');
  const src = photoUrl(id, widths[Math.min(1, widths.length - 1)]);
  const loading = eager ? 'fetchpriority="high"' : 'loading="lazy"';
  return `<img${cls ? ` class="${cls}"` : ''} src="${src}" srcset="${srcset}" sizes="${sizes}" alt="" ${loading} decoding="async">`;
}

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const Wall = {
  parse(value) {
    const m = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?/.exec(String(value || ''));
    return m ? { y: +m[1], mo: +m[2], d: +m[3], h: +(m[4] || 0), mi: +(m[5] || 0) } : null;
  },
  minutes(p) {
    return Date.UTC(p.y, p.mo - 1, p.d, p.h, p.mi) / 60000;
  },
  fromMinutes(total) {
    const d = new Date(total * 60000);
    return { y: d.getUTCFullYear(), mo: d.getUTCMonth() + 1, d: d.getUTCDate(), h: d.getUTCHours(), mi: d.getUTCMinutes() };
  },
  weekday(p) {
    return DAYS[new Date(Date.UTC(p.y, p.mo - 1, p.d)).getUTCDay()];
  },
  stamp(p) {
    return `${p.y}-${pad(p.mo)}-${pad(p.d)}T${pad(p.h)}:${pad(p.mi)}`;
  },
  dateKey(p) {
    return `${p.y}-${pad(p.mo)}-${pad(p.d)}`;
  },
  dateLabel(p) {
    return `${this.weekday(p)} ${p.d} ${MONTHS[p.mo - 1]}`;
  },
  timeLabel(p) {
    return `${pad(p.h)}:${pad(p.mi)}`;
  },
  label(p) {
    return `${this.dateLabel(p)}, ${this.timeLabel(p)}`;
  },
  addMinutes(value, minutes) {
    const p = this.parse(value);
    return p ? this.stamp(this.fromMinutes(this.minutes(p) + minutes)) : '';
  },
  diffMinutes(from, to) {
    const a = this.parse(from);
    const b = this.parse(to);
    return a && b ? this.minutes(b) - this.minutes(a) : 0;
  },
  dayOffset(from, to) {
    const a = this.parse(from);
    const b = this.parse(to);
    if (!a || !b) return 0;
    return Math.round((Date.UTC(b.y, b.mo - 1, b.d) - Date.UTC(a.y, a.mo - 1, a.d)) / 86400000);
  },
  pretty(value) {
    const text = String(value || '');
    const p = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(text) ? this.parse(text) : null;
    return p ? this.label(p) : text;
  }
};

function durationLabel(total) {
  const h = Math.floor(total / 60);
  const m = total % 60;
  if (!h) return `${m} min`;
  return m ? `${h} h ${m} min` : `${h} h`;
}

function durationWords(total) {
  const h = Math.floor(total / 60);
  const m = total % 60;
  const parts = [];
  if (h) parts.push(plural(h, 'hour'));
  if (m) parts.push(plural(m, 'minute'));
  return parts.join(' ') || '0 minutes';
}

function shiftLabel(minutes) {
  if (!minutes) return 'same time';
  const sign = minutes > 0 ? 'later' : 'earlier';
  const abs = Math.abs(minutes);
  const days = Math.floor(abs / 1440);
  const rest = abs % 1440;
  const parts = [];
  if (days) parts.push(plural(days, 'day'));
  if (rest) parts.push(durationLabel(rest));
  return `${parts.join(' ')} ${sign}`;
}

function ago(timestamp) {
  if (!timestamp) return '';
  const s = Math.max(0, Math.round((Date.now() - timestamp) / 1000));
  if (s < 10) return 'just now';
  if (s < 60) return `${s} s ago`;
  const m = Math.round(s / 60);
  return m < 60 ? `${m} min ago` : `${Math.round(m / 60)} h ago`;
}

function clockTime(timestamp) {
  return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

const Keys = {
  memory: '',
  get() {
    if (this.memory) return this.memory;
    try {
      return window.localStorage.getItem(CONFIG.keyStorage) || '';
    } catch (err) {
      return '';
    }
  },
  set(value) {
    this.memory = value;
    try {
      window.localStorage.setItem(CONFIG.keyStorage, value);
    } catch (err) {
      return;
    }
  },
  clear() {
    this.memory = '';
    try {
      window.localStorage.removeItem(CONFIG.keyStorage);
    } catch (err) {
      return;
    }
  }
};

class ApiError extends Error {
  constructor(message, status = 0) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

const Api = {
  async request(path, { method = 'GET', body, timeout = CONFIG.timeoutMs } = {}) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);
    const init = {
      method,
      mode: 'cors',
      credentials: 'omit',
      cache: 'no-store',
      referrerPolicy: 'no-referrer',
      signal: controller.signal
    };
    if (body !== undefined) {
      init.headers = { 'Content-Type': 'text/plain;charset=UTF-8' };
      init.body = JSON.stringify(body);
    }
    try {
      const response = await fetch(BASE + path, init);
      const text = await response.text();
      let data = null;
      if (text) {
        try {
          data = JSON.parse(text);
        } catch (err) {
          data = null;
        }
      }
      if (!response.ok) throw new ApiError(Api.errorText(data, response.status), response.status);
      return data || {};
    } catch (err) {
      if (err instanceof ApiError) throw err;
      if (err && err.name === 'AbortError') throw new ApiError('Salesforce is taking longer than usual to answer. Please try again in a moment.', 0);
      throw new ApiError('Could not reach Salesforce. Check your connection and try again.', 0);
    } finally {
      clearTimeout(timer);
    }
  },
  errorText(data, status) {
    if (data && typeof data.error === 'string' && data.error) return data.error;
    if (Array.isArray(data) && data[0] && data[0].message) return data[0].message;
    if (data && typeof data.message === 'string' && data.message) return data.message;
    return `Salesforce returned an error (HTTP ${status}).`;
  },
  flights() {
    return this.request('/flights');
  },
  verify(apiKey) {
    return this.request('/verify', { method: 'POST', body: { apiKey } });
  },
  sendUpdate(payload) {
    return this.request('/updates', { method: 'POST', body: payload, timeout: CONFIG.sendTimeoutMs });
  },
  progress(reference) {
    return this.request(`/updates/${encodeURIComponent(reference)}`, { timeout: CONFIG.pollTimeoutMs });
  },
  reset(body) {
    return this.request('/reset', { method: 'POST', body });
  }
};

const FlightStore = {
  flights: [],
  loaded: false,
  loadedAt: 0,
  attemptedAt: 0,
  error: null,
  pending: null,
  previous: new Map(),
  listeners: new Set(),
  load(force = false) {
    if (this.pending) return this.pending;
    if (!force && this.loaded && Date.now() - this.loadedAt < 20000) return Promise.resolve(this.flights);
    this.attemptedAt = Date.now();
    this.pending = Api.flights()
      .then(
        data => {
          const list = Array.isArray(data.flights) ? data.flights.filter(f => f && f.id) : [];
          list.sort((a, b) => String(a.departure || '').localeCompare(String(b.departure || '')) || String(a.code || '').localeCompare(String(b.code || '')));
          if (this.loaded) this.previous = new Map(this.flights.map(f => [f.id, num(f.aspirePassengers, 0)]));
          this.flights = list;
          this.loaded = true;
          this.loadedAt = Date.now();
          this.error = null;
          this.emit();
          return list;
        },
        err => {
          this.error = err;
          this.emit();
          throw err;
        }
      )
      .finally(() => {
        this.pending = null;
      });
    return this.pending;
  },
  byId(id) {
    return this.flights.find(f => f.id === id) || null;
  },
  subscribe(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  },
  emit() {
    this.listeners.forEach(fn => {
      try {
        fn();
      } catch (err) {
        console.error(err);
      }
    });
  }
};

const Live = {
  active: false,
  timer: 0,
  start() {
    this.active = true;
    this.schedule();
  },
  stop() {
    this.active = false;
    this.pause();
  },
  pause() {
    clearTimeout(this.timer);
    this.timer = 0;
  },
  schedule() {
    this.pause();
    if (!this.active || document.hidden) return;
    const last = Math.max(FlightStore.loadedAt, FlightStore.attemptedAt);
    const wait = last ? CONFIG.refreshMs - (Date.now() - last) : CONFIG.refreshMs;
    this.timer = setTimeout(() => this.tick(), Math.max(1500, wait));
  },
  tick() {
    this.timer = 0;
    if (!this.active || document.hidden) return;
    FlightStore.load(true).catch(() => {}).finally(() => this.schedule());
  }
};

const isNova = f => f.vistaraNova === true || f.airline === 'Vistara Nova';

function flightState(f, ops = false) {
  const status = lower(f.status);
  const type = lower(f.update && f.update.type);
  if (status === 'cancelled') return STATE.cancelled;
  if (status === 'rescheduled') return type === 'delayed' ? STATE.delayed : STATE.rescheduled;
  if (status === 'delayed') return STATE.delayed;
  if (status === 'scheduled') return STATE.scheduled;
  return ops ? STATE.confirmed : STATE.ontime;
}

const isDisrupted = f => ['cancelled', 'rescheduled', 'delayed'].includes(flightState(f).key);
const operatorText = f => (isNova(f) ? 'Vistara Nova' : f.airline ? `Operated by ${f.airline}` : 'Partner flight');
const stopsText = f => (num(f.stops, 0) > 0 ? plural(num(f.stops, 0), 'stop') : 'Nonstop');
const dateKeyOf = f => String(f.departure || '').slice(0, 10);
const depText = f => f.departureText || Wall.pretty(f.departure);
const cityOf = code => PLACES[code]?.city || code;

function when(text, stamp) {
  const m = /^(.*?),\s*(\d{1,2}:\d{2})\s*$/.exec(String(text || ''));
  if (m) return { date: m[1].trim(), time: m[2] };
  const p = Wall.parse(stamp);
  return p ? { date: Wall.dateLabel(p), time: Wall.timeLabel(p) } : { date: '', time: '--:--' };
}

function reasonPhrase(reason) {
  if (!reason) return '';
  const match = REASONS.find(r => lower(r.value) === lower(reason));
  return match ? match.phrase : `(${reason})`;
}

function updateStatus(value) {
  return UPDATE_STATUS[lower(value)] || { key: 'sent', label: titleCase(value) || 'Update sent' };
}

function careNote(f) {
  if (!f.update) return '';
  const status = lower(f.update.status);
  if (status === 'completed') return 'Travellers rebooked';
  if (status === 'failed') return '';
  return 'Rebooking in progress';
}

function alertMessage(f) {
  const st = flightState(f);
  const reason = f.update && f.update.reason ? ` ${reasonPhrase(f.update.reason)}` : '';
  const status = lower(f.update && f.update.status);
  const care = status === 'completed'
    ? 'Affected Aspire Lifestyles travellers have been rebooked and notified.'
    : f.update
      ? 'Affected travellers are being rebooked automatically.'
      : 'Our team will contact affected travellers.';
  if (st.key === 'cancelled') return `Cancelled${reason}. ${care}`;
  return `${st.label}${reason}. Now departing ${depText(f)}. ${care}`;
}

function travelAlerts(flights) {
  return flights.filter(isDisrupted);
}

function matchesQuery(f, query) {
  const raw = fold(query).trim();
  if (!raw) return true;
  const compact = raw.replace(/[^a-z0-9]/g, '');
  if (compact && fold(f.code).replace(/[^a-z0-9]/g, '').includes(compact)) return true;
  const route = raw.split(/\s{0,3}(?:->|→|>|–|—|-|\/|\bto\b)\s{0,3}/).map(part => part.trim()).filter(Boolean);
  if (route.length === 2) return placeMatch(f.from, f.fromCity, route[0]) && placeMatch(f.to, f.toCity, route[1]);
  const hay = fold([f.code, f.from, f.to, f.fromCity, f.toCity, f.airline, f.departureText, isNova(f) ? 'vistara nova' : 'partner'].join(' '));
  return raw.split(/\s+/).every(token => hay.includes(token));
}

function placeMatch(code, city, token) {
  const t = token.trim();
  return fold(code) === t || fold(city).startsWith(t) || fold(city).includes(t);
}

function pill(state) {
  return `<span class="pill pill--${state.key}"><span class="pill__dot" aria-hidden="true"></span>${esc(state.label)}</span>`;
}

function ustat(status) {
  const s = updateStatus(status);
  return `<span class="ustat ustat--${s.key}"><span class="ustat__dot" aria-hidden="true"></span>${esc(s.label)}</span>`;
}

function airports(flights) {
  const map = new Map();
  flights.forEach(f => {
    if (f.from) map.set(f.from, f.fromCity || cityOf(f.from));
    if (f.to) map.set(f.to, f.toCity || cityOf(f.to));
  });
  if (!map.size) Object.keys(PLACES).filter(code => code !== 'NRT').forEach(code => map.set(code, PLACES[code].city));
  return [...map.entries()].map(([code, city]) => ({ code, city })).sort((a, b) => a.city.localeCompare(b.city));
}

function featuredDestinations(flights) {
  if (!flights.length) {
    return ['MLE', 'DXB', 'CDG', 'SIN', 'FCO', 'CUN'].map(code => ({ code, city: PLACES[code].city, country: PLACES[code].country, blurb: PLACES[code].blurb, count: 0, minPrice: null, nova: false, tag: '', from: '', fromCity: '' }));
  }
  const hub = topKey(countBy(flights, f => f.from));
  const groups = new Map();
  flights.forEach(f => {
    if (!PHOTO[f.to] || f.to === hub) return;
    if (!groups.has(f.to)) groups.set(f.to, []);
    groups.get(f.to).push(f);
  });
  const list = [...groups.entries()].map(([code, items]) => {
    const fromHub = items.some(f => f.from === hub);
    const origin = fromHub ? hub : topKey(countBy(items, f => f.from));
    const routeItems = items.filter(f => f.from === origin);
    const prices = routeItems.map(f => num(f.price, null)).filter(p => p !== null && p > 0);
    const novaItems = routeItems.filter(isNova);
    const tag = novaItems.length ? (novaItems.some(f => !num(f.stops, 0)) ? 'Vistara Nova nonstop' : 'Flown by Vistara Nova') : 'Partner flights';
    const place = PLACES[code] || {};
    return {
      code,
      city: routeItems[0]?.toCity || place.city || code,
      country: place.country || '',
      blurb: place.blurb || '',
      rank: place.rank || 0,
      count: routeItems.length,
      minPrice: prices.length ? Math.min(...prices) : null,
      nova: novaItems.length > 0,
      tag,
      from: origin,
      fromCity: routeItems[0]?.fromCity || cityOf(origin)
    };
  });
  list.sort((a, b) => b.rank - a.rank || Number(b.nova) - Number(a.nova) || b.count - a.count || a.city.localeCompare(b.city));
  return list.slice(0, 6);
}

function toast(message, tone = 'ok') {
  const host = $('[data-toasts]');
  if (!host) return;
  const el = document.createElement('div');
  el.className = `toast${tone === 'error' ? ' toast--error' : ''}`;
  el.innerHTML = `${icon(tone === 'error' ? 'alert' : 'check')}<span>${esc(message)}</span>`;
  host.appendChild(el);
  setTimeout(() => {
    el.classList.add('is-leaving');
    setTimeout(() => el.remove(), 400);
  }, 4600);
}

function announce(message) {
  const el = $('[data-announcer]');
  if (!el) return;
  el.textContent = '';
  setTimeout(() => {
    el.textContent = message;
  }, 80);
}

async function copyText(text, label) {
  try {
    await navigator.clipboard.writeText(text);
    toast(`${label} copied`);
  } catch (err) {
    toast('Copying is not available in this browser.', 'error');
  }
}

const Reveal = {
  observer: null,
  observe(root) {
    if (!root) return;
    const items = $$('.reveal:not(.is-visible)', root);
    if (!items.length) return;
    if (!('IntersectionObserver' in window) || reduceMotion()) {
      items.forEach(el => el.classList.add('is-visible'));
      return;
    }
    if (!this.observer) {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    }
    items.forEach(el => this.observer.observe(el));
  }
};

const Header = {
  el: null,
  toggle: null,
  nav: null,
  init() {
    this.el = $('[data-header]');
    this.toggle = $('[data-nav-toggle]');
    this.nav = $('#main-nav');
    this.toggle.addEventListener('click', () => this.setOpen(!this.el.classList.contains('is-open')));
    this.nav.addEventListener('click', event => {
      if (event.target.closest('a')) this.setOpen(false);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && this.el.classList.contains('is-open')) {
        this.setOpen(false);
        this.toggle.focus();
      }
    });
    document.addEventListener('click', event => {
      if (this.el.classList.contains('is-open') && !this.el.contains(event.target)) this.setOpen(false);
    });
    const onScroll = () => this.el.classList.toggle('is-scrolled', window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  },
  setOpen(open) {
    this.el.classList.toggle('is-open', open);
    this.toggle.setAttribute('aria-expanded', String(open));
    $('.sr-only', this.toggle).textContent = open ? 'Close menu' : 'Menu';
  },
  setTheme(theme) {
    this.el.dataset.theme = theme;
  },
  setActive(key) {
    $$('[data-nav]', this.el).forEach(link => {
      if (key && link.dataset.nav === key) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  },
  setAlerts(count) {
    const badge = $('[data-alert-count]', this.el);
    if (!badge) return;
    badge.hidden = !count;
    badge.innerHTML = count ? `<span class="sr-only">(</span>${count}<span class="sr-only"> active)</span>` : '';
  }
};

const HOME_SECTIONS = Object.freeze({ book: 'book', destinations: 'destinations', alerts: 'alerts', rebooking: 'rebooking' });

function homeHtml() {
  return `<div class="view view--home">
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero__media" aria-hidden="true">${photoImg(PHOTO.hero, { widths: [800, 1200, 1600, 2400], sizes: '100vw', eager: true })}</div>
    <div class="hero__shade" aria-hidden="true"></div>
    <div class="container hero__inner">
      <div class="hero__copy">
        <p class="eyebrow eyebrow--light">Winter 2026 schedule now open</p>
        <h1 class="hero__title" id="hero-title" tabindex="-1">Fly toward <em>brighter</em> horizons.</h1>
        <p class="hero__lede">Nonstop from New York to Dubai, Paris and the Maldives, with partner connections across five continents. Calm cabins, thoughtful dining and a team that looks after you when plans change.</p>
        <ul class="hero__trust">
          <li>${icon('shield')}Automatic rebooking</li>
          <li>${icon('seat')}Generous legroom</li>
          <li>${icon('globe')}Partner flights worldwide</li>
        </ul>
      </div>
      <div data-hero-alert></div>
    </div>
  </section>

  <section class="search-zone" id="book" aria-labelledby="book-title">
    <div class="container">
      <div class="search-card">
        <h2 class="sr-only" id="book-title" tabindex="-1">Find a flight</h2>
        <div class="search-tabs" role="tablist" aria-label="Search">
          <button class="search-tab" type="button" role="tab" id="tab-book" aria-controls="panel-book" aria-selected="true" data-search-tab="book">${icon('plane')}Book a flight</button>
          <button class="search-tab" type="button" role="tab" id="tab-status" aria-controls="panel-status" aria-selected="false" tabindex="-1" data-search-tab="status">${icon('clock')}Flight status</button>
        </div>
        <form class="search-form search-form--book" id="panel-book" role="tabpanel" aria-labelledby="tab-book" data-form="book" novalidate>
          <div class="field field--select field--from">
            <label class="field__label" for="sf-from">From</label>
            <select class="field__control" id="sf-from" name="from"></select>
          </div>
          <button class="swap" type="button" data-swap aria-label="Swap From and To">${icon('swap')}</button>
          <div class="field field--select field--to">
            <label class="field__label" for="sf-to">To</label>
            <select class="field__control" id="sf-to" name="to"></select>
          </div>
          <div class="field field--date">
            <label class="field__label" for="sf-date">Departing</label>
            <input class="field__control" type="date" id="sf-date" name="date">
          </div>
          <div class="field field--pax">
            <label class="field__label" for="sf-pax">Passengers</label>
            <div class="stepper">
              <button class="stepper__btn" type="button" data-pax-step="-1" aria-label="One passenger fewer">&minus;</button>
              <input class="field__control" id="sf-pax" name="pax" type="number" inputmode="numeric" min="1" max="9" value="1">
              <button class="stepper__btn" type="button" data-pax-step="1" aria-label="One passenger more">+</button>
            </div>
          </div>
          <button class="btn btn--accent search-submit" type="submit">${icon('search')}Search flights</button>
        </form>
        <form class="search-form search-form--status" id="panel-status" role="tabpanel" aria-labelledby="tab-status" data-form="status" hidden novalidate>
          <div class="field">
            <label class="field__label" for="sf-q">Flight number, city or route</label>
            <input class="field__control" id="sf-q" name="q" type="search" placeholder="e.g. NV701, Dubai or JFK-DXB" autocomplete="off" spellcheck="false">
          </div>
          <div class="field field--date">
            <label class="field__label" for="sf-qdate">Date (optional)</label>
            <input class="field__control" type="date" id="sf-qdate" name="date">
          </div>
          <button class="btn btn--accent search-submit" type="submit">${icon('clock')}Check status</button>
        </form>
        <div class="search-foot">
          <span class="search-foot__live" data-live-note><span class="live-dot" aria-hidden="true"></span>Live schedule from Salesforce</span>
          <span>Fares are per traveller, one way in Economy.</span>
        </div>
      </div>
    </div>
  </section>

  <section class="section alerts" id="alerts" aria-labelledby="alerts-title">
    <div class="container">
      <div class="section-head">
        <div>
          <p class="eyebrow">Travel alerts</p>
          <h2 class="section-title" id="alerts-title" tabindex="-1">Before you fly</h2>
        </div>
        <a class="link-arrow" href="#/status?st=disrupted">All disrupted flights${icon('arrowRight')}</a>
      </div>
      <div data-alerts>${alertSkeleton()}</div>
    </div>
  </section>

  <section class="section section--tint" id="destinations" aria-labelledby="dest-title">
    <div class="container">
      <div class="section-head">
        <div>
          <p class="eyebrow">Featured destinations</p>
          <h2 class="section-title" id="dest-title" tabindex="-1">Where will this winter take you?</h2>
        </div>
        <p class="section-intro" data-dest-intro>Routes and fares from the live schedule, per traveller one way in Economy.</p>
      </div>
      <div class="dest-grid" data-destinations>${Array.from({ length: 6 }, () => '<div class="dest-card dest-card--skel skel" aria-hidden="true"></div>').join('')}</div>
    </div>
  </section>

  <section class="section" aria-labelledby="why-title">
    <div class="container">
      <div class="section-head section-head--center">
        <p class="eyebrow">Why fly Vistara Nova</p>
        <h2 class="section-title" id="why-title">Thoughtful from check-in to touchdown</h2>
      </div>
      <ul class="why-grid">
        ${WHY.map((item, i) => `<li class="why-card reveal" style="--d:${(i * 0.08).toFixed(2)}s">
          <span class="why-card__icon">${icon(item.icon)}</span>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.text)}</p>
        </li>`).join('')}
      </ul>
    </div>
  </section>

  <section class="rebook-band" id="rebooking" aria-labelledby="rebook-title">
    ${photoImg(PHOTO.airport, { widths: [800, 1400, 2000], sizes: '100vw', cls: 'rebook-band__bg' })}
    <div class="container rebook-band__inner">
      <div class="reveal">
        <p class="eyebrow eyebrow--light">Disruption care</p>
        <h2 class="rebook-band__title" id="rebook-title" tabindex="-1">When plans change, you are already rebooked.</h2>
        <p class="rebook-band__text">The moment our operations team cancels or moves a flight, the update goes straight to partners like Aspire Lifestyles through Salesforce. Their agent finds the best next flight for every affected traveller, keeps families together and sends the new details to their phone, often before they have heard the news.</p>
        <div class="btn-row">
          <a class="btn btn--accent" href="#/ops">${icon('lock')}Operations Control</a>
          <a class="btn btn--ghost-light" href="#/status">Check flight status</a>
        </div>
      </div>
      <figure class="mini-tl reveal" aria-label="Example of an automatic rebooking">
        <div class="mini-tl__head"><span>Live rebooking, example</span><span class="mini-tl__ref">VN261220-DEMO</span></div>
        <ol class="mini-tl__list">
          ${[
            ['send', 'Update sent', 'Operations cancels or reschedules a flight', '0 s'],
            ['bolt', 'Received by Salesforce', 'A reference is issued instantly', '1 s'],
            ['users', 'Customers identified', 'Every Aspire Lifestyles traveller on board', '3 s'],
            ['bell', 'Notifications sent', 'By app or email, before the queues form', '6 s'],
            ['check', 'Rebooked', 'Best next flight, families seated together', '41 s']
          ].map(([ic, title, text, time]) => `<li class="mini-tl__item"><span class="mini-tl__dot">${icon(ic)}</span><span><span class="mini-tl__title">${title}</span><span class="mini-tl__text">${text}</span></span><span class="mini-tl__time">${time}</span></li>`).join('')}
        </ol>
        <div class="mini-tl__done">${icon('sparkle')}Six customers protected in 41 seconds</div>
      </figure>
    </div>
  </section>

  <section class="partners" aria-labelledby="partners-title">
    <div class="container partners__inner">
      <p class="eyebrow">Partners and alliance</p>
      <h2 class="partners__title" id="partners-title">A proud member of the Aurora Sky Alliance</h2>
      <ul class="partner-strip" aria-label="Travel partners">
        ${PARTNERS.map(p => `<li class="partner partner--${p.style}">${esc(p.name)}${p.small ? ` <small>${esc(p.small)}</small>` : ''}</li>`).join('')}
      </ul>
      <p class="partners__note">Partner flights on the status board are operated by our codeshare partners and marked “Operated by”.</p>
    </div>
  </section>

  <section class="section app-promo" aria-labelledby="app-title">
    <div class="container app-promo__inner">
      <div class="reveal">
        <p class="eyebrow">The Vistara Nova app</p>
        <h2 class="section-title" id="app-title">Your whole trip, in your pocket.</h2>
        <p class="app-promo__text">Mobile boarding passes, live gate changes and instant rebooking alerts, with your Nova Club miles always in view.</p>
        <ul class="check-list">
          <li>${icon('check')}Boarding pass on your lock screen</li>
          <li>${icon('check')}Rebooking alerts the moment plans change</li>
          <li>${icon('check')}Chat with our team at any hour</li>
        </ul>
        <p class="app-promo__soon">${icon('phone')}Coming soon to iPhone and Android</p>
      </div>
      <div class="phone-stage reveal" aria-hidden="true">
        <div class="phone">
          <div class="phone__screen">
            <div class="phone__notch"></div>
            <div class="push"><img src="assets/logo.svg" alt=""><div><strong>You are rebooked on NV701</strong><span>Sun 20 Dec, 13:30 · seats 27A to 27D together</span></div></div>
            <div class="phone__bar"><span>9:41</span><span>5G</span></div>
            <div class="phone__app">
              <p class="phone__hello">Good evening</p>
              <p class="phone__title">Your next trip</p>
              <div class="pass">
                <div class="pass__top"><span>Boarding pass</span><img src="assets/logo.svg" alt=""></div>
                <div class="pass__route">
                  <div><div class="pass__code">JFK</div><div class="pass__city">New York</div></div>
                  <div class="pass__plane">${icon('plane')}</div>
                  <div><div class="pass__code">DXB</div><div class="pass__city">Dubai</div></div>
                </div>
                <div class="pass__grid">
                  <div><span>Flight</span><strong>NV701</strong></div>
                  <div><span>Seat</span><strong>27A</strong></div>
                  <div><span>Gate</span><strong>B32</strong></div>
                </div>
                <div class="pass__bars"></div>
              </div>
              <div class="phone__list">
                <div class="phone__row">${icon('bell')}Gate opens at 12:40</div>
                <div class="phone__row">${icon('shield')}Rebooking protection is on</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>`;
}

function alertSkeleton() {
  return `<div class="alert-list" aria-hidden="true">${Array.from({ length: 2 }, () => '<div class="skel" style="height:150px"></div>').join('')}</div>`;
}

function alertCard(f) {
  const st = flightState(f);
  const dep = when(f.departureText, f.departure);
  const params = new URLSearchParams({ q: f.code, date: dateKeyOf(f) });
  return `<article class="alert-card alert-card--${st.key} reveal">
    <span class="alert-card__icon">${icon(st.key === 'cancelled' ? 'cancel' : 'clock')}</span>
    <div>
      <p class="alert-card__meta">${pill(st)}<span>${esc(dep.date)}</span></p>
      <h3 class="alert-card__title">${esc(f.code)} ${esc(f.fromCity)} to ${esc(f.toCity)}</h3>
      <p class="alert-card__text">${esc(alertMessage(f))}</p>
      <a class="link-arrow alert-card__link" href="#/status?${params}">Flight details${icon('arrowRight')}</a>
    </div>
  </article>`;
}

function destCard(d, i) {
  const big = i === 0;
  const params = new URLSearchParams();
  if (d.from) params.set('from', d.from);
  params.set('to', d.code);
  const meta = [];
  if (d.count) meta.push(`<span>${esc(plural(d.count, 'flight'))}${d.fromCity ? ` from ${esc(d.fromCity)}` : ''}</span>`);
  if (d.minPrice !== null) meta.push(`<span>from <span class="dest-card__price">${esc(money(d.minPrice))}</span></span>`);
  if (!meta.length) meta.push('<span>View flights</span>');
  const label = [`${d.city}, ${d.country}.`, d.count ? `${plural(d.count, 'flight')}${d.fromCity ? ` from ${d.fromCity}` : ''}` : '', d.minPrice !== null ? `from ${money(d.minPrice)}.` : '', 'View flights'].filter(Boolean).join(' ');
  return `<a class="dest-card reveal" style="--d:${(i * 0.06).toFixed(2)}s" href="#/status?${params}" aria-label="${esc(label)}">
    ${photoImg(PHOTO[d.code], { widths: big ? [600, 900, 1300] : [400, 600, 900], sizes: big ? '(max-width: 719px) 100vw, 66vw' : '(max-width: 719px) 100vw, (max-width: 959px) 50vw, 33vw', cls: 'dest-card__img' })}
    <span class="dest-card__shade" aria-hidden="true"></span>
    <span class="dest-card__top">${d.tag ? `<span class="tag">${icon(d.nova ? 'sparkle' : 'globe')}${esc(d.tag)}</span>` : ''}</span>
    <span class="dest-card__body">
      <span class="dest-card__country">${esc(d.country)}</span>
      <span class="dest-card__city">${esc(d.city)}</span>
      ${big && d.blurb ? `<span class="dest-card__blurb">${esc(d.blurb)}</span>` : ''}
      <span class="dest-card__meta">${meta.join('')}</span>
    </span>
    <span class="dest-card__go" aria-hidden="true">${icon('arrowRight')}</span>
  </a>`;
}

const HomeView = {
  title: 'Vistara Nova | Fly toward brighter horizons',
  theme: 'overlay',
  root: null,
  unsub: null,
  navKey(ctx) {
    return ['book', 'destinations', 'alerts'].includes(ctx.seg) ? ctx.seg : '';
  },
  render() {
    return homeHtml();
  },
  mount(ctx) {
    this.root = $('.view--home');
    this.bind();
    this.unsub = FlightStore.subscribe(() => this.fill());
    this.fill();
    FlightStore.load().catch(() => {});
    Reveal.observe(this.root);
    this.update(ctx, true);
  },
  update(ctx, initial = false) {
    Header.setActive(this.navKey(ctx));
    const id = HOME_SECTIONS[ctx.seg];
    if (!id) {
      if (!initial) window.scrollTo({ top: 0, behavior: scrollBehavior() });
      if (!initial) $('#hero-title', this.root)?.focus({ preventScroll: true });
      return;
    }
    const target = document.getElementById(id);
    if (!target) return;
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: initial ? 'auto' : scrollBehavior(), block: 'start' });
      const focusEl = id === 'book' ? $('#sf-from', this.root) : $('[tabindex="-1"]', target);
      focusEl?.focus({ preventScroll: true });
    });
  },
  focusTarget(ctx) {
    return HOME_SECTIONS[ctx.seg] ? null : $('#hero-title', this.root);
  },
  unmount() {
    if (this.unsub) this.unsub();
    this.unsub = null;
    this.root = null;
  },
  bind() {
    const root = this.root;
    root.addEventListener('click', event => {
      const tab = event.target.closest('[data-search-tab]');
      if (tab) this.selectTab(tab.dataset.searchTab, true);
      if (event.target.closest('[data-swap]')) this.swap();
      const step = event.target.closest('[data-pax-step]');
      if (step) this.stepPax(Number(step.dataset.paxStep));
      if (event.target.closest('[data-retry]')) FlightStore.load(true).catch(() => {});
    });
    $('.search-tabs', root).addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const current = $('[aria-selected="true"]', root).dataset.searchTab;
      this.selectTab(current === 'book' ? 'status' : 'book', true);
    });
    $('#sf-from', root).addEventListener('change', () => this.syncDestinations());
    $('#sf-pax', root).addEventListener('change', () => this.stepPax(0));
    $('[data-form="book"]', root).addEventListener('submit', event => {
      event.preventDefault();
      const params = new URLSearchParams();
      const from = $('#sf-from', root).value;
      const to = $('#sf-to', root).value;
      const date = $('#sf-date', root).value;
      const pax = Number($('#sf-pax', root).value) || 1;
      if (from) params.set('from', from);
      if (to) params.set('to', to);
      if (/^\d{4}-\d{2}-\d{2}$/.test(date)) params.set('date', date);
      if (pax > 1) params.set('pax', String(pax));
      location.hash = `#/status${params.toString() ? `?${params}` : ''}`;
    });
    $('[data-form="status"]', root).addEventListener('submit', event => {
      event.preventDefault();
      const params = new URLSearchParams();
      const q = $('#sf-q', root).value.trim();
      const date = $('#sf-qdate', root).value;
      if (q) params.set('q', q);
      if (/^\d{4}-\d{2}-\d{2}$/.test(date)) params.set('date', date);
      location.hash = `#/status${params.toString() ? `?${params}` : ''}`;
    });
  },
  selectTab(name, focus) {
    const root = this.root;
    $$('[data-search-tab]', root).forEach(tab => {
      const on = tab.dataset.searchTab === name;
      tab.setAttribute('aria-selected', String(on));
      tab.tabIndex = on ? 0 : -1;
      if (on && focus) tab.focus();
    });
    $('#panel-book', root).hidden = name !== 'book';
    $('#panel-status', root).hidden = name !== 'status';
  },
  swap() {
    const from = $('#sf-from', this.root);
    const to = $('#sf-to', this.root);
    const a = from.value;
    const b = to.value;
    from.value = b;
    this.syncDestinations();
    if ([...to.options].some(o => o.value === a)) to.value = a;
  },
  stepPax(delta) {
    const input = $('#sf-pax', this.root);
    const value = Math.min(9, Math.max(1, (Math.round(Number(input.value)) || 1) + delta));
    input.value = String(value);
    $('[data-pax-step="-1"]', this.root).disabled = value <= 1;
    $('[data-pax-step="1"]', this.root).disabled = value >= 9;
  },
  syncDestinations() {
    const from = $('#sf-from', this.root);
    const to = $('#sf-to', this.root);
    const flights = FlightStore.flights;
    const all = airports(flights);
    const reachable = from.value && flights.length ? new Set(flights.filter(f => f.from === from.value).map(f => f.to)) : null;
    const list = reachable && reachable.size ? all.filter(a => reachable.has(a.code)) : all.filter(a => a.code !== from.value);
    const keep = to.value;
    to.innerHTML = `<option value="">Anywhere</option>${list.map(a => `<option value="${esc(a.code)}">${esc(a.city)} (${esc(a.code)})</option>`).join('')}`;
    if (list.some(a => a.code === keep)) to.value = keep;
  },
  fillAirports() {
    const from = $('#sf-from', this.root);
    if (!from) return;
    const all = airports(FlightStore.flights);
    const signature = all.map(a => a.code).join(',');
    if (from.dataset.sig === signature) return;
    from.dataset.sig = signature;
    const keep = from.value || (FlightStore.flights.length ? topKey(countBy(FlightStore.flights, f => f.from)) : 'JFK');
    from.innerHTML = `<option value="">Anywhere</option>${all.map(a => `<option value="${esc(a.code)}">${esc(a.city)} (${esc(a.code)})</option>`).join('')}`;
    if (all.some(a => a.code === keep)) from.value = keep;
    this.syncDestinations();
    const dates = FlightStore.flights.map(dateKeyOf).filter(Boolean).sort();
    if (dates.length) {
      ['#sf-date', '#sf-qdate'].forEach(sel => {
        const input = $(sel, this.root);
        input.min = dates[0];
        input.max = dates[dates.length - 1];
      });
    }
    this.stepPax(0);
  },
  fill() {
    if (!this.root) return;
    this.fillAirports();
    this.fillAlerts();
    this.fillDestinations();
    this.fillHeroAlert();
    this.fillLiveNote();
  },
  fillLiveNote() {
    const note = $('[data-live-note]', this.root);
    if (!note) return;
    if (FlightStore.loaded) patch(note, `<span class="live-dot" aria-hidden="true"></span>Live schedule from Salesforce · ${esc(plural(FlightStore.flights.length, 'flight'))}`);
    else if (FlightStore.error) patch(note, '<span class="live-dot live-dot--warn live-dot--off" aria-hidden="true"></span>Live schedule unavailable right now');
  },
  fillAlerts() {
    const host = $('[data-alerts]', this.root);
    if (!host) return;
    if (!FlightStore.loaded) {
      if (FlightStore.error) {
        patch(host, `<div class="notice">${icon('alert')}<span>Live travel alerts are unavailable right now. ${esc(FlightStore.error.message)}</span><button class="btn btn--ghost btn--sm" type="button" data-retry>${icon('refresh')}Try again</button></div>`);
      }
      return;
    }
    const alerts = travelAlerts(FlightStore.flights);
    if (!alerts.length) {
      patch(host, `<div class="all-clear"><span class="all-clear__icon">${icon('check')}</span><div><h3>All flights are operating normally</h3><p>No cancellations or schedule changes across Vistara Nova and partner flights. Checked at ${esc(clockTime(FlightStore.loadedAt))}.</p></div></div>`);
      return;
    }
    const shown = alerts.slice(0, 6);
    const more = alerts.length > shown.length ? `<p class="search-foot"><a class="link-arrow" href="#/status?st=disrupted">${esc(plural(alerts.length - shown.length, 'more alert'))}${icon('arrowRight')}</a></p>` : '';
    if (patch(host, `<div class="alert-list">${shown.map(alertCard).join('')}</div>${more}`)) Reveal.observe(host);
  },
  fillDestinations() {
    const host = $('[data-destinations]', this.root);
    if (!host) return;
    if (!FlightStore.loaded && !FlightStore.error) return;
    const list = featuredDestinations(FlightStore.loaded ? FlightStore.flights : []);
    const hub = list.find(d => d.fromCity)?.fromCity;
    const intro = $('[data-dest-intro]', this.root);
    if (intro && hub) intro.textContent = `Routes and fares from the live schedule, mostly from ${hub}. Fares are per traveller, one way in Economy.`;
    if (patch(host, list.map(destCard).join(''))) Reveal.observe(host);
  },
  fillHeroAlert() {
    const host = $('[data-hero-alert]', this.root);
    if (!host) return;
    const alerts = FlightStore.loaded ? travelAlerts(FlightStore.flights) : [];
    if (!alerts.length) {
      patch(host, '');
      return;
    }
    const f = alerts[0];
    const st = flightState(f);
    const dep = when(f.departureText, f.departure);
    const more = alerts.length > 1 ? ` and ${plural(alerts.length - 1, 'other flight')}` : '';
    patch(host, `<a class="hero-alert" href="#/alerts"><span class="hero-alert__icon">${icon('alert')}</span><span><strong>Travel alert:</strong> ${esc(f.code)} ${esc(f.fromCity)} to ${esc(f.toCity)} on ${esc(dep.date)} is ${esc(st.label.toLowerCase())}${esc(more)}.</span><span class="hero-alert__go">Details${icon('arrowRight')}</span></a>`);
  }
};

function statusHtml() {
  return `<div class="view view--status">
  <section class="page-hero" aria-labelledby="status-title">
    <svg class="page-hero__art" viewBox="0 0 600 260" aria-hidden="true" focusable="false"><path d="M20 230C160 40 420 20 580 120"/><path d="M60 250C220 120 380 110 560 220"/><circle cx="20" cy="230" r="4"/><circle cx="580" cy="120" r="4"/><circle cx="560" cy="220" r="4"/></svg>
    <div class="container">
      <nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a><span aria-hidden="true">/</span><span aria-current="page">Flight status</span></nav>
      <h1 class="page-hero__title" id="status-title" tabindex="-1">Flight status</h1>
      <p class="page-hero__lede">Live departures for Vistara Nova and partner flights, straight from Salesforce. Times are local to each airport.</p>
      <form class="status-search" role="search" data-status-search>
        ${icon('search')}
        <label class="sr-only" for="st-q">Search by flight number, city or route</label>
        <input id="st-q" type="search" name="q" placeholder="${window.matchMedia('(max-width: 600px)').matches ? 'Flight, city or route' : 'Flight number, city or route, e.g. NV701, Dubai, JFK-DXB'}" autocomplete="off" spellcheck="false">
        <button class="btn btn--accent" type="submit">Search</button>
      </form>
      <div class="live-meta" data-live-meta></div>
    </div>
  </section>
  <section class="status-body" aria-label="Flights">
    <div class="container">
      <div class="status-tools">
        <div class="date-strip" role="group" aria-label="Departure date" data-dates></div>
        <div class="filter-row">
          <div class="filter-group">
            <div class="seg" role="group" aria-label="Airline" data-seg="op">
              <button class="seg__btn" type="button" data-value="all" aria-pressed="true">All flights</button>
              <button class="seg__btn" type="button" data-value="nova" aria-pressed="false">Vistara Nova</button>
              <button class="seg__btn" type="button" data-value="partner" aria-pressed="false">Partner flights</button>
            </div>
            <div class="seg" role="group" aria-label="Status" data-seg="st">
              <button class="seg__btn" type="button" data-value="all" aria-pressed="true">Any status</button>
              <button class="seg__btn" type="button" data-value="ontime" aria-pressed="false">On time</button>
              <button class="seg__btn" type="button" data-value="disrupted" aria-pressed="false">Disrupted</button>
            </div>
          </div>
          <div class="active-filters" data-active-filters></div>
        </div>
      </div>
      <div class="board-head" data-board-head></div>
      <div class="board" data-board aria-busy="true"></div>
    </div>
  </section>
</div>`;
}

function flightCard(f, i, pax) {
  const st = flightState(f);
  const dep = when(f.departureText, f.departure);
  const arr = when(f.arrivalText, f.arrival);
  const offset = Wall.dayOffset(f.departure, f.arrival);
  const reason = f.update && f.update.reason && st.key !== 'ontime' ? f.update.reason : '';
  const note = [reason, st.key !== 'ontime' ? careNote(f) : ''].filter(Boolean).join(' · ');
  const seats = num(f.seatsLeft, null);
  let seatsText = '';
  let seatsClass = '';
  if (seats !== null) {
    if (seats <= 0) {
      seatsText = 'Sold out';
      seatsClass = ' fcard__seats--short';
    } else if (pax > 1 && seats < pax) {
      seatsText = `Only ${seats} left for ${pax}`;
      seatsClass = ' fcard__seats--short';
    } else {
      seatsText = `${plural(seats, 'seat')} left`;
      seatsClass = seats <= 4 ? ' fcard__seats--low' : '';
    }
  }
  const fare = st.key === 'cancelled'
    ? '<span class="fcard__fare-label">Not available</span>'
    : `<span class="fcard__fare-label">${esc(f.cabin || 'Economy')} from</span><span class="fcard__price">${esc(money(f.price) || '--')}</span>${seatsText ? `<span class="fcard__seats${seatsClass}">${esc(seatsText)}</span>` : ''}`;
  const dayNote = offset ? `<sup><span aria-hidden="true">${offset > 0 ? '+' : ''}${offset}</span><span class="sr-only">, ${offset > 0 ? `${plural(offset, 'day')} later` : `${plural(-offset, 'day')} earlier`}</span></sup>` : '';
  return `<li class="fcard fcard--${st.key}" style="--i:${Math.min(i, 14)}">
    <div class="fcard__id">
      <span class="fcard__code">${esc(f.code)}</span>
      ${isNova(f) ? '<span class="fcard__op fcard__op--nova"><img src="assets/logo.svg" alt="" width="18" height="18">Vistara Nova</span>' : `<span class="fcard__op">${esc(operatorText(f))}</span>`}
    </div>
    <div class="fcard__route">
      <div class="fcard__end"><span class="fcard__time">${esc(dep.time)}</span><span class="fcard__place"><b>${esc(f.from)}</b>${esc(f.fromCity || '')}</span><span class="fcard__date">${esc(dep.date)}</span></div>
      <div class="fcard__path"><span>${esc(f.duration || '')}</span><span class="fcard__line">${icon('plane')}</span><span class="${num(f.stops, 0) ? '' : 'fcard__stops--direct'}">${esc(stopsText(f))}</span></div>
      <div class="fcard__end fcard__end--arr"><span class="fcard__time">${esc(arr.time)}${dayNote}</span><span class="fcard__place"><b>${esc(f.to)}</b>${esc(f.toCity || '')}</span><span class="fcard__date">${esc(arr.date)}</span></div>
    </div>
    <div class="fcard__status">${pill(st)}${note ? `<span class="fcard__note">${esc(note)}</span>` : ''}</div>
    <div class="fcard__fare">${fare}</div>
  </li>`;
}

const StatusView = {
  title: 'Flight status | Vistara Nova',
  theme: 'overlay',
  root: null,
  unsub: null,
  clock: 0,
  typing: 0,
  f: null,
  navKey() {
    return 'status';
  },
  render() {
    return statusHtml();
  },
  mount(ctx) {
    this.root = $('.view--status');
    this.f = this.readParams(ctx.params);
    this.bind();
    this.syncControls();
    this.unsub = FlightStore.subscribe(() => this.renderAll());
    this.renderAll(true);
    FlightStore.load().catch(() => {});
    Live.start();
    this.clock = setInterval(() => this.renderLive(), 15000);
  },
  update(ctx) {
    this.f = this.readParams(ctx.params);
    this.syncControls();
    this.renderAll(true);
    window.scrollTo({ top: 0, behavior: scrollBehavior() });
  },
  focusTarget() {
    return $('#status-title', this.root);
  },
  unmount() {
    Live.stop();
    clearInterval(this.clock);
    clearTimeout(this.typing);
    if (this.unsub) this.unsub();
    this.unsub = null;
    this.root = null;
  },
  readParams(params) {
    const date = params.get('date') || '';
    const pax = Math.round(Number(params.get('pax')));
    return {
      q: (params.get('q') || '').slice(0, 80),
      from: (params.get('from') || '').toUpperCase().slice(0, 4),
      to: (params.get('to') || '').toUpperCase().slice(0, 4),
      date: /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : '',
      pax: pax >= 1 && pax <= 9 ? pax : 0,
      op: ['nova', 'partner'].includes(params.get('op')) ? params.get('op') : 'all',
      st: ['ontime', 'disrupted'].includes(params.get('st')) ? params.get('st') : 'all'
    };
  },
  writeParams() {
    const f = this.f;
    const params = new URLSearchParams();
    if (f.q) params.set('q', f.q);
    if (f.from) params.set('from', f.from);
    if (f.to) params.set('to', f.to);
    if (f.date) params.set('date', f.date);
    if (f.pax) params.set('pax', String(f.pax));
    if (f.op !== 'all') params.set('op', f.op);
    if (f.st !== 'all') params.set('st', f.st);
    const query = params.toString();
    history.replaceState(null, '', `#/status${query ? `?${query}` : ''}`);
  },
  bind() {
    const root = this.root;
    const input = $('#st-q', root);
    $('[data-status-search]', root).addEventListener('submit', event => {
      event.preventDefault();
      clearTimeout(this.typing);
      this.setFilter('q', input.value.trim());
    });
    input.addEventListener('input', () => {
      clearTimeout(this.typing);
      this.typing = setTimeout(() => this.setFilter('q', input.value.trim()), 220);
    });
    root.addEventListener('click', event => {
      const seg = event.target.closest('[data-seg] [data-value]');
      if (seg) this.setFilter(seg.closest('[data-seg]').dataset.seg, seg.dataset.value);
      const chip = event.target.closest('[data-date]');
      if (chip) this.setFilter('date', chip.dataset.date);
      const remove = event.target.closest('[data-clear]');
      if (remove) this.clearFilter(remove.dataset.clear);
      if (event.target.closest('[data-refresh]')) FlightStore.load(true).catch(() => {});
    });
  },
  setFilter(key, value) {
    if (this.f[key] === value) return;
    this.f[key] = value;
    this.writeParams();
    this.syncControls();
    this.renderBoard();
  },
  clearFilter(key) {
    if (key === 'all') this.f = { q: '', from: '', to: '', date: '', pax: 0, op: 'all', st: 'all' };
    else if (key === 'route') {
      this.f.from = '';
      this.f.to = '';
    } else this.f[key] = key === 'pax' ? 0 : key === 'op' || key === 'st' ? 'all' : '';
    this.writeParams();
    this.syncControls();
    this.renderBoard();
  },
  syncControls() {
    const root = this.root;
    const input = $('#st-q', root);
    if (document.activeElement !== input) input.value = this.f.q;
    $$('[data-seg]', root).forEach(group => {
      const value = this.f[group.dataset.seg];
      $$('[data-value]', group).forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.value === value)));
    });
  },
  renderAll(scrollDate = false) {
    if (!this.root) return;
    this.renderLive();
    this.renderBoard(scrollDate);
  },
  renderLive() {
    const host = $('[data-live-meta]', this.root);
    if (!host) return;
    let html;
    if (FlightStore.error && !FlightStore.loaded) {
      html = `<span class="live-dot live-dot--warn live-dot--off" aria-hidden="true"></span><span>Live flights are unavailable right now.</span><button class="btn-text" type="button" data-refresh>${icon('refresh')}Try again</button>`;
    } else if (!FlightStore.loaded) {
      html = '<span class="live-dot" aria-hidden="true"></span><span>Connecting to Salesforce…</span>';
    } else if (FlightStore.error) {
      html = `<span class="live-dot live-dot--warn" aria-hidden="true"></span><span>Could not refresh. Showing data from ${esc(clockTime(FlightStore.loadedAt))}.</span><button class="btn-text" type="button" data-refresh>${icon('refresh')}Try again</button>`;
    } else {
      html = `<span class="live-dot" aria-hidden="true"></span><span>Live · updated ${esc(ago(FlightStore.loadedAt))} · refreshes every minute</span><button class="btn-text" type="button" data-refresh>${icon('refresh')}Refresh</button>`;
    }
    patch(host, html);
  },
  baseList() {
    const f = this.f;
    return FlightStore.flights.filter(x => (!f.from || x.from === f.from)
      && (!f.to || x.to === f.to)
      && (f.op === 'all' || (f.op === 'nova' ? isNova(x) : !isNova(x)))
      && (f.st === 'all' || (f.st === 'disrupted' ? isDisrupted(x) : !isDisrupted(x)))
      && matchesQuery(x, f.q));
  },
  renderBoard(scrollDate = false) {
    const root = this.root;
    if (!root) return;
    const board = $('[data-board]', root);
    const head = $('[data-board-head]', root);
    this.renderActiveFilters();
    if (!FlightStore.loaded) {
      this.renderDates([], scrollDate);
      if (FlightStore.error) {
        patch(head, '');
        patch(board, `<div class="empty"><span class="empty__icon">${icon('alert')}</span><h3>Live flights are unavailable</h3><p>${esc(FlightStore.error.message)}</p><div class="empty__actions"><button class="btn btn--primary" type="button" data-refresh>${icon('refresh')}Try again</button></div></div>`);
        board.setAttribute('aria-busy', 'false');
      } else {
        patch(board, `<ol class="board-list" aria-hidden="true">${Array.from({ length: 5 }, () => '<li class="fcard fcard--skel skel"></li>').join('')}</ol>`);
      }
      return;
    }
    const base = this.baseList();
    this.renderDates(base, scrollDate);
    const list = this.f.date ? base.filter(x => dateKeyOf(x) === this.f.date) : base;
    const context = [];
    if (this.f.from || this.f.to) context.push(`${this.f.from ? cityOf(this.f.from) : 'Anywhere'} to ${this.f.to ? cityOf(this.f.to) : 'anywhere'}`);
    if (this.f.date) {
      const p = Wall.parse(this.f.date);
      if (p) context.push(Wall.dateLabel(p));
    }
    if (this.f.pax) context.push(plural(this.f.pax, 'passenger'));
    patch(head, `<p class="board-head__count"><strong>${list.length}</strong> ${list.length === 1 ? 'flight' : 'flights'}${context.length ? ` · ${esc(context.join(' · '))}` : ''}</p><p class="board-legend">On time means confirmed in Salesforce. Disrupted flights are rebooked automatically.</p>`);
    board.setAttribute('aria-busy', 'false');
    if (!list.length) {
      patch(board, this.emptyHtml(base));
      return;
    }
    const groups = new Map();
    list.forEach(x => {
      const key = dateKeyOf(x);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(x);
    });
    let index = 0;
    const html = [...groups.entries()].map(([key, items]) => {
      const p = Wall.parse(key);
      const label = `${when(items[0].departureText, items[0].departure).date}${p ? ` ${p.y}` : ''}`;
      return `<section class="board-group" aria-label="${esc(label)}"><h2 class="board-group__title">${esc(label)} · ${esc(plural(items.length, 'flight'))}</h2><ol class="board-list">${items.map(x => flightCard(x, index++, this.f.pax)).join('')}</ol></section>`;
    }).join('');
    patch(board, html);
  },
  emptyHtml(base) {
    const actions = [];
    let text = 'Try a different flight number, city or route, or clear the filters.';
    if (this.f.date && base.length) {
      const target = this.f.date;
      const dates = [...new Set(base.map(dateKeyOf))].sort((a, b) => Math.abs(Wall.diffMinutes(target, a)) - Math.abs(Wall.diffMinutes(target, b))).slice(0, 3).sort();
      text = 'There are no flights on that date for this search. These nearby dates have flights:';
      dates.forEach(d => {
        const p = Wall.parse(d);
        actions.push(`<button class="btn btn--ghost btn--sm" type="button" data-date="${esc(d)}">${esc(p ? Wall.dateLabel(p) : d)}</button>`);
      });
    }
    actions.push(`<button class="btn btn--primary btn--sm" type="button" data-clear="all">Clear all filters</button>`);
    return `<div class="empty"><span class="empty__icon">${icon('search')}</span><h3>No flights match</h3><p>${esc(text)}</p><div class="empty__actions">${actions.join('')}</div></div>`;
  },
  renderDates(base, scrollDate) {
    const host = $('[data-dates]', this.root);
    if (!host) return;
    if (!FlightStore.loaded) {
      patch(host, Array.from({ length: 8 }, () => '<span class="date-chip skel" aria-hidden="true"></span>').join(''));
      return;
    }
    const counts = new Map();
    const labels = new Map();
    base.forEach(x => {
      const key = dateKeyOf(x);
      counts.set(key, (counts.get(key) || 0) + 1);
      if (!labels.has(key)) labels.set(key, when(x.departureText, x.departure).date);
    });
    if (this.f.date && !counts.has(this.f.date)) counts.set(this.f.date, 0);
    const keys = [...counts.keys()].sort();
    let lastYear = keys.length ? keys[0].slice(0, 4) : '';
    const chips = [`<button class="date-chip date-chip--all" type="button" data-date="" aria-pressed="${!this.f.date}"><span class="date-chip__dow">All</span><span class="date-chip__day">dates</span><span class="date-chip__n">${base.length}</span></button>`];
    keys.forEach(key => {
      const year = key.slice(0, 4);
      if (year !== lastYear) {
        chips.push(`<span class="date-year" aria-hidden="true">${esc(year)}</span>`);
        lastYear = year;
      }
      const p = Wall.parse(key);
      const label = labels.get(key) || (p ? Wall.dateLabel(p) : key);
      const [dow, ...rest] = label.split(' ');
      const n = counts.get(key);
      chips.push(`<button class="date-chip" type="button" data-date="${esc(key)}" aria-pressed="${this.f.date === key}" aria-label="${esc(`${label} ${year}, ${plural(n, 'flight')}`)}"><span class="date-chip__dow">${esc(dow)}</span><span class="date-chip__day">${esc(rest.join(' '))}</span><span class="date-chip__n">${n}</span></button>`);
    });
    const scrollLeft = host.scrollLeft;
    const changed = patch(host, chips.join(''));
    if (changed) host.scrollLeft = scrollLeft;
    if (scrollDate && this.f.date) {
      const active = $(`[data-date="${this.f.date}"]`, host);
      if (active) host.scrollLeft = Math.max(0, active.offsetLeft - host.clientWidth / 2 + active.clientWidth / 2);
    }
  },
  renderActiveFilters() {
    const host = $('[data-active-filters]', this.root);
    if (!host) return;
    const f = this.f;
    const chips = [];
    if (f.from || f.to) chips.push(['route', `${f.from ? cityOf(f.from) : 'Anywhere'} to ${f.to ? cityOf(f.to) : 'anywhere'}`]);
    if (f.q) chips.push(['q', `“${f.q}”`]);
    if (f.pax) chips.push(['pax', plural(f.pax, 'passenger')]);
    const html = chips.map(([key, label]) => `<button class="fchip" type="button" data-clear="${key}" aria-label="Remove filter: ${esc(label)}">${esc(label)}${icon('close')}</button>`).join('')
      + (chips.length > 1 ? '<button class="btn-text" type="button" data-clear="all">Clear all</button>' : '');
    patch(host, html);
  }
};

const Ops = {
  key: '',
  filter: 'aspire',
  query: '',
  selectedId: '',
  pending: new Map(),
  progress: new Map(),
  marks: new Map(),
  announced: new Map(),
  wizard: null,
  resetState: null
};

function effectiveUpdate(f) {
  if (!f) return null;
  if (f.update && f.update.reference) return f.update;
  return Ops.pending.get(f.id) || f.update || null;
}

function isTerminal(status) {
  return ['completed', 'failed', 'reset'].includes(lower(status));
}

const Tracker = {
  ref: '',
  gen: 0,
  timer: 0,
  inflight: false,
  done: false,
  startedAt: 0,
  failures: 0,
  onUpdate: null,
  onError: null,
  onLimit: null,
  start(ref) {
    if (this.ref === ref && !this.done) {
      this.resume();
      return;
    }
    this.stop();
    this.ref = ref;
    this.startedAt = Date.now();
    this.tick();
  },
  stop() {
    this.gen += 1;
    clearTimeout(this.timer);
    this.timer = 0;
    this.ref = '';
    this.inflight = false;
    this.done = false;
    this.failures = 0;
  },
  pause() {
    clearTimeout(this.timer);
    this.timer = 0;
  },
  resume() {
    if (this.ref && !this.done && !this.timer && !this.inflight && !document.hidden) this.tick();
  },
  get watching() {
    return Boolean(this.ref) && !this.done;
  },
  schedule() {
    clearTimeout(this.timer);
    this.timer = 0;
    if (!this.ref || this.done || document.hidden) return;
    if (Date.now() - this.startedAt > CONFIG.watchLimitMs) {
      this.done = true;
      if (this.onLimit) this.onLimit();
      return;
    }
    this.timer = setTimeout(() => this.tick(), CONFIG.pollMs);
  },
  async tick() {
    clearTimeout(this.timer);
    this.timer = 0;
    if (!this.ref || this.inflight || document.hidden) return;
    const gen = this.gen;
    const ref = this.ref;
    this.inflight = true;
    try {
      const data = await Api.progress(ref);
      if (gen !== this.gen) return;
      this.failures = 0;
      if (isTerminal(data.status)) this.done = true;
      Ops.progress.set(ref, data);
      if (this.onUpdate) this.onUpdate(ref, data);
    } catch (err) {
      if (gen !== this.gen) return;
      this.failures += 1;
      if (this.onError) this.onError(ref, err);
    } finally {
      if (gen === this.gen) {
        this.inflight = false;
        this.schedule();
      }
    }
  }
};

function gateHtml() {
  return `<div class="view view--ops">
  <section class="gate" aria-labelledby="gate-title">
    ${photoImg(PHOTO.airport, { widths: [800, 1400, 2000], sizes: '100vw', cls: 'gate__bg', eager: true })}
    <div class="gate__card">
      <img class="gate__logo" src="assets/logo.svg" alt="" width="56" height="56">
      <p class="eyebrow">Operations Control</p>
      <h1 class="gate__title" id="gate-title" tabindex="-1">Restricted to Vistara Nova operations</h1>
      <p class="gate__lede">Enter the operations key to send schedule changes to partners through Salesforce.</p>
      <form class="gate__form" data-gate-form novalidate>
        <label class="o-label" for="gate-key">Operations key</label>
        <div class="pw">
          <input class="o-input" id="gate-key" name="key" type="password" autocomplete="off" autocapitalize="off" spellcheck="false" required aria-describedby="gate-help" aria-invalid="false">
          <button class="pw__toggle" type="button" data-pw-toggle aria-pressed="false"><span class="sr-only">Show key</span>${icon('eye')}</button>
        </div>
        <p class="form-error" data-gate-error role="alert" hidden></p>
        <button class="btn btn--accent btn--lg btn--block" type="submit" data-gate-submit>${icon('lock')}Unlock console</button>
      </form>
      <p class="gate__help" id="gate-help">The key is set in Salesforce under Setup, Custom Settings, Vistara Nova Settings. It stays in this browser until you sign out.</p>
      <a class="link-arrow gate__back" href="#/">${icon('arrowLeft')}Back to Vistara Nova home</a>
    </div>
  </section>
</div>`;
}

function opsConsoleHtml() {
  const kpiSkeleton = Array.from({ length: 4 }, () => '<div class="kpi"><span class="kpi__label">&nbsp;</span><span class="kpi__value">–</span><span class="kpi__sub">&nbsp;</span></div>').join('');
  return `<div class="view view--ops">
  <section class="ops" aria-labelledby="ops-title">
    <div class="container-wide">
      <div class="ops__bar">
        <div>
          <p class="eyebrow">Operations Control</p>
          <h1 class="ops__title" id="ops-title" tabindex="-1">Network disruption console</h1>
        </div>
        <div class="ops__meta">
          <span class="conn" data-conn data-state="checking"><span class="live-dot live-dot--off" aria-hidden="true"></span><span data-conn-text>Checking key</span></span>
          <span class="ops__updated" data-ops-updated></span>
          <button class="btn btn--ghost-light btn--sm" type="button" data-ops-refresh>${icon('refresh')}Refresh</button>
          <button class="btn btn--ghost-light btn--sm" type="button" data-signout>${icon('logout')}Sign out</button>
        </div>
      </div>
      <div class="kpis" data-kpis>${kpiSkeleton}</div>
      <div class="ops-grid" data-ops-grid data-view="list">
        <aside class="ops-board panel" aria-labelledby="board-title">
          <div class="ops-board__head">
            <h2 class="ops-board__title" id="board-title">Flights</h2>
            <div class="seg seg--dark" role="group" aria-label="Show flights" data-ops-filter>
              <button class="seg__btn" type="button" data-value="aspire" aria-pressed="${Ops.filter === 'aspire'}">Aspire passengers <span class="seg__count" data-count="aspire">0</span></button>
              <button class="seg__btn" type="button" data-value="all" aria-pressed="${Ops.filter === 'all'}">All flights <span class="seg__count" data-count="all">0</span></button>
            </div>
            <div class="o-search">${icon('search')}<label class="sr-only" for="ops-q">Filter flights</label><input class="o-input" id="ops-q" type="search" placeholder="Flight, city, airline or date" autocomplete="off" spellcheck="false" value="${esc(Ops.query)}"></div>
            <p class="ops-board__hint" data-board-count aria-live="polite"></p>
          </div>
          <ul class="ops-list" data-ops-list aria-label="Flights"></ul>
        </aside>
        <section class="ops-detail panel" data-ops-detail aria-label="Selected flight"></section>
      </div>
    </div>
  </section>
</div>`;
}

function opsItem(f, showBumps) {
  const st = flightState(f, true);
  const upd = effectiveUpdate(f);
  const dep = when(f.departureText, f.departure);
  const before = FlightStore.previous.get(f.id);
  const delta = showBumps && !upd && before !== undefined ? num(f.aspirePassengers, 0) - before : 0;
  const customers = num(f.aspireCustomers, 0);
  const pax = num(f.aspirePassengers, 0);
  const badges = [];
  if (customers > 0) badges.push(`<span class="badge badge--aspire">${icon('users')}<span aria-hidden="true">${customers} · ${pax} pax</span><span class="sr-only">${plural(customers, 'Aspire Lifestyles customer')}, ${plural(pax, 'passenger')}</span></span>`);
  if (delta > 0) badges.push(`<span class="badge badge--bump">+${delta} rebooked here</span>`);
  if (st.key !== 'ontime') badges.push(pill(st));
  if (upd) badges.push(ustat(upd.status));
  return `<button class="ops-item${delta > 0 ? ' is-bumped' : ''}" type="button" data-flight="${esc(f.id)}"${f.id === Ops.selectedId ? ' aria-current="true"' : ''}>
    <span class="ops-item__top"><span class="ops-item__code">${esc(f.code)}</span><span class="ops-item__date">${esc(dep.date)} · ${esc(dep.time)}</span></span>
    <span class="ops-item__route">${esc(f.from)}${icon('arrowRight')}${esc(f.to)}<span class="ops-item__cities">${esc(f.fromCity)} to ${esc(f.toCity)}</span></span>
    <span class="ops-item__op${isNova(f) ? ' ops-item__op--nova' : ''}">${esc(operatorText(f))}</span>
    ${badges.length ? `<span class="ops-item__badges">${badges.join('')}</span>` : ''}
  </button>`;
}

function detailTopHtml(f) {
  const st = flightState(f, true);
  const upd = effectiveUpdate(f);
  const dep = when(f.departureText, f.departure);
  const arr = when(f.arrivalText, f.arrival);
  const offset = Wall.dayOffset(f.departure, f.arrival);
  return `<div class="fd__top" data-fd-top>
    <button class="btn btn--ghost-light btn--sm fd__back" type="button" data-back>${icon('arrowLeft')}All flights</button>
    <div class="fd__head">
      <div>
        <p class="fd__eyebrow${isNova(f) ? ' fd__eyebrow--nova' : ''}">${esc(dep.date)} · ${esc(operatorText(f))}</p>
        <h2 class="fd__title" id="fd-title" tabindex="-1">${esc(f.code)} <span>${esc(f.fromCity)} to ${esc(f.toCity)}</span></h2>
      </div>
      <div class="fd__head-side">${pill(st)}${upd ? ustat(upd.status) : ''}</div>
    </div>
    <div class="fd__route">
      <div><span class="fd__iata">${esc(f.from)}</span><span class="fd__city">${esc(f.fromCity)}</span><span class="fd__when">${esc(dep.date)}, ${esc(dep.time)}</span></div>
      <div class="fd__path"><span>${esc(f.duration || '')}</span><span class="fd__line">${icon('plane')}</span><span>${esc(stopsText(f))}</span></div>
      <div class="fd__end--arr"><span class="fd__iata">${esc(f.to)}</span><span class="fd__city">${esc(f.toCity)}</span><span class="fd__when">${esc(arr.date)}, ${esc(arr.time)}${offset ? ` (${offset > 0 ? '+' : ''}${offset})` : ''}</span></div>
    </div>
    <dl class="facts">
      <div class="fact fact--aspire"><dt>Aspire customers</dt><dd>${num(f.aspireCustomers, 0)}</dd></div>
      <div class="fact fact--aspire"><dt>Passengers</dt><dd>${num(f.aspirePassengers, 0)}</dd></div>
      <div class="fact"><dt>Seats left</dt><dd>${esc(num(f.seatsLeft, '–'))}</dd></div>
      <div class="fact"><dt>Fare from</dt><dd>${esc(money(f.price) || '–')}</dd></div>
    </dl>
  </div>`;
}

function placeholderHtml() {
  return `<div class="placeholder">
    <div>
      <p class="eyebrow">Ready when you are</p>
      <h2 class="placeholder__title" tabindex="-1">Choose a flight to manage</h2>
      <p class="placeholder__text">Flights with Aspire Lifestyles passengers are listed first. Pick one to see who is on board, then cancel, delay or reschedule it and watch Salesforce rebook every affected customer live.</p>
    </div>
    <ol class="howto">
      <li><span class="howto__n">1</span><strong>Choose a flight</strong><span class="howto__text">Badges show Aspire Lifestyles customers and passengers on board.</span></li>
      <li><span class="howto__n">2</span><strong>Describe the disruption</strong><span class="howto__text">Cancel, delay or reschedule it, with a reason.</span></li>
      <li><span class="howto__n">3</span><strong>Send to partners</strong><span class="howto__text">Salesforce rebooks and notifies each traveller while you watch.</span></li>
    </ol>
  </div>`;
}

function payloadHtml(payload) {
  const keys = Object.keys(payload);
  const lines = keys.map((key, i) => {
    const value = payload[key];
    let rendered;
    if (key === 'apiKey') rendered = `<span class="j-mask">"${esc(value)}"</span>`;
    else if (typeof value === 'number') rendered = `<span class="j-num">${esc(value)}</span>`;
    else rendered = `<span class="j-str">${esc(JSON.stringify(value))}</span>`;
    return `  <span class="j-key">"${esc(key)}"</span><span class="j-p">:</span> ${rendered}${i < keys.length - 1 ? '<span class="j-p">,</span>' : ''}`;
  });
  return `<span class="j-p">{</span>\n${lines.join('\n')}\n<span class="j-p">}</span>`;
}

function buildPayload(f, w, masked) {
  const payload = { apiKey: masked ? MASK : Ops.key, flightId: f.id, type: w.type, reason: w.reason };
  if (w.type === 'DELAYED') payload.delayMinutes = w.delay;
  if (w.type === 'RESCHEDULED') payload.newDeparture = `${w.date}T${w.time}`;
  return payload;
}

function newDepartureOf(f, w) {
  if (w.type === 'DELAYED') return Wall.addMinutes(f.departure, w.delay);
  if (w.type === 'RESCHEDULED' && w.date && w.time) return `${w.date}T${w.time}`;
  return '';
}

function whenPreviewHtml(f, w) {
  const next = newDepartureOf(f, w);
  if (!next) return `${icon('clock')}<span>Choose the new date and time.</span>`;
  const shift = Wall.diffMinutes(f.departure, next);
  return `${icon('clock')}<span>New departure <strong>${esc(Wall.pretty(next))}</strong></span><span>was <s>${esc(depText(f))}</s></span><span>${esc(shiftLabel(shift))}</span>`;
}

function initials(name) {
  return String(name || '?').split(/\s+/).filter(Boolean).slice(0, 2).map(part => part.charAt(0).toUpperCase()).join('') || '?';
}

function customerChip(status) {
  const tone = CUSTOMER_TONE[lower(status)] || 'neutral';
  return `<span class="cchip cchip--${tone}"><span class="cchip__dot" aria-hidden="true"></span>${esc(status || 'Pending')}</span>`;
}

function customerRow(c, key, extraClass) {
  const tier = lower(c.tier) || 'member';
  const tierClass = ['platinum', 'gold', 'silver'].includes(tier) ? tier : 'member';
  const channel = lower(c.channel) === 'email' ? 'Email' : 'App';
  const seconds = num(c.seconds, null);
  const dash = '<span class="muted" aria-label="Not yet">–</span>';
  return `<tr data-key="${esc(key)}"${extraClass ? ` class="${extraClass}"` : ''}>
    <td class="cell-cust" data-label="Customer"><div class="cust"><span class="cust__avatar" aria-hidden="true">${esc(initials(c.name))}</span><div><span class="cust__name">${esc(c.name || 'Customer')}</span><span class="cust__meta"><span class="tier tier--${tierClass}">${esc(c.tier || 'Member')}</span><span class="channel${c.notified ? ' channel--sent' : ''}">${icon(channel === 'Email' ? 'mail' : 'phone')}${channel}<span class="sr-only">${c.notified ? ', notified' : ', not notified yet'}</span></span></span></div></div></td>
    <td data-label="Party">${esc(num(c.party, 1))}</td>
    <td data-label="Status">${customerChip(c.status)}</td>
    <td data-label="New flight">${c.newFlight ? `<span class="newflight">${esc(c.newFlight)}</span>` : dash}</td>
    <td data-label="New departure">${c.newDeparture ? esc(Wall.pretty(c.newDeparture)) : dash}</td>
    <td data-label="Seats">${c.seats ? esc(c.seats) : dash}</td>
    <td class="cell-time" data-label="Time">${seconds !== null ? `${Math.round(seconds)} s` : dash}</td>
  </tr>`;
}

function progressModel(data, f, ref) {
  const d = data || {};
  const status = lower(d.status) || 'sent';
  const customers = Array.isArray(d.customers) ? d.customers : [];
  const affected = num(d.customersAffected, customers.length ? customers.length : null);
  const pax = num(d.passengersAffected, customers.length ? customers.reduce((s, c) => s + num(c.party, 1), 0) : null);
  const notified = num(d.notified, customers.filter(c => c.notified).length);
  const safe = num(d.protected, customers.filter(c => SAFE_STATUSES.has(lower(c.status))).length);
  const withRep = num(d.withRep, 0);
  const handled = customers.filter(c => !WAITING_STATUSES.has(lower(c.status))).length;
  const attention = customers.filter(c => lower(c.status) === 'needs attention').length;
  const working = customers.find(c => ['analysing', 'analyzing'].includes(lower(c.status)));
  const byApp = customers.filter(c => c.notified && lower(c.channel) === 'app').length;
  const byEmail = customers.filter(c => c.notified && lower(c.channel) === 'email').length;
  const started = status !== 'sent';
  const complete = status === 'completed';
  const failed = status === 'failed';
  const reset = status === 'reset';
  const none = affected === 0 && (started || complete);
  const seconds = Math.round(num(d.slowestSeconds, 0)) || Math.round(num(d.elapsedSeconds, 0));
  const raw = {
    sent: true,
    received: started,
    identified: started && (customers.length > 0 || none),
    notified: none || (affected > 0 && notified >= affected),
    rebooking: none || (affected > 0 && handled >= affected),
    done: complete
  };
  const states = {};
  let chain = true;
  PROGRESS_STEPS.forEach(step => {
    const done = complete || (chain && raw[step.id]);
    chain = done;
    states[step.id] = done ? 'done' : 'pending';
  });
  if (!complete && !reset) {
    const next = PROGRESS_STEPS.find(step => states[step.id] === 'pending');
    if (next) states[next.id] = failed ? 'failed' : 'active';
  }
  const flightCode = d.flight || (f && f.code) || '';
  const typeWord = lower(d.type) || lower(effectiveUpdate(f)?.type) || 'update';
  const refCode = `<code>${esc(ref)}</code>`;
  const details = {
    sent: `${esc(flightCode)} ${esc(typeWord)} from Operations Control`,
    received: started ? `Reference ${refCode} received` : `Reference ${refCode} issued · waiting for Salesforce to pick it up`,
    identified: none ? 'No Aspire Lifestyles customers on this flight' : states.identified === 'done' ? `${esc(plural(affected, 'customer'))} · ${esc(plural(pax ?? 0, 'passenger'))}` : 'Finding every Aspire Lifestyles booking on the flight',
    notified: none ? 'Nobody to notify' : affected ? `${notified} of ${affected} notified${byApp || byEmail ? ` · ${byApp} by app, ${byEmail} by email` : ''}` : 'App push and email alerts go out first',
    rebooking: none ? 'Nothing to rebook' : affected ? `${safe} of ${affected} protected${working && !complete ? ` · finding the best flight for ${esc(working.name)}` : ''}` : 'Best next flight for each traveller',
    done: complete ? (none ? 'Update recorded' : `${esc(plural(safe, 'customer'))} protected in ${seconds} s`) : failed ? esc(d.error || 'Salesforce reported a problem') : reset ? 'This update was reset' : 'Waiting for the last customer'
  };
  return { status, customers, affected, pax, notified, safe, withRep, handled, attention, started, complete, failed, reset, none, seconds, states, details, elapsed: num(d.elapsedSeconds, null), error: d.error || '' };
}

function bannerHtml(m) {
  if (m.complete) {
    if (m.none) {
      return `<div class="banner banner--info" role="status"><span class="banner__icon">${icon('check')}</span><div><p class="banner__title">Update recorded</p><p class="banner__text">No Aspire Lifestyles customers were booked on this flight, so nobody needed rebooking.</p></div></div>`;
    }
    const total = m.affected || m.customers.length;
    const lead = m.safe === total || !total ? `<em>${m.safe}</em> ${m.safe === 1 ? 'customer' : 'customers'}` : `<em>${m.safe}</em> of ${total} customers`;
    const timing = m.seconds > 0 ? ` in <em>${m.seconds}</em> ${m.seconds === 1 ? 'second' : 'seconds'}` : '';
    const title = m.safe > 0 ? `${lead} protected${timing}` : 'Rebooking finished';
    const extras = [];
    if (m.withRep) extras.push(`${plural(m.withRep, 'customer')} ${m.withRep === 1 ? 'is' : 'are'} with a service rep.`);
    if (m.attention) extras.push(`${plural(m.attention, 'customer')} ${m.attention === 1 ? 'needs' : 'need'} attention.`);
    const text = `Every affected Aspire Lifestyles traveller was handled automatically by Salesforce and told about their new flight.${extras.length ? ` ${extras.join(' ')}` : ''}`;
    return `<div class="banner banner--success" role="status">
      <div class="banner__burst" aria-hidden="true"><svg viewBox="0 0 64 64"><path class="b1" fill="#2dd4cf" d="M32 10c1.3 10.6 5.4 14.7 16 16-10.6 1.3-14.7 5.4-16 16-1.3-10.6-5.4-14.7-16-16 10.6-1.3 14.7-5.4 16-16z"/><path class="b2" fill="#ff8a70" d="M50 6c.5 4.4 2.3 6.2 6.7 6.7-4.4.5-6.2 2.3-6.7 6.7-.5-4.4-2.3-6.2-6.7-6.7 4.4-.5 6.2-2.3 6.7-6.7z"/><path class="b3" fill="#7feee5" d="M12 42c.5 4.4 2.3 6.2 6.7 6.7-4.4.5-6.2 2.3-6.7 6.7-.5-4.4-2.3-6.2-6.7-6.7 4.4-.5 6.2-2.3 6.7-6.7z"/></svg></div>
      <div><p class="banner__title">${title}</p><p class="banner__text">${esc(text)}</p></div>
    </div>`;
  }
  if (m.failed) {
    return `<div class="banner banner--error" role="alert"><span class="banner__icon">${icon('alert')}</span><div><p class="banner__title">Salesforce could not complete this update</p><p class="banner__text">${esc(m.error || 'Something went wrong while processing the update.')} Reset the flight and try again.</p></div></div>`;
  }
  if (m.reset) {
    return `<div class="banner banner--info" role="status"><span class="banner__icon">${icon('refresh')}</span><div><p class="banner__title">This update was reset</p><p class="banner__text">The flight and its bookings have been restored, so the demo can run again.</p></div></div>`;
  }
  return '';
}

const OpsView = {
  title: 'Operations Control | Vistara Nova',
  theme: 'dark',
  root: null,
  unsub: null,
  clock: 0,
  typing: 0,
  mode: '',
  modeFlight: '',
  topHtml: '',
  rowSigs: new Map(),
  refreshing: false,
  navKey() {
    return 'ops';
  },
  render() {
    Ops.key = Keys.get();
    return Ops.key ? opsConsoleHtml() : gateHtml();
  },
  mount(ctx, message) {
    this.root = $('.view--ops');
    this.mode = '';
    this.modeFlight = '';
    this.topHtml = '';
    if (!Ops.key) {
      this.mountGate(message);
      return;
    }
    this.mountConsole(ctx);
  },
  update(ctx) {
    if (!Ops.key || !this.root) return;
    const id = ctx.params.get('flight');
    if (id && id !== Ops.selectedId) this.select(id, false);
  },
  focusTarget() {
    return Ops.key ? $('#ops-title', this.root) : null;
  },
  unmount() {
    Tracker.stop();
    Tracker.onUpdate = null;
    Tracker.onError = null;
    Tracker.onLimit = null;
    Live.stop();
    clearInterval(this.clock);
    clearTimeout(this.typing);
    if (this.unsub) this.unsub();
    this.unsub = null;
    this.root = null;
  },
  rerender(message) {
    const ctx = Router.parse() || { seg: 'ops', name: 'ops', params: new URLSearchParams() };
    this.unmount();
    $('#main').innerHTML = this.render(ctx);
    this.mount(ctx, message);
    const target = Ops.key ? $('#ops-title', this.root) : null;
    if (target) target.focus({ preventScroll: true });
    window.scrollTo({ top: 0 });
  },
  mountGate(message) {
    const root = this.root;
    const form = $('[data-gate-form]', root);
    const input = $('#gate-key', root);
    const error = $('[data-gate-error]', root);
    const submit = $('[data-gate-submit]', root);
    const toggle = $('[data-pw-toggle]', root);
    const showError = text => {
      error.innerHTML = `${icon('alert')}<span>${esc(text)}</span>`;
      error.hidden = false;
      input.setAttribute('aria-invalid', 'true');
    };
    if (message) showError(message);
    toggle.addEventListener('click', () => {
      const show = input.type === 'password';
      input.type = show ? 'text' : 'password';
      toggle.setAttribute('aria-pressed', String(show));
      toggle.innerHTML = `<span class="sr-only">${show ? 'Hide key' : 'Show key'}</span>${icon(show ? 'eyeOff' : 'eye')}`;
      input.focus();
    });
    input.addEventListener('input', () => {
      if (!error.hidden) {
        error.hidden = true;
        input.setAttribute('aria-invalid', 'false');
      }
    });
    form.addEventListener('submit', async event => {
      event.preventDefault();
      const key = input.value.trim();
      if (!key) {
        showError('Enter the operations key.');
        input.focus();
        return;
      }
      submit.disabled = true;
      submit.classList.add('is-busy');
      submit.innerHTML = '<span class="spinner" aria-hidden="true"></span>Checking with Salesforce';
      try {
        await Api.verify(key);
        Keys.set(key);
        Ops.key = key;
        this.verified = true;
        toast('Operations Control unlocked');
        this.rerender();
      } catch (err) {
        submit.disabled = false;
        submit.classList.remove('is-busy');
        submit.innerHTML = `${icon('lock')}Unlock console`;
        showError(err.message);
        input.focus();
        input.select();
      }
    });
    setTimeout(() => input.focus({ preventScroll: true }), 60);
  },
  mountConsole(ctx) {
    const root = this.root;
    const fromUrl = ctx.params.get('flight');
    if (fromUrl) Ops.selectedId = fromUrl;
    root.addEventListener('click', event => this.onClick(event));
    root.addEventListener('change', event => this.onChange(event));
    root.addEventListener('input', event => this.onInput(event));
    $('[data-ops-list]', root).addEventListener('keydown', event => this.onListKey(event));
    Tracker.onUpdate = (ref, data) => this.onProgress(ref, data);
    Tracker.onError = (ref, err) => this.onProgressError(ref, err);
    Tracker.onLimit = () => this.renderWatchNote();
    this.unsub = FlightStore.subscribe(() => this.onFlights());
    this.onFlights();
    if (Ops.selectedId) this.setView('detail');
    FlightStore.load(true).catch(() => {});
    Live.start();
    this.clock = setInterval(() => {
      this.renderUpdated();
      this.renderWatchNote();
    }, 5000);
    if (!this.verified) this.verifyKey();
    else this.setConn('ok', 'Salesforce connected');
  },
  async verifyKey() {
    this.setConn('checking', 'Checking key');
    try {
      await Api.verify(Ops.key);
      this.verified = true;
      this.setConn('ok', 'Salesforce connected');
    } catch (err) {
      if (!this.root) return;
      if (err.status === 401) {
        this.signOut(err.message);
        return;
      }
      this.setConn('warn', err.status === 503 ? 'Key not set in Salesforce' : 'Salesforce unreachable');
      toast(err.message, 'error');
    }
  },
  setConn(state, text) {
    const el = $('[data-conn]', this.root || document);
    if (!el) return;
    el.dataset.state = state;
    $('[data-conn-text]', el).textContent = text;
    const dot = $('.live-dot', el);
    dot.className = `live-dot${state === 'ok' ? '' : ' live-dot--off'}${state === 'warn' ? ' live-dot--warn' : ''}`;
  },
  signOut(message) {
    Keys.clear();
    Ops.key = '';
    Ops.wizard = null;
    Ops.resetState = null;
    this.verified = false;
    this.rerender(message);
    if (!message) toast('Signed out of Operations Control');
  },
  selected() {
    return Ops.selectedId ? FlightStore.byId(Ops.selectedId) : null;
  },
  setView(view) {
    const grid = $('[data-ops-grid]', this.root);
    if (grid) grid.dataset.view = view;
  },
  filtered() {
    let list = FlightStore.flights;
    if (Ops.filter === 'aspire') list = list.filter(f => num(f.aspireCustomers, 0) > 0 || effectiveUpdate(f) || isDisrupted(f));
    if (Ops.query) list = list.filter(f => matchesQuery(f, Ops.query));
    return list;
  },
  reconcilePending() {
    Ops.pending.forEach((p, id) => {
      const f = FlightStore.byId(id);
      const progress = Ops.progress.get(p.reference);
      if (!f) Ops.pending.delete(id);
      else if (f.update && f.update.reference) Ops.pending.delete(id);
      else if (progress && lower(progress.status) === 'failed') return;
      else if (progress && lower(progress.status) === 'reset') Ops.pending.delete(id);
      else if (Date.now() - p.at > CONFIG.pendingTtlMs) Ops.pending.delete(id);
    });
  },
  onFlights() {
    if (!this.root || !Ops.key) return;
    this.reconcilePending();
    this.renderKpis();
    this.renderList();
    this.renderUpdated();
    this.renderDetail(false);
  },
  renderUpdated() {
    const el = $('[data-ops-updated]', this.root || document);
    if (!el) return;
    if (FlightStore.loaded) el.textContent = `Flights updated ${ago(FlightStore.loadedAt)}`;
    else if (FlightStore.error) el.textContent = 'Flights unavailable';
    else el.textContent = 'Loading flights…';
  },
  renderKpis() {
    const host = $('[data-kpis]', this.root);
    if (!host || !FlightStore.loaded) return;
    const flights = FlightStore.flights;
    const nova = flights.filter(isNova).length;
    const withAspire = flights.filter(f => num(f.aspireCustomers, 0) > 0);
    const bookings = withAspire.reduce((s, f) => s + num(f.aspireCustomers, 0), 0);
    const travellers = withAspire.reduce((s, f) => s + num(f.aspirePassengers, 0), 0);
    const active = flights.filter(f => effectiveUpdate(f) || isDisrupted(f)).length;
    const kpis = [
      { label: 'Flights in schedule', value: flights.length, sub: `${nova} Vistara Nova · ${flights.length - nova} partner` },
      { label: 'Flights with Aspire customers', value: withAspire.length, sub: plural(bookings, 'customer booking') },
      { label: 'Aspire travellers booked', value: travellers, sub: 'Across upcoming flights' },
      { label: 'Active disruptions', value: active, sub: active ? 'Updates in progress or done' : 'Every flight on schedule', alert: active > 0 }
    ];
    patch(host, kpis.map(k => `<div class="kpi${k.alert ? ' kpi--alert' : ''}"><span class="kpi__label">${esc(k.label)}</span><span class="kpi__value">${esc(k.value)}</span><span class="kpi__sub">${esc(k.sub)}</span></div>`).join(''));
  },
  renderList() {
    const root = this.root;
    const listEl = $('[data-ops-list]', root);
    if (!listEl) return;
    const flights = FlightStore.flights;
    const aspireCount = flights.filter(f => num(f.aspireCustomers, 0) > 0 || effectiveUpdate(f) || isDisrupted(f)).length;
    $('[data-count="aspire"]', root).textContent = String(aspireCount);
    $('[data-count="all"]', root).textContent = String(flights.length);
    if (!FlightStore.loaded) {
      patch(listEl, FlightStore.error
        ? `<li class="ops-list__empty">${esc(FlightStore.error.message)}<br><button class="btn btn--ghost-light btn--sm" type="button" data-ops-refresh style="margin-top:14px">${icon('refresh')}Try again</button></li>`
        : Array.from({ length: 6 }, () => '<li aria-hidden="true"><div class="skel" style="height:96px;margin:6px 4px;opacity:.08"></div></li>').join(''));
      return;
    }
    const list = this.filtered();
    const scope = Ops.filter === 'aspire' ? `${plural(list.length, 'flight')} with Aspire Lifestyles passengers` : `${plural(list.length, 'flight')} in the schedule`;
    const hint = $('[data-board-count]', root);
    const hintText = Ops.query ? `${scope} matching “${Ops.query}”` : `Showing ${scope}`;
    if (hint.textContent !== hintText) hint.textContent = hintText;
    const focusedId = document.activeElement && document.activeElement.closest ? document.activeElement.closest('[data-flight]')?.dataset.flight : '';
    const scroll = listEl.scrollTop;
    const empty = Ops.filter === 'aspire' && !Ops.query ? 'No flights with Aspire Lifestyles passengers right now.' : 'No flights match this filter.';
    const showBumps = flights.some(f => effectiveUpdate(f));
    const changed = patch(listEl, list.length ? list.map(f => `<li>${opsItem(f, showBumps)}</li>`).join('') : `<li class="ops-list__empty">${esc(empty)}</li>`);
    if (changed) {
      listEl.scrollTop = scroll;
      if (focusedId) $(`[data-flight="${CSS.escape(focusedId)}"]`, listEl)?.focus({ preventScroll: true });
    }
  },
  markSelected() {
    $$('[data-flight]', this.root).forEach(btn => {
      if (btn.dataset.flight === Ops.selectedId) btn.setAttribute('aria-current', 'true');
      else btn.removeAttribute('aria-current');
    });
    const listEl = $('[data-ops-list]', this.root);
    if (listEl) listEl.vnHtml = '';
  },
  select(id, fromClick) {
    const f = FlightStore.byId(id);
    if (!f) return;
    if (Ops.selectedId !== id) {
      Ops.selectedId = id;
      if (Ops.wizard && Ops.wizard.flightId !== id && !Ops.wizard.sending) Ops.wizard = null;
      if (Ops.resetState && Ops.resetState.flightId !== id && Ops.resetState.phase !== 'running') Ops.resetState = null;
    }
    history.replaceState(null, '', `#/ops?flight=${encodeURIComponent(id)}`);
    this.markSelected();
    this.renderDetail(true);
    this.setView('detail');
    if (fromClick && isNarrow()) {
      const grid = $('[data-ops-grid]', this.root);
      const top = grid.getBoundingClientRect().top + window.scrollY - parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10) - 12;
      window.scrollTo({ top: Math.max(0, top), behavior: scrollBehavior() });
      $('#fd-title', this.root)?.focus({ preventScroll: true });
    }
  },
  backToList() {
    this.setView('list');
    const btn = $(`[data-flight="${CSS.escape(Ops.selectedId)}"]`, this.root);
    if (btn) {
      if (isNarrow()) btn.scrollIntoView({ block: 'center' });
      btn.focus({ preventScroll: !isNarrow() });
    }
  },
  modeFor(f) {
    if (Ops.resetState && Ops.resetState.flightId === f.id && ['running', 'error'].includes(Ops.resetState.phase)) return 'resetting';
    const upd = effectiveUpdate(f);
    if (upd && upd.reference) return `progress:${upd.reference}`;
    if (flightState(f).key === 'cancelled') return 'blocked';
    return 'wizard';
  },
  renderDetail(force) {
    const host = $('[data-ops-detail]', this.root);
    if (!host) return;
    const f = this.selected();
    if (!f) {
      if (Ops.selectedId && !FlightStore.loaded) {
        if (this.mode !== 'loading') {
          host.innerHTML = '<div class="placeholder"><p class="placeholder__text"><span class="spinner" aria-hidden="true"></span> Loading flight…</p></div>';
          this.mode = 'loading';
        }
        return;
      }
      if (Ops.selectedId && FlightStore.loaded) {
        Ops.selectedId = '';
        this.setView('list');
      }
      if (this.mode !== 'placeholder') {
        host.innerHTML = placeholderHtml();
        this.mode = 'placeholder';
        this.modeFlight = '';
        Tracker.stop();
      }
      return;
    }
    const mode = this.modeFor(f);
    if (force || mode !== this.mode || this.modeFlight !== f.id) {
      this.topHtml = detailTopHtml(f);
      host.innerHTML = `<article class="fd" aria-labelledby="fd-title">${this.topHtml}<div class="fd__body" data-fd-body>${this.bodyHtml(f, mode)}</div></article>`;
      this.mode = mode;
      this.modeFlight = f.id;
      this.afterBody(f, mode);
      return;
    }
    const top = detailTopHtml(f);
    if (top !== this.topHtml) {
      const el = $('[data-fd-top]', host);
      const hadFocus = el && el.contains(document.activeElement) ? document.activeElement.matches('[data-back]') ? '[data-back]' : '#fd-title' : '';
      if (el) el.outerHTML = top;
      this.topHtml = top;
      if (hadFocus) $(hadFocus, host)?.focus({ preventScroll: true });
    }
  },
  bodyHtml(f, mode) {
    if (mode === 'resetting') return this.resettingHtml(f);
    if (mode === 'blocked') return this.blockedHtml(f);
    if (mode.startsWith('progress:')) return this.progressShellHtml(f, mode.slice(9));
    return `<div data-wizard>${this.wizardHtml(f)}</div>`;
  },
  afterBody(f, mode) {
    if (mode.startsWith('progress:')) {
      const ref = mode.slice(9);
      this.rowSigs = new Map();
      const cached = Ops.progress.get(ref);
      if (cached) this.applyProgress(ref, cached, f);
      const status = lower(cached?.status);
      if (!cached || !isTerminal(status)) Tracker.start(ref);
      else Tracker.stop();
      return;
    }
    Tracker.stop();
    if (mode === 'wizard') this.syncWizardControls();
  },
  resettingHtml(f) {
    const rs = Ops.resetState;
    if (rs.phase === 'error') {
      return `<div class="state-card state-card--warn" role="alert"><p class="state-card__title">${icon('alert')}The reset did not go through</p><p>${esc(rs.error)}</p><div class="progress__actions"><button class="btn btn--accent" type="button" data-reset-go>${icon('refresh')}Try again</button><button class="btn btn--ghost-light" type="button" data-reset-cancel>Cancel</button></div></div>`;
    }
    return `<div class="state-card" role="status"><p class="state-card__title"><span class="spinner" aria-hidden="true"></span>Restoring ${esc(f.code)}</p><p>Salesforce is putting back the original schedule and every booking. This takes a few seconds, then the flight is ready for the next demo.</p></div>`;
  },
  blockedHtml(f) {
    return `<div class="state-card state-card--warn">
      <p class="state-card__title">${icon('alert')}${esc(f.code)} is already cancelled</p>
      <p>Reset the flight to restore its schedule and bookings before you send a new update.</p>
      <div class="progress__actions" data-pv-actions>${this.actionsHtml(f)}</div>
    </div>`;
  },
  actionsHtml(f) {
    const rs = Ops.resetState && Ops.resetState.flightId === f.id ? Ops.resetState : null;
    if (rs && rs.phase === 'confirm') {
      return `<div class="confirm" role="group" aria-label="Confirm reset"><p>Reset ${esc(f.code)}? Salesforce restores the original schedule and every booking, ready for the next demo.</p><button class="btn btn--accent btn--sm" type="button" data-reset-go>${icon('refresh')}Reset now</button><button class="btn btn--ghost-light btn--sm" type="button" data-reset-cancel>Keep it</button></div>`;
    }
    return `<button class="btn btn--danger-light" type="button" data-reset-ask>${icon('refresh')}Reset flight</button><button class="btn btn--ghost-light" type="button" data-pick-another>${icon('arrowLeft')}Choose another flight</button>`;
  },
  renderActions(f, focusSelector) {
    const host = $('[data-pv-actions]', this.root);
    if (!host) return;
    host.innerHTML = this.actionsHtml(f);
    if (focusSelector) $(focusSelector, host)?.focus();
  },
  ensureWizard(f) {
    if (!Ops.wizard || Ops.wizard.flightId !== f.id) {
      const next = Wall.parse(Wall.addMinutes(f.departure, 1440));
      Ops.wizard = {
        flightId: f.id,
        step: 1,
        maxStep: 1,
        type: '',
        reason: '',
        delay: 120,
        date: next ? Wall.dateKey(next) : '',
        time: next ? Wall.timeLabel(next) : '',
        sending: false,
        slow: false,
        error: ''
      };
    }
    return Ops.wizard;
  },
  wizardHtml(f) {
    const w = this.ensureWizard(f);
    const names = ['Type', 'Reason', 'Impact', 'Send'];
    const steps = names.map((name, i) => {
      const n = i + 1;
      const current = n === w.step;
      const done = n < w.step || (n <= w.maxStep && !current && n < w.maxStep);
      const reachable = n <= w.maxStep && !current && !w.sending;
      return `<li><button class="stepper-nav__btn${done ? ' is-done' : ''}" type="button" data-goto="${n}"${current ? ' aria-current="step"' : ''}${reachable ? '' : ' disabled'}><span class="stepper-nav__n">${done ? icon('check') : n}</span><span class="stepper-nav__label">${name}</span><span class="sr-only">${current ? ', current step' : done ? ', completed' : ''}</span></button></li>`;
    }).join('');
    return `<section class="wizard" aria-labelledby="wz-title">
      <div class="wizard__head">
        <h3 class="wizard__title" id="wz-title">${icon('bolt')}Disrupt this flight</h3>
        <ol class="stepper-nav" aria-label="Steps">${steps}</ol>
      </div>
      <div class="wizard__panel" data-wz-panel>${this.stepHtml(f, w)}</div>
      <div class="wizard__nav" data-wz-nav>${this.navHtml(w)}</div>
    </section>`;
  },
  stepHtml(f, w) {
    const t = TYPES.find(x => x.value === w.type);
    const errorSlot = `<p class="o-error" data-wz-error role="alert"${w.error && !w.sending ? '' : ' hidden'}>${esc(w.step < 4 ? w.error : '')}</p>`;
    if (w.step === 1) {
      return `<fieldset>
        <legend class="wizard__q" tabindex="-1" data-wz-focus>What is happening to ${esc(f.code)}?</legend>
        <div class="choices">${TYPES.map(type => `<label class="choice choice--${type.key}${w.type === type.value ? ' is-checked' : ''}">
          <input type="radio" name="wz-type" value="${type.value}"${w.type === type.value ? ' checked' : ''}>
          <span class="choice__check" aria-hidden="true">${icon('check')}</span>
          <span class="choice__icon" aria-hidden="true">${icon(type.icon)}</span>
          <span class="choice__title">${type.label}</span>
          <span class="choice__text">${type.text}</span>
        </label>`).join('')}</div>
      </fieldset>${errorSlot}`;
    }
    if (w.step === 2) {
      let extra = '';
      if (w.type === 'DELAYED') {
        const fill = ((w.delay - 30) / 570) * 100;
        extra = `<div class="subcard">
          <div class="delay__top"><label class="o-label" for="wz-delay">Delay length</label><output class="delay__value" for="wz-delay" data-delay-out>${durationLabel(w.delay)}</output></div>
          <input class="range" type="range" id="wz-delay" min="30" max="600" step="15" value="${w.delay}" aria-valuetext="${esc(durationWords(w.delay))}" style="--fill:${fill.toFixed(1)}%">
          <div class="range-scale" aria-hidden="true"><span>30 min</span><span>10 h</span></div>
          <p class="when-preview" data-when-preview>${whenPreviewHtml(f, w)}</p>
        </div>`;
      }
      if (w.type === 'RESCHEDULED') {
        extra = `<div class="subcard">
          <div class="o-fields">
            <div class="o-field"><label class="o-label" for="wz-date">New date</label><input class="o-input" type="date" id="wz-date" value="${esc(w.date)}" required></div>
            <div class="o-field"><label class="o-label" for="wz-time">New time, local to ${esc(f.fromCity || f.from)}</label><input class="o-input" type="time" id="wz-time" value="${esc(w.time)}" step="300" required></div>
          </div>
          <p class="when-preview" data-when-preview>${whenPreviewHtml(f, w)}</p>
        </div>`;
      }
      return `<fieldset>
        <legend class="wizard__q" tabindex="-1" data-wz-focus>Why is ${esc(f.code)} being ${esc(t ? t.past : 'changed')}?</legend>
        <div class="reasons">${REASONS.map(r => `<label class="reason"><input type="radio" name="wz-reason" value="${esc(r.value)}"${w.reason === r.value ? ' checked' : ''}><span>${icon(r.icon)}${esc(r.value)}</span></label>`).join('')}</div>
      </fieldset>${extra}${errorSlot}`;
    }
    if (w.step === 3) {
      const customers = num(f.aspireCustomers, 0);
      const pax = num(f.aspirePassengers, 0);
      return `<p class="wizard__q" tabindex="-1" data-wz-focus>Impact of this ${esc(t ? t.noun : 'update')}</p>
        <div class="impact">
          <div class="tile tile--aspire"><span class="tile__n">${customers}</span><span class="tile__l">Aspire Lifestyles ${customers === 1 ? 'customer' : 'customers'} affected</span></div>
          <div class="tile"><span class="tile__n">${pax}</span><span class="tile__l">${pax === 1 ? 'Passenger' : 'Passengers'} on their bookings</span></div>
          <div class="tile tile--partner"><span class="tile__l">Partner notified</span><span class="tile__partner">${icon('send')}Aspire Lifestyles via Salesforce</span></div>
        </div>
        <p class="impact-note">${icon('info')}<span>${customers ? 'Salesforce identifies each traveller, notifies them by app or email and rebooks them on the best next flight automatically.' : 'No Aspire Lifestyles customers are booked on this flight. Salesforce still records the update and changes the flight.'}</span></p>
        <div class="payload">
          <div class="payload__bar"><span class="payload__method">POST</span><span class="payload__path">/services/apexrest/vistaraNova/updates</span><span class="payload__tag">Payload preview, key hidden</span></div>
          <pre class="payload__code"><code>${payloadHtml(buildPayload(f, w, true))}</code></pre>
        </div>${errorSlot}`;
    }
    const customers = num(f.aspireCustomers, 0);
    const pax = num(f.aspirePassengers, 0);
    const next = newDepartureOf(f, w);
    return `<div class="send-card">
      <p class="send-card__lead" tabindex="-1" data-wz-focus>You are about to <strong>${esc(t ? t.verb : 'update')} ${esc(f.code)}</strong>, ${esc(f.fromCity)} to ${esc(f.toCity)} on ${esc(depText(f))}.</p>
      <ul class="send-card__list">
        <li>${icon('info')}<span>Reason: <strong>${esc(w.reason)}</strong></span></li>
        ${next ? `<li>${icon('clock')}<span>New departure: <strong>${esc(Wall.pretty(next))}</strong>${w.type === 'DELAYED' ? `, ${esc(durationLabel(w.delay))} later` : ''}</span></li>` : ''}
        <li>${icon('users')}<span><strong>${esc(plural(customers, 'Aspire Lifestyles customer'))}</strong>, ${esc(plural(pax, 'passenger'))}</span></li>
        <li>${icon('send')}<span>Partner: <strong>Aspire Lifestyles via Salesforce</strong></span></li>
      </ul>
      <div class="send-card__actions">
        <button class="btn btn--accent btn--xl send-btn" type="button" data-send>${icon('send')}Send to partners</button>
        <p class="send-card__hint" data-send-hint>Salesforce replies with a reference straight away, then rebooks customers in the background. You will watch it happen live here.</p>
      </div>
      <div class="form-error" data-send-error role="alert" hidden style="margin-top:18px"></div>
    </div>`;
  },
  navHtml(w) {
    const back = w.step > 1 ? `<button class="btn btn--ghost-light" type="button" data-wz-back>${icon('arrowLeft')}Back</button>` : '<span></span>';
    const next = w.step < 4 ? `<button class="btn btn--accent" type="button" data-wz-next>${w.step === 3 ? 'Review and send' : 'Continue'}${icon('arrowRight')}</button>` : '';
    return `${back}<div class="wizard__nav-end">${next}</div>`;
  },
  renderWizard(f, focus) {
    const host = $('[data-wizard]', this.root);
    if (!host) return;
    host.innerHTML = this.wizardHtml(f);
    this.syncWizardControls();
    if (focus) {
      const target = $('[data-wz-focus]', host);
      if (target) target.focus({ preventScroll: true });
      const rect = host.getBoundingClientRect();
      if (rect.top < 80 || rect.top > window.innerHeight * 0.6) {
        const offset = window.scrollY + rect.top - parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10) - 16;
        window.scrollTo({ top: Math.max(0, offset), behavior: scrollBehavior() });
      }
    }
  },
  syncWizardControls() {
    const w = Ops.wizard;
    if (!w) return;
    $$('.choice', this.root).forEach(label => label.classList.toggle('is-checked', Boolean($('input', label)?.checked)));
  },
  showWizardError(message) {
    const el = $('[data-wz-error]', this.root);
    if (!el) return;
    el.textContent = message;
    el.hidden = !message;
  },
  validate(f, w, step) {
    if (step === 1 && !w.type) return 'Choose what is happening to the flight.';
    if (step === 2) {
      if (!w.reason) return 'Choose a reason for the change.';
      if (w.type === 'RESCHEDULED') {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(w.date) || !/^\d{2}:\d{2}$/.test(w.time)) return 'Enter the new date and time.';
        if (`${w.date}T${w.time}` === String(f.departure || '').slice(0, 16)) return 'The new departure is the same as the current one. Pick a different time.';
      }
    }
    return '';
  },
  goStep(target) {
    const f = this.selected();
    const w = Ops.wizard;
    if (!f || !w || w.sending) return;
    for (let s = w.step; s < target; s += 1) {
      const problem = this.validate(f, w, s);
      if (problem) {
        w.error = problem;
        this.showWizardError(problem);
        return;
      }
    }
    w.error = '';
    w.step = Math.min(4, Math.max(1, target));
    w.maxStep = Math.max(w.maxStep, w.step);
    this.renderWizard(f, true);
  },
  async send() {
    const f = this.selected();
    const w = Ops.wizard;
    if (!f || !w || w.sending || w.flightId !== f.id) return;
    for (let s = 1; s < 4; s += 1) {
      const problem = this.validate(f, w, s);
      if (problem) {
        w.step = s;
        w.error = problem;
        this.renderWizard(f, true);
        this.showWizardError(problem);
        return;
      }
    }
    w.sending = true;
    w.slow = false;
    this.renderSendState(w, '');
    const startedAt = Date.now();
    const slowTimer = setTimeout(() => {
      if (Ops.wizard === w && w.sending) {
        w.slow = true;
        this.renderSendState(w, '');
      }
    }, CONFIG.slowNoticeMs);
    try {
      const res = await Api.sendUpdate(buildPayload(f, w, false));
      clearTimeout(slowTimer);
      if (!res.reference) throw new ApiError('Salesforce accepted the request but did not return a reference.', 0);
      const ref = res.reference;
      Ops.pending.set(f.id, { reference: ref, type: titleCase(res.type || w.type), status: 'Sent', reason: w.reason, at: Date.now() });
      Ops.marks.set(ref, { startedAt, steps: { sent: Math.max(0, Math.round((Date.now() - startedAt) / 1000)) } });
      Ops.progress.set(ref, {
        reference: ref,
        flight: res.flight || f.code,
        type: titleCase(res.type || w.type),
        status: 'Sent',
        customersAffected: num(res.customers, null),
        passengersAffected: num(res.passengers, null),
        customers: []
      });
      Ops.wizard = null;
      toast(`Salesforce accepted the update · reference ${ref}`);
      if (this.root) {
        this.renderList();
        this.renderKpis();
        if (Ops.selectedId === f.id) {
          this.renderDetail(true);
          $('#pv-title', this.root)?.focus({ preventScroll: true });
        }
      }
    } catch (err) {
      clearTimeout(slowTimer);
      w.sending = false;
      w.slow = false;
      if (err.status === 401) this.setConn('warn', 'Key not accepted');
      if (err.status === 409) {
        FlightStore.load(true).catch(() => {});
        setTimeout(() => FlightStore.load(true).catch(() => {}), 4000);
      }
      if (this.root && Ops.wizard === w && Ops.selectedId === f.id) {
        const extra = err.status === 401 ? ' Sign out and enter the current operations key.' : '';
        this.renderSendState(w, `${err.message}${extra}`);
      }
    }
  },
  renderSendState(w, error) {
    const root = this.root;
    if (!root) return;
    const btn = $('[data-send]', root);
    const hint = $('[data-send-hint]', root);
    const errEl = $('[data-send-error]', root);
    if (btn) {
      btn.disabled = w.sending;
      btn.classList.toggle('is-busy', w.sending);
      btn.setAttribute('aria-busy', String(w.sending));
      btn.innerHTML = w.sending ? '<span class="spinner" aria-hidden="true"></span>Sending to Salesforce' : `${icon('send')}Send to partners`;
    }
    if (hint) {
      hint.textContent = w.sending
        ? w.slow ? 'Still waiting for Salesforce. The demo org can take a few extra seconds to answer.' : 'Sending the update to Salesforce…'
        : 'Salesforce replies with a reference straight away, then rebooks customers in the background. You will watch it happen live here.';
    }
    if (errEl) {
      errEl.hidden = !error;
      errEl.innerHTML = error ? `${icon('alert')}<span>${esc(error)}</span>` : '';
    }
    $$('[data-wz-back], [data-goto]', root).forEach(el => {
      if (w.sending) el.disabled = true;
    });
    if (!w.sending) {
      $$('[data-wz-back]', root).forEach(el => {
        el.disabled = false;
      });
      $$('[data-goto]', root).forEach(el => {
        const n = Number(el.dataset.goto);
        el.disabled = !(n <= w.maxStep && n !== w.step);
      });
    }
  },
  progressShellHtml(f, ref) {
    const upd = effectiveUpdate(f);
    const reason = upd && upd.reason ? upd.reason : '';
    return `<section class="progress" aria-labelledby="pv-title">
      <div class="progress__head">
        <div>
          <p class="eyebrow">Live from Salesforce</p>
          <h3 class="progress__title" id="pv-title" tabindex="-1" data-pv-title>${esc(f.code)} update${reason ? ` <span>· ${esc(reason)}</span>` : ''}</h3>
          <p class="progress__ref">Reference <code class="ref-code">${esc(ref)}</code><button class="icon-btn" type="button" data-copy="${esc(ref)}" aria-label="Copy reference ${esc(ref)}">${icon('copy')}</button></p>
        </div>
        <span data-pv-status>${ustat(upd ? upd.status : 'sent')}</span>
      </div>
      <div data-pv-banner></div>
      <div class="progress__grid">
        <ol class="timeline" data-pv-timeline aria-label="Progress">
          ${PROGRESS_STEPS.map((step, i) => `<li class="tl" data-step="${step.id}"><span class="tl__icon" data-icon aria-hidden="true"><span class="tl__n">${i + 1}</span></span><div><p class="tl__title">${step.title}<span class="sr-only" data-sr>, waiting</span></p><p class="tl__detail" data-detail></p>${step.id === 'rebooking' ? '<div class="tl__bar" aria-hidden="true"><span data-bar></span></div>' : ''}</div><span class="tl__time" data-time></span></li>`).join('')}
        </ol>
        <div>
          <dl class="pstats" data-pv-stats></dl>
          <p class="watch-note" data-pv-note><span class="spinner" aria-hidden="true"></span>Loading the latest progress from Salesforce…</p>
        </div>
      </div>
      <div class="ctable-wrap">
        <div class="ctable-head"><h4>Aspire Lifestyles customers</h4><span data-pv-count></span></div>
        <div data-pv-table><p class="ctable-empty"><span class="spinner" aria-hidden="true"></span>Loading customers…</p></div>
      </div>
      <div class="progress__actions" data-pv-actions>${this.actionsHtml(f)}</div>
    </section>`;
  },
  onProgress(ref, data) {
    if (!this.root) return;
    const f = this.selected();
    if (!f || this.mode !== `progress:${ref}`) return;
    const pending = Ops.pending.get(f.id);
    if (pending && pending.reference === ref && lower(pending.status) !== lower(data.status)) {
      pending.status = data.status;
      this.renderList();
      this.renderKpis();
      this.renderDetail(false);
    }
    this.applyProgress(ref, data, f);
    if (isTerminal(data.status) && !this.refreshing) {
      this.refreshing = true;
      setTimeout(() => {
        this.refreshing = false;
        FlightStore.load(true).catch(() => {});
      }, 1200);
    }
  },
  onProgressError(ref, err) {
    if (!this.root || this.mode !== `progress:${ref}`) return;
    const note = $('[data-pv-note]', this.root);
    if (note) note.innerHTML = `<span class="live-dot live-dot--warn" aria-hidden="true"></span>${esc(err.message)} Retrying…`;
  },
  applyProgress(ref, data, f) {
    const root = this.root;
    const shell = $('.progress', root);
    if (!shell) return;
    const m = progressModel(data, f, ref);
    const marks = Ops.marks.get(ref);
    const statusKey = m.status === 'sent' ? 'sent' : m.status;
    patch($('[data-pv-status]', shell), ustat(statusKey));
    const typeWord = lower(data.type) || lower(effectiveUpdate(f)?.type);
    const reason = effectiveUpdate(f)?.reason || '';
    const title = `${esc(data.flight || f.code)} ${esc(typeWord || 'update')}${reason ? ` <span>· ${esc(reason)}</span>` : ''}`;
    patch($('[data-pv-title]', shell), title);
    PROGRESS_STEPS.forEach((step, i) => {
      const li = $(`[data-step="${step.id}"]`, shell);
      if (!li) return;
      const state = m.states[step.id];
      if (li.dataset.state !== state) {
        li.dataset.state = state;
        li.classList.toggle('is-done', state === 'done');
        li.classList.toggle('is-active', state === 'active');
        li.classList.toggle('is-failed', state === 'failed');
        const iconHost = $('[data-icon]', li);
        if (state === 'done') iconHost.innerHTML = icon('check', 'icon--check');
        else if (state === 'active') iconHost.innerHTML = '<span class="tl__pulse"></span>';
        else if (state === 'failed') iconHost.innerHTML = icon('close');
        else iconHost.innerHTML = `<span class="tl__n">${i + 1}</span>`;
        const sr = $('[data-sr]', li);
        if (sr) sr.textContent = { done: ', done', active: ', in progress', failed: ', failed', pending: ', waiting' }[state] || '';
        if (state === 'done' && marks && marks.steps[step.id] === undefined) marks.steps[step.id] = Math.max(0, Math.round((Date.now() - marks.startedAt) / 1000));
      }
      patch($('[data-detail]', li), m.details[step.id]);
      const time = marks && marks.steps[step.id] !== undefined ? `+${marks.steps[step.id]} s` : '';
      patch($('[data-time]', li), time);
    });
    const bar = $('[data-bar]', shell);
    if (bar) {
      const total = m.affected || 0;
      const pct = m.none || m.complete ? 100 : total ? Math.round((m.handled / total) * 100) : 0;
      bar.style.width = `${pct}%`;
    }
    const elapsed = m.elapsed !== null && m.started ? m.elapsed : marks ? Math.round((Date.now() - marks.startedAt) / 1000) : null;
    const affectedText = m.affected === null ? '–' : m.affected;
    patch($('[data-pv-stats]', shell), [
      ['Customers', affectedText, ''],
      ['Passengers', m.pax === null ? '–' : m.pax, ''],
      ['Notified', m.notified, m.affected ? ` / ${m.affected}` : ''],
      ['Protected', m.safe, m.affected ? ` / ${m.affected}` : '', 'good'],
      ['With a rep', m.withRep, '', 'rep'],
      ['Elapsed', elapsed === null ? '–' : elapsed, elapsed === null ? '' : ' s']
    ].map(([label, value, small, tone]) => `<div class="pstat${tone ? ` pstat--${tone}` : ''}"><dt>${label}</dt><dd>${esc(value)}${small ? `<small>${esc(small)}</small>` : ''}</dd></div>`).join(''));
    patch($('[data-pv-banner]', shell), bannerHtml(m));
    patch($('[data-pv-count]', shell), m.customers.length ? esc(`${plural(m.customers.length, 'customer')} · ${plural(m.customers.reduce((s, c) => s + num(c.party, 1), 0), 'passenger')}`) : '');
    this.renderTable(m);
    this.renderWatchNote(m);
    this.announceProgress(ref, m);
  },
  renderTable(m) {
    const host = $('[data-pv-table]', this.root);
    if (!host) return;
    if (!m.customers.length) {
      let text;
      if (m.none) text = 'No Aspire Lifestyles customers were booked on this flight.';
      else if (m.failed) text = 'No customers were processed.';
      else if (m.reset) text = 'Customer records were cleared by the reset.';
      else text = m.started ? 'Salesforce is identifying the affected customers…' : 'Waiting for Salesforce to pick up the update…';
      const busy = !m.none && !m.failed && !m.reset && !m.complete;
      patch(host, `<p class="ctable-empty">${busy ? '<span class="spinner" aria-hidden="true"></span>' : ''}${esc(text)}</p>`);
      this.rowSigs = new Map();
      return;
    }
    const seen = new Map();
    const rows = m.customers.map((c, i) => {
      const key = `${i}:${c.name || ''}`;
      const sig = [c.status, c.newFlight, c.newDeparture, c.seats, c.seconds, c.notified].join('|');
      const before = this.rowSigs.get(key);
      seen.set(key, sig);
      const cls = before === undefined ? 'is-new' : before !== sig ? 'is-changed' : '';
      return customerRow(c, key, cls);
    }).join('');
    const changed = [...seen.entries()].some(([k, v]) => this.rowSigs.get(k) !== v) || seen.size !== this.rowSigs.size;
    if (changed || !$('table', host)) {
      host.innerHTML = `<table class="ctable"><caption class="sr-only">Affected Aspire Lifestyles customers and their rebooking status</caption><thead><tr><th scope="col">Customer</th><th scope="col">Party</th><th scope="col">Status</th><th scope="col">New flight</th><th scope="col">New departure</th><th scope="col">Seats</th><th scope="col">Time</th></tr></thead><tbody>${rows}</tbody></table>`;
      host.vnHtml = '';
    }
    this.rowSigs = seen;
  },
  renderWatchNote(model) {
    const note = $('[data-pv-note]', this.root);
    if (!note || !this.mode.startsWith('progress:')) return;
    const ref = this.mode.slice(9);
    const data = Ops.progress.get(ref);
    const m = model || (data ? progressModel(data, this.selected(), ref) : null);
    let html;
    if (m && (m.complete || m.failed || m.reset)) {
      html = `${icon('check')}Finished${m.elapsed ? ` · Salesforce took ${m.elapsed} s in total` : ''}`;
    } else if (Tracker.ref === ref && Tracker.done) {
      html = `${icon('info')}Stopped watching after 15 minutes. Select the flight again to check.`;
    } else if (document.hidden) {
      html = `${icon('clock')}Paused while this tab is in the background`;
    } else {
      const marks = Ops.marks.get(ref);
      const waiting = m && !m.started && marks && Date.now() - marks.startedAt > CONFIG.sentHintMs;
      html = waiting
        ? `<span class="live-dot live-dot--warn" aria-hidden="true"></span>Salesforce has not picked up the update yet. Platform events can take a little longer on a developer org.`
        : '<span class="live-dot" aria-hidden="true"></span>Watching live · checks every 2.5 seconds';
    }
    patch(note, html);
  },
  announceProgress(ref, m) {
    const last = Ops.announced.get(ref) || {};
    const next = { status: m.status, safe: m.safe, identified: m.states.identified };
    if (last.status === next.status && last.safe === next.safe && last.identified === next.identified) return;
    Ops.announced.set(ref, next);
    if (!last.status) return;
    if (m.complete) announce(m.none ? 'Update recorded. No Aspire Lifestyles customers were affected.' : `Completed. ${plural(m.safe, 'customer')} protected in ${m.seconds} seconds.`);
    else if (m.failed) announce(`Salesforce could not complete the update. ${m.error}`);
    else if (m.reset) announce('This update was reset.');
    else if (last.safe !== next.safe && m.affected) announce(`${m.safe} of ${m.affected} customers protected.`);
    else if (last.identified !== 'done' && next.identified === 'done' && m.affected) announce(`${plural(m.affected, 'customer')} identified.`);
  },
  async doReset(f) {
    const upd = effectiveUpdate(f);
    const ref = upd && upd.reference ? upd.reference : '';
    Ops.resetState = { flightId: f.id, phase: 'running', reference: ref };
    Tracker.stop();
    this.renderDetail(true);
    try {
      const body = { apiKey: Ops.key, flightId: f.id };
      if (ref) body.reference = ref;
      await Api.reset(body);
      announce(`Reset sent for ${f.code}. Restoring the flight.`);
      await sleep(CONFIG.resetSettleMs);
      for (let i = 0; i < CONFIG.resetChecks; i += 1) {
        await FlightStore.load(true).catch(() => null);
        const now = FlightStore.byId(f.id);
        if (now && !now.update && flightState(now).key !== 'cancelled') break;
        await sleep(CONFIG.resetCheckMs);
      }
      Ops.pending.delete(f.id);
      if (ref) {
        Ops.progress.delete(ref);
        Ops.marks.delete(ref);
        Ops.announced.delete(ref);
      }
      Ops.resetState = null;
      if (Ops.wizard && Ops.wizard.flightId === f.id) Ops.wizard = null;
      toast(`${f.code} is restored and ready for the next demo.`);
    } catch (err) {
      Ops.resetState = { flightId: f.id, phase: 'error', reference: ref, error: err.message };
      if (err.status === 401) this.setConn('warn', 'Key not accepted');
    }
    if (this.root) {
      this.renderKpis();
      this.renderList();
      if (Ops.selectedId === f.id) {
        this.renderDetail(true);
        $('#fd-title', this.root)?.focus({ preventScroll: true });
      }
    }
  },
  onClick(event) {
    const target = event.target;
    const item = target.closest('[data-flight]');
    if (item) {
      this.select(item.dataset.flight, true);
      return;
    }
    const filterBtn = target.closest('[data-ops-filter] [data-value]');
    if (filterBtn) {
      Ops.filter = filterBtn.dataset.value;
      $$('[data-ops-filter] [data-value]', this.root).forEach(b => b.setAttribute('aria-pressed', String(b === filterBtn)));
      this.renderList();
      return;
    }
    if (target.closest('[data-back]')) {
      this.backToList();
      return;
    }
    if (target.closest('[data-pick-another]')) {
      this.backToList();
      return;
    }
    const goto = target.closest('[data-goto]');
    if (goto) {
      this.goStep(Number(goto.dataset.goto));
      return;
    }
    if (target.closest('[data-wz-next]')) {
      if (Ops.wizard) this.goStep(Ops.wizard.step + 1);
      return;
    }
    if (target.closest('[data-wz-back]')) {
      if (Ops.wizard) this.goStep(Ops.wizard.step - 1);
      return;
    }
    if (target.closest('[data-send]')) {
      this.send();
      return;
    }
    const copy = target.closest('[data-copy]');
    if (copy) {
      copyText(copy.dataset.copy, 'Reference');
      return;
    }
    const f = this.selected();
    if (target.closest('[data-reset-ask]') && f) {
      Ops.resetState = { flightId: f.id, phase: 'confirm' };
      this.renderActions(f, '[data-reset-go]');
      return;
    }
    if (target.closest('[data-reset-go]') && f) {
      this.doReset(f);
      return;
    }
    if (target.closest('[data-reset-cancel]') && f) {
      const wasError = Ops.resetState && Ops.resetState.phase === 'error';
      Ops.resetState = null;
      if (wasError) this.renderDetail(true);
      else this.renderActions(f, '[data-reset-ask]');
      return;
    }
    if (target.closest('[data-ops-refresh]')) {
      FlightStore.load(true).catch(() => {});
      if (Tracker.ref) Tracker.resume();
      if (!this.verified) this.verifyKey();
      return;
    }
    if (target.closest('[data-signout]')) this.signOut();
  },
  onChange(event) {
    const el = event.target;
    const w = Ops.wizard;
    if (!w) return;
    if (el.name === 'wz-type') {
      if (w.type !== el.value) {
        w.type = el.value;
        w.maxStep = 1;
      }
      w.error = '';
      this.showWizardError('');
      this.syncWizardControls();
      $$('[data-goto]', this.root).forEach(btn => {
        const n = Number(btn.dataset.goto);
        btn.disabled = !(n <= w.maxStep && n !== w.step);
      });
    } else if (el.name === 'wz-reason') {
      w.reason = el.value;
      w.error = '';
      this.showWizardError('');
    } else if (el.id === 'wz-date' || el.id === 'wz-time') {
      this.readSchedule();
    }
  },
  onInput(event) {
    const el = event.target;
    if (el.id === 'ops-q') {
      clearTimeout(this.typing);
      this.typing = setTimeout(() => {
        Ops.query = el.value.trim();
        this.renderList();
      }, 150);
      return;
    }
    const w = Ops.wizard;
    const f = this.selected();
    if (!w || !f) return;
    if (el.id === 'wz-delay') {
      w.delay = Math.min(600, Math.max(30, Number(el.value) || 120));
      el.style.setProperty('--fill', `${(((w.delay - 30) / 570) * 100).toFixed(1)}%`);
      el.setAttribute('aria-valuetext', durationWords(w.delay));
      const out = $('[data-delay-out]', this.root);
      if (out) out.textContent = durationLabel(w.delay);
      const preview = $('[data-when-preview]', this.root);
      if (preview) preview.innerHTML = whenPreviewHtml(f, w);
    } else if (el.id === 'wz-date' || el.id === 'wz-time') {
      this.readSchedule();
    }
  },
  readSchedule() {
    const w = Ops.wizard;
    const f = this.selected();
    if (!w || !f) return;
    w.date = $('#wz-date', this.root)?.value || '';
    w.time = ($('#wz-time', this.root)?.value || '').slice(0, 5);
    w.error = '';
    this.showWizardError('');
    const preview = $('[data-when-preview]', this.root);
    if (preview) preview.innerHTML = whenPreviewHtml(f, w);
  },
  onListKey(event) {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    const items = $$('[data-flight]', this.root);
    const index = items.indexOf(document.activeElement);
    if (index === -1) return;
    event.preventDefault();
    let next = index;
    if (event.key === 'ArrowDown') next = Math.min(items.length - 1, index + 1);
    if (event.key === 'ArrowUp') next = Math.max(0, index - 1);
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = items.length - 1;
    items[next].focus();
    items[next].scrollIntoView({ block: 'nearest' });
  },
  onVisibility() {
    if (this.root && this.mode.startsWith('progress:')) this.renderWatchNote();
  }
};

const VIEWS = { home: HomeView, status: StatusView, ops: OpsView };
const ROUTES = { '': 'home', book: 'home', destinations: 'home', alerts: 'home', rebooking: 'home', status: 'status', ops: 'ops' };

const Router = {
  current: null,
  first: true,
  start() {
    window.addEventListener('hashchange', () => this.resolve());
    this.resolve();
  },
  parse() {
    const hash = location.hash || '#/';
    if (!hash.startsWith('#/')) return null;
    const [path, query = ''] = hash.slice(2).split('?');
    const seg = (path.split('/')[0] || '').toLowerCase();
    return { seg, name: ROUTES[seg], params: new URLSearchParams(query) };
  },
  resolve() {
    let ctx = this.parse();
    if (!ctx) {
      if (this.current) return;
      ctx = { seg: '', name: 'home', params: new URLSearchParams() };
    }
    if (!ctx.name) {
      history.replaceState(null, '', '#/');
      ctx = { seg: '', name: 'home', params: new URLSearchParams() };
    }
    const view = VIEWS[ctx.name];
    Header.setOpen(false);
    if (this.current === view && view.update) {
      view.update(ctx);
      Header.setActive(view.navKey(ctx));
      return;
    }
    if (this.current && this.current.unmount) this.current.unmount();
    this.current = view;
    document.body.dataset.route = ctx.name;
    Header.setTheme(view.theme);
    Header.setActive(view.navKey(ctx));
    const main = $('#main');
    main.innerHTML = view.render(ctx);
    document.title = view.title;
    if (!HOME_SECTIONS[ctx.seg]) window.scrollTo(0, 0);
    view.mount(ctx);
    if (!this.first && view.focusTarget) {
      const target = view.focusTarget(ctx);
      if (target) target.focus({ preventScroll: true });
    }
    this.first = false;
  }
};

function init() {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  Header.init();
  $('[data-skip]').addEventListener('click', event => {
    event.preventDefault();
    const target = $('#main h1') || $('#main');
    target.focus();
    target.scrollIntoView({ block: 'start' });
  });
  FlightStore.subscribe(() => {
    Header.setAlerts(FlightStore.loaded ? travelAlerts(FlightStore.flights).length : 0);
    if (Live.active) Live.schedule();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      Tracker.pause();
      Live.pause();
    } else {
      Tracker.resume();
      Live.schedule();
    }
    OpsView.onVisibility();
  });
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#/"]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (link.getAttribute('href') === location.hash) {
      event.preventDefault();
      Router.resolve();
    }
  });
  Router.start();
  FlightStore.load().catch(() => {});
}

init();
