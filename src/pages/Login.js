import React from 'react';
import '../components/Navigation/Styles.css';
import '../components/Navigation/css';



class LoginPage extends React.Component  {

  render ()   {
  
    
      return (                              
                  
        <div>
        <aside id="notifications">
          <div className="container">
            <link rel="stylesheet" href="./Contact us_files/css" type="text/css" media="all" />
            <link rel="stylesheet" href="./Contact us_files/theme-18c77515.css" type="text/css" media="all" />
          </div>
        </aside>
        <div className="breadcrumb_container " data-depth={1}>
          <div className="container">
            <nav data-depth={1} className="breadcrumb">
              <ol itemScope itemType="http://schema.org/BreadcrumbList">
                <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                  <a itemProp="item" href="file:///D:/E-Commerce/Frontend/Noola/demo.posthemes.com/pos_ecolife_digital/digital3/en/index.html">
                    <span itemProp="name">Home</span>
                  </a>
                  <meta itemProp="position" content={1} />
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div id="wrapper">
          <div className="container">
            <div className="row">
              <div id="content-wrapper" className="col-xs-12">
                <section id="main">
                  <header className="page-header">
                    <h1>
                      Log in to your account
                    </h1>
                  </header>
                  <section id="content" className="page-content card card-block">
                    <section className="login-form">
                      <form id="login-form" action="http://demo.posthemes.com/pos_ecolife_digital/digital3/en/login?back=my-account" method="post">
                        <section>
                          <input type="hidden" name="back" defaultValue="my-account" />
                          <div className="form-group row ">
                            <label className="col-md-3 form-control-label required">
                              Email
                            </label>
                            <div className="col-md-6">
                              <input className="form-control" name="email" type="email" defaultValue required />
                            </div>
                            <div className="col-md-3 form-control-comment">
                            </div>
                          </div>
                          <div className="form-group row ">
                            <label className="col-md-3 form-control-label required">
                              Password
                            </label>
                            <div className="col-md-6">
                              <div className="input-group js-parent-focus">
                                <input className="form-control js-child-focus js-visible-password" name="password" type="password" defaultValue pattern=".{5,}" required />
                                <span className="input-group-btn">
                                  <button className="btn" type="button" data-action="show-password" data-text-show="Show" data-text-hide="Hide">
                                    Show
                                  </button>
                                </span>
                              </div>
                            </div>
                            <div className="col-md-3 form-control-comment">
                            </div>
                          </div>
                          <div className="forgot-password">
                            <a href="file:///D:/E-Commerce/Frontend/Noola/demo.posthemes.com/pos_ecolife_digital/digital3/en/password-recovery.html" rel="nofollow">
                              Forgot your password?
                            </a>
                          </div>
                        </section>
                        <footer className="form-footer text-sm-center clearfix">
                          <input type="hidden" name="submitLogin" defaultValue={1} />
                          <button id="submit-login" className="btn btn-primary" data-link-action="sign-in" type="submit">
                            Sign in
                          </button>
                        </footer>
                      </form>
                    </section>
                    <hr />
                    <div className="no-account">
                      <a href="file:///D:/E-Commerce/Frontend/Noola/demo.posthemes.com/pos_ecolife_digital/digital3/en/loginca5f.html?create_account=1" data-link-action="display-register-form">
                        No account? Create one here
                      </a>
                    </div>
                  </section>
                  <footer className="page-footer">
                  </footer></section></div></div></div></div></div>
      

            
            

      );
      }

    }

export default LoginPage;
