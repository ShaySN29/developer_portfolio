import Link from 'next/link';
import Layout from '../components/MyLayout';


// Styling the div of the about page
const aboutStyle = {
  padding: "0 5rem",
  margin: "50",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
  alignItems: "left"
};
// Styling for the indiviual paragraphs
const paragraphStyle = {
  textAlign: "justify"
};

// This page displays the about content
export default () => (
  <Layout>
    <div style={aboutStyle}>
      <p style={paragraphStyle}>
        I am from Port Elizabeth, South Africa and am now living in Cape Town. I have been a Forensic Science Analyst for SAPS since 2016.
        I have a BSc in Biochemistry and Chemistry and a BSc Honours in Chemistry.
      </p>
      <br />

      <p style={paragraphStyle}>
        I decide to pursue a career change due to the lack of growth available in my current field. I am currently completing a Full Stack
        Web Developer Bootcamp with HyperionDev which has exposed me to a number of technologies relating to the MERN stack.
      </p>
      <br />

      <p style={paragraphStyle}>
        I am a "challenge accepted" type of person, I love being challenged and working towards a goal. I am diligent and strive for the best
        in all that I do.
      </p>
      <br />

    </div>
  </Layout>
);