import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import Container from "@material-ui/core/Container";

// import Header from './Header';

// const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: '1px solid #DDD'
// };

const theme = createMuiTheme({
  palette: {
    primary: blue,
    type: "light"
  }
});

const Layout = props => (
  <MuiThemeProvider theme={theme}>
    <Container maxWidth="md">
      {props.children}
    </Container>
  </MuiThemeProvider>
);

export default Layout;