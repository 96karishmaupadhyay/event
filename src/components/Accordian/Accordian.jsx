import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";

const Accordian = () => {
  const [activeKey, setActiveKey] = useState(null);

  const toggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const questions = [
    {
      key: "0",
      title: "Why choose our event tracking platform?",
      body: "You can book an event through our platform by selecting your preferred event and following the booking steps."
    },
    {
      key: "1",
      title: "What makes us different from others?",
      body: "Yes, cancellation is allowed depending on the event’s cancellation policy."
    },
    {
      key: "2",
      title: "How do we ensure data security?",
      body: "Our event tracking feature keeps you updated with all important notifications."
    },
     {
      key: "3",
      title: "How can I get support for my events?",
      body: "Our event tracking feature keeps you updated with all important notifications."
    }
  ];

  return (
    <Accordion activeKey={activeKey} className="custom-accordion shadow-sm ">
      {questions.map((item) => (
        <Accordion.Item eventKey={item.key} key={item.key}>
          <Accordion.Header onClick={() => toggle(item.key)}>
            <span>{item.title}</span>

            {/* RIGHT SIDE ICON */}
            <span className="ms-auto">
              {activeKey === item.key ? (
                <FaMinus className="text-primary" />
              ) : (
                <FaPlus className="text-primary" />
              )}
            </span>
          </Accordion.Header>

          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default Accordian;
