import React from 'react'
import Switch from 'react-switch'
import Select from 'react-select'
export default class CreateNew extends React.Component {
    state = {
        warehouses: this.props.locations,
        checked:false,
        active:"none",
        city: "City",
        country: "Country"
    }
    handleChange = (checked) => {
        this.setState({checked:checked});
    }
    toggleClass = () => {
        this.setState({ active: "flex" });
    };
    cancel = () => {
        this.setState({active: "none"})
    }
    onChangeFunc = (optionSelected)  => {
        const value = optionSelected.value;
       let test =  this.state.warehouses && this.state.warehouses.map(loc => {
            if(loc.warehouse1 === value)
            {
                return {Country: loc.country, City: loc.city}
            }
            return null
        })
        this.setState({
            country: test[0].Country,
            city: test[0].City
        })
      }
    render() {

        const options = this.state.warehouses && this.state.warehouses.map(loc => {
            return {value: loc.warehouse1, label: loc.warehouse1}
        });
        
        
            return (
                <>
                <button onClick = {this.toggleClass}>Open</button>
                <div className = 'modal' style = {{display: `${this.state.active}`}}>
                    <div className = "modal__content">
                        <h2 className = "modal__content-header">Create New</h2>
                        <div className = "modal__content-container">
                            <div className = "modal__content-container-input">
                                <h4 className = "modal__content-subheader">Product</h4>
                                <input className = "modal__content-input" placeholder = "Product Name"></input>
                            </div>
                            <div className = "modal__content-container-input">
                                <h4 className = "modal__content-subheader">Last Ordered</h4>
                                <input className = "modal__content-input" placeholder = "yyyy-mm-dd"></input>
                            </div>
                            <div className = "modal__content-container-input">
                                <h4  className = "modal__content-subheader">Warehouse</h4>
                                <Select options = {options} ref={(input) => {this.textInput = input}} onChange={this.onChangeFunc}></Select>
                            </div>
                            <div  className = "modal__content-container-input">
                                <h4 className = "modal__content-subheader ">City</h4>
                                <div className = "modal__content-div modal__content-input " ><p className = "modal__content-div-text">{this.state.city}</p></div>
                            </div>
                            <div  className = "modal__content-container-input">
                                <h4 className = "modal__content-subheader ">Country</h4>
                                <div className = "modal__content-div modal__content-input " ><p className = "modal__content-div-text">{this.state.country}</p></div>
                            </div>   
                            <div className = "modal__content-container-input">
                                <h4 className = "modal__content-subheader">Quantity</h4>
                                <input className = "modal__content-input" placeholder = "0"></input>
                            </div>
                            <div className = "modal__content-status">
                                <div>
                                    <h4 className = "modal__content-subheader">Status</h4>
                                    <h4 className = "modal__content-status-text">In Stock</h4>
                                </div>
                               
                                <Switch onChange={this.handleChange} checked = {this.state.checked}></Switch>
                            </div>
                            </div>
                            <h4 className = "modal__content-subheader">Description</h4>
                            <input className = "modal__content-input  modal__content-input--description" placeholder = "(Optional)"></input>
                            <div className = "modal__content-btn-container">
                                <button className = "modal__content-submit">Save</button>
                                <h5 onClick = {this.cancel} className = "modal__content-cancel">Cancel</h5>
                            </div>
                          
                    </div>
                </div>
                </>
            )


        
       
    }
}

