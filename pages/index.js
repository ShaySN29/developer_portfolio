import Link from 'next/link';
import Script from "next/script";
import Layout from '../components/MyLayout';
import img_shanay from '../static/images/img_shanay.jpg'; // Importing the img 
import Image from 'next/image';

// Styling the div of the home page
const homeStyle = {
	padding: "0 0.5rem",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center"
};

// Styling the margin 
const marginStyle = {
    marginTop: "2%",
    marginBottom: "2%"
}


export default () => (
	<div>
	<Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=UA-251751334-2"/>
	<Script
		id="google-analytics"
			strategy="afterInteractive"
			dangerouslySetInnerHTML={{
				_html: `
				window.dataLayer = window.dataLayer || [],
				function gtag(){dataLayer.push(arguments)},
				gtag('js', new Date());
				gtag('config', 'UA-251751334-2');
				`,
			}}
	/>
		
	<Layout >
		<div style={homeStyle} >
			<h1 style={marginStyle}>Hello! I am Shanay!</h1>
			<Image src={img_shanay} width={200} />
			<p style={marginStyle}>
				I am a Forensic Science Analyst and an aspiring Web Developer...
			</p>
		</div>
	</Layout>
	</div>
);