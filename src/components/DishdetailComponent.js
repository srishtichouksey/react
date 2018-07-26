import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardText} from 'reactstrap';


export default class Dishdetail extends Component {


	renderDish(dish) {
		return(
			<div className="col-12 col-md-5 m-1">
				<Card>
					<CardTitle>{dish.name}</CardTitle>
					<CardBody>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			</div>
		);
	}

	renderComments(dish) {
		if(dish.comments != null)
		return(
			<div className="col-12 col-md-5 m-1">
				<h4>Comments</h4>
					{
						dish.comments.map((comment) => {
							return(
								<li key={comment.id}>
									<p>{comment.comment}</p>
									<p>--{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
								</li>

							);
						})
					}
			</div>
		);
		else return <div></div>;

	}

	render() {
		console.log(this.props.dish);
		if(this.props.dish) {
			console.log();
			return(
			<div className="container">
				<div className="row">
					{this.renderDish(this.props.dish)}
					{this.renderComments(this.props.dish)}
				</div>
			</div>
			);
		} else {
			return <div>Please select dish to see the details</div>
		}
	}

}