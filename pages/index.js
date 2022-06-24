import { Typography,List,ListItem,Link } from '@mui/material'
import styles from '../styles/Home.module.css'
import NextLink from 'next/link'; 

export default function Home() {

  return ( 
      <div className={styles.main}>
       <List>
        <ListItem>
            <Typography component="h4" variant='h4'>Home page</Typography>
        </ListItem>
        <ListItem>
            <NextLink href="/login" passHref>
                <Link>Go to login page</Link>
            </NextLink>
        </ListItem>
      </List>
    </div>
  )
}

// create .env file and add code
// NEXT_PUBLIC_MAGIC_PUBLISHABLE_API_KEY=pk_live_13B850144