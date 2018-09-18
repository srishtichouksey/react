import React, { Component } from 'react';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import { Switch , Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, fetchDishes, fetchComments, fetchPromos, fetchleaders, postFeedback } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    dishes : state.dishes,
    comments : state.comments,
    leaders : state.leaders,
    promotions : state.promotions
  }
}

const mapDispatchToProps = (dispatch) => ({
  postFeedback:(firstname, lastname,  agree,telnum, email, contact_type, message) => dispatch(postFeedback(firstname, lastname,  agree,telnum, email, contact_type, message)),
  postComment:(dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  fetchPromos: () => {dispatch(fetchPromos())},
  fetchComments: () => {dispatch(fetchComments())},
  fetchleaders: () => {dispatch(fetchleaders())}
});

class Main extends Component {

  componentDidMount() {
    console.log("HII Render is done and I am here");
    this.props.fetchDishes();
    this.props.fetchPromos();
    this.props.fetchComments();
    this.props.fetchleaders(); 
  }

  shouldComponentUpdate() {
    console.log('Is shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('I am calling third parties libraries');
  }
  render() {
      console.log("Hi i am called after shouldComponentUpdate");
     const HomePage = () => {
        return(
            <Home 
                dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                dishesLoading={this.props.dishes.isLoading}
                dishesErrMess={this.props.dishes.errMess}
                promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                promosLoading= {this.props.promotions.isLoading}
                promosErrMess = {this.props.promotions.errMess}
                leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                leadersLoading={this.props.leaders.isLoading}
                leadersErrmess = {this.props.leaders.errMess}
            />
        );
      }

    const DishWithId = ({match}) => {
      return(
        <Dishdetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
          isLoading = {this.props.dishes.isLoading} 
          errMess = {this.props.dishes.errMess}
          comments= {this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
          commentserrMess = {this.props.comments.errMess}
          commentsisLoading = {this.props.comments.isLoading}
          postComment = {this.props.postComment}
        />
      );
    }

    return (
        <div>
          <Header />
          <Switch>
            <Route  path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route exact path="/contactus" component={() => <Contact postFeedback = {this.props.postFeedback} />} />
            <Route path="/aboutus" component={() => <About leaders={this.props.leaders.leaders} />} />
            <Redirect to="/home" /> 
          </Switch>
          <Footer />
        </div>     
    );  
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));