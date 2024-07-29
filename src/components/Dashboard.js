import React from 'react';
import SummaryCards from './SummaryCards';
import SalesChart from './SalesChart';
import TrafficSource from './TrafficSource';
import UserManagement from './Usermanagment'
import { Container, Row, Col } from 'react-bootstrap';

function Dashboard() {
  return (
    <>
    <Container fluid className="dashboard p-4">
    <SummaryCards />
    <Row className="mt-4">
        <Col lg={8}>
        <SalesChart />
        </Col>
        <Col lg={4}>
        <TrafficSource />
        </Col>
    </Row>
    </Container>
    <div>
        <UserManagement />
    </div>
    </>
  );
}

export default Dashboard;