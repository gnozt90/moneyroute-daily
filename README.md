# MoneyRoute Daily

A static Cloudflare Pages-ready landing page for a Singapore-focused daily money route newsletter.

## Business model

The page is built around a realistic path to an eventual S$20/day target:

- Grow a daily alert list for Singapore travellers, freelancers and online shoppers.
- Publish one practical recommendation per day across Wise, Revolut, YouTrip and Instarem Amaze.
- Replace the default provider URLs with approved referral or affiliate links.
- Add a paid alert or sponsor slot once traffic exists.
- Receive affiliate, sponsor or payment-processor payouts to the supported bank account or wallet, then move funds to Wise or Revolut where available.

This site should not store customer funds or act as a payment institution.

## Local preview

```bash
python3 -m http.server 5173
```

Then open `http://localhost:5173`.

## Deploy to Cloudflare Pages

Use the project root as the Pages output directory. No build command is required.

Suggested settings:

- Framework preset: None
- Build command: empty
- Output directory: `/`
- Production branch: `main`

## Next production steps

1. Buy a domain or use the default Cloudflare Pages subdomain.
2. Replace all provider URLs with approved affiliate/referral links.
3. Connect the signup form to a real backend, for example Cloudflare Workers + D1, Beehiiv, ConvertKit or Telegram bot.
4. Add a disclosure page and privacy policy before running paid traffic.
5. Track clicks with privacy-friendly analytics.
