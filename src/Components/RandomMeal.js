import React from 'react'
import axios from 'axios';

export default class RandomMeal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meals: [],          
        };
        this.getMeal = this.getMeal.bind(this)
    }
    getMeal() {
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(response => {
                console.log(response)
                this.setState({ meals: response.data.meals })
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const { meals } = this.state
        return (
            <div>
                <div className="hungry">
                    <h2>Bạn Đang đói bụng?</h2>
                    <p>Muốn gợi ý làm món gì đó không? Bấm vào nút bên dưới nhé</p>
                    <button className="get-meal" onClick={this.getMeal}>Xem thử</button>
                </div>

                <div>
                    {meals.map(meal =>
                        <div key={meal.idMeal}>
                            <h2 className="hungry">{meal.strMeal}</h2>
                            <div className="guide">
                                <div className="img"><img src={meal.strMealThumb} className="img-thumb" /></div>
                                <div className="instructions">
                                    <h4>Giới thiệu cách làm</h4>
                                    <p>{meal.strInstructions}</p>
                                </div>
                            </div>
                            <div className="guide">
                                <div className="ingredient">
                                    <h4>Nguyên liệu cần có</h4>
                                    <ul>
                                        <li>{meal.strIngredient1}</li>
                                        <li>{meal.strIngredient2}</li>
                                        <li>{meal.strIngredient3}</li>
                                        <li>{meal.strIngredient4}</li>
                                        <li>{meal.strIngredient5}</li>
                                        <li>{meal.strIngredient6}</li>
                                        <li>{meal.strIngredient7}</li>
                                    </ul>
                                </div>
                                <div className="video-resource">
                                    <h3>Video hướng dẫn</h3>
                                    <iframe width="420" height="315" src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`}>
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}