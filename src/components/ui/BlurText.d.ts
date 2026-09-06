declare module '*/BlurText' {
  import { FC } from 'react';
  interface BlurTextProps {
    text?: string;
    delay?: number;
    className?: string;
    animateBy?: 'words' | 'letters';
    direction?: 'top' | 'bottom';
    threshold?: number;
    rootMargin?: string;
    animationFrom?: Record<string, any>;
    animationTo?: Record<string, any>[];
    easing?: (t: number) => number;
    onAnimationComplete?: () => void;
    stepDuration?: number;
    as?: keyof JSX.IntrinsicElements;
  }
  const BlurText: FC<BlurTextProps>;
  export default BlurText;
}
