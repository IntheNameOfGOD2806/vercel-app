
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
export default function ImgMediaCard({course}:{course:ICourse}) {
  return (
    
    <Card sx={{ maxWidth: 345,height: "max-content",minWidth: 200 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={course.ImgURL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {course.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {course.Description}
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex",justifyContent:"space-between"}}>
        <Button  size="small"> {course.ViewCount} Views <RemoveRedEyeIcon sx={{fontSize:20,marginLeft:1}}/></Button>
        <Button size="small"> {course.PublishedDate}</Button>
      </CardActions>
    </Card>
  );
}