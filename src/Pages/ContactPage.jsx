import React from "react";
import styles from "./contactpage.module.css";
import { Input, TextArea } from "../components/Input";
import { Form } from "react-router-dom";

function ContactPage() {
  return (
    <section className={styles.contact}>
      <div className="w-full sm:p-0 p-2 sm:min-w-2/4 sm:w-2/4 h-[70%] min-h-2/4">
        <div className="w-full h-full flex flex-col justify-evenly items-center">
          <div className="w-full text-center p-4">
            <h1 className="text-3xl font-bold mb-2">Contact Me</h1>
            <p className="text-sm font-normal">
              Call for a consultation on <a href="tel:+">+2348183337363</a>{" "}
              <br />
              or fill out the form below
            </p>
          </div>
          <div className="w-full">
            <Form>
              <div className="mb-2 w-full">
                <Input />
              </div>
              <div className="mb-2 w-full">
                <Input />
              </div>
              <div className="mb-2 w-full">
                <Input />
              </div>
              <div>
                <TextArea />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
