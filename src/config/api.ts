const BASE = process.env.NEXT_PUBLIC_API_BASE_PATH;

const ROUTES = {
  PRODUCTS: {
    BASE: `${BASE}/products`,
    NEW: `${BASE}/products/new`,
    HITS: `${BASE}/products/hits`,
    DISCOUNTS: `${BASE}/products/discounts`,
  },
};

export default ROUTES;
