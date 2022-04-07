import * as React from 'react';
 import List from '@mui/material/List';
 import ListItem from '@mui/material/ListItem';
 import Divider from '@mui/material/Divider';
 import ListItemText from '@mui/material/ListItemText';
 import ListItemAvatar from '@mui/material/ListItemAvatar';
 import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function AddProductList(props) {
   
   return(
    <List sx={{ width: '100%', maxWidth: '100', bgcolor: 'background.paper' }}>
        {props?.prodArray.map((item)=>(
 <>
 <ListItem alignItems="flex-start">
    <ListItemAvatar>
  <Avatar alt="Remy Sharp" src={`images/${props.prodArray.title}`} />
</ListItemAvatar>
<ListItemText
   primary={item.title}
  secondary={
     <React.Fragment>
      <Typography
         sx={{ display: 'inline' }}
        component="span"
         variant="body2"
         color="primary"       >
         {item.description}
       </Typography>
       </React.Fragment>
 }
 />
 </ListItem>
 <Divider variant="inset" component="li" />
 </>
      ))}
</List>
  )};
