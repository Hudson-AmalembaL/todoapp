import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";

const Header = () => {
	return (
		<MDBNavbar className="shadow-1-strong" light bgColor="light">
			<MDBContainer fluid>
				<MDBNavbarBrand href="#">React <span className="text-primary p-2">Todo</span> </MDBNavbarBrand>
			</MDBContainer>
		</MDBNavbar>
	)
}

export default Header