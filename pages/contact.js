import Link from 'next/link';
import Layout from '../components/MyLayout';

// Styling the div of the contact page
const contactStyle = {
  padding: "0 5rem",
  margin: "2%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center"
};
// Styling for the paragraph
const paragraphStyle = {
  lineHeight: "2rem"
};
// Styling for the link
const linkStyle = {
  textDecoration: "none",
  color: "white"
};

// This page displays the contact details
export default () => (
  <Layout>
    <div style={contactStyle}>
      <p style={paragraphStyle}>
        <b>Tel:</b> 0763920931
        <br />
        <b>Email:</b> shanaysathdeo@gmail.com
        <br />
        <b>LinkedIn: </b>
        <a href="http://www.linkedin.com/in/shanay-sathdeo-nair-09320b93" target="_blank" style={linkStyle}>Shanay Nair</a>
      </p>
    </div>
  </Layout>
);