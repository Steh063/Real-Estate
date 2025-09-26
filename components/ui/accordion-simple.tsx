"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

interface AccordionContextValue {
  openItems: Set<string>;
  toggleItem: (value: string) => void;
  type: "single" | "multiple";
  collapsible?: boolean;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null);
const AccordionItemContext = React.createContext<{ value: string } | null>(null);

interface AccordionProps {
  type: "single" | "multiple";
  collapsible?: boolean;
  children: React.ReactNode;
}

function Accordion({ type, collapsible = false, children }: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<Set<string>>(new Set());

  const toggleItem = (value: string) => {
    if (type === "single") {
      if (openItems.has(value)) {
        if (collapsible) {
          setOpenItems(new Set());
        }
      } else {
        setOpenItems(new Set([value]));
      }
    } else {
      const newOpenItems = new Set(openItems);
      if (newOpenItems.has(value)) {
        newOpenItems.delete(value);
      } else {
        newOpenItems.add(value);
      }
      setOpenItems(newOpenItems);
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type, collapsible }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
}

function AccordionItem({ value, children }: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div data-value={value}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

interface AccordionTriggerProps {
  children: React.ReactNode;
}

function AccordionTrigger({ children }: AccordionTriggerProps) {
  const context = React.useContext(AccordionContext);
  const parent = React.useContext(AccordionItemContext);
  
  if (!context || !parent) {
    throw new Error("AccordionTrigger must be used within AccordionItem");
  }

  const { openItems, toggleItem } = context;
  const { value } = parent;
  const isOpen = openItems.has(value);

  return (
    <div style={{ display: 'flex' }}>
      <button
        onClick={() => toggleItem(value)}
        data-state={isOpen ? "open" : "closed"}
        style={{
          display: 'flex',
          flex: '1',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '16px',
          borderRadius: '6px',
          paddingTop: '16px',
          paddingBottom: '16px',
          textAlign: 'left',
          fontSize: '0.875rem',
          fontWeight: '500',
          transition: 'all 0.3s ease',
          outline: 'none',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        {children}
        <ChevronDown 
          size={16} 
          style={{
            color: '#6b7280',
            pointerEvents: 'none',
            flexShrink: '0',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
            marginTop: '2px'
          }} 
        />
      </button>
    </div>
  );
}

interface AccordionContentProps {
  children: React.ReactNode;
}

function AccordionContent({ children }: AccordionContentProps) {
  const context = React.useContext(AccordionContext);
  const parent = React.useContext(AccordionItemContext);
  
  if (!context || !parent) {
    throw new Error("AccordionContent must be used within AccordionItem");
  }

  const { openItems } = context;
  const { value } = parent;
  const isOpen = openItems.has(value);

  if (!isOpen) return null;

  return (
    <div
      data-state={isOpen ? "open" : "closed"}
      style={{
        overflow: 'hidden',
        fontSize: '0.875rem',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{ paddingTop: '0', paddingBottom: '16px' }}>
        {children}
      </div>
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };