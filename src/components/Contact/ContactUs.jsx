import { useState } from 'react';
const ContactUs = () => {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMEssage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert(`Subject ${subject} Email ${email} Message ${message}`)
  }
  return (
    <div className="divContact">
      <form action="">
        <div className="divInput">
          <input type="text" className="texte" placeholder="What is it about?" value={subject} onChange={(e) => setSubject(e.target.value)}/>

        </div>
        <div className="divInput">
          <input type="email" className="texte" placeholder="Type your email adress here." value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="divMessage">
          <textarea className="message" value={message} onChange={(e) => setMEssage(e.target.value)}></textarea>
        </div>
        <div className="divbutton">
          <button type="submit" className="button" onClick={handleSubmit}>Envoyer</button>
        </div>
      </form>
    </div>);
}

export default ContactUs;