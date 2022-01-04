import { makeStyles,  } from "@mui/styles";

export const useStyles = makeStyles({
    '@global': {
        '*::-webkit-scrollbar': {
          width: 5,
          backgroundColor: '#181A18',
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#ccd6f6',
          borderRadius: 6969,
        }
    },
    root: {
        background: '#181A18',
        color: '#ccd6f6',
        fontFamily: 'Open Sans',
        fontWeight: 'Extra-bold 800',
        scrollBehavior: 'smooth',

    },
    nav: {
        backgroundColor: '#181A18',
        color: '#ccd6f6',
        border: 0,
        height: 'auto',
    },
    // Styling for the nav drawer (mobile)
    paper: {
        backgroundColor: '#181A18',
        color: '#ccd6f6',
    },
    body: {
        minHeight: '100vh',
        color: '#8892b0',
    },
    title: {
        color: '#ccd6f6',
        fontSize: '48px',
    },
    button: {
        color: 'royalblue',
        fontWeight: 800,
        padding: '15px 30px 15px 30px',
        border: 1,
        borderStyle: 'solid',
        borderRadius: 7.5,
        borderColor: 'royalblue',
    },
    icon: {
        color: '#ccd6f6',
        fontSize: '48px',
        transition: '0.2s',
        '&:hover': {
            transform: 'translate(0, -5px)',
            color: 'royalblue',
        }
    },
    navHover: {
        textDecoration: 'none',
        color: '#ccd6f6',
        transition: '0.1s',
        '&:hover': {
            color: 'royalblue',
            background: 'transparent',
        }
    },
    divider: {
        background: '#ccd6f6',
        width: 'auto',
    },
    bullet: {
        verticalAlign: 'center',
        marginTop: '2px',
        paddingLeft: '3px',
    },
    

})