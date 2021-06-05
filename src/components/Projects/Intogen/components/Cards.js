// import React from 'react'
// import CardItem from './CardItem'
// import './Cards.css'

                            

// function Cards() {
//     return (
//         <div className="cards">
//             <h1>Learn more about Kolb's learning styles:</h1>
//             <div className="cards__container">
//                 <div className="cards__wrapper">
//                     <ul className="cards__items">
//                                     <CardItem    
//                             text="They want practical tasks and very little theory. They learn best from activities where:
//                             New experiences are emphasised.
//                             The focus is on the present and on doing such activities as games, problem solving,
//                             simulations.
//                             There is a lot of action and excitement.
//                             They can lead and be in the limelight.
//                             Ideas are generated without any concern about practical constraints.
//                             They have to respond to a challenge and take risks.
//                             The central focus is on team problem-solving. 
//                             Activistis are accomodators:

//                             They have the most hands-on approach, with a strong preference for doing rather than thinking. 
//                             When they lean they will ask 'what if?' and 'why not?' to support their action-first approach. 
//                             They do not like routine and will take creative risks to see what happens. 
//                             They learn better by themselves than with others."
//                             h5="ACTIVISTS"
//                             label="Concrete experiencer/Active experimenter"
//                         />

//                          <CardItem 
//                             text="They want handouts, something to take away and study. They learn best from activities where
//                             the learning forms a part of a conceptual whole, such as a model for a theory.
//                             There is time to explore the interrelationship amongst elements.
//                             They can explore the theory and methodology underlying the subject under investigation.
//                             They are intellectually stretched.
//                             There is a clear and obvious purpose to the activities.
//                             There is a reliance on rationality and logic.
//                             They can analyse situations and then generalise their findings.
//                             They are asked to understand complex situations.
//                             Theorists are assimilators:
//                             They have the most cognitive approach, preferring to think than to act. 
//                             When they learn they will ask 'What is there I can know?' and like organised and structured understanding. 
//                             Lectures are their preference, with demonstrations where possible, and will respect the knowledge of experts. 
//                             People with this style will have a strong control need. 
//                             They learn best with lectures that start from high-level concepts and work down to the detail."
//                             h5="THEORISTS"
//                             label="Abstract conceptualiser/Reflective observer"
//                         />
//                     </ul>
//                     <ul className="cards__items">
//                         <CardItem 
//                             text="They want lots of breaks to go off and read and discuss. They learn best from activities
//                             where there are opportunities to observe and consider. There is a strong element of passive
//                             involvement such as listening to a speaker or watching a video.
//                             There is time to think before having to act or contribute.
//                             There is opportunity for research and problems can be probed in some depth.
//                             They can review what was happening.
//                             They are asked to produce reports that carefully analyse a situation or issue.
//                             There is interaction with others without any risks of strong feelings coming to the fore.
//                             They can finalise a view without being put under pressure.
//                             Reflectors are divergers:
//                             take experiences and think deeply about them. 
//                             They diverge from a single experience to multiple possibilities. 
//                             When they learn they will ask 'why?', and will start from detail to logically work up to the big picture. 
//                             They like working with others but like things to remain calm – they will be distressed by conflicts in the group. 
//                             They like to receive constructive feedback."
//                             h5="REFLECTORS"
//                             label="Concrete experiencer/Reflective observer"
//                         />
//                         <CardItem 
//                             text="They want shortcuts and tips. They learn best from activities where
//                             there is a clear link back to some job-related problem.
//                             Material is directed towards techniques that make their work easier.
//                             They are able to practice what they have learned.
//                             They can relate to a successful role model.
//                             There are many opportunities to implement what has been learned
//                             The relevance is obvious and the learning is easily transferred to their jobs.
//                             What is done is practical such as drawing up action plans or trialing techniques or procedures.
//                             Pragmatists are convergers:
//                             They think about things and then try out their ideas to see if they work in practice. 
//                             When they learn they will ask 'how?', and will want to learn by understanding how things work in practice. 
//                             They like facts and will seek to make things efficient by making small and careful changes. 
//                             They prefer to work alone or independently."
//                             h5="PRAGMATISTS"
//                             label="Abstract conceptualization/Active experimenter"
//                         />
//                     </ul>
//                 </div>
//             </div>
            
//         </div>
//     )
// }

// export default Cards

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardDeck from 'react-bootstrap/CardDeck'

 
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
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

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CardDeck>
    <div>
    <Card style={{ width: "17rem"}}>
      <CardHeader style={{color: "#FF6600"}}
        title="ACTIVISTS"
        subheader="Concrete experiencer/Active experimenter"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
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
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          Activistists are accomodators:
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
          </div>
<div>
    <Card style={{ width: "17rem"}}>
    <CardHeader style={{color: "#FF6600"}}
      title="THEORISTS"
      subheader="Abstract conceptualiser/Reflective observer"
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
                        They want handouts, something to take away and study. They learn best from activities where
                           the learning forms a part of a conceptual whole, such as a model for a theory.
                            They are intellectually stretched.
                            There is a clear and obvious purpose to the activities.
                            There is a reliance on rationality and logic.
                          They can analyse situations and then generalise their findings.
                           They are asked to understand complex situations.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>
        Theorists are assimilators:
        </Typography>
        <Typography paragraph>
        They have the most cognitive approach, preferring to think than to act. 
                             When they learn they will ask 'What is there I can know?' and like organised and structured understanding. 
                             Lectures are their preference, with demonstrations where possible, and will respect the knowledge of experts. 
                             People with this style will have a strong control need. 
                            They learn best with lectures that start from high-level concepts and work down to the detail.
        </Typography>
      </CardContent>
    </Collapse>
    </Card>
</div>
<div>
    <Card style={{ width: "17rem"}}>
    <CardHeader style={{color: "#FF6600"}}
      title="REFLECTORS"
      subheader="Concrete experiencer/Reflective observer"
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
      They want lots of breaks to go off and read and discuss. They learn best from activities
                            where there are opportunities to observe and consider. There is a strong amount of passive
                           involvement, e.g. watching a video.
                           There is time to think before having to act or contribute.
                           There is opportunity for research and problems.
                           They are asked to produce reports that carefully analyse a situation or issue.
                           They can finalise a view without being put under pressure.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>
        Reflectors are divergers:
        </Typography>
        <Typography paragraph>
        take experiences and think deeply about them. 
                             They diverge from a single experience to multiple possibilities. 
                            When they learn they will ask 'why?', and will start from detail to logically work up to the big picture. 
                            They like working with others but like things to remain calm – they will be distressed by conflicts in the group. 
                           They like to receive constructive feedback.
        </Typography>
      </CardContent>
    </Collapse>
</Card>
</div>
<div>

<Card style={{ width: "17rem"}}>
    <CardHeader style={{color: "#FF6600"}}
      title="PRAGMATISTS"
      subheader="Abstract conceptualization/Active experimenter"
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
      They want shortcuts and tips. They learn best from activities where
                            there is a clear link back to some job-related problem.
                           Material is directed towards techniques that make their work easier.
                          They are able to practice what they have learned.
                          They can relate to a successful role model.
                          There are many opportunities to implement what has been learned.
                          Their work is practical such as drawing up action plans or trialing techniques or procedures.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>
        Pragmatists are convergers:
        </Typography>
        <Typography paragraph>
        They think about things and then try out their ideas to see if they work in practice. 
                          When they learn they will ask 'how?', and will want to learn by understanding how things work in practice. 
                          They like facts and will seek to make things efficient by making small and careful changes. 
                                                   They prefer to work alone or independently.
        </Typography>
      </CardContent>
    </Collapse>
  </Card>
  </div>
  </CardDeck>
  );

}