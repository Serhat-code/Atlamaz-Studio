import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Reveal({ children, delay = 1, className = '', as: Tag = 'div', ...props }) {
  const ref = useScrollReveal();
  const delayClass = delay ? `reveal-delay-${delay}` : '';

  return (
    <Tag ref={ref} className={`reveal ${delayClass} ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}
