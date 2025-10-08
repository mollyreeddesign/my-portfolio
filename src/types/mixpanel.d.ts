// TypeScript declarations for Mixpanel
interface MixpanelPeople {
  set: (props: Record<string, any>) => void;
  set_once: (props: Record<string, any>) => void;
  increment: (prop: string | Record<string, number>) => void;
  append: (props: Record<string, any>) => void;
  union: (props: Record<string, any>) => void;
  track_charge: (amount: number, properties?: Record<string, any>) => void;
  clear_charges: () => void;
  delete_user: () => void;
}

interface Mixpanel {
  init: (token: string, config?: Record<string, any>) => void;
  track: (event_name: string, properties?: Record<string, any>) => void;
  track_pageview: (properties?: Record<string, any>) => void;
  track_links: (query: string, event_name: string, properties?: Record<string, any>) => void;
  track_forms: (query: string, event_name: string, properties?: Record<string, any>) => void;
  identify: (unique_id?: string) => void;
  alias: (alias: string, original?: string) => void;
  register: (props: Record<string, any>) => void;
  register_once: (props: Record<string, any>) => void;
  unregister: (property: string) => void;
  reset: () => void;
  people: MixpanelPeople;
  opt_in_tracking: () => void;
  opt_out_tracking: () => void;
  has_opted_in_tracking: () => boolean;
  has_opted_out_tracking: () => boolean;
}

declare global {
  interface Window {
    mixpanel: Mixpanel;
  }
}

export {};

