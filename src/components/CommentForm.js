import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Label} from 'reactstrap';
import { LocalForm, Errors, Control} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

export default class CommentForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isModalopen : false
		}

		this.toggalModal = this.toggalModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	toggalModal () {
		this.setState({
			isModalopen : !this.state.isModalopen
		});
	}

	handleSubmit (values) {
		this.toggalModal();
		this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
	}

	render() {
		return(
			<div>
				<Button outline onClick={this.toggalModal}> Submit Comment
					<span className="fas fa-pencil-alt"></span>
				</Button>
					
				<Modal isOpen={this.state.isModalopen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}><strong>Submit Comment</strong></ModalHeader>
					<ModalBody>
						<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
							<Row className="form-group">
								<Label htmlFor="rating"><strong>Rating</strong></Label>
									<Control.select model=".rating" name="rating" className="form-control">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Control.select>
							</Row>
							<Row>
								<Label htmlFor="name"><strong>Your Name</strong></Label>
									<Control.text model=".author" name="author" className="form-control" 
										placeholder="Author" validators={{required, minLength: minLength(3), maxLength: maxLength(15)}}
									/>
									 <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 numbers',
                                            maxLength: 'Must be 15 numbers or less'
                                        }}
                                     />
							</Row>
							<br/>
							<Row>
								<Label htmlFor="comment"><strong>Comment</strong></Label>
									<Control.textarea model=".comment" name="comment" rows="6"
									className="form-control"  />
							</Row>
							<br/>
							<Row className="form-group">						
                                    <Button type="submit" color="primary">Submit</Button>
							</Row>
						</LocalForm>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}