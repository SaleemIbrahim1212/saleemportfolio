const channels = [
  { label: 'Email', text: 'saleemibramza@gmail.com', href: 'mailto:saleemibramza@gmail.com' },
  { label: 'LinkedIn', text: 'Let’s connect', href: 'https://www.linkedin.com/in/saleem-ibrahim-0162a8121/' },
  { label: 'GitHub', text: 'Explore my code', href: 'https://github.com/saleemibrahim1212' },
];
export default function ContactForm() {
  return <div className="contact-grid">{channels.map(channel => <a className="contact-channel" key={channel.label} href={channel.href} {...(channel.label !== 'Email' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
    <span className="eyebrow">{channel.label}</span><span className="contact-value">{channel.text}<span aria-hidden="true">&#8599;</span></span>
  </a>)}</div>;
}
