export interface TimelineItem {
  period: string;
  type: string;
  title: string;
  description?: string;
  company?: string;
  details?: string[];
}

export interface ProjectItem {
  name: string;
  meta: string;
  description: string;
  url: string;
  image?: string;
}

export interface CertificateItem {
  number: string;
  issuer: string;
  title: string;
  description: string;
  image: string;
  url: string;
}
