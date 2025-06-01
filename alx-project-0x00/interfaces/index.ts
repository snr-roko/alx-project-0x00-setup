export interface PillProps {
  title: string
}

export interface StyleProps {
  size: 'sm' | 'md' | 'lg';
  color: string;
  backgroundColor: string;
  roundness: string;
}

export interface ButtonProps {
  title: string;
  styles: StyleProps
}