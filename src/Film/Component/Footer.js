import Card from 'react-bootstrap/Card';


function Footer() {

    const stylefooter = {textAlign : "center", marginTop:"100px", marginBottom: '50px', color:'red'}
    return (
      <Card className="text-center" style={stylefooter}>
     
        <Card.Footer className="text-muted"> lpb &copy; Decembre 2022</Card.Footer>

    </Card>
  );
}

export default Footer;
