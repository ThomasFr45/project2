import Banniere from '../Banniere';
import Footer from '../Footer';

const Contact = () => {
  return(
    <div className='page-container'>
      <div className='content-wrap'>
        <Banniere title="Pour nous contacter, c'est ici !"/>
        <p>Contact US</p>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;