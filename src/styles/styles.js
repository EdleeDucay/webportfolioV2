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
        fontWeight: 'bold',
        scrollBehavior: 'smooth',

    },
    nav: {
        backgroundColor: '#181A18',
        color: '#ccd6f6',
        border: 0,
        height: 'auto',
    },
    logo: {
        width: '75px',
        height: 'auto',
        marginTop: '5px',
        cursor: 'pointer',
        transition: '0.1s',
        opacity: 1,
        '&:hover': {
            opacity: 0.8,
        }
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
    body2: {
        minHeight: '75vh',
        color: '#8892b0',
    },
    body3: {
        minHeight: '50vh',
        color: '#8892b0',
    },
    title: {
        color: '#ccd6f6',
        fontSize: '48px',
    },
    title2: {
        color: 'royalblue',
        fontSize: '32px',
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
    cardTitle: {
        color: '#ccd6f6',
        transition: '0.2s',

    },
    card: {
        backgroundColor: '#1E1F1E',
        color: '#8892b0',
        transition: '0.2s',
        '&:hover': {
            transform: 'translate(0, -5px)',
            color: 'royalblue',
            "& $cardTitle": {
                color: 'royalblue',
            },
        }
    },
    cardIcon: {
        textDecoration: 'none',
        color: '#8892b0',
        fontSize: 28,
        paddingLeft: 15,
        cursor: 'pointer',
        transition: '0.1s',
        '&:hover': {
            color: 'royalblue',
        }
    },
    link: {
        textDecoration: 'none',
        color: 'royalblue',
        transition: '0.2s',
        '&:hover': {
            color: '#ccd6f6',
            background: 'transparent',
        }
    },
    spotlight: {
        backgroundColor: '#1E1F1E',
        padding: 25,
        borderRadius: 5,
    },
    spotlightCard: {
        backgroundColor: '#1E1F1E',
        color: '#8892b0',
        transition: '0.2s',
        '&:hover': {
            transform: 'translate(0, -5px)',
            color: '#ccd6f6',
            "& $jobTitle1": {
                color: 'royalblue',
            },
            "& $jobTitle2": {
                color: '#ccd6f6',
            },
        }
    },
    jobTitle1: {
        fontWeight: 'bold',
        color: '#ccd6f6',
    },
    jobTitle2: {
        color: 'royalblue',
        fontWeight: 'bold',
    },
    footer: {
        textAlign: 'center',
        paddingTop: '100px',
        paddingBottom: '25px',
        color: '#8892b0'
    }
})