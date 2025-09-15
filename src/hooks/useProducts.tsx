import { useState, useEffect } from 'react';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProductsFromFile = async () => {
      try {
        const response = await fetch('/products.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setProducts(data.products || data || []);
        setLoading(false);
      } catch (err) {
        console.error('Error loading products:', err);
        setError(`Failed to load products: ${err.message}`);
        setLoading(false);
      }
    };

    loadProductsFromFile();
  }, []);

  return { products, loading, error };
};