import {MDBCol, MDBInput} from "mdb-react-ui-kit";
import React from "react";

const CreateTodo = () => {
	const cardStyle = {
		borderRadius:'15px',
		// display:'none'
	}
	return (
		<MDBCol md="8" className="p-2" style={cardStyle}>
			<div className="card pt-1 shadow-1-strong hover-shadow mb-2" style={cardStyle}>
				<div className="card-body">
					<MDBInput label="Task Info" textarea rows={4} />
					<button type="button" className="btn">Create</button>
				</div>
			</div>
		</MDBCol>
	)
}

export default CreateTodo