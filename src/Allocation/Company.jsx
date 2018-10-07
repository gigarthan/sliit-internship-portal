/*Test component to simulate a company profile page: Where our InternList component will render , retrieving interns of that company */
/*To load a company page manually(for now) ,since its using route-parameters, type /(any company id): Eg: localhost:3000/1 OR localhost:3000/5 etc. */
import React, { Component } from 'react';
import InternList from './InternList';
import { connect } from 'react-redux';


class Company extends Component {
    render() {
        return (
            <div className="ui container">
                <h1>Company {this.props.company.name}</h1>
                <InternList />
            </div>
        )
    }
}

//To fetch the company name (id already recieved as route-param)
const mapStateToProps = (state, ownProps) => {
    let id = Number(ownProps.match.params.company_id);

    return {
        company: state.companies.companies.find(company => company.id === id)
    }
}

export default connect(mapStateToProps)(Company);