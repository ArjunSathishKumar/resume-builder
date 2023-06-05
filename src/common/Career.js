import { FieldArray } from "react-final-form-arrays";
import { FiMinusCircle } from "react-icons/fi";
import { Col, Row } from "react-bootstrap";
import { Field } from "react-final-form";

const CareerDetailComponent = (
  name,
  title,
  year,
  desigTitle,
  desig,
  instTitle,
  institute,
  validation
) => {
  return (
    <FieldArray name={name}>
      {({ fields }) => (
        <div className="education-container">
          <label className="header">
            {title}
            <span className="error-col">{validation}</span>
          </label>
          {fields?.map((name, index) => (
            <Row className="gap-2 row-container" key={name}>
              <Col xs={12} md={2}>
                <Row className="title">
                  <label>Year</label>
                </Row>
                <Row>
                  <Field
                    name={`${name}.${year}`}
                    component="input"
                    className="data-field"
                  />
                </Row>
              </Col>
              <Col xs={12} md={4}>
                <Row className="title">
                  <label>{desigTitle}</label>
                </Row>
                <Row>
                  <Field
                    name={`${name}.${desig}`}
                    component="input"
                    className="data-field"
                  />
                </Row>
              </Col>
              <Col xs={12} md={4}>
                <Row className="title">
                  <label>{instTitle}</label>
                </Row>
                <Row>
                  <Field
                    name={`${name}.${institute}`}
                    component="input"
                    className="data-field"
                  />
                </Row>
              </Col>
              <Col
                xs={12}
                md={1}
                className="iconStyle"
                style={index === 0 ? { display: "none" } : null}
              >
                <FiMinusCircle size={25} onClick={() => fields.remove(index)} />
              </Col>
            </Row>
          ))}
          <button
            type="button"
            className="btn btn-primary addBtn"
            onClick={() => {
              fields.push({ [year]: "", [desig]: "", [institute]: "" });
            }}
          >
            Add
          </button>
        </div>
      )}
    </FieldArray>
  );
};

export default CareerDetailComponent;
