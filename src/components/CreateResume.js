import React from "react";
import { Col, Row } from "react-bootstrap";
import { Form, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import "../styles/resume.css";
import { useDispatch } from "react-redux";
import { createResumeAction } from "../actions/resumeActions";
import { useNavigate } from "react-router-dom";
import CareerDetailComponent from "../common/Career";
import TagInput from "../common/TagInput";

const CreateResume = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let expRequired = "";
  let eduRequired = "";

  const onSubmit = (values) => {
    const educationValidation = values?.educations.every(
      (item) => item.institution && item.year && item.degree
    );
    eduRequired = educationValidation ? "" : "* All Fields are Required";

    const experienceValidation = values?.experiences.every(
      (item) => item.company && item.year && item.designation
    );
    expRequired = experienceValidation ? "" : "* All Fields are Required";

    if (educationValidation && experienceValidation) {
      dispatch(createResumeAction(values));
      navigate("/view");
    }
  };

  const validatePhoneNumber = (input_str) => {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    return re.test(input_str);
  };

  const required = (value) => (value ? undefined : "*Required");
  const phoneRequired = (value) =>
    value
      ? validatePhoneNumber(value)
        ? undefined
        : "Enter Valid Number"
      : "*Required";
  return (
    <div className="resume-container">
      <h1>Create Resume</h1>
      <Form
        mutators={{
          ...arrayMutators,
        }}
        onSubmit={onSubmit}
        initialValues={{
          educations: [
            {
              institution: "",
              year: "",
              degree: "",
            },
          ],
          experiences: [
            {
              company: "",
              year: "",
              designation: "",
            },
          ],
          skills: [],
        }}
      >
        {({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <div className="personal-container">
              <Field name="name" validate={required}>
                {({ input, meta }) => (
                  <Row className="gap-2 row-container">
                    <Col xs={12} md={2} className="title">
                      <label>Name</label>
                    </Col>
                    <Col xs={12} md={8}>
                      <input
                        {...input}
                        type="text"
                        placeholder="Enter your Name"
                        className="data-field"
                      />
                    </Col>
                    <Col xs={12} md={1} className="error-col">
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Col>
                  </Row>
                )}
              </Field>
              <Field name="phone" validate={phoneRequired}>
                {({ input, meta }) => (
                  <Row className="gap-2 row-container">
                    <Col xs={12} md={2} className="title">
                      <label>Phone</label>
                    </Col>
                    <Col xs={12} md={8}>
                      <input
                        {...input}
                        type="text"
                        placeholder="Enter your Phone Number"
                        className="data-field"
                      />
                    </Col>
                    <Col xs={12} md={1} className="error-col">
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Col>
                  </Row>
                )}
              </Field>
              <Field name="email" validate={required}>
                {({ input, meta }) => (
                  <Row className="gap-2 row-container">
                    <Col xs={12} md={2} className="title">
                      <label>Email</label>
                    </Col>
                    <Col xs={12} md={8}>
                      <input
                        {...input}
                        type="email"
                        placeholder="Enter your email"
                        className="data-field"
                      />
                    </Col>
                    <Col xs={12} md={1} className="error-col">
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Col>
                  </Row>
                )}
              </Field>
              <Field name="address" validate={required}>
                {({ input, meta }) => (
                  <Row
                    className="gap-2 row-container"
                    style={{ marginBottom: "20px" }}
                  >
                    <Col xs={12} md={2} className="title">
                      <label>Address</label>
                    </Col>
                    <Col xs={12} md={8}>
                      <textarea
                        {...input}
                        placeholder="Enter your address"
                        className="data-field"
                        rows="3"
                      />
                    </Col>
                    <Col xs={12} md={1} className="error-col">
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Col>
                  </Row>
                )}
              </Field>
            </div>
            <div className="skill-container">
              <label className="header">Skills</label>
              <Field name="skills" component={TagInput} />
            </div>
            {CareerDetailComponent(
              "educations",
              "EDUCATION",
              "year",
              "Degree",
              "degree",
              "Institution",
              "institution",
              eduRequired
            )}
            {CareerDetailComponent(
              "experiences",
              "EXPERIENCE",
              "year",
              "Designation",
              "designation",
              "Company",
              "company",
              expRequired
            )}
            <button
              type="submit"
              className="btn btn-primary submitBtn"
              disabled={submitting}
            >
              Create Resume
            </button>
          </form>
        )}
      </Form>
    </div>
  );
};

export default CreateResume;
