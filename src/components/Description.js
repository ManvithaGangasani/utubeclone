import {Box} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
const Description=({videoDesc})=>{
    const videoId = videoDesc ? videoDesc.id.videoId : null;
    return(
        <Grid xs={8}>
            <iframe 
                width="100%" height="500"  
                src={`https://www.youtube.com/embed/${videoId}`} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
            <Box sx={{ m:"10px 0"}}>
                <h1>{videoDesc?.snippet?.title}</h1>
                <h5>{videoDesc?.snippet?.description}</h5>
            </Box>
        </Grid>

    )
}
export default Description;