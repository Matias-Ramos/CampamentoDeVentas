// BTS
import { Container, Row, Col } from 'react-bootstrap'
// Img
import shield from '/assets/shield.png'
// Style
const sectionStyle = {
    color: "white",
    background: "linear-gradient(to top right, rgb(7 16 45), rgb(58 60 84))",
    padding: "20px",
    borderRadius: "20px",
    border: "1px solid rgb(84 90 106)",
}

const Warranty = () => (
    <section style={sectionStyle}>
        <Container>
            <Row>
                <Col lg={6} className='d-flex flex-column align-items-center justify-content-center'>
                    <img src={shield} className='w-50 object-fit-contain' alt="Decorative image" />
                    <h2>Garantía 100%</h2>
                    <span className='text-center'>Si nuestro programa no cumple con tus expectativas, podrás solicitar un reembolso total.</span>
                </Col>
                <Col lg={6} className='d-flex flex-column align-items-center justify-content-center'>
                    <span className='d-block mb-3'>No podemos prometer resultados a todo el mundo. El campamento de ventas, es para cualquiera, -pero no cualquiera, es para el campamento de ventas-</span>
                    <span className='d-block mb-3'>Si podemos cumplir tu objetivo concreto en las próximas 12 semanas, ¡entonces estás dentro!</span>
                    <span className='d-block mb-3'>Por eso te invitamos a que de forma totalmente personalizada, uno de nuestros instructores estrella, se ocupe (a costo $0) de evaluar tu metodología de ventas actual, tu producto o servicio, y sobre todo, la dimensión exacta de tus expectativas.</span>
                </Col>

            </Row>
        </Container>
    </section>
)
export default Warranty