import React from "react";
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import vision from '../assets/vision.svg'
import consultation from '../assets/consultationIcon.svg'
import mockup from '../assets/mockupIcon.svg'
import review from '../assets/reviewIcon.svg'
import design from '../assets/designIcon.svg'
import build from '../assets/buildIcon.svg'
import launch from '../assets/launchIcon.svg'
import maintain from '../assets/maintainIcon.svg'
import iterate from '../assets/iterateIcon.svg'



import  technologyAnimation from '../animations/technologyAnimation/data'


const useStyles= makeStyles(theme => ({
    rowContainer : {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("xs")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em"

           
        }
    },

}))

export default function Revolution() {

    const classes = useStyles();
    const theme=useTheme()
    const matchesMD =useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM =useMediaQuery(theme.breakpoints.down("sm"));

    const defaultOptions = {
        loop: true,
      autoplay: true, 
      animationData: technologyAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
        <Grid 
            container 
            direction="column"
             className={classes.rowContainer}
             style={{marginTop: "2em"}}
        >
                <Grid item>
                    <Typography 
                    align={matchesMD ? "center"  : undefined}
                        variant="h2" 
                        style={{fontFamily: "Pacifico"}}
                    >
                            The Revolution
                    </Typography>
                </Grid>
                <Grid item container direction={matchesMD ? "column" :"row" }  alignItems="center" 
                className={classes.rowContainer}
                style={{marginTop: "5em"}}
                >
                    <Grid item lg>
                        <img  src={vision}  alt="mountain through binoculars" 
                        style={{
                            maxWidth: matchesSM ? 300 : "40em" ,
                            marginRight: matchesMD ? 0 :"5em",
                            marginBottom: matchesMD ? "5em" : 0
                            }}/>
                    </Grid>
                    <Grid item container direction="column"  lg style={{maxWidth: "40em"}}>
                        <Grid item >
                            <Typography
                            align={ matchesMD ? "center" :"right"} 
                                 variant="h4"  
                                 gutterBottom
                            >   
                                    Vision
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography
                                    align={ matchesMD ? "center" :"right"} 
                                 variant="body1"  
                                 paragraph
                            >   
                                   The rise of computers, and subsequently the internet, has completely altered every 
                                   aspect of human life. This has increased our comfort , broadened our connections, 
                                   and  reshaped how we view the world.
                            </Typography>

                            <Typography
                                 variant="body1"  
                                 align={ matchesMD ? "center" :"right"} 
                                 paragraph
                            >   
                                What once was confined to huge rooms and teams of enginers now 
                                resides in every single one of our hands . Harnessing this 
                                unlimited potential by using it to solve problems and better lives is at 
                                the heart of everything we do.   
                            </Typography>  

                            <Typography
                                 variant="body1"  
                                 align={ matchesMD ? "center" :"right"} 
                                 paragraph
                            >   
                                   We want to help business capitalise on the latest and greatest technology.
                                   The best way to predict the future is to be the one building it, and we want
                                   to help guide the world into this next chapter of technology expansion, exploration, 
                                   and innovation.
                            
                            </Typography>

                            <Typography
                                 variant="body1"
                                 align={ matchesMD ? "center" :"right"}  
                                 paragraph
                            >   
                            By holding ourselves to rigorous standards and pristine quality, we can ensure you have the 
                            absolute best tools neccessary to thrive in this new frontier.                                   
                            </Typography>

                            <Typography
                                 variant="body1" 
                                 align={ matchesMD ? "center" :"right"}  
                                 paragraph
                            >   
                            We see a future where every individual has personalised software custom tailored to their lifestyle,
                            culture, and interests, helping them overcome life's obstacles.Each project is a step towards that goal.                                
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container direction={matchesMD ? "column" :"row" }    alignItems="center"
                 className={classes.rowContainer}
                 style={{marginTop: "10em" , marginBottom: "10em"}}
                 >
                    
                    <Grid item container direction="column"  lg style={{maxWidth: "40em"}}>
                        <Grid item >
                            <Typography
                                 align={ matchesMD ? "center" :undefined} 
                                 variant="h4"  
                                 gutterBottom
                            >   
                                    Technology
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography
                                align={ matchesMD ? "center" :undefined}  
                                 variant="body1"  
                                 paragraph
                            >   
                                   In 2013 , Facebook invented a new way of buidling websites. This 
                                   new system, React.js , completely revolutionizes the process and practices of website 
                                   development.
                            </Typography>

                            <Typography
                                 variant="body1"  
                                 align={ matchesMD ? "center" :undefined} 
                                 paragraph
                            >   
                                Instead of chauning together long indidividual pages, like traditional websites , React websites
                                are built with litle chunks of code called components. These components are faster , easier to maintain,
                                and are easily reused and customized , each serving a singular purpose.
                                  
                            </Typography>  

                            <Typography
                                 variant="body1"  
                                 align={ matchesMD ? "center" :undefined} 
                                 paragraph
                            >   
                                  Two years later they shocked the world by releaing a similar syetsm ,React Native , for producing ios and 
                                  android apps.Instead of having to master two completely separate development platforms, you can leaverage 
                                  the knowledge you already possessed from building websites and reapply it directly! This was a huge leap forward.
                            
                            </Typography>

                            <Typography
                                 variant="body1"
                                 align={ matchesMD ? "center" :undefined} 
                                 paragraph
                            >   
                           This Technology is now being used by companies like AirBnB , Microsoft , Netflix, Pininterests, Skype ,Testla,
                           UberEats, and when Facebook purchased Instagram large portions of it were even rebuilt using React.                                 
                            </Typography>

                            <Typography
                                 variant="body1" 
                                 align={ matchesMD ? "center" :undefined} 
                                 paragraph
                            >   
                           Developers have since built on the top of these System by automating  projrcts setup and deployement , allowing 
                           creators to focus as much as possible on their work itself                               
                            </Typography>
                            <Typography
                                 variant="body1" 
                                 align={ matchesMD ? "center" :undefined} 
                                 paragraph
                            >   
                            These technical advancement translate into savings by significantly reducing 
                            the workload and streamlining the workflow for developing new pieces of software , while allows
                            lowering the barrier to entry for mobile app development.
                                                 
                            </Typography>
                            

                            <Typography
                                 variant="body1" 
                                 align={ matchesMD ? "center" :undefined} 
                                 paragraph
                            >   
                              This puts personalization in your pocket - faster , better , and more affordable than ever before.                          
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item container justify={matchesMD ? "center" :"flex-end"} lg>
                        <Lottie options={defaultOptions} isStopped={true}  style={{maxWidth: "40em", margin: 0}}/>
                    </Grid>

                </Grid>

                <Grid item container direction="row" justify="center" className={classes.rowContainer}>
                    <Grid item>
                        <Typography variant="h4" gutterBottom>
                            Process
                        </Typography>
                    </Grid>
                </Grid>


                <Grid item container direction={matchesMD ? "column" : "row" } 
                    className={classes.rowContainer}
                    style={{backgroundColor: "#B3B3B3", height: "90em"}}

                >
                    <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg >
                        <Grid item>
                            <Typography variant="h4" align={ matchesMD ? "center" :undefined}  gutterBottom style={{color: "#000",marginTop: "5em" }}>
                                Consultation
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography  align={ matchesMD ? "center" :undefined} variant="body1" style={{color: "#fff" , maxWidth: "20em"}}  paragraph>
                                     Our process begins the moment you realize you need a piece of
                                     technology for your business . Whether you already have an idea for where 
                                     to start and what to do, or if you  just know you want to step things, our 
                                     initial Consultation will help you examine your business holistically 
                                     to find the best solutions.
                            </Typography>

                            <Typography  align={ matchesMD ? "center" :undefined}  variant="body1" style={{color: "#fff" ,  maxWidth: "20em"}} paragraph>
                                    Detailed notes will be taken on your requirements and constraints , while takingcare to 
                                    identify other potential areas for consideration.
                            </Typography>

                            <Typography align={ matchesMD ? "center" :undefined}   variant="body1" style={{color: "#fff",  maxWidth: "20em" }}  paragraph>
                                    Cutting-edge  advantages in machine learning like object  detection and natural 
                                    language processing allow computers to do things previosly unimaginable, and our expertise 
                                    and intuition will help usher you into this new future of possibilities.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item lg style={{alignSelf: "center" }}>
                        <img src={consultation} alt="handshake"  width="100%" style={{maxWidth: 700}} />
                    </Grid>
                </Grid>


                <Grid item container direction={matchesMD ? "column" : "row" } 
                    className={classes.rowContainer}
                    style={{backgroundColor: "#FF7373", height: "90em"}}

                >
                    <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined}  lg >
                        <Grid item>
                            <Typography  align={ matchesMD ? "center" :undefined}  variant="h4" gutterBottom style={{color: "#000",marginTop: "5em" }}>
                               Mockup
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography  align={ matchesMD ? "center" :undefined}  variant="body1" style={{color: "#fff" , maxWidth: "20em"}}  paragraph>
                                     After we settle on the best path forward and decide on a  solution to pursue , details
                                     like the cost and timeline will be finalised.
                            </Typography>

                            <Typography  align={ matchesMD ? "center" :undefined}  variant="body1" style={{color: "#fff" ,  maxWidth: "20em"}} paragraph>
                                    Then it's a time for us to start on your minimum viable product . That's 
                                    just a fancy term for a mockup, which doesn't  include colors, images, or any other 
                                    polished design elements , but captures the essential layout structure and functionality.    
                            </Typography>

                            <Typography align={ matchesMD ? "center" :undefined}  variant="body1" style={{color: "#fff",  maxWidth: "20em" }}  paragraph>
                                   This helps us understand and refine the solution itself before getting distracted 
                                   by specifics and looks. 
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item lg style={{alignSelf: "center" }}>
                        <img src={mockup} alt="basic website design outline " width="100%"  style={{maxWidth: 1000}}/>
                    </Grid>
                </Grid>



                <Grid item container direction={matchesMD ? "column" : "row" } 
                    className={classes.rowContainer}
                    style={{backgroundColor: "#39B5A4", height: "90em"}}

                >
                    <Grid item container direction="column"  alignItems={matchesMD ? "center" : undefined}  lg >
                        <Grid item>
                            <Typography  align={ matchesMD ? "center" :undefined}  variant="h4" gutterBottom style={{color: "#000",marginTop: "5em" }}>
                              Review 
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography  align={ matchesMD ? "center" :undefined}  variant="body1" style={{color: "#fff" , maxWidth: "20em"}}  paragraph>
                                     Before moving any farther we come back to you with our progress .This 
                                     gives you the freedom to discuss any changes you may want or any ideas you may have come
                                     up with before any heavy lifting has been done.
                            </Typography>

                            <Typography align={ matchesMD ? "center" :undefined}  variant="body1" style={{color: "#fff" ,  maxWidth: "20em"}} paragraph>
                                   We give you an interactive demonstration of the mockups, throughly explaining the thought process 
                                   that went into each screen and every anticipted features.    
                            </Typography>

                            <Typography align={ matchesMD ? "center" :undefined}  variant="body1" style={{color: "#fff",  maxWidth: "20em" }}  paragraph>
                                   Once you're completely satisfied with the vision for our solution we get down to the nitty gritty, 
                                   fine -details of design .
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item lg style={{alignSelf: "center" }}>
                        <img src={review} alt="magnifying glass  " width="100%"  />
                    </Grid>
                </Grid>


                <Grid item container direction={matchesMD ? "column" : "row" }  
                    className={classes.rowContainer}
                    style={{backgroundColor: "#C1272D", height: "90em"}}

                >
                    <Grid item container direction="column"  alignItems={matchesMD ? "center" : undefined}  lg >
                        <Grid item>
                            <Typography align={ matchesMD ? "center" :undefined}  variant="h4" gutterBottom style={{color: "#000",marginTop: "5em" }}>
                             Design  
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={ matchesMD ? "center" :undefined}  variant="body1" style={{color: "#fff" , maxWidth: "20em"}}  paragraph>
                                     Using the mockups and notes taken during the consulatations as guides, we will start 
                                     ironing out what the final product will look like. This also involves using any brand 
                                     material like fonts , colors , and logos to extend the experience you're already familiar with.
                            </Typography>

                            <Typography align={ matchesMD ? "center" :undefined}   variant="body1" style={{color: "#fff" ,  maxWidth: "20em"}} paragraph>
                                   No aspect is superfluous , and care will be taken with every decision.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item lg style={{alignSelf: "center" }}>
                        <img src={design} alt="painbrush leaving stroke of paint " width="100%"  style={{maxWidth: 1000}} />
                    </Grid>
                </Grid>



                <Grid item container direction={matchesMD ? "column" : "row" } 
                    className={classes.rowContainer}
                    style={{backgroundColor: "#39B5A4", height: "90em"}}

                >
                    <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined}  lg >
                        <Grid item>
                            <Typography  align={ matchesMD ? "center" :undefined}  variant="h4" gutterBottom style={{color: "#000",marginTop: "5em" }}>
                             Review  
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={ matchesMD ? "center" :undefined}   variant="body1" style={{color: "#fff" , maxWidth: "20em"}}  paragraph>
                                    A second round of review is essential to our goal of creating exactly what you want, exactly how you 
                                    want it.
                            </Typography>

                            <Typography align={ matchesMD ? "center" :undefined}  variant="body1" style={{color: "#fff" ,  maxWidth: "20em"}} paragraph>
                                   This time we'll be going over the finalized designs in another fully interactive 
                                   demonstration. Again this gives you an opportunity to tweak things and make 
                                   sure we get everything right the first time.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item lg style={{alignSelf: "center" }}>
                        <img src={review} alt="magnifying glass " width="100%"  />
                    </Grid>
                </Grid>



                <Grid item container direction={matchesMD ? "column" : "row" } 
                    className={classes.rowContainer}
                    style={{backgroundColor: "#FBB03B", height: "90em"}}

                >
                <Grid item container direction="column"  alignItems={matchesMD ? "center" : undefined}  lg >
                        <Grid item>
                            <Typography align={ matchesMD ? "center" :undefined}   variant="h4" gutterBottom style={{color: "#000",marginTop: "5em" }}>
                                Build  
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={ matchesMD ? "center" :undefined}   variant="body1" style={{color: "#fff" , maxWidth: "20em"}}  paragraph>
                                   Here's where we get down to business .
                            </Typography>


                            <Typography align={ matchesMD ? "center" :undefined}   variant="body1" style={{color: "#fff" ,  maxWidth: "20em"}} paragraph>
                                   Enginerring begins after your approval on the final designs . We start by scaffolding 
                                   out the project on a high level, prioritizing some areas over others.
                            </Typography>


                            <Typography align={ matchesMD ? "center" :undefined}  variant="body1" style={{color: "#fff" ,  maxWidth: "20em"}} paragraph>
                                   Typhically the backend , behind the scenes operation are completed first. Once all  
                                   the services  are in place we can then create the front end, user  side of things.
                            </Typography>


                            <Typography align={ matchesMD ? "center" :undefined}  variant="body1" style={{color: "#fff" ,  maxWidth: "20em"}} paragraph>
                                   Finishing the application doesn't mean we're done through ,beacuse we extensive testing to 
                                   guarantee compatibility withh all intended devices.
                            </Typography>


                            <Typography align={ matchesMD ? "center" :undefined}  variant="body1" style={{color: "#fff" ,  maxWidth: "20em"}} paragraph>
                                 Only after our rigors exmination will we accept a product as finished, 
                                 then pushing it through the production pipeline. This produces an optimized , compressed, consumer
                                  version of the code and assets ready for deployment.  
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item lg style={{alignSelf: "center" }}>
                        <img src={build} alt=" building construction site " width="100%"  style={{maxWidth: matchesMD ? 700 : 1000}}  />
                    </Grid>
                    </Grid>


                    

                    <Grid item container direction={matchesMD ? "column" : "row" } 
                    className={classes.rowContainer}
                    style={{backgroundColor: "#C1272D", height: "90em"}}
                    >
                
                    <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined}  lg >
                        <Grid item>
                            <Typography align={ matchesMD ? "center" :undefined}  variant="h4" gutterBottom style={{color: "#000",marginTop: "5em" }}>
                             Launch
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={ matchesMD ? "center" :undefined}  variant="body1" style={{color: "#fff" , maxWidth: "20em"}}  paragraph>
                                    The mement we've all been waiting for.
                            </Typography>

                            <Typography align={ matchesMD ? "center" :undefined}  variant="body1" style={{color: "#fff" ,  maxWidth: "20em"}} paragraph>
                                   When construction comes to a close you're the first one to know.
                                   We'll give our final demonstration to show off your shiny  new software 
                                    in the wild so you know exactly how it will look to your users.
                            </Typography>

                            <Typography align={ matchesMD ? "center" :undefined}  variant="body1" style={{color: "#fff" ,  maxWidth: "20em"}} paragraph>
                                   When you say the word , we press the button and lunch your project out to 
                                   the public. We're there to ensure everything goes to plan  so you can start reaping the 
                                   rewards of your technologyical investment immediately.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item lg style={{alignSelf: "center" }}>
                        <img src={launch} alt="rocket "  style={{maxWidth: 200}} />
                    </Grid>
                    </Grid>




                    <Grid item container direction={matchesMD ? "column" : "row" } 
                    className={classes.rowContainer}
                    style={{backgroundColor: "#8E45CE", height: "90em"}}
                    >
                    <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined}   lg >
                        <Grid item>
                            <Typography align={ matchesMD ? "center" :undefined}   variant="h4" gutterBottom style={{color: "#000",marginTop: "5em" }}>
                            Maintain
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={ matchesMD ? "center" :undefined}   variant="body1" style={{color: "#fff" , maxWidth: "20em"}}  paragraph>
                                    Our work doen't end there.
                            </Typography>
                                    
                            <Typography align={ matchesMD ? "center" :undefined}  variant="body1" style={{color: "#fff" ,  maxWidth: "20em"}} paragraph>
                            After successful launch we keep in close contact to listen to 
                                    feedback and hear how the project is being recieved .
                            </Typography>

                            <Typography align={ matchesMD ? "center" :undefined}   variant="body1" style={{color: "#fff" ,  maxWidth: "20em"}} paragraph>
                                   From there on out we make sure your application is kept up to date
                                   and taking advantage of the best features and practices available . When new 
                                   developments arises  or new techniques are discovered  in future projects, we 
                                   will implement those advamncement in your project as part of our routine mainteance.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item lg style={{alignSelf: "center" }}>
                        <img src={maintain} alt="wrench tightening  bolts" style={{maxWidth: 500}} />
                    </Grid>
                    </Grid>

                    

                    <Grid item container direction={matchesMD ? "column" : "row" } 
                    className={classes.rowContainer}
                    style={{backgroundColor: "#29ABE2", height: "90em"}}
                    >
                    <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined}   lg >
                        <Grid item>
                            <Typography align={ matchesMD ? "center" :undefined}   variant="h4" gutterBottom style={{color: "#000",marginTop: "5em" }}>
                           Iterate
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={ matchesMD ? "center" :undefined}  variant="body1" style={{color: "#fff" , maxWidth: "20em"}}  paragraph>
                                   The cycle repeats whenever  you come up with a new idea for extending your current project,
                                   or come up with brand new system entirely.
                            </Typography>
                                    
                            <Typography align={ matchesMD ? "center" :undefined}   variant="body1" style={{color: "#fff" ,  maxWidth: "20em"}} paragraph>
                                    By planning for future  features  and changes we can  build and envolve your application 
                                    over time. As new use cases and customer needs develop we can respond with continous integration
                                    of new content.
                            </Typography>

                            <Typography align={ matchesMD ? "center" :undefined}  variant="body1" style={{color: "#fff" ,  maxWidth: "20em"}} paragraph>
                                   Our iterative process will keep you current and competitive , allowing you to quickly implement 
                                   changes instead of waiting months for a single update.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item lg style={{alignSelf: "center" }}>
                        <img src={iterate} alt="falling dominoes" />
                    </Grid>
                    </Grid>

</Grid>
               
                
                
        
    )
}