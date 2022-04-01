import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";
import OrderCheckout from "./OrderCheckout";

const Checkout = () => {
  const [differentAdress, setDifferentAdress] = useState(false);

  const [order, setOrder] = useState("");

  const handleSelectDifferentAdress = () => {
    setDifferentAdress(!differentAdress);
  };

  const handleSelectOrder = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrder(e.target.value);
  };

  const required = (value: string) =>
    value ? undefined : "This field is required.";

  const mustBeNumber = (value: any) =>
    isNaN(value) ? "Must be a number" : undefined;

  const minLength = (min: any) => (value: any) =>
    isNaN(value) || value.length >= min
      ? undefined
      : `Should be longer than ${min}`;

  const validateEmail = (value: any) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return value.match(regex) ? undefined : "Should be an email.";
  };

  const composeValidators =
    (...validators: any[]) =>
    (value: any) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );

  return (
    <div>
      <div className="product-big-title-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-bit-title text-center">
                <h2>Checkout</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-content-right">
                <div className="woocommerce">
                  <Form
                    initialValues={{
                      ship_to_different_address: false,
                    }}
                    onSubmit={(ObjForm) => {
                      console.log(ObjForm);
                    }}
                  >
                    {({ handleSubmit, submitting }) => (
                      <form
                        action="#"
                        className="checkout"
                        method="post"
                        name="checkout"
                        onSubmit={handleSubmit}
                      >
                        <div id="customer_details" className="col2-set">
                          <div className="col-6">
                            <div className="woocommerce-billing-fields">
                              <h3>Billing Details</h3>
                              <Field
                                name="shipping_country"
                                component="select"
                                validate={required}
                              >
                                {({ input, meta }) => (
                                  <p
                                    id="billing_country_field"
                                    className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated"
                                  >
                                    <label
                                      className=""
                                      htmlFor="billing_country"
                                    >
                                      Civility{" "}
                                      <abbr
                                        title="required"
                                        className="required"
                                      >
                                        *
                                      </abbr>
                                    </label>
                                    <select
                                      className="country_to_state country_select"
                                      id="shipping_country"
                                      {...input}
                                    >
                                      <option>Mr</option>
                                      <option>Mlle</option>
                                      <option>Mme</option>
                                    </select>
                                    {meta.error && meta.touched && (
                                      <span className="text-danger">
                                        {meta.error}
                                      </span>
                                    )}
                                  </p>
                                )}
                              </Field>
                              <Field
                                name="billing_first_name"
                                component="input"
                                validate={required}
                              >
                                {({ input, meta }) => (
                                  <>
                                    <p
                                      id="billing_first_name_field"
                                      className="form-row form-row-first validate-required"
                                    >
                                      <label
                                        className=""
                                        htmlFor="billing_first_name"
                                      >
                                        First Name{" "}
                                        <abbr
                                          title="required"
                                          className="required"
                                        >
                                          *
                                        </abbr>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder=""
                                        id="billing_first_name"
                                        className="input-text "
                                        {...input}
                                      />
                                      {meta.error && meta.touched && (
                                        <span className="text-danger">
                                          {meta.error}
                                        </span>
                                      )}
                                    </p>
                                  </>
                                )}
                              </Field>
                              <Field
                                name="billing_last_name"
                                component="input"
                                validate={required}
                              >
                                {({ input, meta }) => (
                                  <>
                                    <p
                                      id="billing_last_name_field"
                                      className="form-row form-row-last validate-required"
                                    >
                                      <label
                                        className=""
                                        htmlFor="billing_last_name"
                                      >
                                        Last Name{" "}
                                        <abbr
                                          title="required"
                                          className="required"
                                        >
                                          *
                                        </abbr>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder=""
                                        id="billing_last_name"
                                        className="input-text "
                                        {...input}
                                      />
                                      {meta.error && meta.touched && (
                                        <span className="text-danger">
                                          {meta.error}
                                        </span>
                                      )}
                                    </p>
                                  </>
                                )}
                              </Field>
                              <Field name="billing_company" component="input">
                                {({ input }) => (
                                  <p
                                    id="billing_company_field"
                                    className="form-row form-row-wide"
                                  >
                                    <label
                                      className=""
                                      htmlFor="billing_company"
                                    >
                                      Company Name
                                    </label>

                                    <input
                                      type="text"
                                      placeholder=""
                                      id="billing_company"
                                      className="input-text "
                                      {...input}
                                    />
                                  </p>
                                )}
                              </Field>
                              <Field
                                name="billing_address_1"
                                component="input"
                                validate={required}
                              >
                                {({ input, meta }) => (
                                  <>
                                    <p
                                      id="billing_address_1_field"
                                      className="form-row form-row-wide address-field validate-required"
                                    >
                                      <label
                                        className=""
                                        htmlFor="billing_address_1"
                                      >
                                        Address  
                                        <abbr
                                          title="required"
                                          className="required"
                                        >
                                          *
                                        </abbr>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Street address"
                                        id="billing_address_1"
                                        className="input-text "
                                        {...input}
                                      />
                                      {meta.error && meta.touched && (
                                        <span className="text-danger">
                                          {meta.error}
                                        </span>
                                      )}
                                    </p>
                                  </>
                                )}
                              </Field>
                              <Field name="billing_address_2" component="input">
                                {({ input }) => (
                                  <p
                                    id="billing_address_2_field"
                                    className="form-row form-row-wide address-field"
                                  >
                                    <input
                                      type="text"
                                      placeholder="Apartment, suite, unit etc. (optional)"
                                      id="billing_address_2"
                                      className="input-text "
                                      {...input}
                                    />
                                  </p>
                                )}
                              </Field>
                              <Field
                                name="billing_city"
                                validate={required}
                                component="input"
                              >
                                {({ input, meta }) => (
                                  <p
                                    id="billing_city_field"
                                    className="form-row form-row-wide address-field validate-required"
                                    data-o_class="form-row form-row-wide address-field validate-required"
                                  >
                                    <label className="" htmlFor="billing_city">
                                      Town / City{" "}
                                      <abbr
                                        title="required"
                                        className="required"
                                      >
                                        *{" "}
                                      </abbr>
                                    </label>
                                    <input
                                      type="text"
                                      placeholder="Town / City"
                                      id="billing_city"
                                      className="input-text "
                                      {...input}
                                    />
                                    {meta.error && meta.touched && (
                                      <span className="text-danger">
                                        {meta.error}
                                      </span>
                                    )}
                                  </p>
                                )}
                              </Field>
                              <Field name="billing_state" component="input">
                                {({ input }) => (
                                  <p
                                    id="billing_state_field"
                                    className="form-row form-row-first address-field validate-state"
                                    data-o_class="form-row form-row-first address-field validate-state"
                                  >
                                    <label className="" htmlFor="billing_state">
                                      Country
                                    </label>
                                    <input
                                      type="text"
                                      id="billing_state"
                                      placeholder="State / Country"
                                      className="input-text "
                                      {...input}
                                    />
                                  </p>
                                )}
                              </Field>
                              <Field
                                name="billing_postcode"
                                validate={composeValidators(
                                  required,
                                  mustBeNumber,
                                  minLength(4)
                                )}
                                component="input"
                              >
                                {({ input, meta }) => (
                                  <p
                                    id="billing_postcode_field"
                                    className="form-row form-row-last address-field validate-required validate-postcode"
                                    data-o_class="form-row form-row-last address-field validate-required validate-postcode"
                                  >
                                    <label
                                      className=""
                                      htmlFor="billing_postcode"
                                    >
                                      Postcode{" "}
                                      <abbr
                                        title="required"
                                        className="required"
                                      >
                                        {" "}
                                        * 
                                      </abbr>
                                    </label>
                                    <input
                                      type="text"
                                      placeholder="Postcode / Zip"
                                      id="billing_postcode"
                                      className="input-text "
                                      {...input}
                                    />
                                    {meta.error && meta.touched && (
                                      <span className="text-danger">
                                        {meta.error}
                                      </span>
                                    )}
                                  </p>
                                )}
                              </Field>
                              <Field
                                name="billing_email"
                                component="input"
                                validate={composeValidators(
                                  required,
                                  validateEmail
                                )}
                              >
                                {({ input, meta }) => (
                                  <p
                                    id="billing_email_field"
                                    className="form-row form-row-first validate-required validate-email"
                                  >
                                    <label className="" htmlFor="billing_email">
                                      Email Address{" "}
                                      <abbr
                                        title="required"
                                        className="required"
                                      >
                                        *
                                      </abbr>
                                               
                                    </label>
                                    <input
                                      type="text"
                                      placeholder=""
                                      id="billing_email"
                                      className="input-text "
                                      {...input}
                                    />
                                    {meta.error && meta.touched && (
                                      <span className="text-danger">
                                        {meta.error}
                                      </span>
                                    )}
                                  </p>
                                )}
                              </Field>
                              <Field
                                component="input"
                                name="billing_phone"
                                validate={composeValidators(
                                  required,
                                  mustBeNumber,
                                  minLength(10)
                                )}
                              >
                                {({ input, meta }) => (
                                  <p
                                    id="billing_phone_field"
                                    className="form-row form-row-last validate-required validate-phone"
                                  >
                                    <label className="" htmlFor="billing_phone">
                                      Phone{" "}
                                      <abbr
                                        title="required"
                                        className="required"
                                      >
                                        *
                                      </abbr>
                                    </label>
                                    <input
                                      type="text"
                                      placeholder=""
                                      id="billing_phone"
                                      className="input-text "
                                      {...input}
                                    />
                                    {meta.error && meta.touched && (
                                      <span className="text-danger">
                                        {meta.error}
                                      </span>
                                    )}
                                  </p>
                                )}
                              </Field>
                              <div className="clear"></div>
                            </div>
                          </div>

                          <div className="col-6">
                            <div className="woocommerce-shipping-fields">
                              <h3 id="ship-to-different-address">
                                <label
                                  className="checkbox"
                                  htmlFor="ship-to-different-address-checkbox"
                                >
                                  Ship to a different address?
                                </label>
                                <Field
                                  component="input"
                                  name="ship_to_different_address"
                                  type="checkbox"
                                  onClick={handleSelectDifferentAdress}
                                  id="ship-to-different-address-checkbox"
                                />
                              </h3>
                              {differentAdress && (
                                <div
                                  className="shipping_address"
                                  style={{ display: "block" }}
                                >
                                  <Field
                                    name="shipping_country"
                                    component="select"
                                  >
                                    {({ input, meta }) => (
                                      <p
                                        id="shipping_country_field"
                                        className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated"
                                      >
                                        <label
                                          className=""
                                          htmlFor="shipping_country"
                                        >
                                          Civility{" "}
                                          <abbr
                                            title="required"
                                            className="required"
                                          >
                                            *
                                          </abbr>
                                        </label>
                                        <select
                                          className="country_to_state country_select"
                                          id="shipping_country"
                                          {...input}
                                        >
                                          <option value="AX">Mr</option>
                                          <option value="AF">Mlle</option>
                                          <option value="AF">Mme</option>
                                        </select>
                                        {meta.error && meta.touched && (
                                          <span className="text-danger">
                                            {meta.error}
                                          </span>
                                        )}
                                      </p>
                                    )}
                                  </Field>
                                  <Field
                                    name="shipping_first_name"
                                    component="input"
                                    validate={required}
                                  >
                                    {({ input, meta }) => (
                                      <p
                                        id="shipping_first_name_field"
                                        className="form-row form-row-first validate-required"
                                      >
                                        <label
                                          className=""
                                          htmlFor="shipping_first_name"
                                        >
                                          First Name{" "}
                                          <abbr
                                            title="required"
                                            className="required"
                                          >
                                            *
                                          </abbr>
                                        </label>
                                        <input
                                          type="text"
                                          placeholder=""
                                          id="shipping_first_name"
                                          className="input-text "
                                          {...input}
                                        />
                                        {meta.error && meta.touched && (
                                          <span className="text-danger">
                                            {meta.error}
                                          </span>
                                        )}
                                      </p>
                                    )}
                                  </Field>
                                  <Field
                                    name="shipping_last_name_field"
                                    component="input"
                                    validate={required}
                                  >
                                    {({ input, meta }) => (
                                      <>
                                        <p
                                          id="shipping_last_name_field"
                                          className="form-row form-row-last validate-required"
                                        >
                                          <label
                                            className=""
                                            htmlFor="shipping_last_name"
                                          >
                                            Last Name{" "}
                                            <abbr
                                              title="required"
                                              className="required"
                                            >
                                              *
                                            </abbr>
                                          </label>
                                          <input
                                            type="text"
                                            placeholder=""
                                            id="shipping_last_name"
                                            className="input-text "
                                            {...input}
                                          />
                                          {meta.error && meta.touched && (
                                            <span className="text-danger">
                                              {meta.error}
                                            </span>
                                          )}
                                        </p>
                                      </>
                                    )}
                                  </Field>
                                  <div className="clear"></div>
                                  <Field
                                    name="shipping_company"
                                    component="input"
                                  >
                                    {({ input }) => (
                                      <p
                                        id="shipping_company_field"
                                        className="form-row form-row-wide"
                                      >
                                        <label
                                          className=""
                                          htmlFor="shipping_company"
                                        >
                                          Company Name
                                        </label>

                                        <input
                                          type="text"
                                          placeholder=""
                                          id="shipping_company"
                                          className="input-text "
                                          {...input}
                                        />
                                      </p>
                                    )}
                                  </Field>
                                  <Field
                                    name="shipping_address_1"
                                    component="input"
                                    validate={required}
                                  >
                                    {({ input, meta }) => (
                                      <>
                                        <p
                                          id="shipping_address_1_field"
                                          className="form-row form-row-wide address-field validate-required"
                                        >
                                          <label
                                            className=""
                                            htmlFor="shipping_address_1"
                                          >
                                            Address  
                                            <abbr
                                              title="required"
                                              className="required"
                                            >
                                              *
                                            </abbr>
                                          </label>
                                          <input
                                            type="text"
                                            placeholder="Street address"
                                            id="billing_address_1"
                                            className="input-text "
                                            {...input}
                                          />
                                          {meta.error && meta.touched && (
                                            <span className="text-danger">
                                              {meta.error}
                                            </span>
                                          )}
                                        </p>
                                      </>
                                    )}
                                  </Field>
                                  <Field
                                    name="shipping_address_2"
                                    component="input"
                                  >
                                    {({ input }) => (
                                      <p
                                        id="shipping_address_2_field"
                                        className="form-row form-row-wide address-field"
                                      >
                                        <input
                                          type="text"
                                          placeholder="Apartment, suite, unit etc. (optional)"
                                          id="billing_address_2"
                                          className="input-text "
                                          {...input}
                                        />
                                      </p>
                                    )}
                                  </Field>
                                  <Field
                                    name="shipping_city"
                                    validate={required}
                                    component="input"
                                  >
                                    {({ input, meta }) => (
                                      <p
                                        id="shipping_city_field"
                                        className="form-row form-row-wide address-field validate-required"
                                        data-o_class="form-row form-row-wide address-field validate-required"
                                      >
                                        <label
                                          className=""
                                          htmlFor="shipping_city"
                                        >
                                          Town / City{" "}
                                          <abbr
                                            title="required"
                                            className="required"
                                          >
                                            *{" "}
                                          </abbr>
                                        </label>
                                        <input
                                          type="text"
                                          placeholder="Town / City"
                                          id="shipping_city"
                                          className="input-text "
                                          {...input}
                                        />
                                        {meta.error && meta.touched && (
                                          <span className="text-danger">
                                            {meta.error}
                                          </span>
                                        )}
                                      </p>
                                    )}
                                  </Field>
                                  <Field
                                    name="shipping_state"
                                    component="input"
                                  >
                                    {({ input }) => (
                                      <p
                                        id="shipping_state_field"
                                        className="form-row form-row-first address-field validate-state"
                                        data-o_class="form-row form-row-first address-field validate-state"
                                      >
                                        <label
                                          className=""
                                          htmlFor="shipping_state"
                                        >
                                          Country
                                        </label>
                                        <input
                                          type="text"
                                          id="shipping_state_field"
                                          placeholder="State / Country"
                                          className="input-text "
                                          {...input}
                                        />
                                      </p>
                                    )}
                                  </Field>
                                  <Field
                                    name="shipping_postcode"
                                    validate={composeValidators(
                                      required,
                                      mustBeNumber,
                                      minLength(4)
                                    )}
                                    component="input"
                                  >
                                    {({ input, meta }) => (
                                      <p
                                        id="shipping_postcode_field"
                                        className="form-row form-row-last address-field validate-required validate-postcode"
                                        data-o_class="form-row form-row-last address-field validate-required validate-postcode"
                                      >
                                        <label
                                          className=""
                                          htmlFor="shipping_postcode"
                                        >
                                          Postcode{" "}
                                          <abbr
                                            title="required"
                                            className="required"
                                          >
                                            {" "}
                                            * 
                                          </abbr>
                                        </label>
                                        <input
                                          type="text"
                                          placeholder="Postcode / Zip"
                                          id="shipping_postcode"
                                          className="input-text "
                                          {...input}
                                        />
                                        {meta.error && meta.touched && (
                                          <span className="text-danger">
                                            {meta.error}
                                          </span>
                                        )}
                                      </p>
                                    )}
                                  </Field>
                                  <div className="clear"></div>
                                </div>
                              )}

                              <Field component="textarea" name="order_comments">
                                {({ input }) => (
                                  <p
                                    id="order_comments_field"
                                    className="form-row notes"
                                  >
                                    <label
                                      className=""
                                      htmlFor="order_comments"
                                    >
                                      Order Notes
                                    </label>
                                    <textarea
                                      // cols="5"
                                      // rows="2"
                                      placeholder="Notes about your order, e.g. special notes for delivery."
                                      id="order_comments"
                                      className="input-text "
                                      {...input}
                                    ></textarea>
                                  </p>
                                )}
                              </Field>
                            </div>
                          </div>
                        </div>
                        <h3 id="order_review_heading">Your order</h3>
                        <OrderCheckout />

                        <div id="payment">
                          <ul className="payment_methods methods">
                            <li className="payment_method_bacs">
                              <label htmlFor="payment_method_bacs">
                                <Field
                                  component="input"
                                  name="payment_method_bacs"
                                  value="payment_method_bacs"
                                  type="radio"
                                  id="payment_method_bacs"
                                  checked={order === "payment_method_bacs"}
                                  onChange={handleSelectOrder}
                                  validate={required}
                                />{" "}
                                Direct Bank Transfer
                                {/* {({ meta }) => (
                                  {meta.error && meta.touched && (
                                          <span className="text-danger">
                                            {meta.error}
                                          </span>
                                        )}
                               )} */}
                              </label>

                              <div className="payment_box payment_method_bacs">
                                <p>
                                  Make your payment directly into our bank
                                  account. Please use your Order ID as the
                                  payment reference. Your order won’t be shipped
                                  until the funds have cleared in our account.
                                </p>
                              </div>
                            </li>
                            <li className="payment_method_cheque">
                              <label htmlFor="payment_method_cheque">
                                <Field
                                  component="input"
                                  name="payment_method_cheque"
                                  value="payment_method_cheque"
                                  type="radio"
                                  id="payment_method_cheque"
                                  checked={order === "payment_method_cheque"}
                                  onChange={handleSelectOrder}
                                  validate={required}
                                />{" "}
                                Cheque Payment{" "}
                              </label>
                              {order === "payment_method_cheque" && (
                                <div className="payment_box payment_method_cheque">
                                  <p>
                                    Please send your cheque to Store Name, Store
                                    Street, Store Town, Store State / County,
                                    Store Postcode.
                                  </p>
                                </div>
                              )}
                            </li>
                            <li className="payment_method_paypal">
                              <label htmlFor="payment_method_paypal">
                                <Field
                                  component="input"
                                  name="payment_method_paypal"
                                  value="payment_method_paypal"
                                  type="radio"
                                  id="payment_method_paypal"
                                  checked={order === "payment_method_paypal"}
                                  onChange={handleSelectOrder}
                                />{" "}
                                PayPal{" "}
                                <img
                                  alt="PayPal Acceptance Mark"
                                  src="https://www.paypalobjects.com/webstatic/mktg/Logo/AM_mc_vs_ms_ae_UK.png"
                                />
                                <a
                                  title="What is PayPal?"
                                  className="about_paypal"
                                  href="https://www.paypal.com/gb/webapps/mpp/paypal-popup"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  What is PayPal?
                                </a>
                              </label>
                              {order === "payment_method_paypal" && (
                                <div className="payment_box payment_method_paypal">
                                  <p>
                                    Pay via PayPal, you can pay with your credit
                                    card if you don’t have a PayPal account.
                                  </p>
                                </div>
                              )}
                            </li>
                          </ul>
                        </div>
                        <div className="form-row place-order">
                          <input
                            type="submit"
                            data-value="Place order"
                            id="place_order"
                            name="woocommerce_checkout_place_order"
                            className="button alt"
                            disabled={submitting}
                            value="Place order"
                            style={{
                              background: "none repeat scroll 0 0 #5a88ca",
                              border: "medium none",
                              color: "#fff",
                              padding: "11px 20px",
                              textTransform: "uppercase",
                            }}
                          />
                        </div>
                        <div className="clear"></div>
                      </form>
                    )}
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
