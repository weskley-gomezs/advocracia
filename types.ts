import { ReactNode } from 'react';

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
  onLearnMore: () => void;
}

export interface TestimonialProps {
  name: string;
  role: string;
  text: string;
}

export interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  specialty: string;
  description: string;
}