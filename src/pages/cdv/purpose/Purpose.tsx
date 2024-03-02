// Hooks
import useMediaQuery from '@mui/material/useMediaQuery';
// BTS
import { Container, Row, Col } from 'react-bootstrap';
// Components
import Logo from '../../../components/Logo';
import Text from './Text';
// Animation
import { motion } from 'framer-motion';
import { fadeIn } from '../../../components/variants';
const logoMobileVariant = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delay: 1.5
        }
    },
}
// Style
const sectionStyle = "position-relative z-2"
const txtStyle = "d-flex flex-column justify-content-center text-center text-lg-start"
const logoStyle = "purposeLogo"

const Purpose = () => {
    const isMobile = useMediaQuery('(max-width:991px)');

    return (
        <div id="outerParallax">
            <section id="purpose" className={sectionStyle}>
                <motion.div
                    variants={fadeIn("up")}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    id="purposeBckg"
                >
                    <Container>
                        <Row>
                            <Col xs={12} lg={8} className={txtStyle}>
                                <Text />
                            </Col>
                            <Col xs={6} sm={3} lg={4} className={logoStyle}>
                                {isMobile ?
                                    <motion.div variants={logoMobileVariant} viewport={{ once: true }}>
                                        <Logo color="blue" />
                                    </motion.div>
                                    :
                                    <Logo color="blue" />
                                }
                            </Col>
                        </Row>
                    </Container>
                </motion.div>
            </section>
        </div>
    )
}

export default Purpose