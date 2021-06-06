
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Cards.css';
 
 
 const useStyles = makeStyles((theme) => ({
    root: {
       maxWidth: 345,
     },
     bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    // Expanding component
     expand: {
       transform: 'rotate(0deg)',
       marginLeft: 'auto',
       transition: theme.transitions.create('transform', {
         duration: theme.transitions.duration.shortest,
       }),
     },
     expandOpen: {
       transform: 'rotate(180deg)',
     },

   }));

export default function OutlinedCard() {
  const classes = useStyles();
   const [expanded, setExpanded] = React.useState(false);

   const handleExpandClick = () => {
     setExpanded(!expanded);
   };

  return (
    <div>
    <div className= "page-container">
      
      {/* Card 1: Acitvists */}
      <Card className="Cards" variant="outlined">
        <CardContent>
          <Typography style={{ color:"#FF6600"}} variant="h5" component="h2">
            ACTIVISTS
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Concrete experiencer<br/>
            Active experimenter
          </Typography>
          <Typography variant="body2" component="p">
            They want practical tasks and very little theory. They learn best from activities where:
            New experiences are emphasised.
            The focus is on the present and on doing such activities as games, problem solving,
            simulations.
            There is a lot of action and excitement.
            They can lead and be in the limelight.
            Ideas are generated without any concern about practical constraints.
            They have to respond to a challenge and take risks.
            The central focus is on team problem-solving. 
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}>
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>     
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph className="paragraphline">
            Acitivists are accomodators:
            </Typography>
            <Typography paragraph>
            They have the most hands-on approach, with a strong preference for doing rather than thinking. 
            When they lean they will ask 'what if?' and 'why not?' to support their action-first approach. 
            They do not like routine and will take creative risks to see what happens. 
            They learn better by themselves than with others.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>



  
  {/* Cards 2: Theorists */}
  <Card className="Cards" variant="outlined">
      <CardContent>
        <Typography style={{ color:"#FF6600"}} variant="h5" component="h2">
          THEORISTS
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Abstract conceptualiser<br/>
        Reflective observer
        </Typography>
        <Typography variant="body2" component="p">
  Theorists learning preference involves a logical approach. 
  Ideas and concepts are more important than people.
  These people want a good, clear explanation rather than a practical opportunity. 
  They have an understanding of wide-ranging information and organizing it in a clear, logical way.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
         className={clsx(classes.expand, {
           [classes.expandOpen]: expanded,
         })}
         onClick={handleExpandClick}>
         <ExpandMoreIcon />
       </IconButton>
     </CardActions>     
     <Collapse in={expanded} timeout="auto" unmountOnExit>
       <CardContent>
         <Typography paragraph className="paragraphline">
         Theorists are assimilators:
         </Typography>
         <Typography variant="body2" component="p">
        People who are Assimilators are less focused on people and more interested in ideas and abstract concepts.  
        They are more attracted to logically sounding theories.
        They prefer readings, lectures and having time to think things through.
        People with this learning style will ask themselves: <br/>
        ‚What is there I can know?‘
        </Typography>
       </CardContent>
       </Collapse>
    </Card>

          {/* Card 3: Reflectors */}
    <Card className="Cards" variant="outlined">
      <CardContent>
        <Typography style={{ color:"#FF6600"}} variant="h5" component="h2">
          REFLECTORS
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Concrete experiencer<br/>
        Reflective observer
        </Typography>
        <Typography variant="body2" component="p">
        Reflectors are able to look at things from different perspectives.
        They tend to be sensitive and prefer to watch, rather than do.
        They gather information and use imagination to solve problems. 
        They are best at viewing concrete situations from a different viewpoints.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
         className={clsx(classes.expand, {
           [classes.expandOpen]: expanded,
         })}
         onClick={handleExpandClick}>
         <ExpandMoreIcon />
       </IconButton>
     </CardActions>     
     <Collapse in={expanded} timeout="auto" unmountOnExit>
       <CardContent>
         <Typography paragraph className="paragraphline">
         Reflectors are divergers:
         </Typography>
         <Typography variant="body2" component="p">
        Diverging learning styles perform better in situations that require idea generating, like brainstorming. 
        Reflectors have a broad interest in culture and like to gather information.
        They are interested in people and tend to be very imaginative and emotional. 
        People with this learning style will ask themselves: <br/>
        ‚Why?‘
        </Typography>
       </CardContent>
       </Collapse>
    </Card>

         {/* Card 4: Pragmatists */}
    <Card className="Cards" variant="outlined">
      <CardContent>
        <Typography style={{ color:"#FF6600"}} variant="h5" component="h2">
          PRAGMATISTS
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Abstract conceptualization <br/>
        Active experimenter
        </Typography>
        <Typography variant="body2" component="p">
        Pragmatists like to solve problems and will use their learning to find solutions to practical issues.
        They prefer technical tasks and are also less interested in people and their personal aspects.
        They are best at finding practical uses for theories and ideas. 
        They make decisions by finding solutions to problems.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
         className={clsx(classes.expand, {
           [classes.expandOpen]: expanded,
         })}
         onClick={handleExpandClick}>
         <ExpandMoreIcon />
       </IconButton>
     </CardActions>     
     <Collapse in={expanded} timeout="auto" unmountOnExit>
       <CardContent>
         <Typography paragraph className="paragraphline">
         Pragmatists are convergers:
         </Typography>
         <Typography variant="body2" component="p">
         People with converging learning styles are more attracted to technology. 
         They like to experiment with new ideas and to work with practical applications. 
         They like to figure out how things work in practise. Pragmatists like facts and effiency. 
        People with this learning style will ask themselves: <br/>
        ‚How?‘
        </Typography>
      </CardContent>
      </Collapse>
      </Card>
      </div>
      </div>
);
}