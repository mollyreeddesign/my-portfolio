"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

export type TabItem = {
  key: string;
  imageSrc?: string;
  imageAlt?: string;
  label: string;
  content: React.ReactNode;
  titleNode?: React.ReactNode;
};

type TabsProps = {
  items: TabItem[];
  initialActiveKey?: string;
  className?: string;
};

export default function Tabs({ items, initialActiveKey, className }: TabsProps) {
  const keys = useMemo(() => items.map((i) => i.key), [items]);
  const defaultKey = initialActiveKey && keys.includes(initialActiveKey)
    ? initialActiveKey
    : (keys[0] ?? "");
  const [activeKey, setActiveKey] = useState<string>(defaultKey);
  const tabButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    if (!activeKey && keys.length > 0) {
      setActiveKey(keys[0]);
    }
  }, [activeKey, keys]);

  const focusTabByIndex = useCallback((index: number) => {
    const clamped = ((index % keys.length) + keys.length) % keys.length;
    const key = keys[clamped];
    setActiveKey(key);
    const btn = tabButtonRefs.current[clamped];
    if (btn) {
      btn.focus();
    }
  }, [keys]);

  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (keys.length === 0) return;
    const currentIndex = Math.max(0, keys.indexOf(activeKey));
    switch (e.key) {
      case "ArrowRight":
      case "Right":
        e.preventDefault();
        focusTabByIndex(currentIndex + 1);
        break;
      case "ArrowLeft":
      case "Left":
        e.preventDefault();
        focusTabByIndex(currentIndex - 1);
        break;
      case "Home":
        e.preventDefault();
        focusTabByIndex(0);
        break;
      case "End":
        e.preventDefault();
        focusTabByIndex(keys.length - 1);
        break;
      default:
        break;
    }
  }, [activeKey, keys, focusTabByIndex]);

  return (
    <div className={className}>
      {/* Tab list */}
      <div
        role="tablist"
        aria-orientation="horizontal"
        className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4"
        onKeyDown={onKeyDown}
      >
        {items.map((item, index) => {
          const isActive = item.key === activeKey;
          const tabId = `tab-${item.key}`;
          const panelId = `panel-${item.key}`;
          return (
            <button
              key={item.key}
              ref={(el) => { tabButtonRefs.current[index] = el; }}
              id={tabId}
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              aria-label={item.label}
              className={
                "flex flex-col items-center justify-center rounded-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 " +
                (isActive
                  ? "border-2 border-gray-400 bg-gray-100 text-gray-900"
                  : "border border-gray-200 bg-white text-gray-800 opacity-80 hover:opacity-100 focus-visible:opacity-100 hover:bg-gray-50 hover:border-gray-300")
              }
              onClick={() => setActiveKey(item.key)}
            >
              {item.titleNode ? (
                <div className="p-3 w-full">
                  <div className="min-h-14 w-full flex items-center justify-center">
                    {item.titleNode}
                  </div>
                  <span className="sr-only">{item.label}</span>
                </div>
              ) : (
                <div className="p-3 flex flex-col items-center">
                  {item.imageSrc && (
                    <Image src={item.imageSrc} alt={item.imageAlt || item.label} width={28} height={28} />
                  )}
                  <span className="mt-2 text-[14px] leading-[20px]">{item.label}</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Panels */}
      {items.map((item) => {
        const isActive = item.key === activeKey;
        const tabId = `tab-${item.key}`;
        const panelId = `panel-${item.key}`;
        return (
          <div
            key={item.key}
            id={panelId}
            role="tabpanel"
            aria-labelledby={tabId}
            hidden={!isActive}
            className="rounded-lg bg-gray-100 border border-[#D9D9D9]"
          >
            <div className="p-4 sm:p-6">
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}


