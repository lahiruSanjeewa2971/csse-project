import React from 'react'
import './Home.css'
import {Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Grid} from '@mui/material'
function ViewHome() {
    return (
        <div>
            
            <div className="imgcontainer" >
                <img src="https://images.freeimages.com/images/large-previews/bcb/chicago-big-buildings-1544023.jpg" alt=""
                style={{width:1500, height: 400, opacity: 0.45}}/>
                <div className="title">Explores Construction Company</div>
            </div>
            <div style={{marginTop: 150}}>
                <Grid style={{display: 'flex', marginLeft: '50px'}}>
                    <Grid item xs={6}   >
                        <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={require('D:/csse/client/src/Components/Images/2.jpg').default}
                                    alt="Site1"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Hilton
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>                 
                    </Grid>
                    <Grid item xs={6}   >
                        <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={require('D:/csse/client/src/Components/Images/3.jpg').default}
                                    alt="Site1"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Blue Sky
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>                 
                    </Grid>
                    <Grid item xs={6}  >
                        <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={require('D:/csse/client/src/Components/Images/4.jpg').default}
                                    alt="Site1"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    SBS
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>                 
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default ViewHome
