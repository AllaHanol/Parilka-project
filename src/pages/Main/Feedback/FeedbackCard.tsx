import React from 'react';
import { Avatar, Card, Stack, Typography } from '@mui/material';
import { toDate } from '../../../utils/commentTime';

interface IFeedbackCard {
  comment: {
  avatarUrl?: string,
  username: string,
  time: string,
  title: string,
  commentText: string,
  rating: number,
  }
}

const FeedbackCard: React.FC<IFeedbackCard> = (props) => {
  const { avatarUrl, username, time, title, commentText, rating } = props.comment;
  //const url2  = 'https://s3-alpha-sig.figma.com/img/eeda/140d/26173db643536f3f2541c9574254fe57?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B4UuN~n4y7nEtmkO8Tc0KwnfZYPkOx8I3tmn0p7PyY35w6DKMeJIPRLoQUJU6jNlvxSk0qDN9YfDVxqLhYHwFb05NyaRgSoeLAxxWiqS9A3Ac7V6V3s3Aqejczv4uNDBhnPca59uEykCJ61tKMC~9rDQbOdooEutQnOrYpH~ltcKvo0WgX8sDGsG1OgcQvm8H2ecn63c2Q5Sx7LATftrJSNc9g8X6FfqJsk-EBkTTd6LndJNq4C2fetNsrTVwmoMjPlyakfYrp9SdyLURADTSs1sDHTXyeyqHBmQ0ogu4CFuPFegIYPt8oVG~RBJQ0lX2X3eyiR5NT6winewximm9A__'
  return (
    <Card
    sx={{
      width: '40.8vw',
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start', 
      alignItems: 'flex-start', 
      borderRadius: '24px',
      color: 'white',
      backgroundColor: '#181717',
      margin: "57px 0px 96px 32px",
      gap: '24px'
    }}
    >
      <Stack width={'auto'} padding={'1.6vw'} margin={0}>
        <Stack direction={"row"} width={"100%"}>
            <Avatar src={avatarUrl} sx={{marginRight: '1.1vw'}}></Avatar>
            <Stack sx ={{width: '21.7vw'}}>
              <Typography variant='h6' sx = {{fontSize: '1.1vw'}}>{username}</Typography>
              <Typography variant='h6' sx = {{fontSize: '0.7vw'}}>{toDate(time)}</Typography>
            </Stack>
            <Stack sx = {{justifyContent: 'flex-end', width: '12.5vw'}} direction={"row"}>
              <Typography>{rating.toFixed(1)}</Typography>
            </Stack>
        </Stack>
        <Stack marginTop={"2.2vw"}>
              <Typography variant='h1' sx = {{fontSize: '18px', marginBottom: '24px'}}>{title}</Typography>
              <Typography>{commentText}</Typography>
        </Stack>
      </Stack>
      </Card>
  );
};

export default FeedbackCard;