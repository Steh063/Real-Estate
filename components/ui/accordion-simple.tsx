"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "./utils";

interface AccordionContextValue {
  openItems: Set<string>;
  toggleItem: (value: string) => void;
  type: "single" | "multiple";
  collapsible?: boolean;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

interface AccordionProps {
  type: "single" | "multiple";
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
}

function Accordion({ type, collapsible = false, className, children }: AccordionProps) {
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
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

function AccordionItem({ value, className, children }: AccordionItemProps) {
  return (
    <div className={cn("border-b last:border-b-0", className)} data-value={value}>
      {children}
    </div>
  );
}

interface AccordionTriggerProps {
  className?: string;
  children: React.ReactNode;
}

function AccordionTrigger({ className, children }: AccordionTriggerProps) {
  const context = React.useContext(AccordionContext);
  const parent = React.useContext(AccordionItemContext);
  
  if (!context || !parent) {
    throw new Error("AccordionTrigger must be used within AccordionItem");
  }

  const { openItems, toggleItem } = context;
  const { value } = parent;
  const isOpen = openItems.has(value);

  return (
    <div className="flex">
      <button
        className={cn(
          "flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          "[&[data-state=open]>svg]:rotate-180",
          className
        )}
        onClick={() => toggleItem(value)}
        data-state={isOpen ? "open" : "closed"}
      >
        {children}
        <ChevronDown className="text-muted-foreground pointer-events-none h-4 w-4 shrink-0 transition-transform duration-200" />
      </button>
    </div>
  );
}

interface AccordionContentProps {
  className?: string;
  children: React.ReactNode;
}

const AccordionItemContext = React.createContext<{ value: string } | null>(null);

// Wrap AccordionItem to provide value context
const AccordionItemWithContext = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, className, children }, ref) => {
    return (
      <AccordionItemContext.Provider value={{ value }}>
        <div ref={ref} className={cn("border-b last:border-b-0", className)} data-value={value}>
          {children}
        </div>
      </AccordionItemContext.Provider>
    );
  }
);
AccordionItemWithContext.displayName = "AccordionItem";

function AccordionContent({ className, children }: AccordionContentProps) {
  const context = React.useContext(AccordionContext);
  const parent = React.useContext(AccordionItemContext);
  
  if (!context || !parent) {
    throw new Error("AccordionContent must be used within AccordionItem");
  }

  const { openItems } = context;
  const { value } = parent;
  const isOpen = openItems.has(value);

  return (
    <div
      className={cn(
        "overflow-hidden text-sm transition-all duration-300",
        isOpen ? "animate-accordion-down" : "animate-accordion-up"
      )}
      data-state={isOpen ? "open" : "closed"}
      style={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
      }}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </div>
  );
}

export { Accordion, AccordionItemWithContext as AccordionItem, AccordionTrigger, AccordionContent };