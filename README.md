# Domain Portfolio

A professional domain marketplace platform offering comprehensive domain management and advanced valuation tools with intelligent automation and user-centric design.

## Features

### Core Domain Management
- **Domain Portfolio Management** - Add, edit, view, and organize domain inventory
- **Category System** - Organize domains by business categories
- **Status Management** - Track domains as "For Sale", "Not For Sale", "Reserved", "Expired", or "Sold"
- **Featured Listings** - Highlight premium domains for increased visibility

### Financial Tracking & Analytics
- **Purchase Tracking** - Record purchase date, price, and source
- **Current Valuation** - Track real-time domain values
- **Cost Management** - Monitor renewal costs and additional expenses
- **Profit Analysis** - Calculate value changes and profitability
- **Sales History** - Record completed sales with buyer information
- **Revenue Analytics** - Monthly revenue tracking and financial reporting

### Domain Intelligence & Data
- **WHOIS Integration** - Real-time domain registration data lookup
- **Hosting Detection** - Identify hosting providers and IP information
- **Domain Valuation** - Automated valuation using external APIs
- **Backlink Analysis** - Track domain authority and backlink profiles
- **Age Calculation** - Automatically calculate domain age from registration data

### Analytics & Visitor Tracking
- **Page View Analytics** - Track domain landing page visits
- **Visitor Analytics** - Monitor unique visitors and repeat visits
- **Referrer Tracking** - Identify traffic sources
- **Inquiry Management** - Track potential buyer interest
- **Traffic Patterns** - Daily and temporal traffic analysis

## Technology Stack

### Frontend
- React.js with TypeScript
- Tailwind CSS for styling
- Shadcn/ui component library
- Wouter for routing
- TanStack Query for data fetching

### Backend Options
- **Node.js/Express** - Original implementation with comprehensive API
- **Django** - Professional backend with REST API and admin interface

### Database
- PostgreSQL with comprehensive domain tracking
- Drizzle ORM for type-safe database operations

### External Integrations
- Dynadot API for domain valuations
- WHOIS lookup services
- Hosting provider detection APIs

## Getting Started

### Prerequisites
- Node.js 18+ or Python 3.11+
- PostgreSQL database
- Environment variables for external APIs

### Installation

1. Clone the repository:
```bash
git clone https://github.com/milesify/domainportfolio.git
cd domainportfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Configure your DATABASE_URL and API keys
```

4. Run database migrations:
```bash
npm run db:push
```

5. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Public Endpoints
- `GET /api/domains` - List public domain listings
- `GET /api/categories` - Domain categories
- `GET /api/whois/:domain` - WHOIS lookup
- `GET /api/valuation/:domain` - Domain valuation

### Admin Endpoints
- `GET /api/admin/domains` - Full domain management
- `GET /api/admin/stats` - Dashboard statistics
- `POST /api/auth/login` - User authentication

## License

This project is licensed under the MIT License.