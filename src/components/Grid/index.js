import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '../Card';
import Nav from '../Nav';
import baseballCards from '../../baseballCards.json';

const styles = theme => ({
    root: {

    },
    grid: {
        margin: 1,
        width: 1000
    }
});

class GuttersGrid extends React.Component {
    state = {
        id: 0,
        chosenPlayers: [],
        score: 0,
        topScore: 0
    };

    shuffle = a => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    updateScoreboard = event => {
        const {id} = event.target;
        const {score, topScore} = this.state;

        if(this.state.chosenPlayers.includes(id)){
            if (score > topScore) {
                this.setState({topScore: score, score: 0, chosenPlayers: []});
            } 
            else {
                this.setState({score: 0, chosenPlayers: []});
            }
        }
        else {
            this.setState(prevState => ({
                chosenPlayers: [...prevState.chosenPlayers, id],
                score: this.state.score + 1,
            }));
        }
    }

    render() {
        const { classes } = this.props;
        const { score, topScore } = this.state;

        return (
            <div className={classes.root}>
                <Nav score={score} topScore={topScore}/>
                <Grid container className={classes.grid} spacing={40}>
                    {
                        this.shuffle(baseballCards).sort().map(card => (
                            <Grid key={card.id} item xs={3}>
                                <Card id={card.id} image={card.image} onClick={this.updateScoreboard}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        );
    }
}

GuttersGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);