import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Nationality = () => {
    return (
        <div className="Nationality">
            <div className="chooseNationality">
                    Choose a Nationality: 
            </div>
                <div class="col-lg-3">
                    <select id = "countryCmbBox" class="form-control countrypicker" data-live-search="true">
                    </select>
                </div>

            <div className="cards">
                    <p className="cardsTitle">Kolb's Learning Style</p>
                    <hr className="borderCards"></hr>
                    <Button className="wholeCard">
                        <Card className="root">
                            <CardContent>
                                <Typography className="title" gutterBottom>
                                    ACTIVISTS
                                </Typography>
                                <Typography className="subTitle">
                                    (Concrete experiencer/ Active experimenter)
                                </Typography>
                            </CardContent>
                        </Card>
                    </Button>

                    <Button className="wholeCard">
                        <Card className="root">
                            <CardContent>
                                <Typography className="title" gutterBottom>
                                    THEORISTS
                                </Typography>
                                <Typography className="subTitle">
                                    (Abstract conceptualiser/Reflective observer)   
                                </Typography>
                            </CardContent>
                        </Card>
                    </Button>

                    <Button className="wholeCard">
                        <Card className="root">
                            <CardContent>
                                <Typography className="title" gutterBottom>
                                    REFLECTORS
                                </Typography>
                                <Typography className="subTitle">
                                    (Concrete experiencer/Reflective observer)
                                </Typography>
                            </CardContent>
                        </Card>
                    </Button>

                    <Button className="wholeCard">
                        <Card className="root">
                            <CardContent>
                                <Typography className="title" gutterBottom>
                                    PRAGMATISTS
                                </Typography>
                                <Typography className="subTitle">
                                (Abstract conceptualization/ Active experimenter)
                                </Typography>
                            </CardContent>
                        </Card>
                    </Button>
                </div>
            </div>
    );
}

export default Nationality;