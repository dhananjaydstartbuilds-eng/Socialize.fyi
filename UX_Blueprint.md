# Socialize.fyi - UX Design Blueprint

This blueprint outlines the detailed UX structures for the remaining core screens of **Socialize.fyi**, ensuring it meets the standards of a modern, premium SaaS product (inspired by Linear, Vercel, and Notion). 

The design emphasizes minimalism, high signal-to-noise ratio, focused content cards, and the "Hub" principle where all distribution leads back to one central record.

---

## 1. Hub List Page

* **Page Goal:** A master inventory where users can view, filter, and access all their living post hubs. It serves as the primary navigation anchor after the dashboard.
* **Layout Structure:** 
  * **Top Header:** Breadcrumbs or Title ("All Hubs"), Create CTA button.
  * **Sub-header:** Search bar, filter dropdowns, and view toggles (Grid/List).
  * **Main Content:** A dense, clean grid of Hub Cards or a streamlined data table.
* **UI Components:** 
  * Header & Navigation Tabs (All, Active, Drafts).
  * Search Input (with `⌘K` support for fast access).
  * Hub Cards: Minimal cards showing title, creation date, a cluster of platform icons indicating generated variants, and a top-level engagement stat.
* **Form Fields:** 
  * Search Input (`text`).
  * Filter by Platform (`multi-select dropdown`).
  * Sort by (`dropdown`: Newest, Most Engagement).
* **User Actions:** Click to open Hub, Hover to see quick actions (Copy URL, Delete), Search hubs, Filter hubs, Create new master post.
* **Microcopy:** "Your Hubs", "Manage and track all your ideas in one place.", "Search hubs...", "+ New Hub".
* **Example UI Data:** "3 AI Tools Every Small Business Should Know", Created Mar 16, Icons: [LinkedIn, X], 1.2k total views.
* **Empty States:** A sleek, minimal illustration of a folder or hub. "No hubs created yet. Start a new idea to bring it to life." -> Button: `Create Master Post`.
* **Error States:** A subtle inline banner: "Unable to load your hubs. Please refresh the page."

---

## 2. Distribution Pack Review Page

* **Page Goal:** Allow users to seamlessly review, edit, or copy the platform-specific variants generated from their master post before finalizing.
* **Layout Structure:** 
  * **Left Column (30%):** Sticky reference of the "Original Idea" and Tone settings.
  * **Right Column (70%):** A vertical stack or masonry grid of "Variant Cards", sorted by platform.
* **UI Components:** 
  * Original Context Panel (read-only text block with subtle styling).
  * Variant Cards: Clean, card-based interface containing a platform logo, the generated text, character count, and action buttons footer.
  * Global Action Bar (Sticky bottom): `Save All to Hub`, `Discard`.
* **Form Fields:** None actively, until a user clicks "Edit" on a variant card (temporarily changes to a `textarea`).
* **User Actions:** Copy to clipboard, Edit variant inline, Regenerate specific variant, Save pack, Discard pack.
* **Microcopy:** "Review Distribution Pack", "Generated for 4 platforms.", "Copy", "Regenerate", "Looks good. Save to Hub ->".
* **Example UI Data:** Platform: "LinkedIn", Content: "Stop wasting time on manual tasks. Here's a system that saves me 10 hours a week...", Word count: 68 words.
* **Empty States:** N/A (this page is only accessed when a generation successfully returns content).
* **Error States:** Skeleton loaders if AI is still "typing". If AI fails: "We couldn't generate the LinkedIn variant. [Retry]" inline on the specific card, instead of breaking the whole page.

---

## 3. Variant Editor Page

* **Page Goal:** A focused, distraction-free modal or sub-page to manually tweak an AI-generated variant for a specific platform.
* **Layout Structure:** Full-screen modal or split-pane view to maintain context without navigating entirely away from the pack.
* **UI Components:** 
  * Platform Header (e.g., X Icon + "Edit X Thread").
  * Monospaced or clean Sans-serif Text Editor.
  * Live Character/Token Counter (changes color to Red when nearing platform limits).
  * AI quick-assist buttons ("Make it punchier", "Shorten").
* **Form Fields:** 
  * Huge, borderless `textarea` that auto-expands.
* **User Actions:** Type text, Apply AI quick-edits, Save changes, Cancel.
* **Microcopy:** "Editing X Thread", "Make it your own.", "Cancel", "Save Variant".
* **Example UI Data:** Pre-filled text from the AI generation. Character count reading "210 / 280".
* **Empty States:** N/A (editor is always pre-filled with the drafted baseline).
* **Error States:** "Failed to save variant. Keep your text copied just in case." (Display as a non-intrusive toast).

---

## 4. Add Outbound Link Modal

* **Page Goal:** A low-friction way for users to attach the live, published URL of their post (from LinkedIn, X, etc.) back to the central Hub.
* **Layout Structure:** A crisp, center-aligned modal spanning no wider than `max-w-md`. Overlaying the Hub page with a blurred background (`backdrop-blur`).
* **UI Components:** 
  * Simple Header.
  * Select Platform Toggle (if attaching generally) or pre-selected context (if clicking from a variant).
  * Input field with clear focus states (ring:violet-500).
  * Action Buttons (Secondary: Cancel, Primary: Save Link).
* **Form Fields:** 
  * Platform (`select`).
  * Post URL (`url` input).
* **User Actions:** Paste URL, select platform, press Enter (or click Save), close via `Esc`.
* **Microcopy:** "Add Live Post Link", "Paste the published URL so you can easily track it later.", "https://linkedin.com/post/...", "Save Link".
* **Example UI Data:** Platform: X, URL: `https://x.com/user/status/12345...`
* **Empty States:** N/A.
* **Error States:** Inline red validation text under the input field: "Please enter a valid URL." or "This link doesn't look like a valid X URL."

---

## 5. Boost Results Page

* **Page Goal:** Show the user the results of an AI "Boost" action (e.g., 5 stronger hooks, follow-up post, smart replies) directly on the Hub.
* **Layout Structure:** A slide-over panel (Drawer) coming from the right side of the Hub page, ensuring the user doesn't lose the Hub context.
* **UI Components:** 
  * Drawer Header with close (`X`) button.
  * Context Title ("Stronger Hooks").
  * A vertical list of "Output Cards". Each card holds one generated option.
  * Copy icon button overlaying each card on hover.
* **Form Fields:** None. View and copy only.
* **User Actions:** Read outputs, Hover to reveal copy button, Click to copy, Close drawer.
* **Microcopy:** "Boost Results", "Here are 5 alternative hooks based on your original idea.", "Copied!".
* **Example UI Data:** 
  * Output 1: "Tired of generic AI content? Try this instead."
  * Output 2: "I analyzed 100 viral posts. Here is the 1 thing they have in common."
* **Empty States:** Loading skeletons mimicking the shape of the text cards while the AI is computing.
* **Error States:** A warning panel inside the drawer: "Optimization failed. Let's try regenerating." -> `[Regenerate Button]`.

---

## 6. Profile Settings

* **Page Goal:** Manage user identity, preferences, and system settings in a familiar, standardized interface.
* **Layout Structure:** Desktop: Left navigation rail mapped to content sections, Right side main content area. Mobile: Stack column.
* **UI Components:** 
  * Sidebar nav (General, Preferences, Danger Zone).
  * Content Cards for each grouping (e.g., "Account Information").
  * Input groups with labels on top.
  * Subtle dividers between sections.
* **Form Fields:** 
  * Full Name (`text`).
  * Email (`email` - disabled/read-only if managed by OAuth).
  * Theme Toggle (`radio` or `select`: Light, Dark, System).
* **User Actions:** Update name, Change appearance, Sign out, Delete account.
* **Microcopy:** "Profile Settings", "Update your personal details.", "Sign Out", "Delete Account" (with a confirmation modal).
* **Example UI Data:** User: "Jane Doe", Email: "jane@socialize.fyi".
* **Empty States:** N/A.
* **Error States:** Toast notification: "Could not save profile changes." Field validation: "Name cannot be empty."

---

## 7. Global Empty States

* **Page Goal:** Keep the interface feeling intentional and premium even when there is no user data, acting as a soft onboarding step.
* **Layout Structure:** Absolute or flex-centered inside the parent container (e.g., inside an empty metrics table, or an empty variant list).
* **UI Components:** 
  * High-quality, monochrome or duotone abstract icon (Feather/Lucide icons scaled up).
  * Clean, medium-weight heading.
  * Muted, informative subtext.
  * Call-to-action button (Ghost or Primary depending on importance).
* **User Actions:** Read instruction, click CTA to populate data.
* **Microcopy / Contexts:** 
  * *Metrics:* "No engagement tracked yet. Add your live links to start compounding your data."
  * *Outbound Links:* "You haven't posted this anywhere yet. Get it out there and paste the links here."
* **Example UI Data:** An icon of an empty chart.
* **Error States:** N/A.

---

## 8. Global Error States

* **Page Goal:** Handle system failures gracefully without frustrating the user, maintaining the aesthetic of the app.
* **Layout Structure:** 
  * Form/Network errors: Inline toasts (bottom right) or top-banner alerts.
  * Full page crashes (404 / 500): Minimal centered error page layout.
* **UI Components:** 
  * Icon (Alert Triangle, lightly tinted red `#EF4444` or orange `#F59E0B`).
  * Primary error message.
  * Technical/Secondary detail (collapsible or muted).
  * Action Buttons (Go Back, Retry, Go to Dashboard).
* **User Actions:** Retry the failed action, navigate safely back to home.
* **Microcopy:** 
  * *404:* "We couldn't find that Hub. It might have been deleted."
  * *500:* "Something broke on our end. Your previous data is safe."
  * *Action Failed (Toast):* "Action failed: AI took too long to respond. Please Retry."
* **Example UI Data:** A minimalist "404" graphic, Button: `Return to Dashboard`.
