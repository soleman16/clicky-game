import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  card: {
    maxWidth: 200,
  },
  media: {
    height: 300,
  },
};

function MediaCard(props) {
  const { classes, onClick, image, id } = props;
  return (
    <Card className={classes.card} raised={true}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          className={classes.media}
          image={image}
          id={id}
        />
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
