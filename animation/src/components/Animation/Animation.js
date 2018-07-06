import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';

const Ball = (props) => {
    return (
        <div className='ball' style={{
            transform:`translate(${props.movingX}px, ${props.movingY}px)`
        }} />
    );
};

Ball.propTypes = {
    movingX: PropTypes.number,
    movingY: PropTypes.number
};
Ball.defaultProps = {
    movingX: 0,
    movingY: 0
};

class Cradle extends Component {
    state = {
        balls: [{
            movingX: 0,
            movingY: 0
        }, {
            movingX: 0,
            movingY: 0
        }, {
            movingX: 50,
            movingY: -50
        }]
    };

    animateLeftBottom = () => {
        const animation = () => {
            this.setState((prevState) => {
                const dx = 50 / 24;
                const {balls} = prevState;
                const copyBalls = [...balls];
                copyBalls[0].movingX = balls[0].movingX + dx;
                copyBalls[0].movingY = balls[0].movingY + dx;
                if(copyBalls[0].movingX >= 0){
                    copyBalls[0].movingX = 0;
                }
                if(copyBalls[0].movingY >= 50){
                    copyBalls[0].movingY = 0;
                }
                if(copyBalls[0].movingX >= 0 &&
                    copyBalls[0].movingY >= 0){
                    clearInterval(this[animationName]);
                }
                return {
                    balls: copyBalls
                }
            })
        };
        const animationName = Symbol("Left-Bottom");
        this[animationName] = setInterval(animation, 1000/24);
    };

    animateLeftTop = () => {
        const animation = () => {
            this.setState((prevState) => {
                const dx = 50 / 24;
                const {balls} = prevState;
                const copyBalls = [...balls];
                copyBalls[0].movingX = balls[0].movingX - dx;
                copyBalls[0].movingY = balls[0].movingY - dx;
                if(copyBalls[0].movingX <= -50){
                    copyBalls[0].movingX = -50;
                }
                if(copyBalls[0].movingY <= -50){
                    copyBalls[0].movingY = -50;
                }
                if(copyBalls[0].movingX <= -50 &&
                    copyBalls[0].movingY <= -50){
                    clearInterval(this[animationName]);
                }
                return {
                    balls: copyBalls
                }
            })
        };
        const animationName = Symbol("Left-Top");
        this[animationName] = setInterval(animation, 1000/24);
    };

    componentDidMount(){
        this.animateLeftTop();
        setTimeout(() => {
            this.animateLeftBottom()
        }, 1500)
    }

    render() {
        return (
            <div className="ball-wrapper">
                {this.state.balls.map((ball) => (
                    <Ball movingX={ball.movingX} movingY={ball.movingY}/>
                ))}

            </div>

        )
    }
}


export default Cradle;