import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={className}
      {...props}
    />
  );
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

function CardContent({ className, ...props }: CardContentProps) {
  return (
    <div
      className={className}
      {...props}
    />
  );
}

export { Card, CardContent };