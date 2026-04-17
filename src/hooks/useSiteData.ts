import { useState, useCallback } from "react";
import {
  ProductSettings,
  SellerSettings,
  CheckoutSettings,
  DEFAULT_PRODUCT,
  DEFAULT_SELLER,
  DEFAULT_CHECKOUT,
} from "@/lib/siteData";

// Versão estática: Retorna os dados padrão sem tentar conectar ao Supabase
export function useProductSettings() {
  const [data] = useState<ProductSettings>(DEFAULT_PRODUCT);
  const [loading] = useState(false);
  const reload = useCallback(async () => {}, []);
  return { data, loading, reload };
}

export function useSellerSettings() {
  const [data] = useState<SellerSettings>(DEFAULT_SELLER);
  const [loading] = useState(false);
  const reload = useCallback(async () => {}, []);
  return { data, loading, reload };
}

export function useCheckoutSettings() {
  const [data] = useState<CheckoutSettings>(DEFAULT_CHECKOUT);
  const [loading] = useState(false);
  const reload = useCallback(async () => {}, []);
  return { data, loading, reload };
}
