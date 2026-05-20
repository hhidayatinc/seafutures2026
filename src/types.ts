export interface Speaker {
  id: string;
  name: string;
  title: string;
  affiliation: string;
  type: 'keynote' | 'panel' | 'invited';
  avatarUrl?: string;
  bio?: string;
  isTBC?: boolean;
}

export interface DateMilestone {
  id: string;
  label: string;
  originalDate: string;
  currentDate: string;
  isActive: boolean;
  type: 'submission' | 'notification' | 'registration' | 'event';
}

export interface SubTheme {
  number: number;
  title: string;
  description: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export interface PaperSubmission {
  id: string;
  authorName: string;
  authorEmail: string;
  affiliation: string;
  title: string;
  abstract: string;
  subTheme: string;
  submittedAt: string;
  status: 'submitted' | 'under_review' | 'accepted' | 'declined';
}
