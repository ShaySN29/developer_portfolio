import Link from 'next/link';
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
	<Layout >
		<div style={homeStyle} >
			<h1 style={marginStyle}>Hello! I am Shanay!</h1>
			<Image src={img_shanay} width={200} />
			<p style={marginStyle}>
				I am a Forensic Science Analyst and an aspiring Web Developer...
			</p>
		</div>
	</Layout>
);