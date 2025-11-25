import React from 'react';

export interface Pillar {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Mistake {
  title: string;
  description: string;
}

export interface CheckItem {
  question: string;
  subtext?: string;
}

export interface Stat {
  label: string;
  value: string;
  sub: string;
}