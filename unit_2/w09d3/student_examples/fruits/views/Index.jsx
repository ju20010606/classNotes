const React = require('react');
const Default = require('./Default')

class Index extends React.Component {
    render() {
        console.log(this.props);
        // const title = this.props.title;
        // const fruits = this.props.fruits;
        const {title, fruits} = this.props
        return (
            <Default>
                <h1>{this.props.title}</h1>
                <a href='/fruits/new'>Add New Fruit</a>
                <div>
                    {this.props.fruits.map((fruit, index) => {
                    return (
                        <div>
                            <p>The {fruit.name} is {fruit.color}</p>
                            <p>{fruit.readyToEat ? 'It is ready to eat' : 'It is not ready to eat'}</p>
                            <a href={`/fruits/${index}`}>See More Fruit</a>
                        </div>
                        )
                    })}
                </div>
            </Default>
        ) 
    }
}

module.exports = Index;