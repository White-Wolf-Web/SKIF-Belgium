import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ".././i18n";
import "./modalContact.css";

export default function ContactModal({ show, handleClose }) {
	const { t } = useTranslation();

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>{t("contactModal.contactUs")}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group className="mb-3" controlId="formFirstName">
						<Form.Label></Form.Label>
						<Form.Control type="text" placeholder={t("contactModal.FirstName")} />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formLastName">
						<Form.Label></Form.Label>
						<Form.Control type="text" placeholder={t("contactModal.name")} />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formPhoneNumber">
						<Form.Label></Form.Label>
						<Form.Control type="tel" placeholder={t("contactModal.phone")} />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label></Form.Label>
						<Form.Control type="email" placeholder={t("contactModal.email")} />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label></Form.Label>
						<Form.Control as="textarea" rows={3} placeholder={t("contactModal.message")} />
					</Form.Group>
					<Form.Group className="mb-3 contact-form-group" controlId="formPosition">
						<Form.Check type="radio" label={t("contactModal.chairman")} name="position" id="position1" value="president" />
						<Form.Check type="radio" label={t("contactModal.chief")} name="position" id="position2" value="chiefInstructor" />
						<Form.Check type="radio" label={t("contactModal.treasurer")} name="position" id="position3" value="treasurer" />
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					{t("contactModal.close")}
				</Button>
				<Button variant="primary" onClick={handleClose}>
					{t("contactModal.send")}
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
