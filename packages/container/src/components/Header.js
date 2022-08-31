import React from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import { Link as RouterLink } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'

const useStyles = makeStyles(() => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    a: {
      textDecoration: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${useTheme().palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  link: {
    margin: useTheme().spacing(1, 1.5),
  },
  heroContent: {
    padding: useTheme().spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      useTheme().palette.type === 'light'
        ? useTheme().palette.grey[200]
        : useTheme().palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: useTheme().spacing(2),
  },
  footer: {
    borderTop: `1px solid ${useTheme().palette.divider}`,
    marginTop: useTheme().spacing(8),
    paddingTop: useTheme().spacing(3),
    paddingBottom: useTheme().spacing(3),
    [useTheme().breakpoints.up('sm')]: {
      paddingTop: useTheme().spacing(6),
      paddingBottom: useTheme().spacing(6),
    },
  },
}))

export default function Header({ signedIn, onSignOut }) {
  const classes = useStyles()

  const onClick = () => {
    if (signedIn && onSignOut) {
      onSignOut()
    }
  }

  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/"
          >
            App
          </Typography>
          <Button
            color="primary"
            variant="outlined"
            className={classes.link}
            component={RouterLink}
            to={signedIn ? '/' : '/auth/signin'}
            onClick={onClick}
          >
            {signedIn ? 'Logout' : 'Login'}
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}
