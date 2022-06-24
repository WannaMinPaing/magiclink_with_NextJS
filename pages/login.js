import { Typography,List,ListItem,TextField,Button } from '@mui/material'
import styles from '../styles/Home.module.css'
import {useState} from 'react';
import {magic} from '../lib/magic-client'; 
export default function Login() {

  const [email,setEmail]=useState(""); 
  const submitHandler =async  () =>
  {
    try {
        //login with magic link
        //    const didToken = await magic.auth.loginWithMagicLink({email});
        //    console.log({didToken}); 

        // log in a user by their email

        const didToken = await magic.auth.loginWithEmailOTP({ email });
        console.log({didToken})
  
      
      } catch(error) {
            console.log('Something went wrong login',error)
      }
  }
  console.log({magic});
  return (
   <div className={styles.main}>
    <List>
      <ListItem>
          <Typography component="h4" variant='h4'>Login In</Typography>
      </ListItem>
   
      <ListItem>
        <TextField 
                  id="outlined-basic" 
                  label="email" 
                  variant="outlined"
                  onChange={ (e) => setEmail(e.currentTarget.value)}  />
      </ListItem>

      <ListItem>
        <Button fullWidth color="primary" variant="contained" onClick={submitHandler}>Submit</Button>
      </ListItem>
    </List>
    
   </div>
  )
}
