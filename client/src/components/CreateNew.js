import React, {Component} from 'react'
import Switch from 'react-switch'

export default class CreateNew extends Component {
    state = {
        checked:false
    }
    handleChange = (checked) => {
        this.setState({checked});
    }
    render() {
        return (
            <div className = "modal">
                <div className = "modal__content">
                    <h2 className = "modal__content-header">Create New</h2>
                    <h4 className = "modal__content-subheader">Product</h4>
                    <input className = "modal__content-input" placeholder = "Product Name"></input>
                    <h4 className = "modal__content-subheader">Last Ordered</h4>
                    <input className = "modal__content-input" placeholder = "yyyy-mm-dd"></input>
                    <h4 className = "modal__content-subheader">City</h4>
                    <input className = "modal__content-input" placeholder = "city"></input>
                    <h4 className = "modal__content-subheader">Country</h4>
                    <input className = "modal__content-input" placeholder = "country"></input>
                    <h4 className = "modal__content-subheader">Quantity</h4>
                    <input className = "modal__content-input" placeholder = "0"></input>
                    <h4 className = "modal__content-subheader">Status</h4>
                    <div className = "modal__content-status">
                        <h4 className = "modal__content-status-text">In Stock</h4>
                        <Switch onChange={this.handleChange} checked = {this.state.checked}></Switch>
                    </div>
                    <h4 className = "modal__content-subheader">Description</h4>
                    <input className = "modal__content-input  modal__content-input--description" placeholder = "(Optional)"></input>
                    <button className = "modal__content-submit">Save</button>
                    <h5 className = "modal__content-cancel">Cancel</h5>
                </div>
                
            </div>
        )
    }
}

