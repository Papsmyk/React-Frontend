import React from 'react';
import '../components/Navigation/Styles.css';
import '../components/Navigation/css';



class ContactUs extends React.Component  {

  render ()   {
  
    
      return (                              
                  
           <div>
  <div className="breadcrumb_container " data-depth={2}>
    <div className="container">
      <nav data-depth={2} className="breadcrumb">
        <ol itemScope itemType="http://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
            <a itemProp="item" href="file:///D:/E-Commerce/Frontend/Noola/demo.posthemes.com/pos_ecolife_digital/digital3/en/index.html">
              <span itemProp="name">Home</span>
            </a>
            <meta itemProp="position" content={1} />
          </li>
          <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
            <a itemProp="item" href="file:///D:/E-Commerce/Frontend/Noola/demo.posthemes.com/pos_ecolife_digital/digital3/en/contact-us.html">
              <span itemProp="name">Contact us</span>
            </a>
            <meta itemProp="position" content={2} />
          </li>
        </ol>
      </nav>
    </div>
  </div>
  <div id="wrapper">
    <div className="container">
      <div className="row">
        <div id="left-column" className="col-xs-12 col-sm-4 col-md-3">
          <div className="contact-rich">
            <h4>Store information</h4>
            <div className="block">
              <div className="icon"><i className="material-icons"></i></div>
              <div className="data">Noola Accessories Store<br />East Africa</div>
            </div>
            <hr />
            <div className="block">
              <div className="icon"><i className="material-icons"></i></div>
              <div className="data">
                Call us:<br />
                <a href="tel:(+254)719616550">(+254)719 616550</a>
              </div>
            </div>
            <hr />
            <div className="block">
              <div className="icon"><i className="material-icons"></i></div>
              <div className="data email">
                Email us:<br />
              </div>
              <a href="mailto:demo@posthemes.com">customercare@noola.com</a>
            </div>
          </div>
        </div>
        <div id="content-wrapper" className="left-column col-xs-12 col-sm-8 col-md-9">
          <section id="main">
            <section id="content" className="page-content card card-block">
              <section className="contact-form">
                <form action="http://demo.posthemes.com/pos_ecolife_digital/digital3/en/contact-us" method="post" encType="multipart/form-data">
                  <section className="form-fields">
                    <div className="form-group row">
                      <div className="col-md-9 col-md-offset-3">
                        <h3>Contact us</h3>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 form-control-label">Subject</label>
                      <div className="col-md-6">
                        <select name="id_contact" className="form-control form-control-select">
                          <option value={2}>Customer service</option>
                          <option value={1}>Webmaster</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 form-control-label">Email address</label>
                      <div className="col-md-6">
                        <input className="form-control" name="from" type="email" defaultValue placeholder="your@email.com" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 form-control-label">Attachment</label>
                      <div className="col-md-6">
                        <input type="file" name="fileUpload" className="filestyle" data-buttontext="Choose file" id="filestyle-0" tabIndex={-1} style={{position: 'absolute', clip: 'rect(0px, 0px, 0px, 0px)'}} /><div className="bootstrap-filestyle input-group"><input type="text" className="form-control " placeholder disabled /> <span className="group-span-filestyle input-group-btn" tabIndex={0}><label htmlFor="filestyle-0" className="btn btn-default "><span className="icon-span-filestyle glyphicon glyphicon-folder-open" /> <span className="buttonText">Choose file</span></label></span></div>
                      </div>
                      <span className="col-md-3 form-control-comment">
                        optional
                      </span>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 form-control-label">Message</label>
                      <div className="col-md-9">
                        <textarea className="form-control" name="message" placeholder="How can we help?" rows={3} defaultValue={""} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="offset-md-3">
                      </div>
                    </div>
                  </section>
                  <footer className="form-footer text-sm-right">        
                    <input type="text" name="url" defaultValue />
                    <input type="hidden" name="token" defaultValue="bd6eaad4687debcf4ec99af5dfd76490" />
                    <input className="btn btn-primary" type="submit" name="submitMessage" defaultValue="Send" />
                  </footer>
                </form>
              </section>
            </section>
          </section></div></div></div></div></div>

            
            

      );
      }

    }

export default ContactUs;
