import { useState, useEffect } from "react";
import { Customer } from "../types";

type StorageValue = string | null;

interface UseLocalStorage {
  storedValue: {} | null;
  handleStorage: (value: any) => void;
  handleDeleteStorage: () => void;
  handleGetStored: () => {} | null;
}

function useLocalStorage(key: string, initialValue?: StorageValue): UseLocalStorage {
  const [storedValue, setStoredValue] = useState<StorageValue>(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) {
      setStoredValue(JSON.parse(item));
    }
  }, [key]);

  const handleStorage = (value: StorageValue) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  const handleDeleteStorage = () => {
    setStoredValue(null);
    localStorage.removeItem(key);
  };

  const handleGetStored = () => {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  };

  return { storedValue, handleStorage, handleDeleteStorage, handleGetStored };
}

export default useLocalStorage;
