import React from 'react';
import axios from 'axios';
import { Button, FormControl, Row, Col, ButtonToolbar } from 'react-bootstrap';


class JobsForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {states:{
			user: '',
			jobTitle: '',
			jobDescription: '',
			category: '',
			from: '',
			to: '',
		  salary: '',
			urgency: '',
			lat:'',
			lng:''
			},
			message:''

		}
		this.baseState = this.state;
		this.onChange = this.onChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	  this.handleClick = this.handleClick.bind(this);
	}

	onChange(e) {
	    var states = this.state.states;
      var name = e.target.name;
      var value = e.target.value;
      states[name] = value;
			 console.log(value);
      this.setState({states:states});
	};


	handleSubmit(event) {
		var that=this;
		event.preventDefault();
		axios.post('/job', this.state.states)
  			.then(function (response) {
  				that.setState({message:"Job Added"});

  			})
  			.catch(function (error) {
    		console.log(error);
  			});
		};
//need to check with the back-end !!!
		handleClick(event){
			var that = this;
			event.preventDefault();
			axios.post('/job', this.state.states)
				.then(function (response) {
					that.setState({urgency: 10})

				})
				.catch(function (error){
					console.log(error);
				});
		};

	render() {
		return (
			<center>
			<div id="jobform" className="container wrapper well"><br />
			<form onSubmit={this.handleSubmit}>
			<Row>
			<Col md={1}>
			</Col>
			<Col md={2}>
			<span>Job Title</span>
			</Col>
			<Col md={3}>
			<label >
			<FormControl maxLength={20} type="text" name="jobTitle" placeholder = "Job Title" autoFocus required onChange={this.onChange} />
			</label></Col>
			<Col md={2}>
			<span>Category</span>
			</Col>
			<Col md={3}>
			<label >
			<div className="form-group">
        <select name = "category" className="form-control selectpicker btn btn-default" id="catJ" onChange={this.onChange}>
          <option value="Select">Select Category</option>
          <option value="Driver">Driver</option>
          <option value="Home Maintenance">Home Maintenance</option>
          <option value="Computer Maintenance">Computer Maintenance</option>
          <option value="Babysitting">Babysitting</option>
          <option value="Tutoring">Tutoring</option>
        </select>
        </div>
			</label>
			</Col>
			<Col md={1}>
			</Col>
			</Row> <br />

			<Row>
			<Col md={1}>
			</Col>
			<Col md={2}>
			<span>Job Description</span>
			</Col>
			<Col md={8}>
			<label >
			<FormControl id="txtArea" componentClass="textarea"  maxLength={150} name="jobDescription" placeholder = "Job Description" autoFocus required onChange={this.onChange} />
			</label></Col>

			<Col md={1}>
			</Col>
			</Row><br />

			<Row>
			<Col md={1}>
			</Col>
			<Col md={2}>
			<span>From</span>
			</Col>
			<Col md={2}>
			<label >
			<FormControl type = "time" name = "from" placeholder = "From" autoFocus required onChange={this.onChange} />
			</label> </Col>
			<Col md={2}>
			<span>To</span>
			</Col>
			<Col md={2}>
			<label >
			<FormControl type = "time" name = "to" placeholder = "To" autoFocus required onChange={this.onChange} />
			</label></Col>
			<Col md={2}>
			<label >
			<div className="form-group">
				<select name = "salary" className="form-control selectpicker btn btn-default" id="sal" onChange={this.onChange}>
					<option value="Enter The Sallary">Enter The Salary</option>
					<option value="100-300">100-300</option>
					<option value="300-500">300-500</option>
					<option value="500-700">500-700</option>
					<option value="700-1000">700-1000</option>
				 </select>
				</div>
			</label></Col>
			<Col md={1}>
			</Col>
  	</Row><br/><br/>
		<Row>
		<Col md={2}>
				<form name="urgency" id="urg" className="btn btn-primary" >
				<input type="checkbox" value="1 Day: 2JD"/> 1 Day : 2JD<br/>
				<input type="checkbox" value="3 Days: 5JD"/>3 Days: 5JD<br/>
				<input type="checkbox" value="7 Days: 8JD"/>7 Days: 8JD<br/>
				<input type="submit" value="Urgent" className="btn btn-primary" type="submit" bsSize="large" onClick={this.handleClick}/>
					<script id="popup">
					function() {prompt("Please enter your credit Card number")}
					</script>
				</form>
			</Col>
			</Row>
			<Col md={2}>
			<span>Location</span>
			</Col>
			<Col md={3}>
			<FormControl maxLength={20} type="text" name="lat" placeholder = "lat" autoFocus required onChange={this.onChange} />
			</Col>
			<Col md={2}>

			</Col>
			<Col md={3}>
				<FormControl maxLength={20} type="text" name="lng" placeholder = "lng" autoFocus required onChange={this.onChange} />

			</Col>
			<Col md={1}>
			</Col>
			<br />
			    <Button id="jobb" className="btn btn-primary" type="submit" bsSize="large" >
				     Add
			    </Button>
			    <h3 className="SuccessMessage">{this.state.message}</h3>
			</form>
			</div>
			</center>
		)
	}
}


export default JobsForm;
