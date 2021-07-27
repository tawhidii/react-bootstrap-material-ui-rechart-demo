import React from 'react';
import { Card,CardActionArea,CardMedia,
        CardContent,Typography, CardActions,Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
            root: {
                maxWidth: 345,
                backgroundColor:"#F0F8FF"
            },
    });

const MUIBreakingNews = (props) => {
  
    const {title,description,urlToImage,url} = props.news
    const classes = useStyles()
    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="News"
            height="140"
            image={urlToImage}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button  size="small" variant="contained" color="primary" onClick={()=>window.open(`${url}`,'_blank')}>
            Read News
          </Button>
        </CardActions>
      </Card>
    );
};

export default MUIBreakingNews;