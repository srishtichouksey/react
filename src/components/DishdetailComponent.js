import React from 'react';
import { Card, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem, CardImg} from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import  {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';

function RenderDish({dish}) {
	return(
		<div className="col-12 col-md-5 m-1">
			<Card>
				<CardImg top src={baseUrl+dish.image} alt={dish.name} />
				<CardTitle>{dish.name}</CardTitle>
				<CardBody>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		</div>
	);
}

function RenderComments({comments, postComment, dishId}) {
		if(comments != null)
		return(
			<div className="col-12 col-md-5 m-1">
				<h4>Comments</h4>
				<ul className="list-unstyled">
					{comments.map((comment) => {
						return(
							<li key={comment.id}>
							<p>{comment.comment}</p>
							<p>--{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
							</li>
						);
					})}
				</ul>
				<CommentForm dishId={dishId} postComment={postComment} />
			</div>
		);
		else return <div></div>;
}

const Dishdetail = (props) => {
	if (props.isLoading) {
		return (
			<div className="container">
				<div className="row">
					<Loading />
				</div>
			</div>
		);
	} else if (props.errMess) {
		return (
			<div className="container">
				<div className="row">
					<h4>{props.errMess}</h4>
				</div>
			</div>
		);
	} else if (props.dish) {
		return(
			<div className="container">
				<div>
					<Breadcrumb>
						<BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
						<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
					</Breadcrumb>
				</div>
				<div className="row">
					<RenderDish dish={props.dish} />
					<RenderComments comments = {props.comments} 
						postComment = {props.postComment}
						dishId = {props.dish.id}
					/>
				</div>
			</div>
		);
	}
}

export default Dishdetail;