import React from 'react'

interface GreenTextProps {
  children: React.ReactNode;
  fontWeight?: string;
}

export default function GreenText({ children, fontWeight, ...props }: GreenTextProps) {
  const style = {
    color: '#88ccca',
    fontWeight: fontWeight || 'inherit', // Use 'inherit' as the default value
  };

  return (
    <span style={style}>{children}</span>
  )
}
