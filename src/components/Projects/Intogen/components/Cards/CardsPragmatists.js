
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
// import clsx from 'clsx';
// import Collapse from '@material-ui/core/Collapse';
// import IconButton from '@material-ui/core/IconButton';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import './Cards.css';
 
 
//   const useStyles = makeStyles((theme) => ({
//     root: {
//        maxWidth: 345,
//     },
//     bullet: {
//       display: 'inline-block',
//       margin: '0 2px',
//       transform: 'scale(0.8)',
//     },
//     title: {
//       fontSize: 14,
//     },
//     pos: {
//       marginBottom: 12,
//     },
//     // Expanding component
//     expand: {
//       marginLeft: 'auto',
//       transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//       }),
//     },
//     expandOpen: {
//       transform: 'rotate(180deg)',
//     },

//   }));

// export default function OutlinedCard() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(-1);

//   const handleExpandClick = i => {
//      setExpanded(expanded === i ? -1 : i);
//   };

//   return (
//     <div>
//       <div className= "page-container">
        
//         {/* Card 1: Acitvists */}
//         <Card className="Cards" variant="outlined">
//           <CardContent>
//             <Typography style={{ color:"#FF6600"}} variant="h5" component="h2">
//               ACTIVISTS
//             </Typography>
//             <Typography className={classes.title} color="textSecondary" gutterBottom>
//               Concrete experiencer<br/>
//               Active experimenter
//             </Typography>
//             <Typography variant="body2" component="p">
//             Activists learning style is: „hands-on“. They rely on intuition rather than logic and have a strong preference for „doing“ rather than „thinking“.
//             They use other people’s analysis and take a more practical, experimental approach. 
//             They like new challenges, experiences and take risks.
//             The central focus is on team problem-solving.
//             </Typography>
//           </CardContent>
//           <CardActions>
//             {/* <IconButton className={clsx(classes.expand, {
//               [classes.expandOpen]: expanded,
//               })}
//               onClick={handleExpandClick}>  */}
//               <IconButton
//                 onClick={() => handleExpandClick(i)}
//                 aria-expanded={expanded === i}
//                 aria-label="show more">
//               <ExpandMoreIcon />
//             </IconButton>
//           </CardActions>     
//           <Collapse in={expanded === i} timeout="auto" unmountOnExit>
//             <CardContent>
//               <Typography paragraph className="paragraphline">
//               Acitivists are accomodators:
//               </Typography>
//               <Typography variant="body2" component="p">
//               Accomodators tend to rely on other people's information. 
//               They are gut oriented people and don’t like logical analysis. 
//               They do not like routine and will take creative risks to see what happens.
//               People with this learning style will ask themselves: <br/>
//               ‚What if?‘
//               </Typography>
//             </CardContent>
//           </Collapse>
//         </Card>



    
//         {/* Cards 2: Theorists */}
//         <Card className="Cards" variant="outlined">
//           <CardContent>
//             <Typography style={{ color:"#FF6600"}} variant="h5" component="h2">
//               THEORISTS
//             </Typography>
//             <Typography className={classes.title} color="textSecondary" gutterBottom>
//               Abstract conceptualiser<br/>
//               Reflective observer
//             </Typography>
//             <Typography variant="body2" component="p">
//               Theorists learning preference involves a logical approach. 
//               Ideas and concepts are more important than people. 
//               People with this learning style want a good and clear explanation rather than a practical opportunity. 
//               They have an understanding of wide-ranging information and organizing it in a clear, logical way.
//             </Typography>
//           </CardContent>
//           <CardActions>
//               <IconButton
//                 className={clsx(classes.expand, {
//                   [classes.expandOpen]: expanded,
//                 })}
//                 onClick={handleExpandClick}>
//                 <ExpandMoreIcon />
//               </IconButton>
//           </CardActions>     
//           <Collapse in={expanded} timeout="auto" unmountOnExit>
//             <CardContent>
//               <Typography paragraph className="paragraphline">
//                 Theorists are assimilators:
//               </Typography>
//               <Typography variant="body2" component="p">
//               Assimilators are less focused on people and more interested in ideas and abstract concepts.  
//               They are more attracted to logically sounding theories.
//               They prefer readings, lectures and having time to think things through.
//               People with this learning style will ask themselves: <br/>
//               ‚What is there I can know?‘
//               </Typography>
//             </CardContent>
//           </Collapse>
//         </Card>

//         {/* Card 3: Reflectors */}
//         <Card className="Cards" variant="outlined">
//           <CardContent>
//             <Typography style={{ color:"#FF6600"}} variant="h5" component="h2">
//               REFLECTORS
//             </Typography>
//             <Typography className={classes.title} color="textSecondary" gutterBottom>
//               Concrete experiencer<br/>
//               Reflective observer
//             </Typography>
//             <Typography variant="body2" component="p">
//               Reflectors are able to look at things from different perspectives. 
//               They are sensitive people and prefer to watch, rather than do. 
//               People with this learning style like to gather information and use their own imagination to solve problems and conflicts. 
//               They are best at viewing concrete situations from different viewpoints.
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <IconButton
//               className={clsx(classes.expand, {
//                 [classes.expandOpen]: expanded,
//               })}
//               onClick={handleExpandClick}>
//               <ExpandMoreIcon />
//             </IconButton>
//           </CardActions>     
//           <Collapse in={expanded} timeout="auto" unmountOnExit>
//             <CardContent>
//               <Typography paragraph className="paragraphline">
//                 Reflectors are divergers:
//               </Typography>
//               <Typography variant="body2" component="p">
//                 People with this learning style perform better in the idea of generating situations, like brainstorming. 
//                 Reflectors have an interest in culture and like to gather information. 
//                 They are imaginative, emotional and are interested in people. 
//                 People with this learning style will ask themselves: <br/>
//                 ‚Why?‘
//               </Typography>
//             </CardContent>
//           </Collapse>
//         </Card>

//         {/* Card 4: Pragmatists */}
//         <Card className="Cards" variant="outlined">
//           <CardContent>
//             <Typography style={{ color:"#FF6600"}} variant="h5" component="h2">
//               PRAGMATISTS
//             </Typography>
//             <Typography className={classes.title} color="textSecondary" gutterBottom>
//               Abstract conceptualization <br/>
//               Active experimenter
//             </Typography>
//             <Typography variant="body2" component="p">
//               Pragmatists like to solve problems and find solutions to practical issues. 
//               People with this learning style prefer technical tasks and are also less interested in people and their personal aspects.
//               They are best at finding practical uses for theories and ideas. 
//               They make decisions by finding solutions to problems.
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <IconButton
//               className={clsx(classes.expand, {
//                 [classes.expandOpen]: expanded,
//               })}
//               onClick={handleExpandClick}>
//               <ExpandMoreIcon />
//             </IconButton>
//           </CardActions>     
//           <Collapse in={expanded} timeout="auto" unmountOnExit>
//             <CardContent>
//               <Typography paragraph className="paragraphline">
//                 Pragmatists are convergers:
//               </Typography>
//               <Typography variant="body2" component="p">
//                 People with converging learning styles are more attracted to technology. 
//                 They like to experiment with new ideas and to work with practical applications. 
//                 They like to figure out how things work in practise. 
//                 Pragmatists like facts and effiency. 
//                 People with this learning style will ask themselves: <br/>
//                 ‚How?‘
//               </Typography>
//             </CardContent>
//           </Collapse>
//         </Card>
//       </div>
//     </div>
//   );
// }

// import React, { Fragment } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
// import IconButton from "@material-ui/core/IconButton";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// const useStyles = makeStyles(theme => ({
//   card: {
//     maxWidth: 345,
//     marginBottom: 15
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%" // 16:9
//   },
//   expand: {
//     transform: "rotate(0deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest
//     })
//   },
//   expandOpen: {
//     transform: "rotate(180deg)"
//   },
//   avatar: {
//     width: 90
//   },
//   root: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     "& > *": {
//       margin: theme.spacing(0.5)
//     }
//   },
//   list: {
//     width: 200
//   }
// }));

// const ItininerariesList = ({ itineraries, activities }) => {
//   const classes = useStyles();
//   const [expandedId, setExpandedId] = React.useState(-1);

//   let path = window.location.pathname;

//   const itinerariesPerCity = [{ _id: "1" }];

//   const handleExpandClick = i => {
//     setExpandedId(expandedId === i ? -1 : i);
//   };

//   return (
//     <div className="singleCards">
//       <Fragment>
//         {itinerariesPerCity.map((itinerary, i) => (
//           <Card className={classes.card} key={itinerary._id}>
//             <CardContent />
//             <CardActions disableSpacing>
//               <IconButton
//                 onClick={() => handleExpandClick(i)}
//                 aria-expanded={expandedId === i}
//                 aria-label="show more"
//               >
//                 <ExpandMoreIcon />
//               </IconButton>
//             </CardActions>
//             <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
//               <CardContent>
//                 <div>ActivitiesList</div>
//               </CardContent>
//             </Collapse>
//           </Card>
//         ))}     
//       </Fragment>
//     </div>
//   );
// };

// export default ItininerariesList;

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
       maxWidth: 200,
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
              Pragmatists like to solve problems and find solutions to practical issues. 
              People with this learning style prefer technical tasks and are also less interested in people and their personal aspects.
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
                They like to figure out how things work in practise. 
                Pragmatists like facts and effiency. 
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