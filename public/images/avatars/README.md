# Do not use these avatars

`avatar-maria.jpg`, `avatar-ion.jpg`, `avatar-andrei.jpg` are **synthetic
headshots** — generated or heavily-retouched stock. Flat studio backdrop,
flawless skin, generic corporate pose, no visible context.

They are currently referenced nowhere in `src/`. Keep it that way.

Two reasons:

1. **They work against the stated design direction.** The site is being moved
   away from a machine-generated look toward something authentic and
   human-centered. Synthetic faces are the single fastest way to undo that —
   readers recognise them, and one fake face discredits the real material
   around it.
2. **Attached to a named testimonial, they stop being an aesthetic problem
   and become an honesty one.** A quote credited to a person who does not
   exist is a false claim about a customer.

If you need faces on the site, use photographs of real people who have agreed
to appear — your own team, or customers with permission. If that is not
available yet, use no faces at all. The customer logo strip
(`src/components/CustomerLogos.astro`) carries real social proof from the
eight genuine customer logos in `public/images/companies/` and needs no
portraits to work.
