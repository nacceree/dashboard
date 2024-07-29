import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FaDollarSign, FaUsers, FaTasks, FaChartLine } from 'react-icons/fa';

const cardData = [
  { title: 'BUDGET', value: '$24k', icon: FaDollarSign, change: '12%', up: true },
  { title: 'TOTAL CUSTOMERS', value: '1.6k', icon: FaUsers, change: '16%', up: false },
  { title: 'TASK PROGRESS', value: '75.5%', icon: FaTasks },
  { title: 'TOTAL PROFIT', value: '$15k', icon: FaChartLine },
];

function SummaryCards() {
  return (
    <Row>
      {cardData.map((card, index) => (
        <Col key={index} md={6} lg={3} className="mb-4">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <Card.Title className="m-0">{card.title}</Card.Title>
                <card.icon size={24} className="text-primary" />
              </div>
              <Card.Text as="h3" className="mb-0">{card.value}</Card.Text>
              {card.change && (
                <small className={`mt-2 ${card.up ? 'text-success' : 'text-danger'}`}>
                  {card.up ? '↑' : '↓'} {card.change} Since last month
                </small>
              )}
              {card.title === 'TASK PROGRESS' && (
                <div className="progress mt-2">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '75.5%' }}
                    aria-valuenow={75.5}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default SummaryCards;