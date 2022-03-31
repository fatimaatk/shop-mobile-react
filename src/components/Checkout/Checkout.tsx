import React from "react";
import { Form, Field, useField } from "react-final-form";
import OrderCheckout from "./OrderCheckout";

const Checkout = () => {
  const required = (value: string | number) =>
    value ? undefined : "This field is required.";

  const mustBeNumber = (value: any) =>
    isNaN(value) ? "Must be a number" : undefined;

  const mustBeText = (value: any) =>
    String(value) ? "Must be a text" : undefined;

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
                                      <option defaultValue="AX">Mr</option>
                                      <option defaultValue="AF">Mlle</option>
                                      <option defaultValue="AF">Mme</option>
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
                                        defaultValue=""
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
                                        defaultValue=""
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
                                      defaultValue=""
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
                                        defaultValue=""
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
                                      defaultValue=""
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
                                validate={composeValidators(
                                  required,
                                  mustBeText
                                )}
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
                                      defaultValue=""
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
                                      defaultValue=""
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
                                      defaultValue=""
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
                                      defaultValue=""
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
                                      defaultValue=""
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
                              <Field
                                component="input"
                                name="ship_to_different_address"
                              >
                                {({ input }) => (
                                  <h3 id="ship-to-different-address">
                                    <label
                                      className="checkbox"
                                      htmlFor="ship-to-different-address-checkbox"
                                    >
                                      Ship to a different address?
                                    </label>
                                    <input
                                      type="checkbox"
                                      className="input-checkbox"
                                      id="ship-to-different-address-checkbox"
                                      {...input}
                                    />
                                  </h3>
                                )}
                              </Field>
                            </div>
                          </div>
                        </div>
                        <div className="form-row place-order">
                          <input
                            type="submit"
                            data-value="Place order"
                            defaultValue="Place order"
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
