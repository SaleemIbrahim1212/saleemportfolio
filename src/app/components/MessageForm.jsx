import ContactForm from './ContactForm';
export default function MessageForm() {
  return <section id="Message_Form" className="contact-section">
    <p className="eyebrow">04 / Get in touch</p>
    <h2>Good research starts<br />with a conversation.</h2>
    <p className="contact-description">Interested in machine learning, a research collaboration, or exchanging ideas? I would love to hear from you.</p>
    <ContactForm />
    <footer className="site-footer"><span>Saleem Ibrahim</span><span>Research, curiosity, and thoughtful software.</span><a href="#Home">Back to top &#8593;</a></footer>
  </section>;
}
