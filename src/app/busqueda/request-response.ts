export interface ReqRes {
    results: Result[];
}

export interface Result {
    id:                  string;
    site_id:             string;
    title:               string;
    price:               number;
    sale_price:          null;
    currency_id:         string;
    available_quantity:  number;
    sold_quantity:       number;
    buying_mode:         string;
    listing_type_id:     string;
    stop_time:           Date;
    condition:           string;
    permalink:           string;
    thumbnail:           string;
    thumbnail_id:        string;
    accepts_mercadopago: boolean;
    address:             Address;
    original_price:      null;
    category_id:         string;
    official_store_id:   null;
    domain_id:           string;
    catalog_product_id:  null;
    order_backend:       number;
    use_thumbnail_id:    boolean;
    shipping:            Shipping;
}

export interface Address {
    state_id:   string;
    state_name: string;
    city_id:    null;
    city_name:  string;
}

export interface Shipping {
  free_shipping: boolean
}
