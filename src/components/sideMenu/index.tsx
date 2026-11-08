import { Button, Col, Form, Row } from 'react-bootstrap';
import { useState, useRef } from 'react';
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
    isLive,
    setIsLive,
    videoLength,
    setVideoLength,
    setChannelIcon
}: ISideMenu) => {
    const defaultXPosition = 0;
    const defaultYPosition = 80;
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [position, setPosition] = useState({
        x: defaultXPosition,
        y: defaultYPosition
    });
    const dragOffset = useRef({
        x: 0,
        y: 0
    });

    function handleMouseDown(e: React.MouseEvent<HTMLDivElement>) {
        if (e.button !== 0) return; //0 é o botao esquerdo do mouse ( 1 é o do meio e 2 é o direito ) 
        const targetToMoveSize = e.currentTarget.getBoundingClientRect();
        dragOffset.current = {
            x: e.clientX - targetToMoveSize.left,
            y: e.clientY - targetToMoveSize.top,
        }
        setIsDragging(true);
    }

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!isDragging) return;

        setPosition({
            x: e.clientX - dragOffset.current.x,
            y: e.clientY - dragOffset.current.y,
        });
    }

    function handleMouseUp(e: React.MouseEvent<HTMLDivElement>) {
        if (!e) return;
        setIsDragging(false);
    }


    if (!show) return null;

    function clearValues() {
        setTitle('');
        setChannelName('');
        setNumberOfViews(0);
        setDateOfThePublication('');
        setImage('');
        setIsLive?.(false);
        setVideoLength?.('');
        setChannelIcon('');
    }

    return <div
        className='SideMenuContainer p-4'
        style={{
            top: position.y,
            left: position.x,
            cursor: isDragging ? 'grabbing' : 'grab'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
    >
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
                        const input = e.currentTarget as HTMLInputElement;
                        const file = input.files?.[0];

                        if (file) {
                            setImage(URL.createObjectURL(file));
                        }
                    }}
                />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Nome do canal</Form.Label>
                <Form.Control type='text' onChange={(e) => setChannelName(e.target.value)} value={channelName} />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Icone do canal</Form.Label>
                <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        const input = e.currentTarget as HTMLInputElement;
                        const file = input.files?.[0];

                        if (file) {
                            setChannelIcon(URL.createObjectURL(file));
                        }
                    }}
                />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Quantidade de visualizações</Form.Label>
                <Form.Control type='number' onChange={(e) => setNumberOfViews(Number(e.target.value))} value={numberOfViews} />
            </Form.Group>
            <Form.Group className='mt-2 mb-2'>
                <Form.Switch
                    checked={isLive}
                    label='Ao vivo'
                    onClick={() => setIsLive?.(!isLive)}
                />
            </Form.Group>
            {!isLive &&
                <Form.Group>
                    <Form.Label>Duração do vídeo</Form.Label>
                    <Col md={5}><Form.Control className='mb-3' type='text' placeholder='00:00:00' value={videoLength} onChange={(e) => setVideoLength?.(e.target.value)} /></Col>
                </Form.Group>
            }
            <Form.Group>
                <Row className='d-flex flex-row align-items-center w-100'>
                    {!isLive &&
                        <>
                            <Form.Label className='mb-0'>Data de publicação</Form.Label><Col>
                                <Form.Control type='date' onChange={(e) => setDateOfThePublication(e.target.value)} value={dateOfThePublication} />
                            </Col>
                        </>
                    }
                    <Col className='mb-3'>
                        <Button
                            className='mt-3 buttonClear'
                            onClick={() => setPosition({
                                x: defaultXPosition,
                                y: defaultYPosition
                            })}>
                            Resetar posição
                        </Button>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group>
                <Button className='mt-3 w-100 buttonClear' onClick={() => clearValues()}>Limpar tudo</Button>
            </Form.Group>
        </Form>
    </div>
};

export default SideMenu;