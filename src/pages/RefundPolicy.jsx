import React from 'react';

const RefundPolicy = () => {
  return (
    <section id="refund-policy-section" className="pt-5 bg-light mt-4">
      <div className="container">
        <div className="row">
          <div className="col text-center text-dark">
            <h2 className="fw-bold fs-1">
              Refund <span className="text-primary main-hover">Policy</span>
            </h2>
          </div>
        </div>
      </div>

      <section className="refund-policy-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <p>
                At Zwolf Consultancy Services, we are committed to providing high-quality IT services and customer satisfaction. However, we understand that sometimes things may not go as planned. This refund policy outlines the conditions under which we offer refunds and the procedures for requesting them.
              </p>

              <h3 className="main-hover1">1. General Refund Terms</h3>
              <p>
                <strong>1.1. Eligibility:</strong> Refunds are available for services purchased directly from Zwolf Consultancy Services and are subject to the conditions outlined in this policy.
              </p>
              <p>
                <strong>1.2. Time Frame:</strong> Refund requests must be made within 2 days from the date of purchase. Refunds requested after this period will not be considered.
              </p>
              <p>
                <strong>1.3. Conditions:</strong> To be eligible for a refund, the following conditions must be met:
              </p>
              <ul>
                <li>The service was not delivered as described or was not delivered at all.</li>
                <li>The service has not been used or accessed significantly.</li>
                <li>A detailed explanation of the issue or dissatisfaction is provided.</li>
              </ul>

              <h3 className="main-hover1">2. Service-Specific Refund Policies</h3>
              <p>
                <strong>2.1. Software Development Services:</strong>
              </p>
              <ul>
                <li>Refunds are not available for custom software development services once the project has commenced.</li>
                <li>If the project is canceled by the client before commencement, a partial refund may be issued, minus any incurred costs.</li>
              </ul>

              <p>
                <strong>2.2. Subscription-Based Services:</strong>
              </p>
              <ul>
                <li>Refunds for subscription services are available within [number] days of the initial purchase. Subsequent subscription payments are non-refundable.</li>
              </ul>

              <p>
                <strong>2.3. Consulting Services:</strong>
              </p>
              <ul>
                <li>Consulting fees are non-refundable once the service has been provided.</li>
                <li>If a consulting session is canceled at least [number] hours in advance, a full refund will be issued.</li>
              </ul>

              <h3 className="main-hover1">3. How to Request a Refund</h3>
              <p>
                <strong>3.1. Contact Us:</strong> To request a refund, please contact our support team at <a href="mailto:zwolfconsultancyservices@gmail.com">zwolfconsultancyservices@gmail.com</a> with your order details and a detailed explanation of the issue.
              </p>
              <p>
                <strong>3.2. Review Process:</strong> Our team will review your request and respond within 2 business days. We may request additional information or documentation to process your refund.
              </p>
              <p>
                <strong>3.3. Approval and Processing:</strong> If your refund is approved, it will be processed, and a credit will automatically be applied to your original method of payment within 5 business days.
              </p>

              <h3 className="main-hover1">4. Exceptions</h3>
              <p>
                <strong>4.1. Third-Party Services:</strong> Refunds are not available for services purchased through third-party vendors or partners.
              </p>
              <p>
                <strong>4.2. Force Majeure:</strong> No refunds will be issued for delays or failures resulting from circumstances beyond our control, such as natural disasters, acts of war, or other unforeseen events.
              </p>

              <h3 className="main-hover1">5. Changes to this Policy</h3>
              <p>
                Zwolf Consultancy Services reserves the right to modify this refund policy at any time. Changes will be posted on our website, and the effective date will be updated accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default RefundPolicy;
