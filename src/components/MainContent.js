import {MDBRow, MDBCol, MDBCard, MDBBtn, MDBInput} from "mdb-react-ui-kit";
import React, { useState } from 'react';
import TodoList from './TodoList'
import todos from "../todos";
import Wave from "./Wave";

const MainContent = () => {
	const cardStyle = {
		borderRadius:'15px',
	}
	const [showAddCard, setShowAddCard] = useState(false);

	const toggleShow = () => setShowAddCard(!showAddCard);
	const addCardStyle = {
		display: showAddCard === true ? 'block' : 'none'
	}
	return (
		<MDBRow className="mt-1">
			<MDBCol md="3">
				<MDBCard className="shadow-1-strong p-3" style={{ minHeight:'90vh'}}>
					<Wave />
					<h4 className="text-center">My Todo items <hr style={{color: "blue"}}/></h4>
					<TodoList todos={todos} />
				</MDBCard>
			</MDBCol>
			<MDBCol md="9">
				<MDBCard className="light" style={{ minHeight:'90vh'}}>
					<MDBRow className="m-2">
						<MDBCol className="">
							<div className="mb-2">
								<MDBBtn color="light" onClick={toggleShow}>
									Add task +
								</MDBBtn>
								<MDBCol md="8" className="p-2" style={addCardStyle}>
									<div className="card pt-1 shadow-1-strong hover-shadow mb-2" style={cardStyle}>
										<div className="card-body">
											<MDBInput label="Task Info" textarea rows={4} />
											<button type="button" className="btn">Create</button>
										</div>
									</div>
								</MDBCol>
							</div>
						</MDBCol>
					</MDBRow>
					<hr/>
					<MDBCol md="8" className="p-2" style={cardStyle}>
						<div className="card pt-1 shadow-1-strong hover-shadow mb-2" style={cardStyle}>
							<div className="card-body">
								<p className="card-text p-1">
									Go for a walk afternoon
								</p>
								<button type="button" className="btn">Status</button>
								<svg className="h4 text-success" stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11 20c-.801 0-1.555-.312-2.121-.879l-4-4c-.567-.566-.879-1.32-.879-2.121s.312-1.555.879-2.122c1.133-1.133 3.109-1.133 4.242 0l1.188 1.188 3.069-5.523c.526-.952 1.533-1.544 2.624-1.544.507 0 1.012.131 1.456.378.7.39 1.206 1.028 1.427 1.798.221.771.127 1.581-.263 2.282l-5 9c-.454.818-1.279 1.384-2.206 1.514-.139.019-.277.029-.416.029zm-4-8c-.268 0-.518.104-.707.293s-.293.439-.293.707.104.518.293.707l4 4c.223.221.523.33.844.283.312-.043.586-.232.737-.504l5-9c.13-.233.161-.503.088-.76-.073-.257-.243-.47-.478-.6-.473-.264-1.101-.078-1.357.388l-4.357 7.841-3.062-3.062c-.19-.189-.44-.293-.708-.293z"></path></svg>
							</div>
						</div>
					</MDBCol>
				</MDBCard>
			</MDBCol>
		</MDBRow>
	);
};

export default MainContent;