import { Button, Col, Form, Row } from 'react-bootstrap';
import type { ISideMenu } from '../../types/ISideMenu';
import './index.scss';

const SideMenu = ({
    show,
    title,
    setTitle,
    channelName,
    setChannelName,
    numberOfViews,
    setNumberOfViews,
    dateOfThePublication,
    setDateOfThePublication,
    setImage,
    image
}: ISideMenu) => {

    if (!show) return null;

    function clearValues() {
        setTitle('');
        setChannelName('');
        setNumberOfViews(0);
        setDateOfThePublication('');
        setImage('');
    }

    return <div className='SideMenuContainer p-4'>
        <Row>
            <p>Preencha os campos abaixo conforme sua preferência</p>
        </Row>
        <Form className='teste'>
            <Form.Group className='mb-3'>
                <Form.Label>Título do vídeo</Form.Label>
                <Form.Control type='text' onChange={(e) => setTitle(e.target.value)} value={title} />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Imagem da thumbnail</Form.Label>
                <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        const file = e.target.files?.[0];

                        if (file) {
                            setImage(URL.createObjectURL(file));
                        }
                    }}
                />            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Nome do canal</Form.Label>
                <Form.Control type='text' onChange={(e) => setChannelName(e.target.value)} value={channelName} />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Quantidade de visualizações</Form.Label>
                <Form.Control type='number' onChange={(e) => setNumberOfViews(Number(e.target.value))} value={numberOfViews} />
            </Form.Group>
            <Form.Group>
                <Form.Label className='mb-0'>Data de publicação</Form.Label>
                <Row className='d-flex flex-row align-items-center w-100'>
                    <Col>
                        <Form.Control type='date' onChange={(e) => setDateOfThePublication(e.target.value)} value={dateOfThePublication} />
                    </Col>
                    <Col className='mb-3'>
                        <Button className='mt-3 w-100 buttonClear' onClick={() => clearValues()}>Limpar tudo</Button>
                    </Col>
                </Row>
            </Form.Group>
        </Form>
    </div>
};

export default SideMenu;