import React, { useState } from 'react'
import Product from './components/Product/Product'
// import { useState } from 'react'
import './App.css'
class App extends React.Component {
    state = {
        products: [
            { title: 'book3', price: 79 },
            { title: 'note book3', price: 30 }
        ],
    }
    changePriceHandler = (newTitle) => {
        this.setState({
            products: [
                { title: newTitle, price: 5 },
                { title:'note book3', price: 2 }
            ],
        })
    }

    render() {
        return (
            <div className='center'>
                <h2>book store</h2>
                <Product
                    title={this.state.products[0].title}
                    price={this.state.products[0].price}
                    
                />
                <Product
                    title={this.state.products[1].title}
                    price={this.state.products[1].price}
                    // click={this.changePriceHandler.bind(this, 'New Title')}
                    click = {()=> this.changePriceHandler('New Title')}
                />
                <button onClick={this.changePriceHandler}>change price</button>
            </div>

        )
    }
}
export default App