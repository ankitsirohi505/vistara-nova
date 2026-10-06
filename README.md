# Vistara Nova

Vistara Nova is a fictional airline website built as the demo front end for a Salesforce use case. An airline operations user cancels, delays or reschedules a flight on the Operations Control page, the update is sent to a Salesforce Apex REST API, and Salesforce automatically rebooks the affected Aspire Lifestyles customers while this page shows the progress live.

Vistara Nova is a fictional airline created for a Salesforce demo. It is not affiliated with any real airline. Flights shown are demo records from Salesforce.

Live site (once published): https://ankitsirohi505.github.io/vistara-nova/

## Pages

The site is a single page app with hash routes, so it works on GitHub Pages without any server configuration.

| Route | What it shows |
| --- | --- |
| `#/` | Home: hero, flight search (From, To, Date, Passengers), travel alerts built from cancelled or rescheduled flights, featured destinations built from the routes in the data, "Why fly Vistara Nova", disruption care, partners, app promo and footer. |
| `#/book`, `#/destinations`, `#/alerts`, `#/rebooking` | Home, scrolled to that section. |
| `#/status` | Live flight status board. Search by flight number, city or route (for example `NV701`, `Dubai`, `JFK-DXB` or `New York to Dubai`), filter by date chips, airline and status. Accepts `q`, `from`, `to`, `date`, `pax`, `op` and `st` query parameters, for example `#/status?from=JFK&to=DXB&date=2026-12-20`. Refreshes every 60 seconds while the tab is visible. |
| `#/ops` | Operations Control, the star of the demo. Gated by the operations key. `#/ops?flight=<Salesforce Id>` opens a flight directly. |

### Operations Control

1. Enter the operations key once. It is checked with `POST /verify` and remembered in this browser (`localStorage` key `vn.opsKey`). Use **Sign out** to forget it.
2. The left board lists flights with Aspire Lifestyles passengers by default (customer and passenger badges, flight status and any airline update status). Switch to **All flights** or filter by flight, city, airline or date.
3. Pick a flight and use **Disrupt this flight**:
   - Step 1: Cancel, Delay or Reschedule.
   - Step 2: Reason (Weather, Crew availability, Technical, Air traffic control, Airport operations), plus a delay slider (30 to 600 minutes) or a new date and time.
   - Step 3: Impact preview (Aspire Lifestyles customers and passengers, partner notified "Aspire Lifestyles via Salesforce") and the JSON payload with the key hidden.
   - Step 4: **Send to partners**.
4. The live timeline (Update sent, Received by Salesforce, Customers identified, Notifications sent, Rebooking each customer, Done) and the customer table are driven by `GET /updates/{reference}` every 2.5 seconds until the update is Completed or Failed. Polling pauses while the tab is hidden and stops when the update finishes.
5. When it finishes, a banner shows the result, for example "6 customers protected in 41 seconds".
6. **Reset flight** calls `POST /reset`, waits a few seconds and refreshes, so the demo can be repeated.

## The operations key

The key lives in Salesforce, not in this repository. Set it under **Setup > Custom Settings > Vistara Nova Settings** (the organisation default value of the API key field), then type it once on the Ops page. If the key is missing in Salesforce the API answers 503 and the page shows that message; a wrong key answers 401.

## API

Salesforce public Apex REST, set as the `BASE` constant at the top of `assets/site.js`:

```
https://orgfarm-e88355df2d-dev-ed.develop.my.site.com/vistaranovavforcesite/services/apexrest/vistaraNova
```

| Call | Used for |
| --- | --- |
| `GET /flights` | Status board, home alerts and destinations, ops board. |
| `POST /verify` `{apiKey}` | Unlocking Operations Control. |
| `POST /updates` `{apiKey, flightId, type, reason, newDeparture or delayMinutes}` | Sending a cancellation, delay or reschedule. |
| `GET /updates/{reference}` | Live progress. |
| `POST /reset` `{apiKey, reference, flightId}` | Restoring a flight after the demo. |

Notes for anyone changing the code:

- Every request uses `referrerPolicy: 'no-referrer'` and `cache: 'no-store'`, and the page has `<meta name="referrer" content="no-referrer">`. The Salesforce edge holds requests to developer-edition sites that carry a `Referer` header, which makes the page look frozen.
- POST bodies are JSON sent as `text/plain`, so the browser makes a simple request with no CORS preflight.
- CORS on the Salesforce site only allows `https://ankitsirohi505.github.io`, so live data does not load from `localhost` or `file://`. To test locally, serve a copy with `BASE` pointed at a mock.
- Flight times are local wall-clock values. The page shows the provided text fields (`departureText`, `arrivalText`, `newDeparture`) or reads `YYYY-MM-DDTHH:mm` by hand. It never converts them between time zones.
- Error responses (`{error}` with 400, 401, 404, 409 or 503) are shown to the user as returned.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page shell: header, main view, footer with the demo notice. |
| `assets/site.css` | All styles. Midnight navy, aurora teal and warm coral palette; light public pages and a dark operations console. |
| `assets/site.js` | Router, API client, flight store, and the Home, Flight status and Operations Control views. |
| `assets/logo.svg` | Logo mark: a nova star rising over a coral wing. |
| `assets/favicon.svg` | Favicon. |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are. |

No framework, no build step and no dependencies. Fonts come from Google Fonts (Fraunces, Manrope and JetBrains Mono) and photos from Unsplash.

## Publishing

Push this folder to the `vistara-nova` repository and enable GitHub Pages on the `main` branch (root folder). The site then runs at https://ankitsirohi505.github.io/vistara-nova/. After changing CSS or JS, bump the `?v=` value on the two asset links in `index.html` so browsers pick up the new files.

## Brand

Vistara Nova is an original, fictional brand. It does not use the colours, logo or slogans of the former Indian airline Vistara or of any other airline. Real airline names appear only as plain text on partner flights ("Operated by ...").
