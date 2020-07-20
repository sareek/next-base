import React, { Component } from "react";
import Head from "next/head";
import NavigationBar from "./navbar";
import UnderMaintenance from "./Common/UnderMaintenance";
import Footer from "./footer";
import * as action from "utils/apiAdmin";

import {
  websiteTitle,
  websiteDescription,
  websiteKeywords,
  websiteImage,
} from "utils/constants";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.scss";
import "../styles/fonts/style.css";

class Layout extends Component {

  constructor(props){
    super(props);
    this.state = {
       orgData: []
    }
  }

  componentDidMount() {
   action
    .getData("organisation-info/client")
    .then(
      res => {
        this.setState({orgData: res && res.data && res.data.dataList && res.data.dataList[0]})
      } 
    );
  }
  
  render(){
    const { orgData } = this.state;
  return (
    <>
      <Head>
        <title>{this.props.websiteTitle ? this.props.websiteTitle : websiteTitle}</title>
        <meta
          name="author"
          content={this.props.articleAuthor ? this.props.articleAuthor : "ETH"}
        />
        <meta
          name="description"
          content={
            this.props.websiteDescription
              ? this.props.websiteDescription
              : websiteDescription
          }
        />
        <meta
          name="keywords"
          content={
            this.props.websiteKeywords ? this.props.websiteKeywords : websiteKeywords
          }
        ></meta>
        <meta
          name="image"
          content={this.props.websiteImage ? `${this.props.websiteImage}` : websiteImage}
        />

        {/* OG:Type */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={this.props.websiteTitle ? this.props.websiteTitle : websiteTitle}
        />
        <meta
          property="og:description"
          content={
            this.props.websiteDescription
              ? this.props.websiteDescription
              : websiteDescription
          }
        />
        <meta
          property="og:image"
          content={this.props.websiteImage ? `${this.props.websiteImage}` : websiteImage}
        />

        {/* Item Prop */}
        <meta
          itemProp="author"
          content={this.props.articleAuthor ? this.props.articleAuthor : "ETH"}
        />
        <meta
          itemProp="description"
          content={
            this.props.websiteDescription
              ? this.props.websiteDescription
              : websiteDescription
          }
        />
        <meta
          itemProp="keywords"
          content={
            this.props.websiteKeywords ? this.props.websiteKeywords : websiteKeywords
          }
        ></meta>
        <meta
          itemProp="image"
          content={this.props.websiteImage ? this.props.websiteImage : websiteImage}
        />

        <meta
          name="google-site-verification"
          content="edRHpBzhRseXole5ZklVu6YFQ3oO49wQQfAwplx6tR0"
        />

        <link
          rel="icon"
          href="../static/favicon.png"
          type="image/gif"
          sizes="16x16"
        />

        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      
         <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TPPG9TP');`,
        }}>
        </script>
        {/* <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(this.props.schemaData) }}
        /> */}
      </Head>
      {/* { orgData && orgData.active === false && <UnderMaintenance />}
      {orgData && orgData.active === true && !this.props.metaDataFlag && <NavigationBar {...this.props} />}
       {orgData && orgData.active === true && 
       <div className="wrapper">
          {this.props.children}
        </div> 
       }
      {orgData && orgData.active === true && !this.props.metaDataFlag && <Footer {...this.props} /> }  */}
     { orgData && orgData.active === false && <UnderMaintenance />}
      {!this.props.metaDataFlag && <NavigationBar {...this.props} />}
       <div className="wrapper">
          {this.props.children}
        </div> 
      {!this.props.metaDataFlag && <Footer {...this.props} /> }  
   </>
  );
}
};

export default Layout;
