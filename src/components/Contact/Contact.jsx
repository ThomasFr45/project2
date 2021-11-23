import Banniere from '../Banniere';
import Footer from '../Footer';
import ContactUs from './ContactUs';
import Navbar from '../Navbar';

const Contact = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Banniere title="Any suggestions or questions ? You are at the right place !" />
        <ContactUs />
      </div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default Contact;
