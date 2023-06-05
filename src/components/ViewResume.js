import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ViewResume = () => {
  const navigate = useNavigate();
  const resume = useSelector((state) => state.resumes);
  const { name, email, phone, address, experiences, educations, skills } =
    resume;
  return (
    <div className="view-container">
      <Row className="header font">
        <Col>
          {name}
          <span className="editIcon">
            <FaEdit onClick={() => navigate("/edit")} />
          </span>
        </Col>
      </Row>
      <Row className="view-body">
        <Col xs={12} md={4} className="body-1">
          <Row className="details">
            <h2>CONTACT</h2>
            <Row className="details-title">Phone</Row>
            <Row className="details-body">{phone}</Row>
            <Row className="details-title">Email</Row>
            <Row className="details-body">{email}</Row>
            <Row className="details-title">Address</Row>
            <Row className="details-body">{address}</Row>
          </Row>
          <Row className="details">
            <h2>SKILLS</h2>
            {skills.map((skill) => {
              return (
                <Row key={skill.id} className="skills">
                  {skill.text}
                </Row>
              );
            })}

            {/* <Row className="skills">Address</Row> */}
          </Row>
        </Col>
        <Col xs={12} md={8} className="body-2">
          <Row className="details">
            <h2>EXPERIENCE</h2>
            {experiences.map((experience) => {
              return (
                <Row className="experience">
                  <Col xs={12} md={3} className="year">
                    {experience.year}
                  </Col>
                  <Col xs={12} md={9}>
                    <Row className="designation">{experience.designation}</Row>
                    <Row className="company">{experience.company}</Row>
                  </Col>
                </Row>
              );
            })}
          </Row>
          <Row className="details">
            <h2>EDUCATION</h2>
            {educations.map((education) => {
              return (
                <Row className="experience">
                  <Col xs={12} md={3} className="year">
                    {education.year}
                  </Col>
                  <Col xs={12} md={9}>
                    <Row className="designation">{education.degree}</Row>
                    <Row className="company">{education.institution}</Row>
                  </Col>
                </Row>
              );
            })}
            {/* <Row className="experience">
              <Col xs={12} md={3} className="year">
                2010
              </Col>
              <Col xs={12} md={9}>
                <Row className="designation">Degree</Row>
                <Row className="company">College</Row>
              </Col>
            </Row> */}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ViewResume;
