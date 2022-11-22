import Link from 'next/link';

// Styling for the links
const linkStyle = {
  marginRight: 50,
  textDecoration: "none",
  color: "white",
  border: "solid 2px white",
  padding: "0.5%"
};

// Contains the links to navigate through the pages
const Header = () => (

  <div>
    <Link href="/" style={linkStyle}>Home</Link>
    <Link href="/about" style={linkStyle}>About</Link>
    <Link href="/projects" style={linkStyle}>Projects</Link>
    <Link href="/contact" style={linkStyle}>Contact Details</Link>
  </div>
);

export default Header;