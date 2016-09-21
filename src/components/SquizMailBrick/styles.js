import { safeThemeFromProps, getBandStyle } from '../../utils/styleHelpers';

export default function (props) {

  let theme = safeThemeFromProps(props);
  let { background, textColor } = getBandStyle(theme, props.bandStyle)

  return {
    box: {
      backgroundImage: 'url('+props.backgroundImage+')',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      color: textColor,
      padding: '10%',
      textAlign: 'center'
    },
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bolder',
      margin: 0,
      marginBottom: '4%'
    },
    h2: {
      fontSize: '1.1rem',
      fontWeight: 'normal',
      margin: 0,
      marginTop: '4%',
      marginBottom: '3%'
    },
    inputField: {
      fontSize: '1.1rem',
      width: '30%',
      borderRadius: '100px',
      border: '1px solid #FFF',
      background: 'none',
      outline: 'none',
      padding: '.5rem 1.5rem',
      color: '#EEE'
    },
    icon: {
      fontSize: 35,
      marginLeft: 15,
      position: 'relative',
      top: 5
    }
  };

}
