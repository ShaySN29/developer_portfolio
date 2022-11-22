import Link from 'next/link';
import Header from './Header';

// Styling for the page
const pageStyle = {
	backgroundImage: "linear-gradient(180deg, #E190F9, #4F72F3)"
};

// Styling for the header
const headerStyle = {
	margin: 20,
	padding: 20
};

// Children passed as props to the Layout components to render the content inside the Layout element in the pages
const Layout = (props) => (
	<div style={pageStyle}>
		<div style={headerStyle}> 
			<Header />
		</div>
		<div>
			{props.children}
		</div>
	</div>
);

export default Layout;
