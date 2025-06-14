
import React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  readMoreLink?: string;
}

export interface FeatureComparisonItem {
  feature: string;
  exergyTech: string | React.ReactNode; // Can be text or SVG icon
  others: string | React.ReactNode;     // Can be text or SVG icon
}

export interface Testimonial {
  quote: string;
  author: string;
  image: string;
}

export interface ContactInfo {
  icon: React.ReactNode;
  text: string;
  href?: string;
}
