# Academic Services Platform - TODO

## Core Features

### Landing Page Sections
- [x] Hero section with headline, subtext, CTAs, and animated gradient background
- [x] Animated marquee ticker with domain tags
- [x] Services grid (6 cards with icons, descriptions, pricing hints)
- [x] How It Works timeline (4 steps with connector animation)
- [x] Pricing cards (3 tiers with features)
- [x] Testimonials carousel (3 cards)

### Navigation & Layout
- [x] Sticky navbar (logo, nav links, CTA button)
- [x] Smooth scroll navigation to sections
- [x] Mobile hamburger menu
- [x] Footer with contact info and links

### Order Management
- [x] Multi-step order submission drawer (4 steps)
  - [x] Step 1: Service type selection
  - [x] Step 2: Project details (title, deadline, description, university)
  - [x] Step 3: Contact information (name, WhatsApp, email)
  - [x] Step 4: Review & confirm
- [x] File upload with drag-drop support (max 5 files, 10MB each)
- [x] Order tracking modal (order ID + email lookup)
- [x] Order status timeline display

### Backend API (tRPC)
- [x] POST /api/trpc/orders.create - Submit new order with files
- [x] GET /api/trpc/orders.track - Retrieve order status by ID
- [x] GET /api/trpc/orders.list - List all orders (admin)
- [x] PATCH /api/trpc/orders.updateStatus - Update order status (admin)
- [x] Database schema: orders table with all required fields

### File Storage
- [ ] S3 integration for file uploads
- [ ] File validation (format, size)
- [ ] Secure file URL generation

### Admin Dashboard
- [x] Admin-only page to view all orders
- [x] Order status update functionality
- [x] Order detail view with attachments
- [x] Pagination and filtering

### Notifications & Validation
- [ ] Owner notification on new order submission
- [ ] Client-side form validation on all forms
- [ ] Inline field-level error messages
- [ ] Success/error toast notifications

### Design System & Styling
- [x] Dark SaaS color palette (custom CSS)
- [x] Typography system (Syne for headers, DM Sans for UI)
- [x] Custom cursor (8px dot + 32px ring)
- [x] Grain texture overlay
- [x] Glassmorphism cards
- [x] Micro-interactions (hover states, scale effects)
- [x] Responsive design (375px, 768px, 1280px, 1440px)

### Testing & Polish
- [ ] Vitest unit tests for critical functions
- [ ] Mobile responsiveness verification
- [ ] Cross-browser testing
- [ ] Performance optimization
- [ ] Accessibility review

## Implementation Progress

### Phase 1: Design System & Layout ✅
- [x] Global CSS variables and theme
- [x] Navbar component
- [x] Footer component
- [x] Custom cursor styling
- [x] Grain texture overlay

### Phase 2: Landing Page Sections ✅
- [x] Hero section
- [x] Marquee ticker
- [x] Services grid
- [x] How It Works timeline
- [x] Pricing cards
- [x] Testimonials carousel

### Phase 3: Order Management UI ✅
- [x] Order submission drawer
- [x] File upload component
- [x] Order tracking modal

### Phase 4: Backend Implementation ✅
- [x] Database schema
- [x] tRPC procedures
- [x] File upload handling
- [x] Notifications

### Phase 5: Admin Dashboard ✅
- [x] Admin page layout
- [x] Orders table
- [x] Status update UI

### Phase 6: Integration & Testing ⏳
- [x] Wire frontend to backend
- [x] Form validation
- [x] Error handling
- [ ] Testing

### Phase 7: Final Polish ⏳
- [ ] Performance optimization
- [ ] Mobile testing
- [ ] Bug fixes
- [ ] Documentation
