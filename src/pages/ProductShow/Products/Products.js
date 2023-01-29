import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={6} lg={4} className='mb-4'>
                        <Card className='h-100'>
                            <Product></Product>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Products;